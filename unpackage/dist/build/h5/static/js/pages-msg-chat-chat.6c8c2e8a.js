(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-msg-chat-chat"],{"06a3":function(i,t,e){"use strict";var a=e("b978"),n=e.n(a);n.a},"2d04":function(i,t,e){var a=e("24fb");t=a(!1),t.push([i.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-5dda2e3e]{background-color:#e5e5e5}@font-face{font-family:HMfont-home;src:url("data:application/x-font-woff2;charset=utf-8;base64,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") format("woff2")}.icon[data-v-5dda2e3e]{font-family:HMfont-home!important;font-size:%?56?%;font-style:normal;color:#333}.icon.biaoqing[data-v-5dda2e3e]:before{content:"\\e797"}.icon.jianpan[data-v-5dda2e3e]:before{content:"\\e7b2"}.icon.yuyin[data-v-5dda2e3e]:before{content:"\\e805"}.icon.tupian[data-v-5dda2e3e]:before{content:"\\e639"}.icon.chehui[data-v-5dda2e3e]:before{content:"\\e904"}.icon.luyin[data-v-5dda2e3e]:before{content:"\\e905"}.icon.luyin2[data-v-5dda2e3e]:before{content:"\\e677"}.icon.other-voice[data-v-5dda2e3e]:before{content:"\\e667"}.icon.my-voice[data-v-5dda2e3e]:before{content:"\\e906"}.hidden[data-v-5dda2e3e]{display:none!important}@-webkit-keyframes showEM-data-v-5dda2e3e{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-42vw);transform:translateY(-42vw)}}@keyframes showEM-data-v-5dda2e3e{0%{-webkit-transform:translateY(0);transform:translateY(0)}100%{-webkit-transform:translateY(-42vw);transform:translateY(-42vw)}}@-webkit-keyframes hideEM-data-v-5dda2e3e{0%{-webkit-transform:translateY(-42vw);transform:translateY(-42vw)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes hideEM-data-v-5dda2e3e{0%{-webkit-transform:translateY(-42vw);transform:translateY(-42vw)}100%{-webkit-transform:translateY(0);transform:translateY(0)}}.emoji-box[data-v-5dda2e3e]{width:96%;height:42vw;padding:%?20?% 2%;background-color:#f3f3f3;border-top:solid %?1?% #ddd;position:fixed;z-index:20;top:100%}.emoji-box.hideEmoji[data-v-5dda2e3e]{-webkit-animation:hideEM-data-v-5dda2e3e .15s linear both;animation:hideEM-data-v-5dda2e3e .15s linear both}.emoji-box.showEmoji[data-v-5dda2e3e]{-webkit-animation:showEM-data-v-5dda2e3e .15s linear both;animation:showEM-data-v-5dda2e3e .15s linear both}.emoji-box .swiper uni-swiper-item[data-v-5dda2e3e]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.emoji-box .swiper uni-swiper-item uni-view[data-v-5dda2e3e]{width:12vw;height:12vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.emoji-box .swiper uni-swiper-item uni-view uni-image[data-v-5dda2e3e]{width:60%}.input-box[data-v-5dda2e3e]{width:98%;min-height:%?100?%;padding:0 1%;background-color:#f2f2f2;display:-webkit-box;display:-webkit-flex;display:flex;position:fixed;z-index:20;bottom:0}.input-box.hideEmoji[data-v-5dda2e3e]{-webkit-animation:hideEM-data-v-5dda2e3e .15s linear both;animation:hideEM-data-v-5dda2e3e .15s linear both}.input-box.showEmoji[data-v-5dda2e3e]{-webkit-animation:showEM-data-v-5dda2e3e .15s linear both;animation:showEM-data-v-5dda2e3e .15s linear both}.input-box .voice[data-v-5dda2e3e], .input-box .more[data-v-5dda2e3e]{-webkit-flex-shrink:0;flex-shrink:0;width:%?90?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .send[data-v-5dda2e3e]{margin-left:%?20?%;-webkit-flex-shrink:0;flex-shrink:0;width:%?100?%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .send .btn[data-v-5dda2e3e]{width:%?90?%;height:%?56?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background:-webkit-linear-gradient(left,#f09b37,#eb632c);background:linear-gradient(90deg,#f09b37,#eb632c);color:#fff;border-radius:%?6?%;font-size:%?24?%}.input-box .textbox[data-v-5dda2e3e]{width:100%;min-height:%?70?%;margin-top:%?15?%}.input-box .textbox .voice-mode[data-v-5dda2e3e]{width:calc(100% - %?2?%);height:%?68?%;border-radius:%?70?%;border:solid %?1?% #cdcdcd;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%;background-color:#fff;color:#555}.input-box .textbox .voice-mode.recording[data-v-5dda2e3e]{background-color:#e5e5e5}.input-box .textbox .text-mode[data-v-5dda2e3e]{width:100%;min-height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;border-radius:%?40?%}.input-box .textbox .text-mode .box[data-v-5dda2e3e]{width:100%;padding-left:%?30?%;min-height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.input-box .textbox .text-mode .box uni-textarea[data-v-5dda2e3e]{width:100%}.input-box .textbox .text-mode .em[data-v-5dda2e3e]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?70?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.record[data-v-5dda2e3e]{width:40vw;height:40vw;position:fixed;top:55%;left:30%;background-color:rgba(0,0,0,.6);border-radius:%?20?%}.record .ing[data-v-5dda2e3e]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}@-webkit-keyframes volatility-data-v-5dda2e3e{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}100%{background-position:0 135%}}@keyframes volatility-data-v-5dda2e3e{0%{background-position:0 130%}20%{background-position:0 150%}30%{background-position:0 155%}40%{background-position:0 150%}50%{background-position:0 145%}70%{background-position:0 150%}80%{background-position:0 155%}90%{background-position:0 140%}100%{background-position:0 135%}}.record .ing .icon[data-v-5dda2e3e]{background-image:-webkit-linear-gradient(top,#f09b37,#fff 50%);background-image:linear-gradient(180deg,#f09b37,#fff 50%);background-size:100% 200%;-webkit-animation:volatility-data-v-5dda2e3e 1.5s ease-in-out -1.5s infinite alternate;animation:volatility-data-v-5dda2e3e 1.5s ease-in-out -1.5s infinite alternate;-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-size:%?150?%;color:#f09b37}.record .cancel[data-v-5dda2e3e]{width:100%;height:30vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.record .cancel .icon[data-v-5dda2e3e]{color:#fff;font-size:%?150?%}.record .tis[data-v-5dda2e3e]{width:100%;height:10vw;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?28?%;color:#fff}.record .tis.change[data-v-5dda2e3e]{color:#f09b37}.content[data-v-5dda2e3e]{width:100%}.content .msg-list[data-v-5dda2e3e]{width:96%;padding:0 2%;position:absolute;top:0;bottom:%?100?%}.content .msg-list .row[data-v-5dda2e3e]{padding:%?20?% 0}.content .msg-list .row[data-v-5dda2e3e]:first-child{margin-top:%?20?%}.content .msg-list .row .my .left[data-v-5dda2e3e], .content .msg-list .row .other .right[data-v-5dda2e3e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .my .left .bubble[data-v-5dda2e3e], .content .msg-list .row .other .right .bubble[data-v-5dda2e3e]{max-width:70%;min-height:%?50?%;border-radius:%?10?%;padding:%?15?% %?20?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?32?%;word-break:break-word}.content .msg-list .row .my .left .bubble.img[data-v-5dda2e3e], .content .msg-list .row .other .right .bubble.img[data-v-5dda2e3e]{background-color:initial;padding:0;overflow:hidden}.content .msg-list .row .my .left .bubble.img uni-image[data-v-5dda2e3e], .content .msg-list .row .other .right .bubble.img uni-image[data-v-5dda2e3e]{max-width:%?350?%;max-height:%?350?%}.content .msg-list .row .my .left .bubble.voice .icon[data-v-5dda2e3e], .content .msg-list .row .other .right .bubble.voice .icon[data-v-5dda2e3e]{font-size:%?40?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.content .msg-list .row .my .left .bubble.voice .icon[data-v-5dda2e3e]:after, .content .msg-list .row .other .right .bubble.voice .icon[data-v-5dda2e3e]:after{content:" ";width:%?53?%;height:%?53?%;border-radius:100%;position:absolute;box-sizing:border-box}.content .msg-list .row .my .left .bubble.voice .length[data-v-5dda2e3e], .content .msg-list .row .other .right .bubble.voice .length[data-v-5dda2e3e]{font-size:%?28?%}.content .msg-list .row .my .right[data-v-5dda2e3e], .content .msg-list .row .other .left[data-v-5dda2e3e]{-webkit-flex-shrink:0;flex-shrink:0;width:%?80?%;height:%?80?%}.content .msg-list .row .my .right uni-image[data-v-5dda2e3e], .content .msg-list .row .other .left uni-image[data-v-5dda2e3e]{width:%?80?%;height:%?80?%;border-radius:%?10?%}.content .msg-list .row .my[data-v-5dda2e3e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .msg-list .row .my .left[data-v-5dda2e3e]{min-height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.content .msg-list .row .my .left .bubble[data-v-5dda2e3e]{background-color:#f06c7a;color:#fff}.content .msg-list .row .my .left .bubble.voice .icon[data-v-5dda2e3e]{color:#fff}.content .msg-list .row .my .left .bubble.voice .length[data-v-5dda2e3e]{margin-right:%?20?%}@-webkit-keyframes my-play-data-v-5dda2e3e{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes my-play-data-v-5dda2e3e{0%{-webkit-transform:translateX(80%);transform:translateX(80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .my .left .bubble.play .icon[data-v-5dda2e3e]:after{border-left:solid %?10?% rgba(240,108,122,.5);-webkit-animation:my-play-data-v-5dda2e3e 1s linear infinite;animation:my-play-data-v-5dda2e3e 1s linear infinite}.content .msg-list .row .my .right[data-v-5dda2e3e]{margin-left:%?15?%}.content .msg-list .row .other[data-v-5dda2e3e]{width:100%;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .other .left[data-v-5dda2e3e]{margin-right:%?15?%}.content .msg-list .row .other .right[data-v-5dda2e3e]{-webkit-flex-wrap:wrap;flex-wrap:wrap}.content .msg-list .row .other .right .username[data-v-5dda2e3e]{width:100%;height:%?45?%;font-size:%?24?%;color:#999;display:-webkit-box;display:-webkit-flex;display:flex}.content .msg-list .row .other .right .username .name[data-v-5dda2e3e]{margin-right:%?50?%}.content .msg-list .row .other .right .bubble[data-v-5dda2e3e]{background-color:#fff;color:#333}.content .msg-list .row .other .right .bubble.voice .icon[data-v-5dda2e3e]{color:#333}.content .msg-list .row .other .right .bubble.voice .length[data-v-5dda2e3e]{margin-left:%?20?%}@-webkit-keyframes other-play-data-v-5dda2e3e{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes other-play-data-v-5dda2e3e{0%{-webkit-transform:translateX(-80%);transform:translateX(-80%)}100%{-webkit-transform:translateX(0);transform:translateX(0)}}.content .msg-list .row .other .right .bubble.play .icon[data-v-5dda2e3e]:after{border-right:solid %?10?% hsla(0,0%,100%,.8);-webkit-animation:other-play-data-v-5dda2e3e 1s linear infinite;animation:other-play-data-v-5dda2e3e 1s linear infinite}body.?%PAGE?%[data-v-5dda2e3e]{background-color:#e5e5e5}',""]),i.exports=t},"60d0":function(i,t,e){"use strict";e.r(t);var a=e("8bfa"),n=e.n(a);for(var s in a)"default"!==s&&function(i){e.d(t,i,(function(){return a[i]}))}(s);t["default"]=n.a},"8bfa":function(i,t,e){"use strict";(function(i){e("e25e"),e("ac1f"),e("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{textMsg:"",scrollAnimation:!1,scrollTop:0,scrollToView:"",msgList:[],msgImgList:[],myuid:0,isVoice:!1,voiceTis:"按住 说话",recordTis:"手指上滑 取消发送",recording:!1,willStop:!1,initPoint:{identifier:0,Y:0},recordTimer:null,recordLength:0,AUDIO:uni.createInnerAudioContext(),playMsgid:null,VoiceTimer:null,showEmji:"",emojiList:[[{url:"100.gif",alt:"[微笑]"},{url:"101.gif",alt:"[伤心]"},{url:"102.gif",alt:"[美女]"},{url:"103.gif",alt:"[发呆]"},{url:"104.gif",alt:"[墨镜]"},{url:"105.gif",alt:"[哭]"},{url:"106.gif",alt:"[羞]"},{url:"107.gif",alt:"[哑]"},{url:"108.gif",alt:"[睡]"},{url:"109.gif",alt:"[哭]"},{url:"110.gif",alt:"[囧]"},{url:"111.gif",alt:"[怒]"},{url:"112.gif",alt:"[调皮]"},{url:"113.gif",alt:"[笑]"},{url:"114.gif",alt:"[惊讶]"},{url:"115.gif",alt:"[难过]"},{url:"116.gif",alt:"[酷]"},{url:"117.gif",alt:"[汗]"},{url:"118.gif",alt:"[抓狂]"},{url:"119.gif",alt:"[吐]"},{url:"120.gif",alt:"[笑]"},{url:"121.gif",alt:"[快乐]"},{url:"122.gif",alt:"[奇]"},{url:"123.gif",alt:"[傲]"}],[{url:"124.gif",alt:"[饿]"},{url:"125.gif",alt:"[累]"},{url:"126.gif",alt:"[吓]"},{url:"127.gif",alt:"[汗]"},{url:"128.gif",alt:"[高兴]"},{url:"129.gif",alt:"[闲]"},{url:"130.gif",alt:"[努力]"},{url:"131.gif",alt:"[骂]"},{url:"132.gif",alt:"[疑问]"},{url:"133.gif",alt:"[秘密]"},{url:"134.gif",alt:"[乱]"},{url:"135.gif",alt:"[疯]"},{url:"136.gif",alt:"[哀]"},{url:"137.gif",alt:"[鬼]"},{url:"138.gif",alt:"[打击]"},{url:"139.gif",alt:"[bye]"},{url:"140.gif",alt:"[汗]"},{url:"141.gif",alt:"[抠]"},{url:"142.gif",alt:"[鼓掌]"},{url:"143.gif",alt:"[糟糕]"},{url:"144.gif",alt:"[恶搞]"},{url:"145.gif",alt:"[什么]"},{url:"146.gif",alt:"[什么]"},{url:"147.gif",alt:"[累]"}],[{url:"148.gif",alt:"[看]"},{url:"149.gif",alt:"[难过]"},{url:"150.gif",alt:"[难过]"},{url:"151.gif",alt:"[坏]"},{url:"152.gif",alt:"[亲]"},{url:"153.gif",alt:"[吓]"},{url:"154.gif",alt:"[可怜]"},{url:"155.gif",alt:"[刀]"},{url:"156.gif",alt:"[水果]"},{url:"157.gif",alt:"[酒]"},{url:"158.gif",alt:"[篮球]"},{url:"159.gif",alt:"[乒乓]"},{url:"160.gif",alt:"[咖啡]"},{url:"161.gif",alt:"[美食]"},{url:"162.gif",alt:"[动物]"},{url:"163.gif",alt:"[鲜花]"},{url:"164.gif",alt:"[枯]"},{url:"165.gif",alt:"[唇]"},{url:"166.gif",alt:"[爱]"},{url:"167.gif",alt:"[分手]"},{url:"168.gif",alt:"[生日]"},{url:"169.gif",alt:"[电]"},{url:"170.gif",alt:"[炸弹]"},{url:"171.gif",alt:"[刀子]"}],[{url:"172.gif",alt:"[足球]"},{url:"173.gif",alt:"[瓢虫]"},{url:"174.gif",alt:"[翔]"},{url:"175.gif",alt:"[月亮]"},{url:"176.gif",alt:"[太阳]"},{url:"177.gif",alt:"[礼物]"},{url:"178.gif",alt:"[抱抱]"},{url:"179.gif",alt:"[拇指]"},{url:"180.gif",alt:"[贬低]"},{url:"181.gif",alt:"[握手]"},{url:"182.gif",alt:"[剪刀手]"},{url:"183.gif",alt:"[抱拳]"},{url:"184.gif",alt:"[勾引]"},{url:"185.gif",alt:"[拳头]"},{url:"186.gif",alt:"[小拇指]"},{url:"187.gif",alt:"[拇指八]"},{url:"188.gif",alt:"[食指]"},{url:"189.gif",alt:"[ok]"},{url:"190.gif",alt:"[情侣]"},{url:"191.gif",alt:"[爱心]"},{url:"192.gif",alt:"[蹦哒]"},{url:"193.gif",alt:"[颤抖]"},{url:"194.gif",alt:"[怄气]"},{url:"195.gif",alt:"[跳舞]"}],[{url:"196.gif",alt:"[发呆]"},{url:"197.gif",alt:"[背着]"},{url:"198.gif",alt:"[伸手]"},{url:"199.gif",alt:"[耍帅]"},{url:"200.png",alt:"[微笑]"},{url:"201.png",alt:"[生病]"},{url:"202.png",alt:"[哭泣]"},{url:"203.png",alt:"[吐舌]"},{url:"204.png",alt:"[迷糊]"},{url:"205.png",alt:"[瞪眼]"},{url:"206.png",alt:"[恐怖]"},{url:"207.png",alt:"[忧愁]"},{url:"208.png",alt:"[眨眉]"},{url:"209.png",alt:"[闭眼]"},{url:"210.png",alt:"[鄙视]"},{url:"211.png",alt:"[阴暗]"},{url:"212.png",alt:"[小鬼]"},{url:"213.png",alt:"[礼物]"},{url:"214.png",alt:"[拜佛]"},{url:"215.png",alt:"[力量]"},{url:"216.png",alt:"[金钱]"},{url:"217.png",alt:"[蛋糕]"},{url:"218.png",alt:"[彩带]"},{url:"219.png",alt:"[礼物]"}]],onlineEmoji:{"100.gif":"AbNQgA.gif","101.gif":"AbN3ut.gif","102.gif":"AbNM3d.gif","103.gif":"AbN8DP.gif","104.gif":"AbNljI.gif","105.gif":"AbNtUS.gif","106.gif":"AbNGHf.gif","107.gif":"AbNYE8.gif","108.gif":"AbNaCQ.gif","109.gif":"AbNN4g.gif","110.gif":"AbN0vn.gif","111.gif":"AbNd3j.gif","112.gif":"AbNsbV.gif","113.gif":"AbNwgs.gif","114.gif":"AbNrD0.gif","115.gif":"AbNDuq.gif","116.gif":"AbNg5F.gif","117.gif":"AbN6ET.gif","118.gif":"AbNcUU.gif","119.gif":"AbNRC4.gif","120.gif":"AbNhvR.gif","121.gif":"AbNf29.gif","122.gif":"AbNW8J.gif","123.gif":"AbNob6.gif","124.gif":"AbN5K1.gif","125.gif":"AbNHUO.gif","126.gif":"AbNIDx.gif","127.gif":"AbN7VK.gif","128.gif":"AbNb5D.gif","129.gif":"AbNX2d.gif","130.gif":"AbNLPe.gif","131.gif":"AbNjxA.gif","132.gif":"AbNO8H.gif","133.gif":"AbNxKI.gif","134.gif":"AbNzrt.gif","135.gif":"AbU9Vf.gif","136.gif":"AbUSqP.gif","137.gif":"AbUCa8.gif","138.gif":"AbUkGQ.gif","139.gif":"AbUFPg.gif","140.gif":"AbUPIS.gif","141.gif":"AbUZMn.gif","142.gif":"AbUExs.gif","143.gif":"AbUA2j.gif","144.gif":"AbUMIU.gif","145.gif":"AbUerq.gif","146.gif":"AbUKaT.gif","147.gif":"AbUmq0.gif","148.gif":"AbUuZV.gif","149.gif":"AbUliF.gif","150.gif":"AbU1G4.gif","151.gif":"AbU8z9.gif","152.gif":"AbU3RJ.gif","153.gif":"AbUYs1.gif","154.gif":"AbUJMR.gif","155.gif":"AbUadK.gif","156.gif":"AbUtqx.gif","157.gif":"AbUUZ6.gif","158.gif":"AbUBJe.gif","159.gif":"AbUdIO.gif","160.gif":"AbU0iD.gif","161.gif":"AbUrzd.gif","162.gif":"AbUDRH.gif","163.gif":"AbUyQA.gif","164.gif":"AbUWo8.gif","165.gif":"AbU6sI.gif","166.gif":"AbU2eP.gif","167.gif":"AbUcLt.gif","168.gif":"AbU4Jg.gif","169.gif":"AbURdf.gif","170.gif":"AbUhFS.gif","171.gif":"AbU5WQ.gif","172.gif":"AbULwV.gif","173.gif":"AbUIzj.gif","174.gif":"AbUTQs.gif","175.gif":"AbU7yn.gif","176.gif":"AbUqe0.gif","177.gif":"AbUHLq.gif","178.gif":"AbUOoT.gif","179.gif":"AbUvYF.gif","180.gif":"AbUjFU.gif","181.gif":"AbaSSJ.gif","182.gif":"AbUxW4.gif","183.gif":"AbaCO1.gif","184.gif":"Abapl9.gif","185.gif":"Aba9yR.gif","186.gif":"AbaFw6.gif","187.gif":"Abaiex.gif","188.gif":"AbakTK.gif","189.gif":"AbaZfe.png","190.gif":"AbaEFO.gif","191.gif":"AbaVYD.gif","192.gif":"AbamSH.gif","193.gif":"AbaKOI.gif","194.gif":"Abanld.gif","195.gif":"Abau6A.gif","196.gif":"AbaQmt.gif","197.gif":"Abal0P.gif","198.gif":"AbatpQ.gif","199.gif":"Aba1Tf.gif","200.png":"Aba8k8.png","201.png":"AbaGtS.png","202.png":"AbaJfg.png","203.png":"AbaNlj.png","204.png":"Abawmq.png","205.png":"AbaU6s.png","206.png":"AbaaXn.png","207.png":"Aba000.png","208.png":"AbarkT.png","209.png":"AbastU.png","210.png":"AbaB7V.png","211.png":"Abafn1.png","212.png":"Abacp4.png","213.png":"AbayhF.png","214.png":"Abag1J.png","215.png":"Aba2c9.png","216.png":"AbaRXR.png","217.png":"Aba476.png","218.png":"Abah0x.png","219.png":"Abdg58.png"}}},onLoad:function(i){var t=this;uni.setNavigationBarTitle({title:i.name}),this.getMsgList(),this.AUDIO.onEnded((function(i){t.playMsgid=null})),this.RECORDER.onStart((function(i){t.recordBegin(i)})),this.RECORDER.onStop((function(i){t.recordEnd(i)}))},methods:{getMsgList:function(){for(var t=[{id:0,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"12:56",type:"text",msg:{content:"为什么温度会相差那么大？"}},{id:1,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:57",type:"text",msg:{content:"这个是有偏差的，两个温度相差十几二十度是很正常的，如果相差五十度，那即是质量问题了。"}},{id:2,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"voice",msg:{url:"/static/voice/1.mp3",length:"00:06"}},{id:3,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"voice",msg:{url:"/static/voice/2.mp3",length:"00:06"}},{id:4,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:"13:05",type:"img",msg:{url:"/static/img/goods/p10.jpg",w:200,h:200}},{id:5,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:"12:59",type:"img",msg:{url:"/static/img/q.jpg",w:1920,h:1080}}],e=0;e<t.length;e++)"img"==t[e].type&&(t[e]=this.setPicSize(t[e]),i("log","list[i]: "+JSON.stringify(t[e])," at pages\\msg\\chat\\chat.vue:179"),this.msgImgList.push(t[e].msg.url));this.msgList=t,this.$nextTick((function(){this.scrollTop=9999,this.scrollAnimation=!0}))},setPicSize:function(i){var t=uni.upx2px(350),e=uni.upx2px(350);if(i.msg.w>t||i.msg.h>e){var a=i.msg.w/i.msg.h;i.msg.w>i.msg.h?(i.msg.w=t,i.msg.h=i.msg.w/a):(i.msg.h=e,i.msg.w=i.msg.h*a)}return i},screenMsg:function(i){switch(i.uid!=this.myuid&&uni.vibrateLong(),i.type){case"text":this.addTextMsg(i);break;case"voice":this.addVoiceMsg(i);break;case"img":this.addImgMsg(i);break}this.$nextTick((function(){this.scrollToView="msg"+i.id}))},chooseEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":"showEmoji"},hideEmoji:function(){this.showEmji="showEmoji"==this.showEmji?"hideEmoji":""},addEmoji:function(i){this.textMsg+=i.alt},sendText:function(){if(this.hideEmoji(),this.textMsg){var i=this.replaceEmoji(this.textMsg),t={content:i};this.sendMsg(t,"text"),this.textMsg=""}},replaceEmoji:function(t){var e=this,a=t.replace(/\[([^(\]|\[)]*)\]/g,(function(t,a){i("log","item: "+t," at pages\\msg\\chat\\chat.vue:253");for(var n=0;n<e.emojiList.length;n++)for(var s=e.emojiList[n],o=0;o<s.length;o++){var l=s[o];if(l.alt==t){var r="https://s2.ax1x.com/2019/04/12/",g='<img src="'+r+e.onlineEmoji[l.url]+'">';return i("log","imgstr: "+g," at pages\\msg\\chat\\chat.vue:262"),g}}}));return'<div style="display: flex;align-items: center;">'+a+"</div>"},chooseImage:function(){var t=this;this.hideEmoji(),uni.chooseImage({sizeType:["original","compressed"],success:function(e){for(var a=function(a){uni.getImageInfo({src:e.tempFilePaths[a],success:function(n){i("log",n.width," at pages\\msg\\chat\\chat.vue:280"),i("log",n.height," at pages\\msg\\chat\\chat.vue:281");var s={url:e.tempFilePaths[a],w:n.width,h:n.height};t.sendMsg(s,"img")}})},n=0;n<e.tempFilePaths.length;n++)a(n)}})},sendMsg:function(i,t){var e=this,a=new Date,n=this.msgList[this.msgList.length-1].id;n++;var s={id:n,uid:0,username:"大黑哥",face:"/static/img/face.jpg",time:a.getHours()+":"+a.getMinutes(),type:t,msg:i};this.screenMsg(s),setTimeout((function(){n=e.msgList[e.msgList.length-1].id,n++,s={id:n,uid:1,username:"售后客服008",face:"/static/img/im/face/face_2.jpg",time:a.getHours()+":"+a.getMinutes(),type:t,msg:i},e.screenMsg(s)}),3e3)},addTextMsg:function(i){this.msgList.push(i)},addVoiceMsg:function(i){this.msgList.push(i)},addImgMsg:function(i){i=this.setPicSize(i),this.msgImgList.push(i.msg.url),this.msgList.push(i)},showPic:function(i){uni.previewImage({indicator:"none",current:i.msg.url,urls:this.msgImgList})},playVoice:function(t){this.playMsgid=t.id,this.AUDIO.src=t.msg.url,i("log","msg.msg.url: "+t.msg.url," at pages\\msg\\chat\\chat.vue:333"),this.AUDIO.play()},voiceBegin:function(i){i.touches.length>1||(this.initPoint.Y=i.touches[0].clientY,this.initPoint.identifier=i.touches[0].identifier,this.RECORDER.start({format:"mp3"}))},recordBegin:function(i){var t=this;this.recording=!0,this.voiceTis="松开 结束",this.recordLength=0,this.recordTimer=setInterval((function(){t.recordLength++}),1e3)},voiceCancel:function(){this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.willStop=!0,this.RECORDER.stop()},voiceIng:function(i){if(this.recording){var t=i.touches[0];this.initPoint.Y-t.clientY>=uni.upx2px(100)?(this.willStop=!0,this.recordTis="松开手指 取消发送"):(this.willStop=!1,this.recordTis="手指上滑 取消发送")}},voiceEnd:function(i){this.recording&&(this.recording=!1,this.voiceTis="按住 说话",this.recordTis="手指上滑 取消发送",this.RECORDER.stop())},recordEnd:function(t){if(clearInterval(this.recordTimer),this.willStop)i("log","取消发送录音"," at pages\\msg\\chat\\chat.vue:403");else{i("log","e: "+JSON.stringify(t)," at pages\\msg\\chat\\chat.vue:391");var e={length:0,url:t.tempFilePath},a=parseInt(this.recordLength/60),n=this.recordLength%60;a=a<10?"0"+a:a,n=n<10?"0"+n:n,e.length=a+":"+n,this.sendMsg(e,"voice")}this.willStop=!1},switchVoice:function(){this.hideEmoji(),this.isVoice=!this.isVoice},discard:function(){}}};t.default=a}).call(this,e("0de9")["log"])},a0f1:function(i,t,e){"use strict";e.r(t);var a=e("e49f"),n=e("60d0");for(var s in n)"default"!==s&&function(i){e.d(t,i,(function(){return n[i]}))}(s);e("06a3");var o,l=e("f0c5"),r=Object(l["a"])(n["default"],a["b"],a["c"],!1,null,"5dda2e3e",null,!1,a["a"],o);t["default"]=r.exports},b978:function(i,t,e){var a=e("2d04");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("5979d9ce",a,!0,{sourceMap:!1,shadowMode:!1})},e49f:function(i,t,e){"use strict";var a,n=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[e("v-uni-view",{staticClass:"content",on:{touchstart:function(t){arguments[0]=t=i.$handleEvent(t),i.hideEmoji.apply(void 0,arguments)}}},[e("v-uni-scroll-view",{staticClass:"msg-list",attrs:{"scroll-y":"true","scroll-with-animation":i.scrollAnimation,"scroll-top":i.scrollTop,"scroll-into-view":i.scrollToView}},i._l(i.msgList,(function(t,a){return e("v-uni-view",{key:a,staticClass:"row",attrs:{id:"msg"+t.id}},[t.uid==i.myuid?e("v-uni-view",{staticClass:"my"},[e("v-uni-view",{staticClass:"left"},["text"==t.type?e("v-uni-view",{staticClass:"bubble"},[e("v-uni-rich-text",{attrs:{nodes:t.msg.content}})],1):i._e(),"voice"==t.type?e("v-uni-view",{staticClass:"bubble voice",class:i.playMsgid==t.id?"play":"",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.playVoice(t)}}},[e("v-uni-view",{staticClass:"length"},[i._v(i._s(t.msg.length))]),e("v-uni-view",{staticClass:"icon my-voice"})],1):i._e(),"img"==t.type?e("v-uni-view",{staticClass:"bubble img",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.showPic(t)}}},[e("v-uni-image",{style:{width:t.msg.w+"px",height:t.msg.h+"px"},attrs:{src:t.msg.url}})],1):i._e()],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-image",{attrs:{src:t.face}})],1)],1):i._e(),t.uid!=i.myuid?e("v-uni-view",{staticClass:"other"},[e("v-uni-view",{staticClass:"left"},[e("v-uni-image",{attrs:{src:t.face}})],1),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"username"},[e("v-uni-view",{staticClass:"name"},[i._v(i._s(t.username))]),e("v-uni-view",{staticClass:"time"},[i._v(i._s(t.time))])],1),"text"==t.type?e("v-uni-view",{staticClass:"bubble"},[e("v-uni-rich-text",{attrs:{nodes:t.msg.content}})],1):i._e(),"voice"==t.type?e("v-uni-view",{staticClass:"bubble voice",class:i.playMsgid==t.id?"play":"",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.playVoice(t)}}},[e("v-uni-view",{staticClass:"icon other-voice"}),e("v-uni-view",{staticClass:"length"},[i._v(i._s(t.msg.length))])],1):i._e(),"img"==t.type?e("v-uni-view",{staticClass:"bubble img",on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.showPic(t)}}},[e("v-uni-image",{style:{width:t.msg.w+"px",height:t.msg.h+"px"},attrs:{src:t.msg.url}})],1):i._e()],1)],1):i._e()],1)})),1)],1),e("v-uni-view",{staticClass:"emoji-box",class:i.showEmji,on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=i.$handleEvent(t),i.discard.apply(void 0,arguments)}}},[e("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":"true",duration:"150"}},i._l(i.emojiList,(function(t,a){return e("v-uni-swiper-item",{key:a},i._l(t,(function(t,a){return e("v-uni-view",{key:a,on:{click:function(e){arguments[0]=e=i.$handleEvent(e),i.addEmoji(t)}}},[e("v-uni-image",{attrs:{mode:"widthFix",src:"/static/img/emoji/"+t.url}})],1)})),1)})),1)],1),e("v-uni-view",{staticClass:"input-box",class:i.showEmji,on:{touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=i.$handleEvent(t),i.discard.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"more",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.chooseImage.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon tupian"})],1),e("v-uni-view",{staticClass:"textbox"},[e("v-uni-view",{staticClass:"voice-mode",class:[i.isVoice?"":"hidden",i.recording?"recording":""],on:{touchstart:function(t){arguments[0]=t=i.$handleEvent(t),i.voiceBegin.apply(void 0,arguments)},touchmove:function(t){t.stopPropagation(),t.preventDefault(),arguments[0]=t=i.$handleEvent(t),i.voiceIng.apply(void 0,arguments)},touchend:function(t){arguments[0]=t=i.$handleEvent(t),i.voiceEnd.apply(void 0,arguments)},touchcancel:function(t){arguments[0]=t=i.$handleEvent(t),i.voiceCancel.apply(void 0,arguments)}}},[i._v(i._s(i.voiceTis))]),e("v-uni-view",{staticClass:"text-mode",class:i.isVoice?"hidden":""},[e("v-uni-view",{staticClass:"box"},[e("v-uni-textarea",{attrs:{"auto-height":"true"},model:{value:i.textMsg,callback:function(t){i.textMsg=t},expression:"textMsg"}})],1),e("v-uni-view",{staticClass:"em",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.chooseEmoji.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"icon biaoqing"})],1)],1)],1),e("v-uni-view",{staticClass:"send",class:i.isVoice?"hidden":"",on:{click:function(t){arguments[0]=t=i.$handleEvent(t),i.sendText.apply(void 0,arguments)}}},[e("v-uni-view",{staticClass:"btn"},[i._v("发送")])],1)],1),e("v-uni-view",{staticClass:"record",class:i.recording?"":"hidden"},[e("v-uni-view",{staticClass:"ing",class:i.willStop?"hidden":""},[e("v-uni-view",{staticClass:"icon luyin2"})],1),e("v-uni-view",{staticClass:"cancel",class:i.willStop?"":"hidden"},[e("v-uni-view",{staticClass:"icon chehui"})],1),e("v-uni-view",{staticClass:"tis",class:i.willStop?"change":""},[i._v(i._s(i.recordTis))])],1)],1)},s=[];e.d(t,"b",(function(){return n})),e.d(t,"c",(function(){return s})),e.d(t,"a",(function(){return a}))}}]);