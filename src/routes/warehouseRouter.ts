import express from 'express';
import { WarehouseController } from '../controllers/warehouseController';

const warehouseController = new WarehouseController()

export const warehouseRouter = express.Router();
warehouseRouter.post('/warehouse', warehouseController.createWarehouse)
