import React, { ReactNode, useState } from 'react';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import HeroImage from '../../assets/veggies-banner.png';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [active, setActive] = useState(0);
  const list = Array(3).fill(0);

  return (
    <Box overflow="hidden">
      <Flex
        w={`${list.length * 100}%`}
        alignSelf="start"
        justify="start"
        transition="500ms ease"
        transform={`translateX(-${(100 / list.length) * active}%)`}
      >
        {list.map((_, i) => (
          <Box key={i} position="relative">
            <Image src={HeroImage} alt="Hero Image" />
            <Flex
              h="100%"
              position="absolute"
              direction="column"
              justify="center"
              top="0px"
              insetStart="100px"
              color="xpressRuby"
              gap="4px"
            >
              <Heading fontSize="48px" fontWeight="800">
                70% Off
              </Heading>
              <Text fontSize="30px" fontWeight="300" mt="-16px">
                On everything today
              </Text>
              <CallToActionButton>Get Now</CallToActionButton>
            </Flex>
          </Box>
        ))}
      </Flex>
      <Flex w="100%" pt="16px" justify="center" gap="6px">
        {list.map((_, i) => (
          <Box
            key={i}
            borderRadius="50%"
            bg={active === i ? 'xpressRubyScheme.600' : 'xpressGreyScheme.500'}
            h="6px"
            w="6px"
            onClick={() => setActive(i)}
            _hover={{ cursor: 'pointer' }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Hero;

const CallToActionButton: React.FC<{ children?: ReactNode }> = ({
  children
}) => {
  return (
    <Button
      borderRadius="20px"
      colorScheme="xpressOrangeScheme"
      width="fit-content"
      height="fit-content"
      p="10px"
      fontSize="20px"
      _focus={{ border: 'none' }}
    >
      {children}
    </Button>
  );
};
