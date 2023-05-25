import { intersection, isEqual } from "lodash";
import gameData from "./objects/GameData";
import gameList from "./objects/GameList";
import gameScreenShots from "./objects/GameScreenShots";
import { gameGenres, gameTags } from "./objects/GameGenresTags";
import { Result } from "./objects/types/GameListTypes";

class GameDb {
  infoGames = gameData;
  listGames = gameList.results;
  gamesId = this.listGames.map((value) => value.id.toString());
  screenShots = gameScreenShots;
  genres = gameGenres;
  tags = gameTags;
  numGames = this.listGames.length;

  isIdValid(id: string) {
    return this.gamesId.includes(id);
  }

  showList(start: number = 0, number: number = 1) {
    // gets @listGames and shows a said number of games
    // from a specified index.
    // @end will in the slice func
    const end = start + number;
    const list = this.listGames.slice(start, end);
    return list;
  }

  showData(id: string) {
    // infoGames is an object with information on games
    // and the keys are the id of the game which give information
    // on a game
    const idNotExist = !this.isIdValid(id);
    if (idNotExist) return "not found";
    return this.infoGames[id];
  }

  showScreenshots(id: string) {
    const idNotExist = !this.isIdValid(id);
    if (idNotExist) return "not found";
    return this.screenShots[id];
  }

  showGenresTags(id: string) {
    const game = this.showData(id);
    if (game === "not found") return game;
    return {
      genres: game.genres.map((value) => value.name),
      tags: game.tags.map((value) => value.name),
    };
  }

  showFilter(genres: string[], tags: string[]): Result[] {
    // this takes one game at a time to check whether the game
    // fits the criteria and adds to @filterdList if it fits it.
    // than returns a list of games that fit conditions
    const filterdList = this.listGames.filter((item) => {
      // gets the names of the genres and tags the game has
      // this will be used to check if the game HAS the tags
      // and genres wanted
      const itemGenres = item.genres.map((value) => value.name);
      const itemTags = item.tags.map((value) => value.name);

      // gets the tags and genres which are in both in the
      // criteria and the game. this will be used to check if game
      // fits criteria. the game fits criteria if @param genres and tags are
      // a subset of @itemGenres and @itemTags
      const sameGenres = intersection(genres, itemGenres);
      const sameTags = intersection(tags, itemTags);

      // if @param genres and tags are
      // a subset of @itemGenres and @itemTags
      // @metCondition will be true
      const metCondition =
        isEqual(sameGenres, genres) && isEqual(sameTags, tags);

      if (metCondition) {
        // it will be added to list
        return true;
      } else {
        // it will not be added to list
        return false;
      }
    });
    return filterdList;
  }

  showSimilar(id: string, number: number) {
    /* it gets similar games through its genres and tags 
    id to get the game
    number to make it return a specified number of games
    */

    const item = this.showGenresTags(id);
    if (item === "not found") return item;

    const itemGenres = item.genres;
    const itemTags = item.tags;

    // shallow copy to not mess up class list games
    const Games = this.listGames.slice();

    // to be used on @Games which is a list of @Results
    function sortSimilar(a: Result, b: Result): 1 | -1 | 0 {
      // getting tags and genres from a and b
      const { genres: aGernes, tags: aTags } = a;
      const { genres: bGernes, tags: bTags } = b;

      // getting only the names of their tags and genres
      const aTagsGenres = {
        genres: aGernes.map((value) => value.name),
        tags: aTags.map((value) => value.name),
      };
      const bTagsGenres = {
        genres: bGernes.map((value) => value.name),
        tags: bTags.map((value) => value.name),
      };

      // getting the number of similarities of them from the game
      const aNumberSame = {
        genres: intersection(itemGenres, aTagsGenres.genres).length,
        tags: intersection(itemTags, aTagsGenres.tags).length,
      };
      const bNumberSame = {
        genres: intersection(itemGenres, bTagsGenres.genres).length,
        tags: intersection(itemTags, bTagsGenres.tags).length,
      };

      // this will be used to compare which is more similar
      const aSimilarScore = aNumberSame.genres + aNumberSame.tags;
      const bSimilarScore = bNumberSame.genres + bNumberSame.tags;

      const aIsMoreSimilar = aSimilarScore > bSimilarScore;
      const bIsMoreSimilar = aSimilarScore < bSimilarScore;

      if (aIsMoreSimilar) {
        // it will make [b, a]
        return 1;
      }
      if (bIsMoreSimilar) {
        // it will make [a, b]
        return -1;
      }
      // it means that a and b score same so will be sorted in original order
      return 0;
    }

    Games.sort(sortSimilar);
    // the most similar games are at the end of the array
    // to make it easy to access them, reverse array
    Games.reverse();
    // the game itself we are trying to get similar games for will be included
    // in the array. we will remove that game like this
    const similarGames = Games.filter((item) => item.id !== +id);
    // using @param: number to give a specified number of games which are most similar
    // to that game
    const showSimilarGames = similarGames.slice(0, number);
    return showSimilarGames;
  }

  showTopGames(number = 10) {
    const games = this.listGames.slice();
    const sortTop = (game: Result, other: Result) => {
      const {
        added: gameNumber,
        reviews_count: gameReviewNum,
        ratings_count: gameRatingNum,
      } = game;

      const {
        added: otherNumber,
        reviews_count: otherReviewNum,
        ratings_count: otherRatingNum,
      } = other;

      const gamePopularScore = gameNumber + gameRatingNum + gameReviewNum;
      const otherPopularScore = otherNumber + otherRatingNum + otherReviewNum;

      const gameMoreOther = gamePopularScore > otherPopularScore;
      const otherMoreGame = gamePopularScore < otherPopularScore;

      if (gameMoreOther) return -1;
      if (otherMoreGame) return 1;
      return 0;
    };
    games.sort(sortTop);
    const showGames = games.slice(0, number);
    const gameInfos = showGames.map((value) => {
      const { id } = value;
      const game = this.showData(id.toString());
      return game;
    });
    return gameInfos;
  }

  searchGames(
    gameName: string,
    filters: { genres?: string[] | null; tags?: string[] | null }
  ) {
    const { genres, tags } = filters;
    const games = this.listGames;
    const matchingGames = games.filter((game) => {
      const lowerCaseName = game.name.toLowerCase();
      const lowerCaseSearchTerm = gameName.toLowerCase();

      const isNameThere = gameName !== "";
      const nameMatches = isNameThere
        ? lowerCaseName.includes(lowerCaseSearchTerm)
        : true;

      const gameGenres = game.genres.map((value) => value.name);
      const gameTags = game.genres.map((value) => value.name);
      const genresMatch = genres
        ? genres.every((genre) => gameGenres.includes(genre))
        : true;
      const tagsMatch = tags
        ? tags.every((tag) => gameTags.includes(tag))
        : true;

      return nameMatches && genresMatch && tagsMatch;
    });

    return matchingGames;
  }
}
export default GameDb;
