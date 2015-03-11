这个练习我们使用AngularJS一个内置服务```$http```来获取手机记录数据集。我们将使用AngularJS的依赖注入（dependency injection (DI)）功能来为PhoneListCtrl控制器提供$http服务。

项目当中```app/phones/phones.json```文件是一个数据集，它以JSON格式存储了一张更大的手机列表。

我们在控制器中使用AngularJS服务```$http```向Web服务器发起一个HTTP请求，以此从```app/phones/phones.json```文件中获取数据。```$http```仅仅是AngularJS众多内建服务中之一，这些服务可以处理一些Web应用的通用操作。
AngularJS能将这些服务注入到任何你需要它们的地方。

服务是通过AngularJS的依赖注入DI子系统来管理的。依赖注入服务可以使你的Web应用良好构建（比如分离表现层、数据和控制三者的部件）并且松耦合（一个部件自己不需要解决部件之间的依赖问题，它们都被DI子系统所处理）。

```$http```向Web服务器发起一个HTTP GET请求，索取```phone/phones.json```（注意，url是相对于我们的index.html文件的）。服务器用json文件中的数据作为响应

$http服务用success返回。当异步响应到达时，用这个对象应答函数来处理服务器响应的数据，并且把数据赋值给作用域的phones数据模型。注意到AngularJS会自动检测到这个json应答，并且已经为我们解析出来了！

为了使用AngularJS的服务，你只需要在控制器的构造函数里面作为参数声明出所需服务的名字，就像这样：```function PhoneListCtrl($scope, $http) {...}```。