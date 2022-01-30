import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { Providers } from './context/providers';

function App() {
  return (
    <Providers>
      <Flex direction="column" minH="100vh">
        <Header />
        <Box flex="1" />
        <Footer />
      </Flex>
    </Providers>
  );
}

export default App;
