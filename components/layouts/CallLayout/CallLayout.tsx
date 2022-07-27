import React from "react";
import { Avatar, Box, Flex, HStack, IconButton, Text } from "@chakra-ui/react";
import { FiArrowLeft, FiVideo, FiMic } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import PageHeading from "../../layout/PageHeading";

type Props = {
  heading: string;
  otherPeople: any[];
};

const CallLayout = ({ heading }: Props) => {
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
      <Box h="78vh">{/* Other People */}</Box>
      <Flex
        pos="absolute"
        bottom="0"
        // h="97px"
        h="84px"
        bgColor="white"
        w="100vw"
        borderTopRadius="xl"
        alignItems="center"
      >
        <Flex color="black" justifyContent="space-between" w="90%" mx="auto">
          <HStack>
            {/* Replace with video */}
            <Avatar borderRadius="xl" name="dfdjkjk" />
            <Flex direction="column">
              <Text lineHeight="1rem">Harsh</Text>
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
      {/* Bottom Bar */}
    </Box>
  );
};

export default CallLayout;
