var Next;
(function (Next) {
    //Page functions------------------------------------------------------------------------------------------------------
    function WaitLoad(callback) {
        window.addEventListener("load", (function (e) {
            document.body.style.margin = "0px";
            e.stopPropagation();
            callback.call();
        }), false);
    }

    Next.WaitLoad = WaitLoad;

    //Get-----------------------------------------------------------------------------------------------------------------
    function getId(id) {
        var temp = new DOMElement(null, "", "", document.getElementById(id));
        return temp;
    }

    Next.getId = getId;

    function getClass(class_name) {
        var arr;
        var elements = document.getElementsByClassName(class_name);
        for (var i = 0; i < elements.length; i++) {
            arr.push(new DOMElement(null, "", "", elements[i]));
        }
        return arr;
    }

    Next.getClass = getClass;

    function getTag(tag_name) {
        var arr;
        var elements = document.getElementsByTagName(tag_name);
        for (var i = 0; i < elements.length; i++) {
            arr.push(new DOMElement(null, "", "", elements[i]));
        }
        return arr;
    }

    Next.getTag = getTag;

    //Create--------------------------------------------------------------------------------------------------------------
    function CreateHolder(style, clean) {
        if (style === void 0) {
            style = "";
        }
        if (clean === void 0) {
            clean = false;
        }
        var temp = new DOMElement(null, style, 'div');
        if (!clean) {
            temp.into_body();
        }
        else {
            temp.into_clean_body();
        }
        return temp;
    }

    Next.CreateHolder = CreateHolder;

    function CreateDiv(_parent, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'div');
        return temp;
    }

    Next.CreateDiv = CreateDiv;

    function CreateLabel(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'label');
        temp.text(text);
        return temp;
    }

    Next.CreateLabel = CreateLabel;

    function CreateSpan(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'span');
        temp.text(text);
        return temp;
    }

    Next.CreateSpan = CreateSpan;

    function CreateParagraph(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'p');
        temp.text(text);
        return temp;
    }

    Next.CreateParagraph = CreateParagraph;

    function CreateH1(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'h1');
        temp.text(text);
        return temp;
    }

    Next.CreateH1 = CreateH1;

    function CreateH2(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'h2');
        temp.text(text);
        return temp;
    }

    Next.CreateH2 = CreateH2;

    function CreateH3(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'h3');
        temp.text(text);
        return temp;
    }

    Next.CreateH3 = CreateH3;

    function CreateH4(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'h4');
        temp.text(text);
        return temp;
    }

    Next.CreateH4 = CreateH4;

    function CreateH5(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'h5');
        temp.text(text);
        return temp;
    }

    Next.CreateH5 = CreateH5;

    function CreateH6(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'h6');
        temp.text(text);
        return temp;
    }

    Next.CreateH6 = CreateH6;

    function CreateIframe(_parent, source, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (source === void 0) {
            source = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'iframe');
        temp.setAttr("src", source);
        return temp;
    }

    Next.CreateIframe = CreateIframe;

    function CreateImg(_parent, source, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'img');
        temp.setAttr("src", source);
        return temp;
    }

    Next.CreateImg = CreateImg;

    function CreateTextBox(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'text');
        if (text != '') {
            temp.setAttr("placeholder", text);
        }
        return temp;
    }

    Next.CreateTextBox = CreateTextBox;

    function CreatePassword(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'password');
        if (text != '') {
            temp.setAttr("placeholder", text);
        }
        return temp;
    }

    Next.CreatePassword = CreatePassword;

    function CreateDate(_parent, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'date');
        return temp;
    }

    Next.CreateDate = CreateDate;

    function CreateButton(_parent, text, style) {
        if (_parent === void 0) {
            _parent = null;
        }
        if (text === void 0) {
            text = "";
        }
        if (style === void 0) {
            style = "";
        }
        var temp = new DOMElement(_parent, style, 'input');
        temp.setAttr('type', 'button');
        if (text != '') {
            temp.value(text);
        }
        return temp;
    }

    Next.CreateButton = CreateButton;
    //Classes--------------------------------------------------------------------------------------------------------------
    var CreateTemplate = /** @class */ (function () {
        function CreateTemplate(template) {
            this.template_string = template;
        }

        CreateTemplate.prototype.build = function (parent) {
            var param = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                param[_i - 1] = arguments[_i];
            }
            var clone = this.template_string;
            for (var i = 0; i < param.length; i++) {
                clone = clone.split("{" + i.toString() + "}").join(param[i]);
            }
            var div = document.createElement('div');
            div.innerHTML = clone.trim();
            while (div.firstChild) {
                parent._actualElement.appendChild(div.firstChild);
            }
        };
        CreateTemplate.prototype.clean_build = function (parent) {
            var param = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                param[_i - 1] = arguments[_i];
            }
            var clone = this.template_string;
            for (var i = 0; i < param.length; i++) {
                clone = clone.split("{" + i.toString() + "}").join(param[i]);
            }
            var div = document.createElement('div');
            div.innerHTML = clone.trim();
            parent._actualElement.innerHTML = "";
            while (div.firstChild) {
                parent._actualElement.appendChild(div.firstChild);
            }
        };
        return CreateTemplate;
    }());
    Next.CreateTemplate = CreateTemplate;
    var CreateList = /** @class */ (function () {
        function CreateList(_parent, style) {
            if (style === void 0) {
                style = "";
            }
            this._parent = _parent;
            this.list = null;
            this.list = new DOMElement(_parent, style, "select");
        }

        CreateList.prototype.addOption = function (text, value, style) {
            if (style === void 0) {
                style = "";
            }
            var option = new DOMElement(this.list, style, "option").value(value.toString());
            option.text(text);
        };
        CreateList.prototype.clear = function () {
            this.list.clear();
        };
        CreateList.prototype.onchange = function (callback) {
            this.list.onchange(callback);
        };
        CreateList.prototype.getValue = function () {
            return this.list.getValue();
        };
        CreateList.prototype.getList = function () {
            return this.list;
        };
        return CreateList;
    }());
    Next.CreateList = CreateList;
    var Attributes = /** @class */ (function () {
        function Attributes(attr, value) {
            this.attr = attr;
            this.value = value;
        }

        Attributes.prototype.getValue = function () {
            return this.value;
        };
        Attributes.prototype.getAttr = function () {
            return this.attr;
        };
        return Attributes;
    }());
    var CreateTable = /** @class */ (function () {
        function CreateTable(_parent, style) {
            this._parent = _parent;
            this.list = [];
            this.dic = {};
            this.pos = 0;
            this._actualElement = null;
            this._parent2 = _parent;
            this.style = style;
        }

        CreateTable.prototype.create_tabel = function (row, column) {
            this.rows = row;
            this.column = column;
            this._actualElement = new DOMElement(this._parent2, '', 'tabel');
            var rows = [];
            var j = 0, found = 0;
            var body = new DOMElement(this._actualElement, '', 'tbody');
            for (var i = 0; i < row; i++) {
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
                    var cell = new DOMElement(row_in, '', 'td');
                    if (this.pos in this.dic) {
                        var a = this.dic[this.pos].getAttr();
                        var v = this.dic[this.pos].getValue();
                        cell.setAttr(a, v);
                        if (a == "rowspan") {
                            rows.push(parseInt(v) - 1);
                        }
                        else if (a == "colspan") {
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
        };
        CreateTable.prototype.addHeader = function () {
            var head = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                head[_i] = arguments[_i];
            }
            for (var i = 0; i < this.column; i++) {
                this.getCell(i).text(head[i]);
            }
        };
        CreateTable.prototype.addRow = function (row_num) {
            var row = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                row[_i - 1] = arguments[_i];
            }
            for (var i = row_num; i < this.column; i++) {
                this.getCell(i).text(row[i]);
            }
        };
        CreateTable.prototype.clear = function () {
            this._actualElement.clear();
        };
        CreateTable.prototype.apply = function (num, attr, value) {
            this.dic[num] = new Attributes(attr, value);
        };
        CreateTable.prototype.getCell = function (num) {
            return this.list[num];
        };
        CreateTable.prototype.getMax = function () {
            return this.list.length;
        };
        CreateTable.prototype.getTabel = function () {
            return this._actualElement;
        };
        return CreateTable;
    }());
    Next.CreateTable = CreateTable;
    var DOMElement = /** @class */ (function () {
        function DOMElement(input_parent, className, type, html_element) {
            this.posx = -404;
            this.posy = -404;
            if (typeof input_parent == "boolean") {
                if (input_parent) {
                    this.createElement(className, type);
                    document.body.appendChild(this._actualElement);
                }
            }
            else {
                this._parent = input_parent;
                if (html_element) {
                    this._actualElement = html_element;
                }
                else {
                    this.createElement(className, type);
                }
            }
        }

        DOMElement.prototype.createElement = function (className, type) {
            this._actualElement = document.createElement(type);
            if (className != '') {
                this.addStyle(className);
            }
            if (this._parent) {
                this._parent._actualElement.appendChild(this._actualElement);
            }
        };
        DOMElement.prototype.append = function (item) {
            this._actualElement.appendChild(item._actualElement);
        };
        DOMElement.prototype.into_clean_body = function () {
            document.getElementsByTagName('BODY')[0].innerHTML = '';
            document.body.appendChild(this._actualElement);
        };
        DOMElement.prototype.into_body = function () {
            document.body.appendChild(this._actualElement);
        };
        DOMElement.prototype.return_me = function () {
            return this._actualElement;
        };
        DOMElement.prototype.position = function () {
            console.log(this._actualElement.offsetTop.toString());
        };
        DOMElement.prototype.addKeyframe = function (action, id, name) {
            var animation_name = "animation_" + id;
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
            }
            else {
                document.getElementsByTagName('head')[0].appendChild(style);
            }
        };
        DOMElement.prototype.addStyle = function (StyleName) {
            var e = this._actualElement;
            if (!e.classList.contains(StyleName)) {
                e.classList.add(StyleName);
            }
        };
        DOMElement.prototype.hasStyle = function (stylename) {
            var e = this._actualElement;
            if (e.classList.contains(stylename))
                return true;
            return false;
        };
        DOMElement.prototype.addAttr = function (attr, value) {
            this._actualElement.setAttribute(attr, value);
        };
        DOMElement.prototype.setAttr = function (attr, value) {
            var old = this._actualElement.getAttribute(attr);
            if (old == null) {
                this._actualElement.setAttribute(attr, value);
            }
            else {
                this._actualElement.setAttribute(attr, old + value);
            }
        };
        DOMElement.prototype.bg_color = function (color) {
            this.setAttr("style", "background-color:" + color + ";");
        };
        DOMElement.prototype.color = function (color) {
            this.setAttr("style", "color:" + color + ";");
        };
        DOMElement.prototype.bold = function () {
            this.setAttr("style", "font-weight: bold;");
        };
        DOMElement.prototype.italic = function () {
            this.setAttr("style", "font-style: italic;");
        };
        DOMElement.prototype.width = function (value) {
            this.setAttr("style", "width:" + value + ";");
        };
        DOMElement.prototype.height = function (value) {
            this.setAttr("style", "height:" + value + ";");
        };
        DOMElement.prototype.center = function () {
            this.setAttr("style", "text-align: center;");
        };
        DOMElement.prototype.left = function () {
            this.setAttr("style", "text-align: leftt;");
        };
        DOMElement.prototype.right = function () {
            this.setAttr("style", "text-align: right;");
        };
        DOMElement.prototype.setAttrFun = function (attr, fun) {
            this._actualElement.setAttribute(attr, fun);
        };
        DOMElement.prototype.removeStyle = function (StyleName) {
            var e = this._actualElement;
            if (e.classList.contains(StyleName)) {
                e.classList.remove(StyleName);
            }
        };
        DOMElement.prototype.getID = function (str) {
            return document.getElementById(str);
        };
        DOMElement.prototype.getValue = function () {
            return this._actualElement.value;
        };
        DOMElement.prototype.text = function (str) {
            this._actualElement.textContent = str;
            return this;
        };
        DOMElement.prototype.value = function (str) {
            this.setAttr('value', str);
            return this;
        };
        DOMElement.prototype.clear_text = function () {
            this._actualElement.value = "";
        };
        DOMElement.prototype.clear = function () {
            this._actualElement.innerHTML = "";
        };
        /** Funksione per te shkuar ne fund */
        DOMElement.prototype.scroll_down = function () {
            this._actualElement.scrollTo(0, this._actualElement.scrollHeight);
        };
        /** Funksione per te shkuar ne fillim */
        DOMElement.prototype.scroll_top = function () {
            this._actualElement.scrollTo(0, 0);
        };
        /** Funksione kthen pozicionin */
        DOMElement.prototype.scrollPos = function () {
            return this._actualElement.scrollTop;
        };
        /** Funksion nese user ben scroll*/
        DOMElement.prototype.scroll = function (callback) {
            this._actualElement.addEventListener("scroll", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        /** Funksion nese shtyp butonin dy here*/
        DOMElement.prototype.dbclick = function (callback) {
            this._actualElement.addEventListener("dblclick", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        /** Funksion nese shtyp butonin nje buton tastiere*/
        DOMElement.prototype.keypress = function (key, callback) {
            this._actualElement.addEventListener("keypress", (function (e) {
                e.stopPropagation();
                if (e.keyCode == key) {
                    callback.call();
                }
            }), false);
        };
        DOMElement.prototype.keydown = function (callback) {
            this._actualElement.addEventListener("keydown", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.keyup = function (callback) {
            this._actualElement.addEventListener("keyup", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.mouseout = function (callback) {
            this._actualElement.addEventListener("mouseout", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.mouseover = function (callback) {
            this._actualElement.addEventListener("mouseover", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.mousemove = function (callback) {
            this._actualElement.addEventListener("mousemove", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.mouseenter = function (callback) {
            this._actualElement.addEventListener("mouseenter", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.mousedown = function (callback) {
            this._actualElement.addEventListener("mousedown", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.mouseup = function (callback) {
            this._actualElement.addEventListener("mouseup", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.wheel = function (callback) {
            this._actualElement.addEventListener("wheel", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.mouseleave = function (callback) {
            this._actualElement.addEventListener("mouseleave", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        DOMElement.prototype.click = function (callback) {
            var _this = this;
            this._actualElement.addEventListener("click", (function (e) {
                e.stopPropagation();
                _this.posx = e.offsetX;
                _this.posy = e.offsetY;
                callback.call();
            }), false);
        };
        DOMElement.prototype.onchange = function (callback) {
            this._actualElement.addEventListener("change", (function (e) {
                e.stopPropagation();
                callback.call();
            }), false);
        };
        /** Funkson qe ndryshon gjendjen e pamjes*/
        DOMElement.prototype.toggle_vis = function () {
            if (this._actualElement.style.display == "block") {
                this._actualElement.style.display = "none";
            }
            else {
                this._actualElement.style.display = "block";
            }
        };
        DOMElement.prototype.removeclick = function (callback) {
            this._actualElement.removeEventListener("click", callback, true);
        };
        DOMElement.prototype.setID = function (emri) {
            this._actualElement.setAttribute('id', emri);
        };
        DOMElement.prototype.show = function () {
            this._actualElement.style.display = "block";
        };
        DOMElement.prototype.hide = function () {
            this._actualElement.style.display = "none";
        };
        DOMElement.prototype.removeit = function () {
            this._parent._actualElement.removeChild(this._actualElement);
        };
        DOMElement.prototype.disable = function () {
            this._actualElement.setAttribute("disabled", "disabled");
        };
        DOMElement.prototype.active = function () {
            if (this._actualElement.hasAttribute("disabled")) {
                this._actualElement.removeAttribute("disabled");
            }
        };
        DOMElement.prototype.getPosX = function () {
            return this.posx;
        };
        DOMElement.prototype.getPosY = function () {
            return this.posy;
        };
        return DOMElement;
    }());
    Next.DOMElement = DOMElement;
})(Next || (Next = {}));
//# sourceMappingURL=next.js.map