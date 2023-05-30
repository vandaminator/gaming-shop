import {useState, useReducer} from 'react'
import { Box, Image, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { GameScreenshots } from "../../../../utils/data/objects/types/GameScreenShotsTypes";
import { PlusIcon } from "@heroicons/react/20/solid";
import ModalPics from './ModalPics';

export interface ScreenshotsProps {
  screenshotsinfo: GameScreenshots;
}


function Screenshots({ screenshotsinfo }: ScreenshotsProps) {
  const number = screenshotsinfo.count
  const screenshots = screenshotsinfo.results.map((value) => value.image);

  const boxes = screenshots.slice(0, 3).map((value, index) => {
    return (
      <Image src={value} alt="" w={{ base: "25%", xl: "100%" }} key={index} />
    );
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
      w={{xl: "40%"}}
        bgColor={"navyBlue"}
        align={"center"}
        justify={"space-around"}
        direction={{ xl: "column" }}
        p={"10px"}
      >
        {boxes}
        <IconButton
          aria-label="modal screenshots"
          onClick={onOpen}
          icon={<PlusIcon />}
        />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={"xl"}>
        <ModalOverlay />
        <ModalContent bgColor={'darkGrey'} color={'white'}>
          <ModalHeader>Screenshots</ModalHeader>
          <ModalCloseButton />
          <ModalBody><ModalPics screenshots={screenshots} number={number} /></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Screenshots;
