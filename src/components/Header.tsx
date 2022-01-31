import { SearchIcon, TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonProps,
  Center,
  Flex,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import React from 'react';
import { useCart } from 'src/context/cart';
import { maxHeaderWidth, minWidth } from 'src/theme/theme';
import CartIcon from '../assets/icons/icon-cart.svg';
import UserIcon from '../assets/icons/icon-user.svg';
import Logo from '../assets/logos/logo-md.svg';
import AppStore from '../assets/socials/app-store.svg';
import GooglePlay from '../assets/socials/google-play.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { cart } = useCart();
  return (
    <Box bg="xpressGrey" position="sticky" top="0px" zIndex="sticky">
      <Flex
        w="100%"
        direction="column"
        align="center"
        borderTop="5px solid"
        borderTopColor="xpressOrange"
        borderBottom="5px solid"
        borderBottomColor="xpressRuby"
      >
        <Flex
          w={`clamp(${minWidth}, 100%, ${maxHeaderWidth})`}
          h="90px"
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
            <Box position="relative">
              <Image src={CartIcon} alt="Cart Icon" h="24px" />
              {cart && (
                <Center
                  position="absolute"
                  bg="red.400"
                  h="24px"
                  w="24px"
                  borderRadius="50%"
                  color="white"
                  lineHeight="1"
                  fontSize="12px"
                  top="-12px"
                  insetEnd="-12px"
                  border="2px solid"
                  borderColor="xpressGrey"
                >
                  {cart.length}
                </Center>
              )}
            </Box>
            <Image src={UserIcon} alt="User Icon" h="24px" />
          </Flex>
        </Flex>
      </Flex>
      <Flex w="100%" direction="column" align="center">
        <Flex
          w={`clamp(${minWidth}, 100%, ${maxHeaderWidth})`}
          h="50px"
          px="20px"
          align="center"
          gap="80px"
          fontWeight="800"
          color="xpressRuby"
        >
          <Link>Cards</Link>
          <Link>Grocery</Link>
          <Link>Telecom</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;

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

const LanguageSwitcher: React.FC<{}> = () => {
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

const LanguageSwitcherButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
