import React from 'react'
import { Box, TabProps } from '@mui/material'
import { makeStyles } from '@mui/styles'

const defaultStyles = makeStyles({
  root: {
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: 'white',
    cursor: 'pointer',
    opacity: '30%',
    transition: '0.25s',

    '&:hover': {
      opacity: '100%'
    }
  }
})

const selectedStyles = makeStyles({
  root: {
    width: '10px',
    height: '10px',
    borderRadius: '100%',
    backgroundColor: 'white',
    cursor: 'pointer',
    opacity: '100%',
    transition: '0.25s',

    '&:hover': {
      opacity: '100%'
    }
  }
})

interface DIQCircleTabProps extends TabProps {
  selected?: boolean
}

const DIQCircleTab = ({ selected, ...props }: DIQCircleTabProps) => {
  const defaultClasses = defaultStyles()
  const selectedClasses = selectedStyles()

  let classes = defaultClasses

  if (selected) classes = selectedClasses

  return <Box className={classes.root} {...props} />
}

export default DIQCircleTab
