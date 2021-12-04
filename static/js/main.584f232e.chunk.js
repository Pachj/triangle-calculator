(this["webpackJsonptriangle-calculator"]=this["webpackJsonptriangle-calculator"]||[]).push([[0],{67:function(e,a,n){},68:function(e,a,n){},75:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(24),u=n.n(r),l=(n(67),n(5)),s=n(42),c=n(12),h=(n(68),n(108)),d=n(107),o=n(2);function g(e){var a=Object(t.useState)(!1),n=Object(c.a)(a,2),i=n[0],r=n[1];return Object(o.jsx)("div",{className:"inputFieldContainer",children:Object(o.jsx)(d.a,{type:"text",label:{straightA:"Seite A",angleAlpha:"Winkel Alpha",straightB:"Seite B",angleBeta:"Winkel Beta",straightC:"Seite C",angleGamma:"Winkel Gamma"}[e.name],name:e.name,onChange:function(a){""!==a.target.value&&Number.isNaN(Number.parseFloat(a.target.value))?r(!0):(r(!1),e.handleInput(a))},errorText:"error",value:e.userInput[e.name],disabled:e.disabled,error:i,helperText:!0===i?"ung\xfcltige Eingabe":""})})}function v(e){return Object(o.jsxs)("div",{className:"inputForm",children:[Object(o.jsx)(g,{name:"straightA",handleInput:e.handleInput,userInput:e.userInput,disabled:e.disabled}),Object(o.jsx)(g,{name:"angleBeta",handleInput:e.handleInput,userInput:e.userInput,disabled:e.disabled}),Object(o.jsx)(g,{name:"straightC",handleInput:e.handleInput,userInput:e.userInput,disabled:e.disabled}),Object(o.jsx)(g,{name:"angleAlpha",handleInput:e.handleInput,userInput:e.userInput,disabled:e.disabled}),Object(o.jsx)(g,{name:"straightB",handleInput:e.handleInput,userInput:e.userInput,disabled:e.disabled}),Object(o.jsx)(g,{name:"angleGamma",handleInput:e.handleInput,userInput:e.userInput,disabled:e.disabled}),Object(o.jsxs)("div",{className:"buttonContainer",children:[Object(o.jsx)(h.a,{sx:{margin:"10px"},variant:"outlined",onClick:e.calculate,disabled:e.disabled,children:"Berechnen"}),Object(o.jsx)(h.a,{sx:{margin:"10px"},variant:"outlined",onClick:e.resetCalculator,children:"Zur\xfccksetzen"})]})]})}function p(e){var a=function(e){return e*(Math.PI/180)},n=0+e.sideA,i=function(){return e.angleB<90?n-e.sideC*Math.sin(a(90-e.angleB)):n+e.sideC*Math.sin(-1*a(90-e.angleB))},r=function(){return e.angleB<90?0+e.sideC*Math.cos(a(90-e.angleB)):0+e.sideC*Math.cos(-1*a(90-e.angleB))},u=Object(t.useRef)(null);return Object(t.useEffect)((function(){var e=function(){var e=function(e,a,n,t){var i=e-n,r=a-t;return Math.sqrt(i*i+r*r)},a=e(0,0,n,0),t=e(0,0,i(),r()),u=e(n,0,i(),r()),l=0;return a>l&&(l=a),t>l&&(l=t),u>l&&(l=u),400/l}(),a=u.current.getContext("2d");a.beginPath(),a.moveTo(0,0),a.lineTo(n*e,0*e),a.lineTo(i()*e,r()*e),a.closePath(),a.stroke()}),[]),Object(o.jsx)("div",{className:"canvasContainer",children:Object(o.jsx)("canvas",{width:"400",height:"400",ref:u})})}var m=function(){var e=Object(t.useState)({straightA:0,angleAlpha:0,straightB:0,angleBeta:0,straightC:0,angleGamma:0}),a=Object(c.a)(e,2),n=a[0],i=a[1],r=Object(t.useState)(!1),u=Object(c.a)(r,2),h=u[0],d=u[1],g=Object(t.useState)(!1),m=Object(c.a)(g,2),x=m[0],b=m[1],j=[{calcFunction:function(e){var a=e,n=e[0],t=e[2],i=e[4];return a[1]=Math.acos((n*n-t*t-i*i)/(-2*t*i))/(Math.PI/180),a[3]=Math.acos((t*t-n*n-i*i)/(-2*n*i))/(Math.PI/180),a[5]=180-e[1]-e[3],a},mappingArrays:[[1,0,1,0,1,0]],matchingCount:0,minRequiredMatches:3},{calcFunction:function(e){var a=e,n=[];a.forEach((function(e,a){e>0&&a%2===0&&n.push({value:e,index:a})}));var t=n[0],i=n[1];0===n[0].index&&4===n[1].index&&(t=n[1],i=n[0]);var r=(t.index-1)%a.length;-1===r&&(r=5);var u,l,s=i.index+1,c=t.index+1,h=(i.index+2)%a.length,d=a[r],o=a[s],g=a[c];if(d>0)u=Math.PI/180*d,l=Math.asin(Math.sin(u)/i.value*t.value),o=180/Math.PI*l;else{l=Math.PI/180*o;var v=Math.sin(l)/t.value;u=Math.asin(v*i.value),d=180/Math.PI*u}g=180-d-o;var p=Math.PI/180*g,m=i.value/Math.sin(u)*Math.sin(p);return a[c]=g,a[r]=d,a[s]=o,a[h]=m,a},mappingArrays:[[0,0,1,0,1,1],[1,1,0,0,1,0],[1,0,1,1,0,0],[1,0,0,1,1,0],[1,0,1,0,0,1],[0,1,1,0,1,0]],matchingCount:0,minRequiredMatches:3},{calcFunction:function(e){var a=e,n=[];a.forEach((function(e,a){e>0&&a%2===0&&n.push({value:e,index:a})}));var t=n[0],i=n[1];0===n[0].index&&4===n[1].index&&(t=n[1],i=n[0]);var r=(t.index-1)%a.length;-1===r&&(r=5);var u=i.index+1,l=t.index+1,s=(i.index+2)%a.length,c=a[l],h=Math.PI/180*c,d=a[r],o=a[u],g=Math.cos(h),v=Math.sqrt(Math.pow(i.value,2)+Math.pow(t.value,2)-2*i.value*t.value*g);return o=180-(d=Math.asin(Math.sin(h)/v*i.value)/(Math.PI/180))-c,a[l]=c,a[r]=d,a[u]=o,a[s]=v,a},mappingArrays:[[0,0,1,1,1,0],[1,0,0,0,1,1],[1,1,1,0,0,0]],matchingCount:0,minRequiredMatches:3},{calcFunction:function(e){var a,n,t,i,r,u,l=e,s=!1,c=!1;l.forEach((function(e,r){if(e>0&&r%2===0&&(-1===(i=r-1)&&(i=5),s=l[i]>0,c=l[r+1]>0,(s||c)&&l[(r+3)%l.length]>0)){a={value:e,index:r};var u=(r+3)%l.length;t={value:l[u],index:u},n=s?l[i]:l[r+1]}})),c?u=180-(r=n)-t.value:r=180-(u=n)-t.value;var h=Math.PI/180*t.value,d=Math.sin(h),o=Math.PI/180*r,g=Math.sin(o),v=Math.PI/180*u,p=Math.sin(v),m=a.value/d,x=m*g,b=(t.index+1)%l.length,j=m*p,M=t.index-1;return l[a.index+1]=r,l[i]=u,l[t.index]=t.value,l[b]=x,l[M]=j,l},mappingArrays:[[0,0,1,1,0,1],[0,1,0,0,1,1],[1,1,0,1,0,0],[0,1,0,1,1,0],[1,0,0,1,0,1],[0,1,1,0,0,1]],matchingCount:0,minRequiredMatches:3},{calcFunction:function(e){var a,n,t,i=e;i.forEach((function(e,r){if(e>0&&r%2===0){var u=r-1;-1===u&&(u=5);var l=i[u]>0,s=i[r+1]>0;l&&s&&(a={value:e,index:r},n={value:i[u],index:u},t={value:i[r+1],index:r+1})}}));var r={value:180-n.value-t.value,index:(t.index+2)%i.length},u=Math.PI/180*r.value,l=Math.sin(u),s=Math.PI/180*t.value,c=Math.sin(s),h=Math.PI/180*n.value,d=Math.sin(h),o=a.value/l,g=o*c,v=(r.index+1)%i.length,p=o*d,m=r.index-1;return i[t.index]=t.value,i[n.index]=n.value,i[r.index]=r.value,i[v]=g,i[m]=p,i},mappingArrays:[[0,0,0,1,1,1],[1,1,0,0,0,1],[0,1,1,1,0,0]],matchingCount:0,minRequiredMatches:3},{calcFunction:function(e){var a=e,n=[];a.forEach((function(e,a){e>0&&a%2===1&&n.push({value:e,index:a})}));var t=n[0],i=n[1];return 1===n[0].index&&5===n[1].index&&(t=n[1],i=n[0]),a[(i.index+2)%a.length]=180-t.value-i.value,a[t.index+1%a.length]=100,a},mappingArrays:[[0,0,0,1,0,1],[0,1,0,0,0,1],[0,1,0,1,0,0]],matchingCount:0,minRequiredMatches:2}];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h1",{children:"Triangle Calculator"}),Object(o.jsx)(v,{handleInput:function(e){i(Object(s.a)(Object(s.a)({},n),{},Object(l.a)({},e.target.name,e.target.value)))},userInput:n,calculate:function(){var e=function(e){return 0===e?0:1},a=[n.straightA,n.angleBeta,n.straightC,n.angleAlpha,n.straightB,n.angleGamma],t=[e(n.straightA),e(n.angleBeta),e(n.straightC),e(n.angleAlpha),e(n.straightB),e(n.angleGamma)],r=j;if(r.forEach((function(e,a){var n=[];e.mappingArrays.forEach((function(e){var a=0;e.forEach((function(e,n){1===e&&1===t[n]&&(a+=1)})),n.push(a)})),r[a].matchingCount=Math.max.apply(null,n)})),r.sort((function(e,a){return a.matchingCount-e.matchingCount})),r[0].minRequiredMatches<=r[0].matchingCount){var u=r[0].calcFunction(a);i({straightA:u[0],angleBeta:u[1],straightC:u[2],angleAlpha:u[3],straightB:u[4],angleGamma:u[5]}),d(!0)}else d(!1),b(!0)},disabled:h,resetCalculator:function(){i({straightA:0,angleBeta:0,straightC:0,angleAlpha:0,straightB:0,angleGamma:0}),d(!1),b(!1)}}),!0===x?Object(o.jsx)("div",{className:"errorContainer",children:Object(o.jsx)("p",{children:"Mit diesen Eingaben ist keine Berechnung m\xf6glich."})}):"",!0===h?Object(o.jsx)(p,{sideC:50,sideA:100,angleB:100}):""]})};u.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.584f232e.chunk.js.map