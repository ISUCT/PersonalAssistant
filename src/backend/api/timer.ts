import { Router, Request, Response } from 'express';

import Database from '../helpers/database';
import Timer from '../class/Timer';

import TimerNotFound from '../exceptions/TimerNotFound';
import TimerAlreadyExists from '../exceptions/TimerAlreadyExists';

let router: Router = Router();
let database: Database = new Database();

router.post('/', function (req: Request, res: Response) {
    try {
        let startTimestamp: number = req.body.startTimestamp;
        let duration: number = req.body.duration;
        let pausedUntil: number = req.body.pausedUntil;
        let task: string = req.body.task;

        let timer: Timer = database.createTimer(startTimestamp, duration, pausedUntil, task);
        res.status(201).json(timer.toJSON());
    } catch (error) {
        if (error instanceof TimerAlreadyExists) {
            res.status(409).json({
                error: {
                    message: error.message
                }
            });
        } else if (error instanceof TypeError) {
            res.status(400).json({
                error: {
                    message: "Bad arguments",
                    arguments: req.body
                }
            });
        } else {
            console.error(error);
            res.status(500).json({
                error: {
                    message: "Server error"
                }
            });
        }
    }
});

router.get('/:id', function (req: Request, res: Response) {
    try {
        let timerId: number = req.params.id;
        let timer: Timer = database.getTimerById(timerId);
        res.status(200).json(timer.toJSON());
    } catch (error) {
        if (error instanceof TimerNotFound) {
            res.status(404).json({
                error: {
                    message: error.message
                }
            });
        } else if (error instanceof TypeError) {
            res.status(400).json({
                error: {
                    message: "Bad arguments",
                    arguments: {
                        id: req.params.id
                    }
                }
            });
        } else {
            console.error(error);
            res.status(500).json({
                error: {
                    message: "Server error"
                }
            });
        }
    }
});
router.get('/', function (req: Request, res: Response) {
    try {
        let timer: Timer[] = database.getTimers();
        res.status(200).json(timer.map(t => t.toJSON()));
    } catch (error) {
        if (error instanceof TimerNotFound) {
            res.status(404).json({
                error: {
                    message: error.message
                }
            });
        } else {
            console.error(error);
            res.status(500).json({
                error: {
                    message: "Server error"
                }
            });
        }
    }
});

router.put('/:id', function (req: Request, res: Response) {
    try {
        let timerId: number = req.params.timerId;
        let startTimestamp: number = req.body.startTimestamp;
        let duration: number = req.body.duration;
        let pausedUntil: number = req.body.pausedUntil;
        let task: string = req.body.task;

        let timer: Timer = database.updateTimer(timerId, startTimestamp, duration, pausedUntil, task);
        res.status(200).json(timer.toJSON());
    } catch (error) {
        if (error instanceof TimerAlreadyExists) {
            res.status(404).json({
                error: {
                    message: error.message
                }
            });
        } else if (error instanceof TypeError) {
            res.status(400).json({
                error: {
                    message: "Bad arguments",
                    arguments: req.body
                }
            });
        } else {
            console.error(error);
            res.status(500).json({
                error: {
                    message: "Server error"
                }
            });
        }
    }
});


router.patch('/:id/start', function (req: Request, res: Response) {
    try {
        let timerId: number = req.params.id;

        let timer: Timer = database.startTimerById(timerId);
        res.status(200).json(timer.toJSON());
    } catch (error) {
        if (error instanceof TimerNotFound) {
            res.status(404).json({
                error: {
                    message: error.message
                }
            });
        } else if (error instanceof TypeError) {
            res.status(400).json({
                error: {
                    message: "Bad arguments",
                    arguments: {
                        id: req.params.id
                    }
                }
            });
        } else {
            console.error(error);
            res.status(500).json({
                error: {
                    message: "Server error"
                }
            });
        }
    }
});
router.patch('/:id/pause', function (req: Request, res: Response) {
    try {
        let timerId: number = req.params.id;
        let pausedUntil: number = req.body.pausedUntil;

        let timer: Timer = database.pauseTimerById(timerId, pausedUntil);
        res.status(200).json(timer.toJSON());
    } catch (error) {
        if (error instanceof TimerNotFound) {
            res.status(404).json({
                error: {
                    message: error.message
                }
            });
        } else if (error instanceof TypeError) {
            res.status(400).json({
                error: {
                    message: "Bad arguments",
                    arguments: {
                        id: req.params.id,
                        pausedUntil: req.body.pausedUntil
                    }
                }
            });
        } else {
            console.error(error);
            res.status(500).json({
                error: {
                    message: "Server error"
                }
            });
        }
    }
});


router.delete('/:id', function (req: Request, res: Response) {
    try {
        let timerId: number = req.params.id;

        let timer: Timer = database.deleteTimerById(timerId);
        res.status(200).json(timer.toJSON());
    } catch (error) {
        if (error instanceof TimerNotFound) {
            res.status(404).json({
                error: {
                    message: error.message
                }
            });
        } else if (error instanceof TypeError) {
            res.status(400).json({
                error: {
                    message: "Bad arguments",
                    arguments: {
                        id: req.params.id
                    }
                }
            });
        } else {
            console.error(error);
            res.status(500).json({
                error: {
                    message: "Server error"
                }
            });
        }
    }
});


export { router };