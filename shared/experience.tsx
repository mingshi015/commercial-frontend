import React from 'react'
import { Box, Button, Theme, Typography } from '@mui/material'
import DIQHeader from '../components/DIQHeader'
import { createStyles, makeStyles } from '@mui/styles'
import GlobalContext from '../context/GlobalContext'
import DIQLiveHelp from '../components/DIQLiveHelp'
import { setValues } from '../api/me'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      border: '2px solid white',
      color: 'white',
      width: '150px',
      height: '120px',
      margin: '32px',
      fontSize: '18px',
      textTransform: 'none',

      '&:hover': {
        backgroundColor: 'white',
        color: theme.palette.primary.main
      }
    }
  })
)

const Experience = () => {
  const gContext = React.useContext(GlobalContext)
  const classes = useStyles()

  const handleBtnClick = (experience: string) => () => {
    setValues({ experience, step: gContext.step + 1 })
    gContext.setStep((prev) => prev + 1)
  }

  return (
    <>
      <Box width={1} height='100vh' display='flex' flexDirection='column' sx={{ minWidth: 200 }}>
        <DIQHeader />

        <Box
          width={1}
          bgcolor='primary.main'
          display='flex'
          flexDirection='column'
          alignItems='center'
          flex='1 1 0'
          p={10.5}
        >
          <Box width={0.7} height={1} display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
              Tell us a bit more about your role so we can personalize your experience...
            </Typography>

            <Box
              pt={4}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}
            >
              <Button className={classes.button} onClick={handleBtnClick('owner')}>
                Owner
              </Button>

              <Button className={classes.button} onClick={handleBtnClick('architect')}>
                Architect
              </Button>

              <Button className={classes.button} onClick={handleBtnClick('consultant')}>
                Consultant
              </Button>

              <Button className={classes.button} onClick={handleBtnClick('facilities manager')}>
                Facilities Manager
              </Button>

              <Button className={classes.button} onClick={handleBtnClick('other')}>
                Other
              </Button>
            </Box>
          </Box>
        </Box>

        <DIQLiveHelp />
      </Box>
    </>
  )
}

export default Experience
