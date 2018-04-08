"use strict";

module.exports = function() {
  
  return function(callback) {
    console.log("Hello");
    callback();
  };
  
};