const widgetUrl = `http://localhost:3001`;
const widgetUrl2 = `http://localhost:3001/launcher`;

(() => {
    
  const script = document.currentScript;
  var expand = 2
  const loadWidget = () => {
    //  alert(window.__be.id)
    var iswidget=false;

      const widget= document.createElement("div");
      widget.id = "widget-container";

      const widgetStyle = widget.style;
      widgetStyle.display = "none";
      widgetStyle.boxSizing = "border-box";
      widgetStyle.width = "420px";
      widgetStyle.height = "575px";
      widgetStyle.position = "absolute";
      widgetStyle.bottom = "10px";
      widgetStyle.right = "40px";
  

      const expandbtn= document.createElement("a");
      expandbtn.id = "____vcexpand_btn";
      widget.appendChild(expandbtn);
      var iconexpandElement = document.createElement("i");
      iconexpandElement.setAttribute("class", "fas fa-expand");
      expandbtn.appendChild(iconexpandElement);
      expandbtn.addEventListener("click", () => {
        var parentDiv = document.getElementById("widget-container");
        if(expand == 2){
          parentDiv.style.width = "50%";
          parentDiv.style.height = "575px";
          parentDiv.style.position = "absolute";
          widgetStyle.bottom = "10px";
          widgetStyle.right = "40px";
          expand = 1;
        }else if(expand == 1){
          parentDiv.style.width = "calc(100% - 80px)";
          parentDiv.style.height = "575px";
          parentDiv.style.position = "absolute";
          parentDiv.style.bottom = "10px";
          parentDiv.style.right = "40px";
          expand = 0;
        } else if(expand == 0){
          parentDiv.style.width = "420px";
          parentDiv.style.height = "575px";
          parentDiv.style.position = "absolute";
          parentDiv.style.bottom = "10px";
          parentDiv.style.right = "40px";
          expand =2;
        }  
      });


      const buttonLink = document.createElement("a");
      buttonLink.id = "____vcclosebtn";
      widget.appendChild(buttonLink);
      buttonLink.addEventListener("click", () => {
        var launchercont = document.getElementById("widget-launcher-container");
        launchercont.style.display = "block";
        widgetStyle.display = "none"
        iswidget=false;
      }  );

      var iconElement = document.createElement("i");
      iconElement.setAttribute("class", "fa fa-times");
      buttonLink.appendChild(iconElement);






      const iframe = document.createElement("iframe");
      iframe.id = "iframe-element";

      const iframeStyle = iframe.style;
      iframeStyle.boxSizing = "borderBox";
      iframeStyle.position = "absolute";
      iframeStyle.right = 0;
      iframeStyle.top = 0;
      iframeStyle.width = "100%";
      iframeStyle.height = "100%";
      iframeStyle.border = 0;
      iframeStyle.margin = 0;
      iframeStyle.padding = 0;
      // iframeStyle.width = "500px";

      widget.appendChild(iframe);
      
      //iframe.addEventListener("load", () => widgetStyle.display = "block" );
      //iframe.addEventListener("load", () => resizeIframe());

      
      iframe.src = widgetUrl;

      document.body.appendChild(widget);

    


     



      const launcherwidget = document.createElement("div");
      launcherwidget.id = "widget-launcher-container";
      
      const launcherwidgetStyle = launcherwidget.style;
      launcherwidgetStyle.boxSizing = "border-box";
      launcherwidgetStyle.width = "60px";
      launcherwidgetStyle.height = "60px";
      launcherwidgetStyle.position = "absolute";
      launcherwidgetStyle.bottom = "10px";
      launcherwidgetStyle.right = "40px";
      launcherwidgetStyle.background="rgb(255, 255, 255)";
      launcherwidgetStyle.overflow= "hidden";
      launcherwidgetStyle.borderRadius= "40px";
      launcherwidgetStyle.boxShadow="0 0 10px rgba(0, 0, 0, 0.2)";


      const iframelauncher = document.createElement("iframe");
      iframelauncher.id = "iframelauncher-element";
      
      const iframelauncherStyle = iframelauncher.style;
      iframelauncherStyle.boxSizing = "borderBox";
      iframelauncherStyle.position = "absolute";
      iframelauncherStyle.right = 0;
      iframelauncherStyle.top = 0;
      iframelauncherStyle.width = "100%";
      iframelauncherStyle.height = "100%";
      iframelauncherStyle.border = 0;
      iframelauncherStyle.margin = 0;
      iframelauncherStyle.padding = 0;
      
      launcherwidget.appendChild(iframelauncher);
      
      iframelauncher.src = widgetUrl2;
      
      iframelauncher.addEventListener("load", function() {
        launcherwidgetStyle.display = "block";
      });
      
      iframelauncher.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent click event from bubbling up to the parent div
      });
      

      
     
      

   
      document.body.appendChild(launcherwidget);
      
      const launchermask = document.createElement("div");
      launchermask.id = "widget-launcher-mask";
      constlaunchermaskStyle = launchermask.style;
      constlaunchermaskStyle.position = "absolute";
      constlaunchermaskStyle.width = "100%";
      constlaunchermaskStyle.height = "100%";
      constlaunchermaskStyle.cursor = "pointer";

      constlaunchermaskStyle.backgroundColor ="rgba(0, 0, 0, 0)";
      launcherwidget.appendChild(launchermask);


     
      launchermask.addEventListener("click", function() {
       // alert("You clicked the launcherwidget!");
        var parentDiv = document.getElementById("widget-container");
       launcherwidget.style.display = "none";

      //  parentDiv.style.display = "block";
      });
      launchermask.addEventListener("click", toggleMask);

      function toggleMask() {
        var parentDiv = document.getElementById("widget-container");
        if (iswidget) {
          parentDiv.style.display = "none";
          iswidget = false;
        } else {
          parentDiv.style.display = "block";
          iswidget = true;
        }
      }
      
      










    // Check if Font Awesome is already added to the document
if (!document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"]')) {

// Create a new link element for Font Awesome
var linkElement = document.createElement("link");

// Set the attributes of the link element
linkElement.rel = "stylesheet";
linkElement.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

// Append the link element to the head section of the document
document.head.appendChild(linkElement);
}

   
// Create a new style element
var newStyle = document.createElement("style");

// Set the text content of the style element
newStyle.textContent = `
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
`;

// Append the style element to the head section of the document
document.head.appendChild(newStyle);
  
  

}
  
   
  function resizeIframe() {
    var iframe = document.getElementById("iframe-element");
    var iframeHeight = iframe.contentWindow.document.body.scrollHeight;
    //alert(iframeHeight);
    var parentDiv = document.getElementById("widget-container");
    if(iframeHeight > 0)
    parentDiv.style.height = iframeHeight + "px";
  }



  
  if ( document.readyState === "complete" ) {
      loadWidget();
  } else {
      document.addEventListener("readystatechange", () => {
          if ( document.readyState === "complete" ) {
            loadWidget();
              var iframe = document.getElementById("iframe-element");
              var observer = new MutationObserver(resizeIframe);
              observer.observe(iframe.contentWindow.document.body, { childList: true, subtree: true });
              resizeIframe();
            
          }
      });
  }


})();