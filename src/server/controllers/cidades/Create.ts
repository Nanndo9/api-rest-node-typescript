
import { Request, Response } from "express";

interface Icidade {
    name: string;
}
export const create = (req: Request<{}, {}, Icidade>, res: Response) => {
console.log(req.body.name);







    return res.send('Create!');
};

