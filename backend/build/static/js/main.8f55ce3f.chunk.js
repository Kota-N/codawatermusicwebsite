(this.webpackJsonpcodawatermusicwebsite=this.webpackJsonpcodawatermusicwebsite||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.cb07c0b9.png"},,,,,,,,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),l=a.n(r),o=(a(30),a(31),a(32),a(33),a(34),a(35),a(36),a(37),a(38),a(39),a(40),a(41),a(42),a(43),a(44),a(45),a(1)),i=a(2),s=function(e){return function(t){fetch("/api/items/music?page=".concat(e)).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_ITEMS",payload:e})}))}},u=function(){return function(e){fetch("/api/items/music/all").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_INDEX",payload:t.reverse()})}))}},m=function(e){var t=e.item,a=Object(i.c)((function(e){return e.id})),r=Object(i.c)((function(e){return e.isPlaying})),l=t.title,s=t.mp3Url,u=t._id,m=t.imgUrl,E=t.genre;Object(n.useEffect)((function(){var e=document.querySelector("#id".concat(a[1])),t=document.querySelector("#id".concat(a[0]));a[0]?e&&t?a[0]!==a[1]?r?(e.classList.add("playing"),t.classList.remove("playing")):e.classList.remove("playing"):a[0]===a[1]&&(r?e.classList.add("playing"):e.classList.remove("playing")):e&&(r?e.classList.add("playing"):e.classList.remove("playing")):a[1]&&!a[0]&&e&&(r?e.classList.add("playing"):e.classList.remove("playing"))}),[r,a]);var d=Object(i.b)();return c.a.createElement("div",{id:"id".concat(u),alt:"playButton",onClick:function(){d(function(e){return{type:"CURRENT_MUSIC",payload:e}}(s)),d({type:"GET_ID",payload:u}),d({type:"TOGGLE_CARD_CLICK"}),d(function(e){return{type:"SET_CARD_DATA",payload:e}}(t))},className:"card",title:"Play"},c.a.createElement("div",{className:"img-container"},c.a.createElement("h2",{className:"card-genre"},E),c.a.createElement("img",{className:"card-img",src:m,alt:"Genre"})),c.a.createElement("div",{className:"card-title"},c.a.createElement(o.b,{to:{pathname:"/music/description/".concat(l.split(" ").join("-")),state:t},onClick:function(e){return e.stopPropagation()}},c.a.createElement("h3",{title:l},l))),c.a.createElement("i",{onClick:function(e){e.stopPropagation(),d({type:"DL_CLICK",payload:s})},title:"Download",className:"fas fa-download"}),c.a.createElement("div",{className:"vinyl-player"},c.a.createElement("div",{className:"vinyl ball"}),c.a.createElement("div",{className:"vinyl rectangle"}),c.a.createElement("div",{className:"vinyl needle"}),c.a.createElement("div",{className:"vinyl needle2"}),c.a.createElement("i",{className:"fas fa-compact-disc"})))},E=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.index.allData}));return Object(n.useEffect)((function(){return e(u())}),[e]),c.a.createElement("div",{className:"home"},c.a.createElement("h2",{className:"home-text"},c.a.createElement(o.b,{to:"/music"},"Royalty-Free Music")),c.a.createElement("h3",null,"by CodaWaterMusic"),t[0]?c.a.createElement("div",{className:"new-arrival"},c.a.createElement("p",{className:"new"},"NEW"),c.a.createElement(m,{item:t[0]}),c.a.createElement(o.b,{className:"new-arrival-link",to:"/music"},c.a.createElement("p",null,"View All")," ",c.a.createElement("i",{className:"fas fa-angle-double-down"}))):"",c.a.createElement("div",{className:"genre-buttons"},c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/piano/page=1"},"PIANO")),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/electronic/page=1"},"ELECTRONIC")),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/cinematic/page=1"},"CINEMATIC")),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/corporate/page=1"},"CORPORATE")),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/acoustic/page=1"},"ACOUSTIC")),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/rock/page=1"},"ROCK")),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/pop/page=1"},"POP")),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/genre/game-8bit/page=1"},"GAME/8BIT"))))},d=a(5),p=function(e){var t=e.currentMinute,a=e.currentSecond,n=e.totalMinute,r=e.totalSecond;return c.a.createElement("p",{className:"time-display"},t,":",a<=9+60*t?"0"+(a-60*t):a-60*t,"/",n,":",r<=9?"0"+r:r)},f=function(e){var t=e.currentProgressPercent,a=e.currentUrl,n=e.updateProgress;return c.a.createElement("div",{className:"progress-background"},c.a.createElement("div",{style:{width:t},className:"progress"},c.a.createElement("div",{onClick:function(e){a&&n(e)},className:"progress-hoverarea"})))},g=function(e){var t=e.audio,a=e.volumeRangeValue,r=e.changeVolume,l=e.toggleMute,o=e.isMuted,s=Object(i.b)(),u=Object(i.c)((function(e){return e.isPlaying})),m=Object(i.c)((function(e){return e.cardData})),E=document.querySelector(".marquee-p");return Object(n.useEffect)((function(){E&&(u?E.classList.add("scrolling"):u||E.classList.remove("scrolling"))}),[u,E]),c.a.createElement("div",{className:"controls"},m.title?c.a.createElement("div",{className:"marquee"},c.a.createElement("p",{className:"marquee-p"},m.title," - ",m.artist)):c.a.createElement("div",{className:"marquee"},c.a.createElement("p",null)),u?c.a.createElement("i",{onClick:function(){t&&s({type:"PAUSED"}),t&&t.pause()},className:"fas fa-pause"}):c.a.createElement("i",{onClick:function(){t&&s({type:"PLAYED"}),t&&t.play()},className:"fa fa-play"}),o?c.a.createElement("i",{onClick:l,className:"volume fas fa-volume-mute"}):a<1?c.a.createElement("i",{onClick:l,className:"volume fas fa-volume-off"}):a<=45?c.a.createElement("i",{onClick:l,className:"volume fas fa-volume-down"}):c.a.createElement("i",{onClick:l,className:"volume fas fa-volume-up"}),c.a.createElement("div",{className:"volume-slider"},c.a.createElement("div",{className:"volume-background"},c.a.createElement("div",{style:{width:"".concat(a,"%")},className:"volume-fill"}),c.a.createElement("input",{type:"range",value:a,onChange:function(e){return r(e)}}))))},b=function(){var e=Object(i.c)((function(e){return e.url})),t=Object(i.c)((function(e){return e.cardClick})),a=Object(i.c)((function(e){return e.cardData})),r=Object(i.b)(),l=document.querySelector("audio"),o=Object(n.useState)("100%"),s=Object(d.a)(o,2),u=s[0],m=s[1],E=Object(n.useState)(0),b=Object(d.a)(E,2),h=b[0],v=b[1],N=Object(n.useState)(0),y=Object(d.a)(N,2),O=y[0],j=y[1],C=Object(n.useState)(0),w=Object(d.a)(C,2),k=w[0],L=w[1],P=Object(n.useState)(0),S=Object(d.a)(P,2),T=S[0],A=S[1],D=Object(n.useState)(100),_=Object(d.a)(D,2),I=_[0],M=_[1],x=Object(n.useState)(!1),R=Object(d.a)(x,2),U=R[0],G=R[1],W=Object(n.useState)(1),q=Object(d.a)(W,2),Y=q[0],V=q[1];return Object(n.useEffect)((function(){l&&l.paused&&(l.play(),r({type:"PLAYED"}))}),[r,t,l]),Object(n.useEffect)((function(){window.addEventListener("keydown",(function(e){"Space"===e.code&&(e.preventDefault(),l&&(l.paused?l.paused&&(l.play(),r({type:"PLAYED"})):(l.pause(),r({type:"PAUSED"}))))}))}),[r,l]),c.a.createElement("div",{className:"music-player"},c.a.createElement(f,{currentProgressPercent:u,currentUrl:e,updateProgress:function(e){var t=e.target.clientWidth,a=e.pageX;l.currentTime=a/t*l.duration}}),c.a.createElement(p,{currentMinute:O,currentSecond:h,totalMinute:k,totalSecond:T}),c.a.createElement("audio",{onCanPlay:function(){L(Math.floor(l.duration/60)),A(Math.floor(l.duration)-60*Math.floor(l.duration/60))},onTimeUpdate:function(){m("".concat(l.currentTime/l.duration*100,"%")),v(Math.floor(l.currentTime)),j(Math.floor(l.currentTime/60)),l.paused?r({type:"PAUSED"}):r({type:"PLAYED"}),l.currentTime===l.duration&&(l.pause(),r({type:"PAUSED"}))},src:e}),c.a.createElement("p",{className:"title-genre"},a.title),c.a.createElement(g,{audio:l,volumeRangeValue:I,changeVolume:function(e){l&&(M(e.target.value),l.volume=I/100,V(I/100),G(!1),l.muted=!1)},toggleMute:function(){l&&(l.muted?(G(!1),l.muted=!1,M(100*Y),l.volume=Y):l.muted||(G(!0),l.muted=!0,M(0)))},isMuted:U}))},h=a(16),v=a.n(h),N=function(){return c.a.createElement("div",{className:"nav"},c.a.createElement("div",{className:"top-border"}),c.a.createElement("div",{className:"logo-title"},c.a.createElement(o.b,{to:"/"},c.a.createElement("img",{className:"logo",src:v.a,alt:"Logo"})),c.a.createElement("h1",null,c.a.createElement(o.b,{to:"/"},"CodaWaterMusic"))),c.a.createElement("div",{className:"menu"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/music"},"MUSIC")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/license"},"LICENSE")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/contact"},"CONTACT")))),c.a.createElement(b,null))},y=function(){return c.a.createElement("img",{className:"background-logo",src:v.a,alt:"Logo"})},O=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.dlClick.dlUrl}));return c.a.createElement("div",{className:"download",onClick:function(){e({type:"DL_EXIT"})}},c.a.createElement("div",{className:"download-background",onClick:function(e){return e.stopPropagation()}},c.a.createElement("p",{className:"free-download"},"Free Download"),c.a.createElement("i",{className:"fas fa-times",onClick:function(t){t.stopPropagation(),e({type:"DL_EXIT"})}}),c.a.createElement("div",{className:"download-btn"},c.a.createElement("a",{href:t},c.a.createElement("div",{className:"download-mp3 download-option"},c.a.createElement("i",{className:"fas fa-download"}),c.a.createElement("h3",null,"mp3"))),c.a.createElement("div",{className:"download-wav download-option"},c.a.createElement("h3",{style:{textDecoration:"line-through #c720ab 3px"}},"wav"),c.a.createElement("p",null,"Coming Soon!"))),c.a.createElement("p",null,"Wave version will be available soon!")))},j=function(e){var t=e.placeholder,a=Object(n.useState)(t||""),r=Object(d.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)(document.querySelector(".search-btn")),u=Object(d.a)(s,2),m=u[0],E=u[1];return Object(n.useEffect)((function(){t&&i(t)}),[t]),Object(n.useEffect)((function(){E(document.querySelector(".search-btn"))}),[l]),c.a.createElement("div",{className:"search"},c.a.createElement("input",{onKeyDown:function(e){return function(e){e.stopPropagation(),"Enter"===e.key&&m&&l&&m.click()}(e)},onChange:function(e){return function(e){i(e.target.value)}(e)},value:l,type:"text"}),l?c.a.createElement("p",null,"Search"):c.a.createElement("p",{className:"search-placeholder"},"Search"),c.a.createElement("div",{className:"search-underline"}),l.trim()?c.a.createElement(o.b,{className:"search-btn",to:"/music/search/".concat(l.split(" ").filter((function(e){return""!==e})).join("-"),"/page=1")},c.a.createElement("i",{className:"fas fa-search"})):c.a.createElement("i",{className:"fas fa-search"}))},C=function(){return c.a.createElement("h3",null,"Not Found")},w=function(){var e=Object(i.c)((function(e){return e.data.items})),t=Object(i.c)((function(e){return e.index.allData.length})),a=Object(i.c)((function(e){return e.dlClick})),r=Object(i.b)();return Object(n.useEffect)((function(){r(s(1)),r(u())}),[r]),Object(n.useEffect)((function(){return window.scrollTo(0,0)}),[]),0===t?c.a.createElement(C,null):c.a.createElement("div",{className:"music"},a.dlPopup?c.a.createElement(O,{dlUrl:a.dlUrl}):"",c.a.createElement(j,null),c.a.createElement("div",{className:"card-container"},e.map((function(e){return c.a.createElement(m,{key:e._id,item:e})}))),t<=12?c.a.createElement("div",{className:"pagination"}," ",c.a.createElement("p",null,"1 - ".concat(t," of ").concat(t))):c.a.createElement("div",{className:"pagination"}," ",c.a.createElement("p",null,"1 - 12 of ".concat(t)),c.a.createElement(o.b,{to:"/music/page=".concat(2)},c.a.createElement("div",{className:"next-page"},"Next"))))},k=function(){return c.a.createElement("div",{className:"license"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("h3",null,"CREATIVE COMMONS LICENSE")),c.a.createElement("li",null,c.a.createElement("a",{href:"http://creativecommons.org/licenses/by/4.0/",target:"_blank"},"Creative Commons Attribution 4.0 International License")),c.a.createElement("li",null,"What does this mean?",c.a.createElement("br",null),"Simply put, you can use my music as long as you don't claim it to be yours."),c.a.createElement("li",null,c.a.createElement("span",null,"You CAN:"),c.a.createElement("br",null),"Download and use music on this website for your YouTube Channel, social media, website, presentation, animation, film, shop, etc."),c.a.createElement("li",null,c.a.createElement("span",null,"You CANNOT:"),c.a.createElement("br",null),"Claim my music as yours.")),c.a.createElement("hr",null),c.a.createElement("ul",null,c.a.createElement("li",null,"When using my music, it'll help me if you can credit this website by providing the link."),c.a.createElement("li",null,"You don't need to ask for permission, but I'd always be happy to"," ",c.a.createElement(o.b,{to:"/contact"},"hear from you")," how my music could help you create better content!"),c.a.createElement("li",null,"If you have questions, please ",c.a.createElement(o.b,{to:"/contact"},"contact me"),".")))},L=function(){return c.a.createElement("div",{className:"contact"},c.a.createElement("h3",null,"CONTACT"),c.a.createElement("h4",null,"contact@codawatermusic.com"))},P=function(e){var t=e.pageNumber,a=e.indexLength,n=Object(i.b)();return c.a.createElement("div",{className:"pagination"},c.a.createElement(o.b,{to:"/music/page=".concat(t-1),onClick:function(){return n({type:"PREV_PAGE"})}},c.a.createElement("div",{className:"prev-page"},"Previous")),c.a.createElement("p",null,"".concat(12*t-11," - ").concat(a," of ").concat(a)))},S=function(e){var t=e.pageNumber,a=e.indexLength,n=Object(i.b)();return c.a.createElement("div",{className:"pagination"},c.a.createElement(o.b,{to:"/music/page=".concat(t-1),onClick:function(){return n({type:"PREV_PAGE"})}},c.a.createElement("div",{className:"prev-page"},"Previous")),c.a.createElement("p",null,"".concat(12*t-11," - ").concat(12*t," of ").concat(a)),c.a.createElement(o.b,{to:"/music/page=".concat(t+1),onClick:function(){return n({type:"NEXT_PAGE"})}},c.a.createElement("div",{className:"next-page"},"Next")))},T=function(e){var t=e.match,a=Object(i.c)((function(e){return e.data.items})),r=Object(i.c)((function(e){return e.index.allData.length})),l=Object(i.c)((function(e){return e.dlClick})),o=Object(i.b)(),E=Number(t.params.pageNumber.slice(5));return Object(n.useEffect)((function(){o(u()),!Number.isNaN(E)&&0!==E&&E<=Math.ceil(r/12)&&o(s(E))}),[o,E,r]),Object(n.useEffect)((function(){return window.scrollTo(0,0)}),[E]),Number.isNaN(E)||0===E||1!==Math.sign(E)?c.a.createElement(C,null):1===E?c.a.createElement(w,null):E<=Math.ceil(r/12)?c.a.createElement("div",{className:"music"},l.dlPopup?c.a.createElement(O,{dlUrl:l.dlUrl}):"",c.a.createElement(j,null),c.a.createElement("div",{className:"card-container"},a.map((function(e){return c.a.createElement(m,{key:e._id,item:e})}))),E===Math.ceil(r/12)?c.a.createElement(P,{pageNumber:E,indexLength:r}):c.a.createElement(S,{pageNumber:E,indexLength:r})):c.a.createElement(C,null)},A=function(e){var t=e.genreItems,a=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement("p",null,"".concat(12*a-11," - ").concat(t.length," of ").concat(t.length)))},D=function(e){var t=e.paramGenre,a=e.genreItems,n=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement("p",null,"".concat(12*n-11," - ").concat(12*n," of ").concat(a.length)),c.a.createElement(o.b,{to:"/music/genre/".concat(t,"/page=").concat(n+1)},c.a.createElement("div",{className:"next-page"},"Next")))},_=function(e){var t=e.paramGenre,a=e.genreItems,n=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement(o.b,{to:"/music/genre/".concat(t,"/page=").concat(n-1)},c.a.createElement("div",{className:"prev-page"},"Previous")),c.a.createElement("p",null,"".concat(12*n-11," - ").concat(a.length," of ").concat(a.length)))},I=function(e){var t=e.paramGenre,a=e.genreItems,n=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement(o.b,{to:"/music/genre/".concat(t,"/page=").concat(n-1)},c.a.createElement("div",{className:"prev-page"},"Previous")),c.a.createElement("p",null,"".concat(12*n-11," - ").concat(12*n," of ").concat(a.length)),c.a.createElement(o.b,{to:"/music/genre/".concat(t,"/page=").concat(n+1)},c.a.createElement("div",{className:"next-page"},"Next")))},M=function(e){var t=e.match,a=Object(i.b)(),r=Object(i.c)((function(e){return e.index.allData})),l=Object(i.c)((function(e){return e.dlClick})),o=Object(n.useState)([]),s=Object(d.a)(o,2),E=s[0],p=s[1],f=Object(n.useState)([]),g=Object(d.a)(f,2),b=g[0],h=g[1],v=t.params.genre,N=Number(t.params.pageNumber.slice(5));return Object(n.useEffect)((function(){return a(u())}),[a]),Object(n.useEffect)((function(){p(r.filter((function(e){return e.genre.toLowerCase().includes(v.toLowerCase().split("-").join("/"))})))}),[r,v]),Object(n.useEffect)((function(){!function(e){var t=E.filter((function(t,a){return a>=12*e-12&&a<12*e}));h(t)}(N)}),[E,N]),Object(n.useEffect)((function(){return window.scrollTo(0,0)}),[N]),0===E.length||Number.isNaN(N)||0===N||1!==Math.sign(N)?c.a.createElement(C,null):c.a.createElement("div",{className:"music"},l.dlPopup?c.a.createElement(O,{dlUrl:l.dlUrl}):"",c.a.createElement(j,{placeholder:""}),c.a.createElement("div",{className:"card-container"},b.map((function(e){return c.a.createElement(m,{key:e._id,item:e})}))),1===Math.ceil(E.length/12)?c.a.createElement(A,{genreItems:E,pageNumber:N}):N===Math.ceil(E.length/12)?c.a.createElement(_,{paramGenre:v,genreItems:E,pageNumber:N}):1===N?c.a.createElement(D,{paramGenre:v,genreItems:E,pageNumber:N}):c.a.createElement(I,{paramGenre:v,genreItems:E,pageNumber:N}))},x=function(e){var t=e.searchWords,a=e.pageItems;return c.a.createElement("div",{className:"music"},c.a.createElement(j,{placeholder:t.split("-").join(" ")}),c.a.createElement("p",{className:"search-keyword"},"Search: ",t.split("-").join(", ").toLowerCase()),c.a.createElement("div",{className:"card-container"},a.map((function(e){return c.a.createElement(m,{key:e._id,item:e})}))))},R=function(e){var t=e.searchResult,a=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement("p",null,"".concat(12*a-11," - ").concat(t.length," of ").concat(t.length)))},U=function(e){var t=e.searchWords,a=e.searchResult,n=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement(o.b,{to:"/music/search/".concat(t,"/page=").concat(n-1)},c.a.createElement("div",{className:"prev-page"},"Previous")),c.a.createElement("p",null,"".concat(12*n-11," - ").concat(a.length," of ").concat(a.length)))},G=function(e){var t=e.searchWords,a=e.searchResult,n=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement("p",null,"".concat(12*n-11," - ").concat(12*n," of ").concat(a.length)),c.a.createElement(o.b,{to:"/music/search/".concat(t,"/page=").concat(n+1)},c.a.createElement("div",{className:"next-page"},"Next")))},W=function(e){var t=e.searchWords,a=e.searchResult,n=e.pageNumber;return c.a.createElement("div",{className:"pagination"},c.a.createElement(o.b,{to:"/music/search/".concat(t,"/page=").concat(n-1)},c.a.createElement("div",{className:"prev-page"},"Previous")),c.a.createElement("p",null,"".concat(12*n-11," - ").concat(12*n," of ").concat(a.length)),c.a.createElement(o.b,{to:"/music/search/".concat(t,"/page=").concat(n+1)},c.a.createElement("div",{className:"next-page"},"Next")))},q=function(e){var t=e.match,a=Object(i.b)(),r=Object(i.c)((function(e){return e.index.allData})),l=Object(i.c)((function(e){return e.searchResult})),o=Object(i.c)((function(e){return e.dlClick})),s=Object(n.useState)([]),E=Object(d.a)(s,2),p=E[0],f=E[1],g=Number(t.params.pageNumber.slice(5)),b=t.params.searchWords;return Object(n.useEffect)((function(){a(u())}),[a]),Object(n.useEffect)((function(){!function(){for(var e=r,t=function(t){e=e.filter((function(e){return e.title.toLowerCase().includes(b.split("-")[t].toLowerCase())||e.genre.toLowerCase().includes(b.split("-")[t].toLowerCase())||e.artist.toLowerCase().includes(b.split("-")[t].toLowerCase())||e.tags.toLowerCase().includes(b.split("-")[t].toLowerCase())}))},n=0;n<b.split("-").length;n++)t(n);a({type:"SET_SEARCH_RESULT",payload:e})}()}),[a,b,r]),Object(n.useEffect)((function(){!function(e){var t=l.filter((function(t,a){return a>=12*e-12&&a<12*e}));f(t)}(g)}),[l,g]),Object(n.useEffect)((function(){return window.scrollTo(0,0)}),[g]),0===l.length?c.a.createElement(x,{searchWords:b,pageItems:p}):Number.isNaN(g)||0===g||1!==Math.sign(g)?c.a.createElement(C,null):c.a.createElement("div",{className:"music"},o.dlPopup?c.a.createElement(O,{dlUrl:o.dlUrl}):"",c.a.createElement(j,{placeholder:b.split("-").join(" ")}),c.a.createElement("p",{className:"search-keyword"},"Search:",b.split("-").join(", ").toLowerCase()),c.a.createElement("div",{className:"card-container"},p.map((function(e){return c.a.createElement(m,{key:e._id,item:e})}))),1===Math.ceil(l.length/12)?c.a.createElement(R,{searchResult:l,pageNumber:g}):g===Math.ceil(l.length/12)?c.a.createElement(U,{searchWords:b,searchResult:l,pageNumber:g}):1===g?c.a.createElement(G,{searchWords:b,searchResult:l,pageNumber:g}):c.a.createElement(W,{searchWords:b,searchResult:l,pageNumber:g}))},Y=function(e){var t=e.location.state,a=Object(i.c)((function(e){return e.dlClick}));return Object(n.useEffect)((function(){return window.scrollTo(0,0)}),[]),c.a.createElement("div",{className:"description"},a.dlPopup?c.a.createElement(O,{dlUrl:a.dlUrl}):"",c.a.createElement("div",{className:"description-container"},c.a.createElement(m,{item:t}),c.a.createElement("div",{className:"about-track"},c.a.createElement("h3",{className:"track-title"},t.title),c.a.createElement("h3",null,c.a.createElement(o.b,{to:"/music/search/".concat(t.artist,"/page=1")},t.artist)),c.a.createElement("h3",null,t.genre.includes("/")?c.a.createElement(o.b,{to:"/music/search/".concat(t.genre.split("/").join("-"),"/page=1")},t.genre):c.a.createElement(o.b,{to:"/music/search/".concat(t.genre,"/page=1")},t.genre)),c.a.createElement("p",null,t.description))),c.a.createElement("div",{className:"tags"},c.a.createElement("h4",null,"Tags: "),c.a.createElement("div",{className:"tag-name"},t.tags.split(", ").map((function(e){return c.a.createElement(o.b,{key:e,to:"/music/search/".concat(e,"/page=1")},e)})))))},V=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"footer-menu"},c.a.createElement("ul",null,c.a.createElement(o.b,{to:"/music"},c.a.createElement("li",null,"Music")),c.a.createElement(o.b,{to:"/license"},c.a.createElement("li",null,"License")),c.a.createElement(o.b,{to:"/contact"},c.a.createElement("li",null,"Contact")))),c.a.createElement("div",{className:"sns-links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.youtube.com/channel/UCzWtkkio1ejAFoJn1TsLPfA/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-youtube"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.instagram.com/codawatermusic/",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("i",{className:"fab fa-instagram"}))))),c.a.createElement("div",{className:"copyright"},c.a.createElement("p",null,"2020\xa9CodaWaterMusic")),c.a.createElement("div",{className:"extra-padding"}))},F=a(4),X=a(10),H=a(24),K=a(12),B={items:[]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ITEMS":return Object(K.a)(Object(K.a)({},e),{},{items:t.payload});default:return e}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEXT_PAGE":return e+1;case"PREV_PAGE":return e-1;default:return e}},$={allData:[]},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_INDEX":return Object(K.a)(Object(K.a)({},e),{},{allData:t.payload});default:return e}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CURRENT_MUSIC":return t.payload;default:return e}},ee=["",""],te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ID":return e.filter((function(e,t){return 1===t})).concat(t.payload);default:return e}},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_PLAY_STATE":return!e;case"PLAYED":return!0;case"PAUSED":return!1;default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_CARD_CLICK":return!e;default:return e}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CARD_DATA":return t.payload;default:return e}},re={dlPopup:!1,dlUrl:""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DL_CLICK":return{dlPopup:!0,dlUrl:t.payload};case"DL_EXIT":return{dlPopup:!1,dlUrl:""};default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SEARCH_RESULT":return t.payload;default:return e}},ie=Object(X.c)({data:J,page:z,index:Q,url:Z,id:te,isPlaying:ae,cardClick:ne,cardData:ce,dlClick:le,searchResult:oe}),se=[H.a],ue=Object(X.d)(ie,{},X.a.apply(void 0,se));var me=function(){return c.a.createElement(i.a,{store:ue},c.a.createElement(o.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(N,null),c.a.createElement(y,null),c.a.createElement(F.c,null,c.a.createElement(F.a,{exact:!0,path:"/",component:E}),c.a.createElement(F.a,{exact:!0,path:"/music",component:w}),c.a.createElement(F.a,{exact:!0,path:"/license",component:k}),c.a.createElement(F.a,{exact:!0,path:"/contact",component:L}),c.a.createElement(F.a,{exact:!0,path:"/music/:pageNumber",component:T}),c.a.createElement(F.a,{exact:!0,path:"/music/genre/:genre/:pageNumber",component:M}),c.a.createElement(F.a,{exact:!0,path:"/music/description/:title",component:Y}),c.a.createElement(F.a,{exact:!0,path:"/music/search/:searchWords/:pageNumber",component:q}),c.a.createElement(F.a,{component:C})),c.a.createElement(V,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[25,1,2]]]);
//# sourceMappingURL=main.8f55ce3f.chunk.js.map