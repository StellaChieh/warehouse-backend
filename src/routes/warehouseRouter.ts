import express from 'express';
// import { WarehouseController } from '../controllers/warehouseController';
import { createWarehouse } from '../controllers/warehouseController';

export const warehouseRouter = express.Router();
warehouseRouter.post('/warehouse', createWarehouse)
