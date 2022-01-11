import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import DIQHeader from '../components/DIQHeader'
import DIQLiveHelp from '../components/DIQLiveHelp'
import DIQButton from '../components/DIQButton'
import GlobalContext from '../context/GlobalContext'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined'
import { getValues, setValues } from '../api/me'

const Confirm = () => {
  const gContext = React.useContext(GlobalContext)
  const [address, setAddress] = React.useState('')

  React.useEffect(() => {
    getValues().then((res) => {
      setAddress(res.address)
    })
  }, [])

  const handleNoBtnClick = () => {
    setValues({ step: 0 })
    gContext.setStep(0)
  }

  const handleYesBtnClick = () => {
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
            px={{ xs: 4, sm: 6, md: 8, lg: 12.5 }}
            py={{ xs: 4, sm: 6, md: 8, lg: 10.5 }}
            display='flex'
            flexDirection='column'
            flexGrow={1}
            bgcolor='primary.main'
          >
            <Typography variant='h5' color='white' pb={3.5} sx={{ fontWeight: 700 }}>
              Here’s what we located.
            </Typography>

            <Grid container spacing={1} pt={3.375} pb={4}>
              <Grid item xs={12} display='flex'>
                <FmdGoodOutlinedIcon fontSize='medium' sx={{ color: 'white' }} />

                <Typography variant='body1' color='white' pb={1}>
                  {address}
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
                  Does this appear to be the right rooftop?
                </Typography>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item>
                <DIQButton sx={{ width: 150 }} onClick={handleNoBtnClick}>
                  No
                </DIQButton>
              </Grid>

              <Grid item>
                <DIQButton sx={{ width: 150 }} onClick={handleYesBtnClick}>
                  Yes
                </DIQButton>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <DIQLiveHelp />
      </Box>
    </>
  )
}

export default Confirm
