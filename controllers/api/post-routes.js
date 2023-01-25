const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
  const postData = await Post.findAll().catch((err) => {
    res.json(err);
  });
  res.json(postData);
})

router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
