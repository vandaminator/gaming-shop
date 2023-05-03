import {
  Box,
  Button,
  Image,
  InputGroup,
  Input,
  InputLeftElement,
} from "@chakra-ui/react";
import { cancelIcon, logoIcon, menuIcon, searchIcon } from "../icons";

function NavBar() {
  return (
    <Box
      bg={"navyBlue"}
      padding={"29px"}
      color={"white"}
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Button bg={"inherit"} w={"fit-content"} _hover={{bg: "inherit"}}>
        <Image src={menuIcon} alt="" width={'40px'} />
      </Button>
      <a href="#">
        <Image src={logoIcon} alt="" width={'60px'} />
      </a>

      <InputGroup
        w={"40%"}
        h={"fit-content"}
        _focus={{ bg: "darkGrey" }}
        bg={"darkGrey"}
        borderRadius={"99"}
        variant={"filled"}
      >
        <InputLeftElement children={<Image src={searchIcon} w={'20px'} />} />
        <Input bg={"inherit"} borderRadius={"99"} placeholder="Search ..." />
      </InputGroup>
    </Box>
  );
}

export default NavBar;
