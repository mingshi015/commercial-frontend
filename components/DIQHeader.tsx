import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material'
import GlobalContext from '../context/GlobalContext'
import { setValues } from '../api/me'

const DIQHeader = () => {
  const gContext = React.useContext(GlobalContext)

  const visibleText = useMediaQuery('(min-width: 270px)')

  const handleLogoClick = () => {
    setValues({ step: 0 })
    gContext.setStep(0)
  }

  return (
    <Box
      width={1}
      height={80}
      px={{ xs: 2.5, sm: 3.75, md: 6.25 }}
      py={2.5}
      display='flex'
      alignItems='center'
      onClick={handleLogoClick}
      sx={{ cursor: 'pointer' }}
    >
      <img src='/logo.png' alt='Solar Company Logo' style={{ maxWidth: 40 }} />

      {visibleText && (
        <Typography variant='body1' sx={{ paddingLeft: 2.5, fontWeight: 900 }}>
          Solar Company
        </Typography>
      )}
    </Box>
  )
}

export default DIQHeader
