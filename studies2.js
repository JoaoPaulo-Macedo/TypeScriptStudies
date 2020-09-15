"use strict";
exports.__esModule = true;
var gameList = [
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
];
var recordItemList = [
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
];
var gamesBarResult = function (games, records) {
    var mappedGames = games.map(function (game) {
        var filteredGames = records.filter(function (record) {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;
        });
        return {
            x: game.title + " | " + game.platform,
            y: filteredGames.length
        };
    });
    return mappedGames.sort(function (a, b) { return b.y - a.y; }).slice(0, 8);
};
console.log('Games===========================================================');
console.log(gamesBarResult(gameList, recordItemList));
var platformCircleBarResult = function (records) {
    var platforms = ['PC', 'PLAYSTATION', 'XBOX'];
    var series = platforms.map(function (platform) {
        var filteredGames = records.filter(function (item) {
            return platform === item.gamePlatform;
        });
        return filteredGames.length;
    });
    return {
        labels: platforms,
        series: series
    };
};
console.log('Platform========================================================');
console.log(platformCircleBarResult(recordItemList));
var genreCircleBarResult = function (results) {
    var genre = ['Shooter', 'RPG'];
    var series = genre.map(function (genre) {
        var filteredGames = results.filter(function (result) {
            return genre === result.gameGenre;
        });
        return filteredGames.length;
    });
    return {
        labels: genre,
        series: series
    };
};
console.log('Genre===========================================================');
console.log(genreCircleBarResult(recordItemList));
console.log('================================================================');
