import React, { useState } from "react";
import { FormLayout } from "../components/layouts";

type Props = {};

const StepOne = ({ goAhead }: { goAhead: () => void }) => {
  return (
    <div>
      STEP ONE
      {/*  - UPLOAD INPUT FORM */}
      {/*  - NAME */}
      {/*  - EMAIL */}
      {/* NEXT BUTTON */}
    </div>
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
