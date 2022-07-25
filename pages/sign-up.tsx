import React, { useState } from "react";
import {
  Box,
  Input,
  Text,
  VStack,
  IconButton,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { FileUploadInput } from "../components/form";
import { FormLayout } from "../components/layouts";
import { FiArrowRight } from "react-icons/fi";

type Props = {};

const StepOne = ({ goAhead }: { goAhead: () => void }) => {
  return (
    <Box as="form" color="black">
      <Box
        pos="absolute"
        top="2rem"
        left="50%"
        transform="translate(-50%, -50%)"
        bg="white"
        borderRadius="xl"
      >
        <FileUploadInput />
      </Box>
      <VStack pt="36" gap="4" w="90%" mx="auto">
        <VStack alignItems="flex-start" w="100%">
          <Text as="span" mb="0.05rem" color="black" fontWeight="medium">
            Name
          </Text>
          <Input borderColor="blackAlpha.700" h="61px" />
        </VStack>
        <VStack alignItems="flex-start" w="100%">
          <Text as="span" mb="0.05rem" color="black" fontWeight="medium">
            Email
          </Text>
          <Input borderColor="blackAlpha.700" h="61px" />
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
  return (
    <Box as="form" color="black">
      <VStack pt="12" w="90%" mx="auto" alignItems="flex-start">
        <VStack alignItems="flex-start">
          <Text as="span" mb="0.05rem" color="black" fontWeight="medium">
            OTP
          </Text>
          <HStack>
            <PinInput otp placeholder="">
              <PinInputField borderColor="#808080" />
              <PinInputField borderColor="#808080" />
              <PinInputField borderColor="#808080" />
              <PinInputField borderColor="#808080" />
              <PinInputField borderColor="#808080" />
              <PinInputField borderColor="#808080" />
            </PinInput>
          </HStack>
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

const SignUpPage = (props: Props) => {
  const [stepCount, setStepCount] = useState(2);

  const goAhead = () => {
    setStepCount(sc => sc + 1);
  };

  return (
    <FormLayout heading="Sign Up">
      {stepCount === 1 && <StepOne goAhead={goAhead} />}
      {stepCount === 2 && <StepTwo />}
    </FormLayout>
  );
};

export default SignUpPage;
