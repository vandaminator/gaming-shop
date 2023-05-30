import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";
import GenTag from "../Ui/GenTag";
import FilterInput from "./FilterInput";

type Props = {
  isOpen: boolean;
  onClose(): void;
  onOpen(): void;
  gentag: {
    Genres: string[] | null;
    Tags: string[] | null;
  };
  gentagSetters: {
    setGenres: React.Dispatch<React.SetStateAction<string[] | null>>;
    setTags: React.Dispatch<React.SetStateAction<string[] | null>>;
  };
};

function SearchDrawer({
  isOpen,
  onClose,
  onOpen,
  gentag,
  gentagSetters,
}: Props) {
  const { Genres, Tags } = gentag
  const { setGenres, setTags } = gentagSetters


  const props = {
    genre: { list: Genres, setter: setGenres },
    tag: { list: Tags, setter: setTags },
  };

  const handleRemoveProp = (name: string, type: "genre" | "tag") => {
    const prop = props[type];
    if (prop.list === null) return;
    const state = prop.list.filter((value) => value !== name);
    prop.setter(state);
  };
  const mkProp = (name: string, type: "genre" | "tag", index: number) => {
    return (
      <GenTag
        name={name}
        type={type}
        isButton
        btnFunc={() => handleRemoveProp(name, type)}
        key={index}
      />
    );
  };

  const genres = Genres ? Genres.map((value, index) => mkProp(value, "genre", index)) : null;
  const tags = Tags ? Tags.map((value, index) => mkProp(value, "tag", index)) : null;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent bgColor={"navyBlue"} color={"accentBlue"}>
        <DrawerCloseButton />
        <DrawerHeader>Filter</DrawerHeader>

        <DrawerBody>
          <FilterInput gentag={gentag} gentagSetters={gentagSetters}/>
          <Box>
            {genres && <>
            <Text>Genres</Text>
            <Flex wrap={'wrap'}>{genres}</Flex>
            </>}
            {tags && <>
            <Text>Tags</Text>
            <Flex wrap={'wrap'}>{tags}</Flex>
            </>}
          </Box>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default SearchDrawer;
