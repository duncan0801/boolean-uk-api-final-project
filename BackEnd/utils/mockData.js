const leagues = [
    {
        name: "Serie A",
        country: "Italy",
        numberOfTeams: 20,
        imageUrl: "https://en.wikipedia.org/wiki/Serie_A#/media/File:Serie_A_logo.png"
    }
]
// name String
// country String
// numberOfTeams Int
// imageUrl String

const teams = [
    {
        name: "Juventus",
        stadium: "Juventus Stadium",
        yearFormed: 1897,
        badgeUrl: "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2017/01/16/14846047666971.jpg",
        leagueId: 1
    },
    {
        name: "Atalanta",
        stadium: "Gewiss Stadium",
        yearFormed: 1907,
        badgeUrl: "https://en.wikipedia.org/wiki/Atalanta_B.C.#/media/File:AtalantaBC.svg",
        leagueId: 1
    },
    {
        name: "Sassuolo",
        stadium: "Mapei Stadium",
        yearFormed: 1920,
        badgeUrl: "https://en.wikipedia.org/wiki/U.S._Sassuolo_Calcio#/media/File:US_Sassuolo_Calcio_logo.svg",
        leagueId: 1
    },
    {
        name: "Inter Milan",
        stadium: "Giuseppe Meazza",
        yearFormed: 1908,
        badgeUrl: "https://en.wikipedia.org/wiki/Inter_Milan#/media/File:FC_Internazionale_Milano_2021.svg",
        leagueId: 1
    }
]
// name String
// stadium String
// yearFormed Int
// badgeUrl String
// leagueId Int

const managers = [
    {
        firstName: "Massimiliano",
        lastName: "Allegri",
        age: 54,
        previousTeams: ["AC Milan", "Cagliari", "Sassuolo", "Grosseto", "SPAL", "Aglianese"],
        imageUrl: "https://en.wikipedia.org/wiki/Massimiliano_Allegri#/media/File:Allegri_with_Milan_players_(cropped)_-_2.jpg",
        teamId: 1
    },
    {
        firstName: "Gian Piero",
        lastName: "Gasperini",
        age: 63,
        previousTeams: ["Genoa", "Palermo", "Inter Milan", "Crotone"],
        imageUrl: "https://en.wikipedia.org/wiki/Gian_Piero_Gasperini#/media/File:Gian-piero-gasperini-2019.png",
        teamId: 2
    },
    {
        firstName: "Alessio",
        lastName: "Dionisi",
        age: 41,
        previousTeams: ["Empoli", "Venezia", "Imolese", "Fiorenzuola", "Borgosesia", "Olginatese"],
        imageUrl: "http://www.piemonteoggi.it/news/201052017112306_AlessioDionisiallenatoreconfermato.jpg",
        teamId: 3
    },
    {
        firstName: "Simone",
        lastName: "Inzaghi",
        age: 45,
        previousTeams: ["Lazio"],
        imageUrl: "https://worldfootballindex.com/wp-content/uploads/2021/01/Simone-Inzaghi-LAzio-Player.jpg",
        teamId: 4
    }
]
// firstName String
// lastName String
// age Int
// previousTeams String[]
// imageUrl String
// teamId Int

const players = [
    {
        firstName: "Cristiano",
        lastName: "Ronaldo",
        height: 1.87,
        shirtNo: 7,
        nationality: "Portugese",
        weight: 84,
        position: "Forward",
        imageUrl: "https://cdntvca.b-cdn.net/upload/photos/2021/06/09/Uz5vbLJI_11.jpeg",
        teamId: 1
    },
    {
        firstName: "Paulo",
        lastName: "Dybala",
        height: 1.77,
        shirtNo: 10,
        nationality: "Argentinian",
        weight: 75,
        position: "Attacking Midfielder",
        imageUrl: "https://yoursportspot.com/wp-content/uploads/2019/08/10235787r.jpg",
        teamId: 1
    },
    {
        firstName: "Georgio",
        lastName: "Chiellini",
        height: 1.87,
        shirtNo: 3,
        nationality: "Italian",
        weight: 85,
        position: "Defender",
        imageUrl: "https://www.transfermarkt.de/images/portrait/originals/29260-1448464153.jpg",
        teamId: 1
    },
    {
        firstName: "Robin",
        lastName: "Gosens",
        height: 1.84,
        shirtNo: 8,
        nationality: "German",
        weight: 76,
        position: "Left Wing Back",
        imageUrl: "https://skyrockliving.com/wp-content/uploads/2020/04/serie-a-team-of-the-season-robin-gosens.jpg",
        teamId: 2
    },
    {
        firstName: "Ruslan",
        lastName: "Malinovskyi",
        height: 1.81,
        shirtNo: 18,
        nationality: "Ukrainian",
        weight: 79,
        position: "Midfielder",
        imageUrl: "https://the4thofficial.net/wp-content/uploads/2020/09/fbl-ita-serie-a-atalanta-brescia.jpg",
        teamId: 2
    },
    {
        firstName: "Luis",
        lastName: "Muriel",
        height: 1.79,
        shirtNo: 9,
        nationality: "Colombian",
        weight: 75,
        position: "Forward",
        imageUrl: "https://en.wikipedia.org/wiki/Luis_Muriel#/media/File:FWC_2018_-_Round_of_16_-_COL_v_ENG_-_Luis_Muriel.jpg",
        teamId: 2
    },
    {
        firstName: "Domenico",
        lastName: "Berardi",
        height: 1.83,
        shirtNo: 25,
        nationality: "Italian",
        weight: 72,
        position: "Forward",
        imageUrl: "https://en.wikipedia.org/wiki/Domenico_Berardi#/media/File:Domenico_Berardi,_Palazzo_Chigi,_2021.jpg",
        teamId: 3
    },
    {
        firstName: "Filip",
        lastName: "Duricic",
        height: 1.82,
        shirtNo: 10,
        nationality: "Serbian",
        weight: 72,
        position: "Attacking Midfielder",
        imageUrl: "https://s.hs-data.com/bilder/spieler/gross/148623.jpg",
        teamId: 3
    },
    {
        firstName: "Pedro",
        lastName: "Obiang",
        height: 1.85,
        shirtNo: 14,
        nationality: "Equatorial Guinean",
        weight: 75,
        position: "Midfielder",
        imageUrl: "https://s.hs-data.com/bilder/spieler/gross/171362.jpg",
        teamId: 3
    },
    {
        firstName: "Stefan",
        lastName: "de Vrij",
        height: 1.89,
        shirtNo: 6,
        nationality: "Dutch",
        weight: 78,
        position: "Defender",
        imageUrl: "https://sempreinter.com/wp-content/uploads/2018/08/de-vrij-4.jpg",
        teamId: 4
    },
    {
        firstName: "Ivan",
        lastName: "Perisic",
        height: 1.86,
        shirtNo: 14,
        nationality: "Croatian",
        weight: 75,
        position: "Winger",
        imageUrl: "https://en.wikipedia.org/wiki/Ivan_Peri%C5%A1i%C4%87#/media/File:Ivan_Peri%C5%A1i%C4%87_(cropped).jpg",
        teamId: 4
    },
    {
        firstName: "Samir",
        lastName: "Handanovic",
        height: 1.93,
        shirtNo: 1,
        nationality: "Slovenian",
        weight: 88,
        position: "Goalkeeper",
        imageUrl: "https://en.wikipedia.org/wiki/Samir_Handanovi%C4%87#/media/File:Samir_Handanovi%C4%87_Slovenia.jpg",
        teamId: 4
    }
]
// firstName String
// lastName String
// height Float
// shirtNo Int
// nationality String
// weight Float
// position String
// imageUrl String
// teamId Int

const fixtures = [
    {
        date: new Date('2021-05-17T19:24:00').toISOString(),
        homeTeamId: 1,
        awayTeamId: 2,
        result: "2-0"
    },
    {
        date: new Date('2021-08-21T19:24:00').toISOString(),
        homeTeamId: 3,
        awayTeamId: 1
    },
    {
        date: new Date('2021-05-17T19:24:00').toISOString(),
        homeTeamId: 2,
        awayTeamId: 3,
        result: "4-4"
    },
    {
        date: new Date('2021-08-21T19:24:00').toISOString(),
        homeTeamId: 4,
        awayTeamId: 2,
    },
    {
        date: new Date('2021-05-17T19:24:00').toISOString(),
        homeTeamId: 3,
        awayTeamId: 4,
        result: "0-0"
    },
    {
        date: new Date('2021-08-21T19:24:00').toISOString(),
        homeTeamId: 4,
        awayTeamId: 3,
    },
    {
        date: new Date('2021-05-17T19:24:00').toISOString(),
        homeTeamId: 4,
        awayTeamId: 1,
        result: "0-3"
    },
    {
        date: new Date('2021-08-21T19:24:00').toISOString(),
        homeTeamId: 2,
        awayTeamId: 4,
    }
]
// date DateTime
// homeTeamId Int
// awayTeamId Int
// result String?

module.exports = { leagues, teams, players, managers, fixtures }