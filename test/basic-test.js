// Node.js tests
var buster = require("buster");
var calendarItemLibrary = require("../calendar-item.js");

buster.testCase("Basic Functions", {
  "has title attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.title) !== "undefined")
  },
  // 
  // this.date = null;
  // this.time = null;
  // this.duration = null;
  // this.location = null;
  // this.notes = null;
  // this._confidence = 0;


  "has date attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.date) !== "undefined")
  },
  
  "has time attribute": function(){
    item = new CalendarItem();
    assert(typeof(item.time) !== "undefined")
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
  }
});