'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  it('should redirect index.html to index.html#/phones', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones');
      });
  });


  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/phones');
    });

    it('should render phone specific links', function() {
      var query = element(by.model('query'));
      query.sendKeys('nexus');
      element.all(by.css('.phones li a')).first().click();
      browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/phones/nexus-s');
      });
    });
  });


  describe('Phone detail view', function() {

    beforeEach(function() {
      browser.get('app/index.html#/phones/nexus-s');
    });


    it('should display nexus-s page', function() {
      expect(element(by.binding('phone.name')).getText()).toBe('Nexus S');
    });

    it('should display availbility', function() {
      element.all(by.css('.availability dd')).then(function(dds){
        expect(dds.length).toBe(7);
        expect(dds[0].getText()).toBe("M1,");
        expect(dds[1].getText()).toBe("O2,");
        expect(dds[2].getText()).toBe("Orange,");
        expect(dds[3].getText()).toBe("Singtel,");
        expect(dds[4].getText()).toBe("StarHub,");
        expect(dds[5].getText()).toBe("T-Mobile,");
        expect(dds[6].getText()).toBe("Vodafone");
      })
    })
  });
});
