import { useSelector } from "react-redux";
import { storeProps } from "../../../types";
import MobileTopGames from "./MobileTopGames";
import DesktopTopGames from "./DesktopTopGames";
import { Developer, Rating } from "../../../../utils/data/objects/types/GameDataTypes";

export interface TopGamesProps {
  background_image: string;
  name: string;
  genres: Developer[]
  tags: Developer[]
  ratings: Rating[]
  rating: number
}

function TopGames() {
  const gameDb = useSelector((state: storeProps) => state.gameDb.data);
  const topGames = gameDb.showTopGames(5);
  const { background_image, name, genres, tags, ratings, rating } = topGames[1];
  return (
    <>
      {/* <MobileTopGames
        background_image={background_image}
        name={name}
        tags={tags}
        genres={genres}
        rating={rating}
        ratings={ratings}
      />
      <DesktopTopGames
        background_image={background_image}
        name={name}
        tags={tags}
        genres={genres}
        rating={rating}
        ratings={ratings}
      /> */}
    </>
  );
}

export default TopGames;
