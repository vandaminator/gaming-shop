import { Box, Text, Image } from "@chakra-ui/react";
import { TopGamesProps } from "./TopGames";
import { ArrowLeft, ArrowRight } from "react-feather";

function DesktopTopGames({
  background_image,
  name,
  description_raw,
}: TopGamesProps) {
  return (
    <Box
      display={{
        base: "none",
        lg: "flex",
      }}
      h={"300px"}
    >
      <Box
        bg={"#213A5299"}
        p={"20px"}
        w={"40%"}
        color={"white"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        borderLeftRadius={"lg"}
      >
        <Text fontWeight={"bold"} fontSize={"xl"}>
          {name}
        </Text>
        <Text
          w={{ base: "full" }}
          h={"90%"}
          padding="20px"
          overflow={"scroll"}
          fontWeight="semibold"
          fontSize={"sm"}
        >
          {description_raw}
        </Text>
      </Box>
      <Image
        borderRightRadius={"xl"}
        backgroundSize={"cover"}
        src={background_image}
        w={"60%"}
        alt=""
      />
      <Box>
        <ArrowLeft />
        <ArrowRight />
      </Box>
    </Box>
  );
}

export default DesktopTopGames;
