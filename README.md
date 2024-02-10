## Introdução
Bem-vindo à API de Personagens de Animes! Esta API fornece informações e imagens de personagens de dois animes populares: Dragon Ball e Naruto.

## Base URL
A URL base para todos os endpoints é [https://anime-characters-backend.vercel.app/](https://anime-characters-backend.vercel.app/)

## Endpoints Disponíveis

### 1. /characters-dragonball
Retorna informações e imagens dos personagens do anime Dragon Ball.

**Método:** GET

**Exemplo de Uso:**
[https://anime-characters-backend.vercel.app/characters-dragonball](https://anime-characters-backend.vercel.app/characters-dragonball)

**Resposta Exemplo:**
```json 
{
  "characters": [
    {
      "id": 1,
      "name": "Goku",
      "profile_img": "https://animecharacters.sirv.com/Goku/Goku-profile.jpg",
      "resume": "A história de Goku começa quando ele....",
      "resume_img": "https://animecharacters.sirv.com/Goku/Goku-resume.jpg",
      "additional": {
        "father": "Bardock",
        "mother": "Gine",
        "power": "Kamehameha",
        "more": "Instinto Superior"
      },
      "extras": [
        {
          "name": "Nuvem Voadora",
          "text": "A Nuvem Voadora é uma relíquia....",
          "image": "https://animecharacters.sirv.com/Goku/Goku-nuvem-voadora.jpg"
        },
        // Mais informações extras e em seguida mais personagens 
      ]
    }
  ]
}
```

### 2. /characters-naruto
Retorna informações e imagens dos personagens do anime Naruto.

**Método:** GET

**Exemplo de Uso:**
[https://anime-characters-backend.vercel.app/characters-naruto](https://anime-characters-backend.vercel.app/characters-naruto)


**Resposta Exemplo:**
```json 
{
  "characters": [
    {
      "id": 1,
      "name": "Uzumaki Naruto",
      "profile_img": "https://animecharacters.sirv.com/Naruto/Uzumaki%20Naruto%20Profile.jpg",
      "resume": "Naruto, um ninja da Vila da Folha....",
      "resume_img": "https://animecharacters.sirv.com/Naruto/Naruto%20shippuden.jpg",
      "village": "Vila da Folha",
      "additional": {
        "father": "Namikaze Minato",
        "mother": "Uzumaki Kushina",
        "jutsu": "Rasenshuriken",
        "more": "Jinchuriki Kurama"
      },
      "extras": [
        {
          "name": "Modo Sennin",
          "text": "O Modo Sábio, ou Modo Sennin....",
          "image": "https://animecharacters.sirv.com/Naruto/Uzumaki%20Naruto%20Modo%20Senin.jpg"
        },
        // Mais informações extras e em seguida mais personagens 
      ]
    }
  ]
}
```

### Considerações Finais
Utilize esses endpoints para obter informações e imagens de seus personagens favoritos dos animes Dragon Ball e Naruto. Certifique-se de fazer solicitações no método GET para receber os dados desejados.

Lembre-se de verificar a resposta exemplo para entender o formato dos dados retornados.

Divirta-se explorando os personagens!

Desenvolvido com ❤️ por Willian D. Daniel