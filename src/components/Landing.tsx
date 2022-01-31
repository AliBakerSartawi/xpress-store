import { Flex } from '@chakra-ui/react';
import React from 'react';
import { maxBodyWidth, minWidth } from 'src/theme/theme';
import ChatHelp from './landing/ChatHelp';
import Hero from './landing/Hero';
import PopularProducts from './landing/PopularProducts';
import RepeatRecent from './landing/RepeatRecent';

interface LandingProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <Flex
      w={`clamp(${minWidth}, 100%, ${maxBodyWidth})`}
      m="auto"
      py="64px"
      px="20px"
      direction="column"
      align="center"
      gap="64px"
    >
      <Hero />
      <PopularProducts />
      <RepeatRecent />
      <ChatHelp />
    </Flex>
  );
};

export default Landing;
