import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Router} from 'next/router'
import Link from 'next/link'

import React, { Component } from 'react'

export class index extends Component {
  render() {
    return (
      <Fragment>
      <div className={styles.App}>
        {/* <DataContextProvider> */}
          {/* <Router> */}
            {/* <Navbar /> */}
              {/* <Route path="/" element={<Shop />} /> */}
              this.props.router.push('/Shop')
              this.props.router.push('/Cart')
              <Route path="/cart" element={<Cart />} />
          {/* </Router> */}
        {/* </DataContextProvider> */}
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