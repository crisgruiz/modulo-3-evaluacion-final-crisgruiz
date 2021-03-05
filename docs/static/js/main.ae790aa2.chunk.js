(this["webpackJsonpevaluacion-final-modulo3"]=this["webpackJsonpevaluacion-final-modulo3"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(16),r=a.n(s),i=a(10),l=a(2),d=function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{id:e.id,name:e.name,image:e.image,specie:e.species,status:e.status,origin:e.origin.name,episodes:e.episode.length}}))}))},o=a(17),j=a(18),u=a(21),h=a(20),m=(a(26),a(27),a.p+"static/media/death.c4cdc5a2.png"),b=a(7),x=a(0),O=function(e){return Object(x.jsx)(b.b,{to:"/CharacterDetail/".concat(e.character.id),className:"characterLink",children:Object(x.jsxs)("article",{className:"card",children:[Object(x.jsxs)("div",{className:"title",children:[Object(x.jsx)("p",{className:"card__state",children:"Dead"!==e.character.status?"":Object(x.jsx)("img",{className:"card__state--icon",src:m,alt:"dead"})}),Object(x.jsx)("h2",{className:"card__name",children:e.character.name})]}),Object(x.jsx)("img",{src:e.character.image,alt:e.character.name,className:"card__image"}),Object(x.jsx)("p",{className:"card__specie",children:e.character.specie})]})})},p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.characters.map((function(e){return Object(x.jsx)("li",{className:"cardsContainer__cards--element",children:Object(x.jsx)(O,{character:e})},e.id)}));return Object(x.jsx)("section",{className:"cardsContainer",children:Object(x.jsx)("ul",{className:"cardsContainer__cards",children:e})})}}]),a}(n.a.Component),f=(a(34),a(35),function(e){return Object(x.jsxs)("div",{className:"formName",children:[Object(x.jsx)("label",{className:"formName__label",htmlFor:"name",children:"Filtrar por nombre:"}),Object(x.jsx)("input",{className:"formName__input-text",type:"text",name:"name",id:"name",value:e.value,onChange:function(t){e.handleFilter({key:"name",value:t.target.value})}})]})}),_=(a(36),function(e){return Object(x.jsxs)("div",{className:"formSpecie",children:[Object(x.jsx)("label",{className:"formSpecie__label",htmlFor:"species",children:"Filtrar por especie:"}),Object(x.jsxs)("select",{className:"formSpecie__input-select",name:"species",id:"species",value:e.species,onChange:function(t){e.handleFilter({key:"species",value:t.target.value})},children:[Object(x.jsx)("option",{value:"All",children:"All"}),Object(x.jsx)("option",{value:"Human",children:"Human"}),Object(x.jsx)("option",{value:"Alien",children:"Alien"})]})]})}),N=function(e){return Object(x.jsx)("section",{children:Object(x.jsxs)("form",{className:"form",action:"",onSubmit:function(e){e.preventDefault()},children:[Object(x.jsx)(f,{handleFilter:e.handleFilter,value:e.value}),Object(x.jsx)(_,{handleFilter:e.handleFilter,specie:e.specie})]})})},v=(a(37),function(e){return Object(x.jsxs)("section",{className:"noFound",children:[Object(x.jsx)("button",{className:"noFound__returnBtn",onClick:e.handleReturn,children:"Volver"}),Object(x.jsx)("p",{className:"noFound__text",children:"No hay ning\xfan personaje que coincida con el criterio de b\xfasqueda."})]})}),g=(a(38),function(e){return Object(x.jsxs)("section",{className:"detailContainer",children:[Object(x.jsx)(b.b,{to:"/",className:"returnBtn",children:"Volver"}),Object(x.jsxs)("section",{className:"detailCard",children:[Object(x.jsx)("img",{className:"detailCard__image",src:e.character.image,alt:e.character.name}),Object(x.jsxs)("div",{className:"detailCard__text",children:[Object(x.jsxs)("div",{className:"Cardtitle",children:[Object(x.jsx)("h2",{className:"detailCard__text--name",children:e.character.name}),Object(x.jsx)("p",{className:"detailCard__state",children:"Dead"!==e.character.status?"":Object(x.jsx)("img",{className:"detailCard__state--icon",src:m,alt:"dead"})})]}),Object(x.jsxs)("h3",{className:"detailCard__text--info",children:["Specie: ",e.character.specie]}),Object(x.jsxs)("h3",{className:"detailCard__text--info",children:["Planet: ",e.character.origin]}),Object(x.jsxs)("h3",{className:"detailCard__text--info",children:["State: ",e.character.status]}),Object(x.jsxs)("h3",{className:"detailCard__text--info",children:["Episodes: ",e.character.episodes]})]})]})]})}),C=(a(39),function(){return Object(x.jsxs)("section",{className:"noPage",children:[Object(x.jsx)(b.b,{to:"/",className:"noPage__returnBtn",children:"Volver"}),Object(x.jsx)("p",{className:"noPage__text",children:"P\xe1gina no encontrada"})]})}),F=a.p+"static/media/logo.de13d484.png",k=(a(40),function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),r=Object(i.a)(s,2),o=r[0],j=r[1],u=Object(c.useState)("All"),h=Object(i.a)(u,2),m=h[0],b=h[1];Object(c.useEffect)((function(){d().then((function(e){return n(e)}))}),[]);var O=function(e){"name"===e.key?j(e.value):"species"===e.key&&b(e.value)},f=a.filter((function(e){return e.name.toUpperCase().includes(o.toUpperCase())})).filter((function(e){return"All"===m||e.specie===m})),_=function(){j("")};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("header",{className:"header",children:Object(x.jsx)("img",{src:F,alt:"Rick and Morty",className:"header__logo"})}),Object(x.jsx)("div",{className:"App",children:Object(x.jsxs)(l.c,{children:[Object(x.jsx)(l.a,{exact:!0,path:"/",render:function(){return 0===f.length?Object(x.jsx)(v,{handleReturn:_}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(N,{handleFilter:O,value:o}),Object(x.jsx)(p,{characters:f})]})}}),Object(x.jsx)(l.a,{path:"/CharacterDetail/:id",render:function(e){var t=e.match.params.id,c=a.find((function(e){return e.id===parseInt(t)}));return c?Object(x.jsx)(g,{character:c}):Object(x.jsx)(C,{})}})]})})]})});r.a.render(Object(x.jsx)(b.a,{children:Object(x.jsx)(k,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.ae790aa2.chunk.js.map