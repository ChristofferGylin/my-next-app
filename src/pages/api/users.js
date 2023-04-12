// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import executeQuery from "@/lib/db";

export default async function handler(req, res) {

  const sql = {

    query: 'SELECT * FROM users'

  }

  const result = await executeQuery(sql);

  res.status(200).json(result)
}
