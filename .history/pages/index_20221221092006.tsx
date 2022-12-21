import Head from 'next/head'
import styles from '../styles/Home.module.css'

import React, { Component, Fragment } from 'react'

export class index extends Component {
  render() {
    return (
      <Fragment>
      <div className={styles.App}>
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
      </Fragment>
    )
  }
}

export default index