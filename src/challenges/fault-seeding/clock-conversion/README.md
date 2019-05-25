## Task

Your task is to create a module which exposes a single function capable of converting from the 12-hour clock format to the 24-hour clock format.

Example conversions:

  * 12:00:00 AM (midnight) - 00:00:00
  * 12:00:01 AM - 00:00:01
  * 01:00:00 AM - 01:00:00
  * 12:00:00 PM (noon) - 12:00:00
  * 12:00:01 PM - 12:00:01
  * 01:00:00 PM - 13:00:00
  * 02:00:00 PM - 14:00:00

## Signature

The function should have the following signature:

~~~~JavaScript
function clockConversion(twelveHour: string): string
~~~~

## Behaviour

The function should have the following characteristics:

  * input can be expected to be in the appropriate format (see below),
  * the function converts the received 12-hour clock time string to a 24-hour clock time string.

## Input Format

  * `twelveHour`
    * Can be a string of any of the following formats:
      * `hh:mm:ss AM`
      * `hh:mm:ss PM`
    * where
      * `hh` - hours, between 01 and 12 (inclusive),
      * `mm` - minutes, between 01 and 59 (inclusive),
      * `ss` - seconds, between 00 and 59 (inclusive).

## Output Format

The returned string should be in 24-hour clock format:

  * `hh:mm:ss`, where
    * `hh` - hours, between 00 and 23 (inclusive),
    * `mm` - minutes, between 01 and 59 (inclusive),
    * `ss` - seconds, between 00 and 59 (inclusive).
  
## Examples

~~~~JavaScript
// returns 00:00:00
clockConversion('12:00:00 AM')

// returns '17:27:01'
clockConversion('05:27:01 PM')
~~~~
