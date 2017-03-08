var controller = new ScrollMagic.Controller();
new ScrollMagic.Scene({
    triggerElement: ".event.event2",
    triggerHook: "onEnter",
    duration: "100%"
}).setPin(".events-page .event.event1 .pinWrapper", {
    pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".event.event2",
    triggerHook: "onEnter",
    duration: "200%"
}).setPin(".events-page .event.event2 .pinWrapper", {
    pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".event.event3",
    triggerHook: "onEnter",
    duration: "200%"
}).setPin(".events-page .event.event3 .pinWrapper", {
    pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".event.event4",
    triggerHook: "onEnter",
    duration: "200%"
}).setPin(".events-page .event.event4 .pinWrapper", {
    pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".event.event5",
    triggerHook: "onEnter",
    duration: "200%"
}).setPin(".events-page .event.event5 .pinWrapper", {
    pushFollowers: false
}).addTo(controller);
new ScrollMagic.Scene({
    triggerElement: ".event.event6",
    triggerHook: "onEnter",
    duration: "100%"
}).setPin(".events-page .event.event6 .pinWrapper", {
    pushFollowers: false
}).addTo(controller);

new ScrollMagic.Scene({
    triggerElement: ".event1.image",
    triggerHook: "onLeave",
    duration: 300
}).setTween(".text-event-1", {
    opacity: "0"
}).addTo(controller);





var tween = TweenMax.to(".text-event-1", 1, {
    className: "+=opacity-zero"
});

// build scene
var scene = new ScrollMagic.Scene({
        triggerElement: ".event1.image",
        triggerHook:1,
        duration: 200
    })
        .setTween(tween)
        .addTo(controller);

// build tween
var tween2 = TweenMax.to(".text-event-2", 1, {
    className: "+=opacity-zero"
});

// build scene
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".event2",
    triggerHook:0,
    duration: 300
})
.setTween(tween2)
.addTo(controller);

// build tween
var tween3 = TweenMax.to(".text-event-3", 1, {
    className: "+=opacity-zero"
});

// build scene
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".event3",
    triggerHook:0,
    duration: 300
})
.setTween(tween3)
.addTo(controller);

// build tween
var tween4 = TweenMax.to(".text-event-4", 1, {
    className: "+=opacity-zero"
});

// build scene
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".event4",
    triggerHook:0,
    duration: 300
})
.setTween(tween4)
.addTo(controller);

// build tween
var tween5 = TweenMax.to(".text-event-5", 1, {
    className: "+=opacity-zero"
});

// build scene
var scene2 = new ScrollMagic.Scene({
    triggerElement: ".event5",
    triggerHook:0,
    duration: 300
})
.setTween(tween5)
.addTo(controller);

var mapParallax = new ScrollMagic.Scene({
    triggerElement: ".event1",
    triggerHook:0,
    duration:'20%'
})
.setTween(TweenMax.from('.red-pin', 1, {y:'30%', ease:Power0.easeNone}))
.addTo(controller);
var mapParallax = new ScrollMagic.Scene({
    triggerElement: ".event1",
    triggerHook:0,
    duration:'20%'
})
.setTween(TweenMax.from('.black-pin', 1, {y:'30%', ease:Power0.easeNone}))
.addTo(controller);
var mapParallax = new ScrollMagic.Scene({
    triggerElement: ".event1",
    triggerHook:0,
    duration:'20%'
})
.setTween(TweenMax.from('.blue-pin', 1, {y:'30%', ease:Power0.easeNone}))
.addTo(controller);

var coscoParallax = new ScrollMagic.Scene({
    triggerElement: ".event2",
    triggerHook:1,
    duration:'150%'
})
.setTween(TweenMax.from('.cosco', 1, {y:'400%', ease:Power0.easeNone}))
.addTo(controller);

var basketballParallax = new ScrollMagic.Scene({
    triggerElement: ".event2",
    triggerHook:1,
    duration:'300%'
})
.setTween(TweenMax.from('.basketball', 1, {y:'-300%', ease:Power0.easeNone}))
.addTo(controller);
