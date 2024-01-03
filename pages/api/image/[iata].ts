// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse<string>) => {
  const { iata } = req.query as any;
  return res.send(`https://content.airhex.com/content/logos/airlines_${iata}_250_250_t.png`);
};
