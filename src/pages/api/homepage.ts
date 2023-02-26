// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Homepage } from '../../../types';
import fetchHomePage from '../../GROQ/quries/fetchHomepage';

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Homepage>
) {
  const data = await fetchHomePage();
  res.json(data);
}
