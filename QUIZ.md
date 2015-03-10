**1.** 在```PhoneListCtrl```控制器中，把设置```orderProp```的语句删掉，你会看到AngularJS会在下拉菜单中临时添加一个空白的选项，并且排序顺序是默认排序（即未排序）。

**2.** 重新加上设置```orderProp```为```'age'```的语句， 在```index.html```第29行添加```{{orderProp}}```绑定来实时显示它的值。