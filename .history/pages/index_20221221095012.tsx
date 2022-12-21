import Head from 'next/head'
import styles from '../styles/Home.module.css'

import {Router} from 'next/router'
import Link from 'next/link'

import React, { Component } from 'react'

export class index extends Component {
  render() {
    return (
      <div className={styles.App}>
        {/* <DataContextProvider> */}
          {/* <Router> */}
          <Router>
            <Navbar />
            <Link href="/">
              <a>Shop</a>
            </Link>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </Router>
          {/* </Router> */}
        {/* </DataContextProvider> */}
        <footer>
          Copyright &copy; Chesed Kim. All Rights Reserved, except contents of
          each item on the page.
        </footer>
      </div>
    )
  }
}

export default index