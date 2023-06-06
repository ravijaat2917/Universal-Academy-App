import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome To Universal Academy API');
})


export default router;