import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { Text } from 'react-native';

import { Container } from './styles';

const Header: React.FC<StackHeaderProps> = ({ scene }) => {
  const {
    options: { title },
  } = scene?.descriptor;

  return (
    <Container>
      <Text>{title}</Text>
    </Container>
  );
};

export default Header;
