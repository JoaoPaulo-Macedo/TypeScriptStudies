export {}

type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';//Enum

type PollResult = {
  gameTitle: string;
  gamePlatform: Platform,
  genreName: string;
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
    "genreName": "RPG"
  },
  {
    "gameTitle": "The Witcher 3",
    "gamePlatform": "XBOX",
    "genreName": "RPG"
  },
  {
    "gameTitle": "Overwatch",
    "gamePlatform": "PC",
    "genreName": "Shooter"
  },
  {
    "gameTitle": "Overwatch",
    "gamePlatform": "PC",
    "genreName": "Shooter"
  },
  {
    "gameTitle": "The Witcher 3",
    "gamePlatform": "PLAYSTATION",
    "genreName": "RPG"
  },
]

const buildBarResult = (games : Game[], records : PollResult[]) => {

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

console.log('Bar===================================');
console.log(buildBarResult(gameList, recordItemList));
console.log('Bar===================================');

const buildCircleBarResult = (records : PollResult[]) => {

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

console.log('Circle================================');
console.log(buildCircleBarResult(recordItemList));
console.log('Circle================================');
