(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f473"],{1754:function(t,e,a){"use strict";var r=a("c176"),n=a.n(r);n.a},a481:function(t,e,a){a("214f")("replace",2,function(t,e,a){return[function(r,n){"use strict";var i=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,i,n):a.call(String(i),r,n)},a]})},a7be:function(t,e,a){},b737:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Row",{attrs:{gutter:10}},[a("i-col",{attrs:{span:"12"}},[a("Card",[a("div",{staticClass:"update-paste-con"},[a("paste-editor",{on:{"on-success":t.handleSuccess,"on-error":t.handleError},model:{value:t.pasteDataArr,callback:function(e){t.pasteDataArr=e},expression:"pasteDataArr"}})],1),a("div",{staticClass:"update-paste-btn-con"},[a("span",{staticClass:"paste-tip"},[t._v("使用Tab键换列，使用回车键换行")]),a("Button",{staticStyle:{float:"right"},attrs:{type:"primary"},on:{click:t.handleShow}},[t._v("显示表格数据")])],1)])],1),a("i-col",{attrs:{span:"12"}},[a("Card",[a("Table",{attrs:{height:400,columns:t.columns,data:t.tableData}})],1)],1)],1)},n=[],i=(a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"paste-editor-wrapper"},[a("textarea",{ref:"codemirror",staticClass:"textarea-el"})])}),o=[],s=(a("28a5"),a("56b3")),c=a.n(s),l=(a("a7be"),a("90de")),u=(a("a481"),function(t){(function(e){e(t)})(function(t){function e(t){t.state.placeholder&&(t.state.placeholder.parentNode.removeChild(t.state.placeholder),t.state.placeholder=null)}function a(t){e(t);var a=t.state.placeholder=document.createElement("pre");a.style.cssText="height: 0; overflow: visible; color: #80848f;",a.style.direction=t.getOption("direction"),a.className="CodeMirror-placeholder";var r=t.getOption("placeholder");"string"===typeof r&&(r=document.createTextNode(r)),a.appendChild(r),t.display.lineSpace.insertBefore(a,t.display.lineSpace.firstChild)}function r(t){i(t)&&a(t)}function n(t){var r=t.getWrapperElement(),n=i(t);r.className=r.className.replace(" CodeMirror-empty","")+(n?" CodeMirror-empty":""),n?a(t):e(t)}function i(t){return 1===t.lineCount()&&""===t.getLine(0)}t.defineOption("placeholder","",function(a,i,o){var s=o&&o!==t.Init;if(i&&!s)a.on("blur",r),a.on("change",n),a.on("swapDoc",n),n(a);else if(!i&&s){a.off("blur",r),a.off("change",n),a.off("swapDoc",n),e(a);var c=a.getWrapperElement();c.className=c.className.replace(" CodeMirror-empty","")}i&&!a.hasFocus()&&r(a)})})}),d={name:"PasteEditor",props:{value:Array,pasteData:{type:String,default:""},placeholder:{type:String,default:"从网页或其他应用软件复制表格数据，粘贴到这里 。默认第一行是表头，使用回车键添加新行，使用Tab键区分列。"}},data:function(){return{pasteDataArr:[],rowArrLength:0,editor:null}},watch:{pasteData:function(t){""===t&&this.editor.setValue("")}},computed:{rowNum:function(){return this.pasteDataArr.length},colNum:function(){return this.pasteDataArr[0]?this.pasteDataArr[0].length:0}},methods:{handleKeyup:function(t){this.handleAreaData()},handleContentChanged:function(t){var e=t.trim();this.$emit("on-content-change",e);var a=e.split(/[\n\u0085\u2028\u2029]|\r\n?/g).map(function(t){return t.split("\t")});""===t&&(a=[]),this.pasteDataArr=a,this.clearLineClass(),this.checkColNumInEveryRow(),this.$emit("input",this.pasteDataArr)},checkColNumInEveryRow:function(){var t=0,e=this.rowNum;if(0!==e){while(++t<e){var a=this.pasteDataArr[t];if(a.length!==this.colNum&&(t!==e-1||1!==a.length||""!==a[0]||t!==e-1))return this.markIncorrectRow(t),this.$emit("on-error",t),!1}return this.$emit("on-success",this.pasteDataArr),!0}},markIncorrectRow:function(t){this.editor.addLineClass(t,"text","incorrect-row")},clearLineClass:function(){var t=this;Object(l["a"])(this.pasteDataArr,function(e,a){t.editor.removeLineClass(a,"text","incorrect-row")})}},mounted:function(){var t=this;u(c.a),this.editor=c.a.fromTextArea(this.$refs.codemirror,{lineNumbers:!0,tabSize:1,lineWrapping:!0,placeholder:this.placeholder}),this.editor.on("change",function(e){t.handleContentChanged(e.getValue())}),this.editor.addLineClass(0,"text","first-row")}},p=d,h=(a("1754"),a("2877")),f=Object(h["a"])(p,i,o,!1,null,null,null);f.options.__file="paste-editor.vue";var m=f.exports,v=m,g=a("c276"),b={name:"update_paste_page",components:{PasteEditor:v},data:function(){return{pasteDataArr:[],columns:[],tableData:[],validated:!0,errorIndex:0}},methods:{handleSuccess:function(){this.validated=!0},handleError:function(t){this.validated=!1,this.errorIndex=t},handleShow:function(){if(this.validated){var t=Object(g["i"])(this.pasteDataArr),e=t.columns,a=t.tableData;this.columns=e,this.tableData=a}else this.$Notice.error({title:"您的内容不规范",desc:"您的第".concat(this.errorIndex+1,"行数据不规范，请修改")})}}},C=b,w=(a("bad9"),Object(h["a"])(C,r,n,!1,null,null,null));w.options.__file="update-paste.vue";e["default"]=w.exports},bad9:function(t,e,a){"use strict";var r=a("e984"),n=a.n(r);n.a},c176:function(t,e,a){},e984:function(t,e,a){}}]);