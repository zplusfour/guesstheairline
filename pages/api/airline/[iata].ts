// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IATA_MAP } from "../../../utils/iata";

export default (req: NextApiRequest, res: NextApiResponse<string>) => {
  const { iata } = req.query as any;
  return res.send(IATA_MAP[iata]);
};
