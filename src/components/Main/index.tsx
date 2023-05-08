import { Box, Center, Container, SystemStyleObject } from "@chakra-ui/react";
import MainPage from "./MainPage";

const styles: SystemStyleObject = {
  width: {
    base: "full",
    md: "container.md",
    lg: "container.lg",
    xl: "container.xl",
  },

  color: "accentBlue",
  padding: '20px'
};

function Main() {
  return (
    <Center w="full">
      <Box sx={styles}>
        <MainPage />
      </Box>
    </Center>
  );
}

export default Main;
