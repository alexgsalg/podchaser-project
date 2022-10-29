// plugins
import { Route, Routes } from 'react-router-dom';
// context
// components
import DefaultLayout from './Layouts/Default/default.component';
import Home from './pages/Home/home.component';
// imports
// images
// styles

function App() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
