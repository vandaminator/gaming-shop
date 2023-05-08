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
} from "@chakra-ui/react";
import * as icons from "../icons";
import MenuItem from "./MenuItem";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { storeProps } from "../types";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const menuRef = useRef(document.getElementById("menu-btn"));
  const menuItemsInfo = useSelector((state: storeProps) => state.system.menuItems)

  const gameDb = useSelector((state: storeProps) => state.gameDb.data)
  
  const menuItems = menuItemsInfo.map((value, index) => {
    const { icon, link, name } = value;
    return <MenuItem icon={icon} link={link} name={name} key={index} />;
  });

  return (
    <>
      <Box
        bg={"navyBlue"}
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
          sx={{
            "@media (min-width: 1024px)": {
              display: "none",
            },
          }}
        >
          <Image src={icons.menuIcon} alt="" />
        </Button>
        <LinkBox display={"flex"} alignItems={"center"}>
          <Image src={icons.logoIcon} alt="" width={"60px"} />
          <LinkOverlay href="#">
            <Text
              id="gaming-logo"
              fontWeight={"bold"}
              color={"lightOrange"}
              fontSize={"3xl"}
              fontFamily="monospace"
              sx={{
                '@media (max-width: 760px)': {
                  display: 'none'
                }
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
            children={<Image src={icons.searchIcon} w={"20px"} />}
          />
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
              <Link href="#" color={"white"}>
                About
              </Link>
              <Link href="#" color={"white"}>
                GitHub repo
              </Link>
              <Link href="#" color={"white"}>
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
