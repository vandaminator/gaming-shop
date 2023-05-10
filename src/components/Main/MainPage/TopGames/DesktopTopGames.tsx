import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Icon,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { TopGamesProps } from "./TopGames";
import { ArrowLeft, ArrowRight } from "react-feather";
import { Developer } from "../../../../utils/data/objects/types/GameDataTypes";
import GenTag from "../../Ui/GenTag";

function DesktopTopGames({
  background_image,
  name,
  tags: Tags,
  genres: Genres,
}: TopGamesProps): JSX.Element {
  const mkComponent = (prop: Developer, type: "genre" | "tag") => {
    const { name } = prop;
    return <GenTag name={name} type={type} isButton />;
  };

  const genres = Genres.slice(0, 3).map((value) => mkComponent(value, 'genre'))
  const tags = Tags.slice(0, 3).map((value) => mkComponent(value, 'tag'))
  const gameProps = [...genres, ...tags];
  gameProps.sort(() => (Math.random() > 0.5 ? 1 : -1));

  return (
    <Grid
      display={{
        base: "none",
        lg: "grid",
      }}
      h={"300px"}
      templateRows={"1fr"}
      bg={"#213a52"}
    >
      <GridItem display={"flex"}>
        <Box
          bg={"#213a52"}
          p={"20px"}
          w={"30%"}
          h={"full"}
          color={"white"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          borderLeftRadius={"lg"}
        >
          <Text fontWeight={"bold"} fontSize={"xl"}>
            {name}
          </Text>
          <Stack direction={'row'} spacing={0} wrap={'wrap'}>{gameProps}</Stack>
          <Stack direction={'row'} w={'full'} justify={'space-between'}>
            <IconButton
              w="10%"
              colorScheme="blue"
              aria-label="arrowleft"
              children={<ArrowLeft />}
            />
            <Stack>1 2 3 4 </Stack>
            <IconButton
              w="10%"
              padding={"5px"}
              colorScheme="blue"
              aria-label="arrowright"
              children={<ArrowRight />}
            />
          </Stack>
        </Box>
        <Image
          borderRightRadius={"xl"}
          backgroundSize={"cover"}
          src={background_image}
          w={"70%"}
          alt=""
        />
      </GridItem>
    </Grid>
  );
}

export default DesktopTopGames;
