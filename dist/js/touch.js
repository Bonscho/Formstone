/*! Formstone v0.0.1 [touch.js] 2015-01-20 | MIT License | formstone.it */

!function(a,b){"use strict";function c(a){a.touches=[],a.touching=!1,a.tap?(a.pan=!1,a.scale=!1,a.swipe=!1,this.on([p.touchStart,p.pointerDown].join(" "),a,f).on(p.click,a,i)):(a.pan||a.swipe||a.scale)&&(a.tap=!1,a.swipe&&(a.pan=!0),a.scale&&(a.axis=!1),a.axis?m(this,"pan-"+("x"===a.axis?"y":"x")):m(this,"none"),this.on([p.touchStart,p.pointerDown].join(" "),a,e),a.pan&&this.on(p.mouseDown,a,f))}function d(){m(this.off(p.namespace),"")}function e(a){a.preventManipulation&&a.preventManipulation();var b=a.data,c=a.originalEvent;if(c.type.match(/(up|end)$/i))return void h(a);if(c.pointerId){var d=!1;for(var e in b.touches)b.touches[e].id===c.pointerId&&(d=!0,b.touches[e].pageX=c.clientX,b.touches[e].pageY=c.clientY);d||b.touches.push({id:c.pointerId,pageX:c.clientX,pageY:c.clientY})}else b.touches=c.touches;c.type.match(/(down|start)$/i)?f(a):c.type.match(/move$/i)&&g(a)}function f(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null;if(c.touching||(c.startE=b.originalEvent,c.startX=d?d.pageX:b.pageX,c.startY=d?d.pageY:b.pageY,c.startT=(new Date).getTime(),c.scaleD=1,c.passed=!1),c.tap)c.clicked=!1,c.$el.on([p.touchMove,p.pointerMove].join(" "),c,e).on([p.touchEnd,p.touchCancel,p.pointerUp,p.pointerCancel].join(" "),c,e);else if(c.pan||c.scale){var f=j(c.scale?p.scaleStart:p.panStart,b,c.startX,c.startY,c.scaleD,0,0,"","");if(c.scale&&c.touches&&c.touches.length>=2){var i=c.touches;c.pinch={startX:k(i[0].pageX,i[1].pageX),startY:k(i[0].pageY,i[1].pageY),startD:l(i[1].pageX-i[0].pageX,i[1].pageY-i[0].pageY)},f.pageX=c.startX=c.pinch.startX,f.pageY=c.startY=c.pinch.startY}c.touching||(c.touching=!0,c.pan&&r.on(p.mouseMove,c,g).on(p.mouseUp,c,h),r.on([p.touchMove,p.touchEnd,p.touchCancel,p.pointerMove,p.pointerUp,p.pointerCancel].join(" "),c,e),c.$el.trigger(f))}}function g(b){var c=b.data,d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,i=f-c.startY,m=g>0?"right":"left",n=i>0?"down":"up",o=Math.abs(e-c.startX)>s,r=Math.abs(f-c.startY)>s;if(c.tap)(o||r)&&c.$el.off([p.touchMove,p.touchEnd,p.touchCancel,p.pointerMove,p.pointerUp,p.pointerCancel].join(" "));else if(c.pan||c.scale)if(!c.passed&&c.axis&&("x"===c.axis&&r||"y"===c.axis&&o))h(b);else{!c.passed&&(!c.axis||c.axis&&"x"===c.axis&&o||"y"===c.axis&&r)&&(c.passed=!0,c.$el.one(p.click,c,q.killEvent)),c.passed&&(q.killEvent(b),q.killEvent(c.startE));var t=!0,u=j(c.scale?p.scale:p.pan,b,e,f,c.scaleD,g,i,m,n);if(c.scale)if(c.touches&&c.touches.length>=2){var v=c.touches;c.pinch.endX=k(v[0].pageX,v[1].pageX),c.pinch.endY=k(v[0].pageY,v[1].pageY),c.pinch.endD=l(v[1].pageX-v[0].pageX,v[1].pageY-v[0].pageY),c.scaleD=c.pinch.endD/c.pinch.startD,u.pageX=c.pinch.endX,u.pageY=c.pinch.endY,u.scale=c.scaleD,u.deltaX=c.pinch.endX-c.pinch.startX,u.deltaY=c.pinch.endY-c.pinch.startY}else c.pan||(t=!1);t&&c.$el.trigger(u)}}function h(b){var c=b.data;if(c.tap)c.$el.off([p.touchMove,p.touchEnd,p.touchCancel,p.pointerMove,p.pointerUp,p.pointerCancel,p.mouseMove,p.mouseUp].join(" ")),c.startE.preventDefault(),i(b);else if(c.pan||c.scale){var d="undefined"!==a.type(c.touches)?c.touches[0]:null,e=d?d.pageX:b.pageX,f=d?d.pageY:b.pageY,g=e-c.startX,h=f-c.startY,k=(new Date).getTime(),l=c.scale?p.scaleEnd:p.panEnd,m=g>0?"right":"left",n=h>0?"down":"up";c.swipe&&Math.abs(g)>s&&k-c.startT<t&&(l=p.swipe);var o=j(l,b,e,f,c.scaleD,g,h,m,n);r.off([p.touchMove,p.touchEnd,p.touchCancel,p.mouseMove,p.mouseUp,p.pointerMove,p.pointerUp,p.pointerCancel].join(" ")),c.$el.trigger(o),c.touches=[],c.scale}c.touching=!1}function i(a){q.killEvent(a);var b=a.data;if(!b.clicked){"click"!==a.type&&(b.clicked=!0);var c=b.startE?b.startX:a.pageX,d=b.startE?b.startY:a.pageY,e=j(p.tap,a.originalEvent,c,d,1,0,0);b.$el.trigger(e)}}function j(b,c,d,e,f,g,h,i,j){return a.Event(b,{originalEvent:c,bubbles:!0,pageX:d,pageY:e,scale:f,deltaX:g,deltaY:h,directionX:i,directionY:j})}function k(a,b){return(a+b)/2}function l(a,b){return Math.sqrt(a*a+b*b)}function m(a,b){a.css({"-ms-touch-action":b,"touch-action":b})}var n=!b.window.PointerEvent,o=b.Plugin("touch",{widget:!0,defaults:{axis:!1,pan:!1,scale:!1,swipe:!1,tap:!1},methods:{_construct:c,_destruct:d},events:{pointerDown:n?"MSPointerDown":"pointerdown",pointerUp:n?"MSPointerUp":"pointerup",pointerMove:n?"MSPointerMove":"pointermove",pointerCancel:n?"MSPointerCancel":"pointercancel"}}),p=o.events,q=o.functions,r=b.$window,s=20,t=200;p.tap="tap",p.pan="pan",p.panStart="panstart",p.panEnd="panend",p.scale="scale",p.scaleStart="scalestart",p.scaleEnd="scaleend",p.swipe="swipe"}(jQuery,Formstone);