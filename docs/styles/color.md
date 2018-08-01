## 颜色

### 颜色常量

`fillStyle`与`stokeStyle`可以设置为表示颜色的字符串常量，从而可以直接设置图形的颜色。

一些常见的颜色的常量有aqua、black、blue、fuchsia、gray、green、lime、maroon、navy、olive、purple、red、silver、teal、white、yellow。

在JS中，颜色常量用一个字符串来表示，所以表示`绿色`要用字符串`"green"`来表示。颜色常量字符串不区分大小写，`"Green"`、`"green"`和`"GREEN"`都是合理的颜色字符串常量，不过为了规范起见，我们建议大家全部使用小写。

**实例：绘制一个红色的矩形**

```javascript
rectangle(10, 10, 200, 100, "red");
```

这里，函数rectangle中最后一个参数即表示颜色常量。一般情况下，如有这个颜色常量JS不支持，那么等同于使用了黑色效果。如果你在使用的过程中发现图形变为黑色了，那么很有可能是单词拼写错误导致的。

![style1](../images/style1.png)

更多参考资料：

http://www.w3school.com.cn/tags/html_ref_colornames.asp

### RGB值

如果用放大镜看显示器的屏幕，会发现屏幕的每个点都是由3个颜色组成，分别是

* Red, 红色
* Green，绿色
* Blue，蓝色

而这3个颜色的首字母组合，即RGB，这也是RGB值的由来。在RGB值的组成中，每一个数字分布代表了每个颜色的强弱，0代表关闭，255代表最高。

有了这3个基本的颜色，按照亮度的不同，就以组成各种个样的颜色。



RGB(red, green, blue);

颜色RGB表示法
* red: 红色的值，从0~255，数值越大，红色值越高

* green: 绿色的值，从0~255，数值越大，绿色值越高

* blue: 蓝色的值，从0~255，数值越大，蓝色值越高

  

### RGBA值

RGBA值是RGB的扩充，在使用颜色时可以直接制定该颜色的Alpha值。

```javascript
rect.fillStyle = "rgba(255, 255, 0, 0,5)";
```

前三位对应的是RGB值，第四位即透明度值



RGBA(red, green, blue, alpha);

颜色RGBA表示法
* red: 红色的值，从0~255，数值越大，红色值越高
* green: 绿色的值，从0~255，数值越大，绿色值越高
* blue: 蓝色的值，从0~255，数值越大，蓝色值越高
* alpha: 透明度，从0~1，0为全透明
* 

### HSL

```javascript
HSL(360, 1.00, 1.00)
```



![](../images/hsl.png)

#### HSL和RGB的换算

HSL和RGB都是用于处理颜色，他们之间可以相互进行换算。

### HSLA

即HSL添加透明度Alpha
