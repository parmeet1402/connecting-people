import React, { useState } from "react";
import { FormLayout } from "../components/layouts";
import {
  Box,
  VStack,
  Text,
  Input,
  IconButton,
  Heading,
  Link,
  Button,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";
// import { FaWhatsapp } from "react-icons/fa";

type Props = {};

const StepOne = ({ goAhead }: { goAhead: () => void }) => {
  return (
    <Box as="form" color="black">
      <VStack pt="12" gap="4" w="90%" mx="auto">
        <VStack alignItems="flex-start" w="100%">
          <Text as="span" mb="0.05rem" color="black" fontWeight="medium">
            Room Name
          </Text>
          <Input borderColor="blackAlpha.700" h="61px" type="email" />
        </VStack>
      </VStack>
      <IconButton
        aria-label="next"
        icon={<FiArrowRight size="1.2rem" />}
        variant="unstyled"
        display="flex"
        alignItems="center"
        justifyContent="center"
        isRound
        pos="absolute"
        right="1rem"
        bottom="1rem"
      />
    </Box>
  );
};

const StepTwo = () => {
  const room = {
    name: "Arizona",
    link: "https://www.gdfj.djmcom/sddfdfdfdfddfdfdfdfddfdfdfdfddfdfdfdfd",
  };

  const buttons = [
    {
      //   icon: ,
    },
  ];
  // Room Name
  // Room Link
  // ShareButtonList
  // --> Share Whatsapp Button
  // --> Copy to Clipboard Button
  // --> Share to Other Apps Button
  // Join Room Button
  return (
    <Box as="form" color="black">
      <VStack pt="12" gap="4" w="90%" mx="auto">
        <VStack alignItems="flex-start" w="100%">
          <Heading>{room.name}</Heading>
          <Link href={room.link}>
            <Text
              as="u"
              mb="0.05rem"
              color="blackAlpha.600"
              fontWeight="medium"
            >
              {`${room.link.substring(0, 32)}${
                room.link.length > 32 ? "..." : ""
              }`}
            </Text>
          </Link>
          <VStack w="100%" pt="8"gap="0.05rem">
            <Button
              leftIcon={
                <Image
                  src="/icons/whatsapp.svg"
                  alt=""
                  height="26px"
                  width="26px"
                />
              }
              width="100%"
              h="66px"
              justifyContent="flex-start"
              gap="1rem"
              pl="1.5rem"
            >
              Share on Whatsapp
            </Button>
            <Button
              leftIcon={
                <Image
                  src="/icons/clipboard.svg"
                  alt=""
                  height="26px"
                  width="26px"
                />
              }
              width="100%"
              h="66px"
              justifyContent="flex-start"
              gap="1rem"
              pl="1.5rem"
            >
              Copy to Clipboard
            </Button>
            <Button
              leftIcon={
                <Image
                  src="/icons/share.svg"
                  alt=""
                  height="26px"
                  width="26px"
                />
              }
              width="100%"
              h="66px"
              justifyContent="flex-start"
              gap="1rem"
              pl="1.5rem"
            >
              Share on Other Apps
            </Button>
          </VStack>
          {/* <Image src="/icons/clipboard.svg" alt="" height="26px" width="26px" /> */}
          {/* <Image src="/icons/share.svg" alt="" height="26px" width="26px" /> */}
        </VStack>
        <Button
          bgColor="black"
          color="white"
          h="66px"
          width="100%"
          _hover={{
            background: "black",
          }}
          _active={{
            background: "black",
          }}
          _focusVisible={{
            boxShadow: "none",
          }}
          w="90%"
          pos="absolute"
          bottom="1rem"
        >
          Join Room
        </Button>
      </VStack>
    </Box>
  );
};

const CreateARoom = (props: Props) => {
  const [stepCount, setStepCount] = useState(2);

  const goAhead = () => {
    setStepCount(sc => sc + 1);
  };
  return (
    <FormLayout heading="Create">
      {stepCount === 1 && <StepOne goAhead={goAhead} />}
      {stepCount === 2 && <StepTwo />}
    </FormLayout>
  );
};

export default CreateARoom;
