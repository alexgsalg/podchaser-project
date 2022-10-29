import React, { Fragment } from 'react';
// plugins
import { Outlet } from 'react-router-dom';
// context
// components
import Header from '../../components/Header/header.component';
// imports
// images
// styles
import styles from './default.module.css';

function DefaultLayout() {
  return (
    <Fragment>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default DefaultLayout;
