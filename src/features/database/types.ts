import { GameData } from "../../utils/data/objects/types/GameDataTypes";
import { Result } from "../../utils/data/objects/types/GameListTypes";

export interface gameDbType {
  topGames: ("not found" | GameData)[];
  genres: string[];
  tags: string[];
  numGames: number;
  listGames: Result[];
}
