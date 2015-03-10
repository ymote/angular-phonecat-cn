1. 为index.html添加另一个数据绑定：

  ```<p>Total number of phones: {{phones.length}}</p>```

2. 在```PhoneListCtrl```创建一个新的数据模型属性，并且把它绑定到模板上:
 
 ```$scope.hello = 'Hello, World!'```
 
  在页面上输出该属性 Hello, World!