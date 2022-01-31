import { SearchIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonProps,
  Flex,
  Heading,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { maxFooterWidth, maxHeaderWidth, minWidth } from 'src/theme/theme';
import CartIcon from '../assets/icons/icon-cart.svg';
import UserIcon from '../assets/icons/icon-user.svg';
import Logo from '../assets/logos/logo-lg.svg';
import AppStore from '../assets/socials/app-store.svg';
import GooglePlay from '../assets/socials/google-play.svg';

interface HeaderProps {}

const Footer: React.FC<HeaderProps> = ({}) => {
  return (
    <Box bg="xpressGrey">
      <Flex
        w="100%"
        direction="column"
        align="center"
        borderTop="5px solid"
        borderTopColor="xpressRuby"
      >
        <Flex
          w={`clamp(${minWidth}, 100%, ${maxFooterWidth})`}
          h="436px"
          px="20px"
          align="center"
          gap="16px"
        >
          <Image src={Logo} alt="Xpress Logo" />
          <Box>
            <Heading>NAVIGATE</Heading>
            <Text fontWeight="200">some text here</Text>
            <Text fontWeight="200" fontStyle="italic">
              some text here
            </Text>
            <Text fontWeight="300">some text here</Text>
            <Text fontWeight="300" fontStyle="italic">
              some text here
            </Text>
            <Text fontWeight="400">some text here</Text>
            <Text fontWeight="400" fontStyle="italic">
              some text here
            </Text>
            <Text fontWeight="600">some text here</Text>
            <Text fontWeight="600" fontStyle="italic">
              some text here
            </Text>
            <Text fontWeight="700">some text here</Text>
            <Text fontWeight="700" fontStyle="italic">
              some text here
            </Text>
            <Text fontWeight="800">some text here</Text>
            <Text fontWeight="900">some text here</Text>
          </Box>
          <Image src={AppStore} alt="App Store" />
          <Image src={GooglePlay} alt="Google Play" />

          <Flex align="center" justify="end" gap="40px" paddingStart="24px">
            <Image src={CartIcon} alt="Cart Icon" h="24px" />
            <Image src={UserIcon} alt="User Icon" h="24px" />
          </Flex>
        </Flex>
      </Flex>
      {/* Copyright Section */}
      <Flex
        w="100%"
        p="8px"
        align="center"
        justify="center"
        bg="xpressOrange"
        color="white"
        fontWeight="700"
      >
        <Text>All Rights Reserved &#169; 2021</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
