import express, { Router } from 'express';
import * as trainControllers from '../controllers/trainControllers';

const router = express.Router();

// return all train routes
router.get("/routes", trainControllers.GET_routes)

export default router;