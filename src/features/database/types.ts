import GameDb from "../../utils/data/data";
import { GameData } from "../../utils/data/objects/types/GameDataTypes";

export interface gameDbType {
    data: GameDb;
    topGames: GameData[];
    genres: string[];
    tags: string[];
    numGames: number;
}