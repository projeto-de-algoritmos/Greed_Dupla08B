(this.webpackJsonpfront_grafos_git=this.webpackJsonpfront_grafos_git||[]).push([[0],{30:function(e,n,t){e.exports=t(43)},43:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(23),i=t(18),c=t(2),l=t(29),d=t(9),s=t(10),u=t(6),f=t(7),p=t(16);function m(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 10px;\n  list-style: none;\n  width: 40%;\n  li {\n    background: transparent;\n    padding: 15px 10px;\n    color: #fff;\n    border: 1px solid #eee;\n    border-radius: 4px;\n    margin-top: 10px;\n  }\n"]);return m=function(){return e},e}function b(){var e=Object(u.a)(["\n  display: flex;\n  position: absolute;\n  top: 1.5em;\n  left: 18em;\n  h1 {\n    color: #fff;\n  }\n"]);return b=function(){return e},e}function g(){var e=Object(u.a)(["\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-gap: 10px;\n  list-style: none;\n  width: 50%;\n  button {\n    background: transparent;\n    padding: 15px 10px;\n    border: 1px solid #eee;\n    border-radius: 4px;\n    margin-top: 10px;\n    color: #fff;\n    transition: background 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n\n    li {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  form {\n    display: flex;\n    flex-direction: column;\n    margin-top: 30px;\n    margin-left: 10px;\n    input {\n      background: rgba(0, 0, 0, 0.1);\n      border: 0;\n      border-radius: 4px;\n      height: 44px;\n      padding: 0 15px;\n      color: #fff;\n      margin: 0 0 10px;\n\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    }\n    button {\n      margin: 5px 0 0;\n      height: 44px;\n      background: #3b9eff;\n      font-weight: bold;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      font-size: 16px;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n    }\n  }\n  button {\n    margin: 5px 0 0;\n    height: 44px;\n    background: #3b9eff;\n    font-weight: bold;\n    color: #fff;\n    border: 0;\n    border-radius: 4px;\n    font-size: 16px;\n    transition: background 0.2s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return v=function(){return e},e}function _(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: left;\n  align-items: flex-start;\n"]);return _=function(){return e},e}function h(){var e=Object(u.a)(["\n  height: 100%;\n\n  background: linear-gradient(-90deg, #7159c1, #335bff);\n  h2 {\n    color: #fff;\n    margin-top: 20px;\n    margin-left: 60px;\n  }\n"]);return h=function(){return e},e}var x=f.b.div(h()),E=f.b.div(_()),y=f.b.div(v(),Object(p.a)(.03,"#3b9eff"),Object(p.a)(.03,"#3b9eff")),j=f.b.ul(g(),Object(p.a)(.03,"#335bff")),O=f.b.div(b()),k=f.b.ul(m()),S=t(27),C=t(28),T=function(){function e(n){var t=this;Object(S.a)(this,e),this.dados=n,this.conjunto_solucao={},this.dados.forEach((function(e){e.duracao_estimada=t.tipoDeServico(e.tipo_de_servico)}))}return Object(C.a)(e,[{key:"obterDados",value:function(){console.log(this.dados)}},{key:"somaDosHorarios",value:function(){var e=0;return this.dados.forEach((function(n){e+=n.duracao_estimada})),e}},{key:"minutosParaHoras",value:function(e){if(e<60)return e<10?"00:0"+e.toString():"00:"+e.toString();var n=Math.floor(e/60),t=e%60;return n<10&&t<10?"0"+n.toString()+":0"+t.toString():n<10&&t>=10?"0"+n.toString()+":"+t.toString():n>=10&&t<10?n.toString()+":0"+t.toString():n>=10&&t>=10?n.toString()+":"+t.toString():void 0}},{key:"horasParaMinutos",value:function(e){var n=e.split(":");return 60*parseInt(n[0],10)+parseInt(n[1],10)}},{key:"tipoDeServico",value:function(e){return"Trocar o roteador"===e?15:"Trocar antena da TV"===e?30:"Instalar ponto adicional"===e?45:"Cancelamento do servi\xe7o"===e?60:"Resolver problema da internet"===e?90:"Trocar toda a fia\xe7\xe3o"===e?120:void 0}},{key:"melhor_agendamento",value:function(){var e=this;this.dados.sort((function(e,n){return e.em_casa_ate<n.em_casa_ate?-1:e.em_casa_ate>n.em_casa_ate?1:(console.log(e,n),e.duracao_estimada<n.duracao_estimada?-1:void 0)}));var n=480,t=0;return this.dados.forEach((function(a){a.hora_de_inicio=e.minutosParaHoras(n),a.hora_de_termino=e.minutosParaHoras(n+a.duracao_estimada),n+=a.duracao_estimada;var o=e.horasParaMinutos(a.em_casa_ate);a.atraso=0,n>o&&(a.atraso=n-o,t=+n-o),a.duracao_estimada=e.minutosParaHoras(a.duracao_estimada)})),console.log("Atraso maximo: ",t),this.dados}}]),e}();var w=function(){var e=Object(a.useState)([]),n=Object(d.a)(e,2),t=n[0],r=n[1],i=Object(a.useState)([]),c=Object(d.a)(i,2),u=c[0],f=c[1];return o.a.createElement(x,null,o.a.createElement(E,null,o.a.createElement(y,null,o.a.createElement(s.a,{onSubmit:function(e){var n={cliente:e.cliente,endereco:e.endereco,em_casa_ate:e.disponibilidade,tipo_de_servico:e.servico};r([].concat(Object(l.a)(t),[n]))}},o.a.createElement(s.b,{name:"cliente",type:"fieldName",placeholder:"Cliente"}),o.a.createElement(s.b,{name:"endereco",type:"fieldName",placeholder:"Endere\xe7o"}),o.a.createElement(s.b,{name:"disponibilidade",type:"fieldName",placeholder:"Disponibilidade"}),o.a.createElement(s.b,{name:"servico",list:"opcoes",type:"fieldName",placeholder:"Servi\xe7o"}),o.a.createElement("datalist",{id:"opcoes"},o.a.createElement("option",{value:"Trocar o roteador"}),o.a.createElement("option",{value:"Trocar antena da TV"}),o.a.createElement("option",{value:"Instalar ponto adicional"}),o.a.createElement("option",{value:"Cancelamento do servi\xe7o"}),o.a.createElement("option",{value:"Resolver problema da internet"}),o.a.createElement("option",{value:"Trocar toda a fia\xe7\xe3o"})),o.a.createElement("button",{type:"submit"},"Adicionar Servi\xe7o"),o.a.createElement("button",{type:"button",onClick:function(){r([{cliente:"Arthur","endere\xe7o":"Casa 01",em_casa_ate:"12:00",tipo_de_servico:"Trocar o roteador"},{cliente:"Andre","endere\xe7o":"Casa 02",em_casa_ate:"17:00",tipo_de_servico:"Trocar toda a fia\xe7\xe3o"},{cliente:"Carol","endere\xe7o":"Casa 03",em_casa_ate:"11:00",tipo_de_servico:"Trocar o roteador"},{cliente:"Sara","endere\xe7o":"Casa 04",em_casa_ate:"10:00",tipo_de_servico:"Trocar antena da TV"},{cliente:"Estela","endere\xe7o":"Casa 07",em_casa_ate:"11:00",tipo_de_servico:"Cancelamento do servi\xe7o"},{cliente:"Gabriela","endere\xe7o":"Casa 08",em_casa_ate:"16:00",tipo_de_servico:"Resolver problema da internet"}])}},"Adicionar dados do APP"),o.a.createElement("button",{type:"button",onClick:function(){var e=new T(t),n=e.melhor_agendamento();console.log(e),f(n)}},"Organizar Rota")))),o.a.createElement("h2",null,"Servi\xe7os:"),o.a.createElement(j,null,Object.entries(t).map((function(e){var n=Object(d.a)(e,2),a=n[0],i=n[1];return o.a.createElement("button",{type:"button",onClick:function(){return function(e){r(t.filter((function(n){return n!=t[e]})))}(a)}},o.a.createElement("li",{key:a},Object.entries(i).map((function(e){var n=Object(d.a)(e,2),t=n[0],a=n[1];return"".concat(t,": ").concat(a,"\n")}))))}))),o.a.createElement(O,null,o.a.createElement("h1",null,"Rota: "),o.a.createElement(k,null,Object.entries(u).map((function(e){var n=Object(d.a)(e,2),t=n[0],a=n[1];return o.a.createElement("li",{key:t},Object.entries(a).map((function(e){var n=Object(d.a)(e,2),t=n[0],a=n[1];return"".concat(t,": ").concat(a,"\n")})))})))))};function P(){return o.a.createElement(c.c,null,o.a.createElement(c.a,{path:"/",exact:!0,component:w}))}t(41),t(42);function R(){var e=Object(u.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n*{\n  margin:0;\n  padding:0;\n  outline:0;\n  box-sizing:border-box;\n}\n*:focus{\n  outline:0;\n}\n\nhtml ,body, #root{\n  height:100%;\n  width:100%\n}\nbody{\n  -webkit-font-smoothing:antialiased;\n\n}\nbody, -moz-user-input, button{\n  font :14px 'Roboto',sans-serif;\n}\na{\n  text-decoration:none;\n}\nul{list-style:none;}\nbutton{\n  cursor:pointer;\n}\n"]);return R=function(){return e},e}var A=Object(f.a)(R());var D=function(){return o.a.createElement(i.a,{basename:"/Greed_Dupla08B"},o.a.createElement(P,null),o.a.createElement(A,null))};Object(r.render)(o.a.createElement(D,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.642154af.chunk.js.map