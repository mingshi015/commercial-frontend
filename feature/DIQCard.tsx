import React from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Tab,
  TabProps,
  Theme
} from '@mui/material'
import { withStyles } from '@mui/styles'

interface VerticalTabProps extends TabProps {
  selected?: boolean
}

const VerticalTab = withStyles((theme: Theme) => ({
  root: {
    alignItems: 'flex-start',
    textAlign: 'start',
    fontWeight: 400,
    textTransform: 'none',
    paddingLeft: 0
  },
  selected: {
    color: `${theme.palette.primary.main}`,
    fontWeight: 700,
    borderBottom: `2px solid ${theme.palette.primary.main}`
  }
}))((props: VerticalTabProps) => <Tab {...props} />)

interface DIQCardProps {
  title?: string
  menus?: any
  Icon?: any
}

const DIQCard = (props: DIQCardProps) => {
  const { title, menus } = props

  const [tabIndex, setTabIndex] = React.useState(0)
  const [calcDlgOpen, setCalcDlgOpen] = React.useState(false)

  const closeCalcDlg = () => setCalcDlgOpen(false)

  return (
    <>
      <Card sx={{ width: 1, minHeight: 300 }}>
        <CardHeader title={title} titleTypographyProps={{ variant: 'h6' }} />

        <CardContent sx={{ display: 'flex', flexDirection: 'row', gap: 6 }}>
          <Box width='75px' display='flex' flexDirection='column'>
            {menus.map((menu: object, index: number) => (
              <VerticalTab
                key={index}
                value={index}
                label={(menu as any)?.name}
                selected={index === tabIndex}
                onClick={() => setTabIndex(index)}
              />
            ))}
          </Box>

          <Box width={1} display='flex' flexDirection='row' flexWrap='wrap' my='auto' gap={4}>
            {menus[tabIndex].Icon}

            <Box flexGrow={1} display='flex' flexDirection='column' gap={2} sx={{ color: '#4f4f4f' }}>
              {menus[tabIndex].content}

              <Link href='#' underline='hover' onClick={() => setCalcDlgOpen(true)}>
                Show me how it’s calculated
              </Link>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Dialog open={calcDlgOpen} onClose={closeCalcDlg}>
        <DialogTitle>How we calculate this information:</DialogTitle>

        <DialogContent>
          <DialogContentText>
            The total power emitted by the sun is calculated by multiplying the emitted power density by the surface
            area of the sun. The sun has a radius of 695 x 106 m 4 giving a surface area of 6.07 x 1018 m2. Thus the
            total power output of the sun is 64 x 10 times 6.09 x 1018 m2, which is equal to 3.9 x 1026 watts.
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={closeCalcDlg}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DIQCard
