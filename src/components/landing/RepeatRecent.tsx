import {
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem
} from '@chakra-ui/react';
import React from 'react';
import Hoodie from '../../assets/hoodie.png';

interface RepeatRecentProps {}

const RepeatRecent: React.FC<RepeatRecentProps> = () => {
  const list = Array(6).fill(0);

  return (
    <Flex w="100%" direction="column" gap="40px">
      <Heading color="xpressRuby">Repeat Recent</Heading>
      <Wrap
        justify="space-between"
        gap="40px"
        spacing="8px"
        h="280px"
        overflow="hidden"
      >
        {list.map((_, i) => (
          <WrapItem key={i}>
            <Card />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
};

export default RepeatRecent;

const Card: React.FC<{}> = () => {
  const title: string = "Autumn women's new high-waist slim hoodie";
  return (
    <Flex
      direction="column"
      w="245px"
      h="280px"
      justify="space-between"
      align="center"
      textAlign="center"
      gap="8px"
      overflow="hidden"
      borderRadius="20px"
      border="1px solid"
      borderColor="xpressGreyScheme.100"
    >
      <Image src={Hoodie} alt="item" />
      <Text
        lineHeight="1"
        fontSize="19px"
        color="xpressGreyScheme.500"
        pb="24px"
      >
        {title.slice(0, 34) + (title.length > 34 ? '...' : '')}
      </Text>
    </Flex>
  );
};
