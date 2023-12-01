const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => res.send('Hello World!'));

app.get("/characters", (req, res) => {
  const characters = {
    characters: [
      {
        id: 1,
        name: 'Uzumaki Naruto',
        profile_img: 'https://characteresnaruto.sirv.com/Naruto/Uzumaki%20Naruto%20Profile.jpg',
        resume: 'Naruto, um ninja da Vila da Folha, carrega a raposa de nove caudas e busca reconhecimento como Hokage. Sua jornada é marcada por superar a solidão, formar laços com Sasuke e Sakura, aprender com Kakashi e se tornar um herói que une e protege sua vila.',
        resume_img: 'https://characteresnaruto.sirv.com/Naruto/Naruto%20shippuden.jpg',
        village: 'Vila da Folha',
        additional: {
          father: 'Namikaze Minato',
          mother: 'Uzumaki Kushina',
          jutsu: 'Rasenshuriken',
          more: 'Jinchuriki Kurama'
        },
        extras: [
          {
            name: 'Modo Sennin',
            text: 'O Modo Sábio, ou Modo Sennin, é uma técnica poderosa em que Naruto absorve energia natural para aumentar força, velocidade e sabedoria, manifestando a aparência de um sapo e elevando suas habilidades em batalha.',
            image: 'https://characteresnaruto.sirv.com/Naruto/Uzumaki%20Naruto%20Modo%20Senin.jpg'
          },
          {
            name: 'Modo Kurama',
            text: 'O Modo Kurama é a fusão de Naruto com a raposa de nove caudas. Ele adquire imensa força, velocidade e poder de cura, usando a energia da raposa para vencer adversários e proteger sua vila, mantendo o equilíbrio com a besta interior para evitar perdas de controle.',
            image: 'https://characteresnaruto.sirv.com/Naruto/Naruto-Modo-kurama.jpg'
          },
          {
            name: 'Time 7',
            text: 'O Time 7 é composto por Naruto Uzumaki, Sakura Haruno e Sasuke Uchiha, liderados por Kakashi Hatake. Juntos, enfrentam missões perigosas, superam desafios pessoais e fortalecem seus laços de amizade, formando uma equipe icônica na Vila da Folha.',
            image: 'https://characteresnaruto.sirv.com/Naruto/Time%207%20-%20Naruto%2C%20Sasuke%20e%20Sakura.jpg'
          }
        ]
      },
      {
        id: 2,
        name: 'Uchiha Sasuke',
        profile_img: 'https://characteresnaruto.sirv.com/Sasuke/Uchiha%20Sasuke%20Profile.jpg',
        resume: 'Sasuke Uchiha busca vingança após a devastação de seu clã por seu irmão, Itachi. Tornando-se um ninja poderoso, sua jornada é marcada por conflitos internos, levando-o a reavaliar objetivos, buscar redenção e restaurar seus laços com Naruto e Sakura.',
        resume_img: 'https://characteresnaruto.sirv.com/Sasuke/Uchiha%20Sasuke%20Shippuden.jpg',
        village: 'Vila da Folha',
        additional: {
          father: 'Uchiha Fugaku',
          mother: 'Uchiha Mikoto',
          jutsu: 'Chidori',
          more: 'Sharingan e Rinnegan'
        },
        extras: [
          {
            name: 'Marca da Maldição',
            text: 'A Marca da Maldição é concedida por Orochimaru a Sasuke, fortalecendo-o mas cobrando um preço. Concede poderes avassaladores, porém, arrisca consumir Sasuke, tornando-o vulnerável ao controle de Orochimaru e levando-o a buscar alternativas para controlar e superar essa maldição.',
            image: 'https://characteresnaruto.sirv.com/Sasuke/Uchiha%20Sasuke%20Marca%20da%20Maldi%C3%A7%C3%A3o.jpg'
          },
          {
            name: 'O Dispertar do Rinnegan',
            text: 'Sasuke desperta o Rinnegan, um poderoso olho que concede habilidades divinas. Adquirido ao receber a essência de Hagoromo Ōtsutsuki, ele amplia suas habilidades, incluindo a manipulação de dimensões e técnicas ancestrais. Este despertar redefine seu papel no mundo ninja, concedendo-lhe um poder colossal.',
            image: 'https://characteresnaruto.sirv.com/Sasuke/Uchiha%20Sasuke%20Rinnegan.jpg'
          },
          {
            name: 'Grupo Taka',
            text: 'O Grupo Taka, liderado por Sasuke, é formado por Karin, Suigetsu e Jūgo. Unido pela busca por vingança, enfrentam desafios perigosos em missões, cada membro contribuindo com habilidades únicas. Suas jornadas individuais se desdobram após o objetivo inicial ser alcançado.',
            image: 'https://characteresnaruto.sirv.com/Sasuke/Uchiha%20Sasuke%20TAKA.jpg'
          }
        ]
      },
      {
        id: 3,
        name: 'Haruno Sakura',
        profile_img: 'https://characteresnaruto.sirv.com/Sakura/Haruno-Sakura-Profile.jpg',
        resume: 'Sakura Haruno, inicialmente obcecada por Sasuke Uchiha, evolui suas habilidades médicas e de combate. Desenvolve uma força independente, supera sua fixação por Sasuke e se torna uma kunoichi confiante, valorizando sua amizade com Naruto e Sasuke.',
        resume_img: 'https://characteresnaruto.sirv.com/Sakura/Haruno%20Sakura%20S.jpeg',
        village: 'Vila da Folha',
        additional: {
          father: 'Haruno Kizashi',
          mother: 'Haruno Mebuki',
          jutsu: 'Byakugō no Jutsu',
          more: 'Super Força'
        },
        extras: [
          {
            name: 'Byakugō no Jutsu',
            text: 'O "Byakugō no Jutsu" é uma técnica de selamento de chakra que Sakura Haruno domina. Ao armazenar um grande suprimento de chakra em sua testa, ela obtém força sobre-humana, regeneração rápida e uma reserva massiva de energia, permitindo resistir a ataques e realizar técnicas avançadas por períodos prolongados.',
            image: 'https://characteresnaruto.sirv.com/Sakura/Haruno-Sakura-Poder-Testa.jpg'
          },
          {
            name: 'kunoichi médica',
            text: 'Sakura domina habilidades médicas excepcionais, desde curativos simples até cirurgias complexas. Seu controle de chakra preciso permite análises detalhadas, regeneração rápida e até extração de venenos. Sua destreza médica a torna vital em batalhas e crises médicas.',
            image: 'https://characteresnaruto.sirv.com/Sakura/Haruno-Sakura-medica.jpg'
          },
          {
            name: 'Curativa, Determinada, Estratégica',
            text: 'Na Quarta Guerra Ninja, Sakura desempenha um papel crucial como parte da Aliança Shinobi. Seu Byakugō no Jutsu e habilidades médicas são vitais, curando feridos e fortalecendo aliados. Ela enfrenta o temível Zetsu Branco e contribui para selar Kaguya, garantindo a vitória com sua destreza e determinação.',
            image: 'https://characteresnaruto.sirv.com/Sakura/Haruno-Sakura-mode.jpg'
          }
        ]
      },
      {
        id: 4,
        name: 'Gaara do Deserto',
        profile_img: 'https://characteresnaruto.sirv.com/Gaara/gaara-profile.jpg',
        resume: 'Gaara, filho do Quarto Kazekage, foi marcado como jinchuriki do Shukaku ao nascer. Cresceu isolado e temido, enfrentando solidão e ódio. Com a influência de Naruto, encontra redenção, supera seu passado sombrio e se torna um protetor da Vila da Areia.',
        resume_img: 'https://characteresnaruto.sirv.com/Gaara/gaara-shipudden.jpg',
        village: 'Vila da Areia',
        additional: {
          father: 'Sabaku Rasa',
          mother: 'Sabaku Karura',
          jutsu: 'Prisão de Areia" (Sabaku Kyu)',
          more: 'Jinchuriki Shukaku'
        },
        extras: [
          {
            name: 'Jinchuriki do Shukaku',
            text: 'Shukaku é um Bijuu, uma das Bestas com Cauda, representado como um tanuki de uma cauda. Originalmente o Jinchuriki de Gaara, controla areia e vento. No início, sua presença afetava a mente de Gaara, mas após a extração, Gaara e Shukaku desenvolvem uma relação colaborativa e amigável.',
            image: 'https://characteresnaruto.sirv.com/Gaara/shukaku-gaara.jpg'
          },
          {
            name: 'Defesa Absoluta',
            text: 'A "Defesa Absoluta da Areia" de Gaara é uma técnica defensiva usando areia como escudo. A areia responde automaticamente, protegendo-o de ataques físicos e jutsus. Seu chakra a manipula, formando um casulo impenetrável, desviando ou neutralizando qualquer ataque.',
            image: 'https://characteresnaruto.sirv.com/Gaara/gara-defesa-absoluta.jpg'
          },
          {
            name: 'Tatuagem na testa (significado)',
            text: 'A marca na testa de Gaara, "ai" (愛), significa "amor". Inicialmente uma maldição, representa o sofrimento e isolamento dele como jinchuriki. Com o tempo, reflete sua transformação: de solidão para aceitação e amor, influenciado por Naruto e amigos, simbolizando sua jornada de redenção.',
            image: 'https://characteresnaruto.sirv.com/Gaara/gaara-tattoo.jpg'
          }
        ]
      },
      {
        id: 5,
        name: 'Uchiha Itachi',
        profile_img: 'https://characteresnaruto.sirv.com/Itachi/Itachi-profile.jpg',
        resume: 'Itachi Uchiha, prodígio do Clã Uchiha, sacrificou tudo pelo bem-estar de Konoha. Fingiu traição, matou o clã para evitar uma guerra, protegendo Sasuke. Atormentado, viveu como vilão para preservar a paz, deixando um legado de sacrifício e amor fraternal.',
        resume_img: 'https://characteresnaruto.sirv.com/Itachi/Itachi-vert.jpg',
        village: 'Vila da Folha',
        additional: {
          father: 'Uchiha Fugaku',
          mother: 'Uchiha Mikoto',
          jutsu: 'Tsukuyomi',
          more: 'mangekyou sharingan'
        },
        extras: [
          {
            name: 'Membro da Akatsuki',
            text: 'Itachi Uchiha foi membro da Akatsuki, uma organização de ninjas renegados. Sua entrada foi para monitorar e proteger Konoha. Enfrentou conflitos internos, manipulando a Akatsuki enquanto preservava segredos e ajudava Sasuke, até sua morte em prol do plano de Sasuke.',
            image: 'https://characteresnaruto.sirv.com/Itachi/Itachi-uchiha.jpg'
          },
          {
            name: 'Massacre do Clã Uchiha',
            text: 'Itachi, a mando de líderes de Konoha, eliminou o clã Uchiha para evitar um golpe de estado, poupando Sasuke. Assumiu a culpa para proteger a vila, vivendo atormentado e sofrendo em silêncio por suas ações, buscando manter a estabilidade e paz em Konoha.',
            image: 'https://characteresnaruto.sirv.com/Itachi/itachi-mata-clan.jpg'
          },
          {
            name: 'Sacrificio de Itachi',
            text: 'Itachi Uchiha sacrificou sua reputação, família e vida para proteger Konoha. Carregou o fardo de ser um vilão, mantendo a paz em konoha, manipulando a Akatsuki e garantindo a segurança de seu irmão, Uchiha Sasuke, mesmo às custas de sua própria vida.',
            image: 'https://characteresnaruto.sirv.com/Itachi/sacrificio-de-itachi-uchiha.jpg'
          },
          {
            name: 'Laço marcante, proteção essencial.',
            text: 'Itachi marcou Sasuke com o "Amaterasu", simbolizando controle e proteção. Esse jutsu implantou uma marca permanente para ativar a "Susanoo" e proteger Sasuke em momentos cruciais, representando o laço fraterno e o vínculo de responsabilidade de Itachi por seu irmão.',
            image: 'https://characteresnaruto.sirv.com/Itachi/sasuke-mata-itachi.jpg'
          }
        ]
      },
      {
        id: 6,
        name: 'Uchiha Madara',
        profile_img: 'https://characteresnaruto.sirv.com/Madara/Madara-profile.jpg',
        resume: 'Uchiha Madara, lendário shinobi, fundou Konoha com Hashirama Senju. Buscava domínio com o Tsukuyomi Infinito, mas foi derrotado por Naruto e Sasuke após manipulações sombrias e guerras. Sua ambição o consumiu, deixando um legado complexo.',
        resume_img: 'https://characteresnaruto.sirv.com/Madara/Madara-ship.jpg',
        village: 'Vila da Folha',
        additional: {
          father: 'Uchiha Tajima',
          mother: 'Desconhecida',
          jutsu: 'Susanoo',
          more: 'Sharingan e Rinnegan'
        },
        extras: [
          {
            name: 'Rinnegan de Uchiha Madara',
            text: 'O Rinnegan de Uchiha Madara é o auge do poder ocular, concedendo domínio sobre todas as naturezas de chakra, capacidade de controlar a vida e a morte, criar e manipular corpos espirituais e acessar o Caminho Exterior, permitindo técnicas como Limbo: Border Jail.',
            image: 'https://characteresnaruto.sirv.com/Madara/Madara-rinnegan.png'
          },
          {
            name: 'Células Senju',
            text: 'Uchiha Madara injetou células Senju para despertar o Rinnegan, buscando o poder do Sábio dos Seis Caminhos. A fusão das linhagens Uchiha e Senju concedeu-lhe habilidades transcendentes, fortalecendo seu desejo de domínio absoluto.',
            image: 'https://characteresnaruto.sirv.com/Madara/Madara-senju.png'
          },
          {
            name: 'Desejo de domínio',
            text: 'Uchiha Madara, visionário e estrategista implacável, almejava um mundo controlado. Lutou ao lado de Hashirama, mas diferenças ideológicas desencadearam seu desejo de domínio. Com o Rinnegan e Susanoo, ele foi um antagonista marcante, moldando o destino ninja com sua astúcia e poder.',
            image: 'https://characteresnaruto.sirv.com/Madara/Madara-guerreiro.jpg'
          },
        ]
      },
      {
        id: 7,
        name: 'Hatake Kakashi',
        profile_img: 'https://characteresnaruto.sirv.com/Kakashi/kakashi-profile.png',
        resume: 'Hatake Kakashi, prodígio de Konoha, superou perdas familiares. Tornou-se Jonin aos 13, com Sharingan de Obito. Rigoroso, foi líder do Time 7, instruindo Naruto, Sasuke e Sakura, e tornou-se Sexto Hokage, honrando o legado de seu pai, Sakumo.',
        resume_img: 'https://characteresnaruto.sirv.com/Kakashi/kakashi%20(5).jpeg',
        village: 'Vila da Folha',
        additional: {
          father: 'Hatake Sakumo',
          mother: 'Desconhecida',
          jutsu: 'Chidori (Raikiri)',
          more: 'Ninja Copiador (Sharingan)'
        },
        extras: [
          {
            name: 'Mangekyo Sharingan de Kakashi',
            text: 'Kakashi despertou o Mangekyo Sharingan após a morte de Rin. Seus jutsus notáveis incluem Kamui, permitindo teletransporte dimensional e intangibilidade, e Raikiri (Chidori aprimorado), mostrando seu domínio excepcional sobre o Sharingan.',
            image: 'https://characteresnaruto.sirv.com/Kakashi/kakashi%20Mangenkyo.jpg'
          },
          {
            name: 'Chidori',
            text: 'O Chidori, criado por Kakashi, é uma técnica de alto nível de raio que concentra chakra na mão, aumentando a velocidade para perfurar alvos. Sua versão aprimorada, o Raikiri, é mais poderosa e cortante, superando defesas com facilidade.',
            image: 'https://characteresnaruto.sirv.com/Kakashi/kakashi-chidori.jpg'
          },
          {
            name: 'Um ninja intrigante',
            text: 'Kakashi é conhecido por ler "Make-Out Paradise", um livro adulto, e por seu amor por dango. Além disso, sua máscara, que esconde seu rosto, se tornou um ícone, gerando especulações e mistério entre os fãs de Naruto.',
            image: 'https://characteresnaruto.sirv.com/Kakashi/kakashi%20(4).jpg'
          },
        ]
      },
      {
        id: 8,
        name: 'Uchiha Obito',
        profile_img: 'https://characteresnaruto.sirv.com/Obito/obito-uchiha-profile.jpg',
        resume: 'Obito Uchiha, após ser dado como morto, tornou-se Tobi, manipulando eventos sombrios. Usou o Mangekyo Sharingan, controlou a Akatsuki, e buscou um mundo controlado. Redimiu-se ao ajudar Naruto, revelando sua identidade como o verdadeiro Obito, buscando redenção.',
        resume_img: 'https://characteresnaruto.sirv.com/Obito/uchiha-obito-ship.jpg',
        village: 'Vila da Folha',
        additional: {
          father: 'Desconhecido',
          mother: 'Desconhecida',
          jutsu: 'Kamui',
          more: 'Mangekyo Sharingan'
        },
        extras: [
          {
            name: 'Jinchuriki do Dez-Caudas (Juubi)',
            text: 'Obito Uchiha, após se tornar o Jinchuriki do Dez-Caudas (Juubi), buscava o "Tsukuyomi Infinito", controlando a realidade. Naruto e Sasuke o enfrentaram, desfazendo sua manipulação, mostrando-lhe a luz, culminando em sua redenção e sacrifício para salvar o mundo.',
            image: 'https://characteresnaruto.sirv.com/Obito/juuby-uchiha-obito.jpg'
          },
          {
            name: 'Sábio dos Seis Caminhos',
            text: 'Obito, como Sábio dos Seis Caminhos, obteve poderes divinos após se fundir com o Dez-Caudas, utilizando o Rinnegan e controlando chakra yin-yang, mas escolheu a redenção e ajudou a deter Kaguya para salvar o mundo shinobi.',
            image: 'https://characteresnaruto.sirv.com/Obito/obito-sabio-6-caminho.jpg'
          },
          {
            name: 'Rinnegan',
            text: 'Obito Uchiha obteve o Rinnegan após receber os olhos de Nagato. Com esse poder, dominou habilidades como Limbo: Border Jail, controle de chakra yin-yang e criou o Tsukuyomi Infinito, buscando controlar a realidade até sua redenção e sacrifício.',
            image: 'https://characteresnaruto.sirv.com/Obito/obito-uchiha-rinnegan.jpg'
          },
          {
            name: 'Time Minato',
            text: 'Obito Uchiha fez parte do Time Minato com Kakashi e Rin. Juntos, enfrentaram desafios como ninjas de Konoha, criando laços fortes. No entanto, uma tragédia mudou seu destino e influenciou o mundo ninja.',
            image: 'https://characteresnaruto.sirv.com/Obito/obito-uchiha-time-kakashi.jpg'
          },
          {
            name: 'Manipulado por Zetsu Negro',
            text: 'Obito, manipulado por Zetsu Negro, sobreviveu após sua suposta morte, influenciando eventos ocultos. Usou essa conexão para manipular a Akatsuki, mas seu verdadeiro propósito se revelou quando assumiu o nome Tobi, buscando controlar o mundo shinobi.',
            image: 'https://characteresnaruto.sirv.com/Obito/obito-zetsu.jpg'
          },
          {
            name: 'Tobi (Akatsuki)',
            text: 'Obito Uchiha, como Tobi, manipulou guerras e a Akatsuki, escondendo sua verdadeira identidade. Buscava um mundo controlado pelo Tsukuyomi Infinito, revelando-se como peça-chave em eventos marcantes de Naruto.',
            image: 'https://characteresnaruto.sirv.com/Obito/tobi.jpg'
          },
          {
            name: 'Aliança com Madara',
            text: 'Tobi, como se apresentou inicialmente, afirmou liderar a Akatsuki em nome de Madara Uchiha, mas revelou-se ser Obito Uchiha, manipulando eventos para concretizar os planos de seu mentor, enquanto ocultava sua identidade real.',
            image: 'https://characteresnaruto.sirv.com/Obito/uchiha-obito-alianca-madara.jpg'
          }
        ]
      },
      {
        id: 9,
        name: 'Rock Lee',
        profile_img: 'https://characteresnaruto.sirv.com/Rock%20Lee/Rock-lee-profile.jpg',
        resume: 'Rock Lee, ninja de Konoha, sem habilidades ninjutsu/genjutsu, focou no taijutsu. Determinado, treinou intensamente, mostrando que a força de vontade supera limitações. Alcançou maestria e inspirou por sua perseverança.',
        resume_img: 'https://characteresnaruto.sirv.com/Rock%20Lee/Rocke%20lee%20(3).jpg',
        village: 'Vila da Folha',
        additional: {
          father: 'Desconhecido',
          mother: 'Desconhecida',
          jutsu: 'Lótus Oculta',
          more: 'Estilo dos Oito Portões'
        },
        extras: [
          {
            name: 'Rock Lee versus Gaara',
            text: 'Rock Lee enfrentou Gaara nas preliminares do Exame Chunin. Usou os Oito Portões, mas Gaara, protegido pela defesa de areia, parecia invencível. Lee quase vence, mas seus ferimentos o impediram, mostrando sua determinação e coragem.',
            image: 'https://characteresnaruto.sirv.com/Rock%20Lee/rock-lee-versus-gaara.jpg'
          },
          {
            name: 'Oito Portões Celestiais',
            text: 'Rock Lee desbloqueia os Oito Portões Celestiais: 1. Portão da Abertura, 2. Portão da Cura, 3. Portão da Vida, 4. Portão da Dor, 5. Portão do Limite, 6. Portão da Visão, 7. Portão da Maravilha, 8. Portão da Morte, aumentando poder, mas sobrecarregando o corpo.',
            image: 'https://characteresnaruto.sirv.com/Rock%20Lee/Rocke%20lee%208%20portoes.jpg'
          },
          {
            name: 'Rock Lee, um Ninja de Konoha',
            text: 'Rock Lee, de Konoha, destaca-se por sua determinação, treinando taijutsu para compensar a falta de ninjutsu/genjutsu. Incansável, usa os Oito Portões para superar limites, inspirando pela perseverança e lealdade a Might Guy.',
            image: 'https://characteresnaruto.sirv.com/Rock%20Lee/rock-lee.jpg'
          },
        ]
      },
    ]
  }

  res.json(characters);
});

app.listen(port, () => console.log(`Example app listening on port ${port}! http://localhost:${port}/`));