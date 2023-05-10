import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import { TopGamesProps } from "./TopGames";

function MobileTopGames({
  background_image,
  name,
  tags,
  genres,
}: TopGamesProps) {
  return (
    <AspectRatio
      w={{
        base: "full",
        lg: "60%",
      }}
      ratio={{ base: 1.7 / 1 }}
      padding={"10px"}
      display={{
        base: "flex",
        lg: "none",
      }}
    >
      <Box
        backgroundImage={background_image}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
        sx={{
          backgroundPositionX: "right",
          backgroundPositionY: "center",
        }}
        filter={"drop-shadow(0px 11px 4px rgba(0, 0, 0, 0.25))"}
        boxShadow={{
          base: "10px 10px 400px 0px rgba(0,0,0,0.75) inset",
          lg: "199px 10px 400px 66px rgba(0,0,0,1) inset",
        }}
        borderRadius={"xl"}
        m="10px"
      >
        <Flex
          color="white"
          fontWeight="bold"
          p={"20px"}
          direction="column"
          justify={"end"}
          align={"start"}
          w="full"
          h="full"
        >
          <Text>{name}</Text>
        </Flex>
      </Box>
    </AspectRatio>
  );
}

export default MobileTopGames;
