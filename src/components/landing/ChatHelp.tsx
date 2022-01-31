import React from 'react';
import { Image } from '@chakra-ui/react';
import ChatHelpIcon from '../../assets/chat-help.svg';

interface ChatHelpProps {}

const ChatHelp: React.FC<ChatHelpProps> = () => {
  return (
    <Image
      src={ChatHelpIcon}
      alt="Chat Help"
      position="fixed"
      bottom="40px"
      insetEnd="40px"
      zIndex="tooltip"
      _hover={{ cursor: 'pointer' }}
    />
  );
};

export default ChatHelp;
