/* eslint-disable camelcase */
import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import parse from 'autosuggest-highlight/parse'
import throttle from 'lodash/throttle'
import { Loader } from '@googlemaps/js-api-loader'

const autocompleteService = { current: null }

interface MainTextMatchedSubstrings {
  offset: number
  length: number
}
interface StructuredFormatting {
  main_text: string
  secondary_text: string
  main_text_matched_substrings: readonly MainTextMatchedSubstrings[]
}
interface PlaceType {
  description: string
  structured_formatting: StructuredFormatting
}

interface DIQPlacesAutocompleteInterface {
  apiKey: string
  onChange?: any
}

const DIQPlacesAutocomplete = ({ apiKey, onChange }: DIQPlacesAutocompleteInterface) => {
  const [value, setValue] = React.useState<PlaceType | null>(null)
  const [inputValue, setInputValue] = React.useState('')
  const [options, setOptions] = React.useState<readonly PlaceType[]>([])

  const [scriptLoading, setScriptLoading] = React.useState(false)
  const [scriptLoaded, setScriptLoaded] = React.useState(false)

  const loader = new Loader({
    apiKey,
    version: 'weekly',
    libraries: ['drawing', 'geometry', 'places', 'visualization']
  })

  const fetch = React.useMemo(
    () =>
      throttle((request: { input: string }, callback: (results?: readonly PlaceType[]) => void) => {
        ; (autocompleteService.current as any).getPlacePredictions(
          { ...request, componentRestrictions: { country: ['us', 'pr'] } },
          callback
        )
      }, 200),
    []
  )

  React.useEffect(() => {
    if (scriptLoaded) return
    if (scriptLoading) return

    loader
      .load()
      .then(() => setScriptLoaded(true))
      .catch((e) => {
        console.error(e)
      })

    setScriptLoading(true)
  })

  React.useEffect(() => {
    let active = true

    if (!autocompleteService.current && (window as any).google) {
      autocompleteService.current = new (window as any).google.maps.places.AutocompleteService()
    }
    if (!autocompleteService.current) {
      return undefined
    }

    if (inputValue === '') {
      setOptions(value ? [value] : [])
      return undefined
    }

    fetch({ input: inputValue }, (results?: readonly PlaceType[]) => {
      if (active) {
        let newOptions: readonly PlaceType[] = []

        if (value) {
          newOptions = [value]
        }

        if (results) {
          newOptions = [...newOptions, ...results]
        }

        setOptions(newOptions)
      }
    })

    return () => {
      active = false
    }
  }, [value, inputValue, fetch])

  if (!scriptLoaded) {
    return <TextField label='Property address' sx={{ width: 1, height: 1 }} />
  }

  return (
    <Autocomplete
      id='google-map-demo'
      fullWidth
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.description)}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event: any, newValue: PlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options)
        setValue(newValue)
        onChange(newValue)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
      }}
      renderInput={(params) => <TextField {...params} label='Property address' fullWidth />}
      renderOption={(props, option) => {
        const matches = option.structured_formatting.main_text_matched_substrings
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [match.offset, match.offset + match.length])
        )

        return (
          <li {...props}>
            <Grid container alignItems='center'>
              <Grid item>
                <Box component={LocationOnIcon} sx={{ color: 'text.secondary', mr: 2 }} />
              </Grid>
              <Grid item xs>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400
                    }}
                  >
                    {part.text}
                  </span>
                ))}
                <Typography variant='body2' color='text.secondary'>
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        )
      }}
    />
  )
}

export default DIQPlacesAutocomplete
