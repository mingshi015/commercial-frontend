import React from 'react'
import { Box, TextFieldProps, Typography } from '@mui/material'
import DIQHeader from '../components/DIQHeader'
import DIQLiveHelp from '../components/DIQLiveHelp'
import DIQTextField from '../components/DIQTextField'
import DIQButton from '../components/DIQButton'
import GlobalContext from '../context/GlobalContext'
import { getValues, setValues } from '../api/me'

const ContactTextField = ({ sx, ...props }: TextFieldProps) => (
  <DIQTextField {...props} sx={{ width: 1, mb: 4, ...sx }} />
)

const Contact = () => {
  const gContext = React.useContext(GlobalContext)

  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [companyName, setCompanyName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [phone, setPhone] = React.useState('')

  React.useEffect(() => {
    getValues().then((res) => {
      const { firstName, lastName, companyName, email, phone } = res

      setFirstName(firstName)
      setLastName(lastName)
      setCompanyName(companyName)
      setEmail(email)
      setPhone(phone)
    })
  }, [])

  const handleChatBtnClick = () => {
    setValues({
      firstName,
      lastName,
      companyName,
      email,
      phone,
      step: gContext.step + 1
    })
    gContext.setStep((prev) => prev + 1)
  }

  const handleSetValue = (setFunc: any) => (e: any) => {
    setFunc(e.target.value)
  }

  return (
    <>
      <Box width={1} height='100vh' display='flex' flexDirection='column' sx={{ minWidth: 200 }}>
        <DIQHeader />

        <Box
          width={1}
          bgcolor='primary.main'
          display='flex'
          flexDirection='column'
          alignItems='center'
          flex='1 1 0'
          p={10.5}
        >
          <Box
            width={{ xs: 0.7, sm: 0.6, md: 0.5, lg: 0.4, xl: 0.35 }}
            height={1}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <Typography variant='h5' color='white' sx={{ fontWeight: 700 }}>
              How do we get in touch with you about finalizing your solar quote?
            </Typography>

            <Box width={1} pt={8} pb={4}>
              <Box display='flex' flexDirection={{ xs: 'column', sm: 'column', md: 'row' }}>
                <ContactTextField
                  value={firstName}
                  placeholder='First name'
                  sx={{ mr: { xs: 0, sm: 0, md: 3 } }}
                  onChange={handleSetValue(setFirstName)}
                />

                <ContactTextField
                  value={lastName}
                  placeholder='Last name'
                  onChange={handleSetValue(setLastName)}
                />
              </Box>

              <ContactTextField
                value={companyName}
                placeholder='Company name'
                onChange={handleSetValue(setCompanyName)}
              />

              <ContactTextField
                value={email}
                placeholder='Email'
                onChange={handleSetValue(setEmail)}
              />

              <ContactTextField
                value={phone}
                placeholder='Phone'
                onChange={handleSetValue(setPhone)}
              />
            </Box>

            <DIQButton sx={{ width: 'fit-content' }} onClick={handleChatBtnClick}>
              Let&apos;s Chat!
            </DIQButton>
          </Box>
        </Box>

        <DIQLiveHelp />
      </Box>
    </>
  )
}

export default Contact
