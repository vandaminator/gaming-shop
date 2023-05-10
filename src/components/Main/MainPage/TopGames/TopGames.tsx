import { useSelector } from "react-redux";
import { storeProps } from "../../../types";
import MobileTopGames from "./MobileTopGames";
import DesktopTopGames from "./DesktopTopGames";
import { Developer } from "../../../../utils/data/objects/types/GameDataTypes";

export interface TopGamesProps {
  background_image: string;
  name: string;
  genres: Developer[]
  tags: Developer[]
}

function TopGames() {
  const gameDb = useSelector((state: storeProps) => state.gameDb.data);
  const topGames = gameDb.showTopGames(5);
  const { background_image, name, genres, tags } = topGames[1];
  return (
    <>
      <MobileTopGames
        background_image={background_image}
        name={name}
        tags={tags}
        genres={genres}
      />
      <DesktopTopGames
        background_image={background_image}
        name={name}
        tags={tags}
        genres={genres}
      />
    </>
  );
}

export default TopGames;
