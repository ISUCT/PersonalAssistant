import Timer from "../class/Timer";

/**
 * Класс ошибки TimerAlreadyExists
 *
 * @param {Timer} timer - таймер
 */
export default class TimerAlreadyExists extends Error {
    name: string = "TimerAlreadyExists";
    message: string = "%s already exists";
    constructor(timer: Timer) {
        super();
        this.message = this.message.replace("%s", timer.toString());
        Error.captureStackTrace(this, TimerAlreadyExists);
    }
}