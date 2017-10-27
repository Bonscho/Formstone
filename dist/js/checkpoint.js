/*! formstone v1.4.1 [checkpoint.js] 2017-10-27 | GPL-3.0 License | formstone.it */
!function(e){"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery,Formstone)}(function(e,t){"use strict";function i(){v=u.height(),d.iterate.call(g,n)}function c(){g=e(r.base),i()}function a(){d.iterate.call(g,s)}function n(e){if(e.initialized){switch(e.windowIntersect){case"top":e.windowCheck=0-e.offset;break;case"middle":case"center":e.windowCheck=v/2-e.offset;break;case"bottom":e.windowCheck=v-e.offset}switch(e.elOffset=e.$target.offset(),e.elIntersect){case"top":e.elCheck=e.elOffset.top;break;case"middle":e.elCheck=e.elOffset.top+e.$target.outerHeight()/2;break;case"bottom":e.elCheck=e.elOffset.top+e.$target.outerHeight()}s(e)}}function s(e){e.initialized&&(h+e.windowCheck>=e.elCheck?(e.active||e.$el.trigger(l.activate),e.active=!0,e.$el.addClass(f.active)):e.reverse&&(e.active&&e.$el.trigger(l.deactivate),e.active=!1,e.$el.removeClass(f.active)))}var o=t.Plugin("checkpoint",{widget:!0,defaults:{intersect:"bottom-top",offset:0,reverse:!1},classes:["active"],events:{activate:"activate",deactivate:"deactivate"},methods:{_construct:function(t){t.initialized=!1;var i=e(t.$el.data("checkpoint-container")),c=t.$el.data("checkpoint-intersect"),a=t.$el.data("checkpoint-offset");c&&(t.intersect=c),a&&(t.offset=a);var s=t.intersect.split("-");t.windowIntersect=s[0],t.elIntersect=s[1],t.visible=!1,t.$target=i.length?i:t.$el;var o=t.$target.find("img");o.length&&o.on(l.load,t,n),t.$el.addClass(f.base),t.initialized=!0},_postConstruct:function(e){c(),i()},_destruct:function(e){c()},_resize:i,_raf:function(){(h=u.scrollTop())<0&&(h=0),h!==w&&(a(),w=h)},resize:n}}),r=(o.namespace,o.classes),f=r.raw,l=o.events,d=o.functions,u=(t.window,t.$window),v=0,h=0,w=0,g=[]});