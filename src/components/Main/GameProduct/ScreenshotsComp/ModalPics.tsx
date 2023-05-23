import { useReducer } from "react";
import { Box, Image, Flex, Text, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export interface ModalPicsProps {
  screenshots: string[];
  number: number;
}

export type actions = {
  type: "Next" | "Back";
};

export type intailState = {
  img: string;
  num: number;
};

function ModalPics({ screenshots, number }: ModalPicsProps) {
  const intailState = {
    img: screenshots[0],
    num: 0,
  };
  const reducer = (state: intailState, action: actions) => {
    let stateNum = state.num;
    const lastNum = number - 1;

    const isLast = state.num === lastNum;
    const isFirst = state.num === 0;

    switch (action.type) {
      case "Next":
        stateNum += 1;
        if (isLast) return { img: screenshots[0], num: 0 };
        else return { img: screenshots[stateNum], num: stateNum };
        break;
      case "Back":
        stateNum -= 1;
        if (isFirst) return { img: screenshots[lastNum], num: lastNum };
        else return { img: screenshots[stateNum], num: stateNum };
        break;

      default:
        return state;
        break;
    }
  };
  const [state, dispatch] = useReducer(reducer, intailState);

  const onNext = () => dispatch({ type: "Next" });
  const onBack = () => dispatch({ type: "Back" });

  return (
    <>
      <Image src={state.img} alt="imag"/>
      <Flex justify={"space-between"} align={"center"} py={'10px'}>
        <IconButton color={'black'} aria-label="left-button" icon={<FaArrowLeft />} onClick={onBack}/>
        <Text>{(state.num + 1).toString() + " / " + number}</Text>
        <IconButton color={'black'} aria-label="right-button" icon={<FaArrowRight />} onClick={onNext}/>
      </Flex>
    </>
  );
}

export default ModalPics;
