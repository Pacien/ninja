var Montage = require("montage/core/core").Montage;
var Component = require("montage/ui/component").Component;

var Span = exports.Span = Montage.create(Component, {

    hasTemplate:{
        value: true
    },

    _spanWidth:{
        value:0
    },

    spanWidth:{
        serializable:true,
        get:function () {
            return this._spanWidth;
        },
        set:function (value) {
            this._spanWidth = value;
            this.needsDraw = true;
        }
    },

    draw:{
        value: function(){
            this.element.style.width = this.spanWidth + "px";
        }
    },

    highlightSpan:{
        value: function(){
            this.element.classList.add("spanHighlight");
        }
    }
});
