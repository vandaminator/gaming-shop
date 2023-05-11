import * as chakra from "@chakra-ui/react";
import { TopGamesProps } from "./TopGames";
import { ArrowLeft, ArrowRight } from "react-feather";
import { StarIcon } from "@heroicons/react/20/solid";
import { Developer } from "../../../../utils/data/objects/types/GameDataTypes";
import GenTag from "../../Ui/GenTag";
import { motion } from "framer-motion";
import Ratings from "./Ratings";

function DesktopTopGames({
  background_image,
  name,
  tags: Tags,
  genres: Genres,
  rating,
  ratings,
}: TopGamesProps): JSX.Element {
  const mkComponent = (prop: Developer, type: "genre" | "tag", key: number) => {
    const { name } = prop;
    return <GenTag name={name} type={type} key={key} />;
  };

  const genres = Genres.slice(0, 3).map((value, index) => mkComponent(value, "genre", index));
  const tags = Tags.slice(0, 3).map((value, index) => mkComponent(value, "tag", index));
  const gameProps = [...genres, ...tags];
  gameProps.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const activeSlide = 0;
  const slideActive = [false, false, false, false, false];
  slideActive[activeSlide] = true;
  const Slides = slideActive.map((value, index) => (
    <chakra.Box
      w="10px"
      h="10px"
      borderRadius={"full"}
      backgroundColor={value ? "accentBlue" : "lightOrange"}
      key={index}
    />
  ));

  return (
    <chakra.Grid
      display={{
        base: "none",
        lg: "grid",
      }}
      h={"300px"}
      templateRows={"1fr"}
      bg={"#213a52"}
    >
      <chakra.GridItem display={"flex"}>
        <chakra.Box
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
          <chakra.Box>
            <chakra.Text fontWeight={"bold"} fontSize={"xl"}>
              {name}
            </chakra.Text>
            <chakra.Flex my={"20px"} direction={"row"} wrap={"wrap"} bg={"#1b1b1bc3"}>
              {gameProps}
            </chakra.Flex>
            <chakra.Flex>
              <chakra.Text>Rating: </chakra.Text>
              <StarIcon width={'20px'} color="yellow" />
              <chakra.Text>{rating}</chakra.Text>
            </chakra.Flex>
            <Ratings ratings={ratings} />
            <chakra.Button
              as={motion.button}
              whileHover={{ scale: "1.1", color: "#3a5d7c" }}
              my={"10px"}
              bg="#0a151f"
            >
              <chakra.Text>More Info</chakra.Text>
            </chakra.Button>
          </chakra.Box>
          <chakra.Stack direction={"row"} w={"full"} justify={"space-between"}>
            <chakra.IconButton
              w="10%"
              colorScheme="blue"
              aria-label="arrowleft"
              children={<ArrowLeft />}
            />
            <chakra.Stack direction={"row"} align={"center"}>
              {Slides}
            </chakra.Stack>
            <chakra.IconButton
              w="10%"
              padding={"5px"}
              colorScheme="blue"
              aria-label="arrowright"
              children={<ArrowRight />}
            />
          </chakra.Stack>
        </chakra.Box>
        <chakra.Image
          borderRightRadius={"xl"}
          backgroundSize={"cover"}
          src={background_image}
          w={"70%"}
          alt=""
        />
      </chakra.GridItem>
    </chakra.Grid>
  );
}

export default DesktopTopGames;
