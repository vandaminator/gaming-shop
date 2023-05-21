import { Box, Flex, SystemStyleObject, Text } from "@chakra-ui/react";
import { Rating } from "../../../utils/data/objects/types/GameDataTypes";

interface RatingsProps {
  ratings: Rating[];
  ratingsTextStyles?: SystemStyleObject;
}

function Ratings({ ratings, ratingsTextStyles = {} }: RatingsProps) {
  const rates = ratings.map((value, index) => {
    const { percent: Percent, title } = value;
    const percent = Percent.toString() + "%";

    let bg;
    switch (title) {
      case "exceptional":
        bg = "linear-gradient(180deg,#b4ec51,#429321)";
        break;
      case "recommended":
        bg = "linear-gradient(0deg,#4354b9,#649bff)";
        break;
      case "meh":
        bg = "linear-gradient(180deg,#fad961,#f76b1c)";
        break;
      case "skip":
        bg = "linear-gradient(180deg,#ff5764,#f11a2a)";
        break;
      default:
        bg = "grey";
        break;
    }

    return <Box key={index} w={percent} h={"full"} bg={bg} />;
  });
  const meaning = [
    { title: "exceptional", color: "linear-gradient(180deg,#b4ec51,#429321)" },
    { title: "recommended", color: "linear-gradient(0deg,#4354b9,#649bff)" },
    { title: "meh", color: "linear-gradient(180deg,#fad961,#f76b1c)" },
    { title: "skip", color: "linear-gradient(180deg,#ff5764,#f11a2a)" },
  ];
  const colorMeaning = meaning.map((value, index) => {
    const { title, color } = value;

    return (
      <Flex
        gap={"5px"}
        key={index}
        w={"fit-content"}
        align={"baseline"}
      >
        <Box w={"10px"} h={"10px"} bg={color} borderRadius={"full"} />
        <Text>{title}</Text>
      </Flex>
    );
  });

  return (
    <>
      <Flex w={"full"} h={"30px"}>
        {rates}
      </Flex>
      <Flex w={"full"} wrap={"wrap"} gap={"10px"} sx={ratingsTextStyles}>
        {colorMeaning}
      </Flex>
    </>
  );
}

export default Ratings;

// [
//     { "id": 5, "title": "exceptional", "count": 3757, "percent": 59.04 },
//     { "id": 4, "title": "recommended", "count": 2091, "percent": 32.86 },
//     { "id": 3, "title": "meh", "count": 402, "percent": 6.32 },
//     { "id": 1, "title": "skip", "count": 114, "percent": 1.79 }
//   ],
