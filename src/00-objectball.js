function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": { // Changed duplicated "Mason Plumlee" to a unique name
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
}

// Display the object in table format
console.table(gameObject());
console.table(gameObject().home.players)
console.table(gameObject().home.players);
console.table(gameObject().away.players);
console.log(Object.entries(gameObject()))

function allPlayers() {
    const game = gameObject();
    return { ...game.home.players, ...game.away.players };
}

// 1. numPointsScored
function numPointsScored(playerName) {
    const players = allPlayers();
    return players[playerName]?.points || 0;
}

// 2. shoeSize
function shoeSize(playerName) {
    const players = allPlayers();
    return players[playerName]?.shoe || 0;
}

// 3. teamColors
function teamColors(teamName) {
    const game = gameObject();
    const team = [game.home, game.away].find(t => t.teamName === teamName);
    return team?.colors || [];
}

// 4. teamNames
function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
}

// 5. playerNumbers
function playerNumbers(teamName) {
    const game = gameObject();
    const team = [game.home, game.away].find(t => t.teamName === teamName);
    return team ? Object.values(team.players).map(player => player.number) : [];
}

// 6. playerStats
function playerStats(playerName) {
    const players = allPlayers();
    return players[playerName] || {};
}

// 7. bigShoeRebounds
function bigShoeRebounds() {
    const players = allPlayers();
    const playerWithBiggestShoe = Object.entries(players).reduce((max, [name, stats]) =>
        stats.shoe > max.stats.shoe ? { name, stats } : max,
        { name: null, stats: { shoe: 0 } }
    );
    return playerWithBiggestShoe.stats.rebounds;
}

// 8. mostPointsScored
function mostPointsScored() {
    const players = allPlayers();
    const playerWithMostPoints = Object.entries(players).reduce((max, [name, stats]) =>
        stats.points > max.stats.points ? { name, stats } : max,
        { name: null, stats: { points: 0 } }
    );
    return playerWithMostPoints.name;
}

// 9. winningTeam
function winningTeam() {
    const game = gameObject();
    const homePoints = Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0);
    const awayPoints = Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0);
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
}

// 10. playerWithLongestName
function playerWithLongestName() {
    const players = Object.keys(allPlayers());
    return players.reduce((longest, name) => (name.length > longest.length ? name : longest), "");
}

// 11. doesLongNameStealATon
function doesLongNameStealATon() {
    const players = allPlayers();
    const longestName = playerWithLongestName();
    const mostSteals = Object.values(players).reduce((max, stats) => Math.max(max, stats.steals), 0);
    return players[longestName]?.steals === mostSteals;
}

// Example Usage:
console.log(numPointsScored("Alan Anderson")); 
console.log(shoeSize("Mason Plumlee")); 
console.log(teamColors("Brooklyn Nets")); 
console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
console.log(playerStats("Alan Anderson")); // { number: 0, shoe: 16, points: 22, ... }
console.log(bigShoeRebounds()); // 12
console.log(mostPointsScored()); // "Ben Gordon"
console.log(winningTeam()); // "Charlotte Hornets"
console.log(playerWithLongestName()); // "Brendan Haywood"
console.log(doesLongNameStealATon()); // true

