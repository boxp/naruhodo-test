var app;app={initialize:function(){return this.bindEvents()},bindEvents:function(){return document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){return app.receivedEvent("deviceready")},receivedEvent:function(e){var n,t,i;return t=document.getElementById(e),n=t.querySelector(".listening"),i=t.querySelector(".received"),n.setAttribute("style","display:none"),i.setAttribute("style","display:block"),console.log("Received Event: "+e)}},window.onload=function(){return app.initialize()};