import { Router } from "express";
import { tracking } from "../../../controllers/v1/tracking.controller"; 
const router = Router();

router.route("/track/:track_id").get(tracking);

export default router;