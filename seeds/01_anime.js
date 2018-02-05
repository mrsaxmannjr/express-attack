exports.seed = function (knex, Promise) {
  return knex("anime")
    .del()
    .then(() => knex("anime").insert([
      {
        id: 1,
        name: "Naruto",
        video: "https://www.youtube.com/embed/hWp61OEy4R4",
        summary:
            "Naruto (ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, an adolescent ninja who searches for recognition from his peers and the village and also dreams of becoming the Hokage, the leader of his village. ",
      },
      {
        id: 2,
        name: "Bleach",
        video: "https://www.youtube.com/embed/fsUpERQWMj0",
        summary:
            "Bleach (Japanese: ブリーチ Hepburn: Burīchi) is a Japanese manga series written and illustrated by Tite Kubo. Bleach follows the adventures of the hotheaded teenager Ichigo Kurosaki who inherits his parents destiny, after he obtains the powers of a Soul Reaper (死神 Shinigami, literally Death God)—a death personification similar to the Grim Reaper—from another Soul Reaper, Rukia Kuchiki. His new-found powers force him to take on the duties of defending humans from evil spirits and guiding departed souls to the afterlife, and set him on journeys to various ghostly realms of existence.",
      },
      {
        id: 3,
        name: "Attack on Titan",
        video: "https://www.youtube.com/embed/VXCaPR0exE8",
        summary:
            "Attack on Titan (Japanese: 進撃の巨人 Hepburn: Shingeki no Kyojin, lit. Advancing Giant) is a Japanese manga series written and illustrated by Hajime Isayama. The series began in Kodansha's Bessatsu Shōnen Magazine on September 9, 2009, and has been collected into 24 tankōbon volumes as of December 2017. It is set in a world where humanity lives in cities surrounded by enormous walls; a defense against the Titans, gigantic humanoids that eat humans seemingly without reason. The story initially centers on Eren Yeager and his childhood friends Mikasa Ackerman and Armin Arlert, who join the military to fight the Titans after their hometown is invaded and Eren's mother is eaten and Eren swears to avenge her. However, as the story progresses and the truths about the Titans are slowly revealed to the reader, the narrative shifts to encompass Historia Reiss, squad leader Levi, Eren's father Grisha, and other supporting characters.",
      },
      {
        id: 4,
        name: "My Hero Academia",
        video: "https://www.youtube.com/embed/fA0XmlvFsg0",
        summary:
            "My Hero Academia (Japanese: 僕のヒーローアカデミア Hepburn: Boku no Hīrō Akademia) is a comedy adventure manga series written and illustrated by Kōhei Horikoshi. It has been serialized in Weekly Shōnen Jump since July 2014,and 16 volumes have been collected in tankōbon format. The series has been licensed for English-language release by Viz Media, and began serialization in their weekly digital manga anthology Weekly Shonen Jump on February 9, 2015.  The story follows Izuku Midoriya, a boy born without superpowers in a world where they are the norm, but who still dreams of becoming a superhero himself, and is scouted by the world's greatest hero who shares his powers with Izuku after recognizing his value and enrolls him in a high school for heroes in training. The manga was adapted into an anime television series; the first season aired from April 3 to June 26, 2016. The second season aired from April 1 to September 30, 2017. A third season has been announced, to start airing in April 2018, as well as an animated film for 2018.",
      },
      {
        id: 5,
        name: "Dragon Ball Super",
        video: "https://www.youtube.com/embed/GZW020zTL3A",
        summary:
            "Dragon Ball Super (Japanese: ドラゴンボール超 Hepburn: Doragon Bōru Sūpā) is an ongoing Japanese anime television series produced by Toei Animation that began airing on July 5, 2015. Its overall plot outline is written by Dragon Ball franchise creator Akira Toriyama, while the individual episodes are written by different screenwriters. It is also a manga series illustrated by Toyotarou, serialized in Shueisha's shōnen manga magazine V Jump. The anime is a sequel to Toriyama's original Dragon Ball manga and the Dragon Ball Z television series featuring the first new storyline in 18 years. It is broadcast on Sundays at 9:00 a.m. on Fuji TV. Dragon Ball Super follows the adventures of Goku and his friends after defeating Majin Buu and bringing peace to Earth once again. Goku encounters beings far more powerful and attains the power of a god. He defends the Earth against the powerful destructive deities and travels to other universes to face more powerful opponents and nearly unstoppable foes while learning his newly discovered powers under the gods of the universe.",
      },
    ]))
    .then(() => knex.raw("ALTER SEQUENCE anime_id_seq RESTART WITH 6;"));
};
