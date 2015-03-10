'use strict';

describe('Test ng-repeat', function() {

  describe('', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should show numbers from 0 to 7 in a table', function() {
      element.all(by.css('table tr')).then(function(trs){
        expect(trs.length).toBe(9, 'The table should have 9 rows in total. header + 8 numbers');
        if(trs.length === 9){
          expect(trs[1].element(by.css('td')).getText()).toBe('0', 'first number should be 0');
          expect(trs[5].element(by.css('td')).getText()).toBe('4', '5th number should be 4');
          expect(trs[8].element(by.css('td')).getText()).toBe('7', 'last number should be 7');
        }
      });
    });

  });

});