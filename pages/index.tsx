import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import GlobalContext from '../context/GlobalContext'
import { load } from '../api/session'
import { getValues } from '../api/me'

const Start = dynamic(() => import('../shared/start'))
const Experience = dynamic(() => import('../shared/experience'))
const Confirm = dynamic(() => import('../shared/confirm'))
const Inform = dynamic(() => import('../shared/inform'))
const Checking = dynamic(() => import('../shared/checking'))
const Detail = dynamic(() => import('../shared/detail'))
const Contact = dynamic(() => import('../shared/contact'))
const Appointment = dynamic(() => import('../shared/appointment'))
const Bill = dynamic(() => import('../shared/bill'))

const Home: NextPage = () => {
  const gContext = React.useContext(GlobalContext)

  React.useEffect(() => {
    load()
      .then(() => {
        getValues().then((res) => {
          gContext.setStep(res?.step ?? 0)
        })
      })
      .catch(() => {
        gContext.setStep(0)
      })
  }, [])

  return (
    <>
      <Head>
        <title>DIQ Commercial</title>
        <meta name='description' content='Demand IQ For Commercial Solar' />
      </Head>

      {gContext.step === 0 && <Start />}

      {gContext.step === 1 && <Experience />}

      {gContext.step === 2 && <Confirm />}

      {gContext.step === 3 && <Inform />}

      {gContext.step === 4 && <Checking />}

      {gContext.step === 5 && <Detail />}

      {gContext.step === 6 && <Contact />}

      {gContext.step === 7 && <Appointment />}

      {gContext.step === 8 && <Bill />}
    </>
  )
}

export default Home
