import React from "react";
import { Avatar, Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { FiArrowLeft, FiVideo, FiMic } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import PageHeading from "../../layout/PageHeading";

type Props = {
  heading: string;
  otherPeople: { streams: any[]; name: string; id: string }[];
  user: {
    name: string;
  };
  callStartTime: Date;
};

const CallLayout = ({ heading, user: { name }, otherPeople }: Props) => {
  return (
    <Box pos="relative">
      <Flex
        pos="absolute"
        top="1rem"
        justifyContent="space-between"
        w="100vw"
        px="1rem"
      >
        <IconButton
          aria-label="previous"
          variant="unstyled"
          display="flex"
          alignItems="center"
          justifyContent="center"
          isRound
          icon={<FiArrowLeft size="1.2rem" />}
        />
        <IconButton
          aria-label="previous"
          variant="unstyled"
          display="flex"
          alignItems="center"
          justifyContent="center"
          isRound
          icon={<IoExitOutline size="1.2rem" />}
        />
      </Flex>
      <Flex h="22vh" alignItems="center" justifyContent="center">
        <PageHeading>{heading}</PageHeading>
      </Flex>
      <Box h="78vh" pb="100px" overflow="auto">
        {otherPeople.map(people => (
          <Box
            key={people.id}
            bgColor="cyan"
            h="324px"
            w="90%"
            mb="1rem"
            mx="auto"
            borderRadius="xl"
          >
            <Box
              bgColor="white"
              w="fit-content"
              borderRadius="xl"
              px="2"
              py="1"
            >
              <Text color="black">{people.name}</Text>
            </Box>
          </Box>
        ))}
      </Box>
      <Flex
        pos="fixed"
        bottom="0"
        h="84px"
        bgColor="white"
        w="100vw"
        borderTopRadius="xl"
        alignItems="center"
      >
        <Flex color="black" justifyContent="space-between" w="90%" mx="auto">
          <HStack>
            <Avatar borderRadius="xl" name="dfdjkjk" />
            <Flex direction="column">
              <Text lineHeight="1rem">{name}</Text>
              <Text color="blackAlpha.500" fontSize="sm">
                0:24
              </Text>
            </Flex>
          </HStack>
          <HStack>
            <IconButton
              aria-label="previous"
              variant="ghost"
              isRound
              icon={<FiMic size="1.2rem" />}
            />
            <IconButton
              aria-label="previous"
              variant="ghost"
              isRound
              icon={<FiVideo size="1.2rem" />}
            />
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CallLayout;
