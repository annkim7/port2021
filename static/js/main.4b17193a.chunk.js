(this.webpackJsonpport2021=this.webpackJsonpport2021||[]).push([[0],{23:function(e,s,t){},24:function(e,s,t){},35:function(e,s,t){"use strict";t.r(s);var i=t(0),c=t.n(i),l=t(15),a=t.n(l),n=(t(23),t(3)),r=(t(7),t(24),t(4)),o=t(2),d=t.n(o),j=[{id:"1",title:"Its game",contents:["\uac8c\uc2dc\ud310 \ub514\uc790\uc778, \uc0ac\uc774\ud2b8 \uc804\uccb4 \ud37c\ube14\ub9ac\uc2f1","\uae30\uc874 \uc14b\ud305\ub41c \uac8c\uc2dc\ud310, \uc0c1\uc138\ud654\uba74 css\ub85c \ub514\uc790\uc778 \ubcc0\uacbd","\uc0ac\uc774\ud2b8 \ub9de\ucda4\ud615 \uac8c\uc2dc\ud310, \uc0c1\uc138\ud654\uba74 \ud37c\ube14\ub9ac\uc2f1","hooper slider \uc0ac\uc6a9"]},{id:"2",title:"STF 2021",contents:["\uc0ac\uc774\ud2b8 \uc804\uccb4 \ub514\uc790\uc778, \ud37c\ube14\ub9ac\uc2f1","\uae30\uc874 \uc14b\ud305\ub41c \uac8c\uc2dc\ud310, \uc0c1\uc138\ud654\uba74 css\ub85c \ub514\uc790\uc778 \ubcc0\uacbd","css animation\uc73c\ub85c \uba54\uc778 \ubaa8\uc158 \ucc3d\uc791\ud558\uc5ec \uc801\uc6a9"]},{id:"3",title:"IKW 2021",contents:["\uba54\uc778, \uc9c0\uc790\uccb4, fez, \uc5f0\uc0ac \ud398\uc774\uc9c0 \ud37c\ube14\ub9ac\uc2f1","\uadf8\uc678 \ub514\uc790\uc778 \ub2e4\uc18c \ubcc0\uacbd\ud558\uace0 \ubaa8\ubc14\uc77c \ub300\uc751\ub825 \ub192\uc774\ub3c4\ub85d \uc218\uc815","jquery scroll, touch \ubc0f click \uc774\ubca4\ud2b8 \uc801\uc6a9"]},{id:"4",title:"Jipremium x 4",contents:["\uc0ac\uc774\ud2b8 \uc804\uccb4 \ud37c\ube14\ub9ac\uc2f1, \uad00\ub9ac \ubc0f \uc720\uc9c0\ubcf4\uc218","\uc5f0\uad00\ub41c 4\uac1c \uc0ac\uc774\ud2b8\ub97c \uac01\uac01 \ud37c\ube14\ub9ac\uc2f1, \ud55c \ubc88\uc5d0 \uc218\uc815 \uad00\ub9ac","\ud035\ubc30\ub108(health, baby) \ub514\uc790\uc778"]},{id:"5",title:"Eco",contents:["\uc0ac\uc774\ud2b8 \uc804\uccb4 \ud37c\ube14\ub9ac\uc2f1(\uc628\ub77c\uc778 \uc804\uc2dc\uad00 \uc81c\uc678)","\ud14d\uc2a4\ud2b8\uc758 \uac00\uc9c0\ub7f0\ud55c \uc815\ub82c\uc744 \uc911\uc810\uc801 \uace0\ub824\ud558\uc5ec \ud37c\ube14\ub9ac\uc2f1"]},{id:"6",title:"Inquebangkok",contents:["\uc628\ub77c\uc778 \uc804\uc2dc \ud37c\ube14\ub9ac\uc2f1","\uae30\uc5c5 \uac80\uc0c9, \uc81c\ud488 \uac80\uc0c9, \uae30\uc5c5 \uac80\uc0c9 \uc0c1\uc138, \uc81c\ud488 \uac80\uc0c9 \uc0c1\uc138","slick slider \uc0ac\uc6a9"]}],b=t(1);function m(e){var s=e.summaryCard.contents,t=(e.pop,e.setPop),i=e.num,c=e.setNum,l=e.sumCount;return Object(b.jsx)("li",{children:Object(b.jsxs)("a",{className:"pop-btn",onClick:function(){var e;t(!0),e=i,console.log(e),console.log(l),c(e)},children:[Object(b.jsx)("h3",{className:"title",children:e.summaryCard.title}),Object(b.jsx)("div",{className:"content",children:s.map((function(s,t){return Object(b.jsx)("span",{className:"list",children:e.summaryCard.contents[t]},t)}))})]})})}var h=function(e){var s=Object(i.useState)(j),t=Object(n.a)(s,2),c=t[0],l=(t[1],Object(i.useState)([].concat(Object(r.a)(c),Object(r.a)(c),Object(r.a)(c)))),a=Object(n.a)(l,2),o=a[0],h=(a[1],c.length),u=e.pop,x=e.setPop,O=(e.num,e.setNum);return Object(i.useEffect)((function(){d.a.fn.selfSlide=function(e){e=d.a.extend({},{slideWidth:600,slideMargin:100,maxSlides:3,responsiveMargin:20},e);var s,t,i,c=d()(this),l=c.find(".slides"),a=l.find("li"),n=0,r=a.length,o=e.slideWidth,j=e.slideMargin,b=e.maxSlides,m=e.responsiveMargin,h=c.find(".prev"),u=c.find(".next");function x(e,i){t=d()(".slide_wrapper li"),s=e+i,t.each((function(t){d()(this).css({left:s*t+"px",width:e+"px"})}))}i=o,x(o,j);var O=r/3;function p(){var e=-s*O+"px";l.css({transform:"translateX("+e+")"})}function v(e){l.stop().animate({left:s*-e+"px"},500,(function(){n!=O&&n!=-O||(l.css({left:"0px"}),n=0)})),n=e}p(),u.click((function(){v(n+1)})),h.click((function(){v(n-1)}));var f=void 0;function g(){void 0==f&&(f=setInterval((function(){v(n+1)}),3e3))}g(),c.mouseenter((function(){clearInterval(f),f=void 0})),c.mouseleave((function(){g()})),d()(window).resize((function(){console.log(d()(this).width()),d()(this).width()<700?(m=20,i=(l.width()-m*(b-1))/b):(i=o,m=j),d()(this).width()<=500&&(i=l.width(),m=0),x(i,m),p()}))}}),[]),Object(b.jsxs)("div",{className:"slide_wrapper mainSlide",children:[Object(b.jsx)("ul",{className:"slides",children:o.map((function(e,s){return Object(b.jsx)(m,{summaryCard:o[s],pop:u,setPop:x,num:s,setNum:O,sumCount:h},s)}))}),Object(b.jsxs)("p",{className:"controls",children:[Object(b.jsx)("span",{className:"prev"}),Object(b.jsx)("span",{className:"next"})]})]})},u=[{id:"1",title:"Its game",figma:"ITS-GAME",website:"https://itsgame.kr/",design:"itsgame_02.png",explain:"calc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud558\ub098\uc758 \uc544\uc774\ud15c\uc758 width\uac00 \uac1c\ubcc4 \uc544\uc774\ud15c\ubcf4\ub2e4 2/3\ud06c\uae30\uac00 \ub418\ub3c4\ub85d \ud37c\ube14\ub9ac\uc2f1.\n\uc5c5\uccb4\ubcc4\ub85c \uc62c\ub9ac\ub294 \uc774\ubbf8\uc9c0 \ud06c\uae30\uac00 \uc81c\uac01\uac01\uc778 \uc810\uc744 \uace0\ub824\ud558\uc5ec max-height\ub97c \uc815\ud558\uace0 \uadf8 \uc815\ub3c4\uae4c\uc9c0 align-self:strech\uc640 flex-grow, flex-shrink\ub97c \ud65c\uc6a9\ud558\uc5ec \uc77c\uad04\ub418\uac8c \ub9de\ucd94\uc5c8\ub2e4."},{id:"2",title:"STF 2021",figma:"stf",website:"https://seoultourismfair.or.kr/",video:"stf_01.mp4",explain:"\uc0ac\uc774\ud2b8\uc758 \uc5d0\ub108\uc81c\ud2f1\ud568\uc744 \ub3cb\ubcf4\uc774\uac8c \ud558\uae30 \uc704\ud574 \ub85c\ub4dc\uac00 \uc0c1\ub300\uc801\uc73c\ub85c \ube60\ub978 css animation\uc73c\ub85c \uc544\uc774\ud15c\ubcc4 \uc6c0\uc9c1\uc784\uc744 \ub9cc\ub4e4\uace0, \uac00\uc0c1\uc120\ud0dd\uc790\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud544\uc694\ud55c \uac1c\uccb4\ub97c \ub9cc\ub4e4\uc5b4 \ub098\ud0c0\ub098\uac8c \ud558\uc600\ub2e4.\n\uc628\ub77c\uc778 \uc804\uc2dc\uc758 \uacbd\uc6b0 \uac01 \uc544\uc774\ud15c\uc744 border-radius\ub97c \ucd94\uac00\ud558\uc5ec \ubc15\uc2a4\uc758 \ub465\uadfc \ubaa8\uc11c\ub9ac\ub85c \ubd80\ub4dc\ub7ec\uc6b4 \ub290\ub08c\uc744 \uc8fc\uace0\uc790 \ud558\uc600\ub2e4."},{id:"3",title:"IKW 2021",figma:"IKW",website:"https://ikw.kotra-micehub.com/",design:"ikw_02.png",explain:"\uc5f0\uc0ac \uc0c1\uc138\ud398\uc774\uc9c0\uc758 \uacbd\uc6b0 slick-slider\uc758 \uac01 li\ub97c \ud558\ub098\uc758 \ud0ed\uc73c\ub85c \uc5f0\uacb0\uc2dc\ucf1c \uc138\ubd80 \ub0b4\uc6a9\uc774 \ub098\ud0c0\ub098\uac8c \ud558\uc600\ub2e4.\n\uc9c0\uc790\uccb4\uc758 \uacbd\uc6b0 \ud0ed\uc744 \ubcc0\ud615\ud558\uc5ec \ubc84\ud2bc\uc744 \ud074\ub9ad\ud560 \ub54c \uc9c0\ub3c4 \uc774\ubbf8\uc9c0\uc640 \ud558\ubd80 \ub0b4\uc6a9\uc774 \ud568\uaed8 \ubc14\ub00c\ub3c4\ub85d script \uc218\uc815\ud558\uc600\ub2e4. \ub610\ud55c \uc9c0\uc790\uccb4 \uc138\ubd80 \ud398\uc774\uc9c0\ub294 \uac1c\ubcc4 \uc57d 45\ud398\uc774\uc9c0\ub97c \ud37c\ube14\ub9ac\uc2f1\ud558\uace0 \uac1c\ubc1c\ud300\uc5d0 \ud5e4\ub354\ub97c \ubcf8 \uc0ac\uc774\ud2b8\ub85c \uc5f0\ub3d9\uc2dc\ud0ac \uc218 \uc788\uac8c \uc694\uccad\ud55c \ud398\uc774\uc9c0\uc774\ub2e4.\nfez\ub294 \uc5ed\uc2dc \ud0ed\uc744 \ubcc0\ud615\ud55c \ud398\uc774\uc9c0\uc778\ub370 \ubc84\ud2bc\uc774 \ud558\ub2e8\uc5d0 \uc788\uc5b4 \uc774\uc6a9\uc790\uc758 \ubd88\ud3b8\uc744 \uc904\uc77c \uc218 \uc788\ub3c4\ub85d scrollTop animate \ucd94\uac00\ud558\uc600\ub2e4.\n\uc138\ubd80 \ud504\ub85c\uadf8\ub7a8\uc758 \uacbd\uc6b0 \ubaa8\ubc14\uc77c\uc5d0\uc11c table\uc758 \uac00\ub3c5\uc131\uc744 \ub192\uc774\uae30 \uc704\ud574 \uc88c\uc6b0\ub85c \uc2a4\ud06c\ub864 \ud558\ub3c4\ub85d \uc218\uc815, \uc548\ub0b4\ubb38\uc744 \uc704\uc5d0 \ub36e\uc5b4 \ub193\uace0 touch click\ub97c \ud1b5\ud574 \uc81c\uac70\ud560 \uc218 \uc788\ub3c4\ub85d \ud558\uc600\ub2e4."},{id:"4",title:"Jipremium x 4",figma:"Jipremium",website:"https://jipremium.micehub-gov.com/",design:"jip_02.png",explain:"jipremium, vietbaby, viehealth, vipremium\uc758 \ub124\uac00\uc9c0 \uc0ac\uc774\ud2b8\uac00 \ub808\uc774\uc544\uc6c3\uc774 \uac70\uc758 \uc77c\uce58\ud558\uace0 \uad6c\uc131\ub3c4 \uac19\uc544\uc11c \ud568\uaed8 \uad00\ub9ac\ud558\uace0, \uae30\ub2a5 \ucd94\uac00 \uc694\uccad\uc774 \ub9ce\uc544\uc11c \ud558\ub098\uc758 css\ub97c \ud1b5\ud574\uc11c \uad00\ub9ac\ud574\uc628 \uc0ac\uc774\ud2b8\uc774\ub2e4.\nvietbaby\uc758 \ucc38\uac00\uc0ac \ud398\uc774\uc9c0\uc758 \uacbd\uc6b0 script\ub97c \uc0ac\uc6a9, for\ubb38\uc73c\ub85c array\uc548\uc758 \ub370\uc774\ud130\ub97c td\ub85c \uc0dd\uc131\ud55c \ubc14 \uc788\ub2e4."},{id:"5",title:"Eco",figma:"eco",website:"https://www.ecofairkorea.kr/",design:"eco_01.png",explain:"\ud37c\ube14\ub9ac\uc2f1\ub9cc\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \uc0ac\uc774\ud2b8\ub85c \ub098\ub214\uc2a4\ud018\uc5b4 \ud3f0\ud2b8\uac00 \uac00\uc9c0\ub294 \uae54\ub054\ud558\uace0 \uace0\ub974\uac8c \uc815\ub82c\ub41c \ub290\ub08c\uc744 \uc0b4\ub9ac\uae30 \uc704\ud574 \ud328\ub529\uacfc \uae00\uc790 \uc0ac\uc774\uc758 \uc815\ub82c \ub4f1\uc744 \uc2e0\uacbd\uc368\uc11c \uc791\uc5c5\ud588\ub2e4."},{id:"6",title:"Inquebangkok",figma:"bangkok",website:"https://kintexbangkok.com/",design:"bk_01.png",explain:"\uc778\ud2b8\ub85c, \uc628\ub77c\uc778 \uc804\uc2dc\ub9cc \uc791\uc5c5"}];var x=function(e){var s=Object(i.useState)(u),t=Object(n.a)(s,2),c=t[0],l=(t[1],Object(i.useState)([].concat(Object(r.a)(c),Object(r.a)(c),Object(r.a)(c)))),a=Object(n.a)(l,2),o=a[0],d=(a[1],e.pop,e.setPop),j=e.num;return e.setNum,Object(b.jsxs)("div",{className:"popup",children:[Object(b.jsx)("a",{className:"close-btn",onClick:function(){d(!1)}}),Object(b.jsx)("div",{className:"pop-con",children:Object(b.jsxs)("div",{className:"pop-box",children:[Object(b.jsxs)("div",{className:"pop-header",children:[Object(b.jsx)("div",{className:"title",children:o[j].title}),Object(b.jsxs)("div",{className:"links",children:[Object(b.jsx)("a",{className:"figma",target:"_blank",href:"https://www.figma.com/file/hrFYpH3xrhVRA4SeSFdiCf/"+o[j].figma,children:"Figma"}),Object(b.jsx)("a",{className:"page",target:"_blank",href:o[j].website,children:"Website"})]})]}),Object(b.jsx)("div",{className:"detail",children:Object(b.jsxs)("div",{className:"detail-box",children:[Object(b.jsx)("div",{className:"media",children:o[j].design?Object(b.jsx)("div",{class:"pic",children:Object(b.jsx)("img",{src:"https://annkim7.github.io/port2021/src/images/"+o[j].design})}):Object(b.jsx)("div",{className:"video",children:Object(b.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,width:"100%",height:"100%",children:Object(b.jsx)("source",{src:"https://annkim7.github.io/port2021/src/video/"+o[j].video,type:"video/mp4"})})})}),Object(b.jsx)("div",{className:"text",children:o[j].explain.split("\n").map((function(e){return Object(b.jsxs)(b.Fragment,{children:[e,Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})}))})]})})]})})]})},O=(t(36),function(){return Object(i.useEffect)((function(){window.onload=function(){var e=document.querySelectorAll(".section"),s=1,t=e.length,i=document.querySelector(".main-visual"),c=document.querySelectorAll(".ball"),l=c.length;function a(){for(var e=0;e<l;e++)c[e].style.left="50%",n();i.style.setProperty("transform","translate(-50%, -50%)")}function n(){for(var e=0;e<l;e++){var s=.2*e;c[e].style.transition="1.5s",c[e].style.setProperty("transition-delay",s+"s")}i.style.transition="0.6s linear"}function r(){for(var i=0;i<t;i++)e[i].style.zIndex="-1",e[i].style.setProperty("transition-delay","1.5s");e[s-1].style.zIndex="0"}d()(window).bind("wheel",(function(e){e.originalEvent.wheelDelta>0||e.originalEvent.detail<0?(s>1&&s--,r(),a()):(s<t&&s++,r(),function(){for(var e=0;e<l;e++)e<4?(c[e].style.left="-150%",n()):(c[e].style.left="150%",n());i.style.setProperty("transform","translate(-50%, -300%)")}()),console.log(s)})),a(),r()}}),[]),Object(b.jsxs)("div",{className:"ball-wrap",children:[Object(b.jsxs)("div",{className:"ball ball1",children:[Object(b.jsx)("div",{className:"ball-first-color"}),Object(b.jsx)("div",{className:"ball-shine"}),Object(b.jsx)("div",{className:"ball-third-color big"})]}),Object(b.jsxs)("div",{className:"ball ball2",children:[Object(b.jsx)("div",{className:"ball-first-color"}),Object(b.jsx)("div",{className:"ball-second-color"}),Object(b.jsx)("div",{className:"ball-third-color mid"}),Object(b.jsx)("div",{className:"ball-shine"})]}),Object(b.jsxs)("div",{className:"ball ball3",children:[Object(b.jsx)("div",{className:"ball-first-color"}),Object(b.jsx)("div",{className:"ball-second-color"}),Object(b.jsx)("div",{className:"ball-third-color mid"}),Object(b.jsx)("div",{className:"ball-shine"})]}),Object(b.jsxs)("div",{className:"ball ball4",children:[Object(b.jsx)("div",{className:"ball-first-color"}),Object(b.jsx)("div",{className:"ball-second-color"}),Object(b.jsx)("div",{className:"ball-third-color small"}),Object(b.jsx)("div",{className:"ball-shine"})]}),Object(b.jsxs)("div",{className:"ball ball5",children:[Object(b.jsx)("div",{className:"ball-first-color"}),Object(b.jsx)("div",{className:"ball-second-color"}),Object(b.jsx)("div",{className:"ball-third-color mid"}),Object(b.jsx)("div",{className:"ball-shine"})]}),Object(b.jsxs)("div",{className:"ball ball6",children:[Object(b.jsx)("div",{className:"ball-first-color"}),Object(b.jsx)("div",{className:"ball-second-color"}),Object(b.jsx)("div",{className:"ball-third-color small"}),Object(b.jsx)("div",{className:"ball-shine"})]}),Object(b.jsxs)("div",{className:"ball ball7",children:[Object(b.jsx)("div",{className:"ball-first-color"}),Object(b.jsx)("div",{className:"ball-second-color"}),Object(b.jsx)("div",{className:"ball-third-color smallest"}),Object(b.jsx)("div",{className:"ball-shine"})]})]})});var p=function(){var e=Object(i.useState)(!1),s=Object(n.a)(e,2),t=s[0],c=s[1],l=Object(i.useState)(0),a=Object(n.a)(l,2),r=a[0],o=a[1];return Object(i.useEffect)((function(){d()(".mainSlide").selfSlide()}),[]),Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("section",{className:"section section01",children:[Object(b.jsx)("div",{className:"main-visual",children:Object(b.jsx)(h,{pop:t,setPop:c,num:r,setNum:o})}),Object(b.jsx)(O,{})]}),Object(b.jsxs)("section",{class:"section section02",children:[Object(b.jsxs)("div",{class:"left-side",children:[Object(b.jsx)("h3",{class:"title",children:"Education"}),Object(b.jsxs)("div",{class:"edu-con",children:[Object(b.jsx)("p",{children:"\uc774 \uc0ac\uc774\ud2b8\uc5d0 \uc0ac\uc6a9\ub41c \uae30\uc220\uc744 \uc815\ub9ac\ud574 \ubcf4\uc558\uc2b5\ub2c8\ub2e4. \ub514\uc790\uc778\uacfc \ud37c\ube14\ub9ac\uc2f1\uc744 \ub118\uc5b4 \ud504\ub860\ud2b8\uc5d4\ub4dc\ub85c \uae30\uc220 \ud655\uc7a5\uc744 \ub3c4\ubaa8\ud558\uc5ec \ubcf4\ub2e4 \ub098\uc740 \uae30\uc220\ub85c \uba4b\uc9c4 \uc6f9\ud398\uc774\uc9c0\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\ub294 \uac83\uc774 \ubaa9\ud45c\uc785\ub2c8\ub2e4. \ud604\uc7ac\uc5d0 \uc548\uc8fc\ud558\uc9c0 \uc54a\uace0 \uafb8\uc900\ud558\uac8c \ubc1c\uc804\ud558\uae30 \uc704\ud574 \ubc30\uc6c0\uc744 \ub193\uc9c0 \uc54a\uace0 \uc788\uc2b5\ub2c8\ub2e4."}),Object(b.jsxs)("div",{class:"edu-button",children:[Object(b.jsx)("a",{class:"github",traget:"_blank",href:"https://github.com/annkim7"}),Object(b.jsx)("a",{class:"figma",traget:"_blank",href:"#"}),Object(b.jsx)("a",{class:"notion",traget:"_blank",href:"https://www.notion.so/N-Kim-a242915d7ffa463596860036bf7db6d5"})]})]})]}),Object(b.jsx)("div",{class:"right-side",children:Object(b.jsxs)("div",{class:"edu-box",children:[Object(b.jsx)("div",{class:"edu",children:"Javascript"}),Object(b.jsx)("div",{class:"edu",children:"SVG"}),Object(b.jsx)("div",{class:"edu",children:"Tweenmax"}),Object(b.jsx)("div",{class:"edu",children:"React"}),Object(b.jsx)("div",{class:"edu",children:"getJSON"}),Object(b.jsx)("div",{class:"edu",children:"Scss"})]})})]}),!0===t?Object(b.jsx)(x,{pop:t,setPop:c,num:r,setNum:o}):null]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,37)).then((function(s){var t=s.getCLS,i=s.getFID,c=s.getFCP,l=s.getLCP,a=s.getTTFB;t(e),i(e),c(e),l(e),a(e)}))},f=t(18);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(f.a,{children:Object(b.jsx)(p,{})})}),document.getElementById("root")),v()},7:function(e,s,t){}},[[35,1,2]]]);
//# sourceMappingURL=main.4b17193a.chunk.js.map