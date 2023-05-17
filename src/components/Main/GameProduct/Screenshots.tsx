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
import { GameScreenshots } from "../../../utils/data/objects/types/GameScreenShotsTypes";
import { PlusIcon } from "@heroicons/react/20/solid";

export interface ScreenshotsProps {
  screenshotsinfo: GameScreenshots;
}

function Screenshots({ screenshotsinfo }: ScreenshotsProps) {
  const number = screenshotsinfo.count;
  const screenshots = screenshotsinfo.results.map((value) => value.image);

  const boxes = screenshots.slice(0, 2).map((value, index) => {
    return <Image src={value} alt="" width={"33%"} key={index} />;
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex w={"60%"}>
        {boxes}
        <IconButton aria-label="modal screenshots" icon={<PlusIcon />} />
      </Flex>

      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Screenshots</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Screenshots;
