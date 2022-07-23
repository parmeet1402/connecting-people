import React from "react";
import { chakra, IconButton, Text } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  name: string;
  onClick?: () => void;
};

const OptionCard = ({ name, onClick }: Props) => {
  return (
    <chakra.button
      type="button"
      onClick={onClick}
      bgColor="white"
      color="black"
      w="100%"
      borderRadius="xl"
      h="36"
      pos="relative"
    >
      <Text pos="absolute" fontWeight="semibold" top="1rem" left="1rem">
        {name}
      </Text>
      <IconButton
        aria-label="next"
        variant="unstyled"
        display="flex"
        alignItems="center"
        justifyContent="center"
        isRound
        pos="absolute"
        bottom="0.5rem"
        right="1rem"
        icon={<FiArrowRight size="1.2rem" />}
      />
    </chakra.button>
  );
};

export default OptionCard;
