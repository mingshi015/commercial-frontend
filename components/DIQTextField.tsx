import React from 'react'
import { TextField, TextFieldProps as MuiTextFieldProps } from '@mui/material'
import { makeStyles } from '@mui/styles'

const textFieldStyle = makeStyles({
  root: {
    color: 'white',
    fontWeight: 700,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'rgba(255, 255, 255, 0.5)',

    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.75)'
    },

    '&$focused': {
      borderColor: 'rgba(255, 255, 255, 1)'
    },

    '& .MuiInputAdornment-root .MuiTypography-root': {
      color: 'white'
    }
  },

  focused: {},

  disabled: {},

  error: {},

  notchedOutline: {
    border: 0
  }
})

const DIQTextField = (props: MuiTextFieldProps) => {
  const { variant, InputProps, ...mainProps } = props

  const textFieldClasses = textFieldStyle()

  return <TextField variant='outlined' InputProps={{ ...InputProps, classes: textFieldClasses }} {...mainProps} />
}

export default DIQTextField
