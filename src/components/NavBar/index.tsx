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
  Flex,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  Link,
  Text,
  LinkOverlay,
  LinkBox,
  Icon,
} from "@chakra-ui/react";
import { Link as ReactRouterLink, useNavigate } from "react-router-dom";
import * as icons from "../icons";
import MenuItem from "./MenuItem";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { storeProps } from "../types";
import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef(document.getElementById("menu-btn"));
  const menuItemsInfo = useSelector(
    (state: storeProps) => state.system.menuItems
  );

  const menuItems = menuItemsInfo.map((value, index) => {
    const { link, name } = value;
    return <MenuItem link={link} name={name} key={index} />;
  });

  const [search, setSearch] = useState("");
  const navigate = useNavigate()

  return (
    <>
      <Box
        bg={"navyBlue"}
        w={"full"}
        padding={"29px"}
        color={"white"}
        display={"flex"}
        justifyContent={{ base: "space-between", xl: "space-around" }}
        alignItems={"center"}
      >
        <Button
          id="menu-btn"
          bg={"inherit"}
          w={"fit-content"}
          _hover={{ bg: "inherit" }}
          onClick={onOpen}
        >
          <Icon w="60px" h="60px" color="accentBlue" children={<Bars3Icon />} />
        </Button>
        <LinkBox display={"flex"} alignItems={"center"}>
          <Image src={icons.aLogo} w="60px" alt="" />
          <LinkOverlay as={ReactRouterLink} to="/">
            <Text
              id="gaming-logo"
              fontWeight={"bold"}
              color={"lightOrange"}
              fontSize={"3xl"}
              fontFamily="monospace"
              sx={{
                "@media (max-width: 760px)": {
                  display: "none",
                },
              }}
            >
              Game Nexus
            </Text>
          </LinkOverlay>
        </LinkBox>

        <InputGroup
          w={"40%"}
          h={"fit-content"}
          _focus={{ bg: "darkGrey" }}
          bg={"darkGrey"}
          borderRadius={"99"}
          variant={"filled"}
        >
          <InputLeftElement
            children={<MagnifyingGlassIcon color="#00BFFF" width={"20px"} />}
          />
          <Input
            bg={"inherit"}
            borderRadius={"99"}
            placeholder="Search ..."
            value={search}
            onInput={(e) => {
              setSearch(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') navigate(`/search?q=${search}`)
            }}
          />
        </InputGroup>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={menuRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"darkGrey"}>
          <DrawerCloseButton color={"lightOrange"} />
          <DrawerHeader color={"lightOrange"}>Menu</DrawerHeader>
          <DrawerBody m={0} p={0}>
            <Box>
              <Flex direction={"column"} justify="start" color={"lightOrange"}>
                {menuItems}
              </Flex>
            </Box>
          </DrawerBody>
          <DrawerFooter p={2} justifyContent={"start"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Link as={ReactRouterLink} to="#" color={"white"}>
                About
              </Link>
              <Link as={ReactRouterLink} to="#" color={"white"}>
                GitHub repo
              </Link>
              <Link as={ReactRouterLink} to="#" color={"white"}>
                Made By Phomolo Ntokoane
              </Link>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBar;
