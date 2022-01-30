import { Box } from '@chakra-ui/react';
import React from 'react';
import Header from './components/Header';
import { Providers } from './context/providers';

function App() {
  return (
    <Providers>
      <Box minH="100vh">
        <Header />
      </Box>
    </Providers>
  );
}

export default App;
