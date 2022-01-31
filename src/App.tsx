import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import { Providers } from './context/providers';

function App() {
  return (
    <Providers>
      <Flex direction="column" minH="100vh">
        <Header />
        <Landing />
        <Footer />
      </Flex>
    </Providers>
  );
}

export default App;
