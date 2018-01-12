/**
 * Controllers file
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render("home/index", { name: "Lorem ipsum" });
});

export default router;
