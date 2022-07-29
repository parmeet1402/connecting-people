import React from "react";
import { Avatar, Box, IconButton, Text, useTheme } from "@chakra-ui/react";
import { FiVideoOff, FiMic, FiMicOff } from "react-icons/fi";

const NameAndMicTag = ({
  isAudio,
  name,
}: {
  isAudio: boolean;
  name: string;
}) => {
  return (
    <Box
      bgColor="white"
      w="fit-content"
      borderRadius="3xl"
      px="0.4rem"
      py="0.3rem"
      pos="absolute"
      bottom="1"
      left="1"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar name="Amit" size="xs" src="https://bit.ly/dan-abramov" />
      <Text
        title={name}
        color="black"
        ml="0.3rem"
        mr="4"
        maxW="14ch"
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        fontSize="0.9rem"
        textTransform="capitalize"
      >
        {name}
      </Text>
      <IconButton
        type="button"
        aria-label="Mic"
        isRound
        size="xs"
        icon={isAudio ? <FiMic /> : <FiMicOff />}
      />
    </Box>
  );
};

type Props = {
  name?: string;
  isAudio?: boolean;
  isVideo?: boolean;
};

const CallCard = ({ name, isAudio, isVideo }: Props) => {
  const {
    colors: {
      whiteAlpha: { 700: whiteAlpha700 },
    },
  } = useTheme();
  return (
    <Box
      bgColor="blackAlpha.800"
      h="324px"
      w="90%"
      mb="1rem"
      mx="auto"
      borderRadius="xl"
      pos="relative"
    >
      {isVideo ? (
        <Box>{null}</Box>
      ) : (
        <Box
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <FiVideoOff color={whiteAlpha700} size="2rem" />
        </Box>
      )}
      <NameAndMicTag isAudio={isAudio} name={name} />
    </Box>
  );
};

export default CallCard;
