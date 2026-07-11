import {csvParse, autoType} from 'd3';
import * as Inputs from '@observablehq/inputs';
import birdsListCsv from '../../notebooks/migrated/birdsong-recordings/birds-list.csv?raw';
import britishBirdsCsv from '../../notebooks/migrated/bird-song-quiz/british-birds.csv?raw';
import top10Csv from '../../notebooks/migrated/bird-song-quiz/top-10.csv?raw';
import top20Csv from '../../notebooks/migrated/bird-song-quiz/top-20.csv?raw';
import top30Csv from '../../notebooks/migrated/bird-song-quiz/top-30.csv?raw';
import top40Csv from '../../notebooks/migrated/bird-song-quiz/top-40.csv?raw';

export type Bird = {
  common_name: string;
  scientific_name: string;
  roughly_how_common?: number;
  inaturalist_id?: number;
};

export type BirdSelection = Partial<Bird> & {raw?: string; free_text?: boolean};

type Recording = {
  id: string; en: string; gen: string; sp: string; type: string; length: string;
  file: string; url: string;
};

type Observation = {
  faves_count: number;
  photos: Array<{url: string; url_medium: string; url_large: string}>;
  taxon: {default_photo: {medium_url: string}};
};

const birds = (csvParse(birdsListCsv, autoType) as unknown as Bird[])
  .sort((a, b) => a.common_name > b.common_name ? 1 : -1);
const allBritishBirds = (csvParse(britishBirdsCsv, autoType) as unknown as Bird[])
  .sort((a, b) => a.common_name > b.common_name ? 1 : -1);
const cleanScientificName = (name: string) => name.toLowerCase().trim().replace(' ', '');
const scientificLookup = Object.fromEntries(birds.map((bird) => [cleanScientificName(bird.scientific_name), bird]));

function element<K extends keyof HTMLElementTagNameMap>(name: K, document: Document): HTMLElementTagNameMap[K] {
  return document.createElement(name);
}

export function createHeading(title: string, level = 1, document: Document = globalThis.document): HTMLElement {
  const heading = document.createElement(`h${level}`);
  heading.textContent = title;
  return heading;
}

export function createBirdsongTitle(document: Document = globalThis.document) {
  const wrapper = element('div', document);
  wrapper.append(createHeading('UK birdsong recordings', 1, document));
  const paragraph = element('p', document);
  paragraph.append('Select a bird from the list below or type a scientific name for best results.');
  const source = element('p', document); source.append('Source of recordings:  ');
  const link = element('a', document); link.href = 'https://www.xeno-canto.org/'; link.textContent = 'xeno-canto'; source.append(link);
  wrapper.append(paragraph, source); return wrapper;
}

export function createBirdPhotosTitle(document: Document = globalThis.document) {
  const wrapper = element('div', document); wrapper.append(createHeading('Photos from iNaturalist', 2, document));
  const paragraph = element('p', document); paragraph.textContent = 'Click on photo for full size'; wrapper.append(paragraph); return wrapper;
}

export function createQuizSettings(document: Document = globalThis.document) {
  const wrapper = element('div', document); const label = element('strong', document); label.textContent = 'Settings:';
  const paragraph = element('p', document); paragraph.textContent = "Please select which birds you'd like to include in your quiz:";
  wrapper.append(label, paragraph); return wrapper;
}

export function createQuizOtherLink(document: Document = globalThis.document) {
  const paragraph = element('p', document);
  paragraph.append('You can find a more comprehensive list of audio recordings for each bird, and photos of them ');
  const link = element('a', document); link.href = 'https://robinlinacre.com/birdsong/'; link.textContent = 'here';
  paragraph.append(link, '.'); return paragraph;
}

export function createBirdSelector(includeRare: boolean, width: number, document: Document = globalThis.document) {
  const wrapper = element('div', document) as HTMLDivElement & {value: BirdSelection};
  const input = element('input', document);
  input.id = 'birdinputbox'; input.name = 'dep'; input.type = 'text'; input.autocomplete = 'off';
  input.inputMode = 'none'; input.placeholder = 'Type or select a bird to begin'; input.style.cssText = `font-size: 1em; width:${width}px`;
  input.setAttribute('list', 'options');
  const datalist = element('datalist', document); datalist.id = 'options';
  const choices = includeRare ? birds : birds.filter((bird) => Number(bird.roughly_how_common) > 100000);
  for (const bird of choices) {
    const option = element('option', document); option.label = bird.common_name; option.value = bird.scientific_name; datalist.append(option);
  }
  wrapper.value = {};
  input.onfocus = () => { input.inputMode = ''; input.value = ''; };
  input.oninput = (event) => event.stopPropagation();
  input.onchange = () => {
    input.inputMode = 'none';
    const raw = input.value;
    const bird = scientificLookup[cleanScientificName(raw)];
    wrapper.value = bird ? {...bird, free_text: false, raw} : {free_text: true, raw};
    wrapper.dispatchEvent(new CustomEvent('input'));
  };
  wrapper.append(input, datalist);
  return wrapper;
}

export function createRareBirdToggle(document: Document = globalThis.document) {
  void document;
  return Inputs.toggle({label: 'Include rare birds? (causes lag on selection box)', value: false});
}

const corsAnywhere = 'https://red-wave-c29f.robinlinacre.workers.dev/corsproxy/?apiurl=';
const xenoEndpoint = 'https://xeno-canto.org/api/3/recordings?';
const titleCase = (value: string) => value.replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.slice(1).toLowerCase());

function xenoUrl(query = '', type = '', quality = '', country = '') {
  const terms = [`sp:"${query}"`];
  if (type) terms.push(`type:"${type}"`);
  if (quality) terms.push(`q:"${quality}"`);
  if (country) terms.push(`cnt:"${titleCase(country)}"`);
  return corsAnywhere + encodeURIComponent(xenoEndpoint + 'query=' + encodeURIComponent(terms.join(' ')));
}

async function getXenoResults(url: string): Promise<{recordings: Recording[]}> {
  try {
    const response = await fetch(url); const result = await response.json();
    if (!response.ok || !Array.isArray(result.recordings)) throw new Error(result.message || 'Xeno-canto query failed');
    return result;
  } catch {
    return {recordings: []};
  }
}

export async function queryXenoCanto(query = '', type = '', quality = '', country = '', minimum = 3) {
  if (!query) return {recordings: [] as Recording[]};
  let result = await getXenoResults(xenoUrl(query, type, quality, country));
  if (result.recordings.length < minimum) result = await getXenoResults(xenoUrl(query));
  return result;
}

export async function queryINaturalist(bird: BirdSelection): Promise<Observation[]> {
  if (!bird.raw) return [];
  const params: Record<string, string | number | boolean> = {photos: true, verifiable: true, order_by: 'votes', lat: 53.807321, lng: -1.387255, radius: 1400};
  if (bird.inaturalist_id != null) params.taxon_id = bird.inaturalist_id;
  else params.taxon_name = bird.raw;
  const query = Object.entries(params).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&');
  const data = await fetch(`https://api.inaturalist.org/v1/observations?${query}`).then((response) => response.json());
  const results = (data.results || []) as Observation[];
  results.forEach((result) => result.photos.forEach((photo) => {
    photo.url_medium = photo.url.replace('square', 'medium');
    photo.url_large = photo.url.replace('square', 'original');
  }));
  results.sort((a, b) => a.faves_count - b.faves_count);
  return results;
}

function recordingUrl(recording: Recording) {
  const pieces = recording.file.split('/').filter((piece) => piece && piece !== 'http:' && piece !== 'https:');
  return `https://${pieces.join('/')}`;
}

export function takeRandom<T>(values: T[], count: number, truncate = true): T[] {
  const result = new Array<T>(count); let length = values.length; const taken = new Array<number>(length);
  if (count > length) { if (truncate) count = length; else throw new RangeError('getRandom: more elements taken than available'); }
  while (count--) { const x = Math.floor(Math.random() * length); result[count] = values[x in taken ? taken[x] : x]; taken[x] = --length in taken ? taken[length] : length; }
  return result;
}

function createAudioButton(recording: Recording, next: Recording | null, document: Document) {
  const wrapper = element('div', document); const audio = element('audio', document); const button = element('button', document);
  const playerId = `player_${recording.id}`; audio.id = playerId; audio.className = 'birdaudio'; audio.src = recordingUrl(recording);
  button.className = `audioplayer ${playerId}_play_button`; button.textContent = 'Play'; button.setAttribute('play_status', 'unplayed');
  button.onclick = () => {
    document.querySelectorAll<HTMLAudioElement>('.birdaudio').forEach((other) => {
      if (other.id !== playerId && !other.paused) { other.pause(); const otherButton = document.querySelector<HTMLElement>(`.${other.id}_play_button`); if (otherButton) otherButton.innerText = 'Paused'; }
    });
    if (audio.paused) { void audio.play(); button.innerText = 'Pause'; button.setAttribute('play_status', 'playing'); }
    else { audio.pause(); button.innerText = 'Paused'; button.setAttribute('play_status', 'paused'); }
  };
  audio.onended = () => {
    button.innerText = 'Played'; button.setAttribute('play_status', 'played');
    if (!next) return;
    const nextAudio = document.getElementById(`player_${next.id}`) as HTMLAudioElement | null;
    const nextButton = document.querySelector<HTMLElement>(`.player_${next.id}_play_button`);
    if (nextAudio) void nextAudio.play(); if (nextButton) { nextButton.setAttribute('play_status', 'playing'); nextButton.innerText = 'Playing'; }
  };
  wrapper.append(audio, button); return wrapper;
}

export function createAudioTable(recordings: Recording[], document: Document = globalThis.document) {
  if (!recordings.length) return document.createTextNode('Please wait, fetching audio recordings...');
  const rows = takeRandom(recordings, Math.min(20, recordings.length));
  const table = element('table', document); const header = table.insertRow();
  ['Species', 'Type', 'Length', 'Audio'].forEach((text) => { const th = element('th', document); th.textContent = text; header.append(th); });
  rows.forEach((recording, index) => {
    const row = table.insertRow();
    row.insertCell().innerHTML = `${recording.en} (<i>${recording.gen} ${recording.sp})`;
    row.insertCell().textContent = recording.type; row.insertCell().textContent = recording.length;
    row.insertCell().append(createAudioButton(recording, rows[index + 1] || null, document));
  });
  return table;
}

export function createPictureGallery(results: Observation[], width: number, document: Document = globalThis.document) {
  if (!results.length) return document.createTextNode('Please wait, loading pictures...');
  const wrapper = element('div', document); const style = element('style', document);
  style.textContent = `.collection {width: ${width}px}.collection .species { display: inline-block; }.collection img { display: block; width: 12em; height: 12em; object-fit: cover}`;
  const collection = element('div', document); collection.className = 'collection';
  const defaultUrl = results[0].taxon.default_photo.medium_url;
  const photos = [{medium: defaultUrl, large: defaultUrl.replace('medium', 'original')}, ...results.map((result) => ({medium: result.photos[0].url_medium, large: result.photos[0].url_large}))];
  photos.forEach((photo) => { const species = element('div', document); species.className = 'species'; const link = element('a', document); link.href = photo.large; link.target = '_blank'; const image = element('img', document); image.src = photo.medium; link.append(image); species.append(link); collection.append(species); });
  wrapper.append(style, collection); return wrapper;
}

const quizChoices = [
  {name: '10 most common birds', csv: top10Csv}, {name: '20 most common birds', csv: top20Csv},
  {name: '30 most common birds', csv: top30Csv}, {name: '40 most common birds', csv: top40Csv},
];

export function createQuizSelector(document: Document = globalThis.document) {
  const wrapper = element('div', document) as HTMLDivElement & {value: string}; const input = element('input', document); const datalist = element('datalist', document);
  input.id = 'select-quiz'; input.type = 'text'; input.autocomplete = 'off'; input.value = '20 most common birds'; input.placeholder = 'Select which birds to include in quiz...'; input.style.cssText = 'font-size: 1em; width: 320px'; input.setAttribute('list', 'options2');
  datalist.id = 'options2'; quizChoices.forEach(({name}) => { const option = element('option', document); option.value = name; datalist.append(option); });
  const blurb = element('span', document); blurb.innerHTML = "<br>or upload custom bird list .csv created <a href='https://observablehq.com/@robinl/birdsong-quiz-list-creator'>here:";
  const upload = element('input', document); upload.name = 'file_input'; upload.className = 'inputfile'; upload.type = 'file'; upload.style.paddingLeft = '10px';
  wrapper.value = input.value;
  input.onchange = () => { upload.value = ''; wrapper.value = input.value; wrapper.dispatchEvent(new CustomEvent('input')); };
  input.onfocus = input.onclick = () => { input.value = ''; };
  upload.onchange = async () => { const file = upload.files?.[0]; if (!file) return; wrapper.value = await file.text(); input.value = 'Custom upload...'; wrapper.dispatchEvent(new CustomEvent('input')); };
  wrapper.append(input, datalist, blurb, upload); return wrapper;
}

export function createBirdQuiz(selection: string, width: number, document: Document = globalThis.document) {
  const root = element('div', document); let score = 0; let total = 0; let previousAnswer = ''; let previousSelection = '';
  const named = quizChoices.find((choice) => choice.name === selection);
  const quizBirds = csvParse(named?.csv || selection) as unknown as Bird[];
  const lookup = Object.fromEntries(allBritishBirds.map((bird) => [bird.scientific_name, bird]));
  const render = async () => {
    root.replaceChildren(); const randomBird = takeRandom(quizBirds, 1)[0]; if (!randomBird) return;
    const title = element('p', document); title.textContent = 'Play the audio clips below, enter your answer and hit submit.'; root.append(title);
    const [xeno, photos] = await Promise.all([queryXenoCanto(randomBird.scientific_name, '', 'A', 'United Kingdom'), queryINaturalist({raw: randomBird.scientific_name})]);
    if (!xeno.recordings.length) root.append('Please wait, loading recordings');
    else {
      const audioWrapper = element('div', document); const style = element('style', document); style.textContent = '.audio_container {display: inline-block;}.audio_container div {display: block; text-align: center}'; audioWrapper.append(style);
      takeRandom(xeno.recordings, Math.min(xeno.recordings.length, 6)).forEach((recording) => { const box = element('div', document); box.className = 'audio_container'; const center = element('div', document); const link = element('a', document); link.href = recording.url; link.textContent = titleCase(recording.type); const audio = element('audio', document); audio.controls = true; audio.src = recordingUrl(recording); center.append(link, element('div', document), audio); box.append(center); audioWrapper.append(box); }); root.append(audioWrapper);
    }
    const gallery = element('div', document); const galleryStyle = element('style', document); galleryStyle.textContent = `.collection {width: ${width}px;}.collection .species { display: inline-block }.collection img { display: inline-block; width: 6; height: 6em; object-fit: cover}`;
    gallery.className = 'collection'; gallery.id = 'bird_gallery'; gallery.style.display = 'none'; takeRandom(photos, 6).forEach((photo) => { const species = element('div', document); species.className = 'species'; const image = element('img', document); image.src = photo.photos[0].url_medium; species.append(image); gallery.append(species); }); root.append(galleryStyle, gallery);
    const answer = element('input', document); answer.id = 'birdinputbox'; answer.name = 'dep'; answer.type = 'text'; answer.placeholder = 'Choose your answer from this list...'; answer.style.cssText = `font-size: 1em; width:${width}px`; answer.setAttribute('list', 'options');
    const options = element('datalist', document); options.id = 'options'; quizBirds.forEach((bird) => { const option = element('option', document); option.label = bird.common_name; option.value = bird.scientific_name; options.append(option); });
    const submit = element('input', document); submit.type = 'button'; submit.value = 'Submit answer'; const clue = element('input', document); clue.type = 'button'; clue.value = 'Display clue'; clue.onclick = () => { gallery.style.display = 'inline-block'; };
    answer.onchange = () => { answer.inputMode = 'none'; };
    submit.onclick = () => { total += 1; previousSelection = answer.value; previousAnswer = randomBird.scientific_name; if (previousSelection === previousAnswer) score += 1; void render(); };
    root.append(answer, options, submit, clue);
    if (previousAnswer) { const result = element('p', document); const correct = previousAnswer === previousSelection; const actual = lookup[previousAnswer]; const selected = lookup[previousSelection]; result.innerHTML = `${correct ? '✔' : '👎'} The answer to the previous question was ${actual?.common_name} (<i>${previousAnswer.toLowerCase()}</i>). You chose ${selected?.common_name} (<i>${previousSelection.toLowerCase()}</i>).`; root.append(result); }
    const scoreLine = element('p', document); scoreLine.textContent = `You currently have ${score} points out of ${total}`; root.append(scoreLine);
  };
  void render(); return root;
}
