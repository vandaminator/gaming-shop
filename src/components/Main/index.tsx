import { Routes, Route } from "react-router-dom";
import { Box, Center, SystemStyleObject } from "@chakra-ui/react";
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
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/yo" element={<Box bgColor={'red'} h={'200px'} />} /> 
        </Routes>
      </Box>
    </Center>
  );
}

export default Main;
