import {
  Box,
  Button,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { cancelIcon, logoIcon, menuIcon, searchIcon } from "../icons";
import { useRef } from "react";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef(document.getElementById("menu-btn"));
  return (
    <>
      <Box
        bg={"navyBlue"}
        padding={"29px"}
        color={"white"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button
          id="menu-btn"
          bg={"inherit"}
          w={"fit-content"}
          _hover={{ bg: "inherit" }}
          onClick={onOpen}
        >
          <Image src={menuIcon} alt="" width={"40px"} />
        </Button>
        <a href="#">
          <Image src={logoIcon} alt="" width={"60px"} />
        </a>

        <InputGroup
          w={"40%"}
          h={"fit-content"}
          _focus={{ bg: "darkGrey" }}
          bg={"darkGrey"}
          borderRadius={"99"}
          variant={"filled"}
        >
          <InputLeftElement children={<Image src={searchIcon} w={"20px"} />} />
          <Input bg={"inherit"} borderRadius={"99"} placeholder="Search ..." />
        </InputGroup>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={menuRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBar;
