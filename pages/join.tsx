import React from "react";
import { FormLayout } from "../components/layouts";
import { Box, VStack, Text, Input, IconButton } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

type Props = {};

const JoinRoom = (props: Props) => {
  return (
    <FormLayout heading="Join">
      <Box as="form" color="black">
        <VStack pt="12" gap="4" w="90%" mx="auto">
          <VStack alignItems="flex-start" w="100%">
            <Text as="span" mb="0.05rem" color="black" fontWeight="medium">
              Code
            </Text>
            <Input borderColor="blackAlpha.700" h="61px" type="email" />
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
    </FormLayout>
  );
};

export default JoinRoom;
