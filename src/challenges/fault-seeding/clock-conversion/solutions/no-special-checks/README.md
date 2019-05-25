## No Special Checks

Does not handle noon and midnight right.

## Breakdown

Explode the input string into hours, minutes, seconds and AM/PM parts.

~~~~js
module.exports = function clockConversion(twelveHour) {
    const twelveClock = explodeTwelveHour(twelveHour);
~~~~

Handle ordinary AM times.

~~~~js
    if (twelveClock.ampm == 'AM') {
        return `${twelveClock.hours}:${twelveClock.minutes}:${twelveClock.seconds}`;
    }
~~~~

Handle ordinary PM times.

~~~~js
    return `${12 + Number.parseInt(twelveClock.hours)}:${twelveClock.minutes}:${twelveClock.seconds}`;
};
~~~~

And that was it, the solution did not care about noon and midnight that need special attention.

Helper function.

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
~~~~

