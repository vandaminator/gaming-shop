import { Box, Button, Icon, SystemStyleObject } from "@chakra-ui/react";
import { X } from "react-feather";

interface genTag {
  type: "genre" | "tag";
  name: string;
  isButton?: boolean;
  btnFunc?: () => void;
}

function GenTag({ type, name, isButton = false, btnFunc = () => 1 }: genTag) {
  const genreStyle: SystemStyleObject = {
    backgroundColor: "darkGrey",
    color: "lightOrange",
    border: "1px solid",
};
  const tagStyle: SystemStyleObject = {
    backgroundColor: "accentBlue",
    color: "navyBlue",
    border: "1px solid white",
  };

  const btnHoverGenre: SystemStyleObject = {
    bg: 'lightOrange',
    color: "darkGrey"
  }
  const btnHoverTag: SystemStyleObject = {
    bg: 'navyBlue',
    color: "accentBlue"
  }

  const btnHover = type === 'genre' ? btnHoverGenre : btnHoverTag

  let style = type === "genre" ? genreStyle : tagStyle;
  if (isButton) {
    style = {
        ...style,
        fontSize: "md",
        alignItems: 'center',
        pr: "20px"
    }
  }
  return (
    <Box
      w="fit-content"
      display={"flex"}
      gap={"10px"}
      padding={"5px"}
      h="fit-content"
      fontWeight={"bold"}
      fontSize={"sm"}
      sx={style}
      borderRadius={'md'}
    >
      {isButton && (
        <Button _hover={btnHover} p="0" m="0" w='fit-content' bg={"inherit"} onClick={btnFunc}>
          <Icon children={<X strokeWidth={'5px'} />} />
        </Button>
      )}
      {name}
    </Box>
  );
}

export default GenTag;
