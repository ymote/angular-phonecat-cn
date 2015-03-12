**1.**  现在让我们来练习一下AngularJS内置过滤器，在 **index.html**20行开始中加入如下绑定：
```
 {{ "lower cap string" | uppercase }}
 {{ {foo: "bar", baz: 23} | json }}
 {{ 1304375948024 | date }}
 {{ 1304375948024 | date:"MM/dd/yyyy @ h:mma" }}
```

这里用了Angular内置的常用的过滤器 － 转换大小写，输出json格式和输出容易理解的日期的格式。其中```date```过滤器非常强大好用，建议读一下Angular的文档了解下。
<br>
<br>

**2.** 在**phone-detail.html**第7行用uppercase过滤器输出手机名字的大写形式。