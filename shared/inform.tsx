import { Box, InputAdornment, MenuItem, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import DIQHeader from '../components/DIQHeader'
import GlobalContext from '../context/GlobalContext'
import DIQTextField from '../components/DIQTextField'
import DIQSelect from '../components/DIQSelect'
import DIQLiveHelp from '../components/DIQLiveHelp'
import DIQButton from '../components/DIQButton'
import { setValues } from '../api/me'

const Inform = () => {
  const gContext = React.useContext(GlobalContext)

  const isColumn = useMediaQuery('(max-width: 450px)')

  const handleContinueBtnClick = () => {
    setValues({ step: gContext.step + 1 })
    gContext.setStep((prev) => prev + 1)
  }

  return (
    <>
      <Box width={1} height='100vh' display='flex' flexDirection='column' sx={{ minWidth: 200 }}>
        <DIQHeader />

        <Box width={1} height={0} display='flex' flexGrow={1}>
          <Box width={0.45} display={{ xs: 'none', md: 'block' }} flexGrow={1}>
            <img src='/blockmap.png' alt='Blockmap' width='100%' height='100%' />
          </Box>

          <Box
            width={0.55}
            px={{ xs: 4, sm: 6, md: 8, lg: 12 }}
            py={{ xs: 4, sm: 6, md: 8, lg: 10 }}
            display='flex'
            flexDirection='column'
            flexGrow={1}
            bgcolor='primary.main'
            sx={{ gap: 2 }}
          >
            <Typography variant='h5' color='white' pb={1.5} sx={{ fontWeight: 700 }}>
              Great! This is what we gathered.
            </Typography>

            <Box
              display='flex'
              flexDirection={isColumn ? 'column' : 'row'}
              alignItems={!isColumn ? 'center' : 'flex-start'}
              sx={{ gap: 1 }}
            >
              <Typography variant='body1' color='white' sx={{ width: 150, fontWeight: 700 }}>
                Square Footage
              </Typography>

              <DIQTextField size='small' value='1,028' sx={{ width: 180 }} />
            </Box>

            <Box
              display='flex'
              flexDirection={isColumn ? 'column' : 'row'}
              alignItems={!isColumn ? 'center' : 'flex-start'}
              sx={{ gap: 1 }}
            >
              <Typography variant='body1' color='white' sx={{ width: 150, fontWeight: 700 }}>
                Business type
              </Typography>

              <DIQSelect size='small' value='enterprise' sx={{ width: 180 }}>
                <MenuItem value='enterprise'>Enterprise</MenuItem>
                <MenuItem value='retail'>Retail</MenuItem>
              </DIQSelect>
            </Box>

            <Box
              display='flex'
              flexDirection={isColumn ? 'column' : 'row'}
              alignItems={!isColumn ? 'center' : 'flex-start'}
              sx={{ gap: 1 }}
            >
              <Typography variant='body1' color='white' sx={{ width: 150, fontWeight: 700 }}>
                Annual electric cost
              </Typography>

              <DIQTextField
                size='small'
                value='10,280'
                InputProps={{
                  startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
                sx={{ width: 180 }}
              />
            </Box>

            <Box
              display='flex'
              flexDirection={isColumn ? 'column' : 'row'}
              alignItems={!isColumn ? 'center' : 'flex-start'}
              sx={{ gap: 1 }}
            >
              <Typography variant='body1' color='white' sx={{ width: 150, fontWeight: 700 }}>
                Hours of operation
              </Typography>

              <Box display='flex' alignItems='center' sx={{ gap: 1 }}>
                <DIQSelect size='small' value='9' sx={{ width: 100 }}>
                  <MenuItem value='9'>9 am</MenuItem>
                  <MenuItem value='10'>10 am</MenuItem>
                  <MenuItem value='11'>11 am</MenuItem>
                </DIQSelect>

                <Typography variant='body1' color='white' sx={{ fontWeight: 700 }}>
                  to
                </Typography>

                <DIQSelect size='small' value='17' sx={{ width: 100 }}>
                  <MenuItem value='14'>2 pm</MenuItem>
                  <MenuItem value='15'>3 pm</MenuItem>
                  <MenuItem value='16'>4 pm</MenuItem>
                  <MenuItem value='17'>5 pm</MenuItem>
                </DIQSelect>
              </Box>
            </Box>

            <Box
              display='flex'
              flexDirection={isColumn ? 'column' : 'row'}
              alignItems={!isColumn ? 'center' : 'flex-start'}
              sx={{ gap: 1 }}
            >
              <Typography variant='body1' color='white' sx={{ width: 150, fontWeight: 700 }}>
                Roof type
              </Typography>

              <DIQSelect size='small' value='flat' sx={{ width: 180 }}>
                <MenuItem value='flat'>Flat</MenuItem>
              </DIQSelect>
            </Box>

            <Box
              display='flex'
              flexDirection={isColumn ? 'column' : 'row'}
              alignItems={!isColumn ? 'center' : 'flex-start'}
              sx={{ gap: 1 }}
            >
              <Typography variant='body1' color='white' sx={{ width: 150, fontWeight: 700 }}>
                System placement
              </Typography>

              <DIQSelect size='small' value='roof' sx={{ width: 180 }}>
                <MenuItem value='roof'>Roof</MenuItem>
              </DIQSelect>
            </Box>

            <Box display='flex' sx={{ gap: 1 }}>
              <DIQButton sx={{ minWidth: 150 }} onClick={handleContinueBtnClick}>
                Continue
              </DIQButton>
            </Box>
          </Box>
        </Box>

        <DIQLiveHelp />
      </Box>
    </>
  )
}

export default Inform
