import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Result } from "../../../utils/data/objects/types/GameListTypes";
import GamesList from "../Ui/GamesList";

type Props = {
  search: string;
  listItems: Result[];
  onOpen: () => void
};

function SearchContainer({ search, listItems, onOpen}: Props) {
  const numItems = listItems.length;
  const isItems = numItems > 0
  const isSearchThere = search !== "";

  return (
    <Box>
      <Flex justify={isSearchThere ? "space-between" : "end"}>
        {isSearchThere && (
          <Text mr={"10px"} color={'white'} fontWeight={'semibold'} fontSize={'26px'}>
            Found {numItems} for ' {search} '
          </Text>
        )}
        <Button
          bgColor={"lightOrange"}
          fontWeight={'bold'}
          color={"navyBlue"}
          borderRadius={"md"}
          justifySelf={"end"}
          display={isItems ? "inline-flex" : "none"}
          onClick={onOpen}
        >
          Filter
        </Button>
      </Flex>
      {isItems && <GamesList listGames={listItems} />}
    </Box>
  );
}

export default SearchContainer;
