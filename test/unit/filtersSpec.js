'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {

  beforeEach(module('phonecatFilters'));


  describe('checkmark', function() {

    it('should convert boolean values to unicode checkmark or cross',
        inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      //加上对false的判断，符号的内容可以从filters.js中获得

    }));
  });
});
