// Node.js tests
var buster = require("buster");
var calendarItemLibrary = require("../calendar-item.js");

buster.testCase("Basic Functions", {
  "has title attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.title) !== "undefined")
  },

  "has date attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.date) !== "undefined")
  },
    
  "has duration attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.duration) !== "undefined")
  },

  "has location attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.location) !== "undefined")
  },

  "has notes attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.notes) !== "undefined")
  },
  
  "has title_found attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.title_found) !== "undefined")
    assert.equals(item.title_found,false);
  },

  "has date_found attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.date_found) !== "undefined")
  },
  
  "has time_found attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.time_found) !== "undefined")
  },
    
  "has duration_found attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.duration_found) !== "undefined")
  },

  "has location_found attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.location_found) !== "undefined")
  },

  "has notes_found attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.notes_found) !== "undefined")
  }
});


buster.testCase("Date Functions", {
  "can not find number dates": function(){
    var item;
    item = new CalendarItem("play soccer 12223/1233/2013");
    assert(!item.date_found);
    
    item = new CalendarItem("play soccer 123");
    assert(!item.date_found);

    item = new CalendarItem("play soccer ");
    assert(!item.date_found);
  },
  
  "can find number dates": function(){
    item = new CalendarItem("play soccer 9/15/2013");
    assert(item.date_found);
    assert.match(item.date,new Date("9/15/2013"));
  },
  
  "can find number dates with out year": function(){
    item = new CalendarItem("play soccer 9/15");
    assert(item.date_found);
    assert.match(item.date,new Date("9/15/2013"));
  },
  
  "can find number dates without year month first": function(){
    item = new CalendarItem("play soccer 15/9");
    assert(item.date_found);
    assert.match(item.date,new Date("9/15/2013"));
  },
  
  "can find number dates month first": function(){
    item = new CalendarItem("play soccer 15/9/2013");
    assert(item.date_found);
    assert.match(item.date,new Date("9/15/2013"));
  }
  
  
  
  // "can find wordy dates": function(){
  //   item = new CalendarItem("play soccer at 3pm on September 15th");
  //   assert(item.date_found);
  //   assert.equals(item.date,new Date("9/15/2013"));
  // }
});