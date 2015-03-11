1. 修改**controllers.js**第10行，使得$scope.phones只绑定手机列表中的前5个元素。

2.  在**index.html**第41行输出```{{phones | json}}```的绑定，观察json格式的手机列表。```json```也是Angular的过滤器之一，会把数据转换为json格式。