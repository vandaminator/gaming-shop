import React from "react";
import { Button } from "@chakra-ui/react";

export interface MoreBtnProps {
  num: number;
  handleMore: () => void;
  handleLess: () => void;
}

function MoreBtn({ num, handleMore, handleLess }: MoreBtnProps) {
  const [isMore, setIsMore] = React.useState(false);

  const handleClick = () => {
    if (isMore) {
      handleLess();
      setIsMore(false);
    } else {
      handleMore();
      setIsMore(true);
    }
  };
  return (
    <Button
      display={num > 6 ? "inline-flex" : "none"}
      bgColor={"inherit"}
      onClick={handleClick}
    >
      {isMore ? "less" : "more"}
    </Button>
  );
}

export default MoreBtn;
