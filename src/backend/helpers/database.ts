/**
 * Здесь должно быть подключение к базе и выполнение запросов
 */
// TODO: реализовать работу с базой

import Timer from '../class/Timer';

import TimerNotFound from '../exceptions/TimerNotFound';
import TimerAlreadyExists from '../exceptions/TimerAlreadyExists';

/**
 * Класс для работы с базой из апи
 */
export default class Database {    
    /**
     * Записывает в базу новый таймер и возвращает его объект
     * 
     * @param {Number} startTimestamp - время начала
     * @param {Number} duration - длительность таймера
     * @param {Number} pausedUntil - таймстамп до которого запаузен таймер, дополнительно
     *                                     -1: не на паузе
     *                                      0: на паузе до снятия
     * @param {String} task - задача (комментарий) для таймера
     * @throws {TimerAlreadyExists} - если таймер уже существует
     */
    createTimer(startTimestamp: number, duration: number, pausedUntil: number, task: string): Timer {
        let timer = new Timer(0, startTimestamp, duration, pausedUntil, task);
        throw new TimerAlreadyExists(timer);
    }

    /**
     * Ищет в базе таймер и возвращает его, выкидывает ошибку иначе
     * 
     * @param {Number} timerId - ид таймера для поиска
     * @throws {TimerNotFound} - если таймер не найден
     */
    getTimerById(timerId: number): Timer {
        // достаём данные из базы и запихиваем их в объект Timer
        throw new TimerNotFound(timerId);
    }
    /**
     * Возвращает все таймеры из базы
     */
    getTimers(): Timer[] {
        return new Array<Timer>();
    }

    /**
     * Обновляет таймер в базе
     *
     * @param {Number} timerId - Ид таймера
     * @param {Number} startTimestamp - время начала
     * @param {Number} duration - длительность таймера
     * @param {Number} pausedUntil - таймстамп до которого запаузен таймер, дополнительно
     *                                     -1: не на паузе
     *                                      0: на паузе до снятия
     * @param {String} task - задача (комментарий) для таймера
     * @throws {TimerNotFound} - если таймер не найден
     */
    updateTimer(timerId: number, startTimestamp: number, duration: number, pausedUntil: number, task: string): Timer {
        throw new TimerNotFound(timerId);
    }


    /**
     * Ищет в базе таймер и стартует его
     *
     * @param {Number} timerId - ид таймера для поиска
     * @throws {TimerNotFound} - если таймер не найден
     */
    startTimerById(timerId: number): Timer {
        // sql like "UPDATE timers SET pausedUntil = -1 WHERE timerId = $2" i guess
        throw new TimerNotFound(timerId);
    }
    /**
     * Ищет в базе таймер и паузит его
     *
     * @param {Number} timerId - ид таймера для поиска
     * @param {Number} pausedUntil - пауза до
     * @throws {TimerNotFound} - если таймер не найден
     */
    pauseTimerById(timerId: number, pausedUntil: number): Timer {
        // sql like "UPDATE timers SET pausedUntil = $1 WHERE timerId = $2" i guess
        throw new TimerNotFound(timerId);
    }

    /**
     * Улаляет таймер из базы
     *
     * @param {Number} timerId - Ид таймера
     * @throws {TimerNotFound} - если таймер не найден
     */
    deleteTimerById(timerId: number): Timer {
        throw new TimerNotFound(timerId);
    }
}