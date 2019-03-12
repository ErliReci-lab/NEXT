module Next {

    //Page functions------------------------------------------------------------------------------------------------------

    export function WaitLoad(callback) {
        window.addEventListener("load", ((e) => {
            document.body.style.margin = "0px";
            e.stopPropagation()
            callback.call()
        }), false)
    }

    //Get-----------------------------------------------------------------------------------------------------------------

    export function getId(id: string): DOMElement {
        var temp: DOMElement = new DOMElement(null, "", "", document.getElementById(id));
        return temp;
    }

    export function getClass(class_name: string): DOMElement[] {
        var arr: DOMElement[];
        var elements = document.getElementsByClassName(class_name);
        for (var i = 0; i < elements.length; i++) {
            arr.push(new DOMElement(null, "", "", elements[i] as HTMLElement));
        }
        return arr;
    }

    export function getTag(tag_name: string) {
        var arr: DOMElement[];
        var elements = document.getElementsByTagName(tag_name);
        for (var i = 0; i < elements.length; i++) {
            arr.push(new DOMElement(null, "", "", elements[i] as HTMLElement));
        }
        return arr;
    }

    //Create--------------------------------------------------------------------------------------------------------------

    export function CreateHolder(style: string = "", clean: boolean = false): DOMElement {
        var temp: DOMElement = new DOMElement(null, style, 'div');
        if (!clean) {
            temp.into_body();
        } else {
            temp.into_clean_body();
        }
        return temp;
    }

    export function CreateDiv(_parent: boolean | DOMElement = null, style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'div');
        return temp;
    }

    export function CreateLabel(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'label');
        temp.text(text);
        return temp;
    }

    export function CreateSpan(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'span');
        temp.text(text);
        return temp;
    }

    export function CreateParagraph(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'p');
        temp.text(text);
        return temp;
    }

    export function CreateH1(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'h1');
        temp.text(text);
        return temp;
    }

    export function CreateH2(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'h2');
        temp.text(text);
        return temp;
    }

    export function CreateH3(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'h3');
        temp.text(text);
        return temp;
    }

    export function CreateH4(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'h4');
        temp.text(text);
        return temp;
    }

    export function CreateH5(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'h5');
        temp.text(text);
        return temp;
    }

    export function CreateH6(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'h6');
        temp.text(text);
        return temp;
    }

    export function CreateIframe(_parent: boolean | DOMElement = null, source: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'iframe');
        temp.setAttr("src", source);
        return temp;
    }

    export function CreateImg(_parent: boolean | DOMElement = null, source: string, style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'img');
        temp.setAttr("src", source);
        return temp;
    }

    export function CreateTextBox(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'text');
        if (text != '') {
            temp.setAttr("placeholder", text);
        }
        return temp;
    }

    export function CreatePassword(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'password');
        if (text != '') {
            temp.setAttr("placeholder", text);
        }
        return temp;
    }

    export function CreateDate(_parent: boolean | DOMElement = null, style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'date');
        return temp;
    }

    export function CreateButton(_parent: boolean | DOMElement = null, text: string = "", style: string = ""): DOMElement {
        var temp: DOMElement = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'button');
        if (text != '') {
            temp.value(text);
        }
        return temp;
    }

    //Classes--------------------------------------------------------------------------------------------------------------

    export class CreateTemplate {
        private template_string: string

        constructor(template: string) {
            this.template_string = template;
        }

        build(parent: DOMElement, ...param: string[]) {
            var clone: string = this.template_string;
            for (var i = 0; i < param.length; i++) {
                clone = clone.split("{" + i.toString() + "}").join(param[i]);
            }
            var div = document.createElement('div');
            div.innerHTML = clone.trim();
            while (div.firstChild) {
                parent._actualElement.appendChild(div.firstChild);
            }
        }

        clean_build(parent: DOMElement, ...param: string[]) {
            var clone: string = this.template_string;
            for (var i = 0; i < param.length; i++) {
                clone = clone.split("{" + i.toString() + "}").join(param[i]);
            }
            var div = document.createElement('div');
            div.innerHTML = clone.trim();
            parent._actualElement.innerHTML = "";
            while (div.firstChild) {
                parent._actualElement.appendChild(div.firstChild);
            }
        }
    }

    export class CreateList {
        list: DOMElement = null;
        constructor(public _parent: DOMElement, style: string = "") {
            this.list = new DOMElement(_parent, style, "select");
        }

        addOption(text: string, value: string | number, style: string = "") {
            var option = new DOMElement(this.list, style, "option").value(value.toString());
            option.text(text);
        }

        clear() {
            this.list.clear();
        }

        onchange(callback) {
            this.list.onchange(callback);
        }

        getValue(): string {
            return this.list.getValue();
        }

        getList(): DOMElement {
            return this.list
        }
    }

    class Attributes {
        attr: string
        value: string
        constructor(attr: string, value: string) {
            this.attr = attr
            this.value = value
        }g

        getValue(): string {
            return this.value
        }

        getAttr(): string {
            return this.attr
        }
    }

    export class CreateTable {
        list = []
        dic = {}
        pos: number = 0
        _actualElement: DOMElement = null;
        _parent2: DOMElement;
        style: string;
        rows: number;
        column: number;
        constructor(public _parent: DOMElement, style?: string) {
            this._parent2 = _parent
            this.style = style
        }

        create_tabel(row: number, column: number) {
            this.rows = row;
            this.column = column;
            this._actualElement = new DOMElement(this._parent2, '', 'tabel');
            var rows = [];
            var j = 0, found = 0;
            var body = new DOMElement(this._actualElement, '', 'tbody');
            for (let i = 0; i < row; i++) {
                var row_in = new DOMElement(body, '', 'tr');
                j = 0;
                for (var c = 0; c < rows.length; c++) {
                    if (rows[c] != 0) {
                        found = 1;
                        rows[c]--;
                        j++;
                    }
                }
                if (found == 0) {
                    j = 0;
                }
                for (; j < column; j++) {
                    var cell = new DOMElement(row_in, '', 'td')
                    if (this.pos in this.dic) {
                        var a = this.dic[this.pos].getAttr();
                        var v = this.dic[this.pos].getValue();
                        cell.setAttr(a, v);
                        if (a == "rowspan") {
                            rows.push(parseInt(v) - 1);
                        } else if (a == "colspan") {
                            j += parseInt(v) - 1;
                        }
                    }
                    this.list.push(cell);
                    this.pos++;
                }
                found = 0;
            }
            if (this.style) {
                this._actualElement.addStyle(this.style);
            }
        }

        addHeader(...head: string[]) {
            for (var i = 0; i < this.column; i++) {
                this.getCell(i).text(head[i]);
            }
        }

        addRow(row_num: number, ...row: string[]) {
            for (var i = row_num; i < this.column; i++) {
                this.getCell(i).text(row[i]);
            }
        }

        clear() {
            this._actualElement.clear();
        }

        apply(num: number, attr: string, value: string) {
            this.dic[num] = new Attributes(attr, value);
        }

        getCell(num: number): DOMElement {
            return this.list[num];
        }

        getMax(): number {
            return this.list.length;
        }

        getTabel(): DOMElement {
            return this._actualElement;
        }
    }

    export class DOMElement {
        _parent: DOMElement;
        _actualElement: HTMLElement;
        posx: number = -404;
        posy: number = -404;

        constructor(input_parent: DOMElement | boolean, className: string, type: string, html_element?: HTMLElement) {
            if (typeof input_parent == "boolean") {
                if (input_parent) {
                    this.createElement(className, type);
                    document.body.appendChild(this._actualElement);
                }
            } else {
                this._parent = input_parent;
                if (html_element) {
                    this._actualElement = html_element;
                } else {
                    this.createElement(className, type);
                }
            }
        }

        createElement(className: string, type: string) {
            this._actualElement = document.createElement(type);
            if (className != '') {
                this.addStyle(className);
            }
            if (this._parent) {
                this._parent._actualElement.appendChild(this._actualElement);
            }
        }

        append(item: DOMElement) {
            this._actualElement.appendChild(item._actualElement);
        }

        into_clean_body() {
            document.getElementsByTagName('BODY')[0].innerHTML = '';
            document.body.appendChild(this._actualElement);
        }

        into_body() {
            document.body.appendChild(this._actualElement);
        }

        return_me(): HTMLElement {
            return this._actualElement;
        }

        position() {
            console.log(this._actualElement.offsetTop.toString());
        }

        addKeyframe(action: string, id: string, name?: string) {
            var animation_name: string = "animation_" + id;
            if (name) {
                animation_name = name;
            }
            var style = document.createElement('style');
            style.setAttribute("id", id);
            style.type = 'text/css';
            var keyFrames = " @keyframes " + animation_name + " { " + action + "}";
            keyFrames += " @-webkit-keyframes " + animation_name + " { " + action + "}";
            style.innerHTML = keyFrames;
            if (document.getElementById(id) != null) {
                document.getElementById(id).innerHTML = keyFrames;
            } else {
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        }

        addStyle(StyleName: string) {
            var e = this._actualElement
            if (!e.classList.contains(StyleName)) {
                e.classList.add(StyleName);
            }
        }

        hasStyle(stylename: string): boolean {
            var e = this._actualElement
            if (e.classList.contains(stylename))
                return true;
            return false;
        }

        setAttr(attr: string, value: string) {
            var old = this._actualElement.getAttribute(attr);
            if (old == null) {
                this._actualElement.setAttribute(attr, value);
            } else {
                this._actualElement.setAttribute(attr, old + value);
            }
        }

        bg_color(color: string) {
            this.setAttr("style", "background-color:" + color + ";");
        }

        color(color: string) {
            this.setAttr("style", "color:" + color + ";");
        }

        bold() {
            this.setAttr("style", "font-weight: bold;");
        }

        italic() {
            this.setAttr("style", "font-style: italic;");
        }

        width(value: string) {
            this.setAttr("style", "width:" + value + ";");
        }

        height(value: string) {
            this.setAttr("style", "height:" + value + ";");
        }

        center() {
            this.setAttr("style", "text-align: center;");
        }

        left() {
            this.setAttr("style", "text-align: leftt;");
        }

        right() {
            this.setAttr("style", "text-align: right;");
        }

        setAttrFun(attr: string, fun: any) {
            this._actualElement.setAttribute(attr, fun);
        }

        removeStyle(StyleName: string) {
            var e = this._actualElement
            if (e.classList.contains(StyleName)) {
                e.classList.remove(StyleName);
            }
        }

        getID(str: string): HTMLElement {
            return document.getElementById(str);
        }

        getValue(): string {
            return (<HTMLInputElement>this._actualElement).value;
        }

        text(str: string): DOMElement {
            this._actualElement.textContent = str;
            return this
        }

        value(str: string): DOMElement {
            this.setAttr('value', str);
            return this
        }

        clear_text() {
            (<HTMLInputElement>this._actualElement).value = "";
        }

        clear() {
            this._actualElement.innerHTML = "";
        }

        /** Funksione per te shkuar ne fund */
        scroll_down() {
            this._actualElement.scrollTo(0, this._actualElement.scrollHeight);
        }

        /** Funksione per te shkuar ne fillim */
        scroll_top() {
            this._actualElement.scrollTo(0, 0);
        }

        /** Funksione kthen pozicionin */
        scrollPos(): number {
            return (<HTMLDivElement>this._actualElement).scrollTop;
        }

        /** Funksion nese user ben scroll*/
        scroll(callback) {
            this._actualElement.addEventListener("scroll", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        /** Funksion nese shtyp butonin dy here*/
        dbclick(callback) {
            this._actualElement.addEventListener("dblclick", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        /** Funksion nese shtyp butonin nje buton tastiere*/
        keypress(key, callback) {
            this._actualElement.addEventListener("keypress", ((e) => {
                e.stopPropagation();
                if (e.keyCode == key) {
                    callback.call();
                }
            }), false)
        }

        keydown(callback) {
            this._actualElement.addEventListener("keydown", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        keyup(callback) {
            this._actualElement.addEventListener("keyup", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        mouseout(callback) {
            this._actualElement.addEventListener("mouseout", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        mouseover(callback) {
            this._actualElement.addEventListener("mouseover", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        mousemove(callback) {
            this._actualElement.addEventListener("mousemove", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        mouseenter(callback) {
            this._actualElement.addEventListener("mouseenter", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        mousedown(callback) {
            this._actualElement.addEventListener("mousedown", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        mouseup(callback) {
            this._actualElement.addEventListener("mouseup", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        wheel(callback) {
            this._actualElement.addEventListener("wheel", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        mouseleave(callback) {
            this._actualElement.addEventListener("mouseleave", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        click(callback) {
            this._actualElement.addEventListener("click", ((e) => {
                e.stopPropagation();
                this.posx = e.offsetX;
                this.posy = e.offsetY;
                callback.call();
            }), false)
        }

        onchange(callback) {
            this._actualElement.addEventListener("change", ((e) => {
                e.stopPropagation();
                callback.call();
            }), false)
        }

        /** Funkson qe ndryshon gjendjen e pamjes*/
        toggle_vis() {
            if (this._actualElement.style.display == "block") {
                this._actualElement.style.display = "none";
            } else {
                this._actualElement.style.display = "block";
            }
        }

        removeclick(callback) {
            this._actualElement.removeEventListener("click", callback, true)
        }

        setID(emri: string) {
            this._actualElement.setAttribute('id', emri)
        }

        show() {
            this._actualElement.style.display = "block";
        }

        hide() {
            this._actualElement.style.display = "none";
        }

        removeit() {
            this._parent._actualElement.removeChild(this._actualElement)
        }

        disable() {
            this._actualElement.setAttribute("disabled", "disabled");
        }

        active() {
            if (this._actualElement.hasAttribute("disabled")) {
                this._actualElement.removeAttribute("disabled");
            }
        }

        getPosX(): number {
            return this.posx;
        }

        getPosY(): number {
            return this.posy;
        }

    }

}