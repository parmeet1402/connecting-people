import React from "react";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { FiArrowLeft } from "react-icons/fi";

// Components
import { PageHeading } from "../../layout";

type Props = {
  heading: string;
  children?: React.ReactNode;
};

const FormLayout = ({ heading, children }: Props) => {
  return (
    <Box pos="relative">
      <Flex pos="absolute" top="1rem" w="100vw" px="1rem">
        <IconButton
          aria-label="previous"
          variant="unstyled"
          display="flex"
          alignItems="center"
          justifyContent="center"
          isRound
          icon={<FiArrowLeft size="1.2rem" />}
        />
      </Flex>
      <Flex h="32vh" alignItems="center" justifyContent="center">
        <PageHeading>{heading}</PageHeading>
      </Flex>
      <Box h="68vh" bg="white" borderTopRadius="xl" pos="relative">
        {children}
      </Box>
    </Box>
  );
};

export default FormLayout;
