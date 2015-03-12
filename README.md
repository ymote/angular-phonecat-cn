看一下**controllers.js**

第19行：在```PhoneDetailCtrl```控制器中，我们创建了```mainImageUrl```模型属性，并且把它的默认值设为第一个手机图片的URL。

第23行：我们创建了```setImage```事件处理函数来把mainImageUrl属性设置成传入的```imageUrl```参数。

现在看一下**phone-detail.html**页面上的实现方法：

第1行：这里的```<img>```标签是大图显示的图片，我们在控制器中已经设置默认显示第一张缩略图。

第14行：我们注册了一个```ng-click```方法，当点击缩略图时，会触发控制器中的```setImage```方法，并把当前的图像的url作为参数传入。
这里的```img```是```ng-repeat```中的循环变量，对比一下**nexus-s.json**，就知道它的内容就是图像的链接地址。

setImage方法会更新```mainImageUrl```的内容，而页面上则会自动更新成新的图像，是不是很方便？