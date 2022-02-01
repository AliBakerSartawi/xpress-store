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
  MenuList,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Text,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import { useCart } from 'src/context/cart';
import { maxHeaderWidth, minWidth } from 'src/theme/theme';
import CartIcon from '../assets/icons/icon-cart.svg';
import UserIcon from '../assets/icons/icon-user.svg';
import DeleteItemIcon from '../assets/icons/delete-item-icon.svg';
import Logo from '../assets/logos/logo-md.svg';
import AppStore from '../assets/socials/app-store.svg';
import GooglePlay from '../assets/socials/google-play.svg';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
            <Cart />
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
        fontSize="12 px"
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

const Cart: React.FC<{}> = () => {
  const { cart, subtotal, actions } = useCart();

  const handleRemoveFromCart = (id: number) => {
    actions.removeFromCart(id);
  };

  return (
    <Box>
      <Popover>
        <PopoverTrigger>
          <Button
            variant="unstyled"
            position="relative"
            _focus={{ border: 'none' }}
          >
            <Image src={CartIcon} alt="Cart Icon" h="24px" />
            <CartNotification />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          w="382px"
          boxShadow="md"
          _focus={{ border: 'none', outline: 'none' }}
        >
          <PopoverArrow />
          <PopoverBody>
            {!cart ? (
              <Center pt="16px" pb="8px">
                <Text>Cart is empty!</Text>
              </Center>
            ) : (
              <Flex direction="column" gap="20px" mt="20px" mb="8px">
                {cart.map((item, i) => (
                  <Flex
                    align="center"
                    justify="space-between"
                    key={i}
                    gap="12px"
                    color="xpressGreyScheme.500"
                  >
                    <Image
                      src={DeleteItemIcon}
                      alt="Delete Item"
                      _hover={{ cursor: 'pointer' }}
                      onClick={() => handleRemoveFromCart(item.id)}
                    />
                    <Box
                      w="67px"
                      h="88px"
                      bg="xpressGreyScheme.200"
                      borderRadius="12px"
                      overflow="hidden"
                    >
                      <Image
                        src={item.img}
                        h="100%"
                        alt="Item Image"
                        objectFit="cover"
                      />
                    </Box>
                    <Flex direction="column" w="153px" gap="8px">
                      <Text
                        fontSize="14px"
                        fontWeight="700"
                        lineHeight="1.2"
                        // truncate after two lines
                        sx={{
                          maxWidth: '153px',
                          display: '-webkit-box',
                          WebkitLineClamp: '2',
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text fontSize="12px">Size: {item.size}</Text>
                    </Flex>
                    <Flex direction="column" align="end" fontSize="12px">
                      <Text>Qty.: {item.quantity}</Text>
                      <Text fontWeight="700">{item.price} KWD</Text>
                    </Flex>
                  </Flex>
                ))}
              </Flex>
            )}
          </PopoverBody>
          <PopoverFooter>
            <Flex direction="column" gap="40px" pb="8px">
              <Flex align="end" justify="space-between">
                <Flex direction="column" fontSize="14px">
                  <Text fontWeight="700">Address</Text>
                  <Text>Block Number, Street Name</Text>
                  <Text>Building Floor, Apartment</Text>
                </Flex>
                <Flex direction="column" align="end" fontSize="12px">
                  <Text>Subtotal:</Text>
                  <Text fontWeight="700" color="xpressRuby">
                    {subtotal} KWD
                  </Text>
                </Flex>
              </Flex>
              <Flex gap="8px">
                <Button
                  flex="1"
                  fontSize="12px"
                  py="24px"
                  colorScheme="xpressRubyScheme"
                  borderRadius="20px"
                >
                  Show All
                </Button>
                <Button
                  flex="1"
                  fontSize="12px"
                  py="24px"
                  colorScheme="xpressRubyScheme"
                  borderRadius="20px"
                >
                  Checkout
                </Button>
              </Flex>
            </Flex>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

const CartNotification: React.FC<{}> = () => {
  const { cart } = useCart();
  return (
    cart && (
      <Center
        position="absolute"
        bg="red.400"
        h="24px"
        w="24px"
        borderRadius="50%"
        color="white"
        lineHeight="1"
        fontSize="10px"
        top="-4px"
        insetEnd="-4px"
        border="2px solid"
        borderColor="xpressGrey"
      >
        {cart.length}
      </Center>
    )
  );
};
