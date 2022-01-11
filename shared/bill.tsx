import React from 'react'
import GlobalContext from '../context/GlobalContext'
import { Box, IconButton, InputAdornment, Typography } from '@mui/material'
import PhotoIconOutlined from '@mui/icons-material/PhotoOutlined'
import CheckIcon from '@mui/icons-material/Check'
import DeleteIcon from '@mui/icons-material/Delete'
import DIQHeader from '../components/DIQHeader'
import DIQLiveHelp from '../components/DIQLiveHelp'
import DIQButton from '../components/DIQButton'
import DIQTextField from '../components/DIQTextField'
import { setValues } from '../api/me'

const Bill = () => {
  const gContext = React.useContext(GlobalContext)
  const fileUploadEl = React.useRef(null)
  const [fileName, setFileName] = React.useState('')

  const handleTextFieldClick = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation();

    (fileUploadEl?.current as any)?.click()
  }

  const handleFileUploadChange = () => {
    const value = (fileUploadEl?.current as any)?.value.split('/').pop().split('\\').pop()
    if (value) setFileName(value)
  }

  const handleDeleteBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()

    setFileName('')
  }

  const handleDoneBtnClick = () => {
    setValues({ step: 0 })
    gContext.setStep(0)
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
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          width={{ xs: 0.7, sm: 0.6, md: 0.5, lg: 0.4, xl: 0.35 }}
          gap={8}
        >
          <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
            Your appointment has been scheduled. We look forward to meeting with you on:
          </Typography>

          <Box display='flex' flexDirection='column'>
            <Typography variant='h4' color='white' sx={{ fontWeight: 400 }}>
              Monday, October 28 at 10:30 am
            </Typography>

            <Typography variant='h6' color='white' sx={{ fontWeight: 400, pt: 8, pb: 4 }}>
              For our solar expert to put together the most accurate pricing for you please provide a photo of your most
              recent utility bill.
            </Typography>

            <input
              type='file'
              accept='image/*'
              ref={fileUploadEl}
              style={{ display: 'none' }}
              onChange={handleFileUploadChange}
            />
            <DIQTextField
              value={fileName}
              InputProps={{
                readOnly: true,
                startAdornment: fileName
                  ? (
                  <InputAdornment position='start'>
                    <CheckIcon sx={{ color: 'white' }} />
                  </InputAdornment>
                    )
                  : (
                  <InputAdornment position='start'>
                    <PhotoIconOutlined sx={{ color: 'white' }} />
                  </InputAdornment>
                    ),
                endAdornment: fileName && (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleDeleteBtnClick}>
                      <DeleteIcon sx={{ color: 'white' }} />
                    </IconButton>
                  </InputAdornment>
                )
              }}
              placeholder='Add photo'
              onClick={handleTextFieldClick}
            />
          </Box>

          <DIQButton sx={{ width: 160 }} onClick={handleDoneBtnClick}>
            Done
          </DIQButton>
        </Box>

        <DIQLiveHelp />
      </Box>
    </Box>
  )
}

export default Bill
