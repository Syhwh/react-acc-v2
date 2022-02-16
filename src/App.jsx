import React from 'react';
import './style.css';
import ThemeProvider from './components/theme/ThemeProvider';

import { MainPage } from './Pages/MainPage';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <MainPage />
      </ThemeProvider>
    </>
  );
}
