// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IATA_MAP, AIRLINES, IATAS, IMAGES_MAP } from "../../utils/iata";

type Data = {
  answer: string;
  image: string;
  options: string[];
  iata: string;
}

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const iata = IATAS[Math.floor(Math.random()*(IATAS.length))]
  const airline = IATA_MAP[iata];
  const image = IMAGES_MAP[iata];
  const options = [];
  for (let i = 0; i < 5; i++) {
    let rnd = AIRLINES[Math.floor(Math.random()*AIRLINES.length)];
    options.push(rnd);
  }

  return res.json({ answer: airline, image, options, iata });
};