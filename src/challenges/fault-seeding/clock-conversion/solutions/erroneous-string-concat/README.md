# Erroneous String Concat

Will erroneously perform a string concatenation when converting regular PM times.

## Breakdown

Explode the input string into hours, minutes, seconds and AM/PM parts.

~~~~js
module.exports = function clockConversion(twelveHour) {
    const twelveClock = explodeTwelveHour(twelveHour);
~~~~

Handle the special cases.

~~~~js
    if (isMidnight(twelveClock)) {
        return `00:${twelveClock.minutes}:${twelveClock.seconds}`;
    }

    if (isNoon(twelveClock)) {
        return `12:${twelveClock.minutes}:${twelveClock.seconds}`;
    }
~~~~

Handle ordinary AM times.

~~~~js
    if (twelveClock.ampm == 'AM') {
        return `${twelveClock.hours}:${twelveClock.minutes}:${twelveClock.seconds}`;
    }
~~~~

Here, JavaScript will perform a String concatenation instead of a numeric addition.

~~~~js
    return `${12 + twelveClock.hours}:${twelveClock.minutes}:${twelveClock.seconds}`;
};
~~~~

Helper functions.

~~~~js
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

~~~~

~~~~JavaScript
// returns 1201:00:00
clockConversion('01:00:00 PM');
~~~~
