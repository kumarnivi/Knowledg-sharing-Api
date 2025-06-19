import { doubt as _doubt, user } from "../models";

export async function addDoubt(req, res) {
  try {
    const doubt = await _doubt.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.user.id,
    });
    res.json(doubt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getMyDoubts(req, res) {
  try {
    const doubts = await _doubt.findAll({ where: { userId: req.user.id } });
    res.json(doubts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAllDoubts(req, res) {
  try {
    const doubts = await _doubt.findAll({ include: user });
    res.json(doubts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
