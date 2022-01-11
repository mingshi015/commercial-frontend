import React from 'react'
import GlobalContext from '../context/GlobalContext'
import { Box, Typography, TypographyProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import DIQHeader from '../components/DIQHeader'
import DIQLiveHelp from '../components/DIQLiveHelp'
import CheckIcon from '@mui/icons-material/Check'
import LoopIcon from '@mui/icons-material/Loop'
import { setValues } from '../api/me'

interface StateTypographyProps extends TypographyProps {
  state?: 'loading' | 'checked' | ''
}

const useStyles = makeStyles((theme) => ({
  animatedItem: {
    animation: '$effect 2000ms linear infinite'
  },
  '@keyframes effect': {
    '0%': {
      transform: 'rotate(0deg)'
    },
    '100%': {
      transform: 'rotate(360deg)'
    }
  }
}))

const StateTypography = ({ state, ...props }: StateTypographyProps) => {
  const classes = useStyles()

  let StateIcon

  switch (state) {
    case 'checked':
      StateIcon = CheckIcon
      break

    case 'loading':
      StateIcon = LoopIcon
      break

    default:
      StateIcon = LoopIcon
  }

  return (
    <Box display='flex' flexDirection='row' color='white'>
      <StateIcon
        fontSize='medium'
        visibility={state ? 'initial' : 'hidden'}
        sx={{ mr: 2 }}
        className={state === 'loading' ? classes.animatedItem : ''}
      />

      <Typography variant='body1' alignSelf='center' sx={{ fontWeight: 500 }} {...props} />
    </Box>
  )
}

const Checking = () => {
  const gContext = React.useContext(GlobalContext)

  const [step, setStep] = React.useState(0)

  React.useEffect(() => {
    if (step === 6) {
      setValues({ step: gContext.step + 1 })
      gContext.setStep((prev) => prev + 1)
      return
    }
    setTimeout(() => setStep((prev) => prev + 1), 300)
  }, [step])

  const getState = (index: number) => {
    if (index < step) return 'checked'
    if (index === step) return 'loading'
    return ''
  }

  return (
    <Box width={1} height='100vh' display='flex' flexDirection='column' sx={{ minWidth: 200 }}>
      <DIQHeader />

      <Box
        width={1}
        bgcolor='primary.main'
        display='flex'
        flexDirection='column'
        alignItems='center'
        flex='1 1 0'
        px={{ xs: 3, sm: 7, md: 10.5 }}
        py={{ xs: 7, sm: 9, md: 10.5 }}
      >
        <Box width={{ xs: 0.9, sm: 0.8, md: 0.6, lg: 0.5 }} height={1} display='flex' flexDirection='column' gap={8}>
          <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
            This should only take a moment. We’re checking the feasibility of solar for your property...
          </Typography>

          <Box display='flex' flexDirection='column' gap={2}>
            <StateTypography state={getState(0)}>Analyzing your property using satellite imagry</StateTypography>

            <StateTypography state={getState(1)}>Calculating shading and solar availability</StateTypography>

            <StateTypography state={getState(2)}>Sizing a solar panel system to fit your needs</StateTypography>

            <StateTypography state={getState(3)}>Checking for local incentives</StateTypography>

            <StateTypography state={getState(4)}>Calculating financials and savings information</StateTypography>
          </Box>
        </Box>
      </Box>

      <DIQLiveHelp />
    </Box>
  )
}

export default Checking
