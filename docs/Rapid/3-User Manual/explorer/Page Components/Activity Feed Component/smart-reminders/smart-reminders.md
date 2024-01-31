# Smart Reminders

<<<<<<< Updated upstream
=======
This is a guide for keywords that are relevant for smart reminders.
- [Smart Reminders Guide](#smart-reminders-guide)
    - [Detectors](#bkmrk-detectors)
    - [Good Date Parts](#bkmrk-good-date-parts)
        - [Numbers](#bkmrk-numbers)
        - [Time intervals](#bkmrk-time-intervals)
        - [Dates](#bkmrk-dates)
        - [Words](#bkmrk-words)
        - [Examples](#bkmrk-examples)
    - [Bad Date Parts](#bkmrk-bad-date-parts)
        - [Numbers](#numbers-1)
        - [Time intervals](#time-intervals-1)
        - [Words](#words-1)
    - [Good Time Parts](#bkmrk-good-time-parts)
        - [Times](#bkmrk-times)
        - [Named Times](#bkmrk-named-times)
        - [Examples](#examples-1)
    - [Bad Time Parts](#bkmrk-bad-time-parts)
        - [Times](#times-1)
        - [Names Times](#bkmrk-names-times)

>>>>>>> Stashed changes
When adding smart reminders there are a large number of cases it can pick up. This guide provides a breakdown on what is known to be understood by the system and an outline of the limitations that are known to not be understood.

Smart reminders are created out of sentences but need to follow a fairly defined structure.

**Detector** *Date* ***Time***

Smart reminders support multiple reminders within the one note, thus the following note will generate two reminders.

“Phoned Paul and **touched base** about the progress of the payment *yesterday*. Need to **chase up** the bank about payment this *tomorrow* at ***4pm***”

Reminders created (today is 24/1/19)

1. “touched base about the progress of the payment” 23/1/19 12:00 AM
2. “chase up the bank about payment” 24/1/19 4:00 PM

## Detectors

There are 5 detector sentence fragments that will start a reminder

- Remind me
- Follow up
- Chase up
- Check on
- Touch base

## Good Date Parts

These parts are known to function correctly

### Numbers

- one
- two
- three
- four
- five
- six
- seven
- eight
- nine
- ten
- eleven
- twelve
- 1 through to 999

### Time intervals

- minute(s)
- hour(s)
- day(s)
- week(s)
- month(s)
- year(s)

### Dates

- 5/11
- 5/11/19
- 5/11/2019
- 2019/11/5
- 5-11-19
- 5-11-2019
- 2019-11-5
- 5th of Nov
- 5th of November

### Words

- Next
- Last
- Now
- Noon
- Tonight
- Today
- This morning
- This afternoon

### Examples

Remind me to do something tomorrow Remind me to do something last week Remind me to do something on the 5th of Nov Remind me to do something Next Month

## Bad Date Parts

These parts are known to not be understood by the system

### Numbers

- thirteen
- twenty two

### Time intervals

- fortnight
- on the 5th

### Words

- Previous
- Upcoming
- Later
- Lunchtime

## Good Time Parts

Time parts can take the following forms and be understood by the system

### Times

- 2:00 PM
- 14:00
- 2pm
- At 2

### Named Times

- Morning
- Noon
- Afternoon
- Evening
- Midnight

### Examples

Remind me to do something at 2:00 PM Remind me to do something on the 5th of Nov at 2 Remind me to do something this Morning Remind me to do something 5/11/19 Evening

(Note : “Remind me to do something 5/11/19 in the Evening“ will not be recognized)

## Bad Time Parts

These time parts will not be understood by the system

### Times

- Two o’clock
- At two

### Names Times

- Night
- Late
- Early