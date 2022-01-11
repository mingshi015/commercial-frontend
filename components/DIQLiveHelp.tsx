import React from 'react'
import { Fab, Theme } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: Theme) => ({
  fab: {
    color: theme.palette.primary.main,
    backgroundColor: '#fff',

    width: '75px',
    height: '75px',

    display: 'flex',
    flexDirection: 'column',

    position: 'fixed',
    right: '36px',
    bottom: '36px',

    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'none',

    boxShadonw: 'none',

    '&:hover': {
      boxShadow: 'none'
    }
  }
}))

const DIQLiveHelp = () => {
  const classes = useStyles()

  return (
    <Fab className={classes.fab}>
      <SupportAgentIcon />
      Live Help
    </Fab>
  )
}

export default DIQLiveHelp
