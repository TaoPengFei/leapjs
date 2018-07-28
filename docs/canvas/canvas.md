# 画布

canvas是H5的一个模块，用于绘制图像。

## 属性

### 宽度 width

返回画布的宽度



### 高度 height

返回或者设置画布的高度



绘制背景时，我们

## 方法

### 清理画布

canvas.clear()

### 显示画布坐标轴

canvas.showAxis()

resize(width, height)

```javascript
canvas.width = width || 450 // borders size
canvas.height = height || 600 // p, height
ctx.fillStyle = ctx.strokeStyle = 'orange';
  
// 设置文字默认对齐方式：顶部对齐
ctx.textBaseline = 'top'

// 设置默认阴影
ctx.shadowBlur = 5;
ctx.shadowOffsetX = 2;
ctx.shadowOffsetY = 2;
ctx.shadowOpen = true;
```



### 阴影效果

canvas.shadow(open=true)

设置是否开启阴影，默认为开启，通过设置为false来关闭默认的阴影效果。

```javascript
canvas.shadow(false)
```



形变 transform

canvas.transform = new Transform()

canvas.scale (x, y)

canvas.rotate (degree) 



### 平移

canvas._translate (x, y)


