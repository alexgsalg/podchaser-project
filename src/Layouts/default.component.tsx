import React, { Fragment } from 'react';
// plugins
import { Outlet } from 'react-router-dom';
// context
// components
import Header from '../components/Header/header.component';
// imports
// images
// styles

function DefaultLayout() {
  return (
    <Fragment>
      <Header />

      <main className='main'>
        <div className='main_container'>
          <Outlet />
        </div>
      </main>
    </Fragment>
  );
}

export default DefaultLayout;
