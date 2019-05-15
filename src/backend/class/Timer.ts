/**
 * Класс таймера
 * 
 * @param {Number} timerId - Ид таймера
 * @param {Number} startTimestamp - время начала
 * @param {Number} duration - длительность таймера
 * @param {Number} pausedUntil - таймстамп до которого запаузен таймер, дополнительно
 *                                     -1: не на паузе
 *                                      0: на паузе до снятия
 * @param {String} task - задача (комментарий) для таймера
 */
export default class Timer {
    timerId: number;
    startTimestamp: number;
    duration: number;
    pausedUntil: number;
    task: string;

    constructor(timerId: number, startTimestamp: number, duration: number, pausedUntil: number, task: string) {
        this.timerId = timerId;
        this.startTimestamp = startTimestamp;
        this.duration = duration;
        this.pausedUntil = pausedUntil;
    }

    timeRemains(): number {
        return this.startTimestamp + this.duration - Math.round(Date.now() / 1000);
    }

    isExpired(): boolean {
        return this.startTimestamp + this.duration < Math.round(Date.now() / 1000);
    }
    isPaused(): boolean {
        return !(this.pausedUntil == -1);
    }

    toString(): string {
        return `Timer#${this.timerId} startTimestamp: ${this.startTimestamp} duration: ${this.duration} pausedUntil: ${this.pausedUntil} task "${this.task}"`;
    }
    toJSON(): object {
        return {
            timerId: this.timerId,
            startTimestamp: this.startTimestamp,
            duration: this.duration,
            pausedUntil: this.pausedUntil,
            task: this.task
        }
    }
}

