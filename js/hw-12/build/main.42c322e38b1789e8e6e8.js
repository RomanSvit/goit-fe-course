(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3H5x":function(n,e,l){var a=l("mp5j");n.exports=(a.default||a).template({1:function(n,e,l,a,t){var o;return'  <li class="tag-list__item">'+n.escapeExpression("function"==typeof(o=null!=(o=l.name||(null!=e?e.name:e))?o:n.hooks.helperMissing)?o.call(null!=e?e:n.nullContext||{},{name:"name",hash:{},data:t,loc:{start:{line:6,column:29},end:{line:6,column:37}}}):o)+"</li>\r\n"},compiler:[8,">= 4.3.0"],main:function(n,e,l,a,t){var o,c,u=null!=e?e:n.nullContext||{},r=n.hooks.helperMissing,i="function",s=n.escapeExpression;return'<h2 class="nameCountry"> '+s(typeof(c=null!=(c=l.name||(null!=e?e.name:e))?c:r)===i?c.call(u,{name:"name",hash:{},data:t,loc:{start:{line:1,column:25},end:{line:1,column:33}}}):c)+'</h2>\r\n<p class="capital"><span>Capital:</span> '+s(typeof(c=null!=(c=l.capital||(null!=e?e.capital:e))?c:r)===i?c.call(u,{name:"capital",hash:{},data:t,loc:{start:{line:2,column:41},end:{line:2,column:52}}}):c)+'</p>\r\n<p class="population"><span>Population:</span> '+s(typeof(c=null!=(c=l.population||(null!=e?e.population:e))?c:r)===i?c.call(u,{name:"population",hash:{},data:t,loc:{start:{line:3,column:47},end:{line:3,column:61}}}):c)+'</p>\r\n<ul class="lang"><span>Languages :</span>\r\n'+(null!=(o=l.each.call(u,null!=e?e.languages:e,{name:"each",hash:{},fn:n.program(1,t,0),inverse:n.noop,data:t,loc:{start:{line:5,column:2},end:{line:7,column:11}}}))?o:"")+'</ul>\r\n<img class="img" src="'+s(typeof(c=null!=(c=l.flag||(null!=e?e.flag:e))?c:r)===i?c.call(u,{name:"flag",hash:{},data:t,loc:{start:{line:9,column:22},end:{line:9,column:30}}}):c)+'" alt="'+s(typeof(c=null!=(c=l.name||(null!=e?e.name:e))?c:r)===i?c.call(u,{name:"name",hash:{},data:t,loc:{start:{line:9,column:37},end:{line:9,column:45}}}):c)+'">'},useData:!0})},QfWi:function(n,e,l){"use strict";l.r(e);l("x3Br"),l("D/wG");var a=l("dIfx"),t=l("3H5x"),o=l.n(t);l("JBxO"),l("FdtR");var c=l("9va6"),u=document.querySelector(".wraper"),r="https://restcountries.eu/rest/v2/name/",i=document.querySelector("#inputID"),s=document.querySelector(".listCountry");function p(n){switch(m(),!0){case 1===n.length:l=n[0],t=o()(l),u.insertAdjacentHTML("beforeend",t);break;case n.length<10:e=n.reduce((function(n,e,l){return n+"<li>"+l+": "+e.name+"</li>"}),""),s.insertAdjacentHTML("beforeend",e);break;default:a.a.alert("Notice me, error!!!"),a.a.get().css({top:"200px"})}var e,l,t}function m(){s.innerHTML="",u.innerHTML=""}i.addEventListener("input",c.debounce((function(){var n=i.value;if(""===n)return void m();!function(n,e,l){fetch(n+e).then((function(n){if(n.ok)return n.json();throw new Error("Error fetching data")})).then((function(n){l(n)})).catch((function(n){console.log(n)}))}(r,n,p)}),1e3))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.42c322e38b1789e8e6e8.js.map