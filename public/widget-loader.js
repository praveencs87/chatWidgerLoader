const widgetUrl = `https://prod4.videocafe.biz/chatWidget-main/build/`;
const widgetUrl2 = `https://prod4.videocafe.biz/chatWidget-main/build/launcher`;
(()=>{document.currentScript;var e=2;let t=()=>{var t=!1;let i=document.createElement("div");i.id="widget-container";let n=i.style;n.display="none",n.boxSizing="border-box",n.width="420px",n.height="575px",n.position="absolute",n.bottom="10px",n.right="40px";let a=document.createElement("a");a.id="____vcexpand_btn",i.appendChild(a);var o=document.createElement("i");o.setAttribute("class","fas fa-expand"),a.appendChild(o),a.addEventListener("click",()=>{var t=document.getElementById("widget-container");2==e?(t.style.width="50%",t.style.height="575px",t.style.position="absolute",n.bottom="10px",n.right="40px",e=1):1==e?(t.style.width="calc(100% - 80px)",t.style.height="575px",t.style.position="absolute",t.style.bottom="10px",t.style.right="40px",e=0):0==e&&(t.style.width="420px",t.style.height="575px",t.style.position="absolute",t.style.bottom="10px",t.style.right="40px",e=2)});let l=document.createElement("a");l.id="____vcclosebtn",i.appendChild(l),l.addEventListener("click",()=>{var e;document.getElementById("widget-launcher-container").style.display="block",n.display="none",t=!1});var r=document.createElement("i");r.setAttribute("class","fa fa-times"),l.appendChild(r);let d=document.createElement("iframe");d.id="iframe-element";let s=d.style;s.boxSizing="borderBox",s.position="absolute",s.right=0,s.top=0,s.width="100%",s.height="100%",s.border=0,s.margin=0,s.padding=0,i.appendChild(d),d.src=widgetUrl,document.body.appendChild(i);let c=document.createElement("div");c.id="widget-launcher-container";let p=c.style;p.boxSizing="border-box",p.width="60px",p.height="60px",p.position="absolute",p.bottom="10px",p.right="40px",p.background="rgb(255, 255, 255)",p.overflow="hidden",p.borderRadius="40px",p.boxShadow="0 0 10px rgba(0, 0, 0, 0.2)";let h=document.createElement("iframe");h.id="iframelauncher-element";let $=h.style;$.boxSizing="borderBox",$.position="absolute",$.right=0,$.top=0,$.width="100%",$.height="100%",$.border=0,$.margin=0,$.padding=0,c.appendChild(h),h.src=widgetUrl2,h.addEventListener("load",function(){p.display="block"}),h.addEventListener("click",function(e){e.stopPropagation()}),document.body.appendChild(c);let m=document.createElement("div");function b(){var e=document.getElementById("widget-container");t?(e.style.display="none",t=!1):(e.style.display="block",t=!0)}if(m.id="widget-launcher-mask",(constlaunchermaskStyle=m.style).position="absolute",constlaunchermaskStyle.width="100%",constlaunchermaskStyle.height="100%",constlaunchermaskStyle.cursor="pointer",constlaunchermaskStyle.backgroundColor="rgba(0, 0, 0, 0)",c.appendChild(m),m.addEventListener("click",function(){document.getElementById("widget-container"),c.style.display="none"}),m.addEventListener("click",b),!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"]')){var g=document.createElement("link");g.rel="stylesheet",g.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css",document.head.appendChild(g)}var y=document.createElement("style");y.textContent=`
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
a#____vcclosebtn,a#____vcexpand_btn {
position: absolute;
right: 23px;
top: 66px;
color: #fff;
z-index: 999999;
cursor: pointer;
}
a#____vcexpand_btn {
  right: 55px;
}
#widget-launcher-container:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;

}

   @media screen and (max-width: 480px) {
    #widget-container {
     width:100%!important;
     position:absolute!important;
     bottom:0!important;
     right:0!important;
    }
  }
`,document.head.appendChild(y)};function i(){var e=document.getElementById("iframe-element").contentWindow.document.body.scrollHeight,t=document.getElementById("widget-container");e>0&&(t.style.height=e+"px")}"complete"===document.readyState?t():document.addEventListener("readystatechange",()=>{if("complete"===document.readyState){t();var e,n=document.getElementById("iframe-element");new MutationObserver(i).observe(n.contentWindow.document.body,{childList:!0,subtree:!0}),i()}})})();