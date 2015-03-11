由于我们的控制器也含有了许多依赖服务，所以控制器构造测试就开始复杂了。我们需要使用new操作并且提供给构造器包括$http的一些伪实现。我们详细解释**controllersSpec.js**的内容：

第10行： 我们使用```inject```方法将```$rootScope```，```$controller```和```$httpBackend```服务实例注入到Jasmine的```beforeEach```函数里。这些实例都来自一个注入器，
但是这个注入器在每一个测试内部都会被重新创建。这样保证了每一个测试都从一个周知的起始点开始，并且每一个测试都和其他测试相互独立。

第11行： 将请求服务```$httpBackend```注入到我们的```beforeEach```函数中。这是这个服务的一个伪版本，这样做在产品环境中有助于处理所有的XHR和JSONP请求。服务的伪版本允许你不用连接后台数据库就可以写测试。

第12行：  使用```$httpBackend.expectGET```方法来告诉```$httpBackend```服务来等待一个HTTP请求，并且告诉它如何对其进行响应。注意到，当我们调用```$httpBackend.flush```方法之前，响应是不会被发出的。
响应的数据为```respond```里的数组。

第15行：调用```$rootScope.$new()```来为我们的控制器创建一个新的作用域。

第16行：  ```PhoneListCtrl```函数和刚创建的作用域作为参数，传递给已注入的```$controller```函数。

第21行：在我们没有调用```$httpBackend.flush```之前，相当于HTTP请求还没有返回，这时```scope.phones```应该还没有数据。

第22行：我们调用```$httpBackend.flush()```来清空（flush）请求队列。这样会使得$http服务返回的promise（什么是promise请参见[这里](http://stackoverflow.com/questions/11004273/what-is-stdpromise)）
能够被解释成规范的应答。相当于我们把事先创建的模拟数据返回给了控制器并付给了$scope.phones。

第24行： 验证手机数据模型已经在作用域里了。

第30行：验证orderProp的默认值被正确设置

可以看到单元测试后台服务器的请求是比较复杂的。好在大部分的服务器请求大同小异，可以用这个例子做类比来构建相关的单元测试。