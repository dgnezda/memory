// import { sql } from '@vercel/postgres'
// import { unstable_noStore as noStore } from 'next/cache'
import { User, Game, GameStatistic, PrismaClient, Settings, Score } from '@prisma/client'

const prisma = new PrismaClient();

// ** USER **
// Create a new user
export async function createUser(userData: User) {
    try {
        const newUser = await prisma.user.create({
            data: userData,
        });
        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw new Error('Failed to create user.');
    }
}
  
// Fetch all users
export async function getAllUsers() {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw new Error('Failed to fetch users.');
    }
}

// Fetch a user by ID
export async function getUserById(userId: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        return user;
    } catch (error) {
        console.error('Error fetching user:', error);
        throw new Error('Failed to fetch user.');
    }
}

// Update a user by ID
export async function updateUser(userId: string, userData: User) {
    try {
        const updatedUser = await prisma.user.update({
            where: {
                id: userId,
            },
            data: userData,
        });
        return updatedUser;
    } catch (error) {
        console.error('Error updating user:', error);
        throw new Error('Failed to update user.');
    }
}
  
// Delete a user by ID
export async function deleteUser(userId: string) {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                id: userId,
            },
        });
        return deletedUser;
    } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to delete user.');
    }
}

// ** GAME **
// Create a new game
export async function createGame(gameData: Game) {
    try {
        const newGame = await prisma.game.create({
            data: gameData,
        });
        return newGame;
    } catch (error) {
        console.error('Error creating game:', error);
        throw new Error('Failed to create game.');
    }
}

// Fetch all games
export async function getAllGames() {
try {
    const games = await prisma.game.findMany();
    return games;
} catch (error) {
    console.error('Error fetching games:', error);
    throw new Error('Failed to fetch games.');
}
}

// Fetch a game by ID
export async function getGamesById(gameId: number) {
    try {
        const game = await prisma.game.findUnique({
        where: {
            id: gameId,
        },
        });
        return game;
    } catch (error) {
        console.error('Error fetching game:', error);
        throw new Error('Failed to fetch game.');
    }
}

// Update a game by ID
export async function updateGame(gameId: number, gameData: Game) {
    try {
        const updatedGame = await prisma.game.update({
            where: {
                id: gameId,
            },
            data: gameData,
            });
        return updatedGame;
    } catch (error) {
        console.error('Error updating game:', error);
        throw new Error('Failed to update game.');
    }
}

// Delete a game by ID
export async function deleteGame(gameId: number) {
    try {
        const deletedGame = await prisma.game.delete({
        where: {
            id: gameId,
        },
        });
        return deletedGame;
    } catch (error) {
        console.error('Error deleting game:', error);
        throw new Error('Failed to delete game.');
    }
}
  
// ** GAME STATISTIC **
// Create a new game stat
export async function createGameStatistic(gameStatData: GameStatistic) {
    try {
        const newGameStat = await prisma.gameStatistic.create({
            data: gameStatData,
        });
        return newGameStat;
    } catch (error) {
        console.error('Error creating game stat:', error);
        throw new Error('Failed to create game stat.');
    }
}

// Fetch all game stats
export async function getAllGameStatistics() {
try {
    const gameStats = await prisma.gameStatistic.findMany();
    return gameStats;
} catch (error) {
    console.error('Error fetching game stats:', error);
    throw new Error('Failed to fetch game stats.');
}
}

// Fetch a game stat by ID
export async function getGameStatisticsById(gameStatId: number) {
    try {
        const gameStat = await prisma.gameStatistic.findUnique({
            where: {
                id: gameStatId,
            },
        });
        return gameStat;
    } catch (error) {
        console.error('Error fetching game stat:', error);
        throw new Error('Failed to fetch game stat.');
    }
}

// Update a game stat by ID
export async function updateGameStatistic(gameStatId: number, gameStatData: GameStatistic) {
    try {
        const updatedGameStat = await prisma.gameStatistic.update({
            where: {
                id: gameStatId,
            },
            data: gameStatData,
            });
        return updatedGameStat;
    } catch (error) {
        console.error('Error updating game stat:', error);
        throw new Error('Failed to update game stat.');
    }
}

// Delete a game stat by ID
export async function deleteGameStatistic(gameStatId: number) {
    try {
        const deletedGameStat = await prisma.gameStatistic.delete({
        where: {
            id: gameStatId,
        },
        });
        return deletedGameStat;
    } catch (error) {
        console.error('Error deleting game stat:', error);
        throw new Error('Failed to delete game stat.');
    }
}
  
// ** SETTINGS **
// Create new settings
export async function createSettings(settings: Settings) {
    try {
        const newSettings = await prisma.settings.create({
            data: settings,
        });
        return newSettings;
    } catch (error) {
        console.error('Error creating settings:', error);
        throw new Error('Failed to create settings.');
    }
}

// Fetch all settings
export async function getAllSettings() {
try {
    const settings = await prisma.settings.findMany();
    return settings;
} catch (error) {
    console.error('Error fetching settings:', error);
    throw new Error('Failed to fetch settings.');
}
}

// Fetch settings by ID
export async function getGameSettingsById(settingsId: string) {
    try {
        const settings = await prisma.settings.findUnique({
            where: {
                id: settingsId,
            },
        });
        return settings;
    } catch (error) {
        console.error('Error fetching settings:', error);
        throw new Error('Failed to fetch settings.');
    }
}

// Update settings by ID
export async function updateSettings(settingsId: string, settings: Settings) {
    try {
        const updatedSettings = await prisma.settings.update({
            where: {
                id: settingsId,
            },
            data: settings,
            });
        return updatedSettings;
    } catch (error) {
        console.error('Error updating settings:', error);
        throw new Error('Failed to update settings.');
    }
}

// Delete settings by ID
export async function deleteSettings(settingsId: string) {
    try {
        const deletedSettigns = await prisma.settings.delete({
        where: {
            id: settingsId,
        },
        });
        return deletedSettigns;
    } catch (error) {
        console.error('Error deleting settings:', error);
        throw new Error('Failed to delete settings.');
    }
}

// ** SCORE **
// Create new score
export async function createScore(score: Score) {
    try {
        const newScore = await prisma.score.create({
            data: score,
        });
        return newScore;
    } catch (error) {
        console.error('Error creating score:', error);
        throw new Error('Failed to create score.');
    }
}

// Fetch all scores
export async function getAllScores() {
try {
    const score = await prisma.score.findMany();
    return score;
} catch (error) {
    console.error('Error fetching score:', error);
    throw new Error('Failed to fetch score.');
}
}

// Fetch score by ID
export async function getGameScoreById(scoreId: string) {
    try {
        const score = await prisma.score.findUnique({
            where: {
                id: scoreId,
            },
        });
        return score;
    } catch (error) {
        console.error('Error fetching score:', error);
        throw new Error('Failed to fetch score.');
    }
}

// Update score by ID
export async function updateScore(scoreId: string, score: Settings) {
    try {
        const updatedScore = await prisma.score.update({
            where: {
                id: scoreId,
            },
            data: score,
            });
        return updatedScore;
    } catch (error) {
        console.error('Error updating score:', error);
        throw new Error('Failed to update score.');
    }
}

// Delete score by ID
export async function deleteScore(scoreId: string) {
    try {
        const deletedScore = await prisma.score.delete({
        where: {
            id: scoreId,
        },
        });
        return deletedScore;
    } catch (error) {
        console.error('Error deleting score:', error);
        throw new Error('Failed to delete score.');
    }
}
  
