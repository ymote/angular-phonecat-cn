1. 在**index.html**第24行将```query```的值用双向绑定```{{}}```显示出来并替换掉注释的内容。

2. 将query的值显示在页面的标题上。

 你或许认为在title标签上加上一个绑定就行 ```<title>Google Phone Gallery: {{query}}</title>```

 但是，当你重载页面的时候，没得到期望的结果。这是因为query模型仅仅在body元素定义的作用域内才有效。```<body ng-controller="PhoneListCtrl">```

  一个解决方案是使用ngBind或者ngBindTemplate指令

 ``` <title ng-bind-template="Google Phone Gallery: {{query}}"></title>```
