(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-confirmation"],{"1b67":function(e,t,i){e.exports=i.p+"static/img/addricon.207cc274.png"},"21f6":function(e,t,i){"use strict";var a=i("237e"),n=i.n(a);n.a},2274:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.baseUrl=void 0;var a="http://127.0.0.1:12345";t.baseUrl=a},"237e":function(e,t,i){var a=i("df84");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("03a3a3dc",a,!0,{sourceMap:!1,shadowMode:!1})},"65ed":function(e,t,i){"use strict";i("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.request=void 0;var a=i("2274"),n=i("d8b5"),o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"POST",o=(!(arguments.length>3&&void 0!==arguments[3])||arguments[3],arguments.length>4&&void 0!==arguments[4]?arguments[4]:"");uni.showLoading({title:"加载中"});var s=(0,n.getStore)("token");return s&&(t.token=s),new Promise((function(n){uni.request({method:i,url:(o||a.baseUrl)+e,data:t,header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){n(e.data)},fail:function(e){uni.navigateTo({url:"../login/login"}),uni.showModal({content:"请求失败，请重试！",showCancel:!1})},complete:function(){uni.hideLoading()}})}))},s={get:function(e,t){return o(e,t,"GET")},post:function(e,t){return o(e,t,"POST")}};t.request=s},"9a07":function(e,t,i){"use strict";i.r(t);var a=i("df43"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},bb42:function(e,t,i){"use strict";i.r(t);var a=i("e4c5"),n=i("9a07");for(var o in n)"default"!==o&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("21f6");var s,r=i("f0c5"),d=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"a29a85ea",null,!1,a["a"],s);t["default"]=d.exports},d8b5:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getStore=t.setStore=t.default=void 0;var a="http://uniapp.dcloud.io",n=Date.now||function(){return(new Date).getTime()},o={baseUrl:a,nowTime:n};t.default=o;var s=function(e,t){e&&("string"!==typeof t&&(t=JSON.stringify(t)),uni.setStorageSync(e,t))};t.setStore=s;var r=function(e){if(e)return uni.getStorageSync(e)};t.getStore=r},df43:function(e,t,i){"use strict";(function(e){i("a15b"),i("b680"),i("acd8"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i("d8b5"),n=i("65ed"),o=i("2274"),s={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:2,orderid:null,note:"",int:0,deduction:0,recinfo:{}}},onLoad:function(){for(var t=this,i=0;i<this.buylist.length;i++)this.buylist[i]["goods"]["cover"]=o.baseUrl+this.buylist[i]["goods"]["cover"];var s=(0,a.getStore)("user_id");n.request.get("/api/address/get/default/"+s).then((function(i){e("log",i," at pages\\order\\confirmation.vue:135"),t.recinfo=i.data}),(function(t){e("log","error"," at pages\\order\\confirmation.vue:140")}))},onShow:function(){var e=this;uni.getStorage({key:"buylist",success:function(t){e.buylist=t.data,e.goodsPrice=0;for(var i=e.buylist.length,a=0;a<i;a++)e.goodsPrice=parseFloat(e.goodsPrice)+parseFloat(e.buylist[a].goods.price);e.deduction=e.int/100,e.sumPrice=e.goodsPrice-e.deduction+e.freight,e.sumPrice=e.sumPrice.toFixed(2),e.goodsPrice=e.goodsPrice.toFixed(2),e.freight=e.freight.toFixed(2),e.deduction=e.deduction.toFixed(2)}}),uni.getStorage({key:"selectAddress",success:function(t){e.recinfo=t.data,uni.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){},methods:{clearOrder:function(){uni.removeStorage({key:"buylist",success:function(t){this.buylist=[],e("log","remove buylist success"," at pages\\order\\confirmation.vue:189")}})},toPay:function(){for(var t=this,i=[],o=[],s=this.buylist.length,r=0;r<s;r++)i.push(this.buylist[r]),o.push(this.buylist[r].goods.id);if(0!=i.length)if(null!=this.recinfo){uni.showLoading({title:"正在提交订单..."});for(var d="",l=0;l<i.length;l++)d=d+i[l]["goods"]["name"]+"  ";e("log",d," at pages\\order\\confirmation.vue:219"),setTimeout((function(){var i=(0,a.getStore)("user_id"),s=t;n.request.get("/api/order/add",{goods_id:o[0],freight:t.freight,total:t.sumPrice,user_id:i,name:t.recinfo.name,tel:t.recinfo.tel,address:t.recinfo.address,order_name:d,all_goods:o.join("-")}).then((function(t){e("log",t," at pages\\order\\confirmation.vue:237"),uni.hideLoading(),s.orderid=t.data.order_id,s.tz()}),(function(t){e("log","error"," at pages\\order\\confirmation.vue:243")})),uni.hideLoading()}),1e3)}else uni.showToast({title:"请正确填写收货地址",icon:"none"});else uni.showToast({title:"订单信息有误，请重新购买",icon:"none"})},tz:function(){uni.redirectTo({url:"../pay/payment/payment?amount="+this.sumPrice+"&orderid="+this.orderid})},selectAddress:function(){uni.navigateTo({url:"../user/address/address?type=select"})}}};t.default=s}).call(this,i("0de9")["log"])},df84:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.addr[data-v-a29a85ea]{width:86%;padding:%?20?% 3%;margin:%?30?% auto %?20?% auto;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%;display:-webkit-box;display:-webkit-flex;display:flex}.addr .icon[data-v-a29a85ea]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.addr .icon uni-image[data-v-a29a85ea]{width:%?60?%;height:%?60?%}.addr .tel-name[data-v-a29a85ea]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;font-size:%?32?%}.addr .tel-name .tel[data-v-a29a85ea]{margin-left:%?40?%}.addr .addres[data-v-a29a85ea]{width:100%;font-size:%?26?%;color:#999}.buy-list[data-v-a29a85ea]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.buy-list .row[data-v-a29a85ea]{margin:%?30?% 0}.buy-list .row .goods-info[data-v-a29a85ea]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.buy-list .row .goods-info .img[data-v-a29a85ea]{width:22vw;height:22vw;border-radius:%?10?%;overflow:hidden;-webkit-flex-shrink:0;flex-shrink:0;margin-right:%?10?%}.buy-list .row .goods-info .img uni-image[data-v-a29a85ea]{width:22vw;height:22vw}.buy-list .row .goods-info .info[data-v-a29a85ea]{width:100%;height:22vw;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;position:relative}.buy-list .row .goods-info .info .title[data-v-a29a85ea]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.buy-list .row .goods-info .info .spec[data-v-a29a85ea]{font-size:%?22?%;background-color:#f3f3f3;color:#a7a7a7;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?10?%;border-radius:%?20?%;margin-bottom:20vw}.buy-list .row .goods-info .info .price-number[data-v-a29a85ea]{position:absolute;width:100%;bottom:%?0?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end;font-size:%?28?%;height:%?40?%}.buy-list .row .goods-info .info .price-number .price[data-v-a29a85ea]{color:#f06c7a}.buy-list .row .goods-info .info .price-number .number[data-v-a29a85ea]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.order[data-v-a29a85ea]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.order .row[data-v-a29a85ea]{margin:%?20?% 0;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex}.order .row .left[data-v-a29a85ea]{font-size:%?28?%}.order .row .right[data-v-a29a85ea]{margin-left:%?40?%;font-size:%?26?%;color:#999}.order .row .right uni-input[data-v-a29a85ea]{font-size:%?26?%;color:#999}.blck[data-v-a29a85ea]{width:100%;height:%?100?%}.footer[data-v-a29a85ea]{width:92%;padding:0 4%;background-color:#fbfbfb;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;position:fixed;bottom:%?0?%;z-index:5}.footer .settlement[data-v-a29a85ea]{width:80%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.footer .settlement .sum[data-v-a29a85ea]{width:50%;font-size:%?28?%;margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.footer .settlement .sum .money[data-v-a29a85ea]{font-weight:600}.footer .settlement .btn[data-v-a29a85ea]{padding:0 %?30?%;height:%?60?%;background-color:#f06c7a;color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?30?%;border-radius:%?40?%}.detail[data-v-a29a85ea]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.detail .row[data-v-a29a85ea]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.detail .row .nominal[data-v-a29a85ea]{font-size:%?28?%}.detail .row .content[data-v-a29a85ea]{font-size:%?26?%;color:#f06c7a}',""]),e.exports=t},e4c5:function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticClass:"addr",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectAddress.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"icon"},[a("v-uni-image",{attrs:{src:i("1b67"),mode:""}})],1),a("v-uni-view",{staticClass:"right"},[a("v-uni-view",{staticClass:"tel-name"},[a("v-uni-view",{staticClass:"name"},[e._v(e._s(e.recinfo.name))]),a("v-uni-view",{staticClass:"tel"},[e._v(e._s(e.recinfo.tel))])],1),a("v-uni-view",{staticClass:"addres"},[e._v(e._s(e.recinfo.label)+"\n\t\t\t\t"+e._s(e.recinfo.address))])],1)],1),a("v-uni-view",{staticClass:"buy-list"},e._l(e.buylist,(function(t,i){return a("v-uni-view",{key:i,staticClass:"row"},[a("v-uni-view",{staticClass:"goods-info"},[a("v-uni-view",{staticClass:"img"},[a("v-uni-image",{attrs:{src:t.goods.cover}})],1),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"title"},[e._v(e._s(t.goods.name))]),a("v-uni-view",{staticClass:"price-number"},[a("v-uni-view",{staticClass:"price"},[e._v("￥"+e._s(t.goods.price))])],1)],1)],1)],1)})),1),a("v-uni-view",{staticClass:"order"}),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"nominal"},[e._v("商品金额")]),a("v-uni-view",{staticClass:"content"},[e._v("￥"+e._s(e.goodsPrice))])],1),a("v-uni-view",{staticClass:"row"},[a("v-uni-view",{staticClass:"nominal"},[e._v("运费")]),a("v-uni-view",{staticClass:"content"},[e._v("￥+"+e._s(e.freight))])],1)],1),a("v-uni-view",{staticClass:"blck"}),a("v-uni-view",{staticClass:"footer"},[a("v-uni-view",{staticClass:"settlement"},[a("v-uni-view",{staticClass:"sum"},[e._v("合计:"),a("v-uni-view",{staticClass:"money"},[e._v("￥"+e._s(e.sumPrice))])],1),a("v-uni-view",{staticClass:"btn",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toPay.apply(void 0,arguments)}}},[e._v("提交订单")])],1)],1)],1)},o=[];i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}))}}]);