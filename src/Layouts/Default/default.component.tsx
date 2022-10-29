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
        <div className={styles.main_container}>
          <Outlet />
        </div>
      </main>
    </Fragment>
  );
}

export default DefaultLayout;
