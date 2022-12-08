/* -- Level Definitions -- */

const levels = [
    // level 1
    {
        level: 1,

        floors: {
            parameters: [[0, 700], [950, 500], [2050, 500], [3200, 500]]
        },

        platforms: {
            parameters: [[785, 550, 80], [1485, 550, 80], [1685, 500, 80],
                        [1885, 550, 80], [2585, 550, 80], [2785, 475, 80],
                        [2585, 375, 80], [2785, 300, 80]]
        },

        winDist: 3600
    },

    // level 2
    {
        floors: {
            parameters: [[0, 700], [1725, 225], [2500, 450], [3300, 500]]
        },

        platforms: {
            parameters: [[800, 550, 80], [1050, 480, 100], [1400, 550, 80],
                        [2050, 550, 80], [2050, 550, 80], [2050, 450, 80],
                        [2050, 350, 80], [2050, 250, 80], [3100, 550, 20]]
        },

        winDist: 3700
    }
]

/* -- Level Parser -- */

function levelParser (levelParams) {
    const floors = levelParams.floors.parameters;
    const platforms = levelParams.platforms.parameters;

    drawFlag(levelParams.winDist);

    for (let i in floors)
        drawFloor(floors[i][0], floors[i][1]);

    for (let i in platforms)
        drawPlatform(platforms[i][0], platforms[i][1], platforms[i][2]);

    if (x > screenX + levelParams.winDist) {
        win();
        level = levelParams.level + 1;
    }
}