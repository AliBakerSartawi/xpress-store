import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import {
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Item } from 'src/types/types';
import Hoodie from '../../assets/hoodie.png';

interface PopularProductsProps {}

const PopularProducts: React.FC<PopularProductsProps> = () => {
  const list = itemsList();

  return (
    <Flex w="100%" direction="column" gap="40px">
      <Heading color="xpressRuby">Popular Products</Heading>
      <Wrap
        justify="space-between"
        gap="40px"
        spacing="8px"
        h="400px"
        overflow="hidden"
      >
        {list.map((item, i) => (
          <WrapItem key={i}>
            <Card item={item} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default PopularProducts;

const Card: React.FC<{ item: Item }> = ({
  item: { id, img, name, size, previousPrice, price }
}) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <Flex
      direction="column"
      w="245px"
      h="400px"
      justify="space-between"
      gap="8px"
      overflow="hidden"
      borderRadius="20px"
      border="1px solid"
      borderColor="xpressGreyScheme.100"
    >
      <Image src={img} alt="item" userSelect="none" />
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        px="16px"
        gap="8px"
        color="xpressGreyScheme.500"
      >
        <Text lineHeight="1" fontSize="19px">
          {name.slice(0, 34) + (name.length > 34 ? '...' : '')}
        </Text>
        <Text fontSize="15px" fontWeight="300">
          Size : {size}
        </Text>
        {previousPrice && (
          <Text
            fontSize="14px"
            // textDecoration="line-through"
            color="xpressGreyScheme.300"
            position="relative"
            _after={{
              content: '""',
              width: '120%',
              position: 'absolute',
              right: '-10%',
              top: '50%',
              borderBottom: '1.5px solid #737373',
              WebkitTransform: 'skewY(-10deg)',
              transform: 'skewY(-10deg)'
            }}
          >
            {previousPrice} KWD
          </Text>
        )}
        <Text color="xpressRuby" fontSize="18px" fontWeight="800">
          {price} KWD
        </Text>
      </Flex>
      <Flex>
        <Flex
          flex="1"
          bg="xpressGreyScheme.50"
          border="1px solid"
          borderColor="xpressGreyScheme.100"
          align="center"
          justify="space-between"
          px="16px"
        >
          <Center
            w="22px"
            h="22px"
            bg="#FFECDF"
            borderRadius="50%"
            boxShadow="md"
            _hover={{ cursor: 'pointer', background: '#FFE7D6' }}
            _active={{ background: '#FFDDC6' }}
            onClick={() =>
              setQuantity((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            <MinusIcon w="8px" h="8px" color="xpressRuby" />
          </Center>
          <Text userSelect="none">{quantity}</Text>
          <Center
            w="22px"
            h="22px"
            bg="#FFECDF"
            borderRadius="50%"
            boxShadow="md"
            _hover={{ cursor: 'pointer', background: '#FFE7D6' }}
            _active={{ background: '#FFDDC6' }}
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            <AddIcon w="8px" h="8px" color="xpressRuby" />
          </Center>
        </Flex>
        <Button
          colorScheme="xpressRubyScheme"
          borderRadius="initial"
          px="20px"
          _focus={{ border: 'none' }}
        >
          ADD
        </Button>
      </Flex>
    </Flex>
  );
};

const itemsList = (): Item[] => [
  {
    id: 1,
    img: Hoodie,
    name: "Autumn women's new high-waist slim hoodie",
    size: '0000',
    previousPrice: 40,
    price: 30
  },
  {
    id: 2,
    img: Hoodie,
    name: 'Hoodie - Black',
    size: '0000',
    previousPrice: 40,
    price: 30
  },
  {
    id: 3,
    img: Hoodie,
    name: 'Jacket',
    size: '0000',
    previousPrice: 40,
    price: 30
  },
  {
    id: 4,
    img: Hoodie,
    name: 'T-shirt',
    size: '0000',
    previousPrice: 40,
    price: 30
  },
  {
    id: 5,
    img: Hoodie,
    name: 'Jeans',
    size: '0000',
    previousPrice: 40,
    price: 30
  },
  {
    id: 6,
    img: Hoodie,
    name: 'Sweater',
    size: '0000',
    previousPrice: 40,
    price: 30
  }
];
