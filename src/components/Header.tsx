import { Box, Flex } from '@chakra-ui/react';
import React from 'react';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <Box bg="xpressGrey">
      <Box
        h="90px"
        borderTop="5px solid"
        borderTopColor="xpressOrange"
        borderBottom="5px solid"
        borderBottomColor="xpressRuby"
      >
        <Flex maxW="1540px"></Flex>
      </Box>
      <Box h="50px"></Box>
    </Box>
  );
};

export default Header;
