import Head from 'next/head'
import Image from 'next/image'

import StickyFooter from '/components/footer.js'
import ResponsiveAppBar from '/components/Appbar.js'
import Header from '/components/Header.js'
import Body from '/components/Body.js'
import Service from '/components/Service.js'
import Contact from '/components/Contact.js'

export default function Home() {
  return (
    <>
      <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>ThemeWagon</title>
      </Head>
      <ResponsiveAppBar/>
      <Header />
      <Body />
      <Service />
      <Contact />
      <StickyFooter />

      </>
  )
}

