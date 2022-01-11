import * as React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import defaultTheme from '../styles/themes/defaultTheme'
import createEmotionCache from '../utility/createEmotionCache'
import { GlobalContextProvider } from '../context/GlobalContext'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface DIQCommercialAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function DIQCommercialApp (props: DIQCommercialAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={defaultTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <GlobalContextProvider>
            <Component {...pageProps} />
          </GlobalContextProvider>
        </ThemeProvider>
      </LocalizationProvider>
    </CacheProvider>
  )
}
