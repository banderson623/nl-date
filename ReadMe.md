# Simple Calendar Item Parsing Library

    "Meet with the Soccer Board Thursday 14th at 5:30pm at Gilbert Elementary School"
    "Soccer Board meeting 8/15 5:30pm Gilbert Elementary School"
    "Discuss soccer goals next tuesday in Campfire"

    item = new CalendarItem(string);

    item.subject
    item.date
    item.time
    item.location
    item.duration
    item.notes
    item._confidence

## Installing

`npm install`

http://stackoverflow.com/questions/4871932/using-npm-to-install-or-update-required-packages-just-like-bundler-for-rubygems
    
## Running the Tests

`node_modules/buster/bin/buster-test`