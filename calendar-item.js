CalendarItem = function(initalString){
  
  this.title = null;
  this.title_found = false;
  
  this.date = null;
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

  this.constructor = function(string){
    var remainingToParse = string;
    this._doParse();
  };


  this._doParse = function(){
    // var loops = 0;
    // We are going to remove part of this string
    // as we go through and parse it
    // while(this.remainingToParse.length > 0 && loops < 10){
      // loops++;
      console.log("Parsing!");
      this._findNumericalDate();
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
    var date_regex = new RegExp("([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{2,4})");    
    var match = date_regex.exec(this.remainingToParse);
    if(match){
      defaultDate = self._setDayAndMonth(match[1],match[2], defaultDate);
      defaultDate = self._setYear(match[3],defaultDate);
      this.remainingToParse = this.remainingToParse.replace(match[0],'');
      this.date = defaultDate;
      this.date_found = true;
    } else {
      // now try with just two elements
      // Assuming MM/DD or DD/MM
      var date_regex = new RegExp("([0-9]{1,2})\/([0-9]{1,2})");    
      var match = date_regex.exec(this.remainingToParse);
      if(match){
        defaultDate = self._setDayAndMonth(match[1],match[2], defaultDate);
        this.remainingToParse = this.remainingToParse.replace(match[0],'');
      }
    }
    
  };
  
  this._setDayAndMonth = function(day,month,defaultDate){
    var day_or_month = parseInt(day);
    var month_or_day = parseInt(month);
    if(day_or_month > 12){
      // Month was specified first
      defaultDate.setDate(day_or_month);
      defaultDate.setMonth(month_or_day);
    } else {
      // Day was specified first
      defaultDate.setDate(month_or_day);
      defaultDate.setMonth(day_or_month);        
    }
    return defaultDate;
  };
  
  this._setYear = function(year, defaultDate){
    if(year){
      var year = parseInt(match[2]);
      if(year < 25){year+=2000}
      else if(year < 100){year+=1900}
      defaultDate.setYear(year);
    }
    return defaultDate;
  }
};