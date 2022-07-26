import React, { useState } from "react";
import { FormLayout } from "../components/layouts";
import {
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  Text,
  VStack,
  IconButton,
HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import { signIn } from "next-auth/react";

type Props = {};

const StepOne = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const handleFormSubmit = () => {
    // TODO: DO SIGN IN AFTER THE VALUES....
    signIn("email", {
      email: `+91${mobileNumber}`,
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}verify-request?status=loading`,
    });
  };
  return (
    <Box as="form" color="black" onSubmit={handleFormSubmit}>
      <VStack pt="12" gap="4" w="90%" mx="auto">
        <VStack alignItems="flex-start" w="100%">
          <Text as="span" mb="0.05rem" color="black" fontWeight="medium">
            Phone
          </Text>
          <InputGroup>
            <InputLeftElement pointerEvents="none" h="100%" pl="4">
              +91
            </InputLeftElement>
            <Input
              borderColor="blackAlpha.700"
              h="61px"
              type="tel"
              maxLength={10}
            />
          </InputGroup>
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
        type="submit"
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
              <PinInputField borderColor="#808080" w="55px" h="61px" />
              <PinInputField borderColor="#808080" w="55px" h="61px" />
              <PinInputField borderColor="#808080" w="55px" h="61px" />
              <PinInputField borderColor="#808080" w="55px" h="61px" />
              <PinInputField borderColor="#808080" w="55px" h="61px" />
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

const SignInPage = (props: Props) => {
  // const [stepCount, setStepCount] = useState(1);

  // const goAhead = () => {
  //   setStepCount(sc => sc + 1);
  // };
  return (
    <FormLayout heading="Sign In">
      <StepOne />
      {/* {stepCount === 1 && <StepOne goAhead={goAhead} />} */}
      {/* {stepCount === 2 && <StepTwo />} */}
    </FormLayout>
  );
};

export default SignInPage;
