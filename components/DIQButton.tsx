import React from 'react'
import { Button, ButtonProps } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'

interface Props extends ButtonProps {
  kind?: 'default' | 'primary' | 'secondary' | null
}

const defaultStyles = makeStyles({
  root: {
    color: '#fff',
    boxShadow: 'none',

    border: '1px solid #fff',
    borderRadius: '50px',

    padding: '12px 24px',

    fontWeight: '900',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.005em',

    '&:hover': {
      color: '#000',
      backgroundColor: '#fff',
      boxShadow: 'none'
    }
  }
})

const secondaryStyles = makeStyles({
  root: {
    color: '#fff',
    boxShadow: 'none',

    borderRadius: '50px',

    padding: '12px 45px',

    fontWeight: '900',
    fontSize: '16px',
    lineHeight: '22px',
    letterSpacing: '0.005em',

    '&:hover': {
      boxShadow: 'none'
    }
  }
})

const DIQButton = ({ className, kind, ...props }: Props) => {
  return (
    <Button
      variant={props.variant ?? 'contained'}
      className={clsx(className, kind === 'secondary' ? secondaryStyles().root : defaultStyles().root)}
      {...props}
    />
  )
}

export default DIQButton
