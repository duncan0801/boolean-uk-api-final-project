const { PrismaClient } = require("@prisma/client")

const { leagues, teams, players, managers, fixtures } = require("../utils/mockData")

const prisma = new PrismaClient()

console.log("Here are my imports, ", leagues, teams, players, managers, fixtures);

async function seed() {
    for (const league of leagues) {
        await prisma.league.create({
            data: league
        })
    }

    for (const team of teams) {
        await prisma.team.create({
            data: team
        })
    }

    for (const manager of managers) {
        await prisma.manager.create({
            data: manager
        })
    }

    for (const player of players) {
        await prisma.player.create({
            data: player
        })
    }

    for (const fixture of fixtures) {
        await prisma.fixture.create({
            data: fixture
        })
    }
}

seed()
.catch((e)=>{
    console.error(e);
    process.exit(1)
})
.finally(async ()=>{
    await prisma.$disconnect()
})