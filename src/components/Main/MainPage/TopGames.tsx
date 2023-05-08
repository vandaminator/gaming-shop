import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { storeProps } from "../../types";

function TopGames() {
  const gameDb = useSelector((state: storeProps) => state.gameDb.data);
  const topGames = gameDb.showTopGames(5);
  const backGroundImage = topGames[1].background_image;
  return (
    <AspectRatio w="full" ratio={{ base: 1 / 0.6 }}>
      <Box position={"relative"}>
        <Image
          src={backGroundImage}
          borderRadius={"xl"}
          filter={"auto"}
          brightness={"50%"}
          boxShadow={"75px -26px 44px 5px rgba(0,0,0,0.57) inset"}
          sx={{
            zIndex: "-10",
            top: "0",
            position: "absolute",
          }}
        />
        <Box
          w="full"
          h="100%"
          display="flex"
          flexDir="column"
          justifyContent="end"
          p='20px'
        >
          yo
        </Box>
      </Box>
    </AspectRatio>
  );
}

export default TopGames;
