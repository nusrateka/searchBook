(this.webpackJsonpsearchapp=this.webpackJsonpsearchapp||[]).push([[0],{14:function(e,t,a){},8:function(e,t,a){e.exports=a(9)},9:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),r=a(4),o=a(3),i=a(5),s=a(0),l=a.n(s),p=a(7),h=a.n(p),u=(a(14),function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.book;return e.stocked?l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{padding:"5px"}},e.category),l.a.createElement("td",{style:{padding:"5px"}},e.name),l.a.createElement("td",{style:{padding:"5px"}},e.price)))):l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",{style:{color:"red",padding:"5px"}},e.category),l.a.createElement("td",{style:{color:"red",padding:"5px"}},e.name),l.a.createElement("td",{style:{color:"red",padding:"5px"}},e.price))))}}]),t}(l.a.Component)),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.books,t=[],a=this.props.inStock,n=this.props.searchText,c=[];return e.map((function(e){if(-1!==e.name.indexOf(n)&&(e.stocked||!a))return e.category!==t?c.push(l.a.createElement(u,{book:e,key:e.name})):void(e.category=t)})),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{padding:"5px"}},"Category"),l.a.createElement("th",{style:{padding:"5px"}},"Name"),l.a.createElement("th",{style:{padding:"5px"}},"Price")))),c)}}]),t}(l.a.Component),m=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("form",null,l.a.createElement("input",{type:"text",placeholder:"search bar",value:this.props.searchText,onChange:function(t){e.props.onChangeSearchText(t.target.value)}}),l.a.createElement("p",null,l.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.props.onChangeCheckBox}),"only show books in stock"))}}]),t}(l.a.Component),k=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={searchText:"",inStock:!1},a}return Object(i.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(m,{checked:this.state.inStock,onChangeCheckBox:function(){e.setState({inStock:!e.state.inStock})},searchText:this.state.searchText,onChangeSearchText:function(t){e.setState({searchText:t})}}),l.a.createElement(d,{books:this.props.books,inStock:this.state.inStock,searchText:this.state.searchText}))}}]),t}(l.a.Component);h.a.render(l.a.createElement(k,{books:[{category:"Scientific Book",price:"$29.99",stocked:!0,name:"Tin Tin"},{category:"Romantic Book",price:"$9.99",stocked:!0,name:"Titanic"},{category:"Horror Book",price:"$20.99",stocked:!1,name:"Vuut"},{category:"Comic Book",price:"30.99",stocked:!0,name:"Superman"},{category:"Drama Book",price:"12.99",stocked:!1,name:"Hamlet"},{category:"Fantasy Book",price:"$19.99",stocked:!0,name:"Lord of the rings"}]}),document.getElementById("root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.5b74ba78.chunk.js.map