import React from 'react'
import { Select, SelectProps as MuiSelectProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'

const selectStyle = makeStyles({
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
      borderColor: 'rgba(255, 255, 255, 0.75)'
    },

    '& .MuiOutlinedInput-notchedOutline': {
      border: 0
    },

    '& .MuiSvgIcon-root': {
      color: 'white'
    }
  },

  focused: {}
})

const DIQSelect = (props: MuiSelectProps) => {
  const { variant, className, IconComponent, ...mainProps } = props

  const selectClasses = selectStyle()

  return (
    <Select
      variant='outlined'
      className={clsx(selectClasses.root, className)}
      IconComponent={ExpandMoreOutlinedIcon}
      {...mainProps}
    />
  )
}

export default DIQSelect
