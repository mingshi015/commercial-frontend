import React from 'react'
import GlobalContext from '../context/GlobalContext'
import { Box, IconButton, Theme, Typography } from '@mui/material'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import DIQHeader from '../components/DIQHeader'
import DIQLiveHelp from '../components/DIQLiveHelp'
import DIQButton from '../components/DIQButton'
import DIQCircleTab from '../components/DIQCircleTab'
import ReportDialog from '../feature/ReportDialog'
import DIQCard from '../feature/DIQCard'
import { CARD_PROPS } from '../feature/DIQCardProps'
import { makeStyles } from '@mui/styles'
import { setValues } from '../api/me'

const BUTTON_CAPTION = ['', 'Get Pricing', 'Get More Details', 'Continue']

const useStyles = makeStyles((theme: Theme) => ({
  IconButton: {
    height: 'fit-content',
    color: 'white',
    alignSelf: 'center',

    '& svg': {
      fontSize: '48px'
    }
  }
}))

const Detail = () => {
  const gContext = React.useContext(GlobalContext)

  const [cardIndex, setCardIndex] = React.useState(1)
  const [reportOpen, setReportOpen] = React.useState(false)

  const classes = useStyles()

  const handleContinueBtnClick = () => {
    if (cardIndex < 3) setCardIndex((prev) => prev + 1)
    else {
      setValues({ step: gContext.step + 1 })
      gContext.setStep((prev) => prev + 1)
    }
  }

  return (
    <Box width={1} height='100vh' display='flex' flexDirection='column' sx={{ minWidth: 200 }}>
      <DIQHeader />

      <Box width={1} height={{ xs: 1, md: 0 }} display='flex' flexGrow={1}>
        <Box width={0.45} display={{ xs: 'none', md: 'block' }} flexGrow={1}>
          <img src='/solarmap.png' alt='Roof' width='100%' height='100%' />
        </Box>

        <Box
          width={0.55}
          height={1}
          px={{ xs: 10, md: 10.5 }}
          py={{ xs: 8, md: 10.5 }}
          display='flex'
          flexDirection='column'
          alignItems='center'
          flexGrow={1}
          gap={5}
          bgcolor='primary.main'
        >
          <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
            Your property is a great candidate for solar!
          </Typography>

          <Box width={1} display='flex' flexDirection='column' justifyContent='center' gap={3}>
            <Box display='flex' gap={1}>
              {cardIndex > 1 && (
                <IconButton
                  className={classes.IconButton}
                  sx={{ ml: -9 }}
                  onClick={() => setCardIndex((prev) => Math.max(prev - 1, 1))}
                >
                  <KeyboardArrowLeftIcon />
                </IconButton>
              )}

              <DIQCard key={cardIndex} {...CARD_PROPS[cardIndex]} />

              {cardIndex < 3 && (
                <IconButton
                  className={classes.IconButton}
                  sx={{ mr: -9 }}
                  onClick={() => setCardIndex((prev) => Math.min(prev + 1, 3))}
                >
                  <KeyboardArrowRightIcon />
                </IconButton>
              )}
            </Box>

            <Box display='flex' justifyContent='center' gap={1}>
              {[1, 2, 3].map((index) => (
                <DIQCircleTab key={index} selected={index === cardIndex} onClick={() => setCardIndex(index)} />
              ))}
            </Box>
          </Box>

          <Box display='flex' flexWrap='wrap' justifyContent='center' gap={2}>
            <DIQButton onClick={() => setReportOpen(true)}>Share Report</DIQButton>

            <DIQButton onClick={handleContinueBtnClick}>{BUTTON_CAPTION[cardIndex]}</DIQButton>
          </Box>
        </Box>
      </Box>

      <ReportDialog open={reportOpen} onClose={() => setReportOpen(false)} />

      <DIQLiveHelp />
    </Box>
  )
}

export default Detail
