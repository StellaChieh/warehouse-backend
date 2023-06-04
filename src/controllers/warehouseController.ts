import { Request, Response } from "express";
import { saveShelvesService } from "../service/warehouseService";

export async function createWarehouseZone(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const warehouseId: string = req.body.warehouseId;
    const zoneId: string = req.body.zoneId;
    const shelfIdAndNames: {} = req.body.shelfNames;
    const { status, message } = await saveShelvesService(
      warehouseId,
      zoneId,
      shelfIdAndNames
    );
    if (status) {
      return res.status(200).send({ msg: "OK!" });
    } else {
      return res.status(400).send({ msg: message });
    }
  } catch (err: unknown) {
    console.log(err);
    return res.status(500).send({ msg: "Internal error." });
  }
}
