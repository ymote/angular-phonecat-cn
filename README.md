为了创建一个新的过滤器，先创建一个```phonecatFilters```模块，并且将定制的过滤器注册给这个模块。代码在**filters.js**文件中。

我们的过滤器命名为```checkmark```。它的输入要么是true，要么是false，并且我们返回两个表示true或false的unicode字符（```\u2713```和```\u2718```）。

现在我们的过滤器准备好了，我们需要将我们的```phonecatFilters```模块作为一个依赖注册到我们的主模块```phonecat```上。这在**app.js**第8行上完成。

 **index.html模板**

由于我们的模板代码写在**app/js/filter.js**文件中，所以我们需要在index.html中引入这个文件(第15行)。

在AngularJS模板中使用过滤器的语法是：

```{{ expression | filter }}```

我们把过滤器应用到手机详细信息模板中**phone-detail.html**：在所有输出true或false的地方我们都加上了过滤器来显示定制的符号。

过滤器是全局的，即我们可以在任何页面上引用```checkmark```来修饰输出true或false的地方，而以后我们如果想改用其他的显示方式，只要修改过滤器的内容，
所有引用该过滤器的页面都会自动的更新。这种用法是不是很方便？