import { Request, Response } from 'express';
import { IShelf } from '../common/shelf';
import { findExistingShelf, saveShelves } from '../dao/shelfDoa';

// export class WarehouseController {
    
//     public async createWarehouse(req: Request, res: Response): Promise<Response> {
//         console.log(this)
//         this.test()
//         try {
//             const warehouseId: string = req.body.warehouseId;
//             const zoneId: string = req.body.zoneId;
//             const shelfIdAndNames: {} = req.body.shelfNames;
//             console.log('there')
//             const shelves : IShelf[] =  this.packageShelf(warehouseId, zoneId, shelfIdAndNames)
//             // find existing same (shelfName, wharehouseId) pair in database
//             let errorMsg: string[] = []
//             for (let i=0; i<shelves.length; i++) {
//                 const dbRecord = await findExistingShelf(shelves[i]);
//                 if (dbRecord) {
//                     errorMsg.push(shelves[i].name + " exists in Zone" + dbRecord.zoneId);
//                 }
//             }
//             if (errorMsg.length > 0) {
//                 return res.status(400).send({msg: errorMsg})    
//             }

//             await saveShelves(shelves);
//             return res.status(200).send({msg: "OK!"})

//         } catch( err: unknown) {
//             console.log(err);
//             return res.status(500).send({msg: "Internal error."})
//         }
        
//     }

//     test() {
//         console.log("test")
//     }

//     private packageShelf(warehouseId: string, zoneId: string, 
//         shlefIdAndNames: {[shelfId: string]: string}): IShelf[] {
//         console.log('here')
//         const result: IShelf[] = []
//         for (const shelfId in shlefIdAndNames) {
//             const aShelf: IShelf = {
//                 name: shlefIdAndNames[shelfId], 
//                 shelfId:shelfId,
//                 warehouseId, 
//                 zoneId, 
//             }
//             result.push(aShelf);
//         }
//         return result;
//     }

// }


    
    export async function createWarehouse(req: Request, res: Response): Promise<Response> {
        try {
            const warehouseId: string = req.body.warehouseId;
            const zoneId: string = req.body.zoneId;
            const shelfIdAndNames: {} = req.body.shelfNames;
            const shelves : IShelf[] =  packageShelf(warehouseId, zoneId, shelfIdAndNames)
            // find existing same (shelfName, wharehouseId) pair in database
            let errorMsg: string[] = []
            for (let i=0; i<shelves.length; i++) {
                const dbRecord = await findExistingShelf(shelves[i]);
                if (dbRecord) {
                    errorMsg.push(shelves[i].name + " exists in Zone" + dbRecord.zoneId);
                }
            }
            if (errorMsg.length > 0) {
                return res.status(400).send({msg: errorMsg})    
            }

            await saveShelves(shelves);
            return res.status(200).send({msg: "OK!"})

        } catch( err: unknown) {
            console.log(err);
            return res.status(500).send({msg: "Internal error."})
        }
        
    }

    function packageShelf(warehouseId: string, zoneId: string, 
        shlefIdAndNames: {[shelfId: string]: string}): IShelf[] {
        const result: IShelf[] = []
        for (const shelfId in shlefIdAndNames) {
            const aShelf: IShelf = {
                name: shlefIdAndNames[shelfId], 
                shelfId:shelfId,
                warehouseId, 
                zoneId, 
            }
            result.push(aShelf);
        }
        return result;
    }

