/***************************************************************

font(fontName)

设置字体

* 字体名称：fontName

常见字体：
Windows
    黑体：SimHei
    宋体：SimSun
    新宋体：NSimSun
    仿宋：FangSong
    楷体：KaiTi
    仿宋GB2312：FangSongGB2312
    楷体GB2312：KaiTiGB2312
    微软雅黑：Microsoft YaHei
 
Mac Os
    冬青黑体: Hiragino Sans GB （SNOW LEOPARD开始提供）
    华文细黑：STHeiti Light （又名STXihei）
    华文黑体：STHeiti
    华文楷体：STKaiti
    华文宋体：STSong
    华文仿宋：STFangsong

Microsoft 
    隶书：LiSu
    幼圆：YouYuan
    华文细黑：STXihei
    华文楷体：STKaiti
    华文宋体：STSong
    华文中宋：STZhongsong
    华文仿宋：STFangsong
    方正舒体：FZShuTi
    方正姚体：FZYaoti
    华文彩云：STCaiyun
    华文琥珀：STHupo
    华文隶书：STLiti
    华文行楷：STXingkai
    华文新魏：STXinwei

等宽字体：
* Consolas


***************************************************************/
canvas.showAxis();

font('Arial');
text("Hello World!", 50, 50);

font('Consolas');
text("Hello World!", 50, 100, 30);

font('STCaiyun');
text("你好，人类", 50, 150, 40, 'red');
text("Hello World!", 50, 200, 30);