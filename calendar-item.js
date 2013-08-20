CalendarItem = function(initalString){
  
  this.title = null;
  this.date = null;
  this.time = null;
  this.duration = null;
  this.location = null;
  this.notes = null;
  this._confidence = 0;

  // // The sum of this sytem
  // this.getMass = function(){
  //   var sum = 0;
  //   for(var i = 0; i < this._masses.length; i++){
  //     sum += this._masses[i].m;
  //   }
  //   return sum;
  // };
  
  this.constructor = function(string){
    var toParse = string;
  }
};