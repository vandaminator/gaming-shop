import { Routes, Route } from "react-router-dom";
import { Box, Center, SystemStyleObject, Text } from "@chakra-ui/react";
import MainPage from "./MainPage";
import GameProduct from "./GameProduct";
import Search from "./Search";

const styles: SystemStyleObject = {
  width: {
    base: "full",
    md: "container.md",
    lg: "container.lg",
    xl: "container.xl",
  },

  color: "accentBlue",
  padding: "20px",
};

function Main() {
  return (
    <Center w="full">
      <Box sx={styles}>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/game/:id" element={<GameProduct />} />
          <Route
            path="*"
            element={
              <Text fontSize={"6xl"} fontWeight={"bold"}>
                Not found
              </Text>
            }
          />
        </Routes>
      </Box>
    </Center>
  );
}

export default Main;
