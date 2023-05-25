import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import GameDb from "../../../utils/data/data";
import { isEqual } from "lodash";

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
  tags = !isEqual(genres, [""]) ? genres : null;

  const [Genres, setGenres] = useState(genres);
  const [Tags, setTags] = useState(tags);
  const listGames = gameDb.searchGames(name, { genres: Genres, tags: Tags });

  useEffect(() => {
    setSearchParams((prev) => {
      const genres = Genres ? Genres : [""]
      const tags = Tags ? Tags : [""]

      prev.set('genres', genres.join(','))
      prev.set('tags', tags.join(','))

      return prev
    })
  }, [Genres, Tags])
  

  return <Box>{name}</Box>;
}

export default Search;
