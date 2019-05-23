module.exports = function clockConversion(twelveHour) {
    const twelveClock = explodeTwelveHour(twelveHour);

    if (twelveClock.ampm == 'AM') {
        return `${twelveClock.hours}:${twelveClock.minutes}:${twelveClock.seconds}`;
    }

    return `${12 + Number.parseInt(twelveClock.hours)}:${twelveClock.minutes}:${twelveClock.seconds}`;
};

function explodeTwelveHour(twelveHour) {
    const [time, ampm] = twelveHour.split(' ')
    const [hours, minutes, seconds] = time.split(':')
    
    return {
        hours,
        minutes,
        seconds,
        ampm
    }
};
