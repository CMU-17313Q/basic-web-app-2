// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = string;

import QueryProcessor from "../../utils/QueryProcessor";
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.url);

  const query = req.query.q as string;
  const response = QueryProcessor(query);
  if (response == "" ) {
  console.log("blank");
     res.status(404).send();
  }else {
	res.status(200).send(response);
	}
}
