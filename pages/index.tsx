import { VStack } from "@chakra-ui/react";
import React from "react";
import { OptionCard } from "../components/card";
import { DashboardLayout } from "../components/layouts";

type Props = {};

const DashboardPage = (props: Props) => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    const username = "Harsh";
    const options = [
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

    return (
      <DashboardLayout heading={`Hey ${username} 👋🏻`}>
        {options.map(({ name, onClick }, index) => (
          <OptionCard key={`${name}-${index}`} name={name} onClick={onClick} />
        ))}
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout heading="Let's VC">
      <VStack w="88%" mx="auto" gap="2">
        <OptionCard
          name="Sign In"
          onClick={() => {
            console.log("sign in click");
          }}
        />
        <OptionCard
          name="Sign Up"
          onClick={() => {
            console.log("sign Up click");
          }}
        />
      </VStack>
    </DashboardLayout>
  );
};

export default DashboardPage;
