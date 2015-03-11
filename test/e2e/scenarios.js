'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Test DI.', function() {

  describe('', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });

    it('Should show the first five phones from phones.json.', function() {
      element.all(by.repeater('phone in phones')).then(function(phones){
        expect(phones.length).toBe(5, 'expect 5 phones on page');
        expect(phones[0].element(by.css('span')).getText()).toBe("Motorola XOOM\u2122 with Wi-Fi", 'expect 1st phone is Motorola XOOM\u2122 with Wi-Fi');
        expect(phones[1].element(by.css('span')).getText()).toBe("MOTOROLA XOOM\u2122", 'expect 2nd phone is MOTOROLA XOOM\u2122');
        expect(phones[2].element(by.css('span')).getText()).toBe("MOTOROLA ATRIX\u2122 4G", 'expect 3rd phone is MOTOROLA ATRIX\u2122 4G');
        expect(phones[3].element(by.css('span')).getText()).toBe("Dell Streak 7", 'expect 4th phone is Dell Streak 7');
        expect(phones[4].element(by.css('span')).getText()).toBe("Samsung Gem\u2122", 'expect 5th phone is Samsung Gem\u2122');
      });
    });
  });
});
