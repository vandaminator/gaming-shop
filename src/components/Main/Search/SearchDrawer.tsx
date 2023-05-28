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
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { isEqual } from "lodash";
import GenTag from "../Ui/GenTag";

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
  gentag: { Genres, Tags },
  gentagSetters: { setGenres, setTags },
}: Props) {
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
  const mkProp = (name: string, type: "genre" | "tag") => {
    return (
      <GenTag
        name={name}
        type={type}
        isButton
        btnFunc={() => handleRemoveProp(name, type)}
      />
    );
  };

  const genres = Genres ? Genres.map((value) => mkProp(value, "genre")) : null;
  const tags = Tags ? Tags.map((value) => mkProp(value, "tag")) : null;

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
      <DrawerOverlay />
      <DrawerContent bgColor={"navyBlue"} color={"accentBlue"}>
        <DrawerCloseButton />
        <DrawerHeader>Filter</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Search Genre or Tag" />
          <Box>
            {genres && <>
            <Text>Genres</Text>
            <Flex wrap={'wrap'}>{genres}</Flex>
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
