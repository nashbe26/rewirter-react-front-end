
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing-page/landing-page';

import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import SignUpPage from './pages/signup/signup';
import SignInPage from './pages/signin/signin';
import ProfilePage from './pages/profile/profile';

function App() {

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>  
      
        <Routes>
          <Route element={<LandingPage/>} path="/"/>
          <Route element={<SignUpPage/>} path='/login' />
          <Route element={<SignInPage/>} path='/register' />
          <Route element={<ProfilePage/>} path='/profile' />
        </Routes>

      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
