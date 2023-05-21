import { Box, Button, Flex, SystemStyleObject, Text } from "@chakra-ui/react";
import GenTag from "../../Ui/GenTag";
import { Developer } from "../../../../utils/data/objects/types/GameDataTypes";
import { useState } from "react";
import MoreBtn from "./MoreBtn";

export interface GamePropsInt {
  tags: Developer[];
  genres: Developer[];
}

function GameProps({ tags, genres }: GamePropsInt) {
  const HeaderText: SystemStyleObject = {
    fontSize: "md",
    fontWeight: "semibold",
    color: "white",
  };

  const genTagStyles: SystemStyleObject = {
    // fontSize: "20px",
  };

  const Tags = tags.map((value, index) => {
    const { name } = value;
    return <GenTag type="tag" name={name} key={index} styles={genTagStyles} />;
  });
  const Genres = genres.map((value, index) => {
    const { name } = value;
    return (
      <GenTag type="genre" name={name} key={index} styles={genTagStyles} />
    );
  });

  const numGenres = Genres.length;
  const numTags = Tags.length;

  const [showGenres, setShowGenres] = useState(Genres.slice(0, 6));
  const [showTags, setShowTags] = useState(Tags.slice(0, 6));

  const handleMore = (type: "tag" | "genre") => {
    if (type === "genre") setShowGenres(Genres);
    if (type === "tag") setShowTags(Tags);
  };
  const handleLess = (type: "tag" | "genre") => {
    if (type === "genre") setShowGenres(Genres.slice(0, 6));
    if (type === "tag") setShowTags(Tags.slice(0, 6));
  };

  return (
    <Box>
      <Text my={"10px"} sx={HeaderText}>
        Genres
      </Text>
      <Flex wrap={"wrap"}>
        {showGenres}
        <MoreBtn
          num={numGenres}
          handleLess={() => handleLess("genre")}
          handleMore={() => handleMore("genre")}
        />
      </Flex>
      <Text my={"10px"} sx={HeaderText}>
        Tags
      </Text>
      <Flex wrap={"wrap"}>
        {showTags}
        <MoreBtn
          num={numTags}
          handleLess={() => handleLess("tag")}
          handleMore={() => handleMore("tag")}
        />
      </Flex>
    </Box>
  );
}

export default GameProps;
