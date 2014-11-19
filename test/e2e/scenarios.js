'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  describe('Phone detail view', function() {

    var ptor = protractor.getInstance();

    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });

    it('should display nexus-s page', function() {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });

    it('should show hello message when click the button', function(){
      var query = element(by.model('name'));

      query.clear();
      query.sendKeys('you should see your input message here');

      element(by.css('.hello-btn')).click();
      ptor.switchTo().alert().then(function(alertDialog){
        expect(alertDialog.getText()).toEqual('Hello you should see your input message here!');
      },function(err){
        console.log("Expected to open an alert box when click the button");
      });

    });

  });
});