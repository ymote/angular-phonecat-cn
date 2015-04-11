'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));


    it('should create "phones" model with 3 phones', inject(function() {
      expect(scope.phones.length).toBe(3);
    }));


    it('should set the default value of orderProp model', function() {
      //增加expect语句来判断orderProp的值为age
      expect(scope.orderProp).toBe('age');
    });
  });
});
