//eventSystemDecorator.js
// create functional expression with the parameter target...
var addEventSystem = function(target) {
    //add an object to the target called reactionsTo
    target.reactionsTo = {};
    //create a method on target which has an event and a callback as its parameter
    target.on = function(e, cb) {
        //store the reactions to the passed in event in an array on the reactionsTo 
        //object saved for the target or if no previous reactions have been stored 
        //set it to a blank array. this refers to the target.
        this.reactionsTo[e] = this.reactionsTo[e] || [];
        //push the reactions to the event callback into the array at the key in the reactionsTo object
        this.reactionsTo[e].push(cb);
    };
    //create a method on target which triggers on an event parameter...
    target.trigger = function(e) {
        //for each element in the array stored in the reactionsTo[e] array
        _.each(this.reactionsTo[e], function(cb) {
            //run the callback function
            cb();
        });
    };
};