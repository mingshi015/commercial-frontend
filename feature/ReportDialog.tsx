import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography
} from '@mui/material'

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

interface ReportDialogProps {
  open: boolean
  onClose: () => void
}

const ReportDialog = (props: ReportDialogProps) => {
  const { open, onClose } = props

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <Typography variant='h6' sx={{ fontWeight: 700 }}>
          Share this content via:
        </Typography>

        <FormControl component='fieldset'>
          <RadioGroup defaultValue='email' sx={{ gap: 1 }}>
            <FormControlLabel value='email' control={<Radio />} label='Email' />

            <FormControlLabel value='sms' control={<Radio />} label='SMS Message' />
          </RadioGroup>
        </FormControl>

        <TextField
          placeholder='email@domain.com'
          autoFocus
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <EmailOutlinedIcon sx={{ color: 'black' }} />
              </InputAdornment>
            )
          }}
          sx={{ minWidth: '300px' }}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>No Thanks</Button>

        <Button onClick={onClose}>Send Code</Button>
      </DialogActions>
    </Dialog>
  )
}

export default ReportDialog
