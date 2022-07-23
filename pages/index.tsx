import { VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { OptionCard } from "../components/card";
import { DashboardLayout } from "../components/layouts";

// Types
type Props = {};
type Option = {
  name: string;
  onClick: () => void;
};

// helpers
const getPageHeading = (isLoggedIn: boolean): string => {
  if (isLoggedIn) {
    const username = "Harsh";
    return `Hey ${username} 👋🏻`;
  }
  return "Let's VC";
};

const getPageOptions = (isLoggedIn: boolean): Option[] => {
  if (isLoggedIn) {
    return [
      {
        name: "Create a room",
        onClick: () => {
          console.log("Create a room");
        },
      },
      {
        name: "Join a Room",
        onClick: () => {
          console.log("Join a Room");
        },
      },
    ];
  }
  return [
    {
      name: "Sign In",
      onClick: () => {
        console.log("Sign In");
      },
    },
    {
      name: "Sign Up",
      onClick: () => {
        console.log("Sign Up");
      },
    },
  ];
};

// Components
const DashboardPage = (props: Props) => {
  const [isLoggedIn] = useState(false);

  let pageHeading: string = getPageHeading(isLoggedIn);
  let options: Option[] = getPageOptions(isLoggedIn);

  return (
    <DashboardLayout heading={pageHeading}>
      <VStack w="88%" mx="auto" gap="2">
        {options.map(({ name, onClick }, index) => (
          <OptionCard key={`${name}-${index}`} name={name} onClick={onClick} />
        ))}
      </VStack>
    </DashboardLayout>
  );
};

export default DashboardPage;
