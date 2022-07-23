import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { FileUploadInput } from "../components/form";
import { FormLayout } from "../components/layouts";

type Props = {};

const StepOne = ({ goAhead }: { goAhead: () => void }) => {
  return (
    <Box>
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
      {/*  - NAME */}
      {/*  - EMAIL */}
      {/* NEXT BUTTON */}
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
