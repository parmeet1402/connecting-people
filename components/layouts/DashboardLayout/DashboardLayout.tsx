import React from "react";
import { PageHeading } from "../../layout";
import { Flex, IconButton } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  isLoggedIn: Boolean;
  heading: string;
};

const DashboardLayout = ({ heading, isLoggedIn, children }: Props) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      gap="16"
    >
      <PageHeading>{heading}</PageHeading>
      {isLoggedIn && (
        <IconButton
          aria-label="logout"
          pos="absolute"
          right="1rem"
          top="1rem"
          isRound
          variant="unstyled"
          display="flex"
          alignItems="center"
          justifyContent="center"
          icon={<FiLogOut />}
          onClick={() => {
            signOut();
          }}
        />
      )}

      {children}
    </Flex>
  );
};

export default DashboardLayout;
