import React from 'react'
import { Box, Typography } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import SportsBarIcon from '@mui/icons-material/SportsBar'
import WindowIcon from '@mui/icons-material/Window'
import BatteryChargingFullOutlinedIcon from '@mui/icons-material/BatteryChargingFullOutlined'
import SavingsIcon from '@mui/icons-material/Savings'
import PaidIcon from '@mui/icons-material/Paid'
import CloudOffIcon from '@mui/icons-material/CloudOff'
import WaterIcon from '@mui/icons-material/Water'
import OpacityIcon from '@mui/icons-material/Opacity'
import BuildIcon from '@mui/icons-material/Build'
import DIQLinearProgress from '../components/DIQLinearProgress'

export const CARD_PROPS = [
  {},

  {
    title: 'Your Property with solar',
    menus: [
      {
        name: 'Sunlight',
        Icon: <LightModeIcon sx={{ fontSize: 60, color: '#f2c94c' }} />,
        content: (
          <Typography>
            Based on what we know, you have
            <Typography variant='h2' fontWeight={700}>
              1,703
            </Typography>
            hours of usable sunlight per year on average.
          </Typography>
        )
      },
      {
        name: 'Sq.feet',
        Icon: <SportsBarIcon sx={{ fontSize: 60, color: '#6fcf97' }} />,
        content: (
          <Typography>
            You have about
            <Typography variant='h2' fontWeight={700}>
              1,028
            </Typography>
            square feet of roof to work with.
          </Typography>
        )
      },
      {
        name: 'Panels',
        Icon: <WindowIcon sx={{ fontSize: 60, color: '#828282' }} />,
        content: (
          <Typography>
            That’s enough room for
            <Typography variant='h2' fontWeight={700}>
              20
            </Typography>
            solar panels to power your building.
          </Typography>
        )
      },
      {
        name: 'System',
        Icon: <BatteryChargingFullOutlinedIcon sx={{ fontSize: 60, color: '#2f80ed' }} />,
        content: (
          <Typography>
            That would be a
            <Typography variant='h2' fontWeight={700}>
              10kW
            </Typography>
            system size for energy production of 1028.
          </Typography>
        )
      }
    ]
  },

  {
    title: 'Electrical cost vs. solar savings',
    menus: [
      {
        name: 'Cost',
        content: (
          <Box display='flex' flexDirection='column' gap={3} width={1}>
            <Box display='flex' flexDirection='column' gap={1}>
              <Typography>
                <strong>$0.7</strong> per kW on grid
              </Typography>

              <DIQLinearProgress variant='determinate' kind='secondary' value={60} />
            </Box>

            <Box display='flex' flexDirection='column' gap={1}>
              <Typography>
                <strong>$0.5</strong> per kW with solar
              </Typography>

              <DIQLinearProgress variant='determinate' value={30} />
            </Box>
          </Box>
        )
      },
      {
        name: 'Annual Savings',
        Icon: <SavingsIcon sx={{ fontSize: 60, color: '#9b51e0' }} />,
        content: (
          <Typography>
            That’s over
            <Typography variant='h2' fontWeight={700}>
              $36,000
            </Typography>
            in annual savings.
          </Typography>
        )
      },
      {
        name: 'Lifetime Savings',
        Icon: <PaidIcon sx={{ fontSize: 60, color: '#219653' }} />,
        content: (
          <Typography>
            That equals more than
            <Typography variant='h2' fontWeight={700}>
              $32,000,000
            </Typography>
            in savings over the lifetime of the system.
          </Typography>
        )
      }
    ]
  },

  {
    title: 'Environment with solar',
    menus: [
      {
        name: 'Polution',
        Icon: <CloudOffIcon sx={{ fontSize: 60, color: '#eb5757' }} />,
        content: (
          <Typography>
            With this system you would avoid
            <Typography variant='h2' fontWeight={700}>
              1,028
            </Typography>
            tons of C02 pollution.
          </Typography>
        )
      },
      {
        name: 'Demand',
        Icon: <WaterIcon sx={{ fontSize: 60, color: '#56ccf2' }} />,
        content: (
          <Typography>
            With this system you would have
            <Typography variant='h2' fontWeight={700}>
              95%
            </Typography>
            of electricity demands met by renewables.
          </Typography>
        )
      },
      {
        name: 'Usage',
        Icon: <OpacityIcon sx={{ fontSize: 60, color: '#2f80ed' }} />,
        content: (
          <Typography>
            With this system you would produce
            <Typography variant='h2' fontWeight={700}>
              1,028
            </Typography>
            gallons of reduced water usage.
          </Typography>
        )
      },
      {
        name: 'Jobs',
        Icon: <BuildIcon sx={{ fontSize: 60, color: '#9b51e0' }} />,
        content: (
          <Typography>
            With this system
            <Typography variant='h2' fontWeight={700}>
              1,028
            </Typography>
            jobs would be created.
          </Typography>
        )
      }
    ]
  }
]
