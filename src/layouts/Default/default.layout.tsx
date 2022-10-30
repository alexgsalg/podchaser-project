// plugins
import { Outlet } from 'react-router-dom';
// imports
// components
// images
// style

const DefaultLayout = (): JSX.Element => {
  return (
    <main className='main_Layout'>
      <Outlet />
    </main>
  );
};

export default DefaultLayout;
