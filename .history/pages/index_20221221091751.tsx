import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { Component } from 'react'

export class index extends Component {
  render() {
    return (

            <div className="App">
      <DataContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </DataContextProvider>
      <footer>
        Copyright &copy; Chesed Kim. All Rights Reserved, except contents of
        each item on the page.
      </footer>
    </div>

    )
  }
}

export default index