'use strict';

describe('ng-repeat filter', function() {

  describe('index page', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('should show numbers 0 to 7 in a table', function() {
      element.all(by.css('table tr')).then(function(trs){
        expect(trs.length).toBe(9);
        if(trs.length === 9){
          expect(trs[1].element(by.css('td')).getText()).toBe('0');
          expect(trs[2].element(by.css('td')).getText()).toBe('1');
          expect(trs[3].element(by.css('td')).getText()).toBe('2');
          expect(trs[4].element(by.css('td')).getText()).toBe('3');
          expect(trs[5].element(by.css('td')).getText()).toBe('4');
          expect(trs[6].element(by.css('td')).getText()).toBe('5');
          expect(trs[7].element(by.css('td')).getText()).toBe('6');
          expect(trs[8].element(by.css('td')).getText()).toBe('7');
        }
      });
    });

  });

});