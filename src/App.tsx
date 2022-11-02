// plugins
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// imports
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// components
import Header from './components/Header/header.component';
import DefaultLayout from './layouts/Default/default.layout';
import NotFound from './pages/NotFound/not-found.page';
import MainPage from './pages/Main/main.page';
import SinglePoscast from './pages/SinglePodcast/single-podcast.page';
// style

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<MainPage />} />
            <Route path='/podcast/:id' element={<SinglePoscast />} />
            <Route path='/*' element={<Navigate to='/notfound' replace />} />
            <Route path='notfound' element={<NotFound />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
