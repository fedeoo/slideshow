# Layout & Size Calculation
[@fedeoo](https://blog.fedeoo.cn)

---

### In this lecture:

* Something you should know
* Box model
* Visual Formating Model
* Containing block
* Positioning
* box dimensions

---

## Somthing you should know

----

### Value process

`specified` → computed → used → actual

----

### Value process

* specified value  
  `winning Cascaded Values` || inherit || iniital
<!-- .element: class="fragment" data-fragment-index="2" -->

* computed value   
  `simply` transfer from parent. e.g., em, ex, bolder, etc.
<!-- .element: class="fragment" data-fragment-index="3" -->

* used value   
  calculations. e.g., `width:auto`, etc.
<!-- .element: class="fragment" data-fragment-index="4" -->

* actual value    
  UA adjustment. e.g., border-width, font-size, etc.
<!-- .element: class="fragment" data-fragment-index="5" -->

----

### Value process

See [Examples](https://www.w3.org/TR/css3-cascade/#stages-examples)

---

### Box model

![box model](./imgs/boxdim.png)

---

## Containing blocks

box positions and sizes

----

### css property table

![prop table](./imgs/propidx.png)

----

<style>
.example.border-style {
    border: solid pink;
    border-left: double;
    color: aqua;
}
</style>
<div class="example border-style">
  <pre><code>
    .border-style {
      border: solid pink;
      border-left: double;
      color: aqua;
    }
  </code></pre>
</div>

---

## Visual Formating Model

----

### Block-level elements and block boxes

* Block-level boxes (Block Formating Context)
* block container box
* Anonymous block boxes

----

<style>
.example#outer {
  border: solid red;
  background: lightblue;
}
</style>
<div>
  <span id='outer' class="example">
      行内文本
      <p>块级元素P</p>
      紧跟着的行内文本内容
      <span>height</span>
  </span>
  <pre><code>
    <span id='outer'>
        行内文本
        <p>块级元素P</p>
        紧跟着的行内文本内容
        <span>height</span>
    </span>
  </code></pre>
</div>

----

### Inline-level elements and inline boxes

*  inline box (Inline Formating Context)
* atomic inline-level boxes   
  inline-block
* Anonymous inline boxes
  <pre><code>some text <span>inline</span> more text</code></pre>

----

### BFC

#### establish new BFC

  * absolutely positioned elements(float fixed absolute)
  * block containers(inline-block table-cell table-caption)
  * overflow:not visiable

----

* Box垂直方向布局 紧邻的块级盒 垂直margin会合并
* 每个盒的左外边缘和包含块的左边缘对齐，即使存在浮动 由于浮动的存在，line box宽度会收缩

----

<style>
.example#eg3-first{
	float: left;
	width: 100px;
  height: 160px;
	background: #019fde;
}
.example#eg3-second{
	height:300px;
	background:#ff1244;
}
</style>
<div style="text-align:left">
文本在前又如何？<div id="eg3-first" class="example">I'm float</div>
<div style="width:120px;height:40px;background:green;">normal</div>
<div id="eg3-second" class="example"> 虽然内容是从这儿开始，但是该盒的左边缘依然与包含块的左边缘对齐。该盒中的line box宽度确实收缩</div>
</div>
<pre><code>
<div>
文本在前又如何？<div id="first" class="example">I'm float</div>
<div style="width:120px;height:40px;background:green;">normal</div>
<div id="second"> 虽然内容是从这儿开始，但是该盒的左边缘依然与包含块的左边缘对齐。该盒中的line box宽度确实收缩</div>
</div>
</code></pre>

---

## Positioning

----

### collapsing margins

* 普通流中在同一块格式化上下文(BFC)中的两个块级盒的外边距
* 没有行盒，没有间隙，没有内边距和没有边框将两外边距隔开
* max(正) + min(负)

----

<style>
#eg4-first {
    background: aqua;
    margin-bottom: 20px;
}
#eg4-second {
    background: pink;
    margin-top: 30px;
}
#eg4-sub {
    margin-top: 10px;
    background: #8cc540;
}
#eg4-float {
    float: left;
    width: 200px;
    height: 15px;
    background: lightyellow;
}
#eg4-thd {
    min-height: 0px;
    margin-top: 10px;
    margin-bottom: 20px;
    background: yellow;
}
</style>

<div id="eg4-first"><pre><code>#first {
    background:aqua;
    margin-bottom:20px;
}</code></pre></div>
<div id="eg4-second">
    <div id='eg4-float'>float</div>
    <div id='eg4-sub'><pre><code>
#sub {
    margin-top:10px;
    background:#8cc540;
}</code></pre></div>
    <div id="eg4-thd"></div>
    <pre><code>#second {
    background:pink;
    margin-top:30px;
}</code></pre>
</div>

See [detail](http://jsfiddle.net/fedeoo/c6Am9/)

----

### float clear && clearance

![clearance](./imgs/clearance.png)

1. 不考虑clear时 按照间距重叠 C1 = max(M1, M2)  
2. 考虑间隙的出现，放到浮动元素底部 C2 = M1 + H 
3. 取MAX(C1, C2)

----

<style>
div#eg41-b1 {
    width: 400px;
    height: 130px;
    margin-bottom: 40px;
    background-color: aqua;
}
div#eg41-f1 {
    float: left;
    width: 300px;
    height: 200px;
    margin: 0px;
    background: pink;
}
div#eg41-b2 {
    margin-top: 70px;
    width: 700px;
    height: 150px;
    background-color: aqua;
    clear: both;
}
</style>
<div>
    <div id='eg41-b1'>
  <pre><code>
  #B1{
    margin-bottom: 40px;
}</code></pre></div>
    <div id='eg41-f1'><pre><code>#float{
    float: left;
    height: 120px;
}</code></pre></div>
    <div id='eg41-b2'><pre><code>#B2{
    margin-top: 70px;
    clear: both;
}</code></pre></div>
</div>

See [detail](http://fiddle.jshell.net/fedeoo/6rzw6s6x/)

---

## box dimensions

----

### Calculating widths and margins

* Inline, non-replaced elements

* Inline, replaced elements (img)

* 块级替换元素 (width与行内替换元素相同规则，margin的取值也遵循上面规则)

----

### Block-level, non-replaced elements in normal flow

 <small>'margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right' = width of containing block</small>

1. width不为auto，左侧大于右侧，margin的auto值视为0
 2. 根据包含块的direction 值为ltr，忽略margin-right；rtl 忽视 margin-left 
3. width为auto 其余auto取0值， 如果margin-left margin-right都是auto，它们的使用值相等。
4. 行内元素、浮动元素、inline-block  margin计算值为auto，使用值取0

----

<style>
.example#eg51-container {
    width: 800px;
    height: 420px;
    border: 1px solid;
}
.example#eg51-first {
    background: lightblue;
    width: 420px;
    height:200px;
    margin:0 60px;
}
.example#eg51-second {
    margin: 0 auto;
    width: 420px;
    padding: 0 20px;
    background: pink;
}
</style>
<div id='eg51-container' class="example">
    <div id='eg51-first' class="example">过度约束<pre><code>#first {
    width: 420px;
    height:200px;
    margin:0 60px;
}</code></pre></div>
    <div id='eg51-second' class="example"><pre><code>#second {
    margin: 0 auto;
    width: 420px;
    padding: 0 20px;
}</code></pre></div>
</div>

See [detail](http://jsfiddle.net/Gn3Db/2/)

----

### Absolutely positioned, non-replaced elements

<small>‘left’ + 'margin-left' + 'border-left-width' + 'padding-left' + 'width' + 'padding-right' + 'border-right-width' + 'margin-right' + 'right' = width of containing block</small>

1. 如果left、right、width都为auto，先设margin中auto值为0，再根据 direction 设置 left 或 right 为 static position。
2. 三个值都不为auto，计算margin
3. 否则，设置margin中auto值为0；只有一个auto值，根据等式计算；如果width和其中一个为auto，width取shrink-to-fit值，计算另一个。

----

### max-width min-width

 1. 先按正常计算； 
2. 如果计算的width>max-width;width取max-width重新计算 
3. 如果计算的width<min-width;width取min-width重新计算

----

### 高度计算

1. 行内非替换元素 内容高度依赖字体，line box高度根据line-height
2. 替换元素 margin auto 使用值取 0
3. 块级非替换元素，正常流 overflow:visible margin auto 使用值取 0 如果高度是auto，高度取决于是否有块级子元素是否有padding和border 高度等于top content edge到 1.最后一个line box的底边(如果它建了一个IFC)[demo] 2.流内最后一个子元素的底边距（可能是匿名块盒）

----

### 高度计算

 <small>'top' + 'margin-top' + 'border-top-width' + 'padding-top' + 'height' + 'padding-bottom' + 'border-bottom-width' + 'margin-bottom' + 'bottom' = height of containing block</small>

1. 如果'top', 'height', and ‘bottom’都为auto,设top为static位置值，用下面的规则2
2. 如果都不为auto，margin值为auto, 添加上下margin相等约束计算margin
否则
1. 如果height不为auto，top和bottom为auto，设top为static位置值
2. height和top或bottom为auto，先根据BFC块计算height规则求height,再计算另一值
3. 如果只有一个为auto,根据等式计算
margin中auto值为0，计算等式

----

<style>
div#eg52-container {
    position: relative;
    width: 600px;
    height: 400px;
    border: 2px solid aqua;
}
div#eg52-center {
    position: absolute;
    width: 400px;
    height: 240px;
    background-color: pink;
    top: 0px;
    bottom: 0px;
    margin: auto;
}
</style>
<div id="eg52-container">
    <div id="eg52-center"><pre><code>#center {
    position: absolute;
    height: 240px;
    background-color: pink;
    top: 0px;
    bottom: 0px;
    margin: auto;
}</code></pre></div>    
</div>

See [detail](http://fiddle.jshell.net/fedeoo/fhqf2ogd/)

----

<small>块级非替换；overflow值为非visible；inline-block非替换元素；浮动；非替换元素</small>
<small>如果 'margin-top', or 'margin-bottom' 值为 'auto', used value 使用 0。</small>

BFC高度计算规则 

1. 如果只包含行内元素：高度为最顶的line box 到最低的line box、
2. 如果包含块级元素：最顶块级盒的上边距边缘到最底块级盒的
3. 忽视absolute元素，相对定位不考虑偏移

另外，如果浮动底边距边缘低于它的低边缘，增加高度使得包含float; 只有处于该BFC的float才会被考虑在内，如在absolute中的float不会被考虑。

----

### BFC & float collapse

<style>
.example#eg53-container {
    position: relative;
    width: 600px;
    border: 2px solid aqua;
    //overflow:hidden;
    //float:left;
    //display:inline-block;
}
.example#eg53-normal {
    height: 120px;
    width: 200px;
    background-color: pink;
}
.example#eg53-float {
    float: left;
    width: 600px;
    background-color: lightyellow;
}
.example#eg53-absolute {
    display: none;
    position: absolute;
}
.example#eg53-inner-float {
    float: left;
    width: 20px;
    height: 120px;
    background-color: lightgreen;
}
</style>

<div>
<div class="example" id="eg53-container">
    <div class="example" id="eg53-normal"></div>
    <div class="example" id="eg53-float"><pre><code>#float {
    float: left;
    width: 150px;
    background-color: lightyellow;
}</code></pre></div>  
    <div class="example" id="eg53-absolute">
        <div class="example" id="eg53-inner-float"></div>
    </div>  
</div>
</div>

See [detail](http://fiddle.jshell.net/fedeoo/f1gajgba/)

----

### max-height min-height

1. 先按上述规则计算
2. 如果大于max,取max值重新计算
3. 如果小于min,取min重新计算

----

### line-height计算

1. 对行内级元素，line-height说明行盒的最小高度
2. line box高度 替换元素、inline-block是盒的height 行内盒是line-height
3. 行内级盒在垂直方向上按照vertical-align属性对齐
4. line-height 16px font-size 12px上下会加2px空白 

----

<style>
.example#eg55-container {
  background-color:#CCCC99;
  line-height:1.5;
  text-align: left;
  //font-size: 0px;
}
.example#eg55-container > img {
  margin: 0;
}
</style>
<div id='eg55-container' class="example">
    <img src="http://ww3.sinaimg.cn/thumb180/6429912cgw1ebq2ow5jfgj20be0bejs4.jpg"/>
    <span>下面没对齐的感觉。 </span>
</div>

See [detail](http://fiddle.jshell.net/fedeoo/e7Z8g/)

---

## Further Reading

* [writing-css](http://justineo.github.io/slideshows/writing-css)
* [w3c css 2.1](https://www.w3.org/TR/CSS21/)

---

## Q ? A : Thanks
