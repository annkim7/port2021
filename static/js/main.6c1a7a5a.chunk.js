(this.webpackJsonpport2021=this.webpackJsonpport2021||[]).push([[0],{23:function(e,t,s){},24:function(e,t,s){},34:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(15),l=s.n(a),n=(s(23),s(3)),r=(s(7),s(24),s(4)),o=s(2),d=s.n(o),b=[{id:"1",title:"Its game",contents:["\uac8c\uc2dc\ud310 \ub514\uc790\uc778, \uc0ac\uc774\ud2b8 \uc804\uccb4 \ud37c\ube14\ub9ac\uc2f1","\uae30\uc874 \uc14b\ud305\ub41c \uac8c\uc2dc\ud310, \uc0c1\uc138\ud654\uba74 css\ub85c \ub514\uc790\uc778 \ubcc0\uacbd","\uc0ac\uc774\ud2b8 \ub9de\ucda4\ud615 \uac8c\uc2dc\ud310, \uc0c1\uc138\ud654\uba74 \ud37c\ube14\ub9ac\uc2f1","hooper slider \uc0ac\uc6a9"]},{id:"2",title:"STF 2021",contents:["\uc0ac\uc774\ud2b8 \uc804\uccb4 \ub514\uc790\uc778, \ud37c\ube14\ub9ac\uc2f1","\uae30\uc874 \uc14b\ud305\ub41c \uac8c\uc2dc\ud310, \uc0c1\uc138\ud654\uba74 css\ub85c \ub514\uc790\uc778 \ubcc0\uacbd","css animation\uc73c\ub85c \uba54\uc778 \ubaa8\uc158 \ucc3d\uc791\ud558\uc5ec \uc801\uc6a9"]},{id:"3",title:"IKW 2021",contents:["\uba54\uc778, \uc9c0\uc790\uccb4, fez, \uc5f0\uc0ac \ud398\uc774\uc9c0 \ud37c\ube14\ub9ac\uc2f1","\uadf8\uc678 \ub514\uc790\uc778 \ub2e4\uc18c \ubcc0\uacbd\ud558\uace0 \ubaa8\ubc14\uc77c \ub300\uc751\ub825 \ub192\uc774\ub3c4\ub85d \uc218\uc815","jquery scroll, touch \ubc0f click \uc774\ubca4\ud2b8 \uc801\uc6a9"]},{id:"4",title:"Jipremium x 4",contents:["\uc0ac\uc774\ud2b8 \uc804\uccb4 \ud37c\ube14\ub9ac\uc2f1, \uad00\ub9ac \ubc0f \uc720\uc9c0\ubcf4\uc218","\uc5f0\uad00\ub41c 4\uac1c \uc0ac\uc774\ud2b8\ub97c \uac01\uac01 \ud37c\ube14\ub9ac\uc2f1, \ud55c \ubc88\uc5d0 \uc218\uc815 \uad00\ub9ac","\ud035\ubc30\ub108(health, baby) \ub514\uc790\uc778"]},{id:"5",title:"Eco",contents:["\uc0ac\uc774\ud2b8 \uc804\uccb4 \ud37c\ube14\ub9ac\uc2f1(\uc628\ub77c\uc778 \uc804\uc2dc\uad00 \uc81c\uc678)","\ud14d\uc2a4\ud2b8\uc758 \uac00\uc9c0\ub7f0\ud55c \uc815\ub82c\uc744 \uc911\uc810\uc801 \uace0\ub824\ud558\uc5ec \ud37c\ube14\ub9ac\uc2f1"]},{id:"6",title:"Inquebangkok",contents:["\uc628\ub77c\uc778 \uc804\uc2dc \ud37c\ube14\ub9ac\uc2f1","\uae30\uc5c5 \uac80\uc0c9, \uc81c\ud488 \uac80\uc0c9, \uae30\uc5c5 \uac80\uc0c9 \uc0c1\uc138, \uc81c\ud488 \uac80\uc0c9 \uc0c1\uc138","slick slider \uc0ac\uc6a9"]}],j=s(0);function m(e){var t=e.summaryCard.contents,s=(e.pop,e.setPop),i=e.num,c=e.setNum;e.sumCount;return Object(j.jsx)("li",{children:Object(j.jsxs)("a",{className:"pop-btn",onClick:function(){s(!0),c(i)},children:[Object(j.jsx)("h3",{className:"title",children:e.summaryCard.title}),Object(j.jsx)("div",{className:"content",children:t.map((function(t,s){return Object(j.jsx)("span",{className:"list",children:e.summaryCard.contents[s]},s)}))})]})})}var u=function(e){var t=Object(i.useState)(b),s=Object(n.a)(t,2),c=s[0],a=(s[1],Object(i.useState)([].concat(Object(r.a)(c),Object(r.a)(c),Object(r.a)(c)))),l=Object(n.a)(a,2),o=l[0],u=(l[1],c.length),h=e.pop,O=e.setPop,f=(e.num,e.setNum);return Object(i.useEffect)((function(){d.a.fn.selfSlide=function(e){e=d.a.extend({},{slideWidth:600,slideMargin:100,maxSlides:3,responsiveMargin:20},e);var t,s,i,c=d()(this),a=c.find(".slides"),l=a.find("li"),n=0,r=l.length,o=e.slideWidth,b=e.slideMargin,j=e.maxSlides,m=e.responsiveMargin,u=c.find(".prev"),h=c.find(".next");function O(e,i){s=d()(".slide_wrapper li"),t=e+i,s.each((function(s){d()(this).css({left:t*s+"px",width:e+"px"})}))}i=o,O(o,b);var f=r/3;function x(){var e=-t*f+"px";a.css({transform:"translateX("+e+")"})}function v(e){a.stop().animate({left:t*-e+"px"},500,(function(){n!=f&&n!=-f||(a.css({left:"0px"}),n=0)})),n=e}x(),h.click((function(){v(n+1)})),u.click((function(){v(n-1)}));var p=void 0;function g(){void 0==p&&(p=setInterval((function(){v(n+1)}),3e3))}g(),c.mouseenter((function(){clearInterval(p),p=void 0})),c.mouseleave((function(){g()})),d()(window).resize((function(){console.log(d()(this).width()),d()(this).width()<700?(m=20,i=(a.width()-m*(j-1))/j):(i=o,m=b),d()(this).width()<=500&&(i=a.width(),m=0),O(i,m),x()}))}}),[]),Object(j.jsxs)("div",{className:"slide_wrapper mainSlide",children:[Object(j.jsx)("ul",{className:"slides",children:o.map((function(e,t){return Object(j.jsx)(m,{summaryCard:o[t],pop:h,setPop:O,num:t,setNum:f,sumCount:u},t)}))}),Object(j.jsxs)("p",{className:"controls",children:[Object(j.jsx)("span",{className:"prev"}),Object(j.jsx)("span",{className:"next"})]})]})},h=s(9),O=[{id:"1",title:"Its game",figma:"hrFYpH3xrhVRA4SeSFdiCf/ITS-GAME",website:"https://itsgame.kr/",design:"itsgame_02.png",explain:"calc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud558\ub098\uc758 \uc544\uc774\ud15c\uc758 width\uac00 \uac1c\ubcc4 \uc544\uc774\ud15c\ubcf4\ub2e4 2/3\ud06c\uae30\uac00 \ub418\ub3c4\ub85d \ud37c\ube14\ub9ac\uc2f1.\n\uc5c5\uccb4\ubcc4\ub85c \uc62c\ub9ac\ub294 \uc774\ubbf8\uc9c0 \ud06c\uae30\uac00 \uc81c\uac01\uac01\uc778 \uc810\uc744 \uace0\ub824\ud558\uc5ec max-height\ub97c \uc815\ud558\uace0 \uadf8 \uc815\ub3c4\uae4c\uc9c0 align-self:strech\uc640 flex-grow, flex-shrink\ub97c \ud65c\uc6a9\ud558\uc5ec \uc77c\uad04\ub418\uac8c \ub9de\ucd94\uc5c8\ub2e4."},{id:"2",title:"STF 2021",figma:"UGtQcmHWYJGmDDw2Nx60xd/stf",website:"https://seoultourismfair.or.kr/",video:"stf_01.mp4",explain:"\uc0ac\uc774\ud2b8\uc758 \uc5d0\ub108\uc81c\ud2f1\ud568\uc744 \ub3cb\ubcf4\uc774\uac8c \ud558\uae30 \uc704\ud574 \ub85c\ub4dc\uac00 \uc0c1\ub300\uc801\uc73c\ub85c \ube60\ub978 css animation\uc73c\ub85c \uc544\uc774\ud15c\ubcc4 \uc6c0\uc9c1\uc784\uc744 \ub9cc\ub4e4\uace0, \uac00\uc0c1\uc120\ud0dd\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud544\uc694\ud55c \uac1c\uccb4\ub97c \ub9cc\ub4e4\uc5b4 \ub098\ud0c0\ub098\uac8c \ud558\uc600\ub2e4.\n\uc628\ub77c\uc778 \uc804\uc2dc\uc758 \uacbd\uc6b0 \uac01 \uc544\uc774\ud15c\uc744 border-radius\ub97c \ucd94\uac00\ud558\uc5ec \ubc15\uc2a4\uc758 \ub465\uadfc \ubaa8\uc11c\ub9ac\ub85c \ubd80\ub4dc\ub7ec\uc6b4 \ub290\ub08c\uc744 \uc8fc\uace0\uc790 \ud558\uc600\ub2e4."},{id:"3",title:"IKW 2021",figma:"5rat5gyDSDQbbkjgSQiVhL/IKW",website:"https://ikw.kotra-micehub.com/",design:"ikw_02.png",explain:"\uc5f0\uc0ac \uc0c1\uc138\ud398\uc774\uc9c0\uc758 \uacbd\uc6b0 slick-slider\uc758 \uac01 li\ub97c \ud558\ub098\uc758 \ud0ed\uc73c\ub85c \uc5f0\uacb0\uc2dc\ucf1c \uc138\ubd80 \ub0b4\uc6a9\uc774 \ub098\ud0c0\ub098\uac8c \ud558\uc600\ub2e4.\n\uc9c0\uc790\uccb4\uc758 \uacbd\uc6b0 \ud0ed\uc744 \ubcc0\ud615\ud558\uc5ec \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \ub54c \uc9c0\ub3c4 \uc774\ubbf8\uc9c0\uc640 \ud558\ubd80 \ub0b4\uc6a9\uc774 \ud568\uaed8 \ubc14\ub00c\ub3c4\ub85d script \uc218\uc815\ud558\uc600\ub2e4. \ub610\ud55c \uc9c0\uc790\uccb4 \uc138\ubd80 \ud398\uc774\uc9c0\ub294 \uac1c\ubcc4 \uc57d 45\ud398\uc774\uc9c0\ub97c \ud37c\ube14\ub9ac\uc2f1\ud558\uace0 \uac1c\ubc1c\ud300\uc5d0 \ud5e4\ub354\ub97c \ubcf8 \uc0ac\uc774\ud2b8\ub85c \uc5f0\ub3d9\uc2dc\ud0ac \uc218 \uc788\uac8c \uc694\uccad\ud55c \ud398\uc774\uc9c0\uc774\ub2e4.\nfez\ub294 \uc5ed\uc2dc \ud0ed\uc744 \ubcc0\ud615\ud55c \ud398\uc774\uc9c0\uc778\ub370 \ubc84\ud2bc\uc774 \ud558\ub2e8\uc5d0 \uc788\uc5b4 \uc774\uc6a9\uc790\uc758 \ubd88\ud3b8\uc744 \uc904\uc77c \uc218 \uc788\ub3c4\ub85d scrollTop animate \ucd94\uac00\ud558\uc600\ub2e4.\n\uc138\ubd80 \ud504\ub85c\uadf8\ub7a8\uc758 \uacbd\uc6b0 \ubaa8\ubc14\uc77c\uc5d0\uc11c table\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc88c\uc6b0\ub85c \uc2a4\ud06c\ub864 \ud558\ub3c4\ub85d \uc218\uc815, \uc548\ub0b4\ubb38\uc744 \uc704\uc5d0 \ub36e\uc5b4 \ub193\uace0 touch click\ub97c \ud1b5\ud574 \uc81c\uac70\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uc600\ub2e4."},{id:"4",title:"Jipremium x 4",figma:"9YsUU36dLB61IrqhRzJiYK/Jipremium",website:[{jipremium:"https://jipremium.micehub-gov.com/"},{vietbaby:"https://vietbabyfair.micehub-gov.com/"},{viehealth:"https://viethealth.micehub-gov.com/"},{vipremium:"https://vipremium.micehub-gov.com/"}],design:"jip_02.png",explain:"jipremium, vietbaby, viehealth, vipremium\uc758 \ub124\uac00\uc9c0 \uc0ac\uc774\ud2b8\uac00 \ub808\uc774\uc544\uc6c3\uc774 \uac70\uc758 \uc77c\uce58\ud558\uace0 \uad6c\uc131\ub3c4 \uac19\uc544\uc11c \ud568\uaed8 \uad00\ub9ac\ud558\uace0, \uae30\ub2a5 \ucd94\uac00 \uc694\uccad\uc774 \ub9ce\uc544\uc11c \ud558\ub098\uc758 css\ub97c \ud1b5\ud574\uc11c \uad00\ub9ac\ud574\uc628 \uc0ac\uc774\ud2b8\uc774\ub2e4.\nvietbaby\uc758 \ucc38\uac00\uc0ac \ud398\uc774\uc9c0\uc758 \uacbd\uc6b0 script\ub97c \uc0ac\uc6a9, for\ubb38\uc73c\ub85c array\uc548\uc758 \ub370\uc774\ud130\ub97c td\ub85c \uc0dd\uc131\ud55c \ubc14 \uc788\ub2e4."},{id:"5",title:"Eco",figma:"3Z42JEN2mK9pgRfECpXnq6/eco",website:"https://www.ecofairkorea.kr/",design:"eco_01.png",explain:"\ud37c\ube14\ub9ac\uc2f1\ub9cc\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \uc0ac\uc774\ud2b8\ub85c \ub098\ub214\uc2a4\ud018\uc5b4 \ud3f0\ud2b8\uac00 \uac00\uc9c0\ub294 \uae54\ub054\ud558\uace0 \uace0\ub974\uac8c \uc815\ub82c\ub41c \ub290\ub08c\uc744 \uc0b4\ub9ac\uae30 \uc704\ud574 \ud328\ub529\uacfc \uae00\uc790 \uc0ac\uc774\uc758 \uc815\ub82c \ub4f1\uc744 \uc2e0\uacbd\uc368\uc11c \uc791\uc5c5\ud588\ub2e4."},{id:"6",title:"Inquebangkok",figma:"vTodOyHnWQDmlXWHbz3mFM/bangkok",website:"https://kintexbangkok.com/",design:"bk_01.png",explain:"\uc778\ud2b8\ub85c, \uc628\ub77c\uc778 \uc804\uc2dc\ub9cc \uc791\uc5c5"}];function f(e){e.dropDown;var t=e.setDropDown,s=(e.num,e.setNum,e.website);return Object(j.jsx)("div",{className:"web-dropDown",onMouseLeave:function(){t(!1)},children:Object(j.jsx)("div",{className:"web-box",children:s.map((function(e,t){return Object(j.jsx)("a",{href:Object.values(s[t]),target:"_blank",children:Object.keys(s[t])})}))})})}var x=function(e){var t=Object(i.useState)(O),s=Object(n.a)(t,2),c=s[0],a=(s[1],Object(i.useState)([].concat(Object(r.a)(c),Object(r.a)(c),Object(r.a)(c)))),l=Object(n.a)(a,2),o=l[0],d=(l[1],Object(i.useState)(!1)),b=Object(n.a)(d,2),m=b[0],u=b[1],x=(e.pop,e.setPop),v=e.num,p=e.setNum,g=o[v].website,N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=Object(i.useRef)();return Object(i.useEffect)((function(){if(s.current){var i=s.current;i.style.transition="transform ".concat(e,"s ease-in-out ").concat(t,"s"),i.style.transform="translateX(0%)"}}),[]),{ref:s,style:{transform:"translateX(-100%)"}}}(.5,.6),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,s=Object(i.useRef)();return Object(i.useEffect)((function(){if(s.current){var i=s.current;i.style.transition="opacity ".concat(e,"s ease-in-out ").concat(t,"s"),i.style.opacity=1}}),[]),{ref:s,style:{opacity:0}}}(.8,1.3);return Object(j.jsxs)("div",{className:"popup",children:[Object(j.jsx)("a",Object(h.a)({className:"close-btn",onClick:function(){x(!1)}},N)),Object(j.jsx)("div",Object(h.a)(Object(h.a)({className:"pop-con"},w),{},{children:Object(j.jsxs)("div",{className:"pop-box",children:[Object(j.jsxs)("div",{className:"pop-header",children:[Object(j.jsx)("div",{className:"title",children:o[v].title}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)("a",{className:"figma",target:"_blank",without:!0,rel:"noreferrer",href:"https://www.figma.com/file/"+o[v].figma,children:"Figma"}),!1===Array.isArray(o[v].website)?Object(j.jsx)("a",{className:"page",target:"_blank",without:!0,rel:"noreferrer",href:o[v].website,children:"Website"}):Object(j.jsx)("a",{className:"page",target:"_blank",without:!0,rel:"noreferrer",onMouseEnter:function(){u(!0),setTimeout((function(){u(!1)}),3e3)},children:"Website"}),!0===m?Object(j.jsx)(f,{dropDown:m,setDropDown:u,num:v,setNum:p,website:g}):null]})]}),Object(j.jsx)("div",{className:"detail",children:Object(j.jsxs)("div",{className:"detail-box",children:[Object(j.jsx)("div",{className:"media",children:o[v].design?Object(j.jsx)("div",{class:"pic",children:Object(j.jsx)("img",{src:"https://annkim7.github.io/port2021/src/images/"+o[v].design})}):Object(j.jsx)("div",{className:"video",children:Object(j.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,width:"100%",height:"100%",children:Object(j.jsx)("source",{src:"https://annkim7.github.io/port2021/src/video/"+o[v].video,type:"video/mp4"})})})}),Object(j.jsx)("div",{className:"text",children:o[v].explain.split("\n").map((function(e){return Object(j.jsxs)(j.Fragment,{children:[e,Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})}))})]})})]})}))]})},v=s(14),p=function(){return Object(i.useEffect)((function(){window.onload=function(){var e=document.querySelectorAll(".section"),t=1,s=e.length,i=document.querySelector(".main-visual"),c=document.querySelectorAll(".ball"),a=c.length;function l(){for(var e=0;e<a;e++)c[e].style.left="50%",n();v.a.to(i,2.2,{transform:"translate(-50%, -50%)",opacity:1,delay:.5,ease:"easeInOut"})}function n(){for(var e=0;e<a;e++){var t=.2*e;c[e].style.transition="1.5s",c[e].style.setProperty("transition-delay",t+"s")}}function r(){for(var i=0;i<s;i++)e[i].style.zIndex="-1",e[i].style.setProperty("transition-delay","1.5s");e[t-1].style.zIndex="0"}d()(window).bind("wheel",(function(e){e.originalEvent.wheelDelta>0||e.originalEvent.detail<0?(t>1&&t--,r(),l()):(t<s&&t++,r(),function(){for(var e=0;e<a;e++)e<4?(c[e].style.left="-150%",n()):(c[e].style.left="150%",n());v.a.to(i,2.2,{transform:"translate(-50%, -300%)",opacity:0,delay:.5,ease:"easeInOut"})}()),console.log(t)})),l(),r()}}),[]),Object(j.jsxs)("div",{className:"ball-wrap",children:[Object(j.jsxs)("div",{className:"ball ball1",children:[Object(j.jsx)("div",{className:"ball-first-color"}),Object(j.jsx)("div",{className:"ball-shine"}),Object(j.jsx)("div",{className:"ball-third-color big"})]}),Object(j.jsxs)("div",{className:"ball ball2",children:[Object(j.jsx)("div",{className:"ball-first-color"}),Object(j.jsx)("div",{className:"ball-second-color"}),Object(j.jsx)("div",{className:"ball-third-color mid"}),Object(j.jsx)("div",{className:"ball-shine"})]}),Object(j.jsxs)("div",{className:"ball ball3",children:[Object(j.jsx)("div",{className:"ball-first-color"}),Object(j.jsx)("div",{className:"ball-second-color"}),Object(j.jsx)("div",{className:"ball-third-color mid"}),Object(j.jsx)("div",{className:"ball-shine"})]}),Object(j.jsxs)("div",{className:"ball ball4",children:[Object(j.jsx)("div",{className:"ball-first-color"}),Object(j.jsx)("div",{className:"ball-second-color"}),Object(j.jsx)("div",{className:"ball-third-color small"}),Object(j.jsx)("div",{className:"ball-shine"})]}),Object(j.jsxs)("div",{className:"ball ball5",children:[Object(j.jsx)("div",{className:"ball-first-color"}),Object(j.jsx)("div",{className:"ball-second-color"}),Object(j.jsx)("div",{className:"ball-third-color mid"}),Object(j.jsx)("div",{className:"ball-shine"})]}),Object(j.jsxs)("div",{className:"ball ball6",children:[Object(j.jsx)("div",{className:"ball-first-color"}),Object(j.jsx)("div",{className:"ball-second-color"}),Object(j.jsx)("div",{className:"ball-third-color small"}),Object(j.jsx)("div",{className:"ball-shine"})]}),Object(j.jsxs)("div",{className:"ball ball7",children:[Object(j.jsx)("div",{className:"ball-first-color"}),Object(j.jsx)("div",{className:"ball-second-color"}),Object(j.jsx)("div",{className:"ball-third-color smallest"}),Object(j.jsx)("div",{className:"ball-shine"})]})]})};var g=function(){var e=Object(i.useState)(!1),t=Object(n.a)(e,2),s=t[0],c=t[1],a=Object(i.useState)(0),l=Object(n.a)(a,2),r=l[0],o=l[1];return Object(i.useEffect)((function(){d()(".mainSlide").selfSlide()}),[]),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("section",{className:"section section01",children:[Object(j.jsx)("div",{className:"main-visual",children:Object(j.jsx)(u,{pop:s,setPop:c,num:r,setNum:o})}),Object(j.jsx)(p,{})]}),Object(j.jsxs)("section",{class:"section section02",children:[Object(j.jsxs)("div",{class:"left-side",children:[Object(j.jsx)("h3",{class:"title",children:"Education"}),Object(j.jsxs)("div",{class:"edu-con",children:[Object(j.jsx)("p",{children:"\uc774 \uc0ac\uc774\ud2b8\uc5d0 \uc0ac\uc6a9\ub41c \uae30\uc220\uc744 \uc815\ub9ac\ud574 \ubcf4\uc558\uc2b5\ub2c8\ub2e4. \ub514\uc790\uc778\uacfc \ud37c\ube14\ub9ac\uc2f1\uc744 \ub118\uc5b4 \ud504\ub860\ud2b8\uc5d4\ub4dc\ub85c \uae30\uc220 \ud655\uc7a5\uc744 \ub3c4\ubaa8\ud558\uc5ec \ubcf4\ub2e4 \ub098\uc740 \uae30\uc220\ub85c \uba4b\uc9c4 \uc6f9\ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub294 \uac83\uc774 \ubaa9\ud45c\uc785\ub2c8\ub2e4. \ud604\uc7ac\uc5d0 \uc548\uc8fc\ud558\uc9c0 \uc54a\uace0 \uafb8\uc900\ud558\uac8c \ubc1c\uc804\ud558\uae30 \uc704\ud574 \ubc30\uc6c0\uc744 \ub193\uc9c0 \uc54a\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(j.jsxs)("div",{class:"edu-button",children:[Object(j.jsx)("a",{class:"github",traget:"_blank",without:!0,rel:"noreferrer",href:"https://github.com/annkim7"}),Object(j.jsx)("a",{class:"notion",traget:"_blank",without:!0,rel:"noreferrer",href:"https://www.notion.so/N-Kim-a242915d7ffa463596860036bf7db6d5"})]})]})]}),Object(j.jsx)("div",{class:"right-side",children:Object(j.jsxs)("div",{class:"edu-box",children:[Object(j.jsx)("div",{class:"edu",children:"Javascript"}),Object(j.jsx)("div",{class:"edu",children:"SVG"}),Object(j.jsx)("div",{class:"edu",children:"GSAP"}),Object(j.jsx)("div",{class:"edu",children:"React"}),Object(j.jsx)("div",{class:"edu",children:"Redux"}),Object(j.jsx)("div",{class:"edu",children:"SCSS"})]})})]}),!0===s?Object(j.jsx)(x,{pop:s,setPop:c,num:r,setNum:o}):null]})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,35)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;s(e),i(e),c(e),a(e),l(e)}))},w=s(18);l.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w.a,{children:Object(j.jsx)(g,{})})}),document.getElementById("root")),N()},7:function(e,t,s){}},[[34,1,2]]]);
//# sourceMappingURL=main.6c1a7a5a.chunk.js.map