import { Request, Response } from 'express';

export class WarehouseController {
    
    createWarehouse(req: Request, res: Response): Response {
        return res.status(200).send({msg: "OK!"})
    }
}