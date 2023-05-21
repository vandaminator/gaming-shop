import { Button, Flex, Text } from "@chakra-ui/react";
import { FaCartArrowDown } from "react-icons/fa";

export interface BuyButtonProps {
  price: number;
}

function BuyButton({ price }: BuyButtonProps) {
  return (
    <Button
      w="full"
      color={"white"}
      bgColor={"accentBlue"}
      fontWeight={"bold"}
      _hover={{
        color: "black",
      }}
    >
      <Flex align={"center"} fontSize={"lg"}>
        <Text mx={"10px"}>{"R " + price.toString()}</Text>
        <FaCartArrowDown />
      </Flex>
    </Button>
  );
}

export default BuyButton;
