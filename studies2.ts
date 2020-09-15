export {}

type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';//Enum

type PollResult = {
  gameTitle: string;
  gamePlatform: Platform,
  gameGenre: string;
}

type Game = {
  id: number;
  title: string;
  platform: Platform;
}

const gameList : Game[] = [
  {
    "id": 1,
    "title": "The Witcher 3",
    "platform": "XBOX"
  },
  {
    "id": 2,
    "title": "The Witcher 3",
    "platform": "PLAYSTATION"
  },
  {
    "id": 3,
    "title": "Overwatch",
    "platform": "PC"
  }
]

const recordItemList : PollResult[] = [
  {
    "gameTitle": "The Witcher 3",
    "gamePlatform": "PLAYSTATION",
    "gameGenre": "RPG"
  },
  {
    "gameTitle": "The Witcher 3",
    "gamePlatform": "XBOX",
    "gameGenre": "RPG"
  },
  {
    "gameTitle": "Overwatch",
    "gamePlatform": "PC",
    "gameGenre": "Shooter"
  },
  {
    "gameTitle": "Overwatch",
    "gamePlatform": "PC",
    "gameGenre": "Shooter"
  },
  {
    "gameTitle": "The Witcher 3",
    "gamePlatform": "PLAYSTATION",
    "gameGenre": "RPG"
  },
]

const gamesBarResult = (games : Game[], records : PollResult[]) => {

  const mappedGames = games.map((game) => {

    const filteredGames = records.filter((record) => {
      return record.gameTitle === game.title && record.gamePlatform === game.platform;
    });

    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length,
    }

  });
  
  return mappedGames.sort((a, b) : number => {return b.y - a.y;}).slice(0, 8);
}

console.log('Games===========================================================');
console.log(gamesBarResult(gameList, recordItemList));

const platformCircleBarResult = (records : PollResult[]) => {

  const platforms = ['PC', 'PLAYSTATION', 'XBOX'];

  const series = platforms.map((platform) => {
    
    const filteredGames = records.filter((item) => {
      return platform === item.gamePlatform;
    });

    return filteredGames.length;
  });

  return {
    labels : platforms,
    series,
  };
}

console.log('Platform========================================================');
console.log(platformCircleBarResult(recordItemList));

const genreCircleBarResult = (results : PollResult[]) => {
  const genre = ['Shooter', 'RPG'];

  const series = genre.map((genre) => {
    const filteredGames = results.filter((result) => {
      return genre === result.gameGenre
    });

    return filteredGames.length;
  });

  return {
    labels: genre,
    series,
  }
}

console.log('Genre===========================================================');
console.log(genreCircleBarResult(recordItemList));
console.log('================================================================');
