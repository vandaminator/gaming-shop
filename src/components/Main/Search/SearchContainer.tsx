import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Result } from "../../../utils/data/objects/types/GameListTypes";

type Props = {
  search: string;
  listItems: Result[];
  gentag: {
    Genres: string[] | null;
    Tags: string[] | null;
  };
  gentagSetters: {
    setGenres: React.Dispatch<React.SetStateAction<string[] | null>>;
    setTags: React.Dispatch<React.SetStateAction<string[] | null>>;
  };
};

function SearchContainer({ search, listItems, gentag, gentagSetters }: Props) {
  const numItems = listItems.length;

  return (
    <Box>
      <Flex>
        {search !== "" && (
          <Text>
            Found {numItems} for ' {search} '
          </Text>
        )}
      </Flex>
    </Box>
  );
}

export default SearchContainer;
