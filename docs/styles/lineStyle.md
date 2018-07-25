## 线条

### 虚线

图形的`setLineDash`方法可以用来设置虚线条，它接受一个数组对象，按照数组的顺序，轮流绘制线条的实部、虚部。

```javascript
var line = new Line(100, 100, 300, 100);
line.setLineDash([5, 10]);
line.stroke();
```




