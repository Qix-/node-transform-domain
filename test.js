'use strict';
// jshint mocha:true
// jshint maxparams:7

require('should');

var transformDomain = require('./');
function _(value, expected, lb, ub, tlb, tub, fail) {
  var itmsg = value + ' -> ' + expected + ' (' + lb + '..' + ub + ' -> ' +
              tlb + '..' + tub + ')' + (fail ? ' (fail)' : '');
  it(itmsg, function() {
    var val = transformDomain(value, lb, ub, tlb, tub);
    (fail ? val.should.not : val.should).equal(expected);
  });
}

_(1, 2, 0, 1, 0, 2);
_(0.5, 1, 0, 1, 0, 2);
_(1, 2, 3, 4, 5, 6, true);
_(-10, 5, -20, 0, 0 , 10);
_(-3, 18, 0, -9, 0, 54);
