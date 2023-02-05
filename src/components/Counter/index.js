import { Box, Button, Center, Heading, Icon, Text, VStack } from "native-base";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// import { Container } from './styles';

const FOCUS_TIME_MINUTES = 0.2 * 60 * 1000; // 25 MINUTES
const BREAK_TIME_MINUTES = 0.1 * 60 * 1000;

const Counter = () => {
  const [timerCount, setTimerCount] = useState(FOCUS_TIME_MINUTES);
  const [timerInterval, setTimerInterval] = useState(null);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const timerDate = new Date(timerCount);
  const timerMinutes = timerDate.getMinutes().toString().padStart(2, "0");
  const timerSeconds = timerDate.getSeconds().toString().padStart(2, "0");

  const startTimer = () => {
    setIsTimerRunning(true);
    const idInterval = setInterval(
      () => setTimerCount((prev) => prev - 1000),
      1000
    );
    setTimerInterval(idInterval);
  };

  const stopTimer = () => {
    if (timerInterval !== null) clearInterval(timerInterval);

    setIsTimerRunning(false);
  };

  return (
    <Center width="full">
      <VStack space={8}>
        <Box
          width="md"
          alignItems="center"
          maxWidth="80"
          rounded="lg"
          borderColor="primary.500"
          borderWidth="4"
        >
          <Text fontSize="8xl">
            {timerMinutes}:{timerSeconds}
          </Text>
        </Box>
        <Button
          onPress={isTimerRunning ? stopTimer : startTimer}
          size="lg"
          bgColor="primary.500"
          endIcon={<Icon as={Ionicons} name={isTimerRunning? "pause-outline" : "play-outline"} size="lg" />}
        >
          <Text fontSize="xl" color="white">
            {isTimerRunning ? "PAUSAR" : "INICIAR"}
          </Text>
        </Button>
      </VStack>
    </Center>
  );
};

export default Counter;
