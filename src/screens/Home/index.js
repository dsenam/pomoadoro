import { Container } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import Counter from '../../components/Counter';


const Home = () => {
  return (
    <Container flex={1} minWidth="full" bgColor="white" justifyContent="center">
    <Counter />
    </Container>
  )
}

export default Home;