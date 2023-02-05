import { Box, Button, Center, Heading, Icon, Text, VStack } from "native-base";
import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";


// import { Container } from './styles';

const Counter = () => {
  return (
    <Center width='full'>
    <VStack space={8}>
      <Box
        width="md"
        alignItems="center"
        maxWidth="80"
        rounded="lg"
        borderColor="primary.500"
        borderWidth="4"
      >
        <Text fontSize="8xl">25:00</Text>
        
      </Box>
      <Button onPress={() => console.log('Pressionei')}  size="lg" bgColor="primary.500" endIcon={<Icon as={Ionicons} name="play-outline" size="lg" />}><Text fontSize="xl" color="white">INICIAR</Text></Button>
      </VStack>
    </Center>
  );
};

export default Counter;
