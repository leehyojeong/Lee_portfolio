(this.webpackJsonpportffolio=this.webpackJsonpportffolio||[]).push([[0],{23:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(1),c=n.n(o),r=n(12),i=n.n(r),s=(n(23),n(13)),u=n(14),l=n(17),f=n(16),h=n(15),d=n.n(h),j=(n(42),function(e){Object(l.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={username:null},a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/api/next").then((function(t){e.setState({username:t.data.username})}))}},{key:"render",value:function(){var e=this.state.username;return console.log(e),Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("h2",{className:"hello-data",children:e?"Hello ".concat(e,"!"):"Hello World!"})})}}]),n}(c.a.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))};i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(j,{})}),document.getElementById("root")),p()}},[[43,1,2]]]);
//# sourceMappingURL=main.12de44e2.chunk.js.map