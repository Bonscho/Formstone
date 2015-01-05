/*! Formstone v0.0.1 [background.js] 2015-01-05 | MIT License | formstone.it */

!function(a,b){"use strict";function c(){z.on(w.resize,d),d()}function d(){C=z.width(),A.length&&(D=x.startTimer(D,E,function(){x.iterate.call(A,q)}))}function e(){A=a(u.base)}function f(b){b.guid="__"+B++,b.youTubeGuid=0,b.eventGuid=w.namespace+b.guid,b.rawGuid=v.base+b.guid,b.classGuid="."+b.rawGuid,b.$container=a('<div class="'+v.container+'"></div>').appendTo(this),this.addClass([v.base,b.customClass].join(" "));var c=b.source;b.source=null,h(b,c,!0),e()}function g(a){a.$container.remove(),this.removeClass([v.base,a.customClass].join(" ")).off(w.namespace),e()}function h(b,c,d){if(c!==b.source){if(b.source=c,b.responsive=!1,b.isYouTube=!1,"object"===a.type(c)&&"string"===a.type(c.video)){var e=c.video.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i);e&&e.length>=1&&(b.isYouTube=!0,b.videoId=e[1])}if(b.isYouTube)b.playing=!1,b.playerReady=!1,b.posterLoaded=!1,l(b,c,d);else if("object"===a.type(c)&&c.hasOwnProperty("poster"))k(b,c,d);else{var f=c;if("object"===a.type(c)){var g,h={},m=[];for(g in c)c.hasOwnProperty(g)&&m.push(g);m.sort(x.sortAsc);for(g in m)m.hasOwnProperty(g)&&(h[m[g]]={width:parseInt(m[g]),url:c[m[g]]});b.responsive=!0,b.sources=h,f=i(b)}j(b,f,!1,d)}}else b.$el.trigger(w.loaded)}function i(a){if(a.responsive)for(var b in a.sources)if(a.sources.hasOwnProperty(b)&&C>=a.sources[b].width)return a.sources[b].url;return a.source}function j(b,c,d,e){var f=[v.media,v.image,e!==!0?v.animated:""].join(" "),g=a('<div class="'+f+'"><img></div>'),h=g.find("img"),i=c;h.one(w.load,function(){F&&g.addClass(v.native).css({backgroundImage:"url('"+i+"')"}),g.transition({property:"opacity"},function(){d||m(b)}).css({opacity:1}),r(b),(!d||e)&&b.$el.trigger(w.loaded)}).attr("src",i),b.responsive&&g.addClass(v.responsive),b.$container.append(g),(h[0].complete||4===h[0].readyState)&&h.trigger(w.load),b.currentSource=i}function k(c,d,e){if(c.source&&c.source.poster&&(j(c,c.source.poster,!0,!0),e=!1),!b.isMobile){var f=[v.media,v.video,e!==!0?v.animated:""].join(" "),g='<div class="'+f+'">';g+="<video",c.loop&&(g+=" loop"),c.mute&&(g+=" muted"),g+=">",c.source.webm&&(g+='<source src="'+c.source.webm+'" type="video/webm" />'),c.source.mp4&&(g+='<source src="'+c.source.mp4+'" type="video/mp4" />'),c.source.ogg&&(g+='<source src="'+c.source.ogg+'" type="video/ogg" />'),g+="</video>",g+="</div>";var h=a(g),i=h.find("video");i.one(w.loadedMetaData,function(){h.transition({property:"opacity"},function(){m(c)}).css({opacity:1}),r(c),c.$el.trigger(w.loaded),c.autoPlay&&this.play()}),c.$container.append(h)}}function l(c,d,e){if(!c.videoId){var f=d.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);c.videoId=f[1]}if(c.posterLoaded||(c.source.poster||(c.source.poster="http://img.youtube.com/vi/"+c.videoId+"/0.jpg"),c.posterLoaded=!0,j(c,c.source.poster,!0,e),e=!1),!b.isMobile)if(a("script[src*='youtube.com/iframe_api']").length||a("head").append('<script src="//www.youtube.com/iframe_api"></script>'),G){var g=c.guid+"_"+c.youTubeGuid++,h=[v.media,v.embed,e!==!0?v.animated:""].join(" "),i='<div class="'+h+'">';i+='<div id="'+g+'"></div>',i+="</div>";var k=a(i);c.$container.append(k),c.player&&(c.oldPlayer=c.player,c.player=null),c.player=new window.YT.Player(g,{videoId:c.videoId,playerVars:{controls:0,rel:0,showinfo:0,wmode:"transparent",enablejsapi:1,version:3,playerapiid:g,loop:c.loop?1:0,autoplay:1,origin:window.location.protocol+"//"+window.location.host},events:{onReady:function(){c.playerReady=!0,c.mute&&c.player.mute(),c.autoPlay&&c.player.playVideo()},onStateChange:function(a){c.playing||a.data!==window.YT.PlayerState.PLAYING?c.loop&&c.playing&&a.data===window.YT.PlayerState.ENDED&&c.player.playVideo():(c.playing=!0,c.autoPlay||c.player.pauseVideo(),k.transition({property:"opacity"},function(){m(c)}).css({opacity:1}),r(c),c.$el.trigger(w.loaded)),c.$el.find(u.embed).addClass(v.ready)},onPlaybackQualityChange:function(){},onPlaybackRateChange:function(){},onError:function(){},onApiChange:function(){}}}),r(c)}else H.push({data:c,source:d})}function m(a){var b=a.$container.find(u.media);b.length>=1&&(b.not(":last").remove(),a.oldPlayer=null)}function n(a){var b=a.$container.find(u.media);b.length>=1&&b.transition({property:"opacity"},function(){b.remove(),delete a.source}).css({opacity:0})}function o(a){if(a.isYouTube&&a.playerReady)a.player.pauseVideo();else{var b=a.$container.find("video");b.length&&b[0].pause()}}function p(a){if(a.isYouTube&&a.playerReady)a.player.playVideo();else{var b=a.$container.find("video");b.length&&b[0].play()}}function q(a){if(a.responsive){var b=i(a);b!==a.currentSource?j(a,b,!1,!0):r(a)}else r(a)}function r(a){for(var b=a.$container.find(u.media),c=0,d=b.length;d>c;c++){var e=b.eq(c),f=a.isYouTube?"iframe":e.find("video").length?"video":"img",g=e.find(f);if(g.length&&("img"!==f||!F)){var h=a.$el.outerWidth(),i=a.$el.outerHeight(),j=s(a,g);a.width=j.width,a.height=j.height,a.left=0,a.top=0;var k=a.isYouTube?a.embedRatio:a.width/a.height;a.height=i,a.width=a.height*k,a.width<h&&(a.width=h,a.height=a.width/k),a.left=-(a.width-h)/2,a.top=-(a.height-i)/2,e.css({height:a.height,width:a.width,left:a.left,top:a.top})}}}function s(b,c){if(b.isYouTube)return{height:500,width:500/b.embedRatio};if(c.is("img")){var d=c[0];if("undefined"!==a.type(d.naturalHeight))return{height:d.naturalHeight,width:d.naturalWidth};var e=new Image;return e.src=d.src,{height:e.height,width:e.width}}return{height:c[0].videoHeight,width:c[0].videoWidth}}var t=b.Plugin("background",{widget:!0,defaults:{autoPlay:!0,customClass:"",embedRatio:1.777777,loop:!0,mute:!0,source:null},classes:["container","media","animated","responsive","native","fixed","ready"],events:{loaded:"loaded",ready:"ready",loadedMetaData:"loadedmetadata"},methods:{_setup:c,_construct:f,_destruct:g,play:p,pause:o,resize:r,load:h,unload:n}}),u=t.classes,v=u.raw,w=t.events,x=t.functions,y=b.window,z=b.$window,A=[],B=0,C=0,D=null,E=20,F="backgroundSize"in b.document.documentElement.style,G=!1,H=[];y.onYouTubeIframeAPIReady=function(){G=!0;for(var a in H)H.hasOwnProperty(a)&&l(H[a].data,H[a].source);H=[]}}(jQuery,Formstone);