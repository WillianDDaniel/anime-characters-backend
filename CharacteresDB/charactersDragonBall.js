// The `charactersDrangonBall` object contains various character data related to the Dragon Ball series.
const charactersDrangonBall = {
    // An array of character objects, each containing properties that describe a specific character.
    characters: [
        // A character object for Goku, containing properties such as id, name, profile_img, resume, resume_img, additional, and extras.
        {
            id: 1,
            name: 'Goku',
            profile_img: 'https://animecharacters.sirv.com/Goku/goku-img-profile.jpg',
            resume: 'A história de Goku começa quando ele, um guerreiro Saiyajin, é enviado à Terra, tornando-se seu defensor. Ele busca constante crescimento, enfrenta vilões poderosos e se torna um lendário herói, protegendo o universo com força e coragem.',
            resume_img: 'https://animecharacters.sirv.com/Goku/Goku-resume.jpg',
            additional: {
                father: 'Bardock',
                mother: 'Gine',
                power: 'Kamehameha',
                more: 'Instinto Superior'
            },
            extras: [
                // An array of extra objects, each containing properties that describe a specific form or ability of Goku.
                {
                    name: 'Super Saiyajin Blue',
                    text: 'Goku na forma Super Saiyajin Blue, ou Super Saiyajin Deus Super Saiyajin, é uma fusão da energia divina do Super Saiyajin Deus com o Super Saiyajin, concedendo poder inigualável, velocidade e controle aprimorado, usado para enfrentar ameaças cósmicas em "Dragon Ball".',
                    image: 'https://animecharacters.sirv.com/Goku/goku-ss-blue.jpg'
                },
                // ... More extra objects for Goku
            ]
        },
        // Character objects for Vegeta, Piccolo, Majin Boo, Gohan, Kuririn, Cell, Trunks, Mestre Kame, Bulma, and Freeza follow a similar structure.
    ]
}

// The `charactersDrangonBall` object is exported as a module for use in other files.
module.exports = charactersDrangonBall
