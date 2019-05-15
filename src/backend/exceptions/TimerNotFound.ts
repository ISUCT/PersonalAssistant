/**
 * Класс ошибки TimerNotFound
 *
 * @param {Number} timerId - Ид таймера который искали
 */
export default class TimerNotFound extends Error {
    name: string = "TimerNotFound";
    message: string = "Timer #%d not found";
    constructor(timerId: number) {
        super();
        this.message = this.message.replace("%d", <string><unknown>timerId);
        Error.captureStackTrace(this, TimerNotFound);
    }
}