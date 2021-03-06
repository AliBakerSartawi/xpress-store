import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useMediaQuery
} from '@chakra-ui/react';
import React from 'react';
import { maxFooterWidth, minWidth } from 'src/theme/theme';
import Logo from '../assets/logos/logo-lg.svg';
import LogoMd from '../assets/logos/logo-md.svg';
import AppStore from '../assets/socials/app-store.svg';
import Facebook from '../assets/socials/facebook.svg';
import GooglePlay from '../assets/socials/google-play.svg';
import Instagram from '../assets/socials/instagram.svg';
import Twitter from '../assets/socials/twitter.svg';
import Visa from '../assets/payment-methods/visa.svg';
import MasterCard from '../assets/payment-methods/mastercard.svg';
import AmericanExpress from '../assets/payment-methods/american-express.svg';
import PayPal from '../assets/payment-methods/paypal.svg';
import DinersClub from '../assets/payment-methods/diners-club.svg';
import Discover from '../assets/payment-methods/discover.svg';

interface HeaderProps {}

const Footer: React.FC<HeaderProps> = () => {
  const [isLargerThan992, isLargerThan1280] = useMediaQuery([
    '(min-width: 992px)',
    '(min-width: 1280px)'
  ]);

  return (
    <Box bg="xpressGrey">
      <Flex
        w="100%"
        py="80px"
        direction="column"
        align="center"
        justify="center"
        borderTop="5px solid"
        borderTopColor="xpressRuby"
      >
        <Flex
          w={[
            `clamp(${minWidth}, 50%, ${maxFooterWidth})`,
            null,
            `clamp(${minWidth}, 100%, ${maxFooterWidth})`
          ]}
          px="20px"
          direction={['column', null, 'row']}
          align="start"
          justify="space-between"
          gap="64px"
        >
          <Image src={isLargerThan992 ? Logo : LogoMd} alt="Xpress Logo" />
          <NavigateSection />
          <InformationSection />
          <SocialsAndPayment />
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
        fontWeight="600"
        fontSize="14px"
      >
        <Text>All Rights Reserved &#169; 2021</Text>
      </Flex>
    </Box>
  );
};

export default Footer;

const NavigateSection: React.FC<{}> = () => {
  return (
    <Flex
      direction="column"
      gap="8px"
      sx={{ '& *': { color: '#707070' }, '& p': { fontSize: '13px' } }}
    >
      <Heading fontSize="14px">NAVIGATE</Heading>
      <Flex direction="column">
        <Text>
          <Link>Cards</Link>
        </Text>
        <Text>
          <Link>Grocery</Link>
        </Text>
        <Text>
          <Link>Telecom</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

const InformationSection: React.FC<{}> = () => {
  return (
    <Flex
      direction="column"
      gap="8px"
      sx={{ '& *': { color: '#707070' }, '& p': { fontSize: '13px' } }}
    >
      <Heading fontSize="14px">INFORMATION</Heading>
      <Flex direction="column">
        <Text>
          <Link>About Us</Link>
        </Text>
        <Text>
          <Link>Privacy & Policy</Link>
        </Text>
        <Text>
          <Link>Terms & Conditions</Link>
        </Text>
      </Flex>
    </Flex>
  );
};

const SocialsAndPayment: React.FC<{}> = () => {
  return (
    <Flex direction="column" gap="40px" sx={{ '& *': { color: '#707070' } }}>
      <Flex direction="column" gap="8px">
        <Heading fontSize="14px">FOLLOW US</Heading>
        <Flex gap="4px">
          <Link>
            <Image src={Facebook} alt="Facebook" />
          </Link>
          <Link>
            <Image src={Twitter} alt="Twitter" />
          </Link>
          <Link>
            <Image src={Instagram} alt="Instagram" />
          </Link>
        </Flex>
      </Flex>
      <Flex
        gap="4px"
        direction={['column', null, null, null, 'row']}
        align={['start', null, null, null, 'center']}
      >
        <Link>
          <Image
            src={AppStore}
            alt="App Store"
            w={['100px', null, null, null, '105px']}
          />
        </Link>
        <Link>
          <Image src={GooglePlay} alt="Google Play" w="100px" />
        </Link>
      </Flex>
      <Flex direction="column" gap="8px">
        <Heading fontSize="14px">PAYMENT METHODS</Heading>
        <Flex gap="4px" wrap="wrap">
          <Image src={Visa} alt="Visa" />
          <Image src={MasterCard} alt="MasterCard" />
          <Image src={AmericanExpress} alt="AmericanExpress" />
          <Image src={PayPal} alt="PayPal" />
          <Image src={DinersClub} alt="DinersClub" />
          <Image src={Discover} alt="Discover" />
        </Flex>
      </Flex>
    </Flex>
  );
};
