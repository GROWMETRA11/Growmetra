import Footer from '../../components/scaffold/Footer'
import Header from '../../components/scaffold/header.jsx'
import React, { PropsWithChildren } from 'react'

function Layout({children}: PropsWithChildren) {
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  );
}

export default Layout