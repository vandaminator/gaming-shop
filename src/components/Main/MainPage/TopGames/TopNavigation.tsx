import { Flex, Stack, Box, Button } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "react-feather";

export interface TopNav {
  current: number;
  nextFunc: () => void;
  backFunc: () => void;
}

function TopNavigation({ current, nextFunc, backFunc }: TopNav) {
  const circleStates = [false, false, false, false, false];
  circleStates[current] = true;
  const circles = circleStates.map((value, index) => {
    return (
      <Box
        key={index}
        w={"10px"}
        h={"10px"}
        bgColor={value ? "accentBlue" : "lightOrange"}
        borderRadius={"full"}
      />
    );
  });

  return (
    <Flex justify={"space-between"} align={"center"}>
      <Button children={<ArrowLeft size={"20px"} />} onClick={backFunc} />
      <Stack direction={"row"}>{circles}</Stack>
      <Button children={<ArrowRight size={"20px"} />} onClick={nextFunc} />
    </Flex>
  );
}

export default TopNavigation;
