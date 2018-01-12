/**
 * Controllers file
 */
import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render("words/index", {
    words: getWords()
  });
});

function getWords() {
  return [
    {
      name: "Lorem",
      description: "Lorem ipsum"
    }
  ];
}

export default router;
