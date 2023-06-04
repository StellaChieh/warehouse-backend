import { IShelf } from "../model/shelf";
import { findExistingShelf, saveShelves } from "../dao/shelfDoa";

export interface IMessage {
  status: boolean;
  message?: string[];
}

export async function saveShelvesService(
  warehouseId: string,
  zoneId: string,
  shelfIdAndNames: { [shelfId: string]: string }
): Promise<IMessage> {
  const shelves: IShelf[] = packageShelf(warehouseId, zoneId, shelfIdAndNames);

  // find existing same (shelfName, wharehouseId) pair in database
  const { status, message } = await findDuplicateShelves(shelves);
  if (status) return { status: false, message };

  await saveShelves(shelves);
  return { status: true };
}

// find existing same (shelfName, wharehouseId) pair in database
async function findDuplicateShelves(shelves: IShelf[]): Promise<IMessage> {
  let duplicateShelvesMsg: string[] = [];
  for (let i = 0; i < shelves.length; i++) {
    const dbRecord = await findExistingShelf(shelves[i]);
    if (dbRecord) {
      duplicateShelvesMsg.push(
        "Shelf name '" +
          shelves[i].name +
          "' already exists in Zone " +
          dbRecord.zoneId +
          "."
      );
    }
  }

  if (duplicateShelvesMsg.length !== 0)
    return { status: true, message: duplicateShelvesMsg };

  return { status: false };
}

function packageShelf(
  warehouseId: string,
  zoneId: string,
  shlefIdAndNames: { [shelfId: string]: string }
): IShelf[] {
  const result: IShelf[] = [];
  for (const shelfId in shlefIdAndNames) {
    const aShelf: IShelf = {
      name: shlefIdAndNames[shelfId],
      shelfId: shelfId,
      warehouseId,
      zoneId,
    };
    result.push(aShelf);
  }
  return result;
}
