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
];
var buildBarResult = function (games, records) {
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
console.log('Bar===================================');
console.log(buildBarResult(gameList, recordItemList));
console.log('Bar===================================');
var buildCircleBarResult = function (records) {
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
console.log('Circle================================');
console.log(buildCircleBarResult(recordItemList));
console.log('Circle================================');
