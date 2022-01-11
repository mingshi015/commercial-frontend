import React from 'react'
import { LinearProgress, LinearProgressProps, linearProgressClasses, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

const defaultStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.primary.main
    }
  }
}))

const secondaryStyles = makeStyles((theme: Theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800]
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#ec008c'
    }
  }
}))

interface BorderLinearProgressProps extends LinearProgressProps {
  kind?: 'default' | 'primary' | 'secondary' | null
}

const BorderLinearProgress = ({ className, kind, ...props }: BorderLinearProgressProps) => {
  return (
    <LinearProgress
      className={clsx(className, kind === 'secondary' ? secondaryStyles().root : defaultStyles().root)}
      {...props}
    />
  )
}

export default BorderLinearProgress
