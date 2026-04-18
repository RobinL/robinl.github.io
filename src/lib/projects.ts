import type { ImageMetadata } from 'astro';

import beeLettersImage from '../assets/projects/bee_letters.jpeg';
import breakoutMathsImage from '../assets/projects/breakout_maths.png';
import letterConstellationsImage from '../assets/projects/letter_constellations.png';
import letterpathsImage from '../assets/projects/letterpaths.png';
import mathsGameProblemGeneratorImage from '../assets/projects/maths-game-problem-generator.png';
import mathsVsMonstersImage from '../assets/projects/maths_vs_monsters.jpeg';

export interface Project {
  name: string;
  description: string;
  liveUrl: string;
  githubUrl: string;
  image: ImageMetadata;
}

export const projects: Project[] = [
  {
    name: 'Bee Letters',
    description: 'Bee Letters',
    liveUrl: 'https://www.robinlinacre.com/bee_letters/',
    githubUrl: 'https://github.com/RobinL/bee_letters',
    image: beeLettersImage,
  },
  {
    name: 'Letter Constellations',
    description: 'Letter Constellations',
    liveUrl: 'https://www.robinlinacre.com/letter_constellations/',
    githubUrl: 'https://github.com/RobinL/letter_constellations',
    image: letterConstellationsImage,
  },
  {
    name: 'Letterpaths',
    description: 'Letterpaths',
    liveUrl: 'https://www.robinlinacre.com/letterpaths/writing_app/snake/?words=hello',
    githubUrl: 'https://github.com/RobinL/letterpaths',
    image: letterpathsImage,
  },
  {
    name: 'Maths vs Monsters',
    description: 'Maths vs Monsters',
    liveUrl: 'https://rupertlinacre.com/maths_vs_monsters/',
    githubUrl: 'https://github.com/RupertLinacre/maths_vs_monsters',
    image: mathsVsMonstersImage,
  },
  {
    name: 'Breakout Maths',
    description: 'Breakout Maths',
    liveUrl: 'https://rupertlinacre.com/breakout_maths/',
    githubUrl: 'https://github.com/rupertLinacre/breakout_maths',
    image: breakoutMathsImage,
  },
  {
    name: 'Maths Game Problem Generator',
    description: 'Maths Game Problem Generator',
    liveUrl: 'https://www.npmjs.com/package/maths-game-problem-generator',
    githubUrl: 'https://github.com/RobinL/maths-game-problem-generator',
    image: mathsGameProblemGeneratorImage,
  },
];
