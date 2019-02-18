<h1><a id="Next_0"></a>Next</h1>
<p>This is still a work in progress NEXT enables users to create a website in addiferent way.</p>
<table class="table table-striped table-bordered">
<thead>
<tr>
<th>Elements</th>
<th>What does it represent</th>
</tr>
</thead>
<tbody>
<tr>
<td>parent</td>
<td>Element that is create by with the Next library</td>
</tr>
<tr>
<td>style</td>
<td>css class name</td>
</tr>
<tr>
<td>element?</td>
<td>this parameter can be left empty</td>
</tr>
<tr>
<td>action_animation</td>
<td>the css code for the animation you want</td>
</tr>
</tbody>
</table>
<h1><a id="Examples_10"></a>Examples</h1>
<p>-To wait for page to load<br>
Next.WaitLoad(function () {<br>
//Some code here<br>
});</p>
<p>-To get an element by id<br>
let obj = Next.getId(“id”);</p>
<p>-To get elements by class<br>
let obj = Next.getClass(“class”);</p>
<p>-To get elemnts by tag<br>
let obj = Next.getTag(“tag”);</p>
<p>-To create a holder(a div that will act as our body)<br>
let obj = Next.CreateHolder(style, (true if you want to delete every domElement in the website|false if you want to keep the exsiting domElements)?);</p>
<p>-To create a div<br>
let obj = Next.CreateDiv(parent, style?);</p>
<p>-To create a label<br>
let obj = Next.CreateLabel(parent, “text”?, style?);</p>
<p>-To create a lspan<br>
let obj = Next.CreateSpan(parent, “text”?, style?);</p>
<p>-To create a aragraph<br>
let obj = Next.CreateParagraph(parent, “text”?, style?);</p>
<p>-To create a header<br>
let obj = Next.CreateH1(parent, “text”?, style?);<br>
…<br>
let obj = Next.CreateH6(parent, “text”?, style?);</p>
<p>-To create a iframe<br>
let obj = Next.CreateIframe(parent, source, style?);</p>
<p>-To create a image<br>
let obj = Next.CreateImg(parent, source, style?);</p>
<p>-To create a textbox<br>
let obj = Next.CreateTextBox(parent, “deafult text”?, style?);</p>
<p>-To create a password<br>
let obj = Next.CreatePassword(parent, “deafult text”?, style?);</p>
<p>-To create a date<br>
let obj = Next.CreateDate(parent, style?);</p>
<p>-To create a button<br>
let obj = Next.CreateButton(parent, “deafult text”?, style?);</p>
<p>-To create a template<br>
let template = new Next.CreateTemplate(“html code (dynamic values ex:{0}…{n})”);<br>
template.build(parent, [string values from 0…n]);<br>
template.clean_build(parent, [string values from 0…n]); (delete everythng in th page and insert this)</p>
<p>-To create a list<br>
let list = new Next.CreateList(parent,style?);<br>
list.addOption(text, value);<br>
list.clear(); (clear list from all option)<br>
list.addOption(text, value);<br>
list.addOption(text, value);<br>
list.onchange(function (){<br>
//do something<br>
});<br>
list.getValue(); (get value of select item)<br>
list.getList(); (get all options)</p>
<p>-To create a table (imagine the table like a gird every cell is in order from left to right start from 0)</p>
<blockquote>
<p>Table with 3 columns and 2 rows<br>
0 - 1 -2<br>
3 - 4 -5<br>
let table = new Next.CreateTable(parent, style?);<br>
table.apply(cell_number, attrubte, value); (this is used for every cell that you want to fuse)<br>
table.create_tabel(rows, columns);<br>
table.addHeader(“First headder”…&quot;n-th header)l<br>
table.clear(); (deletes everything)</p>
</blockquote>
<p>-Every function that the Next Library has for every elemnt build by it<br>
obj.append(Next_elemnt);<br>
obj.into_clean_body(); (obj is inserted directly to the body of the page and everything else is deleted)<br>
obj.into_body(); (obj is inserted directly to the body of the page)<br>
obj.return.return_me(); (returns this object)<br>
obj.addKeyframe(action_animation, id, name);<br>
obj.addStyle(style);<br>
obj.hasStyle(style);<br>
obj.setAttr(attr, value);<br>
obj.bg_color(color);<br>
obj.color(color);<br>
obj.bold();<br>
obj.italic();<br>
obj.width(value);<br>
obj.height(value);<br>
obj.center();<br>
obj.left();<br>
obj.right();<br>
obj.removeStyle(style);<br>
obj.getID(“text”);<br>
obj.getValue();<br>
obj.text(“text”);<br>
obj.value(“text”);<br>
obj.clear_text();<br>
obj.clear();<br>
obj.scroll_down();<br>
obj.scroll_top();<br>
obj.scroll(function () { });<br>
obj.dbclick(function () { });<br>
obj.keypress(key, function () { });<br>
obj.keydown(function () { });<br>
obj.keyup(function () { });<br>
obj.mouseout(function () { });<br>
obj.mouseover(function () { });<br>
obj.mousemove(function () { });<br>
obj.mouseenter(function () { });<br>
obj.mousedown(function () { });<br>
obj.mouseup(function () { });<br>
obj.wheel(function () { });<br>
obj.mouseleave(function () { });<br>
objclick(function () { });<br>
obj.onchange(function () { });<br>
obj.removeclick();<br>
obj.setID(“id”);<br>
obj.show();<br>
obj.hide();<br>
obj.removeit();<br>
obj.disable();<br>
obj.active();</p>
