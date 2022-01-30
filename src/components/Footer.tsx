import { SearchIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonProps,
  Flex,
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
import { maxFooterWidth, maxWidth, minWidth } from 'src/theme/theme';
import CartIcon from '../assets/icons/icon-cart.svg';
import UserIcon from '../assets/icons/icon-user.svg';
import Logo from '../assets/logos/logo-md.svg';
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
          <SearchBar />
          <Image src={AppStore} alt="App Store" />
          <Image src={GooglePlay} alt="Google Play" />

          {/* Separator */}
          <Box w="1px" h="26px" bg="xpressGreyScheme.300" borderRadius="4px" />

          <LanguageSwitcher />
          <Flex align="center" justify="end" gap="40px" paddingStart="24px">
            <Image src={CartIcon} alt="Cart Icon" h="24px" />
            <Image src={UserIcon} alt="User Icon" h="24px" />
          </Flex>
        </Flex>
      </Flex>
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

const SearchBar: React.FC<{}> = () => {
  return (
    <Flex
      flex="1"
      bg="white"
      h="46px"
      px="16px"
      align="center"
      borderRadius="32px"
      gap="8px"
    >
      <SearchIcon w="20px" h="20px" color="xpressGreyScheme.200" />
      <Input
        placeholder="What are you looking for?"
        fontSize="14px"
        border="none"
        _focus={{ border: 'none' }}
      />
    </Flex>
  );
};

const LanguageSwitcher: React.FC<{}> = ({}) => {
  return (
    <Menu>
      <MenuButton as={LanguageSwitcherButton} leftIcon={<TriangleDownIcon />}>
        language
      </MenuButton>
      <MenuList>
        <MenuItem>English</MenuItem>
        <MenuItem>العربية</MenuItem>
      </MenuList>
    </Menu>
  );
};

const LanguageSwitcherButton = React.forwardRef<any, ButtonProps>(
  (props, ref) => {
    return (
      <Button
        ref={ref}
        variant={'unstyled'}
        colorScheme="xpressGreyScheme"
        color="xpressRuby"
        fontWeight="700"
        iconSpacing="4px"
        sx={{
          '& svg': {
            paddingTop: '3px'
          }
        }}
        _focus={{ outline: 'none' }}
        {...props}
      />
    );
  }
);
