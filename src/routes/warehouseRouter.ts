import express from 'express';
import { createWarehouseZone } from '../controllers/warehouseController';

export const warehouseRouter = express.Router();
warehouseRouter.post('/warehouseZone', createWarehouseZone)
