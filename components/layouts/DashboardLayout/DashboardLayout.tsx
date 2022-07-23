import React from "react";
import { PageHeading } from "../../layout";
import { Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
  heading: string;
};

const DashboardLayout = ({ heading, children }: Props) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      gap="16"
    >
      <PageHeading>{heading}</PageHeading>
      {children}
    </Flex>
  );
};

export default DashboardLayout;
