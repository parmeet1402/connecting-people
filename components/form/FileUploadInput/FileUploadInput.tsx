import React from "react";
import { Flex } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

type Props = {};

const FileUploadInput = (props: Props) => {
  return (
    <Flex
      h="36"
      w="36"
      alignItems="center"
      justifyContent="center"
      border="1px"
      borderColor="black"
      borderRadius="xl"
    >
      <FiPlus size="1.2rem" color="#000" />
    </Flex>
  );
};

export default FileUploadInput;
