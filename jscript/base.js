/***** jquer.js *****/
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ra(b),i=l.boxSizing&&"border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Sa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Oa.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+eb(b,c,e||(i?"border":"content"),f,h)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0;})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/***** bootstrap.js *****/
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/***** bootstrapValidator.js *****/
if("undefined"==typeof jQuery)throw new Error("BootstrapValidator's JavaScript requires jQuery");!function(a){var b=function(b,c){this.$form=a(b),this.options=a.extend({},a.fn.bootstrapValidator.DEFAULT_OPTIONS,c),this.$invalidFields=a([]),this.$submitButton=null,this.$hiddenButton=null,this.STATUS_NOT_VALIDATED="NOT_VALIDATED",this.STATUS_VALIDATING="VALIDATING",this.STATUS_INVALID="INVALID",this.STATUS_VALID="VALID";var d=function(){for(var a=3,b=document.createElement("div"),c=b.all||[];b.innerHTML="<!--[if gt IE "+ ++a+"]><br><![endif]-->",c[0];);return a>4?a:!a}(),e=document.createElement("div");this._changeEvent=9!==d&&"oninput"in e?"input":"keyup",this._submitIfValid=null,this._cacheFields={},this._init()};b.prototype={constructor:b,_init:function(){var b=this,c={container:this.$form.attr("data-bv-container"),events:{formInit:this.$form.attr("data-bv-events-form-init"),formError:this.$form.attr("data-bv-events-form-error"),formSuccess:this.$form.attr("data-bv-events-form-success"),fieldAdded:this.$form.attr("data-bv-events-field-added"),fieldRemoved:this.$form.attr("data-bv-events-field-removed"),fieldInit:this.$form.attr("data-bv-events-field-init"),fieldError:this.$form.attr("data-bv-events-field-error"),fieldSuccess:this.$form.attr("data-bv-events-field-success"),fieldStatus:this.$form.attr("data-bv-events-field-status"),validatorError:this.$form.attr("data-bv-events-validator-error"),validatorSuccess:this.$form.attr("data-bv-events-validator-success")},excluded:this.$form.attr("data-bv-excluded"),feedbackIcons:{valid:this.$form.attr("data-bv-feedbackicons-valid"),invalid:this.$form.attr("data-bv-feedbackicons-invalid"),validating:this.$form.attr("data-bv-feedbackicons-validating")},group:this.$form.attr("data-bv-group"),live:this.$form.attr("data-bv-live"),message:this.$form.attr("data-bv-message"),onError:this.$form.attr("data-bv-onerror"),onSuccess:this.$form.attr("data-bv-onsuccess"),submitButtons:this.$form.attr("data-bv-submitbuttons"),threshold:this.$form.attr("data-bv-threshold"),trigger:this.$form.attr("data-bv-trigger"),verbose:this.$form.attr("data-bv-verbose"),fields:{}};this.$form.attr("novalidate","novalidate").addClass(this.options.elementClass).on("submit.bv",function(a){a.preventDefault(),b.validate()}).on("click.bv",this.options.submitButtons,function(){b.$submitButton=a(this),b._submitIfValid=!0}).find("[name], [data-bv-field]").each(function(){var d=a(this),e=d.attr("name")||d.attr("data-bv-field"),f=b._parseOptions(d);f&&(d.attr("data-bv-field",e),c.fields[e]=a.extend({},f,c.fields[e]))}),this.options=a.extend(!0,this.options,c),this.$hiddenButton=a("<button/>").attr("type","submit").prependTo(this.$form).addClass("bv-hidden-submit").css({display:"none",width:0,height:0}),this.$form.on("click.bv",'[type="submit"]',function(c){if(!c.isDefaultPrevented()){var d=a(c.target),e=d.is('[type="submit"]')?d.eq(0):d.parent('[type="submit"]').eq(0);!b.options.submitButtons||e.is(b.options.submitButtons)||e.is(b.$hiddenButton)||b.$form.off("submit.bv").submit()}});for(var d in this.options.fields)this._initField(d);this.$form.trigger(a.Event(this.options.events.formInit),{bv:this,options:this.options}),this.options.onSuccess&&this.$form.on(this.options.events.formSuccess,function(c){a.fn.bootstrapValidator.helpers.call(b.options.onSuccess,[c])}),this.options.onError&&this.$form.on(this.options.events.formError,function(c){a.fn.bootstrapValidator.helpers.call(b.options.onError,[c])})},_parseOptions:function(b){var c,d,e,f,g,h,i,j=b.attr("name")||b.attr("data-bv-field"),k={};for(d in a.fn.bootstrapValidator.validators)if(c=a.fn.bootstrapValidator.validators[d],e=b.attr("data-bv-"+d.toLowerCase())+"",i="function"==typeof c.enableByHtml5?c.enableByHtml5(b):null,i&&"false"!==e||i!==!0&&(""===e||"true"===e)){c.html5Attributes=a.extend({},{message:"message",onerror:"onError",onsuccess:"onSuccess"},c.html5Attributes),k[d]=a.extend({},i===!0?{}:i,k[d]);for(h in c.html5Attributes)f=c.html5Attributes[h],g=b.attr("data-bv-"+d.toLowerCase()+"-"+h),g&&("true"===g?g=!0:"false"===g&&(g=!1),k[d][f]=g)}var l={container:b.attr("data-bv-container"),excluded:b.attr("data-bv-excluded"),feedbackIcons:b.attr("data-bv-feedbackicons"),group:b.attr("data-bv-group"),message:b.attr("data-bv-message"),onError:b.attr("data-bv-onerror"),onStatus:b.attr("data-bv-onstatus"),onSuccess:b.attr("data-bv-onsuccess"),selector:b.attr("data-bv-selector"),threshold:b.attr("data-bv-threshold"),trigger:b.attr("data-bv-trigger"),verbose:b.attr("data-bv-verbose"),validators:k},m=a.isEmptyObject(l),n=a.isEmptyObject(k);return!n||!m&&this.options.fields&&this.options.fields[j]?(l.validators=k,l):null},_initField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b),c.attr("data-bv-field",b)}if(0!==c.length&&null!==this.options.fields[b]&&null!==this.options.fields[b].validators){var d;for(d in this.options.fields[b].validators)a.fn.bootstrapValidator.validators[d]||delete this.options.fields[b].validators[d];null===this.options.fields[b].enabled&&(this.options.fields[b].enabled=!0);for(var e=this,f=c.length,g=c.attr("type"),h=1===f||"radio"===g||"checkbox"===g,i="radio"===g||"checkbox"===g||"file"===g||"SELECT"===c.eq(0).get(0).tagName?"change":this._changeEvent,j=(this.options.fields[b].trigger||this.options.trigger||i).split(" "),k=a.map(j,function(a){return a+".update.bv"}).join(" "),l=0;f>l;l++){var m=c.eq(l),n=this.options.fields[b].group||this.options.group,o=m.parents(n),p="function"==typeof(this.options.fields[b].container||this.options.container)?(this.options.fields[b].container||this.options.container).call(this,m,this):this.options.fields[b].container||this.options.container,q=p&&"tooltip"!==p&&"popover"!==p?a(p):this._getMessageContainer(m,n);p&&"tooltip"!==p&&"popover"!==p&&q.addClass("has-error"),q.find('.help-block[data-bv-validator][data-bv-for="'+b+'"]').remove(),o.find('i[data-bv-icon-for="'+b+'"]').remove(),m.off(k).on(k,function(){e.updateStatus(a(this),e.STATUS_NOT_VALIDATED)}),m.data("bv.messages",q);for(d in this.options.fields[b].validators)m.data("bv.result."+d,this.STATUS_NOT_VALIDATED),h&&l!==f-1||a("<small/>").css("display","none").addClass("help-block").attr("data-bv-validator",d).attr("data-bv-for",b).attr("data-bv-result",this.STATUS_NOT_VALIDATED).html(this._getMessage(b,d)).appendTo(q),"function"==typeof a.fn.bootstrapValidator.validators[d].init&&a.fn.bootstrapValidator.validators[d].init(this,m,this.options.fields[b].validators[d]);if(this.options.fields[b].feedbackIcons!==!1&&"false"!==this.options.fields[b].feedbackIcons&&this.options.feedbackIcons&&this.options.feedbackIcons.validating&&this.options.feedbackIcons.invalid&&this.options.feedbackIcons.valid&&(!h||l===f-1)){o.addClass("has-feedback");var r=a("<i/>").css("display","none").addClass("form-control-feedback").attr("data-bv-icon-for",b).insertAfter(m);if("checkbox"===g||"radio"===g){var s=m.parent();s.hasClass(g)?r.insertAfter(s):s.parent().hasClass(g)&&r.insertAfter(s.parent())}0===o.find("label").length&&r.addClass("bv-no-label"),0!==o.find(".input-group").length&&r.addClass("bv-icon-input-group").insertAfter(o.find(".input-group").eq(0)),p&&m.off("focus.bv").on("focus.bv",function(){switch(p){case"tooltip":r.tooltip("show");break;case"popover":r.popover("show")}}).off("blur.bv").on("blur.bv",function(){switch(p){case"tooltip":r.tooltip("hide");break;case"popover":r.popover("hide")}})}}switch(c.on(this.options.events.fieldSuccess,function(b,c){var d=e.getOptions(c.field,null,"onSuccess");d&&a.fn.bootstrapValidator.helpers.call(d,[b,c])}).on(this.options.events.fieldError,function(b,c){var d=e.getOptions(c.field,null,"onError");d&&a.fn.bootstrapValidator.helpers.call(d,[b,c])}).on(this.options.events.fieldStatus,function(b,c){var d=e.getOptions(c.field,null,"onStatus");d&&a.fn.bootstrapValidator.helpers.call(d,[b,c])}).on(this.options.events.validatorError,function(b,c){var d=e.getOptions(c.field,c.validator,"onError");d&&a.fn.bootstrapValidator.helpers.call(d,[b,c])}).on(this.options.events.validatorSuccess,function(b,c){var d=e.getOptions(c.field,c.validator,"onSuccess");d&&a.fn.bootstrapValidator.helpers.call(d,[b,c])}),k=a.map(j,function(a){return a+".live.bv"}).join(" "),this.options.live){case"submitted":break;case"disabled":c.off(k);break;case"enabled":default:c.off(k).on(k,function(){e._exceedThreshold(a(this))&&e.validateField(a(this))})}c.trigger(a.Event(this.options.events.fieldInit),{bv:this,field:b,element:c})}},_getMessage:function(b,c){if(!(this.options.fields[b]&&a.fn.bootstrapValidator.validators[c]&&this.options.fields[b].validators&&this.options.fields[b].validators[c]))return"";var d=this.options.fields[b].validators[c];switch(!0){case!!d.message:return d.message;case!!this.options.fields[b].message:return this.options.fields[b].message;case!!a.fn.bootstrapValidator.i18n[c]:return a.fn.bootstrapValidator.i18n[c]["default"];default:return this.options.message}},_getMessageContainer:function(a,b){var c=a.parent();if(c.is(b))return c;var d=c.attr("class");if(!d)return this._getMessageContainer(c,b);d=d.split(" ");for(var e=d.length,f=0;e>f;f++)if(/^col-(xs|sm|md|lg)-\d+$/.test(d[f])||/^col-(xs|sm|md|lg)-offset-\d+$/.test(d[f]))return c;return this._getMessageContainer(c,b)},_submit:function(){var b=this.isValid(),c=b?this.options.events.formSuccess:this.options.events.formError,d=a.Event(c);this.$form.trigger(d),this.$submitButton&&(b?this._onSuccess(d):this._onError(d))},_isExcluded:function(b){var c=b.attr("data-bv-excluded"),d=b.attr("data-bv-field")||b.attr("name");switch(!0){case!!d&&this.options.fields&&this.options.fields[d]&&("true"===this.options.fields[d].excluded||this.options.fields[d].excluded===!0):case"true"===c:case""===c:return!0;case!!d&&this.options.fields&&this.options.fields[d]&&("false"===this.options.fields[d].excluded||this.options.fields[d].excluded===!1):case"false"===c:return!1;default:if(this.options.excluded){"string"==typeof this.options.excluded&&(this.options.excluded=a.map(this.options.excluded.split(","),function(b){return a.trim(b)}));for(var e=this.options.excluded.length,f=0;e>f;f++)if("string"==typeof this.options.excluded[f]&&b.is(this.options.excluded[f])||"function"==typeof this.options.excluded[f]&&this.options.excluded[f].call(this,b,this)===!0)return!0}return!1}},_exceedThreshold:function(b){var c=b.attr("data-bv-field"),d=this.options.fields[c].threshold||this.options.threshold;if(!d)return!0;var e=-1!==a.inArray(b.attr("type"),["button","checkbox","file","hidden","image","radio","reset","submit"]);return e||b.val().length>=d},_onError:function(b){if(!b.isDefaultPrevented()){if("submitted"===this.options.live){this.options.live="enabled";var c=this;for(var d in this.options.fields)!function(b){var e=c.getFieldElements(b);if(e.length){var f=a(e[0]).attr("type"),g="radio"===f||"checkbox"===f||"file"===f||"SELECT"===a(e[0]).get(0).tagName?"change":c._changeEvent,h=c.options.fields[d].trigger||c.options.trigger||g,i=a.map(h.split(" "),function(a){return a+".live.bv"}).join(" ");e.off(i).on(i,function(){c._exceedThreshold(a(this))&&c.validateField(a(this))})}}(d)}var e=this.$invalidFields.eq(0);if(e){var f,g=e.parents(".tab-pane");g&&(f=g.attr("id"))&&a('a[href="#'+f+'"][data-toggle="tab"]').tab("show"),e.focus()}}},_onSuccess:function(a){a.isDefaultPrevented()||this.disableSubmitButtons(!0).defaultSubmit()},_onFieldValidated:function(b,c){var d=b.attr("data-bv-field"),e=this.options.fields[d].validators,f={},g=0,h={bv:this,field:d,element:b,validator:c,result:b.data("bv.response."+c)};if(c)switch(b.data("bv.result."+c)){case this.STATUS_INVALID:b.trigger(a.Event(this.options.events.validatorError),h);break;case this.STATUS_VALID:b.trigger(a.Event(this.options.events.validatorSuccess),h)}f[this.STATUS_NOT_VALIDATED]=0,f[this.STATUS_VALIDATING]=0,f[this.STATUS_INVALID]=0,f[this.STATUS_VALID]=0;for(var i in e)if(e[i].enabled!==!1){g++;var j=b.data("bv.result."+i);j&&f[j]++}f[this.STATUS_VALID]===g?(this.$invalidFields=this.$invalidFields.not(b),b.trigger(a.Event(this.options.events.fieldSuccess),h)):0===f[this.STATUS_NOT_VALIDATED]&&0===f[this.STATUS_VALIDATING]&&f[this.STATUS_INVALID]>0&&(this.$invalidFields=this.$invalidFields.add(b),b.trigger(a.Event(this.options.events.fieldError),h))},getFieldElements:function(b){return this._cacheFields[b]||(this._cacheFields[b]=this.options.fields[b]&&this.options.fields[b].selector?a(this.options.fields[b].selector):this.$form.find('[name="'+b+'"]')),this._cacheFields[b]},getOptions:function(a,b,c){if(!a)return this.options;if("object"==typeof a&&(a=a.attr("data-bv-field")),!this.options.fields[a])return null;var d=this.options.fields[a];return b?d.validators&&d.validators[b]?c?d.validators[b][c]:d.validators[b]:null:c?d[c]:d},disableSubmitButtons:function(a){return a?"disabled"!==this.options.live&&this.$form.find(this.options.submitButtons).attr("disabled","disabled"):this.$form.find(this.options.submitButtons).removeAttr("disabled"),this},validate:function(){if(!this.options.fields)return this;this.disableSubmitButtons(!0);for(var a in this.options.fields)this.validateField(a);return this._submit(),this},validateField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b)}if(0===c.length||this.options.fields[b]&&this.options.fields[b].enabled===!1)return this;for(var d,e,f=this,g=c.attr("type"),h="radio"===g||"checkbox"===g?1:c.length,i="radio"===g||"checkbox"===g,j=this.options.fields[b].validators,k="true"===this.options.fields[b].verbose||this.options.fields[b].verbose===!0||"true"===this.options.verbose||this.options.verbose===!0,l=0;h>l;l++){var m=c.eq(l);if(!this._isExcluded(m)){var n=!1;for(d in j){if(m.data("bv.dfs."+d)&&m.data("bv.dfs."+d).reject(),n)break;var o=m.data("bv.result."+d);if(o!==this.STATUS_VALID&&o!==this.STATUS_INVALID)if(j[d].enabled!==!1){if(m.data("bv.result."+d,this.STATUS_VALIDATING),e=a.fn.bootstrapValidator.validators[d].validate(this,m,j[d]),"object"==typeof e&&e.resolve)this.updateStatus(i?b:m,this.STATUS_VALIDATING,d),m.data("bv.dfs."+d,e),e.done(function(a,b,c){a.removeData("bv.dfs."+b).data("bv.response."+b,c),c.message&&f.updateMessage(a,b,c.message),f.updateStatus(i?a.attr("data-bv-field"):a,c.valid?f.STATUS_VALID:f.STATUS_INVALID,b),c.valid&&f._submitIfValid===!0?f._submit():c.valid||k||(n=!0)});else if("object"==typeof e&&void 0!==e.valid&&void 0!==e.message){if(m.data("bv.response."+d,e),this.updateMessage(i?b:m,d,e.message),this.updateStatus(i?b:m,e.valid?this.STATUS_VALID:this.STATUS_INVALID,d),!e.valid&&!k)break}else if("boolean"==typeof e&&(m.data("bv.response."+d,e),this.updateStatus(i?b:m,e?this.STATUS_VALID:this.STATUS_INVALID,d),!e&&!k))break}else this.updateStatus(i?b:m,this.STATUS_VALID,d);else this._onFieldValidated(m,d)}}}return this},updateMessage:function(b,c,d){var e=a([]);switch(typeof b){case"object":e=b,b=b.attr("data-bv-field");break;case"string":e=this.getFieldElements(b)}e.each(function(){a(this).data("bv.messages").find('.help-block[data-bv-validator="'+c+'"][data-bv-for="'+b+'"]').html(d)})},updateStatus:function(b,c,d){var e=a([]);switch(typeof b){case"object":e=b,b=b.attr("data-bv-field");break;case"string":e=this.getFieldElements(b)}c===this.STATUS_NOT_VALIDATED&&(this._submitIfValid=!1);for(var f=this,g=e.attr("type"),h=this.options.fields[b].group||this.options.group,i="radio"===g||"checkbox"===g?1:e.length,j=0;i>j;j++){var k=e.eq(j);if(!this._isExcluded(k)){var l=k.parents(h),m=k.data("bv.messages"),n=m.find('.help-block[data-bv-validator][data-bv-for="'+b+'"]'),o=d?n.filter('[data-bv-validator="'+d+'"]'):n,p=l.find('.form-control-feedback[data-bv-icon-for="'+b+'"]'),q="function"==typeof(this.options.fields[b].container||this.options.container)?(this.options.fields[b].container||this.options.container).call(this,k,this):this.options.fields[b].container||this.options.container,r=null;if(d)k.data("bv.result."+d,c);else for(var s in this.options.fields[b].validators)k.data("bv.result."+s,c);o.attr("data-bv-result",c);var t,u,v=k.parents(".tab-pane");switch(v&&(t=v.attr("id"))&&(u=a('a[href="#'+t+'"][data-toggle="tab"]').parent()),c){case this.STATUS_VALIDATING:r=null,this.disableSubmitButtons(!0),l.removeClass("has-success").removeClass("has-error"),p&&p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show(),u&&u.removeClass("bv-tab-success").removeClass("bv-tab-error");break;case this.STATUS_INVALID:r=!1,this.disableSubmitButtons(!0),l.removeClass("has-success").addClass("has-error"),p&&p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show(),u&&u.removeClass("bv-tab-success").addClass("bv-tab-error");break;case this.STATUS_VALID:r=0===n.filter('[data-bv-result="'+this.STATUS_NOT_VALIDATED+'"]').length?n.filter('[data-bv-result="'+this.STATUS_VALID+'"]').length===n.length:null,null!==r&&(this.disableSubmitButtons(this.$submitButton?!this.isValid():!r),p&&p.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(r?this.options.feedbackIcons.valid:this.options.feedbackIcons.invalid).show()),l.removeClass("has-error has-success").addClass(this.isValidContainer(l)?"has-success":"has-error"),u&&u.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(v)?"bv-tab-success":"bv-tab-error");break;case this.STATUS_NOT_VALIDATED:default:r=null,this.disableSubmitButtons(!1),l.removeClass("has-success").removeClass("has-error"),p&&p.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),u&&u.removeClass("bv-tab-success").removeClass("bv-tab-error")}switch(!0){case p&&"tooltip"===q:r===!1?p.css("cursor","pointer").tooltip("destroy").tooltip({container:"body",html:!0,placement:"top",title:n.filter('[data-bv-result="'+f.STATUS_INVALID+'"]').eq(0).html()}):p.tooltip("hide");break;case p&&"popover"===q:r===!1?p.css("cursor","pointer").popover("destroy").popover({container:"body",content:n.filter('[data-bv-result="'+f.STATUS_INVALID+'"]').eq(0).html(),html:!0,placement:"top",trigger:"hover click"}):p.popover("hide");break;default:c===this.STATUS_INVALID?o.show():o.hide()}k.trigger(a.Event(this.options.events.fieldStatus),{bv:this,field:b,element:k,status:c}),this._onFieldValidated(k,d)}}return this},isValid:function(){for(var a in this.options.fields)if(!this.isValidField(a))return!1;return!0},isValidField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field");break;case"string":c=this.getFieldElements(b)}if(0===c.length||null===this.options.fields[b]||this.options.fields[b].enabled===!1)return!0;for(var d,e,f,g=c.attr("type"),h="radio"===g||"checkbox"===g?1:c.length,i=0;h>i;i++)if(d=c.eq(i),!this._isExcluded(d))for(e in this.options.fields[b].validators)if(this.options.fields[b].validators[e].enabled!==!1&&(f=d.data("bv.result."+e),f!==this.STATUS_VALID))return!1;return!0},isValidContainer:function(b){var c=this,d={},e="string"==typeof b?a(b):b;if(0===e.length)return!0;e.find("[data-bv-field]").each(function(){var b=a(this),e=b.attr("data-bv-field");c._isExcluded(b)||d[e]||(d[e]=b)});for(var f in d){var g=d[f];if(g.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+f+'"]').filter('[data-bv-result="'+this.STATUS_INVALID+'"]').length>0)return!1}return!0},defaultSubmit:function(){this.$submitButton&&a("<input/>").attr("type","hidden").attr("data-bv-submit-hidden","").attr("name",this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form),this.$form.off("submit.bv").submit()},getInvalidFields:function(){return this.$invalidFields},getSubmitButton:function(){return this.$submitButton},getMessages:function(b,c){var d=this,e=[],f=a([]);switch(!0){case b&&"object"==typeof b:f=b;break;case b&&"string"==typeof b:var g=this.getFieldElements(b);if(g.length>0){var h=g.attr("type");f="radio"===h||"checkbox"===h?g.eq(0):g}break;default:f=this.$invalidFields}var i=c?'[data-bv-validator="'+c+'"]':"";return f.each(function(){e=e.concat(a(this).data("bv.messages").find('.help-block[data-bv-for="'+a(this).attr("data-bv-field")+'"][data-bv-result="'+d.STATUS_INVALID+'"]'+i).map(function(){var b=a(this).attr("data-bv-validator"),c=a(this).attr("data-bv-for");return d.options.fields[c].validators[b].enabled===!1?"":a(this).html()}).get())}),e},updateOption:function(a,b,c,d){return"object"==typeof a&&(a=a.attr("data-bv-field")),this.options.fields[a]&&this.options.fields[a].validators[b]&&(this.options.fields[a].validators[b][c]=d,this.updateStatus(a,this.STATUS_NOT_VALIDATED,b)),this},addField:function(b,c){var d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-bv-field")||b.attr("name");break;case"string":delete this._cacheFields[b],d=this.getFieldElements(b)}d.attr("data-bv-field",b);for(var e=d.attr("type"),f="radio"===e||"checkbox"===e?1:d.length,g=0;f>g;g++){var h=d.eq(g),i=this._parseOptions(h);i=null===i?c:a.extend(!0,c,i),this.options.fields[b]=a.extend(!0,this.options.fields[b],i),this._cacheFields[b]=this._cacheFields[b]?this._cacheFields[b].add(h):h,this._initField("checkbox"===e||"radio"===e?b:h)}return this.disableSubmitButtons(!1),this.$form.trigger(a.Event(this.options.events.fieldAdded),{field:b,element:d,options:this.options.fields[b]}),this},removeField:function(b){var c=a([]);switch(typeof b){case"object":c=b,b=b.attr("data-bv-field")||b.attr("name"),c.attr("data-bv-field",b);break;case"string":c=this.getFieldElements(b)}if(0===c.length)return this;for(var d=c.attr("type"),e="radio"===d||"checkbox"===d?1:c.length,f=0;e>f;f++){var g=c.eq(f);this.$invalidFields=this.$invalidFields.not(g),this._cacheFields[b]=this._cacheFields[b].not(g)}return this._cacheFields[b]&&0!==this._cacheFields[b].length||delete this.options.fields[b],("checkbox"===d||"radio"===d)&&this._initField(b),this.disableSubmitButtons(!1),this.$form.trigger(a.Event(this.options.events.fieldRemoved),{field:b,element:c}),this},resetField:function(b,c){var d=a([]);switch(typeof b){case"object":d=b,b=b.attr("data-bv-field");break;case"string":d=this.getFieldElements(b)}var e=d.length;if(this.options.fields[b])for(var f=0;e>f;f++)for(var g in this.options.fields[b].validators)d.eq(f).removeData("bv.dfs."+g);if(this.updateStatus(b,this.STATUS_NOT_VALIDATED),c){var h=d.attr("type");"radio"===h||"checkbox"===h?d.removeAttr("checked").removeAttr("selected"):d.val("")}return this},resetForm:function(b){for(var c in this.options.fields)this.resetField(c,b);return this.$invalidFields=a([]),this.$submitButton=null,this.disableSubmitButtons(!1),this},revalidateField:function(a){return this.updateStatus(a,this.STATUS_NOT_VALIDATED).validateField(a),this},enableFieldValidators:function(a,b,c){var d=this.options.fields[a].validators;if(c&&d&&d[c]&&d[c].enabled!==b)this.options.fields[a].validators[c].enabled=b,this.updateStatus(a,this.STATUS_NOT_VALIDATED,c);else if(!c&&this.options.fields[a].enabled!==b){this.options.fields[a].enabled=b;for(var e in d)this.enableFieldValidators(a,b,e)}return this},getDynamicOption:function(b,c){var d="string"==typeof b?this.getFieldElements(b):b,e=d.val();if("function"==typeof c)return a.fn.bootstrapValidator.helpers.call(c,[e,this,d]);if("string"==typeof c){var f=this.getFieldElements(c);return f.length?f.val():a.fn.bootstrapValidator.helpers.call(c,[e,this,d])||c}return null},destroy:function(){var b,c,d,e,f,g;for(b in this.options.fields){c=this.getFieldElements(b),g=this.options.fields[b].group||this.options.group;for(var h=0;h<c.length;h++){if(d=c.eq(h),d.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="'+b+'"]').remove().end().end().removeData("bv.messages").parents(g).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"),f=d.parents(g).find('i[data-bv-icon-for="'+b+'"]')){var i="function"==typeof(this.options.fields[b].container||this.options.container)?(this.options.fields[b].container||this.options.container).call(this,d,this):this.options.fields[b].container||this.options.container;switch(i){case"tooltip":f.tooltip("destroy").remove();break;case"popover":f.popover("destroy").remove();break;default:f.remove()}}for(e in this.options.fields[b].validators)d.data("bv.dfs."+e)&&d.data("bv.dfs."+e).reject(),d.removeData("bv.result."+e).removeData("bv.response."+e).removeData("bv.dfs."+e),"function"==typeof a.fn.bootstrapValidator.validators[e].destroy&&a.fn.bootstrapValidator.validators[e].destroy(this,d,this.options.fields[b].validators[e])}}this.disableSubmitButtons(!1),this.$hiddenButton.remove(),this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")}},a.fn.bootstrapValidator=function(c){var d=arguments;return this.each(function(){var e=a(this),f=e.data("bootstrapValidator"),g="object"==typeof c&&c;f||(f=new b(this,g),e.data("bootstrapValidator",f)),"string"==typeof c&&f[c].apply(f,Array.prototype.slice.call(d,1))})},a.fn.bootstrapValidator.DEFAULT_OPTIONS={elementClass:"bv-form",message:"This value is not valid",group:".form-group",container:null,threshold:null,excluded:[":disabled",":hidden",":not(:visible)"],feedbackIcons:{valid:null,invalid:null,validating:null},submitButtons:'[type="submit"]',live:"enabled",fields:null,events:{formInit:"init.form.bv",formError:"error.form.bv",formSuccess:"success.form.bv",fieldAdded:"added.field.bv",fieldRemoved:"removed.field.bv",fieldInit:"init.field.bv",fieldError:"error.field.bv",fieldSuccess:"success.field.bv",fieldStatus:"status.field.bv",validatorError:"error.validator.bv",validatorSuccess:"success.validator.bv"},verbose:!0},a.fn.bootstrapValidator.validators={},a.fn.bootstrapValidator.i18n={},a.fn.bootstrapValidator.Constructor=b,a.fn.bootstrapValidator.helpers={call:function(a,b){if("function"==typeof a)return a.apply(this,b);if("string"==typeof a){"()"===a.substring(a.length-2)&&(a=a.substring(0,a.length-2));for(var c=a.split("."),d=c.pop(),e=window,f=0;f<c.length;f++)e=e[c[f]];return"undefined"==typeof e[d]?null:e[d].apply(this,b)}},format:function(b,c){a.isArray(c)||(c=[c]);for(var d in c)b=b.replace("%s",c[d]);return b},date:function(a,b,c,d){if(isNaN(a)||isNaN(b)||isNaN(c))return!1;if(c.length>2||b.length>2||a.length>4)return!1;if(c=parseInt(c,10),b=parseInt(b,10),a=parseInt(a,10),1e3>a||a>9999||0>=b||b>12)return!1;var e=[31,28,31,30,31,30,31,31,30,31,30,31];if((a%400===0||a%100!==0&&a%4===0)&&(e[1]=29),0>=c||c>e[b-1])return!1;if(d===!0){var f=new Date,g=f.getFullYear(),h=f.getMonth(),i=f.getDate();return g>a||a===g&&h>b-1||a===g&&b-1===h&&i>c}return!0},luhn:function(a){for(var b=a.length,c=0,d=[[0,1,2,3,4,5,6,7,8,9],[0,2,4,6,8,1,3,5,7,9]],e=0;b--;)e+=d[c][parseInt(a.charAt(b),10)],c^=1;return e%10===0&&e>0},mod11And10:function(a){for(var b=5,c=a.length,d=0;c>d;d++)b=(2*(b||10)%11+parseInt(a.charAt(d),10))%10;return 1===b},mod37And36:function(a,b){b=b||"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";for(var c=b.length,d=a.length,e=Math.floor(c/2),f=0;d>f;f++)e=(2*(e||c)%(c+1)+b.indexOf(a.charAt(f)))%c;return 1===e}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.base64=a.extend(a.fn.bootstrapValidator.i18n.base64||{},{"default":"Please enter a valid base 64 encoded"}),a.fn.bootstrapValidator.validators.base64={validate:function(a,b){var c=b.val();return""===c?!0:/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.between=a.extend(a.fn.bootstrapValidator.i18n.between||{},{"default":"Please enter a value between %s and %s",notInclusive:"Please enter a value between %s and %s strictly"}),a.fn.bootstrapValidator.validators.between={html5Attributes:{message:"message",min:"min",max:"max",inclusive:"inclusive"},enableByHtml5:function(a){return"range"===a.attr("type")?{min:a.attr("min"),max:a.attr("max")}:!1},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!a.isNumeric(e))return!1;var f=a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min),g=a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:e>=f&&g>=e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.between["default"],[f,g])}:{valid:e>f&&g>e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.between.notInclusive,[f,g])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.validators.blank={validate:function(){return!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.callback=a.extend(a.fn.bootstrapValidator.i18n.callback||{},{"default":"Please enter a valid value"}),a.fn.bootstrapValidator.validators.callback={html5Attributes:{message:"message",callback:"callback"},validate:function(b,c,d){var e=c.val(),f=new a.Deferred,g={valid:!0};if(d.callback){var h=a.fn.bootstrapValidator.helpers.call(d.callback,[e,b,c]);g="boolean"==typeof h?{valid:h}:h}return f.resolve(c,"callback",g),f}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.choice=a.extend(a.fn.bootstrapValidator.i18n.choice||{},{"default":"Please enter a valid value",less:"Please choose %s options at minimum",more:"Please choose %s options at maximum",between:"Please choose %s - %s options"}),a.fn.bootstrapValidator.validators.choice={html5Attributes:{message:"message",min:"min",max:"max"},validate:function(b,c,d){var e=c.is("select")?b.getFieldElements(c.attr("data-bv-field")).find("option").filter(":selected").length:b.getFieldElements(c.attr("data-bv-field")).filter(":checked").length,f=d.min?a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min):null,g=d.max?a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max):null,h=!0,i=d.message||a.fn.bootstrapValidator.i18n.choice["default"];switch((f&&e<parseInt(f,10)||g&&e>parseInt(g,10))&&(h=!1),!0){case!!f&&!!g:i=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.choice.between,[parseInt(f,10),parseInt(g,10)]);break;case!!f:i=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.choice.less,parseInt(f,10));break;case!!g:i=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.choice.more,parseInt(g,10))}return{valid:h,message:i}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.creditCard=a.extend(a.fn.bootstrapValidator.i18n.creditCard||{},{"default":"Please enter a valid credit card number"}),a.fn.bootstrapValidator.validators.creditCard={validate:function(b,c){var d=c.val();if(""===d)return!0;if(/[^0-9-\s]+/.test(d))return!1;if(d=d.replace(/\D/g,""),!a.fn.bootstrapValidator.helpers.luhn(d))return!1;var e,f,g={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}};for(e in g)for(f in g[e].prefix)if(d.substr(0,g[e].prefix[f].length)===g[e].prefix[f]&&-1!==a.inArray(d.length,g[e].length))return!0;return!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.cusip=a.extend(a.fn.bootstrapValidator.i18n.cusip||{},{"default":"Please enter a valid CUSIP number"}),a.fn.bootstrapValidator.validators.cusip={validate:function(b,c){var d=c.val();if(""===d)return!0;if(d=d.toUpperCase(),!/^[0-9A-Z]{9}$/.test(d))return!1;for(var e=a.map(d.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),f=e.length,g=0,h=0;f-1>h;h++){var i=parseInt(e[h],10);h%2!==0&&(i*=2),i>9&&(i-=9),g+=i}return g=(10-g%10)%10,g===e[f-1]}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.cvv=a.extend(a.fn.bootstrapValidator.i18n.cvv||{},{"default":"Please enter a valid CVV number"}),a.fn.bootstrapValidator.validators.cvv={html5Attributes:{message:"message",ccfield:"creditCardField"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!/^[0-9]{3,4}$/.test(e))return!1;if(!d.creditCardField)return!0;var f=b.getFieldElements(d.creditCardField).val();if(""===f)return!0;f=f.replace(/\D/g,"");var g,h,i={AMERICAN_EXPRESS:{length:[15],prefix:["34","37"]},DINERS_CLUB:{length:[14],prefix:["300","301","302","303","304","305","36"]},DINERS_CLUB_US:{length:[16],prefix:["54","55"]},DISCOVER:{length:[16],prefix:["6011","622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925","644","645","646","647","648","649","65"]},JCB:{length:[16],prefix:["3528","3529","353","354","355","356","357","358"]},LASER:{length:[16,17,18,19],prefix:["6304","6706","6771","6709"]},MAESTRO:{length:[12,13,14,15,16,17,18,19],prefix:["5018","5020","5038","6304","6759","6761","6762","6763","6764","6765","6766"]},MASTERCARD:{length:[16],prefix:["51","52","53","54","55"]},SOLO:{length:[16,18,19],prefix:["6334","6767"]},UNIONPAY:{length:[16,17,18,19],prefix:["622126","622127","622128","622129","62213","62214","62215","62216","62217","62218","62219","6222","6223","6224","6225","6226","6227","6228","62290","62291","622920","622921","622922","622923","622924","622925"]},VISA:{length:[16],prefix:["4"]}},j=null;for(g in i)for(h in i[g].prefix)if(f.substr(0,i[g].prefix[h].length)===i[g].prefix[h]&&-1!==a.inArray(f.length,i[g].length)){j=g;break}return null===j?!1:"AMERICAN_EXPRESS"===j?4===e.length:3===e.length}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.date=a.extend(a.fn.bootstrapValidator.i18n.date||{},{"default":"Please enter a valid date"}),a.fn.bootstrapValidator.validators.date={html5Attributes:{message:"message",format:"format",separator:"separator"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;d.format=d.format||"MM/DD/YYYY","date"===c.attr("type")&&(d.format="YYYY-MM-DD");var f=d.format.split(" "),g=f[0],h=f.length>1?f[1]:null,i=f.length>2?f[2]:null,j=e.split(" "),k=j[0],l=j.length>1?j[1]:null;if(f.length!==j.length)return!1;var m=d.separator;if(m||(m=-1!==k.indexOf("/")?"/":-1!==k.indexOf("-")?"-":null),null===m||-1===k.indexOf(m))return!1;if(k=k.split(m),g=g.split(m),k.length!==g.length)return!1;var n=k[a.inArray("YYYY",g)],o=k[a.inArray("MM",g)],p=k[a.inArray("DD",g)];if(!n||!o||!p||4!==n.length)return!1;var q=null,r=null,s=null;if(h){if(h=h.split(":"),l=l.split(":"),h.length!==l.length)return!1;if(r=l.length>0?l[0]:null,q=l.length>1?l[1]:null,s=l.length>2?l[2]:null){if(isNaN(s)||s.length>2)return!1;if(s=parseInt(s,10),0>s||s>60)return!1}if(r){if(isNaN(r)||r.length>2)return!1;if(r=parseInt(r,10),0>r||r>=24||i&&r>12)return!1}if(q){if(isNaN(q)||q.length>2)return!1;if(q=parseInt(q,10),0>q||q>59)return!1}}return a.fn.bootstrapValidator.helpers.date(n,o,p)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.different=a.extend(a.fn.bootstrapValidator.i18n.different||{},{"default":"Please enter a different value"}),a.fn.bootstrapValidator.validators.different={html5Attributes:{message:"message",field:"field"},validate:function(a,b,c){var d=b.val();if(""===d)return!0;for(var e=c.field.split(","),f=!0,g=0;g<e.length;g++){var h=a.getFieldElements(e[g]);if(null!=h&&0!==h.length){var i=h.val();d===i?f=!1:""!==i&&a.updateStatus(h,a.STATUS_VALID,"different")}}return f}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.digits=a.extend(a.fn.bootstrapValidator.i18n.digits||{},{"default":"Please enter only digits"}),a.fn.bootstrapValidator.validators.digits={validate:function(a,b){var c=b.val();return""===c?!0:/^\d+$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.ean=a.extend(a.fn.bootstrapValidator.i18n.ean||{},{"default":"Please enter a valid EAN number"}),a.fn.bootstrapValidator.validators.ean={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^(\d{8}|\d{12}|\d{13})$/.test(c))return!1;for(var d=c.length,e=0,f=8===d?[3,1]:[1,3],g=0;d-1>g;g++)e+=parseInt(c.charAt(g),10)*f[g%2];return e=(10-e%10)%10,e+""===c.charAt(d-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.emailAddress=a.extend(a.fn.bootstrapValidator.i18n.emailAddress||{},{"default":"Please enter a valid email address"}),a.fn.bootstrapValidator.validators.emailAddress={html5Attributes:{message:"message",multiple:"multiple",separator:"separator"},enableByHtml5:function(a){return"email"===a.attr("type")},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/,f=c.multiple===!0||"true"===c.multiple;if(f){for(var g=c.separator||/[,;]/,h=this._splitEmailAddresses(d,g),i=0;i<h.length;i++)if(!e.test(h[i]))return!1;return!0}return e.test(d)},_splitEmailAddresses:function(a,b){for(var c=a.split(/"/),d=c.length,e=[],f="",g=0;d>g;g++)if(g%2===0){var h=c[g].split(b),i=h.length;if(1===i)f+=h[0];else{e.push(f+h[0]);for(var j=1;i-1>j;j++)e.push(h[j]);f=h[i-1]}}else f+='"'+c[g],d-1>g&&(f+='"');return e.push(f),e}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.file=a.extend(a.fn.bootstrapValidator.i18n.file||{},{"default":"Please choose a valid file"}),a.fn.bootstrapValidator.validators.file={html5Attributes:{extension:"extension",maxsize:"maxSize",minsize:"minSize",message:"message",type:"type"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f,g=d.extension?d.extension.toLowerCase().split(","):null,h=d.type?d.type.toLowerCase().split(","):null,i=window.File&&window.FileList&&window.FileReader;if(i)for(var j=c.get(0).files,k=j.length,l=0;k>l;l++){if(d.minSize&&j[l].size<parseInt(d.minSize,10))return!1;if(d.maxSize&&j[l].size>parseInt(d.maxSize,10))return!1;if(f=j[l].name.substr(j[l].name.lastIndexOf(".")+1),g&&-1===a.inArray(f.toLowerCase(),g))return!1;if(j[l].type&&h&&-1===a.inArray(j[l].type.toLowerCase(),h))return!1}else if(f=e.substr(e.lastIndexOf(".")+1),g&&-1===a.inArray(f.toLowerCase(),g))return!1;return!0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.greaterThan=a.extend(a.fn.bootstrapValidator.i18n.greaterThan||{},{"default":"Please enter a value greater than or equal to %s",notInclusive:"Please enter a value greater than %s"}),a.fn.bootstrapValidator.validators.greaterThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("type"),c=a.attr("min");return c&&"date"!==b?{value:c}:!1},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!a.isNumeric(e))return!1;var f=a.isNumeric(d.value)?d.value:b.getDynamicOption(c,d.value);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:e>=f,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.greaterThan["default"],f)}:{valid:e>f,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.greaterThan.notInclusive,f)}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.grid=a.extend(a.fn.bootstrapValidator.i18n.grid||{},{"default":"Please enter a valid GRId number"}),a.fn.bootstrapValidator.validators.grid={validate:function(b,c){var d=c.val();return""===d?!0:(d=d.toUpperCase(),/^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(d)?(d=d.replace(/\s/g,"").replace(/-/g,""),"GRID:"===d.substr(0,5)&&(d=d.substr(5)),a.fn.bootstrapValidator.helpers.mod37And36(d)):!1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.hex=a.extend(a.fn.bootstrapValidator.i18n.hex||{},{"default":"Please enter a valid hexadecimal number"}),a.fn.bootstrapValidator.validators.hex={validate:function(a,b){var c=b.val();return""===c?!0:/^[0-9a-fA-F]+$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.hexColor=a.extend(a.fn.bootstrapValidator.i18n.hexColor||{},{"default":"Please enter a valid hex color"}),a.fn.bootstrapValidator.validators.hexColor={enableByHtml5:function(a){return"color"===a.attr("type")},validate:function(a,b){var c=b.val();return""===c?!0:/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.iban=a.extend(a.fn.bootstrapValidator.i18n.iban||{},{"default":"Please enter a valid IBAN number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid IBAN number in %s",countries:{AD:"Andorra",AE:"United Arab Emirates",AL:"Albania",AO:"Angola",AT:"Austria",AZ:"Azerbaijan",BA:"Bosnia and Herzegovina",BE:"Belgium",BF:"Burkina Faso",BG:"Bulgaria",BH:"Bahrain",BI:"Burundi",BJ:"Benin",BR:"Brazil",CH:"Switzerland",CI:"Ivory Coast",CM:"Cameroon",CR:"Costa Rica",CV:"Cape Verde",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",DO:"Dominica",DZ:"Algeria",EE:"Estonia",ES:"Spain",FI:"Finland",FO:"Faroe Islands",FR:"France",GB:"United Kingdom",GE:"Georgia",GI:"Gibraltar",GL:"Greenland",GR:"Greece",GT:"Guatemala",HR:"Croatia",HU:"Hungary",IE:"Ireland",IL:"Israel",IR:"Iran",IS:"Iceland",IT:"Italy",JO:"Jordan",KW:"Kuwait",KZ:"Kazakhstan",LB:"Lebanon",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MC:"Monaco",MD:"Moldova",ME:"Montenegro",MG:"Madagascar",MK:"Macedonia",ML:"Mali",MR:"Mauritania",MT:"Malta",MU:"Mauritius",MZ:"Mozambique",NL:"Netherlands",NO:"Norway",PK:"Pakistan",PL:"Poland",PS:"Palestine",PT:"Portugal",QA:"Qatar",RO:"Romania",RS:"Serbia",SA:"Saudi Arabia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",SN:"Senegal",TN:"Tunisia",TR:"Turkey",VG:"Virgin Islands, British"}}),a.fn.bootstrapValidator.validators.iban={html5Attributes:{message:"message",country:"country"},REGEX:{AD:"AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",AE:"AE[0-9]{2}[0-9]{3}[0-9]{16}",AL:"AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",AO:"AO[0-9]{2}[0-9]{21}",AT:"AT[0-9]{2}[0-9]{5}[0-9]{11}",AZ:"AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",BA:"BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",BE:"BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",BF:"BF[0-9]{2}[0-9]{23}",BG:"BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",BH:"BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",BI:"BI[0-9]{2}[0-9]{12}",BJ:"BJ[0-9]{2}[A-Z]{1}[0-9]{23}",BR:"BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",CH:"CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",CI:"CI[0-9]{2}[A-Z]{1}[0-9]{23}",CM:"CM[0-9]{2}[0-9]{23}",CR:"CR[0-9]{2}[0-9]{3}[0-9]{14}",CV:"CV[0-9]{2}[0-9]{21}",CY:"CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",CZ:"CZ[0-9]{2}[0-9]{20}",DE:"DE[0-9]{2}[0-9]{8}[0-9]{10}",DK:"DK[0-9]{2}[0-9]{14}",DO:"DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",DZ:"DZ[0-9]{2}[0-9]{20}",EE:"EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",ES:"ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",FI:"FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",FO:"FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",FR:"FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",GB:"GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",GE:"GE[0-9]{2}[A-Z]{2}[0-9]{16}",GI:"GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",GL:"GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",GR:"GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",GT:"GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",HR:"HR[0-9]{2}[0-9]{7}[0-9]{10}",HU:"HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",IE:"IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",IL:"IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",IR:"IR[0-9]{2}[0-9]{22}",IS:"IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",IT:"IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",JO:"JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",KW:"KW[0-9]{2}[A-Z]{4}[0-9]{22}",KZ:"KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LB:"LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",LI:"LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",LT:"LT[0-9]{2}[0-9]{5}[0-9]{11}",LU:"LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",LV:"LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",MC:"MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",MD:"MD[0-9]{2}[A-Z0-9]{20}",ME:"ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",MG:"MG[0-9]{2}[0-9]{23}",MK:"MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",ML:"ML[0-9]{2}[A-Z]{1}[0-9]{23}",MR:"MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",MT:"MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",MU:"MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",MZ:"MZ[0-9]{2}[0-9]{21}",NL:"NL[0-9]{2}[A-Z]{4}[0-9]{10}",NO:"NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",PK:"PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",PL:"PL[0-9]{2}[0-9]{8}[0-9]{16}",PS:"PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",PT:"PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",QA:"QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",RO:"RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",RS:"RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",SA:"SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",SE:"SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",SI:"SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",SK:"SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",SM:"SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",SN:"SN[0-9]{2}[A-Z]{1}[0-9]{23}",TN:"TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",TR:"TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",VG:"VG[0-9]{2}[A-Z]{4}[0-9]{16}"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;e=e.replace(/[^a-zA-Z0-9]/g,"").toUpperCase();var f=d.country;if(f?"string"==typeof f&&this.REGEX[f]||(f=b.getDynamicOption(c,f)):f=e.substr(0,2),!this.REGEX[f])return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.iban.countryNotSupported,f)};if(!new RegExp("^"+this.REGEX[f]+"$").test(e))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.iban.country,a.fn.bootstrapValidator.i18n.iban.countries[f])};e=e.substr(4)+e.substr(0,4),e=a.map(e.split(""),function(a){var b=a.charCodeAt(0);return b>="A".charCodeAt(0)&&b<="Z".charCodeAt(0)?b-"A".charCodeAt(0)+10:a}),e=e.join("");for(var g=parseInt(e.substr(0,1),10),h=e.length,i=1;h>i;++i)g=(10*g+parseInt(e.substr(i,1),10))%97;return{valid:1===g,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.iban.country,a.fn.bootstrapValidator.i18n.iban.countries[f])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.id=a.extend(a.fn.bootstrapValidator.i18n.id||{},{"default":"Please enter a valid identification number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid identification number in %s",countries:{BA:"Bosnia and Herzegovina",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CL:"Chile",CN:"China",CZ:"Czech Republic",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",HR:"Croatia",IE:"Ireland",IS:"Iceland",LT:"Lithuania",LV:"Latvia",ME:"Montenegro",MK:"Macedonia",NL:"Netherlands",RO:"Romania",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",SM:"San Marino",TH:"Thailand",ZA:"South Africa"}}),a.fn.bootstrapValidator.validators.id={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BA","BG","BR","CH","CL","CN","CZ","DK","EE","ES","FI","HR","IE","IS","LT","LV","ME","MK","NL","RO","RS","SE","SI","SK","SM","TH","ZA"],validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=d.country;if(f?("string"!=typeof f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)):f=e.substr(0,2),-1===a.inArray(f,this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.id.countryNotSupported,f)};var g=["_",f.toLowerCase()].join("");return this[g](e)?!0:{valid:!1,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.id.country,a.fn.bootstrapValidator.i18n.id.countries[f.toUpperCase()])}},_validateJMBG:function(a,b){if(!/^\d{13}$/.test(a))return!1;var c=parseInt(a.substr(0,2),10),d=parseInt(a.substr(2,2),10),e=(parseInt(a.substr(4,3),10),parseInt(a.substr(7,2),10)),f=parseInt(a.substr(12,1),10);if(c>31||d>12)return!1;for(var g=0,h=0;6>h;h++)g+=(7-h)*(parseInt(a.charAt(h),10)+parseInt(a.charAt(h+6),10));if(g=11-g%11,(10===g||11===g)&&(g=0),g!==f)return!1;switch(b.toUpperCase()){case"BA":return e>=10&&19>=e;case"MK":return e>=41&&49>=e;case"ME":return e>=20&&29>=e;case"RS":return e>=70&&99>=e;case"SI":return e>=50&&59>=e;default:return!0}},_ba:function(a){return this._validateJMBG(a,"BA")},_mk:function(a){return this._validateJMBG(a,"MK")},_me:function(a){return this._validateJMBG(a,"ME")},_rs:function(a){return this._validateJMBG(a,"RS")},_si:function(a){return this._validateJMBG(a,"SI")},_bg:function(b){if(!/^\d{10}$/.test(b)&&!/^\d{6}\s\d{3}\s\d{1}$/.test(b))return!1;b=b.replace(/\s/g,"");var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(d>40?(c+=100,d-=40):d>20&&(c-=100,d-=20),!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;for(var f=0,g=[2,4,8,5,10,9,7,3,6],h=0;9>h;h++)f+=parseInt(b.charAt(h),10)*g[h];return f=f%11%10,f+""===b.substr(9,1)},_br:function(a){if(/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(a))return!1;if(!/^\d{11}$/.test(a)&&!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(a))return!1;a=a.replace(/\./g,"").replace(/-/g,"");for(var b=0,c=0;9>c;c++)b+=(10-c)*parseInt(a.charAt(c),10);if(b=11-b%11,(10===b||11===b)&&(b=0),b+""!==a.charAt(9))return!1;var d=0;for(c=0;10>c;c++)d+=(11-c)*parseInt(a.charAt(c),10);return d=11-d%11,(10===d||11===d)&&(d=0),d+""===a.charAt(10)},_ch:function(a){if(!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(a))return!1;a=a.replace(/\D/g,"").substr(3);for(var b=a.length,c=0,d=8===b?[3,1]:[1,3],e=0;b-1>e;e++)c+=parseInt(a.charAt(e),10)*d[e%2];return c=10-c%10,c+""===a.charAt(b-1)},_cl:function(a){if(!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(a))return!1;for(a=a.replace(/\-/g,"");a.length<9;)a="0"+a;for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,11===b?b=0:10===b&&(b="K"),b+""===a.charAt(8).toUpperCase()},_cn:function(b){if(b=b.trim(),!/^\d{15}$/.test(b)&&!/^\d{17}[\dXx]{1}$/.test(b))return!1;var c={11:{0:[0],1:[[0,9],[11,17]],2:[0,28,29]},12:{0:[0],1:[[0,16]],2:[0,21,23,25]},13:{0:[0],1:[[0,5],7,8,21,[23,33],[81,85]],2:[[0,5],[7,9],[23,25],27,29,30,81,83],3:[[0,4],[21,24]],4:[[0,4],6,21,[23,35],81],5:[[0,3],[21,35],81,82],6:[[0,4],[21,38],[81,84]],7:[[0,3],5,6,[21,33]],8:[[0,4],[21,28]],9:[[0,3],[21,30],[81,84]],10:[[0,3],[22,26],28,81,82],11:[[0,2],[21,28],81,82]},14:{0:[0],1:[0,1,[5,10],[21,23],81],2:[[0,3],11,12,[21,27]],3:[[0,3],11,21,22],4:[[0,2],11,21,[23,31],81],5:[[0,2],21,22,24,25,81],6:[[0,3],[21,24]],7:[[0,2],[21,29],81],8:[[0,2],[21,30],81,82],9:[[0,2],[21,32],81],10:[[0,2],[21,34],81,82],11:[[0,2],[21,30],81,82],23:[[0,3],22,23,[25,30],32,33]},15:{0:[0],1:[[0,5],[21,25]],2:[[0,7],[21,23]],3:[[0,4]],4:[[0,4],[21,26],[28,30]],5:[[0,2],[21,26],81],6:[[0,2],[21,27]],7:[[0,3],[21,27],[81,85]],8:[[0,2],[21,26]],9:[[0,2],[21,29],81],22:[[0,2],[21,24]],25:[[0,2],[22,31]],26:[[0,2],[24,27],[29,32],34],28:[0,1,[22,27]],29:[0,[21,23]]},21:{0:[0],1:[[0,6],[11,14],[22,24],81],2:[[0,4],[11,13],24,[81,83]],3:[[0,4],11,21,23,81],4:[[0,4],11,[21,23]],5:[[0,5],21,22],6:[[0,4],24,81,82],7:[[0,3],11,26,27,81,82],8:[[0,4],11,81,82],9:[[0,5],11,21,22],10:[[0,5],11,21,81],11:[[0,3],21,22],12:[[0,2],4,21,23,24,81,82],13:[[0,3],21,22,24,81,82],14:[[0,4],21,22,81]},22:{0:[0],1:[[0,6],12,22,[81,83]],2:[[0,4],11,21,[81,84]],3:[[0,3],22,23,81,82],4:[[0,3],21,22],5:[[0,3],21,23,24,81,82],6:[[0,2],4,5,[21,23],25,81],7:[[0,2],[21,24],81],8:[[0,2],21,22,81,82],24:[[0,6],24,26]},23:{0:[0],1:[[0,12],21,[23,29],[81,84]],2:[[0,8],21,[23,25],27,[29,31],81],3:[[0,7],21,81,82],4:[[0,7],21,22],5:[[0,3],5,6,[21,24]],6:[[0,6],[21,24]],7:[[0,16],22,81],8:[[0,5],11,22,26,28,33,81,82],9:[[0,4],21],10:[[0,5],24,25,81,[83,85]],11:[[0,2],21,23,24,81,82],12:[[0,2],[21,26],[81,83]],27:[[0,4],[21,23]]},31:{0:[0],1:[0,1,[3,10],[12,20]],2:[0,30]},32:{0:[0],1:[[0,7],11,[13,18],24,25],2:[[0,6],11,81,82],3:[[0,5],11,12,[21,24],81,82],4:[[0,2],4,5,11,12,81,82],5:[[0,9],[81,85]],6:[[0,2],11,12,21,23,[81,84]],7:[0,1,3,5,6,[21,24]],8:[[0,4],11,26,[29,31]],9:[[0,3],[21,25],28,81,82],10:[[0,3],11,12,23,81,84,88],11:[[0,2],11,12,[81,83]],12:[[0,4],[81,84]],13:[[0,2],11,[21,24]]},33:{0:[0],1:[[0,6],[8,10],22,27,82,83,85],2:[0,1,[3,6],11,12,25,26,[81,83]],3:[[0,4],22,24,[26,29],81,82],4:[[0,2],11,21,24,[81,83]],5:[[0,3],[21,23]],6:[[0,2],21,24,[81,83]],7:[[0,3],23,26,27,[81,84]],8:[[0,3],22,24,25,81],9:[[0,3],21,22],10:[[0,4],[21,24],81,82],11:[[0,2],[21,27],81]},34:{0:[0],1:[[0,4],11,[21,24],81],2:[[0,4],7,8,[21,23],25],3:[[0,4],11,[21,23]],4:[[0,6],21],5:[[0,4],6,[21,23]],6:[[0,4],21],7:[[0,3],11,21],8:[[0,3],11,[22,28],81],10:[[0,4],[21,24]],11:[[0,3],22,[24,26],81,82],12:[[0,4],21,22,25,26,82],13:[[0,2],[21,24]],14:[[0,2],[21,24]],15:[[0,3],[21,25]],16:[[0,2],[21,23]],17:[[0,2],[21,23]],18:[[0,2],[21,25],81]},35:{0:[0],1:[[0,5],11,[21,25],28,81,82],2:[[0,6],[11,13]],3:[[0,5],22],4:[[0,3],21,[23,30],81],5:[[0,5],21,[24,27],[81,83]],6:[[0,3],[22,29],81],7:[[0,2],[21,25],[81,84]],8:[[0,2],[21,25],81],9:[[0,2],[21,26],81,82]},36:{0:[0],1:[[0,5],11,[21,24]],2:[[0,3],22,81],3:[[0,2],13,[21,23]],4:[[0,3],21,[23,30],81,82],5:[[0,2],21],6:[[0,2],22,81],7:[[0,2],[21,35],81,82],8:[[0,3],[21,30],81],9:[[0,2],[21,26],[81,83]],10:[[0,2],[21,30]],11:[[0,2],[21,30],81]},37:{0:[0],1:[[0,5],12,13,[24,26],81],2:[[0,3],5,[11,14],[81,85]],3:[[0,6],[21,23]],4:[[0,6],81],5:[[0,3],[21,23]],6:[[0,2],[11,13],34,[81,87]],7:[[0,5],24,25,[81,86]],8:[[0,2],11,[26,32],[81,83]],9:[[0,3],11,21,23,82,83],10:[[0,2],[81,83]],11:[[0,3],21,22],12:[[0,3]],13:[[0,2],11,12,[21,29]],14:[[0,2],[21,28],81,82],15:[[0,2],[21,26],81],16:[[0,2],[21,26]],17:[[0,2],[21,28]]},41:{0:[0],1:[[0,6],8,22,[81,85]],2:[[0,5],11,[21,25]],3:[[0,7],11,[22,29],81],4:[[0,4],11,[21,23],25,81,82],5:[[0,3],5,6,22,23,26,27,81],6:[[0,3],11,21,22],7:[[0,4],11,21,[24,28],81,82],8:[[0,4],11,[21,23],25,[81,83]],9:[[0,2],22,23,[26,28]],10:[[0,2],[23,25],81,82],11:[[0,4],[21,23]],12:[[0,2],21,22,24,81,82],13:[[0,3],[21,30],81],14:[[0,3],[21,26],81],15:[[0,3],[21,28]],16:[[0,2],[21,28],81],17:[[0,2],[21,29]],90:[0,1]},42:{0:[0],1:[[0,7],[11,17]],2:[[0,5],22,81],3:[[0,3],[21,25],81],5:[[0,6],[25,29],[81,83]],6:[[0,2],6,7,[24,26],[82,84]],7:[[0,4]],8:[[0,2],4,21,22,81],9:[[0,2],[21,23],81,82,84],10:[[0,3],[22,24],81,83,87],11:[[0,2],[21,27],81,82],12:[[0,2],[21,24],81],13:[[0,3],21,81],28:[[0,2],22,23,[25,28]],90:[0,[4,6],21]},43:{0:[0],1:[[0,5],11,12,21,22,24,81],2:[[0,4],11,21,[23,25],81],3:[[0,2],4,21,81,82],4:[0,1,[5,8],12,[21,24],26,81,82],5:[[0,3],11,[21,25],[27,29],81],6:[[0,3],11,21,23,24,26,81,82],7:[[0,3],[21,26],81],8:[[0,2],11,21,22],9:[[0,3],[21,23],81],10:[[0,3],[21,28],81],11:[[0,3],[21,29]],12:[[0,2],[21,30],81],13:[[0,2],21,22,81,82],31:[0,1,[22,27],30]},44:{0:[0],1:[[0,7],[11,16],83,84],2:[[0,5],21,22,24,29,32,33,81,82],3:[0,1,[3,8]],4:[[0,4]],5:[0,1,[6,15],23,82,83],6:[0,1,[4,8]],7:[0,1,[3,5],81,[83,85]],8:[[0,4],11,23,25,[81,83]],9:[[0,3],23,[81,83]],12:[[0,3],[23,26],83,84],13:[[0,3],[22,24],81],14:[[0,2],[21,24],26,27,81],15:[[0,2],21,23,81],16:[[0,2],[21,25]],17:[[0,2],21,23,81],18:[[0,3],21,23,[25,27],81,82],19:[0],20:[0],51:[[0,3],21,22],52:[[0,3],21,22,24,81],53:[[0,2],[21,23],81]},45:{0:[0],1:[[0,9],[21,27]],2:[[0,5],[21,26]],3:[[0,5],11,12,[21,32]],4:[0,1,[3,6],11,[21,23],81],5:[[0,3],12,21],6:[[0,3],21,81],7:[[0,3],21,22],8:[[0,4],21,81],9:[[0,3],[21,24],81],10:[[0,2],[21,31]],11:[[0,2],[21,23]],12:[[0,2],[21,29],81],13:[[0,2],[21,24],81],14:[[0,2],[21,25],81]},46:{0:[0],1:[0,1,[5,8]],2:[0,1],3:[0,[21,23]],90:[[0,3],[5,7],[21,39]]},50:{0:[0],1:[[0,19]],2:[0,[22,38],[40,43]],3:[0,[81,84]]},51:{0:[0],1:[0,1,[4,8],[12,15],[21,24],29,31,32,[81,84]],3:[[0,4],11,21,22],4:[[0,3],11,21,22],5:[[0,4],21,22,24,25],6:[0,1,3,23,26,[81,83]],7:[0,1,3,4,[22,27],81],8:[[0,2],11,12,[21,24]],9:[[0,4],[21,23]],10:[[0,2],11,24,25,28],11:[[0,2],[11,13],23,24,26,29,32,33,81],13:[[0,4],[21,25],81],14:[[0,2],[21,25]],15:[[0,3],[21,29]],16:[[0,3],[21,23],81],17:[[0,3],[21,25],81],18:[[0,3],[21,27]],19:[[0,3],[21,23]],20:[[0,2],21,22,81],32:[0,[21,33]],33:[0,[21,38]],34:[0,1,[22,37]]},52:{0:[0],1:[[0,3],[11,15],[21,23],81],2:[0,1,3,21,22],3:[[0,3],[21,30],81,82],4:[[0,2],[21,25]],5:[[0,2],[21,27]],6:[[0,3],[21,28]],22:[0,1,[22,30]],23:[0,1,[22,28]],24:[0,1,[22,28]],26:[0,1,[22,36]],27:[[0,2],22,23,[25,32]]},53:{0:[0],1:[[0,3],[11,14],21,22,[24,29],81],3:[[0,2],[21,26],28,81],4:[[0,2],[21,28]],5:[[0,2],[21,24]],6:[[0,2],[21,30]],7:[[0,2],[21,24]],8:[[0,2],[21,29]],9:[[0,2],[21,27]],23:[0,1,[22,29],31],25:[[0,4],[22,32]],26:[0,1,[21,28]],27:[0,1,[22,30]],28:[0,1,22,23],29:[0,1,[22,32]],31:[0,2,3,[22,24]],34:[0,[21,23]],33:[0,21,[23,25]],35:[0,[21,28]]},54:{0:[0],1:[[0,2],[21,27]],21:[0,[21,29],32,33],22:[0,[21,29],[31,33]],23:[0,1,[22,38]],24:[0,[21,31]],25:[0,[21,27]],26:[0,[21,27]]},61:{0:[0],1:[[0,4],[11,16],22,[24,26]],2:[[0,4],22],3:[[0,4],[21,24],[26,31]],4:[[0,4],[22,31],81],5:[[0,2],[21,28],81,82],6:[[0,2],[21,32]],7:[[0,2],[21,30]],8:[[0,2],[21,31]],9:[[0,2],[21,29]],10:[[0,2],[21,26]]},62:{0:[0],1:[[0,5],11,[21,23]],2:[0,1],3:[[0,2],21],4:[[0,3],[21,23]],5:[[0,3],[21,25]],6:[[0,2],[21,23]],7:[[0,2],[21,25]],8:[[0,2],[21,26]],9:[[0,2],[21,24],81,82],10:[[0,2],[21,27]],11:[[0,2],[21,26]],12:[[0,2],[21,28]],24:[0,21,[24,29]],26:[0,21,[23,30]],29:[0,1,[21,27]],30:[0,1,[21,27]]},63:{0:[0],1:[[0,5],[21,23]],2:[0,2,[21,25]],21:[0,[21,23],[26,28]],22:[0,[21,24]],23:[0,[21,24]],25:[0,[21,25]],26:[0,[21,26]],27:[0,1,[21,26]],28:[[0,2],[21,23]]},64:{0:[0],1:[0,1,[4,6],21,22,81],2:[[0,3],5,[21,23]],3:[[0,3],[21,24],81],4:[[0,2],[21,25]],5:[[0,2],21,22]},65:{0:[0],1:[[0,9],21],2:[[0,5]],21:[0,1,22,23],22:[0,1,22,23],23:[[0,3],[23,25],27,28],28:[0,1,[22,29]],29:[0,1,[22,29]],30:[0,1,[22,24]],31:[0,1,[21,31]],32:[0,1,[21,27]],40:[0,2,3,[21,28]],42:[[0,2],21,[23,26]],43:[0,1,[21,26]],90:[[0,4]],27:[[0,2],22,23]},71:{0:[0]},81:{0:[0]},82:{0:[0]}},d=parseInt(b.substr(0,2),10),e=parseInt(b.substr(2,2),10),f=parseInt(b.substr(4,2),10);if(!c[d]||!c[d][e])return!1;for(var g=!1,h=c[d][e],i=0;i<h.length;i++)if(a.isArray(h[i])&&h[i][0]<=f&&f<=h[i][1]||!a.isArray(h[i])&&f===h[i]){g=!0;break}if(!g)return!1;var j;j=18===b.length?b.substr(6,8):"19"+b.substr(6,6);var k=parseInt(j.substr(0,4),10),l=parseInt(j.substr(4,2),10),m=parseInt(j.substr(6,2),10);if(!a.fn.bootstrapValidator.helpers.date(k,l,m))return!1;if(18===b.length){var n=0,o=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];for(i=0;17>i;i++)n+=parseInt(b.charAt(i),10)*o[i];n=(12-n%11)%11;var p="X"!==b.charAt(17).toUpperCase()?parseInt(b.charAt(17),10):10;return p===n}return!0},_cz:function(b){if(!/^\d{9,10}$/.test(b))return!1;var c=1900+parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10)%50%20,e=parseInt(b.substr(4,2),10);if(9===b.length){if(c>=1980&&(c-=100),c>1953)return!1}else 1954>c&&(c+=100);if(!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;if(10===b.length){var f=parseInt(b.substr(0,9),10)%11;return 1985>c&&(f%=10),f+""===b.substr(9,1)}return!0},_dk:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))return!1;b=b.replace(/-/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);switch(!0){case-1!=="5678".indexOf(b.charAt(6))&&e>=58:e+=1800;break;case-1!=="0123".indexOf(b.charAt(6)):case-1!=="49".indexOf(b.charAt(6))&&e>=37:e+=1900;break;default:e+=2e3}return a.fn.bootstrapValidator.helpers.date(e,d,c)},_ee:function(a){return this._lt(a)},_es:function(a){if(!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(a)&&!/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(a))return!1;a=a.replace(/-/g,"");var b="XYZ".indexOf(a.charAt(0));-1!==b&&(a=b+a.substr(1)+"");var c=parseInt(a.substr(0,8),10);return c="TRWAGMYFPDXBNJZSQVHLCKE"[c%23],c===a.substr(8,1)},_fi:function(b){if(!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(b))return!1;var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10),f={"+":1800,"-":1900,A:2e3};if(e=f[b.charAt(6)]+e,!a.fn.bootstrapValidator.helpers.date(e,d,c))return!1;var g=parseInt(b.substr(7,3),10);if(2>g)return!1;var h=b.substr(0,6)+b.substr(7,3)+"";return h=parseInt(h,10),"0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(h%31)===b.charAt(10)},_hr:function(b){return/^[0-9]{11}$/.test(b)?a.fn.bootstrapValidator.helpers.mod11And10(b):!1},_ie:function(a){if(!/^\d{7}[A-W][AHWTX]?$/.test(a))return!1;var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d),10)*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return 9!==a.length||"A"!==a.charAt(8)&&"H"!==a.charAt(8)?a.charAt(7)===b(a.substr(0,7)):a.charAt(7)===b(a.substr(0,7)+a.substr(8)+"")},_is:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(b))return!1;b=b.replace(/-/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10),f=parseInt(b.charAt(9),10);if(e=9===f?1900+e:100*(20+f)+e,!a.fn.bootstrapValidator.helpers.date(e,d,c,!0))return!1;for(var g=0,h=[3,2,7,6,5,4,3,2],i=0;8>i;i++)g+=parseInt(b.charAt(i),10)*h[i];return g=11-g%11,g+""===b.charAt(8)},_lt:function(b){if(!/^[0-9]{11}$/.test(b))return!1;var c=parseInt(b.charAt(0),10),d=parseInt(b.substr(1,2),10),e=parseInt(b.substr(3,2),10),f=parseInt(b.substr(5,2),10),g=c%2===0?17+c/2:17+(c+1)/2;if(d=100*g+d,!a.fn.bootstrapValidator.helpers.date(d,e,f,!0))return!1;for(var h=0,i=[1,2,3,4,5,6,7,8,9,1],j=0;10>j;j++)h+=parseInt(b.charAt(j),10)*i[j];if(h%=11,10!==h)return h+""===b.charAt(10);for(h=0,i=[3,4,5,6,7,8,9,1,2,3],j=0;10>j;j++)h+=parseInt(b.charAt(j),10)*i[j];return h%=11,10===h&&(h=0),h+""===b.charAt(10)},_lv:function(b){if(!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(b))return!1;b=b.replace(/\D/g,"");var c=parseInt(b.substr(0,2),10),d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(e=e+1800+100*parseInt(b.charAt(6),10),!a.fn.bootstrapValidator.helpers.date(e,d,c,!0))return!1;for(var f=0,g=[10,5,8,4,2,1,6,3,7,9],h=0;10>h;h++)f+=parseInt(b.charAt(h),10)*g[h];return f=(f+1)%11%10,f+""===b.charAt(10)},_nl:function(a){for(;a.length<9;)a="0"+a;if(!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(a))return!1;if(a=a.replace(/\./g,""),0===parseInt(a,10))return!1;for(var b=0,c=a.length,d=0;c-1>d;d++)b+=(9-d)*parseInt(a.charAt(d),10);return b%=11,10===b&&(b=0),b+""===a.charAt(c-1)},_ro:function(b){if(!/^[0-9]{13}$/.test(b))return!1;var c=parseInt(b.charAt(0),10);if(0===c||7===c||8===c)return!1;var d=parseInt(b.substr(1,2),10),e=parseInt(b.substr(3,2),10),f=parseInt(b.substr(5,2),10),g={1:1900,2:1900,3:1800,4:1800,5:2e3,6:2e3};if(f>31&&e>12)return!1;if(9!==c&&(d=g[c+""]+d,!a.fn.bootstrapValidator.helpers.date(d,e,f)))return!1;for(var h=0,i=[2,7,9,1,4,6,3,5,8,2,7,9],j=b.length,k=0;j-1>k;k++)h+=parseInt(b.charAt(k),10)*i[k];return h%=11,10===h&&(h=1),h+""===b.charAt(j-1)},_se:function(b){if(!/^[0-9]{10}$/.test(b)&&!/^[0-9]{6}[-|+][0-9]{4}$/.test(b))return!1;b=b.replace(/[^0-9]/g,"");var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);return a.fn.bootstrapValidator.helpers.date(c,d,e)?a.fn.bootstrapValidator.helpers.luhn(b):!1},_sk:function(a){return this._cz(a)},_sm:function(a){return/^\d{5}$/.test(a)},_th:function(a){if(13!==a.length)return!1;for(var b=0,c=0;12>c;c++)b+=parseInt(a.charAt(c),10)*(13-c);return(11-b%11)%10===parseInt(a.charAt(12),10)},_za:function(b){if(!/^[0-9]{10}[0|1][8|9][0-9]$/.test(b))return!1;var c=parseInt(b.substr(0,2),10),d=(new Date).getFullYear()%100,e=parseInt(b.substr(2,2),10),f=parseInt(b.substr(4,2),10);return c=c>=d?c+1900:c+2e3,a.fn.bootstrapValidator.helpers.date(c,e,f)?a.fn.bootstrapValidator.helpers.luhn(b):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.identical=a.extend(a.fn.bootstrapValidator.i18n.identical||{},{"default":"Please enter the same value"}),a.fn.bootstrapValidator.validators.identical={html5Attributes:{message:"message",field:"field"},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e=a.getFieldElements(c.field);return null===e||0===e.length?!0:d===e.val()?(a.updateStatus(c.field,a.STATUS_VALID,"identical"),!0):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.imei=a.extend(a.fn.bootstrapValidator.i18n.imei||{},{"default":"Please enter a valid IMEI number"}),a.fn.bootstrapValidator.validators.imei={validate:function(b,c){var d=c.val();if(""===d)return!0;switch(!0){case/^\d{15}$/.test(d):case/^\d{2}-\d{6}-\d{6}-\d{1}$/.test(d):case/^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(d):return d=d.replace(/[^0-9]/g,""),a.fn.bootstrapValidator.helpers.luhn(d);case/^\d{14}$/.test(d):case/^\d{16}$/.test(d):case/^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(d):case/^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(d):return!0;default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.imo=a.extend(a.fn.bootstrapValidator.i18n.imo||{},{"default":"Please enter a valid IMO number"}),a.fn.bootstrapValidator.validators.imo={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^IMO \d{7}$/i.test(c))return!1;for(var d=0,e=c.replace(/^.*(\d{7})$/,"$1"),f=6;f>=1;f--)d+=e.slice(6-f,-f)*(f+1);return d%10===parseInt(e.charAt(6),10)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.integer=a.extend(a.fn.bootstrapValidator.i18n.integer||{},{"default":"Please enter a valid number"}),a.fn.bootstrapValidator.validators.integer={enableByHtml5:function(a){return"number"===a.attr("type")&&(void 0===a.attr("step")||a.attr("step")%1===0)},validate:function(a,b){if(this.enableByHtml5(b)&&b.get(0).validity&&b.get(0).validity.badInput===!0)return!1;var c=b.val();return""===c?!0:/^(?:-?(?:0|[1-9][0-9]*))$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.ip=a.extend(a.fn.bootstrapValidator.i18n.ip||{},{"default":"Please enter a valid IP address",ipv4:"Please enter a valid IPv4 address",ipv6:"Please enter a valid IPv6 address"}),a.fn.bootstrapValidator.validators.ip={html5Attributes:{message:"message",ipv4:"ipv4",ipv6:"ipv6"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;d=a.extend({},{ipv4:!0,ipv6:!0},d);var f,g=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,h=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,i=!1;switch(!0){case d.ipv4&&!d.ipv6:i=g.test(e),f=d.message||a.fn.bootstrapValidator.i18n.ip.ipv4;break;case!d.ipv4&&d.ipv6:i=h.test(e),f=d.message||a.fn.bootstrapValidator.i18n.ip.ipv6;break;case d.ipv4&&d.ipv6:default:i=g.test(e)||h.test(e),f=d.message||a.fn.bootstrapValidator.i18n.ip["default"]}return{valid:i,message:f}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.isbn=a.extend(a.fn.bootstrapValidator.i18n.isbn||{},{"default":"Please enter a valid ISBN number"}),a.fn.bootstrapValidator.validators.isbn={validate:function(a,b){var c=b.val();if(""===c)return!0;var d;switch(!0){case/^\d{9}[\dX]$/.test(c):case 13===c.length&&/^(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 13===c.length&&/^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN10";break;case/^(978|979)\d{9}[\dX]$/.test(c):case 17===c.length&&/^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(c):case 17===c.length&&/^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(c):d="ISBN13";break;default:return!1}c=c.replace(/[^0-9X]/gi,"");var e,f,g=c.split(""),h=g.length,i=0;switch(d){case"ISBN10":for(i=0,e=0;h-1>e;e++)i+=parseInt(g[e],10)*(10-e);return f=11-i%11,11===f?f=0:10===f&&(f="X"),f+""===g[h-1];case"ISBN13":for(i=0,e=0;h-1>e;e++)i+=e%2===0?parseInt(g[e],10):3*parseInt(g[e],10);return f=10-i%10,10===f&&(f="0"),f+""===g[h-1];default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.isin=a.extend(a.fn.bootstrapValidator.i18n.isin||{},{"default":"Please enter a valid ISIN number"}),a.fn.bootstrapValidator.validators.isin={COUNTRY_CODES:"AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",validate:function(a,b){var c=b.val();if(""===c)return!0;c=c.toUpperCase();var d=new RegExp("^("+this.COUNTRY_CODES+")[0-9A-Z]{10}$");if(!d.test(c))return!1;for(var e="",f=c.length,g=0;f-1>g;g++){var h=c.charCodeAt(g);e+=h>57?(h-55).toString():c.charAt(g)}var i="",j=e.length,k=j%2!==0?0:1;for(g=0;j>g;g++)i+=parseInt(e[g],10)*(g%2===k?2:1)+"";var l=0;for(g=0;g<i.length;g++)l+=parseInt(i.charAt(g),10);return l=(10-l%10)%10,l+""===c.charAt(f-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.ismn=a.extend(a.fn.bootstrapValidator.i18n.ismn||{},{"default":"Please enter a valid ISMN number"}),a.fn.bootstrapValidator.validators.ismn={validate:function(a,b){var c=b.val();if(""===c)return!0;var d;switch(!0){case/^M\d{9}$/.test(c):case/^M-\d{4}-\d{4}-\d{1}$/.test(c):case/^M\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN10";break;case/^9790\d{9}$/.test(c):case/^979-0-\d{4}-\d{4}-\d{1}$/.test(c):case/^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(c):d="ISMN13";break;default:return!1}"ISMN10"===d&&(c="9790"+c.substr(1)),c=c.replace(/[^0-9]/gi,"");for(var e=c.length,f=0,g=[1,3],h=0;e-1>h;h++)f+=parseInt(c.charAt(h),10)*g[h%2];return f=10-f%10,f+""===c.charAt(e-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.issn=a.extend(a.fn.bootstrapValidator.i18n.issn||{},{"default":"Please enter a valid ISSN number"}),a.fn.bootstrapValidator.validators.issn={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^\d{4}\-\d{3}[\dX]$/.test(c))return!1;c=c.replace(/[^0-9X]/gi,"");var d=c.split(""),e=d.length,f=0;"X"===d[7]&&(d[7]=10);for(var g=0;e>g;g++)f+=parseInt(d[g],10)*(8-g);return f%11===0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.lessThan=a.extend(a.fn.bootstrapValidator.i18n.lessThan||{},{"default":"Please enter a value less than or equal to %s",notInclusive:"Please enter a value less than %s"}),a.fn.bootstrapValidator.validators.lessThan={html5Attributes:{message:"message",value:"value",inclusive:"inclusive"},enableByHtml5:function(a){var b=a.attr("type"),c=a.attr("max");return c&&"date"!==b?{value:c}:!1},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(!a.isNumeric(e))return!1;var f=a.isNumeric(d.value)?d.value:b.getDynamicOption(c,d.value);return e=parseFloat(e),d.inclusive===!0||void 0===d.inclusive?{valid:f>=e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.lessThan["default"],f)}:{valid:f>e,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.lessThan.notInclusive,f)}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.mac=a.extend(a.fn.bootstrapValidator.i18n.mac||{},{"default":"Please enter a valid MAC address"}),a.fn.bootstrapValidator.validators.mac={validate:function(a,b){var c=b.val();return""===c?!0:/^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(c)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.meid=a.extend(a.fn.bootstrapValidator.i18n.meid||{},{"default":"Please enter a valid MEID number"}),a.fn.bootstrapValidator.validators.meid={validate:function(b,c){var d=c.val();if(""===d)return!0;switch(!0){case/^[0-9A-F]{15}$/i.test(d):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(d):case/^\d{19}$/.test(d):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(d):var e=d.charAt(d.length-1);if(d=d.replace(/[- ]/g,""),d.match(/^\d*$/i))return a.fn.bootstrapValidator.helpers.luhn(d);d=d.slice(0,-1);for(var f="",g=1;13>=g;g+=2)f+=(2*parseInt(d.charAt(g),16)).toString(16);var h=0;for(g=0;g<f.length;g++)h+=parseInt(f.charAt(g),16);return h%10===0?"0"===e:e===(2*(10*Math.floor((h+10)/10)-h)).toString(16);case/^[0-9A-F]{14}$/i.test(d):case/^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(d):case/^\d{18}$/.test(d):case/^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(d):return!0;default:return!1}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.notEmpty=a.extend(a.fn.bootstrapValidator.i18n.notEmpty||{},{"default":"Please enter a value"}),a.fn.bootstrapValidator.validators.notEmpty={enableByHtml5:function(a){var b=a.attr("required")+"";return"required"===b||"true"===b},validate:function(b,c){var d=c.attr("type");return"radio"===d||"checkbox"===d?b.getFieldElements(c.attr("data-bv-field")).filter(":checked").length>0:"number"===d&&c.get(0).validity&&c.get(0).validity.badInput===!0?!0:""!==a.trim(c.val())}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.numeric=a.extend(a.fn.bootstrapValidator.i18n.numeric||{},{"default":"Please enter a valid float number"}),a.fn.bootstrapValidator.validators.numeric={html5Attributes:{message:"message",separator:"separator"},enableByHtml5:function(a){return"number"===a.attr("type")&&void 0!==a.attr("step")&&a.attr("step")%1!==0},validate:function(a,b,c){if(this.enableByHtml5(b)&&b.get(0).validity&&b.get(0).validity.badInput===!0)return!1;var d=b.val();if(""===d)return!0;var e=c.separator||".";return"."!==e&&(d=d.replace(e,".")),!isNaN(parseFloat(d))&&isFinite(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.phone=a.extend(a.fn.bootstrapValidator.i18n.phone||{},{"default":"Please enter a valid phone number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid phone number in %s",countries:{BR:"Brazil",CN:"China",CZ:"Czech Republic",DK:"Denmark",ES:"Spain",FR:"France",GB:"United Kingdom",MA:"Morocco",PK:"Pakistan",RO:"Romania",RU:"Russia",SK:"Slovakia",TH:"Thailand",US:"USA",VE:"Venezuela"}}),a.fn.bootstrapValidator.validators.phone={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BR","CN","CZ","DK","ES","FR","GB","MA","PK","RO","RU","SK","TH","US","VE"],validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=d.country;if(("string"!=typeof f||-1===a.inArray(f,this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)),!f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.phone.countryNotSupported,f)};var g=!0;switch(f.toUpperCase()){case"BR":e=a.trim(e),g=/^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(e);break;case"CN":e=a.trim(e),g=/^((00|\+)?(86(?:-| )))?((\d{11})|(\d{3}[- ]{1}\d{4}[- ]{1}\d{4})|((\d{2,4}[- ]){1}(\d{7,8}|(\d{3,4}[- ]{1}\d{4}))([- ]{1}\d{1,4})?))$/.test(e);break;case"CZ":g=/^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(e);break;case"DK":e=a.trim(e),g=/^(\+45|0045|\(45\))?\s?[2-9](\s?\d){7}$/.test(e);break;case"ES":e=a.trim(e),g=/^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/.test(e);break;case"FR":e=a.trim(e),g=/^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(e);break;case"GB":e=a.trim(e),g=/^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(e);break;case"MA":e=a.trim(e),g=/^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(e);break;case"PK":e=a.trim(e),g=/^0?3[0-9]{2}[0-9]{7}$/.test(e);break;case"RO":g=/^(\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\s|\.|\-)?([0-9]{3}(\s|\.|\-|)){2}$/g.test(e);break;case"RU":g=/^((8|\+7|007)[\-\.\/ ]?)?([\(\/\.]?\d{3}[\)\/\.]?[\-\.\/ ]?)?[\d\-\.\/ ]{7,10}$/g.test(e);break;case"SK":g=/^(((00)([- ]?)|\+)(420)([- ]?))?((\d{3})([- ]?)){2}(\d{3})$/.test(e);break;case"TH":g=/^0\(?([6|8-9]{2})*-([0-9]{3})*-([0-9]{4})$/.test(e);break;case"VE":e=a.trim(e),g=/^0(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/.test(e);break;case"US":default:e=e.replace(/\D/g,""),g=/^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(e)&&10===e.length}return{valid:g,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.phone.country,a.fn.bootstrapValidator.i18n.phone.countries[f])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.regexp=a.extend(a.fn.bootstrapValidator.i18n.regexp||{},{"default":"Please enter a value matching the pattern"}),a.fn.bootstrapValidator.validators.regexp={html5Attributes:{message:"message",regexp:"regexp"},enableByHtml5:function(a){var b=a.attr("pattern");return b?{regexp:b}:!1},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e="string"==typeof c.regexp?new RegExp(c.regexp):c.regexp;return e.test(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.remote=a.extend(a.fn.bootstrapValidator.i18n.remote||{},{"default":"Please enter a valid value"}),a.fn.bootstrapValidator.validators.remote={html5Attributes:{message:"message",name:"name",type:"type",url:"url",delay:"delay"},destroy:function(a,b){b.data("bv.remote.timer")&&(clearTimeout(b.data("bv.remote.timer")),b.removeData("bv.remote.timer"))},validate:function(b,c,d){function e(){var b=a.ajax({type:k,headers:l,url:j,dataType:"json",data:i});return b.then(function(a){a.valid=a.valid===!0||"true"===a.valid,g.resolve(c,"remote",a)}),g.fail(function(){b.abort()}),g}var f=c.val(),g=new a.Deferred;if(""===f)return g.resolve(c,"remote",{valid:!0}),g;var h=c.attr("data-bv-field"),i=d.data||{},j=d.url,k=d.type||"GET",l=d.headers||{};return"function"==typeof i&&(i=i.call(this,b)),"function"==typeof j&&(j=j.call(this,b)),i[d.name||h]=f,d.delay?(c.data("bv.remote.timer")&&clearTimeout(c.data("bv.remote.timer")),c.data("bv.remote.timer",setTimeout(e,d.delay)),g):e()}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.rtn=a.extend(a.fn.bootstrapValidator.i18n.rtn||{},{"default":"Please enter a valid RTN number"}),a.fn.bootstrapValidator.validators.rtn={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^\d{9}$/.test(c))return!1;for(var d=0,e=0;e<c.length;e+=3)d+=3*parseInt(c.charAt(e),10)+7*parseInt(c.charAt(e+1),10)+parseInt(c.charAt(e+2),10);return 0!==d&&d%10===0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.sedol=a.extend(a.fn.bootstrapValidator.i18n.sedol||{},{"default":"Please enter a valid SEDOL number"}),a.fn.bootstrapValidator.validators.sedol={validate:function(a,b){var c=b.val();if(""===c)return!0;if(c=c.toUpperCase(),!/^[0-9A-Z]{7}$/.test(c))return!1;for(var d=0,e=[1,3,1,7,3,9,1],f=c.length,g=0;f-1>g;g++)d+=e[g]*parseInt(c.charAt(g),36);return d=(10-d%10)%10,d+""===c.charAt(f-1)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.siren=a.extend(a.fn.bootstrapValidator.i18n.siren||{},{"default":"Please enter a valid SIREN number"}),a.fn.bootstrapValidator.validators.siren={validate:function(b,c){var d=c.val();return""===d?!0:/^\d{9}$/.test(d)?a.fn.bootstrapValidator.helpers.luhn(d):!1}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.siret=a.extend(a.fn.bootstrapValidator.i18n.siret||{},{"default":"Please enter a valid SIRET number"}),a.fn.bootstrapValidator.validators.siret={validate:function(a,b){var c=b.val();if(""===c)return!0;for(var d,e=0,f=c.length,g=0;f>g;g++)d=parseInt(c.charAt(g),10),g%2===0&&(d=2*d,d>9&&(d-=9)),e+=d;return e%10===0}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.step=a.extend(a.fn.bootstrapValidator.i18n.step||{},{"default":"Please enter a valid step of %s"}),a.fn.bootstrapValidator.validators.step={html5Attributes:{message:"message",base:"baseValue",step:"step"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;if(d=a.extend({},{baseValue:0,step:1},d),e=parseFloat(e),!a.isNumeric(e))return!1;var f=function(a,b){var c=Math.pow(10,b);a*=c;var d=a>0|-(0>a),e=a%1===.5*d;return e?(Math.floor(a)+(d>0))/c:Math.round(a)/c},g=function(a,b){if(0===b)return 1;var c=(a+"").split("."),d=(b+"").split("."),e=(1===c.length?0:c[1].length)+(1===d.length?0:d[1].length);return f(a-b*Math.floor(a/b),e)},h=g(e-d.baseValue,d.step);return{valid:0===h||h===d.step,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.step["default"],[d.step])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.stringCase=a.extend(a.fn.bootstrapValidator.i18n.stringCase||{},{"default":"Please enter only lowercase characters",upper:"Please enter only uppercase characters"}),a.fn.bootstrapValidator.validators.stringCase={html5Attributes:{message:"message","case":"case"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=(d["case"]||"lower").toLowerCase();return{valid:"upper"===f?e===e.toUpperCase():e===e.toLowerCase(),message:d.message||("upper"===f?a.fn.bootstrapValidator.i18n.stringCase.upper:a.fn.bootstrapValidator.i18n.stringCase["default"])}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.stringLength=a.extend(a.fn.bootstrapValidator.i18n.stringLength||{},{"default":"Please enter a value with valid length",less:"Please enter less than %s characters",more:"Please enter more than %s characters",between:"Please enter value between %s and %s characters long"}),a.fn.bootstrapValidator.validators.stringLength={html5Attributes:{message:"message",min:"min",max:"max"},enableByHtml5:function(b){var c={},d=b.attr("maxlength"),e=b.attr("minlength");return d&&(c.max=parseInt(d,10)),e&&(c.min=parseInt(e,10)),a.isEmptyObject(c)?!1:c},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=a.isNumeric(d.min)?d.min:b.getDynamicOption(c,d.min),g=a.isNumeric(d.max)?d.max:b.getDynamicOption(c,d.max),h=e.length,i=!0,j=d.message||a.fn.bootstrapValidator.i18n.stringLength["default"];switch((f&&h<parseInt(f,10)||g&&h>parseInt(g,10))&&(i=!1),!0){case!!f&&!!g:j=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.stringLength.between,[parseInt(f,10),parseInt(g,10)]);break;case!!f:j=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.stringLength.more,parseInt(f,10));break;case!!g:j=a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.stringLength.less,parseInt(g,10))}return{valid:i,message:j}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.uri=a.extend(a.fn.bootstrapValidator.i18n.uri||{},{"default":"Please enter a valid URI"}),a.fn.bootstrapValidator.validators.uri={html5Attributes:{message:"message",allowlocal:"allowLocal",protocol:"protocol"},enableByHtml5:function(a){return"url"===a.attr("type")},validate:function(a,b,c){var d=b.val();if(""===d)return!0;var e=c.allowLocal===!0||"true"===c.allowLocal,f=(c.protocol||"http, https, ftp").split(",").join("|").replace(/\s/g,""),g=new RegExp("^(?:(?:"+f+")://)(?:\\S+(?::\\S*)?@)?(?:"+(e?"":"(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})")+"(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))"+(e?"?":"")+")(?::\\d{2,5})?(?:/[^\\s]*)?$","i");return g.test(d)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.uuid=a.extend(a.fn.bootstrapValidator.i18n.uuid||{},{"default":"Please enter a valid UUID number",version:"Please enter a valid UUID version %s number"}),a.fn.bootstrapValidator.validators.uuid={html5Attributes:{message:"message",version:"version"},validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f={3:/^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,4:/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,5:/^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,all:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i},g=d.version?d.version+"":"all";return{valid:null===f[g]?!0:f[g].test(e),message:d.version?a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.uuid.version,d.version):d.message||a.fn.bootstrapValidator.i18n.uuid["default"]}}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.vat=a.extend(a.fn.bootstrapValidator.i18n.vat||{},{"default":"Please enter a valid VAT number",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid VAT number in %s",countries:{AT:"Austria",BE:"Belgium",BG:"Bulgaria",BR:"Brazil",CH:"Switzerland",CY:"Cyprus",CZ:"Czech Republic",DE:"Germany",DK:"Denmark",EE:"Estonia",ES:"Spain",FI:"Finland",FR:"France",GB:"United Kingdom",GR:"Greek",EL:"Greek",HU:"Hungary",HR:"Croatia",IE:"Ireland",IS:"Iceland",IT:"Italy",LT:"Lithuania",LU:"Luxembourg",LV:"Latvia",MT:"Malta",NL:"Netherlands",NO:"Norway",PL:"Poland",PT:"Portugal",RO:"Romania",RU:"Russia",RS:"Serbia",SE:"Sweden",SI:"Slovenia",SK:"Slovakia",VE:"Venezuela",ZA:"South Africa"}}),a.fn.bootstrapValidator.validators.vat={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["AT","BE","BG","BR","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","GB","GR","HR","HU","IE","IS","IT","LT","LU","LV","MT","NL","NO","PL","PT","RO","RU","RS","SE","SK","SI","VE","ZA"],validate:function(b,c,d){var e=c.val();if(""===e)return!0;var f=d.country;if(f?("string"!=typeof f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)):f=e.substr(0,2),-1===a.inArray(f,this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.vat.countryNotSupported,f)};var g=["_",f.toLowerCase()].join("");return this[g](e)?!0:{valid:!1,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.vat.country,a.fn.bootstrapValidator.i18n.vat.countries[f.toUpperCase()])}},_at:function(a){if(/^ATU[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^U[0-9]{8}$/.test(a))return!1;a=a.substr(1);for(var b=0,c=[1,2,1,2,1,2,1],d=0,e=0;7>e;e++)d=parseInt(a.charAt(e),10)*c[e],d>9&&(d=Math.floor(d/10)+d%10),b+=d;return b=10-(b+4)%10,10===b&&(b=0),b+""===a.substr(7,1)},_be:function(a){if(/^BE[0]{0,1}[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0]{0,1}[0-9]{9}$/.test(a))return!1;if(9===a.length&&(a="0"+a),"0"===a.substr(1,1))return!1;var b=parseInt(a.substr(0,8),10)+parseInt(a.substr(8,2),10);return b%97===0},_bg:function(b){if(/^BG[0-9]{9,10}$/.test(b)&&(b=b.substr(2)),!/^[0-9]{9,10}$/.test(b))return!1;var c=0,d=0;if(9===b.length){for(d=0;8>d;d++)c+=parseInt(b.charAt(d),10)*(d+1);if(c%=11,10===c)for(c=0,d=0;8>d;d++)c+=parseInt(b.charAt(d),10)*(d+3);return c%=10,c+""===b.substr(8)}if(10===b.length){var e=function(b){var c=parseInt(b.substr(0,2),10)+1900,d=parseInt(b.substr(2,2),10),e=parseInt(b.substr(4,2),10);if(d>40?(c+=100,d-=40):d>20&&(c-=100,d-=20),!a.fn.bootstrapValidator.helpers.date(c,d,e))return!1;for(var f=0,g=[2,4,8,5,10,9,7,3,6],h=0;9>h;h++)f+=parseInt(b.charAt(h),10)*g[h];return f=f%11%10,f+""===b.substr(9,1)},f=function(a){for(var b=0,c=[21,19,17,13,11,9,7,3,1],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%=10,b+""===a.substr(9,1)},g=function(a){for(var b=0,c=[4,3,2,7,6,5,4,3,2],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b?!1:(11===b&&(b=0),b+""===a.substr(9,1))};return e(b)||f(b)||g(b)}return!1},_br:function(a){if(""===a)return!0;var b=a.replace(/[^\d]+/g,"");if(""===b||14!==b.length)return!1;if("00000000000000"===b||"11111111111111"===b||"22222222222222"===b||"33333333333333"===b||"44444444444444"===b||"55555555555555"===b||"66666666666666"===b||"77777777777777"===b||"88888888888888"===b||"99999999999999"===b)return!1;for(var c=b.length-2,d=b.substring(0,c),e=b.substring(c),f=0,g=c-7,h=c;h>=1;h--)f+=parseInt(d.charAt(c-h),10)*g--,2>g&&(g=9);var i=2>f%11?0:11-f%11;if(i!==parseInt(e.charAt(0),10))return!1;for(c+=1,d=b.substring(0,c),f=0,g=c-7,h=c;h>=1;h--)f+=parseInt(d.charAt(c-h),10)*g--,2>g&&(g=9);return i=2>f%11?0:11-f%11,i===parseInt(e.charAt(1),10)},_ch:function(a){if(/^CHE[0-9]{9}(MWST)?$/.test(a)&&(a=a.substr(2)),!/^E[0-9]{9}(MWST)?$/.test(a))return!1;a=a.substr(1);for(var b=0,c=[5,4,3,2,7,6,5,4],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b?!1:(11===b&&(b=0),b+""===a.substr(8,1))},_cy:function(a){if(/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a)&&(a=a.substr(2)),!/^[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(a))return!1;if("12"===a.substr(0,2))return!1;for(var b=0,c={0:1,1:0,2:5,3:7,4:9,5:13,6:15,7:17,8:19,9:21},d=0;8>d;d++){var e=parseInt(a.charAt(d),10);d%2===0&&(e=c[e+""]),b+=e}return b="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[b%26],b+""===a.substr(8,1)},_cz:function(b){if(/^CZ[0-9]{8,10}$/.test(b)&&(b=b.substr(2)),!/^[0-9]{8,10}$/.test(b))return!1;var c=0,d=0;if(8===b.length){if(b.charAt(0)+""=="9")return!1;for(c=0,d=0;7>d;d++)c+=parseInt(b.charAt(d),10)*(8-d);return c=11-c%11,10===c&&(c=0),11===c&&(c=1),c+""===b.substr(7,1)}if(9===b.length&&b.charAt(0)+""=="6"){for(c=0,d=0;7>d;d++)c+=parseInt(b.charAt(d+1),10)*(8-d);return c=11-c%11,10===c&&(c=0),11===c&&(c=1),c=[8,7,6,5,4,3,2,1,0,9,10][c-1],c+""===b.substr(8,1)}if(9===b.length||10===b.length){var e=1900+parseInt(b.substr(0,2),10),f=parseInt(b.substr(2,2),10)%50%20,g=parseInt(b.substr(4,2),10);if(9===b.length){if(e>=1980&&(e-=100),e>1953)return!1}else 1954>e&&(e+=100);if(!a.fn.bootstrapValidator.helpers.date(e,f,g))return!1;if(10===b.length){var h=parseInt(b.substr(0,9),10)%11;return 1985>e&&(h%=10),h+""===b.substr(9,1)}return!0}return!1},_de:function(b){return/^DE[0-9]{9}$/.test(b)&&(b=b.substr(2)),/^[0-9]{9}$/.test(b)?a.fn.bootstrapValidator.helpers.mod11And10(b):!1},_dk:function(a){if(/^DK[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[2,7,6,5,4,3,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_ee:function(a){if(/^EE[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=0,c=[3,7,1,3,7,1,3,7,1],d=0;9>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%10===0},_es:function(a){if(/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a)&&(a=a.substr(2)),!/^[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(a))return!1;var b=function(a){var b=parseInt(a.substr(0,8),10);return b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1)},c=function(a){var b=["XYZ".indexOf(a.charAt(0)),a.substr(1)].join("");return b=parseInt(b,10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1)},d=function(a){var b,c=a.charAt(0);if(-1!=="KLM".indexOf(c))return b=parseInt(a.substr(1,8),10),b="TRWAGMYFPDXBNJZSQVHLCKE"[b%23],b+""===a.substr(8,1);if(-1!=="ABCDEFGHJNPQRSUVW".indexOf(c)){for(var d=0,e=[2,1,2,1,2,1,2],f=0,g=0;7>g;g++)f=parseInt(a.charAt(g+1),10)*e[g],f>9&&(f=Math.floor(f/10)+f%10),d+=f;return d=10-d%10,d+""===a.substr(8,1)||"JABCDEFGHI"[d]===a.substr(8,1)}return!1},e=a.charAt(0);return/^[0-9]$/.test(e)?b(a):/^[XYZ]$/.test(e)?c(a):d(a)},_fi:function(a){if(/^FI[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[7,9,10,5,8,4,2,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_fr:function(b){if(/^FR[0-9A-Z]{2}[0-9]{9}$/.test(b)&&(b=b.substr(2)),!/^[0-9A-Z]{2}[0-9]{9}$/.test(b))return!1;if(!a.fn.bootstrapValidator.helpers.luhn(b.substr(2)))return!1;if(/^[0-9]{2}$/.test(b.substr(0,2)))return b.substr(0,2)===parseInt(b.substr(2)+"12",10)%97+"";var c,d="0123456789ABCDEFGHJKLMNPQRSTUVWXYZ";return c=/^[0-9]{1}$/.test(b.charAt(0))?24*d.indexOf(b.charAt(0))+d.indexOf(b.charAt(1))-10:34*d.indexOf(b.charAt(0))+d.indexOf(b.charAt(1))-100,(parseInt(b.substr(2),10)+1+Math.floor(c/11))%11===c%11},_gb:function(a){if((/^GB[0-9]{9}$/.test(a)||/^GB[0-9]{12}$/.test(a)||/^GBGD[0-9]{3}$/.test(a)||/^GBHA[0-9]{3}$/.test(a)||/^GB(GD|HA)8888[0-9]{5}$/.test(a))&&(a=a.substr(2)),!(/^[0-9]{9}$/.test(a)||/^[0-9]{12}$/.test(a)||/^GD[0-9]{3}$/.test(a)||/^HA[0-9]{3}$/.test(a)||/^(GD|HA)8888[0-9]{5}$/.test(a)))return!1;var b=a.length;if(5===b){var c=a.substr(0,2),d=parseInt(a.substr(2),10);return"GD"===c&&500>d||"HA"===c&&d>=500}if(11===b&&("GD8888"===a.substr(0,6)||"HA8888"===a.substr(0,6)))return"GD"===a.substr(0,2)&&parseInt(a.substr(6,3),10)>=500||"HA"===a.substr(0,2)&&parseInt(a.substr(6,3),10)<500?!1:parseInt(a.substr(6,3),10)%97===parseInt(a.substr(9,2),10);if(9===b||12===b){for(var e=0,f=[8,7,6,5,4,3,2,10,1],g=0;9>g;g++)e+=parseInt(a.charAt(g),10)*f[g];return e%=97,parseInt(a.substr(0,3),10)>=100?0===e||42===e||55===e:0===e}return!0},_gr:function(a){if(/^(GR|EL)[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;8===a.length&&(a="0"+a);for(var b=0,c=[256,128,64,32,16,8,4,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=b%11%10,b+""===a.substr(8,1)},_el:function(a){return this._gr(a)},_hu:function(a){if(/^HU[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[9,7,3,1,9,7,3,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%10===0},_hr:function(b){return/^HR[0-9]{11}$/.test(b)&&(b=b.substr(2)),/^[0-9]{11}$/.test(b)?a.fn.bootstrapValidator.helpers.mod11And10(b):!1},_ie:function(a){if(/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(a))return!1;var b=function(a){for(;a.length<7;)a="0"+a;for(var b="WABCDEFGHIJKLMNOPQRSTUV",c=0,d=0;7>d;d++)c+=parseInt(a.charAt(d),10)*(8-d);return c+=9*b.indexOf(a.substr(7)),b[c%23]};return/^[0-9]+$/.test(a.substr(0,7))?a.charAt(7)===b(a.substr(0,7)+a.substr(8)+""):-1!=="ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(a.charAt(1))?a.charAt(7)===b(a.substr(2,5)+a.substr(0,1)+""):!0},_is:function(a){return/^IS[0-9]{5,6}$/.test(a)&&(a=a.substr(2)),/^[0-9]{5,6}$/.test(a)},_it:function(b){if(/^IT[0-9]{11}$/.test(b)&&(b=b.substr(2)),!/^[0-9]{11}$/.test(b))return!1;if(0===parseInt(b.substr(0,7),10))return!1;var c=parseInt(b.substr(7,3),10);return 1>c||c>201&&999!==c&&888!==c?!1:a.fn.bootstrapValidator.helpers.luhn(b)},_lt:function(a){if(/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a)&&(a=a.substr(2)),!/^([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(a))return!1;var b,c=a.length,d=0;for(b=0;c-1>b;b++)d+=parseInt(a.charAt(b),10)*(1+b%9);var e=d%11;if(10===e)for(d=0,b=0;c-1>b;b++)d+=parseInt(a.charAt(b),10)*(1+(b+2)%9);return e=e%11%10,e+""===a.charAt(c-1)},_lu:function(a){return/^LU[0-9]{8}$/.test(a)&&(a=a.substr(2)),/^[0-9]{8}$/.test(a)?parseInt(a.substr(0,6),10)%89+""===a.substr(6,2):!1},_lv:function(b){if(/^LV[0-9]{11}$/.test(b)&&(b=b.substr(2)),!/^[0-9]{11}$/.test(b))return!1;var c,d=parseInt(b.charAt(0),10),e=0,f=[],g=b.length;if(d>3){for(e=0,f=[9,1,4,8,3,10,2,5,7,6,1],c=0;g>c;c++)e+=parseInt(b.charAt(c),10)*f[c];return e%=11,3===e}var h=parseInt(b.substr(0,2),10),i=parseInt(b.substr(2,2),10),j=parseInt(b.substr(4,2),10);if(j=j+1800+100*parseInt(b.charAt(6),10),!a.fn.bootstrapValidator.helpers.date(j,i,h))return!1;for(e=0,f=[10,5,8,4,2,1,6,3,7,9],c=0;g-1>c;c++)e+=parseInt(b.charAt(c),10)*f[c];return e=(e+1)%11%10,e+""===b.charAt(g-1)},_mt:function(a){if(/^MT[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[3,4,6,7,8,9,10,1],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%37===0},_nl:function(a){if(/^NL[0-9]{9}B[0-9]{2}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}B[0-9]{2}$/.test(a))return!1;for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%=11,b>9&&(b=0),b+""===a.substr(8,1)},_no:function(a){if(/^NO[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=0,c=[3,2,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,11===b&&(b=0),b+""===a.substr(8,1)},_pl:function(a){if(/^PL[0-9]{10}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{10}$/.test(a))return!1;for(var b=0,c=[6,5,7,2,3,4,5,6,7,-1],d=0;10>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b%11===0},_pt:function(a){if(/^PT[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=0,c=[9,8,7,6,5,4,3,2],d=0;8>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,b>9&&(b=0),b+""===a.substr(8,1)},_ro:function(a){if(/^RO[1-9][0-9]{1,9}$/.test(a)&&(a=a.substr(2)),!/^[1-9][0-9]{1,9}$/.test(a))return!1;for(var b=a.length,c=[7,5,3,2,1,7,5,3,2].slice(10-b),d=0,e=0;b-1>e;e++)d+=parseInt(a.charAt(e),10)*c[e];return d=10*d%11%10,d+""===a.substr(b-1,1)},_ru:function(a){if(/^RU([0-9]{10}|[0-9]{12})$/.test(a)&&(a=a.substr(2)),!/^([0-9]{10}|[0-9]{12})$/.test(a))return!1;var b=0;if(10===a.length){var c=0,d=[2,4,10,3,5,9,4,6,8,0];for(b=0;10>b;b++)c+=parseInt(a.charAt(b),10)*d[b];return c%=11,c>9&&(c%=10),c+""===a.substr(9,1)}if(12===a.length){var e=0,f=[7,2,4,10,3,5,9,4,6,8,0],g=0,h=[3,7,2,4,10,3,5,9,4,6,8,0];for(b=0;11>b;b++)e+=parseInt(a.charAt(b),10)*f[b],g+=parseInt(a.charAt(b),10)*h[b];return e%=11,e>9&&(e%=10),g%=11,g>9&&(g%=10),e+""===a.substr(10,1)&&g+""===a.substr(11,1)}return!1},_rs:function(a){if(/^RS[0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{9}$/.test(a))return!1;for(var b=10,c=0,d=0;8>d;d++)c=(parseInt(a.charAt(d),10)+b)%10,0===c&&(c=10),b=2*c%11;return(b+parseInt(a.substr(8,1),10))%10===1},_se:function(b){return/^SE[0-9]{10}01$/.test(b)&&(b=b.substr(2)),/^[0-9]{10}01$/.test(b)?(b=b.substr(0,10),a.fn.bootstrapValidator.helpers.luhn(b)):!1},_si:function(a){if(/^SI[0-9]{8}$/.test(a)&&(a=a.substr(2)),!/^[0-9]{8}$/.test(a))return!1;for(var b=0,c=[8,7,6,5,4,3,2],d=0;7>d;d++)b+=parseInt(a.charAt(d),10)*c[d];return b=11-b%11,10===b&&(b=0),b+""===a.substr(7,1)},_sk:function(a){return/^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a)&&(a=a.substr(2)),/^[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(a)?parseInt(a,10)%11===0:!1},_ve:function(a){if(/^VE[VEJPG][0-9]{9}$/.test(a)&&(a=a.substr(2)),!/^[VEJPG][0-9]{9}$/.test(a))return!1;for(var b={V:4,E:8,J:12,P:16,G:20},c=b[a.charAt(0)],d=[3,2,7,6,5,4,3,2],e=0;8>e;e++)c+=parseInt(a.charAt(e+1),10)*d[e];return c=11-c%11,(11===c||10===c)&&(c=0),c+""===a.substr(9,1)},_za:function(a){return/^ZA4[0-9]{9}$/.test(a)&&(a=a.substr(2)),/^4[0-9]{9}$/.test(a)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.vin=a.extend(a.fn.bootstrapValidator.i18n.vin||{},{"default":"Please enter a valid VIN number"}),a.fn.bootstrapValidator.validators.vin={validate:function(a,b){var c=b.val();if(""===c)return!0;if(!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(c))return!1;c=c.toUpperCase();for(var d={A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,J:1,K:2,L:3,M:4,N:5,P:7,R:9,S:2,T:3,U:4,V:5,W:6,X:7,Y:8,Z:9,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,0:0},e=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],f=0,g=c.length,h=0;g>h;h++)f+=d[c.charAt(h)+""]*e[h];var i=f%11;return 10===i&&(i="X"),i+""===c.charAt(8)}}}(window.jQuery),function(a){a.fn.bootstrapValidator.i18n.zipCode=a.extend(a.fn.bootstrapValidator.i18n.zipCode||{},{"default":"Please enter a valid postal code",countryNotSupported:"The country code %s is not supported",country:"Please enter a valid postal code in %s",countries:{BR:"Brazil",CA:"Canada",CZ:"Czech Republic",DK:"Denmark",GB:"United Kingdom",IT:"Italy",MA:"Morocco",NL:"Netherlands",RO:"Romania",RU:"Russia",SE:"Sweden",SG:"Singapore",SK:"Slovakia",US:"USA"}}),a.fn.bootstrapValidator.validators.zipCode={html5Attributes:{message:"message",country:"country"},COUNTRY_CODES:["BR","CA","CZ","DK","GB","IT","MA","NL","RO","RU","SE","SG","SK","US"],validate:function(b,c,d){var e=c.val();if(""===e||!d.country)return!0;var f=d.country;if(("string"!=typeof f||-1===a.inArray(f,this.COUNTRY_CODES))&&(f=b.getDynamicOption(c,f)),!f||-1===a.inArray(f.toUpperCase(),this.COUNTRY_CODES))return{valid:!1,message:a.fn.bootstrapValidator.helpers.format(a.fn.bootstrapValidator.i18n.zipCode.countryNotSupported,f)};var g=!1;switch(f=f.toUpperCase()){case"BR":g=/^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(e);break;case"CA":g=/^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(e);break;case"CZ":g=/^(\d{3})([ ]?)(\d{2})$/.test(e);break;case"DK":g=/^(DK(-|\s)?)?\d{4}$/i.test(e);break;case"GB":g=this._gb(e);break;case"IT":g=/^(I-|IT-)?\d{5}$/i.test(e);break;case"MA":g=/^[1-9][0-9]{4}$/i.test(e);break;case"NL":g=/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(e);break;case"RO":g=/^(0[1-8]{1}|[1-9]{1}[0-5]{1})?[0-9]{4}$/i.test(e);break;case"RU":g=/^[0-9]{6}$/i.test(e);break;case"SE":g=/^(S-)?\d{3}\s?\d{2}$/i.test(e);break;case"SG":g=/^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(e);break;case"SK":g=/^(\d{3})([ ]?)(\d{2})$/.test(e);break;case"US":default:g=/^\d{4,5}([\-]?\d{4})?$/.test(e)}return{valid:g,message:a.fn.bootstrapValidator.helpers.format(d.message||a.fn.bootstrapValidator.i18n.zipCode.country,a.fn.bootstrapValidator.i18n.zipCode.countries[f])}},_gb:function(a){for(var b="[ABCDEFGHIJKLMNOPRSTUWYZ]",c="[ABCDEFGHKLMNOPQRSTUVWXY]",d="[ABCDEFGHJKPMNRSTUVWXY]",e="[ABEHMNPRVWXY]",f="[ABDEFGHJLNPQRSTUWXYZ]",g=[new RegExp("^("+b+"{1}"+c+"?[0-9]{1,2})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}[0-9]{1}"+d+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^("+b+"{1}"+c+"{1}?[0-9]{1}"+e+"{1})(\\s*)([0-9]{1}"+f+"{2})$","i"),new RegExp("^(BF1)(\\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$","i"),/^(GIR)(\s*)(0AA)$/i,/^(BFPO)(\s*)([0-9]{1,4})$/i,/^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i,/^([A-Z]{4})(\s*)(1ZZ)$/i,/^(AI-2640)$/i],h=0;h<g.length;h++)if(g[h].test(a))return!0;return!1}}}(window.jQuery);
/***** owl.carousel-2.js *****/
(function($,window,document,undefined){var drag,state,e;drag={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null};state={isTouch:false,isScrolling:false,isSwiping:false,direction:false,inMotion:false};e={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null};function Owl(element,options){this.settings=null;this.options=$.extend({},Owl.Defaults,options);this.$element=$(element);this.drag=$.extend({},drag);this.state=$.extend({},state);this.e=$.extend({},e);this._plugins={};this._supress={};this._current=null;this._speed=null;this._coordinates=[];this._breakpoint=null;this._width=null;this._items=[];this._clones=[];this._mergers=[];this._invalidated={};this._pipe=[];$.each(Owl.Plugins,$.proxy(function(key,plugin){this._plugins[key[0].toLowerCase()+key.slice(1)]=new plugin(this)},this));$.each(Owl.Pipe,$.proxy(function(priority,worker){this._pipe.push({"filter":worker.filter,"run":$.proxy(worker.run,this)})},this));this.setup();this.initialize()}Owl.Defaults={items:3,loop:false,center:false,mouseDrag:true,touchDrag:true,pullDrag:true,freeDrag:false,margin:0,stagePadding:0,merge:false,mergeFit:true,autoWidth:false,startPosition:0,rtl:false,smartSpeed:250,fluidSpeed:false,dragEndSpeed:false,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:window,responsiveClass:false,fallbackEasing:"swing",info:false,nestedItemSelector:false,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"};Owl.Width={Default:"default",Inner:"inner",Outer:"outer"};Owl.Plugins={};Owl.Pipe=[{filter:["width","items","settings"],run:function(cache){cache.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var cached=this._clones,clones=this.$stage.children(".cloned");if(clones.length!==cached.length||(!this.settings.loop&&cached.length>0)){this.$stage.children(".cloned").remove();this._clones=[]}}},{filter:["items","settings"],run:function(){var i,n,clones=this._clones,items=this._items,delta=this.settings.loop?clones.length-Math.max(this.settings.items*2,4):0;for(i=0,n=Math.abs(delta/2);i<n;i++){if(delta>0){this.$stage.children().eq(items.length+clones.length-1).remove();clones.pop();this.$stage.children().eq(0).remove();clones.pop()}else{clones.push(clones.length/2);this.$stage.append(items[clones[clones.length-1]].clone().addClass("cloned"));clones.push(items.length-1-(clones.length-1)/2);this.$stage.prepend(items[clones[clones.length-1]].clone().addClass("cloned"))}}}},{filter:["width","items","settings"],run:function(){var rtl=(this.settings.rtl?1:-1),width=(this.width()/this.settings.items).toFixed(3),coordinate=0,merge,i,n;this._coordinates=[];for(i=0,n=this._clones.length+this._items.length;i<n;i++){merge=this._mergers[this.relative(i)];merge=(this.settings.mergeFit&&Math.min(merge,this.settings.items))||merge;coordinate+=(this.settings.autoWidth?this._items[this.relative(i)].width()+this.settings.margin:width*merge)*rtl;this._coordinates.push(coordinate)}}},{filter:["width","items","settings"],run:function(){var i,n,width=(this.width()/this.settings.items).toFixed(3),css={"width":Math.abs(this._coordinates[this._coordinates.length-1])+this.settings.stagePadding*2,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};this.$stage.css(css);css={"width":this.settings.autoWidth?"auto":width-this.settings.margin};css[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin;if(!this.settings.autoWidth&&$.grep(this._mergers,function(v){return v>1}).length>0){for(i=0,n=this._coordinates.length;i<n;i++){css.width=Math.abs(this._coordinates[i])-Math.abs(this._coordinates[i-1]||0)-this.settings.margin;this.$stage.children().eq(i).css(css)}}else{this.$stage.children().css(css)}}},{filter:["width","items","settings"],run:function(cache){cache.current&&this.reset(this.$stage.children().index(cache.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var rtl=this.settings.rtl?1:-1,padding=this.settings.stagePadding*2,begin=this.coordinates(this.current())+padding,end=begin+this.width()*rtl,inner,outer,matches=[],i,n;for(i=0,n=this._coordinates.length;i<n;i++){inner=this._coordinates[i-1]||0;outer=Math.abs(this._coordinates[i])+padding*rtl;if((this.op(inner,"<=",begin)&&(this.op(inner,">",end)))||(this.op(outer,"<",begin)&&this.op(outer,">",end))){matches.push(i)}}this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass);this.$stage.children(":eq("+matches.join("), :eq(")+")").addClass(this.settings.activeClass);if(this.settings.center){this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass);this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)}}}];Owl.prototype.initialize=function(){this.trigger("initialize");this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl);this.browserSupport();if(this.settings.autoWidth&&this.state.imagesLoaded!==true){var imgs,nestedSelector,width;imgs=this.$element.find("img");nestedSelector=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:undefined;width=this.$element.children(nestedSelector).width();if(imgs.length&&width<=0){this.preloadAutoWidthImages(imgs);return false}}this.$element.addClass("owl-loading");this.$stage=$("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">');this.$element.append(this.$stage.parent());this.replace(this.$element.children().not(this.$stage.parent()));this._width=this.$element.width();this.refresh();this.$element.removeClass("owl-loading").addClass("owl-loaded");this.eventsCall();this.internalEvents();this.addTriggerableEvents();this.trigger("initialized")};Owl.prototype.setup=function(){var viewport=this.viewport(),overwrites=this.options.responsive,match=-1,settings=null;if(!overwrites){settings=$.extend({},this.options)}else{$.each(overwrites,function(breakpoint){if(breakpoint<=viewport&&breakpoint>match){match=Number(breakpoint)}});settings=$.extend({},this.options,overwrites[match]);delete settings.responsive;if(settings.responsiveClass){this.$element.attr("class",function(i,c){return c.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+match)}}if(this.settings===null||this._breakpoint!==match){this.trigger("change",{property:{name:"settings",value:settings}});this._breakpoint=match;this.settings=settings;this.invalidate("settings");this.trigger("changed",{property:{name:"settings",value:this.settings}})}};Owl.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center);if(this.settings.loop&&this._items.length<this.settings.items){this.settings.loop=false}if(this.settings.autoWidth){this.settings.stagePadding=false;this.settings.merge=false}};Owl.prototype.prepare=function(item){var event=this.trigger("prepare",{content:item});if(!event.data){event.data=$("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(item)}this.trigger("prepared",{content:event.data});return event.data};Owl.prototype.update=function(){var i=0,n=this._pipe.length,filter=$.proxy(function(p){return this[p]},this._invalidated),cache={};while(i<n){if(this._invalidated.all||$.grep(this._pipe[i].filter,filter).length>0){this._pipe[i].run(cache)}i++}this._invalidated={}};Owl.prototype.width=function(dimension){dimension=dimension||Owl.Width.Default;switch(dimension){case Owl.Width.Inner:case Owl.Width.Outer:return this._width;default:return this._width-this.settings.stagePadding*2+this.settings.margin}};Owl.prototype.refresh=function(){if(this._items.length===0){return false}var start=new Date().getTime();this.trigger("refresh");this.setup();this.optionsLogic();this.$stage.addClass("owl-refresh");this.update();this.$stage.removeClass("owl-refresh");this.state.orientation=window.orientation;this.watchVisibility();this.trigger("refreshed")};Owl.prototype.eventsCall=function(){this.e._onDragStart=$.proxy(function(e){this.onDragStart(e)},this);this.e._onDragMove=$.proxy(function(e){this.onDragMove(e)},this);this.e._onDragEnd=$.proxy(function(e){this.onDragEnd(e)},this);this.e._onResize=$.proxy(function(e){this.onResize(e)},this);this.e._transitionEnd=$.proxy(function(e){this.transitionEnd(e)},this);this.e._preventClick=$.proxy(function(e){this.preventClick(e)},this)};Owl.prototype.onThrottledResize=function(){window.clearTimeout(this.resizeTimer);this.resizeTimer=window.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)};Owl.prototype.onResize=function(){if(!this._items.length){return false}if(this._width===this.$element.width()){return false}if(this.trigger("resize").isDefaultPrevented()){return false}this._width=this.$element.width();this.invalidate("width");this.refresh();this.trigger("resized")};Owl.prototype.eventsRouter=function(event){var type=event.type;if(type==="mousedown"||type==="touchstart"){this.onDragStart(event)}else{if(type==="mousemove"||type==="touchmove"){this.onDragMove(event)}else{if(type==="mouseup"||type==="touchend"){this.onDragEnd(event)}else{if(type==="touchcancel"){this.onDragEnd(event)}}}}};Owl.prototype.internalEvents=function(){var isTouch=isTouchSupport(),isTouchIE=isTouchSupportIE();if(this.settings.mouseDrag){this.$stage.on("mousedown",$.proxy(function(event){this.eventsRouter(event)},this));this.$stage.on("dragstart",function(){return false});this.$stage.get(0).onselectstart=function(){return false}}else{this.$element.addClass("owl-text-select-on")}if(this.settings.touchDrag&&!isTouchIE){this.$stage.on("touchstart touchcancel",$.proxy(function(event){this.eventsRouter(event)},this))}if(this.transitionEndVendor){this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,false)}if(this.settings.responsive!==false){this.on(window,"resize",$.proxy(this.onThrottledResize,this))}};Owl.prototype.onDragStart=function(event){var ev,isTouchEvent,pageX,pageY,animatedPos;ev=event.originalEvent||event||window.event;if(ev.which===3||this.state.isTouch){return false}if(ev.type==="mousedown"){this.$stage.addClass("owl-grab")}this.trigger("drag");this.drag.startTime=new Date().getTime();this.speed(0);this.state.isTouch=true;this.state.isScrolling=false;this.state.isSwiping=false;this.drag.distance=0;pageX=getTouches(ev).x;pageY=getTouches(ev).y;this.drag.offsetX=this.$stage.position().left;this.drag.offsetY=this.$stage.position().top;if(this.settings.rtl){this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin}if(this.state.inMotion&&this.support3d){animatedPos=this.getTransformProperty();this.drag.offsetX=animatedPos;this.animate(animatedPos);this.state.inMotion=true}else{if(this.state.inMotion&&!this.support3d){this.state.inMotion=false;return false}}this.drag.startX=pageX-this.drag.offsetX;this.drag.startY=pageY-this.drag.offsetY;this.drag.start=pageX-this.drag.startX;this.drag.targetEl=ev.target||ev.srcElement;this.drag.updatedX=this.drag.start;if(this.drag.targetEl.tagName==="IMG"||this.drag.targetEl.tagName==="A"){this.drag.targetEl.draggable=false}$(document).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",$.proxy(function(event){this.eventsRouter(event)},this))};Owl.prototype.onDragMove=function(event){var ev,isTouchEvent,pageX,pageY,minValue,maxValue,pull;if(!this.state.isTouch){return}if(this.state.isScrolling){return}ev=event.originalEvent||event||window.event;pageX=getTouches(ev).x;pageY=getTouches(ev).y;this.drag.currentX=pageX-this.drag.startX;this.drag.currentY=pageY-this.drag.startY;this.drag.distance=this.drag.currentX-this.drag.offsetX;if(this.drag.distance<0){this.state.direction=this.settings.rtl?"right":"left"}else{if(this.drag.distance>0){this.state.direction=this.settings.rtl?"left":"right"}}if(this.settings.loop){if(this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&this.state.direction==="right"){this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)}else{if(this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&this.state.direction==="left"){this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)}}}else{minValue=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum());maxValue=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum());pull=this.settings.pullDrag?this.drag.distance/5:0;this.drag.currentX=Math.max(Math.min(this.drag.currentX,minValue+pull),maxValue+pull)}if((this.drag.distance>8||this.drag.distance<-8)){if(ev.preventDefault!==undefined){ev.preventDefault()}else{ev.returnValue=false}this.state.isSwiping=true}this.drag.updatedX=this.drag.currentX;if((this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===false){this.state.isScrolling=true;this.drag.updatedX=this.drag.start}this.animate(this.drag.updatedX)};Owl.prototype.onDragEnd=function(event){var compareTimes,distanceAbs,closest;if(!this.state.isTouch){return}if(event.type==="mouseup"){this.$stage.removeClass("owl-grab")}this.trigger("dragged");this.drag.targetEl.removeAttribute("draggable");this.state.isTouch=false;this.state.isScrolling=false;this.state.isSwiping=false;if(this.drag.distance===0&&this.state.inMotion!==true){this.state.inMotion=false;return false}this.drag.endTime=new Date().getTime();compareTimes=this.drag.endTime-this.drag.startTime;distanceAbs=Math.abs(this.drag.distance);if(distanceAbs>3||compareTimes>300){this.removeClick(this.drag.targetEl)}closest=this.closest(this.drag.updatedX);this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed);this.current(closest);this.invalidate("position");this.update();if(!this.settings.pullDrag&&this.drag.updatedX===this.coordinates(closest)){this.transitionEnd()}this.drag.distance=0;$(document).off(".owl.dragEvents")};Owl.prototype.removeClick=function(target){this.drag.targetEl=target;$(target).on("click.preventClick",this.e._preventClick);window.setTimeout(function(){$(target).off("click.preventClick")},300)};Owl.prototype.preventClick=function(ev){if(ev.preventDefault){ev.preventDefault()}else{ev.returnValue=false}if(ev.stopPropagation){ev.stopPropagation()}$(ev.target).off("click.preventClick")};Owl.prototype.getTransformProperty=function(){var transform,matrix3d;transform=window.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform");transform=transform.replace(/matrix(3d)?\(|\)/g,"").split(",");matrix3d=transform.length===16;return matrix3d!==true?transform[4]:transform[12]};Owl.prototype.closest=function(coordinate){var position=-1,pull=30,width=this.width(),coordinates=this.coordinates();if(!this.settings.freeDrag){$.each(coordinates,$.proxy(function(index,value){if(coordinate>value-pull&&coordinate<value+pull){position=index}else{if(this.op(coordinate,"<",value)&&this.op(coordinate,">",coordinates[index+1]||value-width)){position=this.state.direction==="left"?index+1:index}}return position===-1},this))}if(!this.settings.loop){if(this.op(coordinate,">",coordinates[this.minimum()])){position=coordinate=this.minimum()}else{if(this.op(coordinate,"<",coordinates[this.maximum()])){position=coordinate=this.maximum()}}}return position};Owl.prototype.animate=function(coordinate){this.trigger("translate");this.state.inMotion=this.speed()>0;if(this.support3d){this.$stage.css({transform:"translate3d("+coordinate+"px"+",0px, 0px)",transition:(this.speed()/1000)+"s"})}else{if(this.state.isTouch){this.$stage.css({left:coordinate+"px"})}else{this.$stage.animate({left:coordinate},this.speed()/1000,this.settings.fallbackEasing,$.proxy(function(){if(this.state.inMotion){this.transitionEnd()}},this))}}};Owl.prototype.current=function(position){if(position===undefined){return this._current}if(this._items.length===0){return undefined}position=this.normalize(position);if(this._current!==position){var event=this.trigger("change",{property:{name:"position",value:position}});if(event.data!==undefined){position=this.normalize(event.data)}this._current=position;this.invalidate("position");this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current};Owl.prototype.invalidate=function(part){this._invalidated[part]=true};Owl.prototype.reset=function(position){position=this.normalize(position);if(position===undefined){return}this._speed=0;this._current=position;this.suppress(["translate","translated"]);this.animate(this.coordinates(position));this.release(["translate","translated"])};Owl.prototype.normalize=function(position,relative){var n=(relative?this._items.length:this._items.length+this._clones.length);if(!$.isNumeric(position)||n<1){return undefined}if(this._clones.length){position=((position%n)+n)%n}else{position=Math.max(this.minimum(relative),Math.min(this.maximum(relative),position))}return position};Owl.prototype.relative=function(position){position=this.normalize(position);position=position-this._clones.length/2;return this.normalize(position,true)};Owl.prototype.maximum=function(relative){var maximum,width,i=0,coordinate,settings=this.settings;if(relative){return this._items.length-1}if(!settings.loop&&settings.center){maximum=this._items.length-1}else{if(!settings.loop&&!settings.center){maximum=this._items.length-settings.items}else{if(settings.loop||settings.center){maximum=this._items.length+settings.items}else{if(settings.autoWidth||settings.merge){revert=settings.rtl?1:-1;width=this.$stage.width()-this.$element.width();while(coordinate=this.coordinates(i)){if(coordinate*revert>=width){break}maximum=++i}}else{throw"Can not detect maximum absolute position."}}}}return maximum};Owl.prototype.minimum=function(relative){if(relative){return 0}return this._clones.length/2};Owl.prototype.items=function(position){if(position===undefined){return this._items.slice()}position=this.normalize(position,true);return this._items[position]};Owl.prototype.mergers=function(position){if(position===undefined){return this._mergers.slice()}position=this.normalize(position,true);return this._mergers[position]};Owl.prototype.clones=function(position){var odd=this._clones.length/2,even=odd+this._items.length,map=function(index){return index%2===0?even+index/2:odd-(index+1)/2};if(position===undefined){return $.map(this._clones,function(v,i){return map(i)})}return $.map(this._clones,function(v,i){return v===position?map(i):null})};Owl.prototype.speed=function(speed){if(speed!==undefined){this._speed=speed}return this._speed};Owl.prototype.coordinates=function(position){var coordinate=null;if(position===undefined){return $.map(this._coordinates,$.proxy(function(coordinate,index){return this.coordinates(index)},this))}if(this.settings.center){coordinate=this._coordinates[position];coordinate+=(this.width()-coordinate+(this._coordinates[position-1]||0))/2*(this.settings.rtl?-1:1)}else{coordinate=this._coordinates[position-1]||0}return coordinate};Owl.prototype.duration=function(from,to,factor){return Math.min(Math.max(Math.abs(to-from),1),6)*Math.abs((factor||this.settings.smartSpeed))};Owl.prototype.to=function(position,speed){if(this.settings.loop){var distance=position-this.relative(this.current()),revert=this.current(),before=this.current(),after=this.current()+distance,direction=before-after<0?true:false,items=this._clones.length+this._items.length;if(after<this.settings.items&&direction===false){revert=before+this._items.length;this.reset(revert)}else{if(after>=items-this.settings.items&&direction===true){revert=before-this._items.length;this.reset(revert)}}window.clearTimeout(this.e._goToLoop);this.e._goToLoop=window.setTimeout($.proxy(function(){this.speed(this.duration(this.current(),revert+distance,speed));this.current(revert+distance);this.update()},this),30)}else{this.speed(this.duration(this.current(),position,speed));this.current(position);this.update()}};Owl.prototype.next=function(speed){speed=speed||false;this.to(this.relative(this.current())+1,speed)};Owl.prototype.prev=function(speed){speed=speed||false;this.to(this.relative(this.current())-1,speed)};Owl.prototype.transitionEnd=function(event){if(event!==undefined){event.stopPropagation();if((event.target||event.srcElement||event.originalTarget)!==this.$stage.get(0)){return false}}this.state.inMotion=false;this.trigger("translated")};Owl.prototype.viewport=function(){var width;if(this.options.responsiveBaseElement!==window){width=$(this.options.responsiveBaseElement).width()}else{if(window.innerWidth){width=window.innerWidth}else{if(document.documentElement&&document.documentElement.clientWidth){width=document.documentElement.clientWidth}else{throw"Can not detect viewport width."}}}return width};Owl.prototype.replace=function(content){this.$stage.empty();this._items=[];if(content){content=(content instanceof jQuery)?content:$(content)}if(this.settings.nestedItemSelector){content=content.find("."+this.settings.nestedItemSelector)}content.filter(function(){return this.nodeType===1}).each($.proxy(function(index,item){item=this.prepare(item);this.$stage.append(item);this._items.push(item);this._mergers.push(item.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")*1||1)},this));this.reset($.isNumeric(this.settings.startPosition)?this.settings.startPosition:0);this.invalidate("items")};Owl.prototype.add=function(content,position){position=position===undefined?this._items.length:this.normalize(position,true);this.trigger("add",{content:content,position:position});if(this._items.length===0||position===this._items.length){this.$stage.append(content);this._items.push(content);this._mergers.push(content.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")*1||1)}else{this._items[position].before(content);this._items.splice(position,0,content);this._mergers.splice(position,0,content.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")*1||1)}this.invalidate("items");this.trigger("added",{content:content,position:position})};Owl.prototype.remove=function(position){position=this.normalize(position,true);if(position===undefined){return}this.trigger("remove",{content:this._items[position],position:position});this._items[position].remove();this._items.splice(position,1);this._mergers.splice(position,1);this.invalidate("items");this.trigger("removed",{content:null,position:position})};Owl.prototype.addTriggerableEvents=function(){var handler=$.proxy(function(callback,event){return $.proxy(function(e){if(e.relatedTarget!==this){this.suppress([event]);callback.apply(this,[].slice.call(arguments,1));this.release([event])}},this)},this);$.each({"next":this.next,"prev":this.prev,"to":this.to,"destroy":this.destroy,"refresh":this.refresh,"replace":this.replace,"add":this.add,"remove":this.remove},$.proxy(function(event,callback){this.$element.on(event+".owl.carousel",handler(callback,event+".owl.carousel"))},this))};Owl.prototype.watchVisibility=function(){if(!isElVisible(this.$element.get(0))){this.$element.addClass("owl-hidden");window.clearInterval(this.e._checkVisibile);this.e._checkVisibile=window.setInterval($.proxy(checkVisible,this),500)}function isElVisible(el){return el.offsetWidth>0&&el.offsetHeight>0}function checkVisible(){if(isElVisible(this.$element.get(0))){this.$element.removeClass("owl-hidden");this.refresh();window.clearInterval(this.e._checkVisibile)}}};Owl.prototype.preloadAutoWidthImages=function(imgs){var loaded,that,$el,img;loaded=0;that=this;imgs.each(function(i,el){$el=$(el);img=new Image();img.onload=function(){loaded++;$el.attr("src",img.src);$el.css("opacity",1);if(loaded>=imgs.length){that.state.imagesLoaded=true;that.initialize()}};img.src=$el.attr("src")||$el.attr("data-src")||$el.attr("data-src-retina")})};Owl.prototype.destroy=function(){if(this.$element.hasClass(this.settings.themeClass)){this.$element.removeClass(this.settings.themeClass)}if(this.settings.responsive!==false){$(window).off("resize.owl.carousel")}if(this.transitionEndVendor){this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd)}for(var i in this._plugins){this._plugins[i].destroy()}if(this.settings.mouseDrag||this.settings.touchDrag){this.$stage.off("mousedown touchstart touchcancel");$(document).off(".owl.dragEvents");this.$stage.get(0).onselectstart=function(){};this.$stage.off("dragstart",function(){return false})}this.$element.off(".owl");this.$stage.children(".cloned").remove();this.e=null;this.$element.removeData("owlCarousel");this.$stage.children().contents().unwrap();this.$stage.children().unwrap();this.$stage.unwrap()};Owl.prototype.op=function(a,o,b){var rtl=this.settings.rtl;switch(o){case"<":return rtl?a>b:a<b;case">":return rtl?a<b:a>b;case">=":return rtl?a<=b:a>=b;case"<=":return rtl?a>=b:a<=b;default:break}};Owl.prototype.on=function(element,event,listener,capture){if(element.addEventListener){element.addEventListener(event,listener,capture)}else{if(element.attachEvent){element.attachEvent("on"+event,listener)}}};Owl.prototype.off=function(element,event,listener,capture){if(element.removeEventListener){element.removeEventListener(event,listener,capture)}else{if(element.detachEvent){element.detachEvent("on"+event,listener)}}};Owl.prototype.trigger=function(name,data,namespace){var status={item:{count:this._items.length,index:this.current()}},handler=$.camelCase($.grep(["on",name,namespace],function(v){return v}).join("-").toLowerCase()),event=$.Event([name,"owl",namespace||"carousel"].join(".").toLowerCase(),$.extend({relatedTarget:this},status,data));if(!this._supress[name]){$.each(this._plugins,function(name,plugin){if(plugin.onTrigger){plugin.onTrigger(event)}});this.$element.trigger(event);if(this.settings&&typeof this.settings[handler]==="function"){this.settings[handler].apply(this,event)}}return event};Owl.prototype.suppress=function(events){$.each(events,$.proxy(function(index,event){this._supress[event]=true},this))};Owl.prototype.release=function(events){$.each(events,$.proxy(function(index,event){delete this._supress[event]},this))};Owl.prototype.browserSupport=function(){this.support3d=isPerspective();if(this.support3d){this.transformVendor=isTransform();var endVendors=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=endVendors[isTransition()];this.vendorName=this.transformVendor.replace(/Transform/i,"");this.vendorName=this.vendorName!==""?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=window.orientation};function getTouches(event){if(event.touches!==undefined){return{x:event.touches[0].pageX,y:event.touches[0].pageY}}if(event.touches===undefined){if(event.pageX!==undefined){return{x:event.pageX,y:event.pageY}}if(event.pageX===undefined){return{x:event.clientX,y:event.clientY}}}}function isStyleSupported(array){var p,s,fake=document.createElement("div"),list=array;for(p in list){s=list[p];if(typeof fake.style[s]!=="undefined"){fake=null;return[s,p]}}return[false]}function isTransition(){return isStyleSupported(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function isTransform(){return isStyleSupported(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function isPerspective(){return isStyleSupported(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function isTouchSupport(){return"ontouchstart" in window||!!(navigator.msMaxTouchPoints)}function isTouchSupportIE(){return window.navigator.msPointerEnabled}$.fn.owlCarousel=function(options){if(!options.responsive){var responsive={};$.each(options,function(con,val){if(con.indexOf("items")===0){if($.isArray(val)){responsive[val[0]]={items:val[1]}}else{if(con=="items"){responsive[0]={items:val}}}}if(con=="singleItem"&&val==true){options.items=1}});options.responsive=responsive}if(this.find("img").length<2){options.loop=false}return this.each(function(){if(!$(this).data("owlCarousel")){$(this).data("owlCarousel",new Owl(this,options))}})};$.fn.owlCarousel.Constructor=Owl})(window.Zepto||window.jQuery,window,document);(function($,window,document,undefined){var Lazy=function(carousel){this._core=carousel;this._loaded=[];this._handlers={"initialized.owl.carousel change.owl.carousel":$.proxy(function(e){if(!e.namespace){return}if(!this._core.settings||!this._core.settings.lazyLoad){return}if((e.property&&e.property.name=="position")||e.type=="initialized"){var settings=this._core.settings,n=(settings.center&&Math.ceil(settings.items/2)||settings.items),i=((settings.center&&n*-1)||0),position=((e.property&&e.property.value)||this._core.current())+i,clones=this._core.clones().length,load=$.proxy(function(i,v){this.load(v)},this);while(i++<n){this.load(clones/2+this._core.relative(position));clones&&$.each(this._core.clones(this._core.relative(position++)),load)}}},this)};this._core.options=$.extend({},Lazy.Defaults,this._core.options);this._core.$element.on(this._handlers)};Lazy.Defaults={lazyLoad:false};Lazy.prototype.load=function(position){var $item=this._core.$stage.children().eq(position),$elements=$item&&$item.find(".owl-lazy");if(!$elements||$.inArray($item.get(0),this._loaded)>-1){return}$elements.each($.proxy(function(index,element){var $element=$(element),image,url=(window.devicePixelRatio>1&&$element.attr("data-src-retina"))||$element.attr("data-src");this._core.trigger("load",{element:$element,url:url},"lazy");if($element.is("img")){$element.one("load.owl.lazy",$.proxy(function(){$element.css("opacity",1);this._core.trigger("loaded",{element:$element,url:url},"lazy")},this)).attr("src",url)}else{image=new Image();image.onload=$.proxy(function(){$element.css({"background-image":"url("+url+")","opacity":"1"});this._core.trigger("loaded",{element:$element,url:url},"lazy")},this);image.src=url}},this));this._loaded.push($item.get(0))};Lazy.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this._core.$element.off(handler,this.handlers[handler])}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!="function"&&(this[property]=null)}};$.fn.owlCarousel.Constructor.Plugins.Lazy=Lazy})(window.Zepto||window.jQuery,window,document);(function($,window,document,undefined){var AutoHeight=function(carousel){this._core=carousel;this._handlers={"initialized.owl.carousel":$.proxy(function(){if(this._core.settings.autoHeight){this.update()}},this),"changed.owl.carousel":$.proxy(function(e){if(this._core.settings.autoHeight&&e.property.name=="position"){this.update()}},this),"loaded.owl.lazy":$.proxy(function(e){if(this._core.settings.autoHeight&&e.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())){this.update()}},this)};this._core.options=$.extend({},AutoHeight.Defaults,this._core.options);this._core.$element.on(this._handlers)};AutoHeight.Defaults={autoHeight:false,autoHeightClass:"owl-height"};AutoHeight.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)};AutoHeight.prototype.destroy=function(){var handler,property;for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler])}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!="function"&&(this[property]=null)}};$.fn.owlCarousel.Constructor.Plugins.AutoHeight=AutoHeight})(window.Zepto||window.jQuery,window,document);(function($,window,document,undefined){var Video=function(carousel){this._core=carousel;this._videos={};this._playing=null;this._fullscreen=false;this._handlers={"resize.owl.carousel":$.proxy(function(e){if(this._core.settings.video&&!this.isInFullScreen()){e.preventDefault()}},this),"refresh.owl.carousel changed.owl.carousel":$.proxy(function(e){if(this._playing){this.stop()}},this),"prepared.owl.carousel":$.proxy(function(e){var $element=$(e.content).find(".owl-video");if($element.length){$element.css("display","none");this.fetch($element,$(e.content))}},this)};this._core.options=$.extend({},Video.Defaults,this._core.options);this._core.$element.on(this._handlers);this._core.$element.on("click.owl.video",".owl-video-play-icon",$.proxy(function(e){this.play(e)},this))};Video.Defaults={video:false,videoHeight:false,videoWidth:false};Video.prototype.fetch=function(target,item){var type=target.attr("data-vimeo-id")?"vimeo":"youtube",id=target.attr("data-vimeo-id")||target.attr("data-youtube-id"),width=target.attr("data-width")||this._core.settings.videoWidth,height=target.attr("data-height")||this._core.settings.videoHeight,url=target.attr("href");if(url){id=url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);if(id[3].indexOf("youtu")>-1){type="youtube"}else{if(id[3].indexOf("vimeo")>-1){type="vimeo"}else{throw new Error("Video URL not supported.")}}id=id[6]}else{throw new Error("Missing video URL.")}this._videos[url]={type:type,id:id,width:width,height:height};item.attr("data-video",url);this.thumbnail(target,this._videos[url])};Video.prototype.thumbnail=function(target,video){var tnLink,icon,path,dimensions=video.width&&video.height?'style="width:'+video.width+"px;height:"+video.height+'px;"':"",customTn=target.find("img"),srcType="src",lazyClass="",settings=this._core.settings,create=function(path){icon='<div class="owl-video-play-icon"></div>';if(settings.lazyLoad){tnLink='<div class="owl-video-tn '+lazyClass+'" '+srcType+'="'+path+'"></div>'}else{tnLink='<div class="owl-video-tn" style="opacity:1;background-image:url('+path+')"></div>'}target.after(tnLink);target.after(icon)};target.wrap('<div class="owl-video-wrapper"'+dimensions+"></div>");if(this._core.settings.lazyLoad){srcType="data-src";lazyClass="owl-lazy"}if(customTn.length){create(customTn.attr(srcType));customTn.remove();return false}if(video.type==="youtube"){path="http://img.youtube.com/vi/"+video.id+"/hqdefault.jpg";create(path)}else{if(video.type==="vimeo"){$.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+video.id+".json",jsonp:"callback",dataType:"jsonp",success:function(data){path=data[0].thumbnail_large;create(path)}})}}};Video.prototype.stop=function(){this._core.trigger("stop",null,"video");this._playing.find(".owl-video-frame").remove();this._playing.removeClass("owl-video-playing");this._playing=null};Video.prototype.play=function(ev){this._core.trigger("play",null,"video");if(this._playing){this.stop()}var target=$(ev.target||ev.srcElement),item=target.closest("."+this._core.settings.itemClass),video=this._videos[item.attr("data-video")],width=video.width||"100%",height=video.height||this._core.$stage.height(),html,wrap;if(video.type==="youtube"){html='<iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+video.id+"?autoplay=1&v="+video.id+'" frameborder="0" allowfullscreen></iframe>'}else{if(video.type==="vimeo"){html='<iframe src="http://player.vimeo.com/video/'+video.id+'?autoplay=1" width="'+width+'" height="'+height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'}}item.addClass("owl-video-playing");this._playing=item;wrap=$('<div style="height:'+height+"px; width:"+width+'px" class="owl-video-frame">'+html+"</div>");target.after(wrap)};Video.prototype.isInFullScreen=function(){var element=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;if(element&&$(element).parent().hasClass("owl-video-frame")){this._core.speed(0);this._fullscreen=true}if(element&&this._fullscreen&&this._playing){return false}if(this._fullscreen){this._fullscreen=false;return false}if(this._playing){if(this._core.state.orientation!==window.orientation){this._core.state.orientation=window.orientation;return false}}return true};Video.prototype.destroy=function(){var handler,property;this._core.$element.off("click.owl.video");for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler])}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!="function"&&(this[property]=null)}};$.fn.owlCarousel.Constructor.Plugins.Video=Video})(window.Zepto||window.jQuery,window,document);(function($,window,document,undefined){var Animate=function(scope){this.core=scope;this.core.options=$.extend({},Animate.Defaults,this.core.options);this.swapping=true;this.previous=undefined;this.next=undefined;this.handlers={"change.owl.carousel":$.proxy(function(e){if(e.property.name=="position"){this.previous=this.core.current();this.next=e.property.value}},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":$.proxy(function(e){this.swapping=e.type=="translated"},this),"translate.owl.carousel":$.proxy(function(e){if(this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)){this.swap()}},this)};this.core.$element.on(this.handlers)};Animate.Defaults={animateOut:false,animateIn:false};Animate.prototype.swap=function(){if(this.core.settings.items!==1||!this.core.support3d){return}this.core.speed(0);var left,clear=$.proxy(this.clear,this),previous=this.core.$stage.children().eq(this.previous),next=this.core.$stage.children().eq(this.next),incoming=this.core.settings.animateIn,outgoing=this.core.settings.animateOut;if(this.core.current()===this.previous){return}if(outgoing){left=this.core.coordinates(this.previous)-this.core.coordinates(this.next);previous.css({"left":left+"px"}).addClass("animated owl-animated-out").addClass(outgoing).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",clear)}if(incoming){next.addClass("animated owl-animated-in").addClass(incoming).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",clear)}};Animate.prototype.clear=function(e){$(e.target).css({"left":""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);this.core.transitionEnd()};Animate.prototype.destroy=function(){var handler,property;for(handler in this.handlers){this.core.$element.off(handler,this.handlers[handler])}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!="function"&&(this[property]=null)}};$.fn.owlCarousel.Constructor.Plugins.Animate=Animate})(window.Zepto||window.jQuery,window,document);(function($,window,document,undefined){var Autoplay=function(scope){this.core=scope;this.core.options=$.extend({},Autoplay.Defaults,this.core.options);this.handlers={"translated.owl.carousel refreshed.owl.carousel":$.proxy(function(){this.autoplay()},this),"play.owl.autoplay":$.proxy(function(e,t,s){this.play(t,s)},this),"stop.owl.autoplay":$.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":$.proxy(function(){if(this.core.settings.autoplayHoverPause){this.pause()}},this),"mouseleave.owl.autoplay":$.proxy(function(){if(this.core.settings.autoplayHoverPause){this.autoplay()}},this)};this.core.$element.on(this.handlers)};Autoplay.Defaults={autoplay:true,autoplayTimeout:5000,autoplayHoverPause:true,autoplaySpeed:true};Autoplay.prototype.autoplay=function(){if(this.core.settings.autoplay&&!this.core.state.videoPlay){window.clearInterval(this.interval);this.interval=window.setInterval($.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)}else{window.clearInterval(this.interval)}};Autoplay.prototype.play=function(timeout,speed){if(document.hidden===true){return}if(this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion){return}if(this.core.settings.autoplay===false){window.clearInterval(this.interval);return}this.core.next(this.core.settings.autoplaySpeed)};Autoplay.prototype.stop=function(){window.clearInterval(this.interval)};Autoplay.prototype.pause=function(){window.clearInterval(this.interval)};Autoplay.prototype.destroy=function(){var handler,property;window.clearInterval(this.interval);for(handler in this.handlers){this.core.$element.off(handler,this.handlers[handler])}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!="function"&&(this[property]=null)}};$.fn.owlCarousel.Constructor.Plugins.autoplay=Autoplay})(window.Zepto||window.jQuery,window,document);(function($,window,document,undefined){var Navigation=function(carousel){this._core=carousel;this._initialized=false;this._pages=[];this._controls={};this._templates=[];this.$element=this._core.$element;this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to};this._handlers={"prepared.owl.carousel":$.proxy(function(e){if(this._core.settings.dotsData){this._templates.push($(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))}},this),"add.owl.carousel":$.proxy(function(e){if(this._core.settings.dotsData){this._templates.splice(e.position,0,$(e.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))}},this),"remove.owl.carousel prepared.owl.carousel":$.proxy(function(e){if(this._core.settings.dotsData){this._templates.splice(e.position,1)}},this),"change.owl.carousel":$.proxy(function(e){if(e.property.name=="position"){if(!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var current=this._core.current(),maximum=this._core.maximum(),minimum=this._core.minimum();e.data=e.property.value>maximum?current>=maximum?minimum:maximum:e.property.value<minimum?maximum:e.property.value}}},this),"changed.owl.carousel":$.proxy(function(e){if(e.property.name=="position"){this.draw()}},this),"refreshed.owl.carousel":$.proxy(function(){if(!this._initialized){this.initialize();this._initialized=true}this._core.trigger("refresh",null,"navigation");this.update();this.draw();this._core.trigger("refreshed",null,"navigation")},this)};this._core.options=$.extend({},Navigation.Defaults,this._core.options);this.$element.on(this._handlers)};Navigation.Defaults={nav:false,navRewind:true,navText:["prev","next"],navSpeed:false,navElement:"div",navContainer:false,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:true,dotsEach:false,dotData:false,dotsSpeed:false,dotsContainer:false,controlsClass:"owl-controls"};Navigation.prototype.initialize=function(){var $container,override,options=this._core.settings;if(!options.dotsData){this._templates=[$("<div>").addClass(options.dotClass).append($("<span>")).prop("outerHTML")]}if(!options.navContainer||!options.dotsContainer){this._controls.$container=$("<div>").addClass(options.controlsClass).appendTo(this.$element)}this._controls.$indicators=options.dotsContainer?$(options.dotsContainer):$("<div>").hide().addClass(options.dotsClass).appendTo(this._controls.$container);this._controls.$indicators.on("click","div",$.proxy(function(e){var index=$(e.target).parent().is(this._controls.$indicators)?$(e.target).index():$(e.target).parent().index();e.preventDefault();this.to(index,options.dotsSpeed)},this));$container=options.navContainer?$(options.navContainer):$("<div>").addClass(options.navContainerClass).prependTo(this._controls.$container);this._controls.$next=$("<"+options.navElement+">");this._controls.$previous=this._controls.$next.clone();this._controls.$previous.addClass(options.navClass[0]).html(options.navText[0]).hide().prependTo($container).on("click",$.proxy(function(e){this.prev(options.navSpeed)},this));this._controls.$next.addClass(options.navClass[1]).html(options.navText[1]).hide().appendTo($container).on("click",$.proxy(function(e){this.next(options.navSpeed)},this));for(override in this._overrides){this._core[override]=$.proxy(this[override],this)}};Navigation.prototype.destroy=function(){var handler,control,property,override;for(handler in this._handlers){this.$element.off(handler,this._handlers[handler])}for(control in this._controls){this._controls[control].remove()}for(override in this.overides){this._core[override]=this._overrides[override]}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!="function"&&(this[property]=null)}};Navigation.prototype.update=function(){var i,j,k,options=this._core.settings,lower=this._core.clones().length/2,upper=lower+this._core.items().length,size=options.center||options.autoWidth||options.dotData?1:options.dotsEach||options.items;if(options.slideBy!=="page"){options.slideBy=Math.min(options.slideBy,options.items)}if(options.dots||options.slideBy=="page"){this._pages=[];for(i=lower,j=0,k=0;i<upper;i++){if(j>=size||j===0){this._pages.push({start:i-lower,end:i-lower+size-1});j=0,++k}j+=this._core.mergers(this._core.relative(i))}}};Navigation.prototype.draw=function(){var difference,i,html="",options=this._core.settings,$items=this._core.$stage.children(),index=this._core.relative(this._core.current());if(options.nav&&!options.loop&&!options.navRewind){this._controls.$previous.toggleClass("disabled",index<=0);this._controls.$next.toggleClass("disabled",index>=this._core.maximum())}this._controls.$previous.toggle(options.nav);this._controls.$next.toggle(options.nav);if(options.dots){difference=this._pages.length-this._controls.$indicators.children().length;if(options.dotData&&difference!==0){for(i=0;i<this._controls.$indicators.children().length;i++){html+=this._templates[this._core.relative(i)]}this._controls.$indicators.html(html)}else{if(difference>0){html=new Array(difference+1).join(this._templates[0]);this._controls.$indicators.append(html)}else{if(difference<0){this._controls.$indicators.children().slice(difference).remove()}}}this._controls.$indicators.find(".active").removeClass("active");this._controls.$indicators.children().eq($.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(options.dots)};Navigation.prototype.onTrigger=function(event){var settings=this._core.settings;event.page={index:$.inArray(this.current(),this._pages),count:this._pages.length,size:settings&&(settings.center||settings.autoWidth||settings.dotData?1:settings.dotsEach||settings.items)}};Navigation.prototype.current=function(){var index=this._core.relative(this._core.current());return $.grep(this._pages,function(o){return o.start<=index&&o.end>=index}).pop()};Navigation.prototype.getPosition=function(successor){var position,length,options=this._core.settings;if(options.slideBy=="page"){position=$.inArray(this.current(),this._pages);length=this._pages.length;successor?++position:--position;position=this._pages[((position%length)+length)%length].start}else{position=this._core.relative(this._core.current());length=this._core.items().length;successor?position+=options.slideBy:position-=options.slideBy}return position};Navigation.prototype.next=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(true),speed)};Navigation.prototype.prev=function(speed){$.proxy(this._overrides.to,this._core)(this.getPosition(false),speed)};Navigation.prototype.to=function(position,speed,standard){var length;if(!standard){length=this._pages.length;$.proxy(this._overrides.to,this._core)(this._pages[((position%length)+length)%length].start,speed)}else{$.proxy(this._overrides.to,this._core)(position,speed)}};$.fn.owlCarousel.Constructor.Plugins.Navigation=Navigation})(window.Zepto||window.jQuery,window,document);(function($,window,document,undefined){var Hash=function(carousel){this._core=carousel;this._hashes={};this.$element=this._core.$element;this._handlers={"initialized.owl.carousel":$.proxy(function(){if(this._core.settings.startPosition=="URLHash"){$(window).trigger("hashchange.owl.navigation")}},this),"prepared.owl.carousel":$.proxy(function(e){var hash=$(e.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[hash]=e.content},this)};this._core.options=$.extend({},Hash.Defaults,this._core.options);this.$element.on(this._handlers);$(window).on("hashchange.owl.navigation",$.proxy(function(){var hash=window.location.hash.substring(1),items=this._core.$stage.children(),position=this._hashes[hash]&&items.index(this._hashes[hash])||0;if(!hash){return false}this._core.to(position,false,true)},this))};Hash.Defaults={URLhashListener:false};Hash.prototype.destroy=function(){var handler,property;$(window).off("hashchange.owl.navigation");for(handler in this._handlers){this._core.$element.off(handler,this._handlers[handler])}for(property in Object.getOwnPropertyNames(this)){typeof this[property]!="function"&&(this[property]=null)}};$.fn.owlCarousel.Constructor.Plugins.Hash=Hash})(window.Zepto||window.jQuery,window,document);
/***** wow.js *****/
(function(){var MutationObserver,Util,WeakMap,getComputedStyle,getComputedStyleRX,__bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i}return-1};Util=(function(){function Util(){}Util.prototype.extend=function(custom,defaults){var key,value;for(key in defaults){value=defaults[key];if(custom[key]==null){custom[key]=value}}return custom};Util.prototype.isMobile=function(agent){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent)};Util.prototype.addEvent=function(elem,event,fn){if(elem.addEventListener!=null){return elem.addEventListener(event,fn,false)}else if(elem.attachEvent!=null){return elem.attachEvent("on"+event,fn)}else{return elem[event]=fn}};Util.prototype.removeEvent=function(elem,event,fn){if(elem.removeEventListener!=null){return elem.removeEventListener(event,fn,false)}else if(elem.detachEvent!=null){return elem.detachEvent("on"+event,fn)}else{return delete elem[event]}};Util.prototype.innerHeight=function(){if('innerHeight'in window){return window.innerHeight}else{return document.documentElement.clientHeight}};return Util})();WeakMap=this.WeakMap||this.MozWeakMap||(WeakMap=(function(){function WeakMap(){this.keys=[];this.values=[]}WeakMap.prototype.get=function(key){var i,item,_i,_len,_ref;_ref=this.keys;for(i=_i=0,_len=_ref.length;_i<_len;i=++_i){item=_ref[i];if(item===key){return this.values[i]}}};WeakMap.prototype.set=function(key,value){var i,item,_i,_len,_ref;_ref=this.keys;for(i=_i=0,_len=_ref.length;_i<_len;i=++_i){item=_ref[i];if(item===key){this.values[i]=value;return}}this.keys.push(key);return this.values.push(value)};return WeakMap})());MutationObserver=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(MutationObserver=(function(){function MutationObserver(){if(typeof console!=="undefined"&&console!==null){console.warn('MutationObserver is not supported by your browser.')}if(typeof console!=="undefined"&&console!==null){console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.')}}MutationObserver.notSupported=true;MutationObserver.prototype.observe=function(){};return MutationObserver})());getComputedStyle=this.getComputedStyle||function(el,pseudo){this.getPropertyValue=function(prop){var _ref;if(prop==='float'){prop='styleFloat'}if(getComputedStyleRX.test(prop)){prop.replace(getComputedStyleRX,function(_,char){return char.toUpperCase()})}return((_ref=el.currentStyle)!=null?_ref[prop]:void 0)||null};return this};getComputedStyleRX=/(\-([a-z]){1})/g;this.WOW=(function(){WOW.prototype.defaults={boxClass:'wow',animateClass:'animated',offset:0,mobile:true,live:true};function WOW(options){if(options==null){options={}}this.scrollCallback=__bind(this.scrollCallback,this);this.scrollHandler=__bind(this.scrollHandler,this);this.start=__bind(this.start,this);this.scrolled=true;this.config=this.util().extend(options,this.defaults);this.animationNameCache=new WeakMap()}WOW.prototype.init=function(){var _ref;this.element=window.document.documentElement;if((_ref=document.readyState)==="interactive"||_ref==="complete"){this.start()}else{this.util().addEvent(document,'DOMContentLoaded',this.start)}return this.finished=[]};WOW.prototype.start=function(){var box,_i,_len,_ref;this.stopped=false;this.boxes=(function(){var _i,_len,_ref,_results;_ref=this.element.querySelectorAll("."+this.config.boxClass);_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){box=_ref[_i];_results.push(box)}return _results}).call(this);this.all=(function(){var _i,_len,_ref,_results;_ref=this.boxes;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){box=_ref[_i];_results.push(box)}return _results}).call(this);if(this.boxes.length){if(this.disabled()){this.resetStyle()}else{_ref=this.boxes;for(_i=0,_len=_ref.length;_i<_len;_i++){box=_ref[_i];var time_interval=parseFloat(box.getAttribute('data-wow-interval'));if(!isNaN(time_interval)&&time_interval>0){var time_start=parseFloat(box.getAttribute('data-wow-delay'));var box_siblings=box.parentNode.children;for(var bi=0;bi<box_siblings.length;bi++){if(parseFloat(box_siblings[bi].getAttribute('data-wow-interval'))>0){box_siblings[bi].setAttribute('data-wow-delay',(bi*time_interval+time_start)+'s');box_siblings[bi].setAttribute('data-wow-interval',-1*time_interval+'s')}}}this.applyStyle(box,true)}this.util().addEvent(window,'scroll',this.scrollHandler);this.util().addEvent(window,'resize',this.scrollHandler);this.interval=setInterval(this.scrollCallback,50)}}if(this.config.live){return new MutationObserver((function(_this){return function(records){var node,record,_j,_len1,_results;_results=[];for(_j=0,_len1=records.length;_j<_len1;_j++){record=records[_j];_results.push((function(){var _k,_len2,_ref1,_results1;_ref1=record.addedNodes||[];_results1=[];for(_k=0,_len2=_ref1.length;_k<_len2;_k++){node=_ref1[_k];_results1.push(this.doSync(node))}return _results1}).call(_this))}return _results}})(this)).observe(document.body,{childList:true,subtree:true})}};WOW.prototype.stop=function(){this.stopped=true;this.util().removeEvent(window,'scroll',this.scrollHandler);this.util().removeEvent(window,'resize',this.scrollHandler);if(this.interval!=null){return clearInterval(this.interval)}};WOW.prototype.sync=function(element){if(MutationObserver.notSupported){return this.doSync(this.element)}};WOW.prototype.doSync=function(element){var box,_i,_len,_ref,_results;if(!this.stopped){if(element==null){element=this.element}if(element.nodeType!==1){return}element=element.parentNode||element;_ref=element.querySelectorAll("."+this.config.boxClass);_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){box=_ref[_i];if(__indexOf.call(this.all,box)<0){this.applyStyle(box,true);this.boxes.push(box);this.all.push(box);_results.push(this.scrolled=true)}else{_results.push(void 0)}}return _results}};WOW.prototype.show=function(box){this.applyStyle(box);return box.className=""+box.className+" "+this.config.animateClass};WOW.prototype.applyStyle=function(box,hidden){var delay,duration,iteration;duration=box.getAttribute('data-wow-duration');delay=box.getAttribute('data-wow-delay');iteration=box.getAttribute('data-wow-iteration');return this.animate((function(_this){return function(){return _this.customStyle(box,hidden,duration,delay,iteration)}})(this))};WOW.prototype.animate=(function(){if('requestAnimationFrame'in window){return function(callback){return window.requestAnimationFrame(callback)}}else{return function(callback){return callback()}}})();WOW.prototype.resetStyle=function(){var box,_i,_len,_ref,_results;_ref=this.boxes;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){box=_ref[_i];_results.push(box.setAttribute('style','visibility: visible;'))}return _results};WOW.prototype.customStyle=function(box,hidden,duration,delay,iteration){if(hidden){this.cacheAnimationName(box)}box.style.visibility=hidden?'hidden':'visible';if(duration){this.vendorSet(box.style,{animationDuration:duration})}if(delay){this.vendorSet(box.style,{animationDelay:delay})}if(iteration){this.vendorSet(box.style,{animationIterationCount:iteration})}this.vendorSet(box.style,{animationName:hidden?'none':this.cachedAnimationName(box)});return box};WOW.prototype.vendors=["moz","webkit"];WOW.prototype.vendorSet=function(elem,properties){var name,value,vendor,_results;_results=[];for(name in properties){value=properties[name];elem[""+name]=value;_results.push((function(){var _i,_len,_ref,_results1;_ref=this.vendors;_results1=[];for(_i=0,_len=_ref.length;_i<_len;_i++){vendor=_ref[_i];_results1.push(elem[""+vendor+(name.charAt(0).toUpperCase())+(name.substr(1))]=value)}return _results1}).call(this))}return _results};WOW.prototype.vendorCSS=function(elem,property){var result,style,vendor,_i,_len,_ref;style=getComputedStyle(elem);result=style.getPropertyCSSValue(property);_ref=this.vendors;for(_i=0,_len=_ref.length;_i<_len;_i++){vendor=_ref[_i];result=result||style.getPropertyCSSValue("-"+vendor+"-"+property)}return result};WOW.prototype.animationName=function(box){var animationName;try{animationName=this.vendorCSS(box,'animation-name').cssText}catch(_error){animationName=getComputedStyle(box).getPropertyValue('animation-name')}if(animationName==='none'){return''}else{return animationName}};WOW.prototype.cacheAnimationName=function(box){return this.animationNameCache.set(box,this.animationName(box))};WOW.prototype.cachedAnimationName=function(box){return this.animationNameCache.get(box)};WOW.prototype.scrollHandler=function(){return this.scrolled=true};WOW.prototype.scrollCallback=function(){var box;if(this.scrolled){this.scrolled=false;this.boxes=(function(){var _i,_len,_ref,_results;_ref=this.boxes;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){box=_ref[_i];if(!(box)){continue}if(this.isVisible(box)){this.show(box);continue}_results.push(box)}return _results}).call(this);if(!(this.boxes.length||this.config.live)){return this.stop()}}};WOW.prototype.offsetTop=function(element){var top;while(element.offsetTop===void 0){element=element.parentNode}top=element.offsetTop;while(element=element.offsetParent){top+=element.offsetTop}return top};WOW.prototype.isVisible=function(box){var bottom,offset,top,viewBottom,viewTop;offset=box.getAttribute('data-wow-offset')||this.config.offset;viewTop=window.pageYOffset;viewBottom=viewTop+Math.min(this.element.clientHeight,this.util().innerHeight())-offset;top=this.offsetTop(box);bottom=top+box.clientHeight;return top<=viewBottom&&bottom>=viewTop};WOW.prototype.util=function(){return this._util!=null?this._util:this._util=new Util()};WOW.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)};return WOW})()}).call(this);
/***** TCaptcha.js *****/
$('head').append('<script src="https://ssl.captcha.qq.com/TCaptcha.js"></script>');

/* å‡½æ•°æ•£è£… */
	function GetQueryString(name){
		var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r!=null) return unescape(r[2]);
		return null;
	}
	function funToggleClass($target,className){
		$target.toggleClass(className);
	}
	function funAddClass($target,className){
		$target.addClass(className);
	}
	function funRemoveClass($target,className){
		$target.removeClass(className);
	}
	function funClickDom($target,delayTime){
		delayTime = delayTime || 0;
		setTimeout(function () { $target.click() }, delayTime);
	}
	function funRemove($target,delayTime){
		delayTime = delayTime || 0;
		setTimeout(function(){$target.remove()},delayTime);
	}
	function funToggleActive($obj, level_, className){
		$obj.click(function(){
			var $target = $(this);
			level_ = level_ || 0;
			className = className || 'active';
			for(var i = 0; i<level_; i++) $target = $target.parent();
			$target.addClass(className).siblings().removeClass(className);
		});
	}

/* å°æç¤ºæ¡† */
	function funTips(text_,delayTime){
		$('.tipsBox').remove();
		var timestamp = 'tips_'+new Date().getTime(),
			delayTime = delayTime || 3000;
		$('body').append('<div class="tipsBox" id="'+timestamp+'">'+text_+'</div>');
		setTimeout(function(){
			$('#'+timestamp).addClass('hide_');
			setTimeout(function(){$('#'+timestamp).remove()},300);
		},delayTime);
	}

/* èŽ·å–å…¨å±€å˜é‡ */
	function get_siteInfo(arr){
		if(typeof(window.siteInfo)=='undefined') return false;
		var data = window.siteInfo;
		for (let i = 0; i < arr.length; i++){
			if(typeof(data[arr[i]])=='undefined') return false;
			data = data[arr[i]];
		}
		return data;
	}

/* èŽ·å–ç¿»è¯‘ */
	function get_fanyi(n){
		if(typeof(window.fanyi)=='undefined' || typeof(window.fanyi[n])=='undefined') return '';
		return window.fanyi[n];
	}

/* æ—¶é—´æˆ³è½¬æ¢ */
	function formatAdd0(x){return x<10?'0'+x:x }
	function format(timestamp){
		var time = new Date(timestamp);
		var y = time.getFullYear();
		var m = time.getMonth()+1;
		var d = time.getDate();
		var h = time.getHours();
		var mm = time.getMinutes();
		var s = time.getSeconds();
		return y+'-'+formatAdd0(m)+'-'+formatAdd0(d)+' '+formatAdd0(h)+':'+formatAdd0(mm)+':'+formatAdd0(s);
	}

/* æ•´ç‰ˆæ¨¡å— */
	function fullPage_($target,speed_){
		var topOffset = touch_top = 0, speed_ = speed_ || 800, return_ = true;
		/* æ»šè½®äº‹ä»¶ */
		$target.on("mousewheel DOMMouseScroll", function (e) {
			if (!$('body').hasClass('designer-body')) {
				e = e || window.event;
				if (e.preventDefault) e.preventDefault();//å–æ¶ˆé»˜è®¤è¡Œä¸º
				else e.returnValue = false;
				if (return_) {
					window.event ? window.event.cancelBubble = true : e.stopPropagation();
					var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));
					if (delta > 0) goPrev(this); //å‘ä¸Š
					else if (delta < 0) goNext(this); //å‘ä¸‹
					return_ = false;
				}
			}
		});
		/* è§¦ç¢°äº‹ä»¶ */
		if($target.hasClass('touch')){
			$target.on('touchstart',function(e){ touch_top = e.originalEvent.changedTouches[0].pageY; });
			$target.on('touchmove',false);
			$target.on('touchend', function (e) {
				if (return_) {
					if (touch_top < e.originalEvent.changedTouches[0].pageY) goPrev(this); //å‘ä¸Š
					else if (touch_top > e.originalEvent.changedTouches[0].pageY) goNext(this); //å‘ä¸‹
					return_ = false;
				}
			});
		}
		/* å‘ä¸Š */
		function goPrev(div){
			if(!$('body').hasClass('designer-body')){
				topOffset = div.offsetTop;
				//å¦‚æžœå°šæœªç½®é¡¶
				if($(window).scrollTop() > topOffset){
					$('body,html').stop(true).animate({ scrollTop: topOffset }, speed_, function(){
						return_ = true;
					});
				}
				//å¦‚æžœå·²ç»ç½®é¡¶
				else{
					$('body,html').stop(true).animate({ scrollTop: topOffset - div.offsetHeight }, speed_, function () {
						return_ = true;
					});
				}
			}
		}
		/* å‘ä¸‹ */
		function goNext(div){
			if(!$('body').hasClass('designer-body')){
				topOffset = div.offsetTop;
				//å¦‚æžœå°šæœªç½®é¡¶
				if($(window).scrollTop() < topOffset){
					$('body,html').stop(true).animate({ scrollTop: topOffset }, speed_, function(){
						return_ = true;
					});
				}
				//å¦‚æžœå·²ç»ç½®é¡¶
				else{
					$('body,html').stop(true).animate({ scrollTop: topOffset + div.offsetHeight }, speed_, function(){
						return_ = true;
					});
				}
			}
		}
	}

/* è§†è§‰æ»šå·® */
	function scrollMove($obj){
		if(!$obj) $obj = $('.scrollMove');
		$obj.each(function(){
			var iWH = $(window).height(),
				iWT = $(window).scrollTop() + iWH,
				iOT = $(this).offset().top,
				iTIH = $(this).innerHeight(),
				iT = iWT - iOT,
				_range = parseFloat($(this).data('scroll_range')) || 0.2;

			if(iT >= 0 && iT <= iWH+iTIH){
				var bgp = $(this).css('background-position').split(' ');
				$(this).css('background-position', bgp[0] + ' ' + iT * -_range + 'px');
			}
		});
	}

/* æ»šåŠ¨ */
	function scrollBox(object, options) {
		var $object = $(object),
			obj = this,
			interval,
			$ul = $object.find('ul'),
			$li = $object.find('li'),
			ul_html = $ul.html();

		/* é…ç½®é¡¹ */
		obj.config = {
			column: 3,		//åˆ—æ•°
			column_lg: 5,	//åˆ—æ•° å±å¹•â‰¥1200px
			column_md: 4,	//åˆ—æ•° å±å¹•â‰¥992px
			column_sm: 3,	//åˆ—æ•° å±å¹•â‰¥768px
			column_xs: 2,	//åˆ—æ•° å±å¹•<768px
			multiple: 1,	//å€æ•°
			speed: 10		//é€Ÿåº¦
		};
		/* è‡ªå®šä¹‰ */
		for(var key in options) obj.config[key] = options[key];

		/*åˆå§‹åŒ–*/
		if(!obj.config.column){
			if($(window).width()<768) obj.config.column = obj.config.column_xs;
			else if($(window).width()>=1200) obj.config.column = obj.config.column_lg;
			else if($(window).width()>=992) obj.config.column = obj.config.column_md;
			else obj.config.column = obj.config.column_sm;
		}
		var li_width = $object.width()/obj.config.column;
		obj.addLi = function(){
			if($li.length<obj.config.column+1){
				$ul.append(ul_html);
				$li = $object.find('li');
				obj.addLi();
			}
		}

		obj.addLi();
		$li.width(li_width);
		$ul.width(li_width*$li.length).css('left',0);

		obj.scroll = function(){
			var ul_left = parseFloat($ul.css('left'));
			if(Math.abs(ul_left)<=li_width){
				$ul.css('left',ul_left-obj.config.multiple);
			}else{
				$li = $object.find('li');
				$ul.css('left',0).append($li.eq(0));
			}
		}
		/* åˆ›å»ºè®¡æ—¶å™¨ */
		obj.starScroll = function(){
			interval = setInterval(obj.scroll, obj.config.speed);
		}
		/* æ¸…é™¤è®¡æ—¶å™¨ */
		obj.stopScroll = function(){
			window.clearInterval(interval);
		}
		/* é»˜è®¤æ‰§è¡Œ */
		obj.starScroll();
		$object.hover(function(){
			obj.stopScroll();
		},function(){
			obj.starScroll();
		});
	}

/* ç®€æ˜“è§†å·®æ•ˆæžœ */
	function parallaxMove($obj, options){
		var obj = this;
		if(typeof $obj == 'string') $obj = $($obj);
		if(!$obj) return;

		/* é…ç½®é¡¹ */
		obj.config = {
			$window: $(window),	//å®¹å™¨
			translate: false,	//æ—‹è½¬ç­‰çº§
			rotate: false,		//ä½ç§»ç­‰çº§
			reverse: false,		//åå‘
			designer: false,	//è®¾è®¡æ¨¡å¼ä¸‹
			screen: 768		//å±å¹•768ä»¥ä¸Š
		};

		/* è‡ªå®šä¹‰ */
		for(var key in options) obj.config[key] = options[key];

		if(!obj.config.designer && $('body').hasClass('designer-body')) return;
		else if($(window).width()<obj.config.screen) return;
		obj.config.$window.mousemove(function(even){
			$obj.each(function(){
				var translate = obj.config.translate,
					rotate = obj.config.rotate;
				if(!translate) translate = $(this).data('translate') || 50;
				if(!rotate) rotate = $(this).data('rotate') || 100;
				translate = parseInt(translate);
				rotate = parseInt(rotate);

				var x = (even.clientX - $(window).width()/2),
					y = (even.clientY - $(window).height()/2);
				if(obj.config.reverse || $(this).hasClass('reverse')){
					x = -x;
					y = -y;
				}
				$(this).css({
					transform: 'perspective(1000px) translateX(' + x / translate + 'px) translateY(' + y / translate + 'px) rotateX(' + -y / rotate + 'deg) rotateY(' + x / rotate + 'deg)'
				});
			});
		});
		obj.config.$window.mouseleave(function(even){
	    	$(this).css({
	            transform: 'perspective(0px) translateX(0px) translateY(0px) rotateX(0deg) rotateY(0deg)'
	        });
    	});
	}

/* æ‡’åŠ è½½ */
	function lazyImg_($obj){
		lazyImgChange($obj);
		$obj.find('[lazy-src]').each(function(){
			lazyImgChange($(this));
		});
  }

  /* åˆ¤æ–­æµè§ˆå™¨æ˜¯å¦æ”¯æŒwebp */

  function img_test() {
    var img = new Image();
    function getResult(event) {
        //å¦‚æžœè¿›å…¥åŠ è½½ä¸”å›¾ç‰‡å®½åº¦ä¸º1(é€šè¿‡å›¾ç‰‡å®½åº¦å€¼åˆ¤æ–­å›¾ç‰‡æ˜¯å¦å¯ä»¥æ˜¾ç¤º)
        if($('.jcContact').length < 1 ) window.isSupportWebp = event && event.type === 'load' ? img.width == 1 : false;
    }
    img.onerror = getResult;
    img.onload = getResult;
    img.src = 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA='; //ä¸€åƒç´ å›¾ç‰‡
  }
  img_test()

	function lazyImg_resetSrc(src,w){
		if(!src)return;
		src = src.replace("imageslim/","");
    var w=parseInt((w||window.innerWidth)*window.devicePixelRatio),z=/\/w\/([0-9]+)/,m=src.match(z);
    return src.indexOf('?imageView2/2')<0?src+'?imageView2/2/w/'+w:(m&&m.length>1)?src.replace(z,'/w/'+(m[1]>w?w:m[1]))+ (window.isSupportWebp ? '/format/webp' : '' ) : src;
	}
	function lazyImgChange($obj){
		var src = $obj.attr('lazy-src');
		src = lazyImg_resetSrc(src);

		if(typeof($obj.attr('bgimg')) == 'undefined') $obj.attr('src', src);
		else $obj.css('background-image', 'url('+ src +')');
		$obj.removeAttr('lazy-src');
	}

	function lazyImg($obj){
		if(!$obj) $obj = $('[lazy-src]');
		$obj.each(function () {
			var iWH = $(window).height(),
				iWT = $(window).scrollTop() + iWH,
				iOT = $(this).offset().top,
				iTIH = $(this).innerHeight(),
				iT = iWT - iOT;

			if ($(this).attr('lazy-src') && iT >= 0 && iT <= iWH + iTIH) {
				lazyImgChange($(this));
			}
		});

	}

/* iGotoæ»šåŠ¨ç»„ä»¶ */
	function iGoto($obj, options){
		var obj = this;
		if(!$obj) return;
		else if(typeof $obj == 'string') $obj = $($obj);

		/* é…ç½®é¡¹ */
		obj.config = {
			$target: $obj,		//ç›®æ ‡
			arrow: 'top',		//æ–¹å‘
			level: 1,			//ç­‰çº§
			speed: 500,			//æ»šåŠ¨æ—¶é—´
			iNotMe: 'iNotMe'	//è‡ªå·±äºº
		};

		/* è‡ªå®šä¹‰ */
		for(var key in options) obj.config[key] = options[key];
		var $target = obj.config.$target;

		/* æŸ¥æ‰¾ç›®æ ‡ è‡ªåŠ¨æŽ’é™¤è‡ªå·±äºº */
		obj.iFind = function(){
			if(obj.config.arrow=='top' && $target.prev()) $target = $target.prev();
			else if($target.next()) $target = $target.next();
			if($target.hasClass(obj.config.iNotMe)) obj.iFind();
		}

		/* ç§»åŠ¨åˆ°ç›®æ ‡ä½ç½® */
		obj.iGoto = function(num){
			$('body,html').stop(true).animate({ scrollTop: num }, obj.config.speed);
		}

		/* æŒ‰ç­‰çº§æŸ¥æ‰¾ */
		for(var i=0; i<obj.config.level; i++) obj.iFind();

		/* ç‚¹å‡»åŽç§»åŠ¨ */
		$obj.on('click', function(){
			if(obj.config.level>0) obj.iGoto($target.offset().top);
			else if(obj.config.arrow=='top') obj.iGoto(0);
			else obj.iGoto($('body').height());
		});
	}

/* å¤´éƒ¨æœç´¢ä¸‹æ‹‰æ¡† */
	function relate_search(inp){
		var obj = {};
		obj.inp = inp;
		obj.div = inp.siblings(".header_search_select");
		obj.ul = obj.div.find("ul");
		obj.arr = [];
		obj.bol = false;
		obj.liact = -1;
		obj.fetch = function(keyword) {
			$.ajax({
				type: "GET",
				url: "/api/cms/search",
				dataType: "json",
				success: function(json){
					if (!json.status) {
						obj.arr = json.data;
					}
				}
			});
		};
		// obj.fetch();
		obj.fun = function(){
			if (!obj.bol) {return}
			obj.index = 0;
			obj.ul.html("");
			obj.liact = -1;
			for (var i = 0; i < obj.arr.length; i++) {
				if (obj.arr[i].indexOf(obj.inp.val()) > -1 && obj.inp.val() != "") {
					obj.index ++;
					obj.ul.append("<li>" + obj.arr[i] + "</li>");
					if (obj.index>=5) {break;}
				}
			}
			if (obj.index > 0 && obj.bol) {
				obj.div.show();
			}else {
				obj.div.hide();
			}
			obj.bol = false;
		}
		obj.li_fun = function(idx){
			obj.ul.find("li").eq(idx).addClass("active").siblings("li").removeClass("active");
		}
		obj.inp_val = function(idx){
			obj.inp.val(obj.ul.find("li").eq(idx).text());
		}

		obj.inp.focus(function(){
			obj.bol = true;
			if (obj.arr.length<=0) {
				obj.fetch();
			}
			obj.div.show();
		});
		obj.inp.blur(function(){
			setTimeout(function(){
				obj.bol = false;
				obj.div.hide();
			}, 200);
		});
		obj.inp.bind('input propertychange', function() {
			obj.bol = true;
			obj.fun();
		});

		obj.ul.on("mouseover","li",function(){
			obj.liact = $(this).index();
			obj.li_fun(obj.liact);
		}).on("mouseout","li",function(){
			$(this).removeClass("active");
			obj.liact = -1;
		});
		obj.ul.on("click","li",function(){
			obj.inp_val($(this).index());
		});
		obj.inp.keyup(function (event) {
			if (event.keyCode == 38) {
				obj.liact--;
				if (obj.liact < 0) {
					obj.liact = obj.ul.find("li").length - 1;
				}
				obj.li_fun(obj.liact);
				obj.inp_val(obj.liact);

			} else if (event.keyCode == 40) {
				obj.liact++;
				if (obj.liact > obj.ul.find("li").length - 1) {
					obj.liact = 0;
				}
				obj.li_fun(obj.liact);
				obj.inp_val(obj.liact);
			}
		});
	}

/* é¢†å–ä¼˜æƒ åˆ¸ */
	var lock_coupon = false;
	function receiveCoupon(opts){
		$(opts.object.wrap).find(opts.object.receive).unbind("click").click(function(){
			if (lock_coupon) {
				return;
			}

			lock_coupon = true;
			var self = $(this);

			$.ajax({
				url: "/shopping/coupon",
				type: 'POST',
				dataType: 'json',
				async: false,
				cache: false,
				data: {method: "receive", id: self.data('id')},
				success: function (result) {
					alert(opts.lang[result.error]);
					if (opts.object.no_alert) {
						if (result.error == 0) {
							self.text(opts.object.no_alert.receive);
							self.attr("disabled","disabled");
						}
						if (result.error == 5) {
							self.text(opts.object.no_alert.receive);
							self.attr("disabled","disabled");
						}
						if (result.error == 4||result.error == 6) {
							self.text(opts.object.no_alert.finished);
							self.attr("disabled","disabled");
						}
					}

					if (result.error == 0) {
						// é¢†å–æˆåŠŸ
						if (opts.object.percent_width) {
							self.parent(opts.object.wrap).find(opts.object.percent_width).css('width', result.data.percent + '%');
						}

						if (opts.object.percent_text) {
							self.parent(opts.object.wrap).find(opts.object.percent_text).text(result.data.percent);
						}

						lock_coupon = false;

					} else if(result.error == 2) {
						location.href = '/member/login';
					}

					lock_coupon = false;
				}
			});
			return false;
		});
	}

/* è½®æ’­é…ç½® */
	function _swiper(id, options){
		if(!id) return;
		var obj = this;
		obj.config = {
			swiper: '.swiper',
			nav: '.nav i',
			dots: '.swiper-pagination',
			set: {}
		};
		for(var key in options) obj.config[key] = options[key];
		var config = {
			prevButton: id+' .swiper-prev',
			nextButton: id+' .swiper-next',
			pagination: id+' '+obj.config.dots,
			autoplay: parseInt($(id+' [module-setting="autoplay"]').val()) || 0,
			slidesPerView: parseFloat($(id+' [module-setting="column-lg"]').val()) || 1,
			loop: $(id+' [module-setting="loop"]').val() == 'true' ? true : false,
			effect: $(id+' [module-setting="effect"]').val() || 'slide',
			breakpoints: {
				767: {slidesPerView: parseFloat($(id+' [module-setting="column-xs"]').val()) || 1},
				991: { slidesPerView: parseFloat($(id+' [module-setting="column-sm"]').val()) || 1},
				1199: {slidesPerView: parseFloat($(id+' [module-setting="column-md"]').val()) || 1}
			},
			paginationClickable: true,
			autoHeight: true,
			lazyLoading: true
		},
		code = $(id+' code').text();
		code = code ? JSON.parse(code) : [];
		$.each(code, function (name, value) { config[name] = value });
		if(obj.config.set) $.each(obj.config.set, function(name, value){config[name] = value});
		$(id + ' ' + obj.config.dots).removeClass('hide').addClass($(id + ' [module-setting="dots"]').val());
		$(id+' '+obj.config.nav).addClass($(id+' [module-setting="arrow"]').val());
		$(id +' [data-src]').each(function(){
			var src = lazyImg_resetSrc($(this).attr('data-src'));
			$(this).attr('data-src',src);
  		});
		$(id +' [data-background]').each(function(){
			var src = lazyImg_resetSrc($(this).attr('data-background'));
			$(this).attr('data-background',src);
  		});
		new Swiper(id+' '+obj.config.swiper, config);
	}

/* aiæ ‡é¢˜é…ç½® */
	function _aiTitle(id){
		if(!id || $('body').hasClass('designer-body')) return;
		var obj = $(id).parents('[layout-id="1"]'),
			style = parseInt($(id+' [module-setting="ai-style"]').val()) || 0,
			merge = parseInt($(id+' [module-setting="ai-merge"]').val()) || 1;
		for(var i=1; i<merge; i++){
			if(obj.next().length==0) break;
			obj.append(obj.next());
		}
		if(style){
			var $style = $(obj.find('[layout-id="1"]')[style-2]);
			if($style.length!=0){
				obj.css({
					'color': $style.css('color'),
					'background-color': $style.css('background-color')
				});
			}
		}
		obj.find('.ai-padding').removeClass('ai-padding');
	}

/* æ–°çª—å£æ‰“å¼€ */
	//ç®€åŒ–ç‰ˆ
	function _alert(text, ON_f_or_h){

		var ON_href = '',
			ON_callback = function(){};

		//ä¼ å…¥å‡½æ•°æˆ–é“¾æŽ¥
		if(ON_f_or_h) typeof(ON_f_or_h) == 'string' ? ON_href = ON_f_or_h : ON_callback = ON_f_or_h;

		new windowOpen({
			text: text,
			ON: {href: ON_href, callback: ON_callback},
			OFF: {show: false}
		});
	}
	//ç®€åŒ–ç‰ˆ
	function _confirm(text, ON_f_or_h, OFF_f_or_h){

		var ON_href = '',
			OFF_href = '',
			ON_callback = function(){},
			OFF_callback = function(){};

		//ä¼ å…¥å‡½æ•°æˆ–é“¾æŽ¥
		if(ON_f_or_h) typeof(ON_f_or_h) == 'string' ? ON_href = ON_f_or_h : ON_callback = ON_f_or_h;
		if(OFF_f_or_h) typeof(OFF_f_or_h) == 'string' ? OFF_href = OFF_f_or_h : OFF_callback = OFF_f_or_h;

		new windowOpen({
			text: text,
			ON: { href: ON_href, callback: ON_callback },
			OFF: { href: OFF_href, callback: OFF_callback }
		});
	}
	//é«˜çº§ç‰ˆ
	function windowOpen(options){

		var obj = this;
		obj.config = {
			id: '',
			title: ' ' || get_fanyi('prompt'),
			text: '',
			ON: {
				text: get_fanyi('s_c_d_y'),
				href: '',
				modalHide: true,
				callback: function(){}
			},
			OFF: {
				text: get_fanyi('s_c_d_n'),
				href: '',
				modalHide: true,
				show: true,
				callback: function(){}
			}
		};
		obj['modalRemove'] = $('body').hasClass('modal-open');
		//æ›¿æ¢è‡ªå®šä¹‰è®¾ç½®
		for(var key1 in options){
			if(typeof(options[key1])!='object') obj.config[key1] = options[key1];
			else for(var key2 in options[key1]) obj.config[key1][key2] = options[key1][key2];
		}
		//åˆ›å»ºdomèŠ‚ç‚¹
		var body = $('body'),
			body_pr = body.css('padding-right'),
			oObj = $('<div id="'+ obj.config.id +'" class="modal fade windowOpen" tabindex="-1" role="dialog"><div class="modal-dialog" role="document" style="max-width:480px;z-index:99999999;"><div class="modal-content"><div class="modal-body"><h4 class="title">'+ obj.config.title +'</h4><div class="description" style="opacity:.77">'+ obj.config.text +'</div></div><div class="modal-footer text-center" style="border-top:none;text-transform:uppercase"><a class="btn btn-primary ON" target="_blank" keep-link>'+ obj.config.ON.text +'</a><a class="btn btn-default OFF" target="_blank" keep-link>'+ obj.config.OFF.text +'</a></div></div></div></div>');

		body.append(oObj);

		//bootstrapæ¨¡æ€æ¡†æ“ä½œ
		oObj.modal('show');
		if(body.css('padding-right')!=body_pr) body.css('padding-right', body_pr);
		obj.modalHide = function(b){
			if(b){
				oObj.next('.modal-backdrop').remove();
				oObj.modal('hide').remove();
				if(!obj.modalRemove) $('body').removeClass('modal-open');
			}
		}

		//OFFæ“ä½œ
		var oObj_OFF = oObj.find('.OFF');
		if(obj.config.OFF.show){
			oObj_OFF.on('click', function(){
				obj.config.OFF.callback();
				obj.modalHide(obj.config.OFF.modalHide);
			});
			if(obj.config.OFF.href){
				oObj_OFF.attr('href', obj.config.OFF.href);
			}
		}
		else oObj_OFF.hide();
		//ONæ“ä½œ
		oObj.find('.ON').on('click', function(){
			obj.config.ON.callback();
			obj.modalHide(obj.config.ON.modalHide);
		});
		if(obj.config.ON.href){
			oObj.find('.ON').attr('href', obj.config.ON.href);
		}
	}

/* æ ‡ç­¾åˆ‡æ¢ */
	function _tagToggle(items, item){
		$('[class*="_tagToggle-'+items+'"]').hide();
		$('._tagToggle-'+items+'-'+item).show();
	}

/* åˆ†é¡µè·³è½¬ */
	function pageUrl(input, max){

		var base_href = window.location.href;

		// å¤„ç†getå‚æ•°
		var param_regex = /(.*)\?(.*)$/,
				param_exec = param_regex.exec(window.location.href),
				param = param_exec ? '?'+param_exec[param_exec.length-1] : '';
				base_href = base_href.replace(param_regex, '$1');

		// å¤„ç†åŽç¼€
        // å¤„ç†åŽç¼€
        var url = window.location.href;
        url =url.split('?');
		var suffix_regex = /(.*)\.([a-zA-Z]+)$/,
				suffix_exec = suffix_regex.exec(url[0]),
				suffix = suffix_exec ? '.'+suffix_exec[suffix_exec.length-1] : '';
				base_href = base_href.replace(suffix_regex, '$1');

		// è®¡ç®—é¡µæ•°
		var page_val = parseInt($(input).val()),
				page = page_val>max ? '_'+max : ((page_val<=1 || !page_val) ? '' : '_'+page_val);
				base_href = base_href.replace(/(.*)_(\d+)$/, '$1');

		// è®¡ç®—href
		var href = base_href + page + suffix + param;
		// è·³è½¬
		window.location.href = href;
		return false;
	}



/**
 * å°è£…jsæœ¬åœ°ç¼“å­˜
 * key é”®
 * value å€¼
 * ttl_ms è¿‡æœŸæ—¶é—´ æ¯«ç§’ è®¾ç½®çš„æ—¶å€™ä¹˜ä»¥1000
 */
	var foowwLocalStorage = {
    set: function (key, value, ttl_ms) {
        var data = { value: value, expirse: new Date(ttl_ms).getTime() };
        localStorage.setItem(key, JSON.stringify(data));
    },
    get: function (key) {
        var data = JSON.parse(localStorage.getItem(key));
        if (data !== null) {
            if (data.expirse != null && data.expirse < new Date().getTime()) {
                localStorage.removeItem(key);
            } else {
                return data.value;
            }
        }
        return null;
    }
	}
/* è¯·æ±‚åˆ¤æ–­ç½‘ç«™æ˜¯å¦å¼€å¯å±è”½ä¸­å›½IPï¼Œå¦‚æžœè¿”å›žç»“æžœæ˜¯trueï¼Œåˆ™è·³åˆ°302é¡µé¢ */
	function checkIP(){
		var is_designer =GetQueryString('design') ;//éªŒè¯æ˜¯å¦æ˜¯è£…ä¿®é¡µé¢

		if(is_designer == null){

			//èŽ·å–å½“å‰åŸŸå
      // var domain = document.domain;
      var domain =window.location.protocol+'//'+ document.domain;

      //èŽ·å–ç¼“å­˜,å­˜åœ¨ç¼“å­˜å°±ä¸è·‘åŽå°
      var is_china = foowwLocalStorage.get('is_china_'+domain);
      if(is_china != null){
        if(is_china == 1){
          window.location.href = domain + "/templates/errorpage/403.html";
        }
        return true;
			}

			//ä¸æ˜¯è£…ä¿®é¡µï¼Œéœ€è¦è¯·æ±‚æŽ¥å£éªŒè¯ip
			$.ajax({
				type: "POST",
				url: "/designer/check-ip",
				dataType: "json",
				async:false,
				success: function(json) {
					//è®¾ç½®ç¼“å­˜
                    var times = new Date().getTime();//å½“å‰çš„æ—¶é—´æˆ³ æ¯«ç§’
                    foowwLocalStorage.set('is_china_'+domain,json.error,times+3600*2*1000);

					if(json.error == 1){
						window.location.href = domain + "/templates/errorpage/403.html";
					}
				},
				error:function(){
					console.log("/designer/check-ip è¯·æ±‚ç½‘ç»œå¤±è´¥");
				}
			});
		}
	}
	if(get_siteInfo(['checkIP']) == '1') checkIP();

// æç¤ºä¿¡æ¯
var messages_upload_prompt = null;
/* å›¾ç‰‡ä¸‹è½½æç¤º */
	function upload_prompt_modal_fun(objs) {
		var that = this,
		obj = {
			title: messages_upload_prompt?messages_upload_prompt.inquire_attach_tip: get_fanyi('prompt'), // å¼¹æ¡†æ ‡é¢˜
			text: messages_upload_prompt?messages_upload_prompt.inquire_attach_uploading: get_fanyi('inquire_attach_uploading'), // å¼¹æ¡†å†…å®¹
			icon: "", // å›¾æ ‡errorå¤±è´¥,warningè­¦å‘Š,successæˆåŠŸ ä¸å¡«é»˜è®¤å†™æç¤º
			btn: messages_upload_prompt?messages_upload_prompt.inquire_attach_confirm: get_fanyi('s_c_d_y'), // ç¡®å®šæŒ‰é’®å†…å®¹
			close: true,
			add_html: '', // æ’å…¥å†…å®¹
			show_fun:function(){}, // æ˜¾ç¤ºçš„æ—¶å€™æ‰§è¡Œ
			hide_fun:function(){}, //å…³é—­çš„æ—¶å€™æ‰§è¡Œ
			determine_fun:function(){} // ç‚¹å‡»ç¡®å®šæŒ‰é’®
		},
		btn = '',
		add_html = '',
		close = '';
		that.obj = $.extend(true,{},obj,objs);
		that.show = function(){
			$("html,body").addClass("upload_prompt_modal_hidden");
			if (that.obj.show_fun) {
				that.obj.show_fun();
			}
			if (that.obj.btn) {
				btn = '<div class="btn pull-right"><span>'+that.obj.btn+'</span></div>';
			}
			if (that.obj.close) {
				close = '<div class="close">Ã—</div>';
			}
			that.con = $('<div class="upload_prompt_modal">'+
					'<div class="modal_box">'+
						'<div class="head">'+close+
							'<div class="txt">'+that.obj.title+'</div>'+
						'</div>'+
						'<div class="con">'+
							'<div class="icon '+that.obj.icon+'"></div>'+
							'<div class="text">'+that.obj.text+'</div>'+
						'</div>'+
						'<div class="bottom_box clearfix">'+btn+'</div>'+
					'</div>'+
				'</div>');
			$('body').append(that.con);
			that.con.find(".modal_box").fadeIn(200);
			that.con.find(".close").click(function(){
				that.hide();
			});
			that.con.find(".bottom_box .btn").click(function(){
				that.determine();
			});
		}
		that.hide = function(){
			if (that.obj.hide_fun) {
				that.obj.hide_fun();
			}
			that.con.remove();
			$("html,body").removeClass("upload_prompt_modal_hidden");
		}
		that.determine = function(){
			if (that.obj.determine_fun) {
				that.obj.determine_fun();
			}
			that.con.remove();
			$("html,body").removeClass("upload_prompt_modal_hidden");
		}
		that.progressbar = function(n){
			var n = n + "%";
			if (that.con.find(".add_html").length==0) {
				var add_html = $('<div class="add_html">'+
								'<div class="progress">'+
									'<div class="progress-bar" role="progressbar" style="width:'+n+';min-width:10%"></div>'+
								'</div>'+
								'<div class="nums">'+n+'</div>'+
							'</div>');
				that.con.find(".con").append(add_html);
			}else {
				that.con.find(".add_html .progress-bar").css("width",n);
				that.con.find(".add_html .nums").text(n);
			}
		}
		that.progressbartxt = function(txt){
			if (that.con.find(".complete").length==0) {
				var complete = $('<div class="complete">'+txt+'</div>');
				that.con.find(".con .add_html").append(complete);
			}else {
				that.con.find(".add_html .complete").text(txt);
			}
		}
	}

/* é™„ä»¶ä¸Šä¼  */
	function form_uploader(uniqueid){

		var add_file = 'add_file_' + uniqueid,
			embed_captcha = '#embed_captcha_' + uniqueid,
			data_fields = '[data-fields="form_' + uniqueid + '"]';

		var uploader_ = null; //å…¨å±€ä¸Šä¼ æ’ä»¶
		if ($('#'+add_file).length>0) {
			initModalFileUploader(add_file,0,data_fields);
		}
		// ä¸Šä¼ é™„ä»¶
		function initModalFileUploader(id,attr,eventDom) {
			// ä¸Šä¼ æ•°é‡é™åˆ¶
			var setting = {
				// é€‰å®Œæ–‡ä»¶åŽï¼Œæ˜¯å¦è‡ªåŠ¨ä¸Šä¼ ã€‚
				// auto: true,
				// æ–‡ä»¶æŽ¥æ”¶æœåŠ¡ç«¯ã€‚
				server: "http://upload.qiniup.com",
				threads: 1, //ä¸Šä¼ å¹¶å‘æ•°
				// éªŒè¯å•ä¸ªæ–‡ä»¶å¤§å°æ˜¯å¦è¶…å‡ºé™åˆ¶500K, è¶…å‡ºåˆ™ä¸å…è®¸åŠ å…¥é˜Ÿåˆ—
				fileSingleSizeLimit: 1024*1024*20,
				fileNumLimit:5,
				// é€‰æ‹©æ–‡ä»¶çš„æŒ‰é’®ã€‚å¯é€‰ã€‚
				pick: "#" + id,
				accept: {
					title: 'file',
					extensions: 'pdf,doc,docx,xls,xlsx,txt,jpg,png,bmp,gif,rar,zip',
					mimeTypes: '*/*'
				},
				// ä¸åŽ‹ç¼©image, é»˜è®¤å¦‚æžœæ˜¯jpegï¼Œæ–‡ä»¶ä¸Šä¼ å‰ä¼šåŽ‹ç¼©ä¸€æŠŠå†ä¸Šä¼ ï¼
				resize: false,
				compress: {
					width: '100%',
					height: '100%', // å›¾ç‰‡è´¨é‡ï¼Œåªæœ‰typeä¸º`image/jpeg`çš„æ—¶å€™æ‰æœ‰æ•ˆã€‚
					quality: false,  // æ˜¯å¦å…è®¸æ”¾å¤§ï¼Œå¦‚æžœæƒ³è¦ç”Ÿæˆå°å›¾çš„æ—¶å€™ä¸å¤±çœŸï¼Œæ­¤é€‰é¡¹åº”è¯¥è®¾ç½®ä¸ºfalse.
					allowMagnify: false,    // æ˜¯å¦å…è®¸è£å‰ªã€‚
					crop: false,
					// å¦‚æžœå‘çŽ°åŽ‹ç¼©åŽæ–‡ä»¶å¤§å°æ¯”åŽŸæ¥è¿˜å¤§ï¼Œåˆ™ä½¿ç”¨åŽŸæ¥å›¾ç‰‡    // æ­¤å±žæ€§å¯èƒ½ä¼šå½±å“å›¾ç‰‡è‡ªåŠ¨çº æ­£åŠŸèƒ½
					noCompressIfLarger: false,    // å•ä½å­—èŠ‚ï¼Œå¦‚æžœå›¾ç‰‡å¤§å°å°äºŽæ­¤å€¼ï¼Œä¸ä¼šé‡‡ç”¨åŽ‹ç¼©ã€‚
					compressSize: 0
				},
			},
			uploader = WebUploader.create(setting),
			addfileList = $(setting.pick).siblings(".addfileList"),
			upload_arr = [],
			token_index = 0,
			token_arr = [];

			// æç¤ºæ¡†
			var prompt_box = new upload_prompt_modal_fun({
				// btn:"ç¡®å®š",
				// icon:"error",
				close:false,
				hide_fun:function(){
					// console.log("å–æ¶ˆå…³é—­");
				},
				determine_fun:function(){
					// console.log("ç¡®è®¤å…³é—­");
				},
				show_fun:function(){
					// console.log("æ˜¾ç¤ºæ¡†è§¦å‘");
				}
			});
			// æ–‡ä»¶åŠ å…¥é˜Ÿåˆ—
			uploader.on( 'fileQueued', function( file ) {
				var li = $('<li class="file_item clearfix" file_id="'+file.id+'" file_type="'+file.type+'" file_ext="'+file.ext+'">'+
							'<span class="file_name" title="'+file.name+'">'+file.name+'</span>'+
							'<span class="file_delete" delete-id="'+file.id+'">åˆ é™¤</span>'+
							// '<input type="hidden" value="'+file.name+'" name="upload_file_name[]">'+
							// '<input type="hidden" value="'+file.url+'" name="upload_file_url[]">'+
						'</li>');
				addfileList.append(li);
				li.find(".file_delete").click(function(){
					uploader.removeFile(file);
					$(this).parent().remove();
				});
			});

			// ä¸€å †æ–‡ä»¶åŠ å…¥é˜Ÿåˆ—
			uploader.on( 'filesQueued', function( file ) {

			});

			//ä¸Šä¼ è¿‡ç¨‹ä¸­è§¦å‘ï¼Œæºå¸¦ä¸Šä¼ è¿›åº¦
			uploader.on('uploadProgress', function (file, percentage) {
				prompt_box.progressbar(parseInt(percentage*100));
				prompt_box.progressbartxt(token_index+"/"+addfileList.find("li.file_item").length);
			});

			// æ–‡ä»¶è¢«åŠ å…¥é˜Ÿåˆ—ä¹‹å‰è§¦å‘
			uploader.on('beforeFileQueued', function (file) {

			});

			// æŸä¸ªæ–‡ä»¶å¼€å§‹ä¸Šä¼
			uploader.on('uploadStart', function (file) {
				// console.log(uploader.options.formData.token);
				if (token_index==0) {
					var obj_arr = []
					addfileList.find("li.file_item").each(function () {
						var that = $(this),
							obj = {
								file_type: that.attr("file_type"),
								file_id: that.attr("file_id"),
								file_ext: that.attr("file_ext"),
							}
						obj_arr.push(obj);
					});

					var obj_data = {
						file:obj_arr
					}
					if ($(embed_captcha).length>0) {
						obj_data.geetest_challenge = $(embed_captcha + ' [name="geetest_challenge"]').val();
						obj_data.geetest_validate = $(embed_captcha + ' [name="geetest_validate"]').val();
						obj_data.geetest_seccode = $(embed_captcha + ' [name="geetest_seccode"]').val();
					}
					$.ajax({
						url: '/inquire/attach-token',
						type: 'post',
						dataType: 'json',
						async: false,
						data: obj_data,
						success: function (res){
							token_arr = res.data.token;
							uploader.options.formData.token = token_arr[token_index];
						}
					});
				}else {
					uploader.options.formData.token = token_arr[token_index];
				}
				token_index++;

			});

			// æ–‡ä»¶ä¸Šä¼ æˆåŠŸ
			uploader.on('uploadSuccess', function (file, response) {
				var obj = {
					file_size:response.size,
					file_url:response.url,
					file_name:response.source_name,
					mime_type:response.mime_type
				}
				upload_arr.push(obj);
			});

			// ä¸Šä¼ å¤±è´¥
			uploader.on('error', function (errortype, max) {
				if (errortype == 'F_EXCEED_SIZE') {
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_size:"ä¸Šä¼ æ–‡ä»¶ä¸èƒ½è¶…è¿‡20M");
				}else if(errortype=="F_DUPLICATE"){
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_repeat:"é‡å¤ä¸Šä¼ ");
				}else if(errortype=='Q_TYPE_DENIED'){
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_type:"æ–‡ä»¶ç±»åž‹é”™è¯¯");
				}else if (errortype=='Q_EXCEED_NUM_LIMIT') {
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_max:"è¶…è¿‡æ¯æ¬¡ä¸Šä¼ æ•°é‡é™åˆ¶");
				}
			});

			// å¼€å§‹ä¸Šä¼
			uploader.on('startUpload', function () {
				prompt_box.obj.title = messages_upload_prompt?messages_upload_prompt.inquire_attach_tip:"æç¤º";
				prompt_box.obj.text = messages_upload_prompt?messages_upload_prompt.inquire_attach_uploading:"æ–‡ä»¶ä¸Šä¼ ä¸­ï¼Œè¯·è€å¿ƒç­‰å¾…å‡ åˆ†é’Ÿï¼Œè¯·å‹¿å…³é—­ç½‘é¡µæˆ–æ–­å¼€ç½‘ç»œï¼";
				prompt_box.obj.btn = messages_upload_prompt?messages_upload_prompt.inquire_attach_confirm:"ç¡®å®š";
				upload_arr = [];
				token_index = 0;
				prompt_box.show();// æç¤ºæ¡†å‡ºçŽ°
			});

			// ä¸Šä¼ ç»“æŸ
			uploader.on('uploadFinished', function () {
				uploadFinished(upload_arr, eventDom);
				prompt_box.hide();// æç¤ºæ¡†å…³é—­
			});
			uploader_ = uploader;
		}
		// è¡¨å•æäº¤
		function form_fun(that){
			// è¡¨å•éªŒè¯æ˜¯å¦é€šè¿‡
			var flag = $(that).data('bootstrapValidator').isValid();

			if (!flag) {return false;}
			if (uploader_) {
				// ä¸Šä¼ æ–‡ä»¶
				uploader_.upload();
			}else {
				// ä¸å­˜åœ¨ä¸Šä¼
				uploadFinished("",that);
			}
			return false;
		}
		// ç”Ÿæˆæäº¤å¯¹è±¡ å¹¶æäº¤
		function uploadFinished(upload_arr,eventDom) {
			var obj = {},
				form = $(eventDom),
				form_arr = form.serializeArray();
			if (upload_arr) {
				for (var i = 0; i < upload_arr.length; i++) {
					var tmpinput = $("<input type='hidden' name='attach["+i+"][file_url]' value='"+upload_arr[i].file_url+"'/>"+
						"<input type='hidden' name='attach["+i+"][file_size]' value='"+upload_arr[i].file_size+"'/>"+
						"<input type='hidden' name='attach["+i+"][file_name]' value='"+upload_arr[i].file_name+"'/>"+
						"<input type='hidden' name='attach["+i+"][mime_type]' value='"+upload_arr[i].mime_type+"'/>");
					form.append(tmpinput);
				}
			}

			form[0].submit();
		}

		// å°†è¡¨å•æäº¤å‡½æ•°æŒ‚è½½åˆ°å…¨å±€å¯¹è±¡ä¸Š
		window['form_'+uniqueid] =  form_fun ;

	}

/* æžéªŒéªŒè¯ç  */
	function handlerEmbed_fun(objs){
		var obj = $.extend(true,{},objs), //åˆå¹¶
		handlerEmbed = function (captchaObj) {
			obj.btn.click(function (e) {
				var validate = captchaObj.getValidate();
				if (!validate) {
					obj.notice[0].className = "show";
					setTimeout(function () {
						obj.notice[0].className = "hide";
					},2000);
					e.preventDefault();
					return false;
				} ;
			});
			// å°†éªŒè¯ç åŠ åˆ°idä¸ºcaptchaçš„å…ƒç´ é‡Œï¼ŒåŒæ—¶ä¼šæœ‰ä¸‰ä¸ªinputçš„å€¼ï¼šgeetest_challenge, geetest_validate, geetest_seccode
			captchaObj.appendTo(obj.box);
			var auth_ver = $('<input type="hidden" value="2" name="auth_ver"></input>');//auth_verå€¼ä¸º2æ˜¯åˆ¤æ–­æžéªŒéªŒè¯ç 
			auth_ver.appendTo(obj.box);
			captchaObj.onReady(function () {
				obj.wait[0].className = "hide";
			});
			// æ›´å¤šæŽ¥å£å‚è€ƒï¼šhttp://www.geetest.com/install/sections/idx-client-sdk.html
		};
		obj.wait[0].className = "show";
		obj.box.empty();
		obj.box.unbind();
		$.ajax({
			// èŽ·å–idï¼Œchallengeï¼Œsuccessï¼ˆæ˜¯å¦å¯ç”¨failbackï¼‰
			url: "/inquire/start-captcha?t="+(new Date()).getTime(), // åŠ éšæœºæ•°é˜²æ­¢ç¼“å­˜
			type: "get",
			dataType: "json",
			success: function (json){
				if(json.status===0){
					messages_upload_prompt = json.data.messages;
					// ä½¿ç”¨initGeetestæŽ¥å£
					// å‚æ•°1ï¼šé…ç½®å‚æ•°
					// å‚æ•°2ï¼šå›žè°ƒï¼Œå›žè°ƒçš„ç¬¬ä¸€ä¸ªå‚æ•°éªŒè¯ç å¯¹è±¡ï¼Œä¹‹åŽå¯ä»¥ä½¿ç”¨å®ƒåšappendToä¹‹ç±»çš„äº‹ä»¶
					initGeetest({
						gt: json.data.gt,
						lang: 'en',
						challenge: json.data.challenge,
						new_captcha: json.data.new_captcha,
						product: "popup", // äº§å“å½¢å¼ï¼ŒåŒ…æ‹¬ï¼šfloatï¼Œembedï¼Œpopupã€‚æ³¨æ„åªå¯¹PCç‰ˆéªŒè¯ç æœ‰æ•ˆ
						offline: !json.data.success // è¡¨ç¤ºç”¨æˆ·åŽå°æ£€æµ‹æžéªŒæœåŠ¡å™¨æ˜¯å¦å®•æœºï¼Œä¸€èˆ¬ä¸éœ€è¦å…³æ³¨
						// æ›´å¤šé…ç½®å‚æ•°è¯·å‚è§ï¼šhttp://www.geetest.com/install/sections/idx-client-sdk.html#config
					}, handlerEmbed);
				}
			}
		});
		// ç§»é™¤éªŒè¯æ¡†å³ä¾§å°å›¾æ ‡çš„è¶…é“¾æŽ¥ .
		var isRemove = false ;
		obj.box.hover(function(){
			if(isRemove) return ;
			var itemDom = $(this).find('.geetest_logo,.geetest_success_logo') ;
			if( itemDom.length === 2 ){
				itemDom.removeAttr('href') ;
				isRemove = true ;
			} ;
		},function(){});
	}
	 /* äº§å“è¯¦æƒ…å¼¹çª—  */
   function pRoInquire(obj){

   	  	var showinquire = obj.find('[module-setting="showinquire"]').val(),
			btnobj = obj.find('[proinfo-inquire-btn]'),
			diaobj = obj.find('[proinfo-inquire]'),
			pronum = parseInt(obj.find('input[type="number"]').val());

		obj.find('.pagesHref').val(location.href);
		if(showinquire == "false") btnobj.addClass('active'); else btnobj.removeClass('active');
	   btnobj.find('.suggest').click(function () {
		   diaobj.addClass('show');
	   });
	   diaobj.find('.close,.reset').click(function () {
		   diaobj.removeClass('show');
		   diaobj.find('.form').find('input').val('');
		   diaobj.find('[prolistinquire="prop"]').find('.help-block,.form-control-feedback').hide();
		   diaobj.find('[proListinquire="prop"]').removeClass('show');
		   diaobj.find('.form-group').removeClass('has-success');
	   });

		obj.find('input[type="number"]').bind("input propertychange",function(event){
			if(isNaN(parseFloat($(this).val())) || parseFloat($(this).val()) <= 0 || $(this).val().indexOf(".") != -1){
				$(this).val("");
			}
		});
   }

/* é™„ä»¶ä¸Šä¼ è…¾è®¯ç‰ˆ */
	function form_uploader2(uniqueid){

		var add_file = 'add_file_' + uniqueid,
			embed_captcha = '#embed_captcha_' + uniqueid,
			data_fields = '[data-fields="form_' + uniqueid + '"]';
		var uploader_ = null; //å…¨å±€ä¸Šä¼ æ’ä»¶
		var TencentCaptcha_obj = null;
		if ($('#'+add_file).length>0) {
			initModalFileUploader(add_file,0,data_fields);
		}
		// ä¸Šä¼ é™„ä»¶
		function initModalFileUploader(id,attr,eventDom) {
			// ä¸Šä¼ æ•°é‡é™åˆ¶
			var setting = {
				// é€‰å®Œæ–‡ä»¶åŽï¼Œæ˜¯å¦è‡ªåŠ¨ä¸Šä¼ ã€‚
				// auto: true,
				// æ–‡ä»¶æŽ¥æ”¶æœåŠ¡ç«¯ã€‚
				server: "http://upload.qiniup.com",
				threads: 1, //ä¸Šä¼ å¹¶å‘æ•°
				// éªŒè¯å•ä¸ªæ–‡ä»¶å¤§å°æ˜¯å¦è¶…å‡ºé™åˆ¶500K, è¶…å‡ºåˆ™ä¸å…è®¸åŠ å…¥é˜Ÿåˆ—
				fileSingleSizeLimit: 1024*1024*20,
				fileNumLimit:5,
				// é€‰æ‹©æ–‡ä»¶çš„æŒ‰é’®ã€‚å¯é€‰ã€‚
				pick: "#" + id,
				accept: {
					title: 'file',
					extensions: 'pdf,doc,docx,xls,xlsx,txt,jpg,png,bmp,gif,rar,zip',
					mimeTypes: '*/*'
				},
				// ä¸åŽ‹ç¼©image, é»˜è®¤å¦‚æžœæ˜¯jpegï¼Œæ–‡ä»¶ä¸Šä¼ å‰ä¼šåŽ‹ç¼©ä¸€æŠŠå†ä¸Šä¼ ï¼
				resize: false,
				compress: {
					width: '100%',
					height: '100%', // å›¾ç‰‡è´¨é‡ï¼Œåªæœ‰typeä¸º`image/jpeg`çš„æ—¶å€™æ‰æœ‰æ•ˆã€‚
					quality: false,  // æ˜¯å¦å…è®¸æ”¾å¤§ï¼Œå¦‚æžœæƒ³è¦ç”Ÿæˆå°å›¾çš„æ—¶å€™ä¸å¤±çœŸï¼Œæ­¤é€‰é¡¹åº”è¯¥è®¾ç½®ä¸ºfalse.
					allowMagnify: false,    // æ˜¯å¦å…è®¸è£å‰ªã€‚
					crop: false,
					// å¦‚æžœå‘çŽ°åŽ‹ç¼©åŽæ–‡ä»¶å¤§å°æ¯”åŽŸæ¥è¿˜å¤§ï¼Œåˆ™ä½¿ç”¨åŽŸæ¥å›¾ç‰‡    // æ­¤å±žæ€§å¯èƒ½ä¼šå½±å“å›¾ç‰‡è‡ªåŠ¨çº æ­£åŠŸèƒ½
					noCompressIfLarger: false,    // å•ä½å­—èŠ‚ï¼Œå¦‚æžœå›¾ç‰‡å¤§å°å°äºŽæ­¤å€¼ï¼Œä¸ä¼šé‡‡ç”¨åŽ‹ç¼©ã€‚
					compressSize: 0
				},
			},
			uploader = WebUploader.create(setting),
			addfileList = $(setting.pick).siblings(".addfileList"),
			upload_arr = [],
			token_index = 0,
			token_arr = [];

			// æç¤ºæ¡†
			var prompt_box = new upload_prompt_modal_fun({
				// btn:"ç¡®å®š",
				// icon:"error",
				close:false,
				hide_fun:function(){
					// console.log("å–æ¶ˆå…³é—­");
				},
				determine_fun:function(){
					// console.log("ç¡®è®¤å…³é—­");
				},
				show_fun:function(){
					// console.log("æ˜¾ç¤ºæ¡†è§¦å‘");
				}
			});
			// æ–‡ä»¶åŠ å…¥é˜Ÿåˆ—
			uploader.on( 'fileQueued', function( file ) {
				var li = $('<li class="file_item clearfix" file_id="'+file.id+'" file_type="'+file.type+'" file_ext="'+file.ext+'">'+
							'<span class="file_name" title="'+file.name+'">'+file.name+'</span>'+
							'<span class="file_delete" delete-id="'+file.id+'">åˆ é™¤</span>'+
							// '<input type="hidden" value="'+file.name+'" name="upload_file_name[]">'+
							// '<input type="hidden" value="'+file.url+'" name="upload_file_url[]">'+
						'</li>');
				addfileList.append(li);
				li.find(".file_delete").click(function(){
					uploader.removeFile(file);
					$(this).parent().remove();
				});
			});

			// ä¸€å †æ–‡ä»¶åŠ å…¥é˜Ÿåˆ—
			uploader.on( 'filesQueued', function( file ) {

			});

			//ä¸Šä¼ è¿‡ç¨‹ä¸­è§¦å‘ï¼Œæºå¸¦ä¸Šä¼ è¿›åº¦
			uploader.on('uploadProgress', function (file, percentage) {
				prompt_box.progressbar(parseInt(percentage*100));
				prompt_box.progressbartxt(token_index+"/"+addfileList.find("li.file_item").length);
			});

			// æ–‡ä»¶è¢«åŠ å…¥é˜Ÿåˆ—ä¹‹å‰è§¦å‘
			uploader.on('beforeFileQueued', function (file) {

			});

			// æŸä¸ªæ–‡ä»¶å¼€å§‹ä¸Šä¼
			uploader.on('uploadStart', function (file) {
				// console.log(uploader.options.formData.token);
				if (token_index==0) {
					var obj_arr = []
					addfileList.find("li.file_item").each(function () {
						var that = $(this),
							obj = {
								file_type: that.attr("file_type"),
								file_id: that.attr("file_id"),
								file_ext: that.attr("file_ext"),
							}
						obj_arr.push(obj);
					});

					var obj_data = {
						file:obj_arr
					}
					// if ($(embed_captcha).length>0) {
						// obj_data.geetest_challenge = $(embed_captcha + ' [name="geetest_challenge"]').val();
						// obj_data.geetest_validate = $(embed_captcha + ' [name="geetest_validate"]').val();
						// obj_data.geetest_seccode = $(embed_captcha + ' [name="geetest_seccode"]').val();
						obj_data.ticket = $(eventDom + ' [name="ticket"]').val();
						obj_data.random = $(eventDom + ' [name="random"]').val();
					// }
					// console.log(obj_data);
					$.ajax({
						url: '/inquire/attach-token',
						type: 'post',
						dataType: 'json',
						async: false,
						data: obj_data,
						success: function (res){
							// console.log(res);
							token_arr = res.data.token;
							uploader.options.formData.token = token_arr[token_index];
						}
					});
				}else {
					uploader.options.formData.token = token_arr[token_index];
				}
				token_index++;

			});

			// æ–‡ä»¶ä¸Šä¼ æˆåŠŸ
			uploader.on('uploadSuccess', function (file, response) {
				var obj = {
					file_size:response.size,
					file_url:response.url,
					file_name:response.source_name,
					mime_type:response.mime_type
				}
				upload_arr.push(obj);
			});

			// ä¸Šä¼ å¤±è´¥
			uploader.on('error', function (errortype, max) {
				if (errortype == 'F_EXCEED_SIZE') {
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_size:"ä¸Šä¼ æ–‡ä»¶ä¸èƒ½è¶…è¿‡20M");
				}else if(errortype=="F_DUPLICATE"){
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_repeat:"é‡å¤ä¸Šä¼ ");
				}else if(errortype=='Q_TYPE_DENIED'){
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_type:"æ–‡ä»¶ç±»åž‹é”™è¯¯");
				}else if (errortype=='Q_EXCEED_NUM_LIMIT') {
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_max:"è¶…è¿‡æ¯æ¬¡ä¸Šä¼ æ•°é‡é™åˆ¶");
				}
			});

			// å¼€å§‹ä¸Šä¼
			uploader.on('startUpload', function () {
				prompt_box.obj.title = messages_upload_prompt?messages_upload_prompt.inquire_attach_tip:"æç¤º";
				prompt_box.obj.text = messages_upload_prompt?messages_upload_prompt.inquire_attach_uploading:"æ–‡ä»¶ä¸Šä¼ ä¸­ï¼Œè¯·è€å¿ƒç­‰å¾…å‡ åˆ†é’Ÿï¼Œè¯·å‹¿å…³é—­ç½‘é¡µæˆ–æ–­å¼€ç½‘ç»œï¼";
				prompt_box.obj.btn = messages_upload_prompt?messages_upload_prompt.inquire_attach_confirm:"ç¡®å®š";
				upload_arr = [];
				token_index = 0;
				prompt_box.show();// æç¤ºæ¡†å‡ºçŽ°
			});

			// ä¸Šä¼ ç»“æŸ
			uploader.on('uploadFinished', function () {
				uploadFinished(upload_arr, eventDom);
				prompt_box.hide();// æç¤ºæ¡†å…³é—­
			});
			uploader_ = uploader;
		}
		// è¡¨å•æäº¤
		function form_fun(that){
			// è¡¨å•éªŒè¯æ˜¯å¦é€šè¿‡
			var flag = $(that).data('bootstrapValidator').isValid();
			clearInterval(that.times);
			that.times = setTimeout(function(){
				if (!flag) {return false;}
				if (uploader_) {
					// if ($(that).find('[name="isattach"]').length==0) {
					// 	$(that).append($("<input type='hidden' name='isattach' value='1'/>"));
					// }
					$.ajax({
						type: "POST",
						data: {attach:1,isattach:1},
						url: "/inquire/start-tx-captcha",
						dataType: "json",
						async:false,
						success: function(json) {
							// console.log(json);
							if(json.status == 0){
								var data = json.data
								if (data.validate) {
									// ç›´æŽ¥ç”Ÿæˆä¸€ä¸ªéªŒè¯ç å¯¹è±¡
									var captcha1 = new TencentCaptcha(data.key, function(res) {
										// ä¸Šä¼ æ–‡ä»¶
										TencentCaptcha_obj = res;
										var eventDom_box = $(data_fields);
										if (eventDom_box.find('[name="ticket"]').length>0) {
											eventDom_box.find(' [name="ticket"]').val(TencentCaptcha_obj.ticket);
											eventDom_box.find(' [name="random"]').val(TencentCaptcha_obj.randstr);
										}else {
											eventDom_box.append('<input type="hidden" name="ticket" value="'+TencentCaptcha_obj.ticket+'"><input type="hidden" name="random" value="'+TencentCaptcha_obj.randstr+'">');
										}
										uploader_.upload();
									},{bizState:'è‡ªå®šä¹‰é€ä¼ å‚æ•°'});
									captcha1.show(); // æ˜¾ç¤ºéªŒè¯ç 
								}
							}else {
								alert(json.msg);
							}
						},
						error:function(){
							alert("è¯·æ±‚ç½‘ç»œå¤±è´¥");
						}
					});


				}else {
					if ($(that).find('[name="isattach"]').length==0) {
						$(that).append($("<input type='hidden' name='isattach' value='0'/>"));
					}
					// ä¸å­˜åœ¨ä¸Šä¼
					uploadFinished("",that);
				}
			},200);
			return false;
		}
		// ç”Ÿæˆæäº¤å¯¹è±¡ å¹¶æäº¤
		function uploadFinished(upload_arr,eventDom) {
			var obj = {},
				form = $(eventDom);
			// if (form.find('[name="attach"]').length==0) {
			// 	form.append($("<input type='hidden' name='attach' value='0'/>"));
			// }
			if (form.find('[name="auth_ver"]').length==0) {
				form.append($('<input type="hidden" value="3" name="auth_ver"></input>'));
			}
			form.find(".file_box_con").remove();
			if (upload_arr) {
				var div_box = $('<div class="file_box_con"></div>');
				form.append(div_box);
				for (var i = 0; i < upload_arr.length; i++) {
					var tmpinput = $("<input type='hidden' name='attach["+i+"][file_url]' value='"+upload_arr[i].file_url+"'/>"+
						"<input type='hidden' name='attach["+i+"][file_size]' value='"+upload_arr[i].file_size+"'/>"+
						"<input type='hidden' name='attach["+i+"][file_name]' value='"+upload_arr[i].file_name+"'/>"+
						"<input type='hidden' name='attach["+i+"][mime_type]' value='"+upload_arr[i].mime_type+"'/>");
					div_box.append(tmpinput);
				}
				form[0].submit();
			}else {
			// if (form.find('[name="attach"]').length==0) {
			// 	form.append($("<input type='hidden' name='attach' value='0'/>"));
			// }
				$.ajax({
					type: "POST",
					data: form.serialize(),
					url: "/inquire/start-tx-captcha",
					dataType: "json",
					async:false,
					success: function(json) {
						// console.log(json);
						if(json.status == 0){
							var data = json.data;
							if (data.validate) {
								// ç›´æŽ¥ç”Ÿæˆä¸€ä¸ªéªŒè¯ç å¯¹è±¡
								var captcha1 = new TencentCaptcha(data.key, function(res) {
									// ä¸Šä¼ æ–‡ä»¶
									TencentCaptcha_obj = res;
									// uploader_.upload();
									if (form.find('[name="ticket"]').length>0) {
										form.find(' [name="ticket"]').val(TencentCaptcha_obj.ticket);
										form.find(' [name="random"]').val(TencentCaptcha_obj.randstr);
									}else {
										form.append('<input type="hidden" name="ticket" value="'+TencentCaptcha_obj.ticket+'"><input type="hidden" name="random" value="'+TencentCaptcha_obj.randstr+'">');
									}
									form[0].submit();
								},{bizState:'è‡ªå®šä¹‰é€ä¼ å‚æ•°'});
								captcha1.show(); // æ˜¾ç¤ºéªŒè¯ç 
							}else {
								form[0].submit();
							}
						}else {
							alert(json.msg);
						}
					},
					error:function(){
						alert("è¯·æ±‚ç½‘ç»œå¤±è´¥");
					}
				});
			}

			// form[0].submit();
		}

		// å°†è¡¨å•æäº¤å‡½æ•°æŒ‚è½½åˆ°å…¨å±€å¯¹è±¡ä¸Š
		window['form_'+uniqueid] =  form_fun ;

	}

/**
 * è¡¨å•éªŒè¯
 * ä¸å…è®¸ä½¿ç”¨formæ ‡ç­¾
 */
function formIframe(uniqueid, options, isNews){

	if(!uniqueid) return;
	var self = this;
	self.config = {
		$form: $('#i_'+ uniqueid +' .form'),
		$form_control: $('#i_'+ uniqueid +' .form-control'),
		$form_submit: $('#i_'+ uniqueid +' [type="submit"]'),
		upfile_add: '#i_'+ uniqueid +' [upfile-add]',
		is_hasfile: function(){return $('#i_'+ uniqueid +' .file_item').length>0},
		is_upfile_end: false,
		parameters: {
			feedbackIcons: {
				valid: 'icon-checkmark',
				invalid: 'icon-cancel3',
				validating: 'icon-refresh'
			},
			fields: {}
		},
		go_home: false,
	};
	self.config.is_upfile = function(){return $(self.config.upfile_add).length>0};
	for(var key in options) self.config[key] = options[key];
	/* æ ¼å¼éªŒè¯ */
	self.config.$form_control.each(function(){
		var name = $(this).attr('name');
		self.config.parameters.fields[name] = {validators:{}};
		if(typeof($(this).attr('required'))!='undefined') self.config.parameters.fields[name].validators['notEmpty'] = {message:get_fanyi('not_empty')};
		switch ($(this).attr('type')) {
			case 'email':
				self.config.parameters.fields[name].validators['emailAddress'] = {
					regexp: /[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+/,
					message:get_fanyi('format_email')
				};
				break;
			case 'number':
				self.config.parameters.fields[name].validators['integer'] = {message:get_fanyi('format_integer')};
				break;
			default:
				break;
		}
	});
	self.config.$form.bootstrapValidator(self.config.parameters);

	/* è¡¨å•æäº¤ */
	self.config.$form_submit.on('click', function () {
		// é™„ä»¶å¿…å¡«æç¤º
		if($(self.config.upfile_add).attr('upfile-required')=='1' && !self.config.is_hasfile()){
			_alert(get_fanyi('You_need_to_upload_files'));
			return
		}
		// æ ¼å¼éªŒè¯
		self.config.$form.bootstrapValidator('validate');
		if (!self.config.$form.data('bootstrapValidator').isValid()) {
			return;
    };
		if(!self.formData) self.formData = new FormData($('<form hidden></form>').append(self.config.$form.clone())[0]);

		if(self.config.$form.find('.form-group').eq(0).find('input').length > 0){
			self.formData.set('subject',self.config.$form.find('.form-group').eq(0).find('input').val())
		}else if(self.config.$form.find('.form-group').eq(0).find('textarea').length > 0){
			self.formData.set('subject',self.config.$form.find('.form-group').eq(0).find('textarea').val())
		}else{

		}

		// è…¾è®¯éªŒè¯
		if(get_siteInfo(['seo','verifyCode']) == 'OPEN' || self.config.is_hasfile()){
			if(self.config.is_hasfile()){
				tx_submit(true);
				function get_file(){
					if(self.config.is_upfile_end && self.upfile.token_arr.length>0){
						for(var i = 0; i < self.upfile.upload_arr.length; i++){
							self.formData.set('attach[' + i + '][file_url]', self.upfile.upload_arr[i].file_url);
							self.formData.set('attach['+ i +'][file_size]', self.upfile.upload_arr[i].file_size);
							self.formData.set('attach['+ i +'][file_name]', self.upfile.upload_arr[i].file_name);
							self.formData.set('attach['+ i +'][mime_type]', self.upfile.upload_arr[i].mime_type);
						}
						submit();
					}else setTimeout(function(){get_file()}, 500);
				}
			}else tx_submit();
			function tx_submit(is_upload) {
				var is_upload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
				var ajax_config = {
					type: 'POST',
					data: is_upload ? {attach:1,isattach:1} : self.formData,
					url: '/inquire/start-tx-captcha',
					dataType: 'json',
					cache: false,
					async: false,
					success: function (json) {
						if(json.status == 0){
							if(json.data.validate){
								new TencentCaptcha(json.data.key, function (reson) {
									if (reson.ret) {
										// éªŒè¯å¤±è´¥æˆ–å–æ¶ˆéªŒè¯ï¼Œæ¢å¤æäº¤æŒ‰é’®
										self.formData = '';
										self.config.$form_submit.removeAttr('disabled');
										return
									}
									self.formData.set('ticket', reson.ticket);
									self.formData.set('random', reson.randstr);
									if(is_upload){
										self.upfile.ticket = reson.ticket;
										self.upfile.random = reson.randstr;
										self.upfile.uploader.upload();
										get_file();
									}else {
										submit();
									}

								}, {bizState: 'è‡ªå®šä¹‰é€ä¼ å‚æ•°'}).show();
							}else if(!is_upload) submit();
						}else alert(json.msg);
					},
					error:function(){
						alert('è¯·æ±‚ç½‘ç»œå¤±è´¥');
					}
				};
				if(!is_upload){
					ajax_config.processData = false;
					ajax_config.contentType = false;
					self.formData.delete('attach');
					self.formData.set('isattach', 0);
				}else{
					self.formData.set('attach', 1);
					self.formData.set('isattach', 1);
				}
				$.ajax(ajax_config);
			}
		}else submit();
		function submit(){
			var $win = $('#win_'+uniqueid),
				on_txt = $win.find('.ON').text();
			$win.find('.ON').hide();
			$win.find('.OFF').on('click', function(){
				$win.modal('hide');
			});
			self.formData.set('auth_ver', 3)	// å‘Šè¯‰åŽç«¯ç”¨çš„æ˜¯è…¾è®¯éªŒè¯
			self.formData.delete('file')			// ä¸æäº¤file
			self.config.$form.find('select').each(function(){
				self.formData.set($(this).attr('name'), $(this).val());
      });
      if(isNews){
        self.formData.set('page_title', document.title)
        self.formData.set('page_keywords', $('meta[name="keywords"]').attr('content'))
        self.formData.set('inquire_flag', 3)
        $.ajax({
          type: "post",
          url: "/inquire-business/four-hundred-add",
          data: self.formData,
          dataType: 'JSON',
          cache: false,
          processData: false,	// ä¸å¤„ç†æ•°æ®
          contentType: false,	// ä¸è®¾ç½®å†…å®¹ç±»åž‹
          success: function (res) {
            if(res.status) window.location.href = "/inquire/success/" ;
            else fun();
          },
          error: function(){
            fun();
          }
        })
      }
      else {
        self.formData.set('page_title', document.title)
        self.formData.set('page_keywords', $('meta[name="keywords"]').attr('content'))
        self.formData.set('is_ajax', '1')	// å¼‚æ­¥æ–¹å¼æäº¤è¯¢ç›˜
        $.ajax({
          type: "post",
          url: "/inquire/list",
          data: self.formData,
          dataType: 'JSON',
          cache: false,
          processData: false,	// ä¸å¤„ç†æ•°æ®
          contentType: false,	// ä¸è®¾ç½®å†…å®¹ç±»åž‹
          success: function (reson) {
            if (!reson.error) {
              window.location.href = "/inquire/success/" ;
            }else {
              fun();
            };
          },
          error: function(){
            fun();
          }
        });
      }
			function fun(txt,t) {
				var txt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : get_fanyi('send_failed');
				var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
				// æäº¤æˆåŠŸæˆ–å¤±è´¥éƒ½æ‰§è¡Œï¼šæ¢å¤æäº¤æŒ‰é’®ã€å€’è®¡æ—¶å…³é—­å¼¹çª—
				function time(t){
					$win.find('.ON').text(on_txt+' ( '+ t +'s )');
					setTimeout(function(){
						t == 0 ? $win.find('.ON').click() : time(--t);
					}, 1000);
				}
				time(t||5);
				$win.find('.ON').show();
				if(self.config.go_home){
					$win.find('.ON').on('click', function(){
						window.location.href = '/';
					});
				}
				$win.find('.modal-body .title').text(txt);
				self.config.$form_submit.removeAttr('disabled');
			}
		}
	});

	/* é™„ä»¶ä¸Šä¼  */
	if(self.config.is_upfile()){
		self.upfile = {
			config: {
				// auto: true,	// é€‰å®Œæ–‡ä»¶åŽï¼Œæ˜¯å¦è‡ªåŠ¨ä¸Šä¼ ã€‚
				server: window.location.protocol == 'http:' ? 'http://upload.qiniup.com' : (window.location.protocol == 'https:' && 'https://up.qbox.me'),	// æ–‡ä»¶æŽ¥æ”¶æœåŠ¡ç«¯ã€‚
				threads: 1,	//ä¸Šä¼ å¹¶å‘æ•°
				fileSingleSizeLimit: 1024*1024*20,	// éªŒè¯å•ä¸ªæ–‡ä»¶å¤§å°æ˜¯å¦è¶…å‡ºé™åˆ¶500K, è¶…å‡ºåˆ™ä¸å…è®¸åŠ å…¥é˜Ÿåˆ—
				fileNumLimit:5,
				pick: self.config.upfile_add,	// é€‰æ‹©æ–‡ä»¶çš„æŒ‰é’®ã€‚å¯é€‰ã€‚
				accept: {
					title: 'file',
					extensions: 'pdf,doc,docx,xls,xlsx,txt,jpg,png,bmp,gif,rar,zip',
					mimeTypes: '*/*'
				},
				resize: false,	// ä¸åŽ‹ç¼©image, é»˜è®¤å¦‚æžœæ˜¯jpegï¼Œæ–‡ä»¶ä¸Šä¼ å‰ä¼šåŽ‹ç¼©ä¸€æŠŠå†ä¸Šä¼ ï¼
				compress: {
					width: '100%',
					height: '100%',	// å›¾ç‰‡è´¨é‡ï¼Œåªæœ‰typeä¸º`image/jpeg`çš„æ—¶å€™æ‰æœ‰æ•ˆã€‚
					quality: false,	// æ˜¯å¦å…è®¸æ”¾å¤§ï¼Œå¦‚æžœæƒ³è¦ç”Ÿæˆå°å›¾çš„æ—¶å€™ä¸å¤±çœŸï¼Œæ­¤é€‰é¡¹åº”è¯¥è®¾ç½®ä¸ºfalse.
					allowMagnify: false,	// æ˜¯å¦å…è®¸è£å‰ªã€‚
					crop: false,	// å¦‚æžœå‘çŽ°åŽ‹ç¼©åŽæ–‡ä»¶å¤§å°æ¯”åŽŸæ¥è¿˜å¤§ï¼Œåˆ™ä½¿ç”¨åŽŸæ¥å›¾ç‰‡    // æ­¤å±žæ€§å¯èƒ½ä¼šå½±å“å›¾ç‰‡è‡ªåŠ¨çº æ­£åŠŸèƒ½
					noCompressIfLarger: false,    // å•ä½å­—èŠ‚ï¼Œå¦‚æžœå›¾ç‰‡å¤§å°å°äºŽæ­¤å€¼ï¼Œä¸ä¼šé‡‡ç”¨åŽ‹ç¼©ã€‚
					compressSize: 0
				},
			},
			token_index: 0,
			upload_arr: [],
			token_arr: [],
			prompt_box: new upload_prompt_modal_fun({
				// btn:"ç¡®å®š",
				// icon:"error",
				close:false,
				hide_fun:function(){
					// console.log("å–æ¶ˆå…³é—­");
				},
				determine_fun:function(){
					// console.log("ç¡®è®¤å…³é—­");
				},
				show_fun:function(){
					// console.log("æ˜¾ç¤ºæ¡†è§¦å‘");
				}
			}),
			ticket: '',
			random: ''
		};

		self.upfile.uploader = WebUploader.create(self.upfile.config);
		self.upfile.addfileList = $(self.upfile.config.pick).siblings(".addfileList");

		// é™„ä»¶ä¸Šä¼ é™åˆ¶çš„æç¤º
		self.config.$form.find('[upfile-tip="title"]').attr('title', get_fanyi('up_file_tips'));
		self.config.$form.find('[upfile-tip="text"]').text(get_fanyi('up_file_tips'));

		// æ–‡ä»¶åŠ å…¥é˜Ÿåˆ—
		self.upfile.uploader.on( 'fileQueued', function( file ) {
			self.config.is_upfile_end = false;
			var li = $('<li class="file_item clearfix" file_id="'+file.id+'" file_type="'+file.type+'" file_ext="'+file.ext+'">'+
									'<span class="file_name" title="'+file.name+'">'+file.name+'</span>'+
									'<span class="file_delete" delete-id="'+file.id+'">Ã—</span>'+
								'</li>');
			self.upfile.addfileList.append(li);
			li.find(".file_delete").click(function () {
				self.upfile.uploader.removeFile(file);
				$(this).parent().remove();
			});
		});

		// ä¸€å †æ–‡ä»¶åŠ å…¥é˜Ÿåˆ—
		self.upfile.uploader.on( 'filesQueued', function( file ) {

		});

		//ä¸Šä¼ è¿‡ç¨‹ä¸­è§¦å‘ï¼Œæºå¸¦ä¸Šä¼ è¿›åº¦
		self.upfile.uploader.on('uploadProgress', function (file, percentage) {
			self.upfile.prompt_box.progressbar(parseInt(percentage*100));
			self.upfile.prompt_box.progressbartxt(self.upfile.token_index+"/"+self.upfile.addfileList.find("li.file_item").length);
		});

		// æ–‡ä»¶è¢«åŠ å…¥é˜Ÿåˆ—ä¹‹å‰è§¦å‘
		self.upfile.uploader.on('beforeFileQueued', function (file) {

		});

		// æŸä¸ªæ–‡ä»¶å¼€å§‹ä¸Šä¼
		self.upfile.uploader.on('uploadStart', function (file) {
			if (self.upfile.token_index==0) {
				var obj_arr = []
				self.upfile.addfileList.find("li.file_item").each(function(){
					var that = $(this),
						obj = {
							file_type: that.attr("file_type"),
							file_id: that.attr("file_id"),
							file_ext: that.attr("file_ext")
						}
					obj_arr.push(obj);
				});

				$.ajax({
					url: '/inquire/attach-token',
					type: 'post',
					dataType: 'json',
					async: false,
					data: {
						file: obj_arr,
						ticket: self.upfile.ticket,
						random: self.upfile.random
					},
					success: function (res){
						if(res.data.length<=0) return;
						self.upfile.token_arr = res.data.token
						self.upfile.uploader.options.formData.token = self.upfile.token_arr[self.upfile.token_index];
					}
				});
			}else self.upfile.uploader.options.formData.token = self.upfile.token_arr[self.upfile.token_index];
			self.upfile.token_index++;
		});

		// æ–‡ä»¶ä¸Šä¼ æˆåŠŸ
		self.upfile.uploader.on('uploadSuccess', function (file, response) {
			var obj = {
				file_size:response.size,
				file_url:response.url,
				file_name:response.source_name,
				mime_type:response.mime_type
			}
			self.upfile.upload_arr.push(obj);
		});

		// ä¸Šä¼ å¤±è´¥
		self.upfile.uploader.on('error', function (errortype, max) {
			switch (errortype) {
				case 'F_EXCEED_SIZE':
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_size:"ä¸Šä¼ æ–‡ä»¶ä¸èƒ½è¶…è¿‡20M");
					break;
				case 'F_DUPLICATE':
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_repeat:"é‡å¤ä¸Šä¼ ");
					break;
				case 'Q_TYPE_DENIED':
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_type:"æ–‡ä»¶ç±»åž‹é”™è¯¯");
					break;
				case 'Q_EXCEED_NUM_LIMIT':
					_alert(messages_upload_prompt?messages_upload_prompt.inquire_attach_max:"è¶…è¿‡æ¯æ¬¡ä¸Šä¼ æ•°é‡é™åˆ¶");
					break;
				default:
					break;
			}
		});

		// å¼€å§‹ä¸Šä¼
		self.upfile.uploader.on('startUpload', function () {
			self.upfile.prompt_box.obj.title = messages_upload_prompt?messages_upload_prompt.inquire_attach_tip:"æç¤º";
			self.upfile.prompt_box.obj.text = messages_upload_prompt?messages_upload_prompt.inquire_attach_uploading:"æ–‡ä»¶ä¸Šä¼ ä¸­ï¼Œè¯·è€å¿ƒç­‰å¾…å‡ åˆ†é’Ÿï¼Œè¯·å‹¿å…³é—­ç½‘é¡µæˆ–æ–­å¼€ç½‘ç»œï¼";
			self.upfile.prompt_box.obj.btn = messages_upload_prompt?messages_upload_prompt.inquire_attach_confirm:"ç¡®å®š";
			self.upfile.upload_arr = [];
			self.upfile.token_index = 0;
			self.upfile.prompt_box.show();
		});

		// ä¸Šä¼ ç»“æŸ
		self.upfile.uploader.on('uploadFinished',function(){
			self.config.is_upfile_end = true;
			self.upfile.prompt_box.hide();
		});
	}
}

/* äº§å“åˆ—è¡¨è¯¢ç›˜ */
function proListinquire(obj,fun){
	var i_show = obj.find('[module-setting="inquireshow"]').val(),
		i_type = obj.find('[module-setting="inquiretype"]').val(),
		i_style = obj.find('[module-setting="inquirestyle"]').val(),
		i_color = obj.find('[module-setting="inquirecolor"]').val(),
		i_borclr = obj.find('[module-setting="inquireborclr"]').val(),
		i_bgclr = obj.find('[module-setting="inquirebgclr"]').val(),
		objmore = obj.find('[proList="more"]'),
		objinq = obj.find('[proList="inquire"]'),
		prop = obj.find('[prolistinquire="prop"]'),
		successtext = obj.find('[name="successtext"]').val();

	obj.find('.inquireHref').val(location.href);
	if(i_show){
		if(i_show == "allhide"){
			objmore.addClass('active');
			objinq.addClass('active');
		}else if(i_show == "allshow"){
			objmore.removeClass('active');
			objinq.removeClass('active');
		} else if (i_show == "showinquire") {
			objmore.addClass('active');
			objinq.removeClass('active');
		}else if(i_show == "showmore"){
			objmore.removeClass('active');
			objinq.addClass('active');
		}
		if(i_style == "bg"){
			objinq.addClass('proinquire-bg').removeClass('proinquire-bor');
			i_borclr = "transparent";
		}else{
			objinq.addClass('proinquire-bor').removeClass('proinquire-bg');
			i_bgclr = "transparent";
		}
	}
	if(i_type){
		if(i_type == "ljinquire"){
			obj.find('[data-action="inquire-modal"]').addClass('active');
			objinq.removeClass('active');
		}else{
			obj.find('[data-action="inquire-modal"]').removeClass('active');
			objinq.addClass('active');
			obj.find('[data-action="inquire-modal"]').css({
				"color": i_color,
				"border-color": i_borclr,
				"background-color": i_bgclr
			});
		}
	}

	objinq.css({
		"color": i_color,
		"border-color": i_borclr,
		"background-color": i_bgclr
	});

	function closeprop(){ prop.removeClass('active') }
	function cleanContent(){
		var _inputElements = $(obj).find('[prolistinquire="prop"]').find(':input:visible');
		_inputElements.val('');
		$(obj).find('[prolistinquire="prop"]').find('.help-block,.form-control-feedback').hide();
	}

	objinq.click(function(event){
		var proimg = $(this).closest('[proListinquire="item"]').find('img').attr('src'),
			protitle = $(this).closest('[proListinquire="item"]').find('[name="proListinquiretitle"]').val();
		prop.find('img').attr('src',proimg);
		prop.find('.name').html(protitle);
		prop.addClass('active');
		event.stopPropagation();
		event.preventDefault();
	});
	prop.find('.propdialog').click(function(){
		cleanContent();
		closeprop();
	});
	prop.find('[type="reset"]').click(function(){
		cleanContent();
		closeprop();
		prop.find('.form-group').each(function(){
			$(this).removeClass("has-error");
			if( obj.find('[data-fields="form_bootstrap"]').length ){
				obj.find('[data-fields="form_bootstrap"]').data('bootstrapValidator').destroy();
			}
			obj.find('[data-fields="form_bootstrap"]').data('bootstrapValidator', null);
			//bootstrapFun(fun[0],fun[1]);
		});
	});
	obj.find('input[type="number"]').bind("input propertychange",function(event){
		if(isNaN(parseFloat($(this).val())) || parseFloat($(this).val()) <= 0 || $(this).val().indexOf(".") != -1){
			$(this).val("");
		}
	});
	var successhtml = "<div class='success' proListinquire='success'>";
		successhtml +="<div class='successclose' proListinquire='close'><span class='icon-clear'></span></div>";
		successhtml +="<div class='successicon'>";
		successhtml +="<div class='success-icon icon-checkmark3 font-color'></div>";
		successhtml +="</div>";
		successhtml +="<div class='successtext'>"+successtext+"</div>";
		successhtml +="</div>";

	function Successremove(){
		prop.find('[proListinquire="success"]').remove();
		prop.removeClass('active').find('.propform').removeClass('active');
	}
	prop.find('[type="submit"]').click(function(){
		if(prop.find('form').find('.icon-checkmark').length != 4) return;
		var formsize = prop.find('[data-fields]').serializeArray(),
			formdata = {
                page_title: document.title,
                page_keywords: $('meta[name="keywords"]').attr('content')
            },
			dataurl = prop.find('[data-fields]').attr('action');

		$.each(formsize,function(){
			formdata[this.name] = this.value;
		});
		formdata.is_ajax = "1";
		$.ajax({
			url: '/inquire/list',
			data: formdata,
			dataType: 'json',
			type: 'post',
			success:function(e){
				prop.find('.propform').addClass('active');
				prop.append(successhtml);

				setTimeout(function(){
					Successremove();
				},2000);
			},
			error:function(e){
				console.log(e.error+"é”™è¯¯å•¦ï¼");
			}
		});
		return false;
	});

	prop.find('[proListinquire="close"]').on('click', function(){
		Successremove();
	});
}

/* ä¸‹è½½åˆ—è¡¨æƒé™åˆ¤æ–­ */
function downloadAuthority(page_lv, url){
  $.ajax({
    type: "POST",
    url: "/designer/check-page-lv",
    data: { page_lv: page_lv,  is_design: $('body').hasClass('designer-body') },
    dataType: "json",
    success: function (data) {
      if (data.data.do_action==1) window.location.href = '/';
      else if (data.data.do_action == 2) window.location.href = '/member/login';
      else $(window).width()>1024?window.open(url):window.location.href = url;
    }
  });
}

/* æ–‡æ¡£åŠ è½½å®Œæˆ */
	$(function(){
		$('[src="https://ssl.captcha.qq.com/TCaptcha.js"]').remove();

		$('[_src]').each(function(){
			$(this).attr('src', lazyImg_resetSrc($(this).attr('_src'))).removeAttr('_src');
		});

		/* htmlæº¢å‡ºéšè— ä¸Žç²˜æ€§å®šä½å†²çª */
  	var _Android = navigator.userAgent.indexOf("Android") > -1,
				_AppleWebKit = navigator.userAgent.indexOf("AppleWebKit") > -1,
				_Safari = navigator.userAgent.indexOf("Safari") > -1,
				_Chrome = navigator.userAgent.indexOf("Chrome") > -1,
				_Firefox = navigator.userAgent.indexOf("Firefox") > -1;
		if(_Android || (_AppleWebKit && !_Chrome && !_Firefox)){
			$('html').css('overflow-x', 'hidden');
		}

		/* æ ‡ç­¾åˆ‡æ¢ */
		$('[href^="javascript:_tagToggle"]').on('click', function(){
			$(this).parents('[layout-id="1"]').find('.active').removeClass('active');
			$(this).addClass('active');
		});
		if(!$('body').hasClass('designer-body')){
			$('[href$="true"]').click();
			$('[href$="true;"]').click();
		}

		if(get_siteInfo(['shopping','shoppingCart']) == 'OPEN'){
		/* è´­ç‰©è½¦--å…¬å…± */
			$.ajax({
				type: "GET",
				url: "/shopping/getcart",
				dataType: "json",
				success: function(json) {
					$("[data-cart='count']").html(json.count);
					var amounts = json.amount.toFixed(2);
					$("[data-cart='amount']").html(amounts);
				}
			});

			//åˆ¤æ–­å¾®ä¿¡å†…æ ¸æ‰“å¼€æ—¶è¦å±è”½é¡µé¢å¹¶æç¤ºæµè§ˆå™¨æŸ¥çœ‹
			var ua = navigator.userAgent.toLowerCase();
			if(ua.match(/MicroMessenger/i)=="micromessenger") {
				$('body').html('<div class="wechatBox" style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);">'+get_fanyi('please_open_with_another_browser')+'</div>');
			}
    }

    // ä¸€é”®æ¬å®¶å›¾ç‰‡æ‡’åŠ è½½å¤„ç†
    if($('body[class*="cms_"] .pro_aliData').length > 0){
      $('.pro_aliData img[data-src]').each(function(){
        $(this).attr('src',$(this).data('src'))
      })
      $('.pro_aliData img[data-original]').each(function(){
        $(this).attr('src',$(this).data('original'))
      })
    }

		/* wowæ’ä»¶ */
		new WOW().init();
		/* æ•´ç‰ˆæ’ä»¶ */
		fullPage_($('.fullPage'));
		/* èƒŒæ™¯è§†å·® */
		scrollMove();
		/* æ‡’åŠ è½½ */
		if($('body').hasClass('designer-body')) {
			 lazyImgChange($('[lazy-src]'));
		}else {
			setTimeout(function(){lazyImg()}, 200);
		}

		/* æ‰‹æœºç«¯ åˆ—è¡¨é¡µ åˆ—è¡¨å¯¼èˆªåŽçš„å†…å®¹ç§»åˆ°æœ€åŽå±•ç¤º */
		if($(window).width()<=991 && !$('body').hasClass('designer-body')){
			$('[template-module="2"]').append($('[func-id="4"] > [class*="-list-menu"]').parent().nextAll('[func-id="4"]'));
		}
		/* IE å…¼å®¹æç¤º */
		if(navigator.appVersion.match(/MSIE [0-9]+/)){
			$('#ieTipsBox').attr('href', $('.ieTipsBox').attr('href')+'?referrer='+window.location.href).show();
		}
		/* AIå·¦å³ */
		var aiFloat = 0;
		$('[ai-float]').siblings('[layout-style^="align[1"]').not('[layout-path*="banner"]').each(function(){
			var self = $(this);
			if(self.hasClass('content-left') || self.hasClass('content-right')){
				aiFloat++;
				self.removeClass('content-left content-right');
				if(aiFloat%2==0) {
					self.addClass('content-right');
				}else{
					self.addClass('content-left');
				}
			}
		});

		$('[ai-float]').remove();

		lazyImg();

		/* è£…ä¿®é¡µé¢åˆ¤æ–­ */
    if(GetQueryString('design') != null) $('body').addClass('designer-body');

		/* macç³»ç»Ÿåˆ¤æ–­ */
    if (navigator.userAgent.indexOf('Mac OS X') !== -1) $('body').addClass('macFont');

		/* äº§å“è¯¦æƒ…æ ·å¼ */
		if($('body').hasClass('cms_product')){
			$('head').append('<link rel="stylesheet" type="text/css" href="https://yasuo.weyesimg.com/templates/public4/assets/css/detail.css"/>');
		}

		/* å»¶è¿ŸåŠ è½½æ ·å¼ */
		if(sessionStorage.getItem('icon')){
			//å¦‚æžœæœ‰ç¼“å­˜äº†
			$('head').append('<link rel="stylesheet" type="text/css" href="https://yasuo.weyesimg.com/templates/public4/assets/css/icon.css"/>');
		}else{
			$('body').mouseout(function(){
				if(!sessionStorage.getItem('icon')){
					sessionStorage.setItem("icon", 1);
					$('head').append('<link rel="stylesheet" type="text/css" href="https://yasuo.weyesimg.com/templates/public4/assets/css/icon.css"/>');
				}
			});
			$('body').on('touchmove', function(){
				if(!sessionStorage.getItem('icon')){
					sessionStorage.setItem("icon", 1);
					$('head').append('<link rel="stylesheet" type="text/css" href="https://yasuo.weyesimg.com/templates/public4/assets/css/icon.css"/>');
				}
			});
		}
	});
/* é¼ æ ‡æ»šåŠ¨ */
	$(window).scroll(function(){
		scrollMove();
		lazyImg();
	});

/* çª—å£å¤§å°æ”¹å˜ */
	$(window).resize(function(){
		scrollMove();
		lazyImg();
	});

/* ç§»åŠ¨è®¾å¤‡è§¦æ‘¸ç§»åŠ¨ */
	$('body').on('touchmove', function(){
		scrollMove();
		lazyImg();
	});

function getCookie(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
	}else{
		return false;
	}
}

function statView(){
	var viewLogPage = getCookie('VIEW_LOGS_PAGE');
	if (viewLogPage){
		try{
            var logPage = JSON.parse(window.atob(viewLogPage));
            if (logPage && logPage.page == window.location.href && logPage.previous_page == document.referrer ) {
                return false;
            }
		}
        catch(err){
        	console.error(err.message);
        }
	}

    $.getScript("/stat/view?ref="+encodeURIComponent(document.referrer));
}
statView();

function designerCheckPage(category_lvs, is_designs){

  if (is_designs!="1"&&parseInt(category_lvs)>0) {
    // var new_box = '<div style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;background:#fff;"></div>',
    // box = document.createElement("div");
    // box.innerHTML = new_box;
    // document.body.appendChild(box);
    ajax_page_lv("POST", "/designer/check-page-lv", { page_lv: category_lvs, is_design: is_designs }, function (data) {
      var obj = JSON.parse(data);
      if (obj.data.do_action!=0) {
        funTips_fixed({
          text: obj.data.tips,
          time: 3,
          fun:function(){
            if (obj.data.do_action==1) {
              window.location.href = '/';
            }else if (obj.data.do_action == 2) {
              window.location.href = '/member/login';
            }
          }
        })
      }
      // document.body.removeChild(box);
    })
  }
  function funTips_fixed(objs) {
    var obj = {
      text: "æ“ä½œæˆåŠŸ",
      time: null,
      btn: "ç¡®å®š",
      fun: function () { }
    },
    time_fun = null,
    btn_html = '';
    if (objs) {
      for (var key in objs) {
        obj[key] = objs[key];
      }
    }
    if (obj.btn) {
      btn_html = '<div class="fixed_btnx" style="display:inline-block;padding:0px 12px;cursor:pointer;background-color:#1890FF;color:#fff;border-radius:4px;font-size:14px;line-height:28px;">' + obj.btn + '</div>';
    }
    var fixed = '<div style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:99999;background:#fff;" class="fixed_conx"><div style="position:relative;width:300px;margin:80px auto;background-color:#fff;box-shadow:0px 0px 12px rgba(0,0,0,.1);border:1px solid #eee;border-radius:4px;"><div class="fixed_textx" style="padding:20px;">123213</div><div style="text-align:center;padding:10px;border-top:1px solid #eee;overflow:hidden;">' + btn_html + '<span class="fixed_timex" style="float:right;color:red;"></span></div></div></div>',
      box = document.createElement("div"),
      times = 3;
    box.innerHTML = fixed;
    var con = box.getElementsByClassName("fixed_conx")[0],
      text = box.getElementsByClassName("fixed_textx")[0];
    if (obj.btn) {
      var btn = box.getElementsByClassName("fixed_btnx")[0];
      btn.onclick = function () {
        clearInterval(time_fun);
        document.body.removeChild(box);
        if (obj.fun) {
          obj.fun();
        }
      }
    }
    text.innerText = obj.text;
    if (obj.time) {
      var fixed_timex = box.getElementsByClassName("fixed_timex")[0];
      times = parseInt(obj.time);
      fixed_timex.innerText = times + "s";
      clearInterval(times);
      time_fun = setInterval(function () {
        times--;
        fixed_timex.innerText = times + "s";
        if (times == 0) {
          clearInterval(time_fun);
          document.body.removeChild(box);
          if (obj.fun) {
            obj.fun();
          }
        }
      }, 1000)
    }
    document.body.appendChild(box);
  }

  function ajax_page_lv(method, url, json, cb) {
    if (window.XMLHttpRequest) {
      var xmlhttp = new XMLHttpRequest();
    } else {
      var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    var arr = [];
    for (var key in json) {
      var str = key + "=" + json[key];
      arr.push(str);
    }
    var str = arr.join("&");
    if (method == "GET") {
      xmlhttp.open("GET", url + "?" + str);
      xmlhttp.send();
    } else {
      xmlhttp.open("POST", url);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send(str);
    }
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        cb(xmlhttp.responseText);
      }
    }
  }
}