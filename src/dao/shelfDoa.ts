import { Schema, model } from 'mongoose';
import { IShelf } from '../common/shelf'; 


const ShelfSchema = new Schema<IShelf>({
    shelfId: { type: Number, required: true},
    name: { type: String, required: true},
    zoneId: { type: Number, required: true},
    warehouseId: { type: Number, required: true}
}, { timestamps: true })

const Shelf = model("Shelf", ShelfSchema)


export async function findExistingShelf(targetShelf: IShelf) : Promise<IShelf | null> {
    return await Shelf.findOne({name: targetShelf.name, warehouseId: targetShelf.warehouseId}).exec();
}

export async function saveShelves(shelves: IShelf[]) : Promise<IShelf[] | null> {
    return await Shelf.create(shelves)
}
