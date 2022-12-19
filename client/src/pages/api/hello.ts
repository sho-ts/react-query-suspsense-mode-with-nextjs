// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await new Promise<void>((resolve) =>
    setTimeout(resolve, 5000)
  );

  res.status(200).json([
    {
      id: 1,
      title: 'hoge',
    },
    {
      id: 2,
      title: 'hoge',
    },
  ]);
}
