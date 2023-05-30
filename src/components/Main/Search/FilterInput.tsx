import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  InputGroup,
  InputRightElement,
  IconButton,
  Icon,
  InputLeftElement,
  Box,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import React from "react";
import { FaArrowRight, FaSearch } from "react-icons/fa";
import GameDb from "../../../utils/data/data";
import GenTag from "../Ui/GenTag";

type Props = {
  gentag: {
    Genres: string[] | null;
    Tags: string[] | null;
  };
  gentagSetters: {
    setGenres: React.Dispatch<React.SetStateAction<string[] | null>>;
    setTags: React.Dispatch<React.SetStateAction<string[] | null>>;
  };
};

type AddProps = {
  type: "genre" | "tag";
  name: string;
};

function FilterInput({
  gentag: { Genres, Tags },
  gentagSetters: { setGenres, setTags },
}: Props) {
  const props = {
    genre: { list: Genres, setter: setGenres },
    tag: { list: Tags, setter: setTags },
  };

  const genres = Genres ? Genres : [];
  const tags = Tags ? Tags : [];

  const gameDb = new GameDb();
  const addGameProps = gameDb.searchGameProp("", [...genres, ...tags]);

  const [search, setSearch] = React.useState("");
  const [addProps, setAddProps] = React.useState(addGameProps);

  React.useEffect(() => {
    const genres = Genres ? Genres : [];
    const tags = Tags ? Tags : [];

    const addGameProps = gameDb.searchGameProp(search, [...genres, ...tags]);
    setAddProps(addGameProps);
  }, [Genres, Tags, search]);

  const handleAdd = (value: AddProps) => {
    const { name, type } = value;
    const setter = props[type].setter;
    setter((prev) => {
      if (prev === null) return [name];
      prev.push(name);
      return prev;
    });
  };

  const handleRemove = (value: AddProps) => {
    const { name, type } = value;
    const setter = props[type].setter;
    setter((prev) => {
      if (prev === null) return null;
      const last = prev.filter((value) => value !== name);
      return last;
    });
  };

  const showList = addProps.map((value, index) => {
    return (
      <Box w="fit-content" h="fit-content" onClick={() => handleAdd(value)}>
        <GenTag {...value} key={index} />
      </Box>
    );
  });

  return (
    <Popover>
      <InputGroup>
        <InputLeftElement
          children={<Icon as={FaSearch} />}
          bgColor={"inherit"}
          borderRight={"none"}
        />
        <Input
          value={search}
          onInput={(e) => setSearch(e.currentTarget.value)}
        />
        <InputRightElement p={"10px"}>
          <PopoverTrigger>
            <IconButton
              aria-label="search btn"
              icon={<FaArrowRight />}
              bgColor={"inherit"}
            />
          </PopoverTrigger>
        </InputRightElement>
      </InputGroup>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Box h={'100px'} overflow={'scroll'}>{showList}</Box>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default FilterInput;
