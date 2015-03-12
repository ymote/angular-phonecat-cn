让我们在```PhoneDetailCtrl```第28行开始添加一个新的控制器方法```$scope.back```，当触发这个方法时会返回之前显示所有设备的页面,
这里可以使用```$location.path```方法来回到之前页面。关于它的使用方法可以参考官方文档。

同时在```phone-detail.html```第4行的按钮上把新创建的$scope.back方法绑定到ng-click上，使得点击按钮就会触发这个方法。