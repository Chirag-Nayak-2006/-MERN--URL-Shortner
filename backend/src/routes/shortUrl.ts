import express from "express";

// importing the functions that we created in controllers
import {
  createUrl,
  getAllUrl,
  getUrl,
  deleteUrl,
} from "../controllers/shortUrl";

// creating a mini express object (like 'app' in our main server.ts)
// this can handles http requests
const router = express.Router();

// a post req from /shortUrl url will call the createUrl function
router.post("/shortUrl", createUrl);
router.get("/shortUrl", getAllUrl);
// :id means a placeholder, the value entered there will be stored in req.params.id
// req.params is a expressjs object
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/:id", deleteUrl);

export default router;
