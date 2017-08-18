import './dialog.less';

let $ = function(s, parent) {
    return (parent || document).querySelectorAll(s);
}

let crtEle = function(s) {
    return document.createElement(s);
}

let clsName = "m-layer",
    extend = function(target, opts) {
        for (let key in opts) {
            target[key] = opts[key];
        }
        return target;
    };

let myLayer = function(options) {
    this.settings = {
        title: "标题",
        content: "内容"
    }

    extend(this.settings, options)
    this.init();
}

myLayer.prototype = {
    init() {
        this.createBox();
        this.show();
    },

    createBox() {
        let that = this;
        let settings = this.settings;
        this.myLayerEl = crtEle('div');
        this.myLayerEl.className = clsName;

        var html = `<div class='${clsName}-box'>
            <header class='header-bar'>
                <h2>${settings.title}</h2>
                <a href='javascript:;' class="close">x</a>
            </header >
            <div class='layer-content'>${settings.content}</div>
            </div >`;

        this.myLayerEl.innerHTML = html;
        $("body")[0].appendChild(this.myLayerEl);

        $('.close')[0].addEventListener('click',function () {
        	that.close();
        },false)
        this.myLayerEl.addEventListener("click", function() {
            that.close();
        }, false)
        $(".m-layer-box")[0].addEventListener("click", function(e) {
            e.stopPropagation();
        }, false)

        this.myLayerEl.addEventListener("touchmove", function(e) {
            e.preventDefault();
        }, false)
    },

    show() {
        let that = this;
        that.myLayerEl.className = clsName + " layer-fadeIn"
        that.myLayerEl.querySelector(".m-layer-box").className = "m-layer-box layer-slideUp"

        setTimeout(function name(params) {
            that.myLayerEl.className = clsName;
            that.myLayerEl.querySelector(".m-layer-box").className = "m-layer-box"
        }, 290)

    },

    close() {
        let that = this;
        this.myLayerEl.className = clsName + " layer-fadeOut"
        this.myLayerEl.querySelector(".m-layer-box").className = "m-layer-box layer-slideOut"
        setTimeout(function name(params) {
            document.body.removeChild(that.myLayerEl);
        }, 290)
    }
}



export default {
    install(Vue) {
        Vue.prototype.$mLayer = {
            open(opt) {
                return new myLayer(opt);
            }
        }
    }
}