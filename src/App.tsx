// plugins
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// components
import Header from './components/Header/header.component';
import DefaultLayout from './layouts/Default/default.layout';
import MainPage from './pages/Main/main.page';
// style

// Create a client
const queryClient = new QueryClient();

// lazy load
const SinglePoscast = lazy(() => import('./pages/SinglePodcast/single-podcast.page'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<MainPage />}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<MainPage />} />
              <Route path='/podcast/:id' element={<SinglePoscast />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
