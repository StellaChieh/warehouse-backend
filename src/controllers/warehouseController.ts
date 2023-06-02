import { Request, Response } from 'express';

export class WarehouseController {
    
    public createWarehouse(req: Request, res: Response): Response {

        try {
            const warehouseId: string = req.body.warehouseId;
            const zoneId: string = req.body.zoneId;
            const shelfNames: { [shelfId: number]: string } = req.body.shelfNames;
            
            return res.status(200).send({msg: "OK!"})
        } catch( err: unknown) {
            console.log(err);
            return res.status(500).send({msg: "Internal error."})
        }
        
    }
}