import { IATA_MAP, IATAS, IMAGES_MAP, AIRLINES } from "./iata";
import fetch from 'node-fetch';

export const randomize: any = async () => {
  const iata = IATAS[Math.floor(Math.random()*(IATAS.length))]
  const airline = IATA_MAP[iata];
  const image = IMAGES_MAP[iata];
  const options = [];
  options.push(airline);

  const s = await fetch(image);
  if (s.status === 404) return randomize();

  const numOptions = 4;
  while (options.length < numOptions) {
    const randomIATA = IATAS[Math.floor(Math.random() * IATAS.length)];
    const randomAirline = IATA_MAP[randomIATA];

    if (!options.includes(randomAirline)) {
      options.push(randomAirline);
    }
  }

  if (options.length > numOptions) {
    options.splice(numOptions);
  }

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]];
  }


  return { iata, airline, image, options };
}