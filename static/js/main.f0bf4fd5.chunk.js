(this.webpackJsonpakelab_test=this.webpackJsonpakelab_test||[]).push([[0],{107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},113:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var c=a(2),r=a(0),n=a(14),s=a.n(n),i=(a(107),a(108),a(49)),o=a(9),l=a(65),u=(a(109),"FIBONACCI"),b="/akelabfront",A="/fibonacci",j="/multiples",d="/movies",O="new-old",m="old-new",p="min-max",v="max-min",h=a(166),f=a(157),x=a(164);function g(e){var t=e.component,a=void 0===t?u:t,n=Object(r.useReducer)(E,{fibunacciNumberTyped:"",fibunacciHasError:!1,fibunacciResponse:[],multiplesNumberTyped:"",multiplesHasError:!1,multiplesResponse:[]}),s=Object(l.a)(n,2),i=s[0],o=s[1];return Object(c.jsxs)("form",{children:[Object(c.jsxs)(h.a,{className:"wrapper",children:[Object(c.jsx)(x.a,{variant:"outlined",placeholder:"Ingrese un n\xfamero mayor a 0",defaultValue:a===u?i.fibunacciNumberTyped:i.multiplesNumberTyped,onChange:function(e){return t=e.currentTarget.value,void(/^[1-9][0-9]*$/.test(t)?(o(a===u?{type:"setFibunacciHasError",data:!1}:{type:"setMultiplesHasError",data:!1}),o(a===u?{type:"setFibunacciNumberTyped",data:t}:{type:"setMultiplesNumberTyped",data:t})):o(a===u?{type:"setFibunacciHasError",data:!0}:{type:"setMultiplesHasError",data:!0}));var t},maxLength:10,className:"numbersInput"}),Object(c.jsx)(f.a,{className:"button",variant:"outlined",color:"primary",onClick:a===u?function(e){if(e.preventDefault(),""!==i.fibunacciNumberTyped){for(var t,a=1,c=0,r=[1],n=1;n<i.fibunacciNumberTyped;n++)t=a,a+=c,c=t,r=r.concat(a);o({type:"setFibunacciResponse",data:r})}}:function(e){e.preventDefault();for(var t=[],a=1;a<=i.multiplesNumberTyped;a++)t=a%3===0&&a%5===0?t.concat("AKELAB"):a%3===0?t.concat("AKE"):a%5===0?t.concat("LAB"):t.concat(a);o({type:"setMultiplesResponse",data:t})},disabled:a===u?i.fibunacciHasError:i.multiplesHasError,children:"Calcular"})]}),Object(c.jsx)("label",{hidden:a===u?!i.fibunacciHasError:!i.multiplesHasError,children:"No se permiten letras o n\xfameros menores a 1"}),Object(c.jsxs)(h.a,{className:"response_wrapper",children:[Object(c.jsx)("h2",{children:a===u?"La secuencia Fibonacci es:":"M\xfaltiplos de 3 y 5:"}),Object(c.jsx)("textarea",{defaultValue:a===u?i.fibunacciResponse.join(", "):i.multiplesResponse.join(", ")})]})]})}function E(e,t){switch(t.type){case"setFibunacciNumberTyped":return Object(o.a)(Object(o.a)({},e),{},{fibunacciNumberTyped:t.data});case"setFibunacciHasError":return Object(o.a)(Object(o.a)({},e),{},{fibunacciHasError:t.data});case"setFibunacciResponse":return Object(o.a)(Object(o.a)({},e),{},{fibunacciResponse:t.data});case"setMultiplesNumberTyped":return Object(o.a)(Object(o.a)({},e),{},{multiplesNumberTyped:t.data});case"setMultiplesHasError":return Object(o.a)(Object(o.a)({},e),{},{multiplesHasError:t.data});case"setMultiplesResponse":return Object(o.a)(Object(o.a)({},e),{},{multiplesResponse:t.data});default:return e}}a(113);function N(){return Object(c.jsxs)("div",{className:"home_wrapper",children:[Object(c.jsx)("h2",{children:"Bienvenido"}),Object(c.jsx)("h4",{children:"Seleccione el ejercicio que desea visualizar"})]})}var R=a(22),C=a(17),w=(a(115),a(162)),_=a(66),k=a(169),B=a(158),y=a(156),I=a(159),S=a(160),T=a(167),D="GET_ALL_MOVIES_INIT",U="GET_All_MOVIES_SUCCESS",Q="SET_NEW_ERROR",H="SET_GENRE_CHECKBOX_SELECTED",M="SET_SHOW_ORDER_BY_DIALOG",L="SET_SHOW_GENRE_DIALOG",Y="SET_MOVIES_ORDER",X="FILTER_MOVIE_NAME",F=function(e,t){return{type:e,payload:t}};var G=Object(R.b)((function(e){return{moviesReducer:e.moviesReducer}}),(function(e){return Object(C.b)({actionDispatcher:F},e)}))((function(e){var t=e.moviesReducer,a=e.actionDispatcher,r=t.genres,n=t.showGenreDialog,s=function(e){var t=Object(_.a)(r),c=t.findIndex((function(t){return t.name===e.target.id}));t[c]=Object(o.a)(Object(o.a)({},t[c]),{},{checked:!t[c].checked}),a(H,{data:t})};return Object(c.jsxs)(k.a,{open:n,onClose:function(){return a(L,{data:!1})},children:[Object(c.jsx)(B.a,{children:"G\xe9nero"}),Object(c.jsx)(y.a,{children:r.map((function(e,t){return Object(c.jsxs)(I.a,{children:[Object(c.jsx)(T.a,{id:e.name,checked:r[t].checked||!1,onChange:s}),Object(c.jsx)(S.a,{primary:e.name})]},t)}))})]})})),V=a(161),J=a(48);a(116);var q=Object(R.b)((function(e){return{moviesReducer:e.moviesReducer}}),(function(e){return Object(C.b)({actionDispatcher:F},e)}))((function(e){var t=e.moviesReducer,a=e.actionDispatcher,r=t.showOrderByDialog,n=t.moviesOrder;return Object(c.jsx)(k.a,{open:r,onClose:function(){return a(M,{data:!1})},children:Object(c.jsxs)(V.a,{children:[Object(c.jsx)(J.a,{className:"titles",children:"Fecha"}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(I.a,{button:!0,className:n===O?"currentActiveOrder":"",children:Object(c.jsx)(S.a,{className:"subtitles",primary:"Nuevo - Antiguas",onClick:function(){return a(Y,{data:O})}})}),Object(c.jsx)(I.a,{button:!0,className:n===m?"currentActiveOrder":"",children:Object(c.jsx)(S.a,{className:"subtitles",primary:"Antiguas - Nuevo",onClick:function(){return a(Y,{data:m})}})})]}),Object(c.jsx)(J.a,{className:"titles",children:"Calificaci\xf3n"}),Object(c.jsxs)(y.a,{children:[Object(c.jsx)(I.a,{button:!0,className:n===p?"currentActiveOrder":"",children:Object(c.jsx)(S.a,{className:"subtitles",primary:"0 - 10 puntos",onClick:function(){return a(Y,{data:p})}})}),Object(c.jsx)(I.a,{button:!0,className:n===v?"currentActiveOrder":"",children:Object(c.jsx)(S.a,{className:"subtitles",primary:" 10- 0 puntos",onClick:function(){return a(Y,{data:v})}})})]})]})})})),z=a(83),Z=a.n(z);a(117);var K=Object(R.b)((function(e){return{moviesReducer:e.moviesReducer}}),(function(e){return Object(C.b)({actionDispatcher:F},e)}))((function(e){var t=e.moviesReducer,a=e.actionDispatcher,r=t.showGenreDialog,n=t.showOrderByDialog;return Object(c.jsxs)(h.a,{className:"wrapper",children:[Object(c.jsx)(x.a,{className:"search_input",variant:"outlined",placeholder:"Buscar pel\xedcula",onChange:function(e){a(X,{data:e.target.value})},InputProps:{endAdornment:Object(c.jsx)(w.a,{position:"end",children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgBpZRBUsIwFIb/FGTGXd25rCcQN4puxBvoCdSd4wxYTiDcIALD4Ip6Ao8AS2dYiDdg6ZIlA23iS0gxhUIZ/Wc6hCT93p+X98qQId/33RAoQqCsJxyMwilG3S4fr+5l20DVqv8siUdDd21RIpjP0bChbJObKMI7rZat6fglz56bz3AVA500GIF6MYicveQcHLSa/Eg9aiwkarQ0UeC9AvoqeKqzSsW/o9meATXaTV5PC/j46BdzefRp6Mb7cqubTkulHkU4JGBAG2rYoOHw4/v0rLRPe8v0FC/OS6+JYyq7akG7ivCGDOUdcHNcVzB2mYCFBqTUbvNBFoxzPpHmYkQkTxz8U0xqZ1oJmJj9LsQ3lCXJFjUoCZqAFQrasgbOI9xlgSigF+eYHI4SMJMDnXiH4SnLXShQN8OxyvFazqwb8oRA/+HB99JAqtXI1a12BVZf/KaICrdvtdJYgnE48kv/E+yYSXltdwjVo78GU8dSbqRVIttkg5QcC+RFAp8xSLUI9eGRyeHYYkzo5gZS4MoGLZ0ZkOozz4S8b7V4sOp6OoWb9h1bwlZAE4p4s0v1pylP9XRNZeCpo0QhbjodPsIfld/LIaB6ccMZgm1H2EU/b3rMCFqVYaoAAAAASUVORK5CYII=",alt:"Search"})})}}),Object(c.jsx)(h.a,{className:"icons_wrapper",onClick:function(){return a(L,{data:!r})},children:Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAYAAAAbBi9cAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFuSURBVHgBlZNRTsJAEIb/aVfCI55APIE9Ap5APQH4SqCMJ1BP0LX2nXIC5ATgCfQGcoQ+YqS7zpaElFihnaTZbDb99t9//iGUajjkQClMLRDAIvV9PGitM9QoGjIHHtApNgZTAawt0RvBPnmENCcs6oCUbzCXtbsnK+LXKFqMx9wzAJMF1+CsqbyTn5cggVp8ynpLoEEcR7MaIHjljXhyJ+SFdcoaQIqXoEExc9cYsLW4IqK0fJHXBJQbLEXtjXyZhU1HI+7tFY1D/kLJ7FNlDa6TRK9GIX+Qi8mu1koO7utCyMOcCBNpStddLsqeYbCS52aNPHKB9VURl45AZkms60SjWf2ryHUozyXpu1ytTo3LwYgcHOSYCCSwIC3jwg5mfVTmarsRs2VElqgAOa3OzCSOXqRD52Lyo8zioAp01kKmfA+Xm81fkGrJnAH9MGRnbF/A6c+3dKmi2u0jXROPOlsDLbIuBPKuPOhjHv0CmReI0Y+AlHcAAAAASUVORK5CYII=",alt:"Filter",className:"filter_icon"})}),Object(c.jsxs)(h.a,{className:"orderby_wrapper",onClick:function(){return a(M,{data:!n})},children:[Object(c.jsx)(h.a,{children:"Ordenar"}),Object(c.jsx)(h.a,{children:n?Object(c.jsx)(Z.a,{className:"arrow_icon"}):Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAUCAYAAABf2RdVAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEoSURBVHgBbZI9UoNAHMX3g97YWWLDR2lnmXQWMJATqCdQT5DkCJ5AbxBg6E3pERiabJnSlBaA7+/sMhvY/wzMA96831t2JcPkef4SRdFv0zQn5hgOw3IYhi9oxTm/K4riZ2oSlvb7vt84k+iWZRklLUl3Xbeq6/owSwJmTTjSUso9KvgzE/WA8Vm/W6Djh22SRmBlKgzDa5jvqV8QBOe2bb/HpDFWiK3BQm8M9sKksWsLu7/AWdhTHMdnyAdcN6jABXPPlVXhyKdfqQcwR/2oyrK8FRPDQm8RDfVbzYrrbfFJw7DDQtS/NoY0TZ/ANz/xExjzc5ln9TCbS6dhZxOExmwtzJvBjElJkuT48EgPSHsHpmCTEZ7nmUOmqqp6ZY4RiD4QwizXNX8nlHWAdroE9AAAAABJRU5ErkJggg==",alt:"OrderBy",className:"arrow_icon"})})]}),Object(c.jsx)(G,{}),Object(c.jsx)(q,{})]})})),P=a(155),W=a(163);a(119);var $=Object(R.b)((function(e){return{moviesReducer:e.moviesReducer}}),(function(e){return Object(C.b)({actionDispatcher:F},e)}))((function(e){var t=e.moviesReducer,a=t.moviesData,r=t.movieToFind,n=t.genres,s=t.moviesOrder,i=a.results,o=function(e){var t="";return e.forEach((function(e){var c=a.genres.find((function(t){return t.id===e}));t+="".concat(c.name,", ")})),t};return function(){var e=n.filter((function(e){return e.checked}));if(e.length>0){e=e.map((function(e){return e.id}));for(var t=[],a=0;a<i.length;a++)for(var c=0;c<e.length;c++)i[a].genre_ids.includes(e[c])&&(t=t.concat(i[a]));i=Object(_.a)(new Set(t))}if(r){var s=new RegExp(r.toLowerCase());i=i.filter((function(e){return s.test(e.title.toLowerCase())}))}}(),function(){switch(s){case O:i=i.sort((function(e,t){return e.release_date>t.release_date?-1:t.release_date>e.release_date?1:0}));break;case m:i=i.sort((function(e,t){return e.release_date>t.release_date?1:t.release_date>e.release_date?-1:0}));break;case v:i=i.sort((function(e,t){return e.vote_average>t.vote_average?-1:t.vote_average>e.vote_average?1:0}));break;case p:i=i.sort((function(e,t){return e.vote_average>t.vote_average?1:t.vote_average>e.vote_average?-1:0}));break;default:i=i.sort((function(e,t){return e.release_date>t.release_date?-1:t.release_date>e.release_date?1:0}))}}(),Object(c.jsx)(h.a,{className:"main_wrapper",children:Object(c.jsx)(W.a,{container:!0,spacing:1,children:i.map((function(e,t){return Object(c.jsx)(W.a,{item:!0,xs:12,md:6,lg:4,xl:4,children:Object(c.jsxs)(P.a,{className:"paper",children:[Object(c.jsx)(h.a,{className:"movie_title",children:e.title}),Object(c.jsxs)(h.a,{className:"movie_data_container",children:[Object(c.jsx)(h.a,{className:"movie_image_container",children:Object(c.jsx)("img",{src:"".concat(a.images_url).concat(e.poster_path),alt:"movieImg",className:"movie_image"})}),Object(c.jsxs)(h.a,{className:"movie_info_container",children:[Object(c.jsx)(h.a,{className:"movie_description",children:e.overview}),Object(c.jsxs)(h.a,{className:"movie_rating",children:[Object(c.jsxs)(J.a,{className:"movie_rating_text",children:[Object(c.jsx)("span",{className:"movie_rating_title",children:"T\xedtulo: "})," ",e.title]}),Object(c.jsxs)(J.a,{className:"movie_rating_text",children:[Object(c.jsx)("span",{className:"movie_rating_title",children:"Clasificaci\xf3n: "})," ",e.vote_average,[1,2,3,4].map((function(e,t){return Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADUSURBVHgBhZDBEYIwEEX/Ag3khjc8qTdLsAPtQDtQKkArUDvQCsQOLMGboxe5yQ0bgLjJQIgC484wbLK7728+0BLZo7fkb9tWo0bzzQ/g0lMfctkXozSx687vQEE0M7mDRUOhJE4LKYUmEM35F5T1hO+Phl7g4CkKy0TciJYI+D6qFSUcNcVCV/wNeVG9Bpvd/TUs2vfDsBfD10qvVb/GjbvhclelZiBHPu7qt50zAy60O0rqzcQNrxEacWBS5Z615xnsAjNCMUi1CWx5zJafiKQx5QMN+kFBDkW8hwAAAABJRU5ErkJggg==",alt:"YelloStarIcon"},t)})),Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADRSURBVHgBhVDRDYIwEC1NGcANcANH8IOQ8CUbwAbKBOoE6gY4gfjFBxAcwQ1kBP+B1ispzaWUeEnbl7u+d3ePEEtUVbWv6/piqzlmomkabxiGj8Rd163DMGxxnZqEvu+jCTPGklkHpbgTQqzGhOPE8Hiq3kL+jgQyBooJfDrCIZbwZA11JxSuDPCb/I+X/Ktly7I8YTUjbr7vHyTQS8Os+ZI0uHWdMHZps0SAZaMZgVIaK/iFbmc4KeJsNRmN9JROcc7TIAhGE4qiyF3XfRBkyg/JglUPZlv8mQAAAABJRU5ErkJggg==",alt:"GreyStarIcon"})]}),Object(c.jsxs)(J.a,{className:"movie_rating_text",children:[Object(c.jsx)("span",{className:"movie_rating_title",children:"G\xe9nero: "})," ",o(e.genre_ids)]}),Object(c.jsxs)(J.a,{className:"movie_rating_text",children:[Object(c.jsx)("span",{className:"movie_rating_title",children:"Fecha de realizaci\xf3n: "})," ",e.release_date]})]})]})]})]})},t)}))})})})),ee=a(84),te=a.n(ee);a(120);var ae=Object(R.b)((function(){return{}}),(function(e){return Object(C.b)({actionDispatcher:F},e)}))((function(e){var t=e.actionDispatcher;return Object(c.jsx)(h.a,{className:"mainContainer",children:Object(c.jsxs)(h.a,{className:"subContainer",children:["Sin conexi\xf3n a internet o al servidor. Por favor intente nuevamente.",Object(c.jsx)(f.a,{variant:"outlined",color:"primary",endIcon:Object(c.jsx)(te.a,{}),onClick:function(){return t(D,{Akelab:123456789})},children:"Volver a intentar"})]})})}));var ce=Object(R.b)((function(e){return{moviesReducer:e.moviesReducer}}),(function(e){return Object(C.b)({actionDispatcher:F},e)}))((function(e){var t=e.moviesReducer,a=e.actionDispatcher,n=t.moviesData;return Object(r.useEffect)((function(){0===Object.keys(n).length&&a(D,{Akelab:123456789})})),Object(c.jsx)("div",{id:"movies_wrapper",children:Object.keys(n).length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Pel\xedculas"}),Object(c.jsx)(K,{}),Object(c.jsx)($,{})]}):Object(c.jsx)(ae,{})})})),re=a(47),ne=a(16);a(121);function se(){var e=Object(r.useState)({home:!0,fibonacci:!1,words:!1,movies:!1}),t=Object(l.a)(e,2),a=t[0],n=t[1],s=function(e){var t={};Object.keys(a).forEach((function(a){t=a===e?Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},a,!0)):Object(o.a)(Object(o.a)({},t),{},Object(i.a)({},a,!1))})),n(t)};return Object(c.jsx)(re.a,{children:Object(c.jsxs)("div",{id:"main_wrapper",children:[Object(c.jsxs)("div",{id:"navbar",children:[Object(c.jsx)("div",{className:a.home?"link_active":"",children:Object(c.jsx)(re.b,{id:"home",to:b,onClick:function(e){return s(e.target.id)},children:"Inicio"})}),Object(c.jsx)("div",{className:a.fibonacci?"link_active":"",children:Object(c.jsx)(re.b,{id:"fibonacci",to:A,onClick:function(e){return s(e.target.id)},children:"Fibonacci"})}),Object(c.jsx)("div",{className:a.words?"link_active":"",children:Object(c.jsx)(re.b,{id:"words",to:j,onClick:function(e){return s(e.target.id)},children:"M\xfaltiplos"})}),Object(c.jsx)("div",{className:a.movies?"link_active":"",children:Object(c.jsx)(re.b,{id:"movies",to:d,onClick:function(e){return s(e.target.id)},children:"Pel\xedculas"})})]}),Object(c.jsxs)(ne.c,{children:[Object(c.jsx)(ne.a,{exact:!0,path:b,children:Object(c.jsx)(N,{})}),Object(c.jsx)(ne.a,{path:A,children:Object(c.jsx)(g,{component:u})}),Object(c.jsx)(ne.a,{path:j,children:Object(c.jsx)(g,{component:"WORDS_REPLACEMENT"})}),Object(c.jsx)(ne.a,{path:d,children:Object(c.jsx)(ce,{})})]})]})})}var ie=function(){return Object(c.jsx)(se,{})},oe={moviesData:{},movieToFind:"",genres:[],showGenreDialog:!1,showOrderByDialog:!1,moviesOrder:m};var le=Object(C.c)({moviesReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(o.a)(Object(o.a)({},e),{},{moviesData:t.response.data,genres:t.response.data.genres});case X:return Object(o.a)(Object(o.a)({},e),{},{movieToFind:t.payload.data});case H:return Object(o.a)(Object(o.a)({},e),{},{genres:t.payload.data});case L:return Object(o.a)(Object(o.a)({},e),{},{showGenreDialog:t.payload.data});case M:return Object(o.a)(Object(o.a)({},e),{},{showOrderByDialog:t.payload.data});case Y:return Object(o.a)(Object(o.a)({},e),{},{moviesOrder:t.payload.data});default:return e}}}),ue=a(86),be=Object(ue.a)();var Ae=a(26),je=a.n(Ae),de=a(40),Oe=a(85);function me(e,t,a){return pe.apply(this,arguments)}function pe(){return(pe=Object(Oe.a)(je.a.mark((function e(t,a,c){var r;return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URL(t),Object.keys(c).forEach((function(e){return r.searchParams.append(e,c[e])})),e.next=4,fetch(r,{method:a}).then((function(e){return e.json()}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ve=je.a.mark(fe),he=je.a.mark(xe);function fe(e){var t,a;return je.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,c.prev=1,c.next=4,Object(de.b)(me,"https://akelabbackend.herokuapp.com","GET",t);case 4:if(!(a=c.sent).error){c.next=10;break}return c.next=8,Object(de.c)({type:Q,errorMsg:a.errorMsg});case 8:c.next=12;break;case 10:return c.next=12,Object(de.c)({type:U,response:a});case 12:c.next=18;break;case 14:return c.prev=14,c.t0=c.catch(1),c.next=18,Object(de.c)({type:Q,errorMsg:"Hubo un problema al realizar la petici\xf3n."});case 18:case"end":return c.stop()}}),ve,null,[[1,14]])}function xe(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.d)(D,fe);case 2:case"end":return e.stop()}}),he)}var ge=je.a.mark(Ee);function Ee(){return je.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(de.a)([xe()]);case 2:case"end":return e.stop()}}),ge)}var Ne=Object(o.a)(Object(o.a)({},Object(C.e)(le,Object(C.a)(be))),{},{runSaga:be.run});Ne.runSaga(Ee),s.a.render(Object(c.jsx)(R.a,{store:Ne,children:Object(c.jsx)(ie,{})}),document.getElementById("root"))}},[[124,1,2]]]);
//# sourceMappingURL=main.f0bf4fd5.chunk.js.map