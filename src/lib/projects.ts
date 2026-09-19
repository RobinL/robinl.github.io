import type { ImageMetadata } from 'astro';

import agilePriceForecastImage from '../assets/projects/agile-price-forecast.png';
import arithmeticAnnihilationImage from '../assets/projects/arithmetic_annihilation.png';
import beeLettersImage from '../assets/projects/bee_letters.jpeg';
import breakoutMathsImage from '../assets/projects/breakout_maths.png';
import keepItGoingImage from '../assets/projects/keep-it-going.png';
import letterConstellationsImage from '../assets/projects/letter_constellations.png';
import letterpathsImage from '../assets/projects/letterpaths.png';
import mathsGameProblemGeneratorImage from '../assets/projects/maths-game-problem-generator.png';
import mathsVsMonstersImage from '../assets/projects/maths_vs_monsters.jpeg';
import numberLanesImage from '../assets/projects/number_lanes.webp';
import splinkImage from '../assets/projects/splink.webp';
import ukAddressMatcherImage from '../assets/projects/uk_address_matcher.webp';
import agilePriceForecastDescription from '../content/projects/agile-price-forecast.md';
import arithmeticAnnihilationDescription from '../content/projects/arithmetic-annihilation.md';
import beeLettersDescription from '../content/projects/bee-letters.md';
import breakoutMathsDescription from '../content/projects/breakout-maths.md';
import keepItGoingDescription from '../content/projects/keep-it-going.md';
import letterConstellationsDescription from '../content/projects/letter-constellations.md';
import letterpathsDescription from '../content/projects/letterpaths.md';
import mathsGameProblemGeneratorDescription from '../content/projects/maths-game-problem-generator.md';
import mathsVsMonstersDescription from '../content/projects/maths-vs-monsters.md';
import numberLanesDescription from '../content/projects/number-lanes.md';
import splinkDescription from '../content/projects/splink.md';
import ukAddressMatcherDescription from '../content/projects/uk-address-matcher.md';

type ProjectDescription = typeof beeLettersDescription;

interface ProjectBase {
  name: string;
  description: ProjectDescription;
  image: ImageMetadata;
}

type Project = ProjectBase &
  (
    | {
        liveUrl: string;
        githubUrl?: string;
      }
    | {
        liveUrl?: string;
        githubUrl: string;
      }
  );

export const projects: Project[] = [
  {
    name: 'Splink',
    description: splinkDescription,
    githubUrl: 'https://github.com/moj-analytical-services/splink',
    image: splinkImage,
  },
  {
    name: 'UK Address Matcher',
    description: ukAddressMatcherDescription,
    githubUrl: 'https://github.com/RobinL/uk_address_matcher',
    image: ukAddressMatcherImage,
  },
  {
    name: 'Bee Letters',
    description: beeLettersDescription,
    liveUrl: 'https://www.robinlinacre.com/bee_letters/',
    githubUrl: 'https://github.com/RobinL/bee_letters',
    image: beeLettersImage,
  },
  {
    name: 'Letter Constellations',
    description: letterConstellationsDescription,
    liveUrl: 'https://www.robinlinacre.com/letter_constellations/',
    githubUrl: 'https://github.com/RobinL/letter_constellations',
    image: letterConstellationsImage,
  },
  {
    name: 'Letterpaths',
    description: letterpathsDescription,
    liveUrl: 'https://www.robinlinacre.com/letterpaths',
    githubUrl: 'https://github.com/RobinL/letterpaths',
    image: letterpathsImage,
  },
  {
    name: 'Agile Price Forecast',
    description: agilePriceForecastDescription,
    liveUrl: 'https://www.robinlinacre.com/agile-price-forecast/',
    image: agilePriceForecastImage,
  },
  {
    name: 'Keep It Going',
    description: keepItGoingDescription,
    liveUrl: 'https://rupertlinacre.com/keep_it_going/',
    image: keepItGoingImage,
  },
  {
    name: 'Arithmetic Annihilation',
    description: arithmeticAnnihilationDescription,
    liveUrl: 'https://rupertlinacre.com/arithmetic_annihilation/',
    githubUrl: 'https://github.com/RupertLinacre/arithmetic_annihilation',
    image: arithmeticAnnihilationImage,
  },
  {
    name: 'Maths vs Monsters',
    description: mathsVsMonstersDescription,
    liveUrl: 'https://rupertlinacre.com/maths_vs_monsters/',
    githubUrl: 'https://github.com/RupertLinacre/maths_vs_monsters',
    image: mathsVsMonstersImage,
  },
  {
    name: 'Breakout Maths',
    description: breakoutMathsDescription,
    liveUrl: 'https://rupertlinacre.com/breakout_maths/',
    githubUrl: 'https://github.com/rupertLinacre/breakout_maths',
    image: breakoutMathsImage,
  },
  {
    name: 'Number Lanes',
    description: numberLanesDescription,
    liveUrl: 'https://rupertlinacre.com/number_lanes/',
    image: numberLanesImage,
  },
  {
    name: 'Maths Game Problem Generator',
    description: mathsGameProblemGeneratorDescription,
    liveUrl: 'https://www.npmjs.com/package/maths-game-problem-generator',
    githubUrl: 'https://github.com/RobinL/maths-game-problem-generator',
    image: mathsGameProblemGeneratorImage,
  },
];
