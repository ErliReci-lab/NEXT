# Welcome to NEXT!

Hi! Next is a library that allows developers to create a website in a different way. Next will work for every java-script users and for type-script users too. Next is still in development, if you have a suggestion we encourage you to tell us. 
*THANK YOU!!!!!!!!!*


## Legend
| Elements | What does it represent |
|--|--|
| parent | Element that is create by with the Next library |
| style| css class name |
| element? | this parameter can be left empty |
| action_animation | the css code for the animation you want |


## Instructions

 - To wait for page to load 
>Next.WaitLoad(function () {  
//Some code here  
});

- To get an element by id  
>let obj = Next.getId(“id”);
>
- To get elements by class  
>let obj = Next.getClass(“class”);

- To get elemnts by tag  
>let obj = Next.getTag(“tag”);

- To create a holder(a div that will act as our body)  
>let obj = Next.CreateHolder(style, (true if you want to delete every domElement in the website|false if you want to keep the exsiting domElements)?);

- To create a div  
>let obj = Next.CreateDiv(parent, style?);

- To create a label  
>let obj = Next.CreateLabel(parent, “text”?, style?);

- To create a lspan  
>let obj = Next.CreateSpan(parent, “text”?, style?);

- To create a aragraph  
>let obj = Next.CreateParagraph(parent, “text”?, style?);

- To create a header  
>let obj = Next.CreateH1(parent, “text”?, style?);  
…  
let obj = Next.CreateH6(parent, “text”?, style?);

- To create a iframe  
>let obj = Next.CreateIframe(parent, source, style?);

- To create a image  
>let obj = Next.CreateImg(parent, source, style?);

- To create a textbox  
>let obj = Next.CreateTextBox(parent, “deafult text”?, style?);

- To create a password  
>let obj = Next.CreatePassword(parent, “deafult text”?, style?);

- To create a date  
>let obj = Next.CreateDate(parent, style?);

- To create a button  
>let obj = Next.CreateButton(parent, “deafult text”?, style?);

- To create a template  
>let template = new Next.CreateTemplate(“html code (dynamic values ex:{0}…{n})”);  
template.build(parent, [string values from 0…n]);  
template.clean_build(parent, [string values from 0…n]); (delete everythng in th page and insert this)

- To create a list  
>let list = new Next.CreateList(parent,style?);  
list.addOption(text, value);  
list.clear(); (clear list from all option)  
list.addOption(text, value);  
list.addOption(text, value);  
list.onchange(function (){  
//do something  
});  
list.getValue(); (get value of select item)  
list.getList(); (get all options)

- To create a table (imagine the table like a gird every cell is in order from left to right start from 0)


> Table with 3 columns and 2 rows  
> 0 - 1 -2  
> 3 - 4 -5  
> let table = new Next.CreateTable(parent, style?);  
> table.apply(cell_number, attrubte, value); (this is used for every cell that you want to fuse)  
> table.create_tabel(rows, columns);  
> table.addHeader(“First headder”…"n-th header)l  
> table.clear(); (deletes everything)

- Every function that the Next Library has for every elemnt build by it  
>obj.append(Next_elemnt);  
obj.into_clean_body(); (obj is inserted directly to the body of the page and everything else is deleted)  
obj.into_body(); (obj is inserted directly to the body of the page)  
obj.return.return_me(); (returns this object)  
obj.addKeyframe(action_animation, id, name);  
obj.addStyle(style);  
obj.hasStyle(style);  
obj.setAttr(attr, value);  
obj.bg_color(color);  
obj.color(color);  
obj.bold();  
obj.italic();  
obj.width(value);  
obj.height(value);  
obj.center();  
obj.left();  
obj.right();  
obj.removeStyle(style);  
obj.getID(“text”);  
obj.getValue();  
obj.text(“text”);  
obj.value(“text”);  
obj.clear_text();  
obj.clear();  
obj.scroll_down();  
obj.scroll_top();  
obj.scroll(function () { });  
obj.dbclick(function () { });  
obj.keypress(key, function () { });  
obj.keydown(function () { });  
obj.keyup(function () { });  
obj.mouseout(function () { });  
obj.mouseover(function () { });  
obj.mousemove(function () { });  
obj.mouseenter(function () { });  
obj.mousedown(function () { });  
obj.mouseup(function () { });  
obj.wheel(function () { });  
obj.mouseleave(function () { });  
objclick(function () { });  
obj.onchange(function () { });  
obj.removeclick();  
obj.setID(“id”);  
obj.show();  
obj.hide();  
obj.removeit();  
obj.disable();  
obj.active();
