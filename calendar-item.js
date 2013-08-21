CalendarItem = function(initalString){
  
  this.title = null;
  this.title_found = false;
  
  this.date = new Date()
  this.date.setHours(0,0,0);
  
  this.date_found = false;
  this.time_found = false;

  this.duration = null;
  this.duration_found = false;
  
  this.location = null;
  this.location_found = false;
  
  this.notes = null;
  this.notes_found = false;
  
  this._confidence = 0;
  this.remainingToParse = "";
  
  this._doParse = function(){
    // var loops = 0;
    // We are going to remove part of this string
    // as we go through and parse it
    // while(this.remainingToParse.length > 0 && loops < 10){
      // loops++;
      if(this.remainingToParse.length > 0){
        console.log("_doParse Parsing!", this.remainingToParse);
        this._findNumericalDate();
      }
    // }
    
    
  };

  // This is the pattern we will follow
  // try to pluck out something, in this case a numerical
  // date like mm/dd/yy[yy]
  //          or mm/yy[yy]
  this._findNumericalDate = function(){
    // default is either previously set or a new date (today)
    var defaultDate = this.date ? this.date : new Date();
                      // MM/DD/YYYY or DD/MM/YYYY
    var full_date_regex = new RegExp("^|\b([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})");    
    var match = full_date_regex.exec(this.remainingToParse);
    if(match){
      console.log("_findNumericalDate: " + match[0]);
      defaultDate = this._setDayAndMonth(match[1],match[2], defaultDate);
      defaultDate = this._setYear(match[3],defaultDate);
      this.remainingToParse = this.remainingToParse.replace(match[0],'');
      this.date = defaultDate;
      this.date_found = true;
    } else {
      // now try with just two elements
      // Assuming MM/DD or DD/MM
      var date_regex = new RegExp("^|\b([0-9]{1,2})\/([0-9]{1,2})");    
      var match = date_regex.exec(this.remainingToParse);
      if(match){
        console.log("_findNumericalDate: " + match[0]);
        defaultDate = this._setDayAndMonth(match[1],match[2], defaultDate);
        this.date_found = true;
        this.remainingToParse = this.remainingToParse.replace(match[0],'');
      }
    }
    
  };
  
  this._setDayAndMonth = function(month,day,defaultDate){
    console.log("_setDayAndMonth: ", arguments);
    
    var day_i = parseInt(day);
    var month_i = parseInt(month);
    console.log("_setDayAndMonth: day:", day_i, "month: " + month_i);
    
    if(month_i > 12){
      // Month was specified first
      defaultDate.setDate(month_i);
      defaultDate.setMonth(day_i-1);
    } else {
      // Day was specified first
      defaultDate.setDate(day_i);
      defaultDate.setMonth(month_i-1);        
    }
    console.log("_setDayAndMonth: ", defaultDate);
    
    return defaultDate;
  };
  
  this._setYear = function(year, defaultDate){
    if(year){
      var year = parseInt(year);
      if(year < 25){year+=2000}
      else if(year < 100){year+=1900}
      defaultDate.setYear(year);
    }
    return defaultDate;
  };
  
  // CONSTRUCTOR
  this.remainingToParse = initalString ? initalString : "";
  this._doParse();
};