(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/keep/keep"],{"15ab":function(t,e,n){"use strict";n.r(e);var i=n("3cfe"),s=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=s.a},"1c79":function(t,e,n){"use strict";var i,s=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"2f3d":function(t,e,n){"use strict";n.r(e);var i=n("1c79"),s=n("15ab");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("51c8");var u,c=n("f0c5"),a=Object(c["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],u);e["default"]=a.exports},"3cfe":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{goodsList:[{id:1,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:2,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1},{id:3,img:"/static/img/goods/p1.jpg",name:"商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题",spec:"规格:S码",price:127.5,number:1,selected:!1}],shopList:[{id:1,name:"冰鲜专卖店",img:"/static/img/shop/1.jpg"},{id:2,name:"果蔬天下",img:"/static/img/shop/2.jpg"},{id:3,name:"办公耗材用品店",img:"/static/img/shop/3.jpg"},{id:4,name:"天天看好书",img:"/static/img/shop/4.jpg"}],headerTop:0,typeClass:"goods",subState:"",theIndex:null,oldIndex:null,isStop:!1}},onPageScroll:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onLoad:function(){},methods:{switchType:function(e){var n=this;this.typeClass!=e&&(t.pageScrollTo({scrollTop:0,duration:0}),this.typeClass=e,this.subState=""==this.typeClass?"":"show"+e,setTimeout(function(){n.oldIndex=null,n.theIndex=null,n.subState="goods"==n.typeClass?"":n.subState},200))},touchStart:function(t,e){e.touches.length>1?this.isStop=!0:(this.oldIndex=this.theIndex,this.theIndex=null,this.initXY=[e.touches[0].pageX,e.touches[0].pageY])},touchMove:function(t,e){var n=this;if(e.touches.length>1)this.isStop=!0;else{var i=e.touches[0].pageX-this.initXY[0],s=e.touches[0].pageY-this.initXY[1];this.isStop||Math.abs(i)<5||(Math.abs(s)>Math.abs(i)?this.isStop=!0:i<0?(this.theIndex=t,this.isStop=!0):i>0&&null!=this.theIndex&&this.oldIndex==this.theIndex&&(this.oldIndex=t,this.theIndex=null,this.isStop=!0,setTimeout(function(){n.oldIndex=null},150)))}},touchEnd:function(t,e){this.isStop=!1},deleteCoupon:function(t,e){for(var n=e.length,i=0;i<n;i++)if(t==e[i].id){e.splice(i,1);break}this.oldIndex=null,this.theIndex=null},discard:function(){}}};e.default=n}).call(this,n("6e42")["default"])},"4bca":function(t,e,n){},"51c8":function(t,e,n){"use strict";var i=n("4bca"),s=n.n(i);s.a},f44a:function(t,e,n){"use strict";(function(t){n("e725"),n("921b");i(n("66fd"));var e=i(n("2f3d"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["f44a","common/runtime","common/vendor"]]]);