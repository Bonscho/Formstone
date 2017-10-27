/*! formstone v1.4.1 [upload.js] 2017-10-27 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function a(e,t,a){t.error=!0,e.$el.trigger(y.fileError,[t,a]),e.aborting||h(e)}function r(e,t,r){e.$el.trigger(y.chunkError,[t,r]),a(e,t,r)}function n(e){e.disabled&&(this.removeClass($.disabled),e.$input.prop("disabled",!1),e.disabled=!1)}function i(e){S.killEvent(e);var t=e.data;t.disabled||t.$input.trigger(y.click)}function l(e){e.data.$el.addClass($.focus)}function o(e){e.data.$el.removeClass($.focus)}function u(e){S.killEvent(e);var t=e.data,a=t.$input[0].files;!t.disabled&&a.length&&p(t,a)}function s(e){S.killEvent(e),e.data.$el.addClass($.dropping).trigger(y.fileDragEnter)}function c(e){S.killEvent(e),e.data.$el.addClass($.dropping).trigger(y.fileDragOver)}function d(e){S.killEvent(e),e.data.$el.removeClass($.dropping).trigger(y.fileDragLeave)}function f(e){S.killEvent(e);var t=e.data,a=e.originalEvent.dataTransfer.files;t.$el.removeClass($.dropping),t.disabled||p(t,a)}function p(e,t){var a=[],r=t.length;if(e.maxFiles){var n=e.maxFiles-e.uploaded;n>=0&&t.length>n&&(r=n)}if(r>0){for(var i=0;i<r;i++){var l={index:e.total++,file:t[i],name:t[i].name,size:t[i].size,started:!1,complete:!1,error:!1,transfer:null};a.push(l),e.queue.push(l)}e.$el.trigger(y.queued,[a]),e.autoUpload&&g(e)}e.$input.val("")}function g(e){e.uploading||(q.on(y.beforeUnload,function(){return e.leave}),e.uploading=!0,e.$el.trigger(y.start,[e.queue])),h(e)}function h(e){var t=0,a=[];for(var r in e.queue)!e.queue.hasOwnProperty(r)||e.queue[r].complete||e.queue[r].error||a.push(e.queue[r]);e.queue=a;for(var n in e.queue)if(e.queue.hasOwnProperty(n)){if(e.queue[n].started||v(e,e.queue[n]),++t>=e.maxConcurrent)return;r++}0===t&&(q.off(y.beforeUnload),e.uploading=!1,e.$el.trigger(y.complete))}function v(t,r){if(r.size>=t.maxSize||!0===r.error)a(t,r,"size");else if(t.chunked)r.started=!0,r.chunkSize=1024*t.chunkSize,r.totalChunks=Math.ceil(r.size/r.chunkSize),r.currentChunk=0,t.$el.trigger(y.fileStart,[r]),m(t,r);else{var n=new FormData;n.append(t.postKey,r.file),!1===(n=k(t,n,r))?a(t,r,"abort"):(r.started=!0,r.transfer=e.ajax({url:t.action,data:n,dataType:t.dataType,type:"POST",contentType:!1,processData:!1,cache:!1,xhr:function(){var a=e.ajaxSettings.xhr();return a.upload&&a.upload.addEventListener("progress",function(e){var a=0,n=e.loaded||e.position,i=e.total;e.lengthComputable&&(a=Math.ceil(n/i*100)),t.$el.trigger(y.fileProgress,[r,a])},!1),a},beforeSend:function(e,a){t.$el.trigger(y.fileStart,[r,a,e])},success:function(e,a,n){r.complete=!0,t.uploaded++,t.$el.trigger(y.fileComplete,[r,e,a,n]),h(t)},error:function(e,n,i){a(t,r,i,e)}}))}}function m(t,n){var i=n.chunkSize*n.currentChunk,l=i+n.chunkSize;l>n.size&&(l=n.size);var o=n.file[w](i,l),u=new FormData;u.append(t.postKey,o,n.file.name),u.append("chunks",n.totalChunks),u.append("chunk",n.currentChunk),!1===(u=k(t,u,n))?a(t,n,"abort"):n.chunkTransfer=e.ajax({url:t.action,data:u,dataType:t.dataType,type:"POST",contentType:!1,processData:!1,cache:!1,beforeSend:function(e,a){t.$el.trigger(y.chunkStart,[n,a,e])},success:function(e,a,r){n.currentChunk++,t.$el.trigger(y.chunkComplete,[n]);var i=Math.ceil(n.currentChunk/n.totalChunks*100);t.$el.trigger(y.fileProgress,[n,i,a,r]),n.currentChunk<n.totalChunks?m(t,n):(n.complete=!0,t.$el.trigger(y.fileComplete,[n,e,a,r]),h(t))},error:function(e,a,i){r(t,n,i,e)}})}function k(e,t,a){for(var r in e.postData)e.postData.hasOwnProperty(r)&&t.append(r,e.postData[r]);return t=e.beforeSend.call(e.$el,t,a)}var b=t.Plugin("upload",{widget:!0,defaults:{accept:!1,action:"",autoUpload:!0,beforeSend:function(e){return e},chunked:!1,chunkSize:100,customClass:"",dataType:"html",label:"Drag and drop files or click to select",leave:"You have uploads pending, are you sure you want to leave this page?",maxConcurrent:2,maxFiles:!1,maxSize:5242880,multiple:!0,postData:{},postKey:"file",theme:"fs-light"},classes:["input","target","multiple","dropping","disabled","focus"],methods:{_construct:function(e){if(t.support.file){var a="";w||(e.chunked=!1),e.maxQueue&&(e.maxConcurrent=e.maxQueue),!1!==e.label&&(a+='<div class="'+$.target+'">',a+=e.label,a+="</div>"),a+='<input class="'+$.input+'" type="file"',e.multiple&&(a+=" multiple"),e.accept&&(a+=' accept="'+e.accept+'"'),a+=">",e.baseClasses=[$.base,e.theme,e.customClass].join(" "),this.addClass(e.baseClasses).append(a),e.$input=this.find(C.input),e.queue=[],e.total=0,e.uploaded=0,e.uploading=!1,e.disabled=!0,e.aborting=!1,this.on(y.click,C.target,e,i).on(y.dragEnter,e,s).on(y.dragOver,e,c).on(y.dragLeave,e,d).on(y.drop,e,f),e.$input.on(y.focus,e,l).on(y.blur,e,o).on(y.change,e,u),n.call(this,e)}},_destruct:function(e){t.support.file&&(e.$input.off(y.namespace),this.off(y.namespace).removeClass(e.baseClasses).html(""))},disable:function(e){e.disabled||(this.addClass($.disabled),e.$input.prop("disabled",!0),e.disabled=!0)},enable:n,abort:function(t,r){var n;t.aborting=!0;for(var i in t.queue)t.queue.hasOwnProperty(i)&&(n=t.queue[i],("undefined"===e.type(r)||r>=0&&n.index===r)&&(n.started&&!n.complete?t.chunked?n.chunkTransfer.abort():n.transfer.abort():a(t,n,"abort")));t.aborting=!1,h(t)},start:g}}),C=b.classes,$=C.raw,y=b.events,S=b.functions,q=(t.window,t.$window),w=!1;t.Ready(function(){var e=["mozSlice","webkitSlice","slice"];if(t.support.file){var a=!1;try{a=new File([""],"f")}catch(e){}if(!a)try{a=new Blob([""],{})}catch(e){}if(a)for(var r in e)if(e.hasOwnProperty(r)&&e[r]in a){w=e[r];break}}}),y.chunkComplete="chunkcomplete",y.chunkError="chunkerror",y.chunkStart="chunkstart",y.complete="complete",y.fileComplete="filecomplete",y.fileDragEnter="filedragenter",y.fileDragLeave="filedragleave",y.fileDragOver="filedragover",y.fileError="fileerror",y.fileProgress="fileprogress",y.fileStart="filestart",y.start="start",y.queued="queued"});