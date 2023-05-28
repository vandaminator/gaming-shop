import { useState, useEffect, useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import GameDb from "../../../utils/data/data";
import { isEqual } from "lodash";
import SearchContainer from "./SearchContainer";
import SearchDrawer from "./SearchDrawer";

function Search() {
  const gameDb = new GameDb();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsName = searchParams.get("q");
  const searchParamsGenres = searchParams.get("genres");
  const searchParamsTags = searchParams.get("tags");

  const name = searchParamsName !== null ? searchParamsName : "";

  const stringGenres = searchParamsGenres !== null ? searchParamsGenres : "";
  const stringTags = searchParamsTags !== null ? searchParamsTags : "";

  let genres: string[] | null = stringGenres.split(",");
  let tags: string[] | null = stringTags.split(",");

  genres = !isEqual(genres, [""]) ? genres : null;
  tags = !isEqual(tags, [""]) ? tags : null;

  const [Genres, setGenres] = useState(genres);
  const [Tags, setTags] = useState(tags);
  const listGames = gameDb.searchGames(name, { genres: Genres, tags: Tags });

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setSearchParams((prev) => {
      const genres = Genres ? Genres : [""];
      const tags = Tags ? Tags : [""];

      prev.set("genres", genres.join(","));
      prev.set("tags", tags.join(","));

      return prev;
    });
  }, [Genres, Tags]);

  return (
    <>
      <SearchContainer search={name} listItems={listGames} onOpen={onOpen} />
      <SearchDrawer
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onClose}
        gentag={{ Genres, Tags }}
        gentagSetters={{ setGenres, setTags }}
      />
    </>
  );
}

export default Search;
