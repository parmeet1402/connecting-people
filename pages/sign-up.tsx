import React, { useState } from "react";
import { Box, Input, Text, VStack, IconButton } from "@chakra-ui/react";
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
    <div>
      STEP TWO
      {/*  - OTP Input  */}
      {/* BACK  BUTTON */}
    </div>
  );
};

const SignUpPage = (props: Props) => {
  const [stepCount, setStepCount] = useState(1);

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
