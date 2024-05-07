import path from "path";
import { writeFile } from "fs/promises";
export class Anime {
  name: string;
  releaseYear: number;
  genre: string;
  numberOfEpisodes: number;
  studio: string;
  constructor(
    name: string,
    releaseYear: number,
    genre: string,
    studio: string
  ) {
    this.name = name;
    this.releaseYear = releaseYear;
    this.genre = genre;
    this.studio = studio;
    this.numberOfEpisodes = 0;
  }
  addEpisode() {
    this.numberOfEpisodes += 1;
  }
}
const anime1 = new Anime("Naruto", 2002, "action", "Studio Pierrot");
const anime2 = new Anime("Death Note", 2006, "Thriller", "Madhouse");
const anime3 = new Anime("Attack on Titan", 2013, "action", "Wit Studio");
const anime4 = new Anime("One Piece", 1999, "Shounen", "Toei Animation");
const anime5 = new Anime("My Hero Academia", 2016, "Shounen", "Bones");
const anime6 = new Anime(
  "Fullmetal Alchemist: Brotherhood",
  2009,
  "Action",
  "Bones"
);
const anime7 = new Anime("Sword Art Online", 2012, "Adventure", "A-1 Pictures");
const anime8 = new Anime("Tokyo Ghoul", 2014, "Horror", "Studio Pierrot");
const anime9 = new Anime(
  "Demon Slayer: Kimetsu no Yaiba",
  2019,
  "Action",
  "ufotable"
);
const anime10 = new Anime("One Punch Man", 2015, "Action", "Madhouse");
const anime11 = new Anime("Your Lie in April", 2014, "Drama", "A-1 Pictures");
const anime12 = new Anime("Steins;Gate", 2011, "Science Fiction", "White Fox");
const anime13 = new Anime("Fairy Tail", 2009, "Fantasy", "A-1 Pictures");
const anime14 = new Anime(
  "Hunter x Hunter (2011)",
  2011,
  "Adventure",
  "Madhouse"
);
const anime15 = new Anime("Dragon Ball Z", 1989, "Action", "Toei Animation");
const anime16 = new Anime("Neon Genesis Evangelion", 1995, "Mecha", "Gainax");
const anime17 = new Anime(
  "Code Geass: Lelouch of the Rebellion",
  2006,
  "Action",
  "Sunrise"
);
const anime18 = new Anime("Cowboy Bebop", 1998, "Sci-Fi", "Sunrise");
const anime19 = new Anime("Clannad", 2007, "Romance", "Kyoto Animation");
const anime20 = new Anime("Death Parade", 2015, "Psychological", "Madhouse");
const anime21 = new Anime("Gurren Lagann", 2007, "Mecha", "Gainax");
const anime22 = new Anime(
  "Princess Mononoke",
  1997,
  "Fantasy",
  "Studio Ghibli"
);
const anime23 = new Anime(
  "Ghost in the Shell: Stand Alone Complex",
  2002,
  "Sci-Fi",
  "Production I.G"
);
const anime24 = new Anime("Dragon Ball", 1986, "Action", "Toei Animation");
const anime25 = new Anime(
  "JoJo's Bizarre Adventure",
  2012,
  "Action",
  "David Production"
);
const animeList = [
  anime1,
  anime2,
  anime3,
  anime4,
  anime5,
  anime6,
  anime7,
  anime8,
  anime9,
  anime10,
  anime11,
  anime12,
  anime13,
  anime14,
  anime15,
  anime16,
  anime17,
  anime18,
  anime19,
  anime20,
  anime21,
  anime22,
  anime23,
  anime24,
  anime25,
];
writeFile("./anime-data.json", JSON.stringify(animeList));
