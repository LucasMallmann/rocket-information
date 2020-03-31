import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigate('Details')}>
        <Text>Go to details page</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
