import exp from 'constants';
import express, { Router, Request, Response } from 'express';

const router: Router = express.Router();

router.get('/:id', (req: Request, res: Response) => {

    const userId: number = parseInt(req.params.id);

    res.send(`User${userId}`);
});

export default router;