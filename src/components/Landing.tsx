import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { maxBodyWidth, minWidth } from 'src/theme/theme';
import Hero from './landing/Hero';

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <Flex
      w={`clamp(${minWidth}, 100%, ${maxBodyWidth})`}
      m="auto"
      py="64px"
      px="20px"
      direction="column"
      align="center"
    >
      <Hero />
      {/* PopularProducts */}
      {/* RepeatProducts */}
    </Flex>
  );
};

export default Landing;
