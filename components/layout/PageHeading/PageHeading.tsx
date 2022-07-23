import { Heading } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const PageHeading = ({ children }: Props) => {
  return (
    <Heading textAlign="center" fontWeight="normal" size="2xl">
      {children}
    </Heading>
  );
};

export default PageHeading;
