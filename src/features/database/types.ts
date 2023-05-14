import GameDb from "../../utils/data/data";
import { GameData } from "../../utils/data/objects/types/GameDataTypes";

export interface gameDbType {
    topGames: GameData[];
    genres: string[];
    tags: string[];
    numGames: number;
}