import express from 'express';
import { WarehouseController } from '../controllers/warehouseController';

let warehouseController = new WarehouseController()
export const warehouseRouter = express.Router();
warehouseRouter.get('/warehouse', warehouseController.createWarehouse)