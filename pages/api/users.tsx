import { NextApiResponse } from "next";
import { NextRequest } from "next/server";


export default async function handler (req: NextRequest, res: NextApiResponse) {
    
    let result = await fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users");
    let data = await result.json();

    res.json(data)
}