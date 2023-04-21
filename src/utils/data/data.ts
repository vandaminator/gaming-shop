import { intersection, isEqual, matches } from "lodash";
import gameData from "./objects/GameData";
import gameList from "./objects/GameList";
import gameScreenShots from "./objects/GameScreenShots";

class GameDb {
  infoGames = gameData
  listGames = gameList.results
  screenShots = gameScreenShots
  numGames = this.listGames.length

  showList(start: number = 0, number: number = 1) {
    const end = start + number
    const list = this.listGames.slice(start, end)
    return list
  }

  showData(id: string) {
    return this.infoGames[id]
  }

  showFilter(genres: string[], tags: string[]) {
    const filterdList = this.listGames.filter(item => {
      const itemGenres = item.genres.map(value => value.name)
      const itemTags = item.tags.map(value => value.name)

      const sameGenres = intersection(genres, itemGenres)
      const sameTags = intersection(tags, itemTags)

      const metCondition = isEqual(sameGenres, genres) || isEqual(sameTags, tags)

      if (metCondition) {
        return true
      } else {
        return false
      }
    })
    return filterdList
  }

}
export default GameDb;
