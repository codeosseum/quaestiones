module.exports = function clockConversion(twelveHour) {
    const twelveClock = explodeTwelveHour(twelveHour);

    if (isMidnight(twelveClock)) {
        return `00:${twelveClock.minutes}:${twelveClock.seconds}`;
    }

    if (isNoon(twelveClock)) {
        return `12:${twelveClock.minutes}:${twelveClock.seconds}`;
    }

    if (twelveClock.ampm == 'AM') {
        return `${twelveClock.hours}:${twelveClock.minutes}:${twelveClock.seconds}`;
    }

    return `${12 + twelveClock.hours}:${twelveClock.minutes}:${twelveClock.seconds}`;
};

function explodeTwelveHour(twelveHour) {
    const [time, ampm] = twelveHour.split(' ');
    const [hours, minutes, seconds] = time.split(':');
    
    return {
        hours,
        minutes,
        seconds,
        ampm
    };
};

function isMidnight({ hours, ampm }) {
    return hours == '12' && ampm == 'AM';
};

function isNoon({ hours, ampm }) {
    return hours == '12' && ampm == 'PM';
};
