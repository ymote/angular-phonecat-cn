'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Test PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser.get('app/index.html');
    });


    it('should filter the phone list as user types into the search box', function() {

      var phoneList = element.all(by.repeater('phone in phones'));
      var query = element(by.model('query'));

      //When search box is empty, there should be 3 phones.
      expect(phoneList.count()).toBe(3);

      query.sendKeys('nexus');
      //When user type in nexus, there should be 1 phone.
      expect(phoneList.count()).toBe(1);

      query.clear();
      query.sendKeys('motorola');
      //When user type in motorola, there should be 2 phones.
      expect(phoneList.count()).toBe(2);
    });


    it('should display the current filter value within an element with id "status"',
      function() {
      //find the input with ng-model=query
      var query = element(by.model('query'));

      expect('查询id为status的HTML元素的内容')
        .toMatch(/Current filter:\s*$/);

      //清空query的值并输入nexus


      expect('查询id为status的HTML元素的内容')
        .toMatch(/Current filter: nexus\s*$/);
    });
  });
});
