(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,i){e.exports=i(15)},15:function(e,t,i){"use strict";i.r(t);var a=i(0),s=i.n(a),c=i(3),n=i.n(c),r=i(1),m=i(4),l=i(5),o=i(8),g=i(6),d=i(9),u=i(7),p=function(e){return s.a.createElement("ul",null,e.pictures.map(function(t){return s.a.createElement("li",{key:t.id},s.a.createElement("img",{src:t.image,alt:"Weimaraner",onClick:function(){return e.handleClick(t.id)}}))}))};var k=function(e){for(var t,i=[],a=e.length;a;)t=Math.floor(Math.random()*a--),i.push(e.splice(t,1)[0]);return i},j=function(e){function t(){var e,i;Object(m.a)(this,t);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(i=Object(o.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(s)))).state={jsonState:u,message:"Click to begin",score:0},i.handleClick=function(e){var t,a=!1,s=i.state.jsonState.map(function(t){var i=Object(r.a)({},t);return i.id===e&&(!0===i.clicked&&(a=!0),i.clicked=!0),i}),c=i.state.score;!0===a?(c=0,t="your memory sucks, start over (click to begin)",s=s.map(function(e){return Object(r.a)({},e,{clicked:!1})})):(c+=1,t="good job, keep going"),i.setState({jsonState:k(s),score:c,message:t},function(){return console.log(i.state)})},i}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("h1",null,this.state.message),s.a.createElement("h3",{className:"score"},"Score: ",this.state.score),s.a.createElement(p,{pictures:this.state.jsonState,handleClick:this.handleClick}))}}]),t}(a.Component);n.a.render(s.a.createElement(j,null),document.getElementById("root"))},7:function(e){e.exports=[{id:1,image:"/assets/images/weim-1.jpg",clicked:!1},{id:2,image:"/assets/images/weim-2.jpg",clicked:!1},{id:3,image:"/assets/images/weim-3.jpg",clicked:!1},{id:4,image:"/assets/images/weim-4.jpeg",clicked:!1},{id:5,image:"/assets/images/weim-5.jpeg",clicked:!1},{id:6,image:"/assets/images/weim-6.jpeg",clicked:!1},{id:7,image:"/assets/images/weim-7.jpeg",clicked:!1},{id:8,image:"/assets/images/weim-8.jpg",clicked:!1},{id:9,image:"/assets/images/weim-9.jpg",clicked:!1},{id:10,image:"/assets/images/weim-10.jpg",clicked:!1},{id:11,image:"/assets/images/weim-11.jpg",clicked:!1},{id:12,image:"/assets/images/weim-12.jpg",clicked:!1}]}},[[10,2,1]]]);
//# sourceMappingURL=main.a24e1018.chunk.js.map