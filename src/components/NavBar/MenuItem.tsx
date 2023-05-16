import { Link as ReactRouterLink } from "react-router-dom";
import { Image, Text, LinkBox, LinkOverlay, Icon } from "@chakra-ui/react";
import { ShoppingCartIcon, StarIcon, TagIcon } from "@heroicons/react/20/solid";

interface MenuItemProps {
  name: string;
  link: string;
}

function MenuItem({  name, link }: MenuItemProps) {
  const icons = {
    Cart: <ShoppingCartIcon />,
    Popular: <StarIcon />,
    Genres: <TagIcon />,
    Tags: <TagIcon />,
  };

  let show;

  switch (name) {
    case 'Cart':
      show = <ShoppingCartIcon />
      break;
    case 'Popular':
      show = <StarIcon />
      break;
    case 'Genres':
      show = <TagIcon />
      break;
    case 'Tags':
      show = <TagIcon />
      break;
  
    default:
      show = <TagIcon />
      break;
  }

  return (
    <LinkBox
      bg={"navyBlue"}
      borderBottom={"4px"}
      borderBottomColor={"accentBlue"}
      color={"lightOrange"}
      width={"full"}
      height={"80px"}
    >
      <LinkOverlay
      as={ReactRouterLink}
        pl={"10px"}
        h="full"
        to={link}
        display={"flex"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        {/* <Image src={icon} width={"40px"} mr={"20px"} /> */}
        <Icon width={"40px"} h={'40px'} mr={"20px"} color={'accentBlue'} children={show} />
        <Text fontSize={"26px"}>{name}</Text>
      </LinkOverlay>
    </LinkBox>
  );
}

export default MenuItem;
