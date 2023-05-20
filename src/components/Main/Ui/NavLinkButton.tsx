import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

export interface MoreInfoButtonProps {
  text?: string;
  link: string
}

function NavLinkButton({  text = "More Info", link }: MoreInfoButtonProps) {
  return (
    <LinkBox>
      <LinkOverlay as={ReactRouterLink} to={link}>
        <Button
          as={motion.button}
          w="full"
          my={"10px"}
          bgColor={"#0c1d2c"}
          color={"white"}
          justifySelf={{ xl: "end" }}
          whileHover={{ scale: "1.1", color: "#0c1d2c" }}
          whileTap={{ scale: "0.9" }}
        >
          {text}
        </Button>
      </LinkOverlay>
    </LinkBox>
  );
}

export default NavLinkButton;
