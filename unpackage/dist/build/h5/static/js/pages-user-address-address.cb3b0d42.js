(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-address-address"],{"224f":function(e,t,i){"use strict";var n,a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"list"},e._l(e.addressList,(function(t,n){return i("v-uni-view",{key:n,staticClass:"row",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.select(t)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-view",{staticClass:"head"},[e._v(e._s(t.name.substr(0,1)))])],1),i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"name-tel"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(t.name))]),i("v-uni-view",{staticClass:"tel"},[e._v(e._s(t.tel))]),"true"==t.is_default?i("v-uni-view",{staticClass:"default"},[e._v("默认")]):e._e()],1),i("v-uni-view",{staticClass:"address"},[e._v(e._s(t.label)+" "+e._s(t.address))])],1)],1)})),1)],1),i("v-uni-view",{staticClass:"add"},[i("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.add.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"icon tianjia"}),e._v("新增地址")],1)],1)],1)},s=[];i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return n}))},2274:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.baseUrl=void 0;var n="http://127.0.0.1:12345";t.baseUrl=n},3572:function(e,t,i){"use strict";i.r(t);var n=i("8eda"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,(function(){return n[e]}))}(s);t["default"]=a.a},"65ed":function(e,t,i){"use strict";i("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.request=void 0;var n=i("2274"),a=i("d8b5"),s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",s=(!(arguments.length>3&&void 0!==arguments[3])||arguments[3],arguments.length>4&&void 0!==arguments[4]?arguments[4]:"");uni.showLoading({title:"加载中"});var r=(0,a.getStore)("token");return r&&(t.token=r),new Promise((function(a){uni.request({method:i,url:(s||n.baseUrl)+e,data:t,header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){a(e.data)},fail:function(e){uni.navigateTo({url:"../login/login"}),uni.showModal({content:"请求失败，请重试！",showCancel:!1})},complete:function(){uni.hideLoading()}})}))},r={get:function(e,t){return s(e,t,"GET")},post:function(e,t){return s(e,t,"POST")}};t.request=r},"7aff":function(e,t,i){var n=i("fb79");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("6cf274a8",n,!0,{sourceMap:!1,shadowMode:!1})},"8eda":function(e,t,i){"use strict";(function(e){i("a434"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("d8b5"),a=i("65ed"),s={data:function(){return{isSelect:!1,addressList:[],toOrder:!1}},onShow:function(){var e=this,t=(0,n.getStore)("user_id");0!=t?(uni.getStorage({key:"delAddress",success:function(t){var i=e.addressList.length;if(t.data.hasOwnProperty("id"))for(var n=0;n<i;n++)if(e.addressList[n].id==t.data.id){e.addressList.splice(n,1);break}uni.removeStorage({key:"delAddress"})}}),uni.getStorage({key:"saveAddress",success:function(t){var i=e.addressList.length;if(t.data.hasOwnProperty("id")){for(var n=0;n<i;n++)if(e.addressList[n].id==t.data.id){e.addressList.splice(n,1,t.data);break}}else{var a=e.addressList[i-1];a++,t.data.id=a,e.addressList.push(t.data)}uni.removeStorage({key:"saveAddress"})}})):uni.navigateTo({url:"../../login/login"})},onLoad:function(t){"select"==t.type&&(this.isSelect=!0),"order"==t.t&&(this.toOrder=!0);var i=(0,n.getStore)("user_id");if(0!=i){var s=this;a.request.get("/api/address/get/"+i).then((function(t){e("log",t," at pages\\user\\address\\address.vue:113"),s.addressList=t.data,e("log",s.addressList," at pages\\user\\address\\address.vue:117")}),(function(t){e("log","error"," at pages\\user\\address\\address.vue:120")}))}else uni.navigateTo({url:"../../login/login"})},methods:{edit:function(e){uni.setStorage({key:"address",data:e,success:function(){uni.navigateTo({url:"edit/edit?type=edit"})}})},add:function(){uni.navigateTo({url:"edit/edit?type=add&t=select"})},select:function(t){if(this.isSelect){var i=this;uni.setStorage({key:"selectAddress",data:t,success:function(){e("log",i.toOrder," at pages\\user\\address\\address.vue:152"),i.toOrder?uni.navigateTo({url:"../../order/confirmation"}):uni.navigateBack()}})}}}};t.default=s}).call(this,i("0de9")["log"])},"97a5":function(e,t,i){"use strict";i.r(t);var n=i("224f"),a=i("3572");for(var s in a)"default"!==s&&function(e){i.d(t,e,(function(){return a[e]}))}(s);i("a08c");var r,o=i("f0c5"),d=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"635fab32",null,!1,n["a"],r);t["default"]=d.exports},a08c:function(e,t,i){"use strict";var n=i("7aff"),a=i.n(n);a.a},d8b5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStore=t.setStore=t.default=void 0;var n="http://uniapp.dcloud.io",a=Date.now||function(){return(new Date).getTime()},s={baseUrl:n,nowTime:a};t.default=s;var r=function(e,t){e&&("string"!==typeof t&&(t=JSON.stringify(t)),uni.setStorageSync(e,t))};t.setStore=r;var o=function(e){if(e)return uni.getStorageSync(e)};t.getStore=o},fb79:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-view[data-v-635fab32]{display:-webkit-box;display:-webkit-flex;display:flex}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAMIAAsAAAAABvwAAAK8AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqBSIFAATYCJAMMCwgABCAFhG0HVBskBsiusClj9ljNiEIaBdizs389YOCARVDt99mzu+8dMMpzQEn5KEAZRez+yRDbSDIixkYo1tF/+vv5OxYJFk2VghXWbbzzPn8D/OMG3vvXGTU90ZFhOrNJROZwCRGjj/Iry36wAbfSxBsuNGggeG9sMbJKDd7xg8vpr4ACmWdZLnMtGxMwwUD3wCiywi3oDWMXuITzBNpNc4BP3j5/Q1thTQvE1SQiaOd8isKSrUJds7aIVyqt6XECAF6Gj49/sBcUSZVZc09duQng/CfPcXTVrIs+gj+fBWwTGZsghbhcGzurJhgZ1S6rt2fXipDmCv5PyNMltf2HRxJEzSrsBKtIk9wU32WS+E1w14UZ1HFiG+QkJg3ODWmyn5/20eOvTz5LnR6l8aWDT5Sn3wLtYlfNe7RIik/fN961C3Vftf6YZLr5ZMcjU/LExqD9u3LzvKE8KQtBGAp9ilm1XbAK2m83TdlozEvQ0Zbrh8HBMrKDB03MjRwHaJKP2f5jf+NfDvML4f+tHQX8+EJvkwL1z9Mqwfi/kd+zq+hCS5+LynN5piObGRlNaNedmrJc/R7jVUO3agmtOT7zJy32WkjWahGihbQJlQ5bklpT7ENotyG3ucOAjpoobVi3BxB6HSDp9h2yXne0kDSoDPtBrTdQaHc61D07LEezm1Im4wBLc2z6UoaO0bpR8SdHLifNCkPKL+s4CaLX5Skm77hknWNBdxLt9SzEmkqBWXAZ57lgSyVl37YaZqMzt7tWd6OtshTQdYJixLAAKplDTT5RCv3Bplu6/ycWcXJEW+pqrL+YGkuGR14unh7onazsVXcv13RNRPb0mBCqUaKAssDCcjsmUKt+VIr5zJbGiMjIGTfqV+sr21pfUXxALmvCmpMjRY5i9G5CZepynIyYZOr+sksyR2W0UHLiChIrRmXfA0E") format("woff2")}.icon[data-v-635fab32]{font-family:HMfont-home!important;font-size:%?60?%;font-style:normal;color:#000}.icon.bianji[data-v-635fab32]:before{content:"\\e61b"}.icon.tianjia[data-v-635fab32]:before{content:"\\e81a"}.add[data-v-635fab32]{position:fixed;bottom:0;width:100%;height:%?120?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.add .btn[data-v-635fab32]{box-shadow:%?0?% %?5?% %?10?% rgba(0,0,0,.4);width:70%;height:%?80?%;border-radius:%?80?%;background-color:#f06c7a;color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%}.add .btn .icon[data-v-635fab32]{height:%?80?%;color:#fff;font-size:%?30?%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list[data-v-635fab32]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .row[data-v-635fab32]{width:96%;padding:%?20?% 2%}.list .row .left[data-v-635fab32]{width:%?90?%;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.list .row .left .head[data-v-635fab32]{width:%?70?%;height:%?70?%;background:-webkit-linear-gradient(left,#ccc,#aaa);background:linear-gradient(90deg,#ccc,#aaa);color:#fff;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;border-radius:%?60?%;font-size:%?35?%}.list .row .center[data-v-635fab32]{width:100%;-webkit-flex-wrap:wrap;flex-wrap:wrap}.list .row .center .name-tel[data-v-635fab32]{width:100%;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline}.list .row .center .name-tel .name[data-v-635fab32]{font-size:%?34?%}.list .row .center .name-tel .tel[data-v-635fab32]{margin-left:%?30?%;font-size:%?24?%;color:#777}.list .row .center .name-tel .default[data-v-635fab32]{font-size:%?22?%;background-color:#f06c7a;color:#fff;padding:0 %?18?%;border-radius:%?24?%;margin-left:%?20?%}.list .row .center .address[data-v-635fab32]{width:100%;font-size:%?24?%;-webkit-box-align:baseline;-webkit-align-items:baseline;align-items:baseline;color:#777}.list .row .right[data-v-635fab32]{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-left:%?20?%}.list .row .right .icon[data-v-635fab32]{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:%?80?%;height:%?60?%;border-left:solid %?1?% #aaa;font-size:%?40?%;color:#777}',""]),e.exports=t}}]);