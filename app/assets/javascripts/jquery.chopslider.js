/*
 * jQuery Chop Slider v.2.2.0.Free

 * http://www.idangero.us/cs
 *
 * Copyright 2011, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us

 * Licensed under the iDangero.us Regular License.
 * Licensing Terms: http://www.idangero.us/index.php?content=article&id=21

 * Released on: December 1, 2011
 */
(function (c) {
    c.fn.chopSlider = function (b) {
        var C, D, d;

        function H() {
            for (var c = navigator.userAgent, a = !1, l = 0; l <= b.mobileUAs.length - 1; l++)0 <= c.indexOf(b.mobileUAs[l]) && (a = !0);
            return a
        }

        function F() {
            return c.chopSlider.hasCSS3() && !b.disableCSS3
        }

        function v(b, a) {
            if (a / b != Math.floor(a / b))for (var c = 0; c <= b; c++) {
                if (a / (b + c) == Math.floor(a / (b + c))) {
                    b += c;
                    break
                }
                if (a / (b - c) == Math.floor(a / (b - c))) {
                    b -= c;
                    break
                }
            }
            return b
        }

        function E(b, a, c, i, d) {
            if (0 == a)return a;
            if ("middle" == a) {
                if ("vertical" == b || "vertical3D" == b)a = Math.round(i / 2);
                if ("horizontal" == b || "horizontal3D" == b)a = Math.round(c / 2);
                if ("multi" == b || "multiFlipV" == b || "multiFlipH" == b || "multiFlip" == b || "sphereH" == b || "sphereV" == b || "sphere" == b) {
                    if ("progressive" == d || "linear" == d)a = Math.round(c * i / 2);
                    "horizontal" == d && (a = Math.round(i / 2));
                    "vertical" == d && (a = Math.round(c / 2))
                }
                return a
            }
            if ("end" == a) {
                if ("vertical" == b || "vertical3D" == b)a = i;
                if ("horizontal" == b || "horizontal3D" == b)a = c;
                if ("multi" == b || "multiFlipV" == b || "multiFlipH" == b || "multiFlip" == b || "sphereH" == b || "sphereV" == b || "sphere" == b) {
                    if ("progressive" == d || "linear" == d)a = c * i - 1;
                    "horizontal" == d && (a = i);
                    "vertical" == d && (a = c)
                }
            }
            return a
        }

        function M(b, a, c) {
            b.returnTransformCallback = a;
            this.runCallback = function () {
                var a = setTimeout(function () {
                    b.returnTransformCallback();
                    clearTimeout(a)
                }, c.time + c.delay)
            }
        }

        function I() {
            c.chopSlider.autoplay = setTimeout(function () {
                w("next", b)
            }, b.autoplayDelay)
        }

        function w(f, a, l) {
            function i() {
                j.html("");
                r.html("").css({display:"none"});
                0 <= l ? (c(b.activeQClass).removeClass(b.activeSlideClass).css({display:"none"}), c(n + ":eq(" + l + ")").addClass(b.activeSlideClass).show()) : "next" == f ? 0 < c(b.activeQClass).next(n).length ? c(b.activeQClass).css({display:"none"}).removeClass(b.activeSlideClass).next(n).addClass(b.activeSlideClass).show() : (c(b.activeQClass).removeClass(b.activeSlideClass).css({display:"none"}), c(n + ":eq(0)").addClass(b.activeSlideClass).show()) : 0 < c(b.activeQClass).prev(n).length ? c(b.activeQClass).css({display:"none"}).removeClass(b.activeSlideClass).prev(n).addClass(b.activeSlideClass).show() : (c(b.activeQClass).removeClass(b.activeSlideClass).css({display:"none"}), c(n + ":last").addClass(b.activeSlideClass).show());
                a.hideTriggers && (C.fadeIn(600), D.fadeIn(600));
                d.hide();
                G = 0;
                a.useCaptions && L();
                if (a.onEnd)a.onEnd();
                a.autoplay && I();
                c.extend(a, u);
                a.hidePagination && c(a.sliderPagination).parent().fadeIn(600)
            }

            function L() {
                var b = c(a.everyCaptionIn).eq(c(a.slide + a.activeQClass).index()).html();
                "" != c.trim(b) && (c(a.showCaptionIn).html(b), a.hideCaptions && (F() && a.captionTransform && c(a.showCaptionIn).fadeIn(10, function () {
                    c(this).csTransform({transform:"scale(1,1) translate(0px,0px) rotate(0deg)", time:600, delay:0})
                }), c(a.showCaptionIn).fadeIn(300)))
            }

            a.sliderLoader.css({left:a.container.offset().left, top:a.container.offset().top});
            !l && 0 !== l && (l = "next" == f ? 0 < c(b.activeQClass).next(n).length ? c(b.activeQClass).next(n).index() : 0 : 0 < c(b.activeQClass).prev(n).length ? c(b.activeQClass).prev(n).index() : c(n + ":last").index());
            if (1 != G) {
                G = 1;
                var u = {};
                c.extend(u, a);
                if ((a.transition || a.t2D) && (!a.t3D || !c.chopSlider.has3D())) {
                    if (a.t2D)a.transition = a.t2D;
                    if (a.transition instanceof Array)a.transition = a.transition[Math.floor(Math.random() * a.transition.length)];
                    if ("string" == typeof a.transition && 0 <= a.transition.indexOf("random")) {
                        var h = a.transition.split("{")[1].split("}")[0], e = -2;
                        for (prop in csTransitions[h])e++;
                        a.transition = csTransitions[h][Math.round(Math.random() * e)]
                    }
                    if ("2*hPieces" == a.transition.vPieces)a.transition.vPieces = 2 * a.transition.hPieces;
                    if ("3*hPieces" == a.transition.vPieces)a.transition.vPieces = 3 * a.transition.hPieces;
                    c.extend(a, a.transition);
                    a.vPieces = v(a.vPieces, a.width);
                    a.hPieces = v(a.hPieces, a.height);
                    if (a.squareMode && a.width / a.vPieces != a.height / a.hPieces) {
                        h = a.width * a.hPieces / a.height;
                        if (h != Math.floor(h))for (e = a.hPieces; e <= 2 * a.hPieces; e++) {
                            a.hPieces = v(a.hPieces + e, a.height);
                            var w = a.width * a.hPieces / a.height;
                            if (w == Math.floor(w)) {
                                h = w;
                                break
                            }
                        }
                        if (20 > h)a.vPieces = h
                    }
                    a.startFrom = E(a.type, a.startFrom, a.hPieces, a.vPieces, a.multiDelay)
                }
                if (a.noCSS3 && !c.chopSlider.hasCSS3()) {
                    if (a.noCSS3 instanceof Array)a.noCSS3 = a.noCSS3[Math.floor(Math.random() * a.noCSS3.length)];
                    if ("string" == typeof a.noCSS3 && 0 <= a.noCSS3.indexOf("random")) {
                        h = a.noCSS3.split("{")[1].split("}")[0];
                        e = -2;
                        for (prop in csTransitions[h])e++;
                        a.noCSS3 = csTransitions[h][Math.round(Math.random() * e)]
                    }
                    if (a.noCSS3.vPieces)a.noCSS3.vPieces = v(a.noCSS3.vPieces, a.width);
                    if (a.noCSS3.hPieces)a.noCSS3.hPieces = v(a.noCSS3.hPieces, a.height);
                    a.noCSS3.startFrom = E(a.noCSS3.type, a.noCSS3.startFrom, a.noCSS3.hPieces, a.noCSS3.vPieces);
                    c.extend(a, a.noCSS3)
                }
                if (c.chopSlider.has3D() && a.t3D) {
                    if (a.t3D instanceof Array)a.t3D = a.t3D[Math.floor(Math.random() * a.t3D.length)];
                    if ("string" == typeof a.t3D && 0 <= a.t3D.indexOf("random")) {
                        h = a.t3D.split("{")[1].split("}")[0];
                        e = -2;
                        for (prop in csTransitions[h])e++;
                        a.t3D = csTransitions[h][Math.round(Math.random() * e)]
                    }
                    if (a.t3D.vPieces)a.t3D.vPieces = v(a.t3D.vPieces, a.width);
                    if (a.t3D.hPieces)a.t3D.hPieces = v(a.t3D.hPieces, a.height);
                    a.t3D.startFrom = E(a.t3D.type, a.t3D.startFrom, a.t3D.hPieces, a.t3D.vPieces, a.t3D.multiDelay);
                    h = {top:"#999", right:"#999", bottom:"#333", left:"#555"};
                    a.t3D.showFaces = !0 === a.t3D.showFaces || !1 === a.t3D.showFaces ? a.t3D.showFaces : !0;
                    a.t3D.type = a.t3D.type || "vertical3d";
                    if ("multiFlipV" == a.t3D.type)a.t3D.type = "multiFlip", a.t3D.flipV = !0;
                    if ("multiFlipH" == a.t3D.type)a.t3D.type = "multiFlip", a.t3D.flipV = !1;
                    if ("sphereV" == a.t3D.type)a.t3D.type = "sphere", a.t3D.flipV = !0;
                    if ("sphereH" == a.t3D.type)a.t3D.type = "sphere", a.t3D.flipV = !1;
                    a.t3D.rotateMid = a.t3D.rotateMid || 0 === a.t3D.rotateMid ? a.t3D.rotateMid : 0;
                    a.t3D.rotateZ = a.t3D.rotateZ || 0;
                    a.t3D.scaleY = a.t3D.scaleY || 0 === a.t3D.scaleY ? a.t3D.scaleY : 1;
                    a.t3D.scaleX = a.t3D.scaleX || 0 === a.t3D.scaleX ? a.t3D.scaleX : 1;
                    a.t3D.scaleZ = a.t3D.scaleZ || 0 === a.t3D.scaleZ ? a.t3D.scaleZ : 1;
                    a.t3D.translateZ = a.t3D.translateZ || 0 === a.t3D.translateZ ? a.t3D.translateZ : 0;
                    a.t3D.faces = a.t3D.faces && !a.full3D ? c.extend(h, a.t3D.faces) : h;
                    c.extend(a, a.t3D)
                }
                if (a.mobile && H()) {
                    if (a.mobile instanceof Array)a.mobile = a.mobile[Math.floor(Math.random() * a.mobile.length)];
                    if ("string" == typeof a.mobile && 0 <= a.mobile.indexOf("random")) {
                        h = a.mobile.split("{")[1].split("}")[0];
                        e = -2;
                        for (prop in csTransitions[h])e++;
                        a.mobile = csTransitions[h][Math.round(Math.random() * e)]
                    }
                    if (a.mobile.vPieces)a.mobile.vPieces = v(a.mobile.vPieces, a.width);
                    if (a.mobile.hPieces)a.mobile.hPieces = v(a.mobile.hPieces, a.height);
                    a.mobile.startFrom = E(a.mobile.type, a.mobile.startFrom, a.mobile.hPieces, a.mobile.vPieces);
                    c.extend(a, a.mobile)
                }
                if ("random" == a.xOffset && "horizontal" != a.type)a.xOffset = Math.round(Math.random() * a.width / 2) - a.width / 4;
                if ("random" == a.xOffset && "horizontal" == a.type)a.xOffset = 0;
                if ("random" == a.yOffset)a.yOffset = Math.round(Math.random() * a.height / 2) - a.height / 4;
                if ("random" == a.translateX)a.translateX = Math.round(Math.random() * a.width / 2) - a.width / 4;
                if ("random" == a.translateY)a.translateY = Math.round(Math.random() * a.height / 2) - a.height / 4;
                if ("random" == a.rotate)a.rotate = !1 == a.rotateSymmetric ? Math.round(100 * Math.random()) - 50 : Math.round(360 * Math.random()) - 180;
                if ("random" == a.scaleX)a.scaleX = Math.round(200 * Math.random() - 100) / 100;
                if ("random" == a.scaleY && "multi" == a.type && ("random" == u.scaleX || "random" == a.transition.scaleX))a.scaleY = a.scaleX;
                if ("random" == a.scaleY && "multi" == a.type && ("random" != u.scaleX || "random" != a.transition.scaleX))a.scaleY = Math.round(200 * Math.random() - 100) / 100;
                if ("random" == a.scaleY && "multi" != a.type)a.scaleY = Math.round(200 * Math.random() - 100) / 100;
                if ("random" == a.multiDelay)a.multiDelay = Math.round(Math.random()), a.multiDelay = 0 == a.multiDelay ? "linear" : "progressive";
                if ("random" == a.startFrom && "multi" == a.type)a.startFrom = Math.round(Math.random() * a.hPieces * a.vPieces);
                if ("random" == a.startFrom && "vertical" == a.type)a.startFrom = Math.round(Math.random() * a.vPieces);
                if ("random" == a.startFrom && "horizontal" == a.type)a.startFrom = Math.round(Math.random() * a.hPieces);
                a.hideTriggers && (C.hide(), D.hide());
                if (a.onStart)a.onStart();
                a.useCaptions && a.hideCaptions && (c(a.showCaptionIn).hide(), a.captionTransform && c(a.showCaptionIn).csTransform({transform:a.captionTransform, time:300, delay:0}));
                a.hidePagination && c(a.sliderPagination).parent().hide();
                var t = c(n + b.activeQClass);
                if (0 <= l)var m = c(n + ":eq(" + l + ")"); else"next" == f ? (m = t.next(n), 0 == m.length && (m = c(n + ":eq(0)"))) : (m = t.prev(n), 0 == m.length && (m = c(n + ":last")));
                b.sliderPagination && (c(b.activeQPaginationClass).removeClass(b.activePaginationClass), c(b.sliderPagination).eq(m.index()).addClass(b.activePaginationClass));
                t.hide();
                d.show();
                a.prevTransition && "prev" == f && c.extend(a, a.prevTransition);
                if (a.halfTransition)var s = !0;
                a.startFrom = E(a.type, a.startFrom, a.hPieces, a.vPieces, a.multiDelay);
                a.forceParameters && c.extend(a, a.forceParameters);
                var x = m.hasClass("cs-content-slide"), z = t.hasClass("cs-content-slide");
                switch (a.type) {
                    case "multi":
                        for (var j = d.find(".dummy-first"), r = d.find(".dummy-last"), e = 1; e <= a.vPieces * a.hPieces; e++)j.append("<div ></div>"), x || s || r.append("<div></div>");
                        s && m.css({display:"block"});
                        var k;
                        if (0 >= a.startFrom)a.startFrom = 0;
                        var p;
                        switch (a.multiDelay) {
                            case "linear":
                                k = a.startFrom;
                                a.startFrom >= a.vPieces * a.hPieces - 1 && (k = a.vPieces * a.hPieces - 1);
                                p = a.startFrom >= a.vPieces * a.hPieces / 2 ? 0 : a.hPieces * a.vPieces - 1;
                                break;
                            case "progressive":
                                h = a.vPieces * a.vPieces / 5 + a.hPieces - 3;
                                k = Math.round(a.startFrom / a.hPieces / a.vPieces * h);
                                k > h && (k = h);
                                p = a.startFrom >= a.vPieces * a.hPieces / 2 ? 0 : a.hPieces * a.vPieces - 1;
                                break;
                            case "horizontal":
                                k = a.startFrom;
                                p = a.startFrom >= a.vPieces / 2 ? 0 : a.vPieces - 1;
                                break;
                            case "vertical":
                                k = a.startFrom, p = a.startFrom >= a.hPieces / 2 ? 0 : a.hPieces - 1
                        }
                        j.children("div").each(function () {
                            var b = c(this).index(), f = b - Math.floor(b / a.vPieces) * a.vPieces, q = Math.floor(b / a.vPieces);
                            c(this).css({width:a.width / a.vPieces, height:a.height / a.hPieces, position:"absolute", top:a.height / a.hPieces * q, left:a.width / a.vPieces * f, "background-image":!z ? "url(" + t.find("img").attr("src") + ")" : "none", backgroundPosition:-a.width / a.vPieces * f + "px " + -a.height / a.hPieces * q + "px", opacity:1, borderRadius:"0px 0px 0px 0px"});
                            if (F())c(this).csTransform({transform:"rotate(0deg) scaleY(1) scaleX(1) translate(0px,0px)", delay:20, time:0, ease:a.ease1, origin:a.origin, add:"left, top, border-radius, opacity"}, function () {
                                var d = "rotate(" + (!a.rotateSymmetric ? -(-a.rotate + 2 * a.rotate * f / (a.vPieces - 1)) : a.rotate) + "deg) scaleY(" + a.scaleY + ") scaleX(" + a.scaleX + ") translate(" + a.translateX + "px," + a.translateY + "px)", e;
                                switch (a.multiDelay) {
                                    case "linear":
                                        e = Math.abs(a.pieceDelay * (k - b));
                                        break;
                                    case "progressive":
                                        e = Math.abs(a.pieceDelay * (k - (q * a.vPieces / 5 + f)));
                                        if (a.startFrom == a.vPieces * a.hPieces - 1)var g = Math.abs(a.pieceDelay * (k - (a.hPieces * a.vPieces / 5 + a.vPieces)));
                                        break;
                                    case "horizontal":
                                        e = Math.abs(a.pieceDelay * (k - f));
                                        break;
                                    case "vertical":
                                        e = Math.abs(a.pieceDelay * (k - q))
                                }
                                g && (e -= g);
                                c(this).css({left:(a.width + 2 * a.xOffset) / a.vPieces * f - a.xOffset, top:2 * a.yOffset * q / a.hPieces - a.yOffset + a.height / a.hPieces * q, opacity:s ? a.halfTransitionOpacity : 1, borderRadius:"-o-" != o ? a.borderRadius : ""}).csTransform({transform:d, delay:e, time:a.dur1, ease:a.ease1, origin:a.origin, add:"left, top, border-radius, opacity"}, function () {
                                    s || x ? "vertical" == a.multiDelay ? b == p * a.vPieces && i() : p == b && i() : r.css({display:"block"}).find("div:eq(" + b + ")").css({width:a.width / a.vPieces, position:"absolute", left:(a.width + 2 * a.xOffset) / a.vPieces * f - a.xOffset, top:2 * a.yOffset * q / a.hPieces - a.yOffset + a.height / a.hPieces * q, height:a.height / a.hPieces, display:"none", "background-image":"url(" + m.find("img").attr("src") + ")", backgroundPosition:-a.width / a.vPieces * f + "px " + -a.height / a.hPieces * q + "px", borderRadius:"-o-" != o ? a.borderRadius + "px " + a.borderRadius + "px " + a.borderRadius + "px " + a.borderRadius + "px" : ""}).csTransform({transform:d, delay:0, time:0, ease:a.ease2, origin:a.origin, add:"left, top, border-radius"}, function () {
                                        c(this).delay(a.xFadeDelay).fadeIn(a.dur2, function () {
                                            j.children("div:eq(" + b + ")").hide();
                                            c(this).css({top:a.height / a.hPieces * q, left:a.width / a.vPieces * f, borderRadius:"-o-" != o ? "0px 0px 0px 0px" : ""}).csTransform({transform:"rotate(0deg) scaleY(1) scaleX(1) translate(0px,0px)", time:a.dur3, delay:0, ease:a.ease2, origin:a.origin, add:"left, top, border-radius"}, function () {
                                                "vertical" == a.multiDelay ? b == p * a.vPieces && i() : p == b && i()
                                            })
                                        })
                                    })
                                });
                                "-o-" == o && s && c(this).delay(e).animate({"border-radius":a.borderRadius}, a.dur1)
                            }); else {
                                if (0 > a.scaleX)a.scaleX = 0;
                                if (0 > a.scaleY)a.scaleY = 0;
                                var e = {left:(a.width + 2 * a.xOffset) / a.vPieces * f - a.xOffset, top:2 * a.yOffset * q / a.hPieces - a.yOffset + a.height / a.hPieces * q, width:a.scaleX * c(this).width(), height:a.scaleY * c(this).height(), opacity:s ? a.halfTransitionOpacity : 1}, d;
                                switch (a.multiDelay) {
                                    case "linear":
                                        d = Math.abs(a.pieceDelay * (k - b));
                                        break;
                                    case "progressive":
                                        d = Math.abs(a.pieceDelay * (k - (q * a.vPieces / 5 + f)));
                                        if (a.startFrom == a.vPieces * a.hPieces - 1)var g = Math.abs(a.pieceDelay * (k - (a.hPieces * a.vPieces / 5 + a.vPieces)));
                                        break;
                                    case "horizontal":
                                        d = Math.abs(a.pieceDelay * (k - f));
                                        break;
                                    case "vertical":
                                        d = Math.abs(a.pieceDelay * (k - q))
                                }
                                g && (d -= g);
                                c(this).delay(d).animate(e, a.dur1, function () {
                                    if (s || x)"vertical" == a.multiDelay ? b == p * a.vPieces && i() : p == b && i(); else {
                                        r.show();
                                        var c = {top:a.height / a.hPieces * q, left:a.width / a.vPieces * f, width:a.width / a.vPieces, height:a.height / a.hPieces};
                                        r.find("div:eq(" + b + ")").css({width:a.scaleX * a.width / a.vPieces, position:"absolute", left:(a.width + 2 * a.xOffset) / a.vPieces * f - a.xOffset, top:2 * a.yOffset * q / a.hPieces - a.yOffset + a.height / a.hPieces * q, height:a.scaleY * a.height / a.hPieces, display:"none", "background-image":"url(" + m.find("img").attr("src") + ")", backgroundPosition:-a.width / a.vPieces * f + "px " + -a.height / a.hPieces * q + "px"}).delay(a.xFadeDelay).fadeIn(a.dur2,function () {
                                            j.children("div:eq(" + b + ")").hide()
                                        }).animate(c, a.dur3, function () {
                                            "vertical" == a.multiDelay ? b == p * a.vPieces && i() : p == b && i()
                                        })
                                    }
                                })
                            }
                        });
                        break;
                    case "multiFlip":
                        a.thickness = a.thickness || 10;
                        a.animateContainerDuration = a.animateContainerDuration || a.dur1;
                        a.animateContainerDuration2 = a.animateContainerDuration2 || a.dur3;
                        j = d.find(".dummy-first");
                        r = d.find(".dummy-last");
                        for (e = 1; e <= a.vPieces * a.hPieces; e++)j.append('<div><div class="cs-right-face"></div><div class="cs-left-face"></div><div class="cs-bot-face"></div><div class="cs-top-face"></div><div class="cs-old-face"></div><div class="cs-new-face"></div></div>');
                        d.css({"-webkit-perspective":"1200", "-webkit-perspective-origin":"50% 50%", "-moz-perspective":"1200", "-moz-origin":"50% 50%", "-ms-perspective":"1200", "-ms-perspective-origin":"50% 50%", "-o-perspective":"1200", "-o-perspective-origin":"50% 50%", perspective:"1200", "perspective-origin":"50% 50%"});
                        if (a.animateContainer || a.full3D) {
                            if (a.animateContainer)var y = "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1) translate3d(0px,0px,0px)"; else a.animateContainer = a.full3D;
                            j.csTransform({transform:y, delay:0, time:0, origin:"50% 50%"}, function () {
                                c(this).css({"-webkit-transform-style":"preserve-3d", "-moz-transform-style":"preserve-3d", "-ms-transform-style":"preserve-3d", "-o-transform-style":"preserve-3d", "transform-style":"preserve-3d"}).csTransform({transform:a.animateContainer, time:a.animateContainerDuration, delay:0, origin:"50% 50%"}, function () {
                                    c(this).csTransform({time:a.animateContainerDuration2, delay:a.containerDelay, transform:y, origin:"50% 50%"})
                                })
                            })
                        }
                        if (0 >= a.startFrom)a.startFrom = 0;
                        switch (a.multiDelay) {
                            case "linear":
                                k = a.startFrom;
                                a.startFrom >= a.vPieces * a.hPieces - 1 && (k = a.vPieces * a.hPieces - 1);
                                p = a.startFrom >= a.vPieces * a.hPieces / 2 ? 0 : a.hPieces * a.vPieces - 1;
                                break;
                            case "progressive":
                                h = a.vPieces * a.vPieces / 5 + a.hPieces - 3;
                                k = Math.round(a.startFrom / a.hPieces / a.vPieces * h);
                                k > h && (k = h);
                                p = a.startFrom >= a.vPieces * a.hPieces / 2 ? 0 : a.hPieces * a.vPieces - 1;
                                break;
                            case "horizontal":
                                k = a.startFrom;
                                p = a.startFrom >= a.vPieces / 2 ? 0 : a.vPieces - 1;
                                break;
                            case "vertical":
                                k = a.startFrom, p = a.startFrom >= a.hPieces / 2 ? 0 : a.hPieces - 1
                        }
                        var B = a.showFaces ? a.thickness : 0;
                        j.children("div").each(function () {
                            var b = c(this).index(), f = b - Math.floor(b / a.vPieces) * a.vPieces, e = Math.floor(b / a.vPieces);
                            c(this).css({width:a.width / a.vPieces, height:a.height / a.hPieces, position:"absolute", top:a.height / a.hPieces * e, left:a.width / a.vPieces * f, zIndex:(f >= a.vPieces / 2 ? -f : f) - e, "-webkit-transform-style":"preserve-3d", "-webkit-perspective-origin":"50% 50%", "-moz-transform-style":"preserve-3d", "-moz-perspective-origin":"50% 50%", "-ms-transform-style":"preserve-3d", "-ms-perspective-origin":"50% 50%", "-o-transform-style":"preserve-3d", "-o-perspective-origin":"50% 50%", "transform-style":"preserve-3d", "perspective-origin":"50% 50%"}).children("div.cs-old-face").each(function () {
                                c(this).css({width:a.width / a.vPieces, height:a.height / a.hPieces, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:0, zIndex:9, "background-image":"url(" + t.find("img").attr("src") + ")", backgroundPosition:-a.width / a.vPieces * f + "px " + -a.height / a.hPieces * e + "px"})
                            }).end().children("div.cs-new-face").each(function () {
                                c(this).csTransform({transform:a.flipV ? "rotateX(180deg) translateZ(" + B + "px)" : "rotateX(180deg) rotateZ(180deg) translateZ(" + B + "px)", origin:"center center"}).css({width:a.width / a.vPieces, height:a.height / a.hPieces, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, backgroundPosition:-a.width / a.vPieces * f + "px " + -a.height / a.hPieces * e + "px"});
                                c(this).css({"background-image":"url(" + m.find("img").attr("src") + ")"})
                            }).end();
                            a.showFaces && (c(this).children("div.cs-top-face").each(function () {
                                c(this).csTransform({transform:"rotateX(90deg) translateY(-" + a.thickness + "px) translateZ(0px)", origin:"center top"}).css({width:a.width / a.vPieces, height:a.thickness, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, background:a.t3D.faces.top})
                            }).end(), c(this).children("div.cs-bot-face").each(function () {
                                c(this).csTransform({transform:"rotateX(-90deg) translateY(" + a.thickness + "px) translateZ(" + (a.height / a.hPieces - a.thickness) + "px)", origin:"center bottom"}).css({width:a.width / a.vPieces, height:a.thickness, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, background:a.t3D.faces.bottom})
                            }).end().children("div.cs-left-face").each(function () {
                                c(this).csTransform({transform:"rotateY(-90deg) translateX(-" + a.thickness + "px)", origin:"left center"}).css({width:a.thickness, height:a.height / a.hPieces, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:0, background:a.t3D.faces.left, zIndex:2 * -f})
                            }).end().children("div.cs-right-face").each(function () {
                                c(this).csTransform({transform:"rotateY(90deg)", origin:"left center"}).css({width:a.thickness, height:a.height / a.hPieces, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:a.width / a.vPieces, background:a.t3D.faces.right, zIndex:10})
                            }).end());
                            c(this).csTransform({transform:"rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleY(Z) translate3d(0px,0px,0px)", delay:100, time:0, ease:a.ease1, origin:"center center", add:"left, top"}, function () {
                                if (1 != a.vPieces)var d = !a.rotateSymmetric ? -(-a.rotate + 2 * a.rotate * f / (a.vPieces - 1)) : a.rotate, g = !a.rotateSymmetric ? -a.rotateZ + 2 * a.rotateZ * f / (a.vPieces - 1) : a.rotateZ; else d = a.rotate, g = a.rotateZ;
                                var h, l;
                                a.flipV ? (d = "rotateX(" + a.rotateMid + "deg) rotateY(" + g + "deg) rotateZ(" + d + "deg) scaleX(" + a.scaleX + ") scaleY(" + a.scaleY + ") scaleZ(" + a.scaleZ + ")  translate3d(" + a.translateX + "px," + a.translateY + "px," + (a.translateZ + B) + "px)", l = "rotateX(180deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)  translate3d(0px,0px," + B + "px)") : (d = "rotateX(" + g + "deg) rotateY(" + a.rotateMid + "deg) rotateZ(" + d + "deg) scaleX(" + a.scaleX + ") scaleY(" + a.scaleY + ") scaleZ(" + a.scaleZ + ")  translate3d(" + a.translateX + "px," + a.translateY + "px," + (a.translateZ + B) + "px)", l = "rotateX(0deg) rotateY(180deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1)  translate3d(0px,0px," + B + "px)");
                                switch (a.multiDelay) {
                                    case "linear":
                                        h = Math.abs(a.pieceDelay * (k - b));
                                        break;
                                    case "progressive":
                                        h = Math.abs(a.pieceDelay * (k - (e * a.vPieces / 5 + f)));
                                        if (a.startFrom == a.vPieces * a.hPieces - 1)var j = Math.abs(a.pieceDelay * (k - (a.hPieces * a.vPieces / 5 + a.vPieces)));
                                        break;
                                    case "horizontal":
                                        h = Math.abs(a.pieceDelay * (k - f));
                                        break;
                                    case "vertical":
                                        h = Math.abs(a.pieceDelay * (k - e))
                                }
                                j && (h -= j);
                                c(this).css({left:(a.width + 2 * a.xOffset) / a.vPieces * f - a.xOffset, top:2 * a.yOffset * e / a.hPieces - a.yOffset + a.height / a.hPieces * e}).csTransform({transform:d, delay:h, time:a.dur1, ease:a.ease1, origin:"center center", add:"left, top"}, function () {
                                    c(this).css({top:a.height / a.hPieces * e, left:a.width / a.vPieces * f}).csTransform({transform:l, time:a.dur3, delay:a.xFadeDelay, ease:a.ease2, origin:"center center", add:"left, top"}, function () {
                                        "vertical" == a.multiDelay ? b == p * a.vPieces && i() : p == b && i()
                                    })
                                })
                            })
                        });
                        break;
                    case "vertical3D":
                        j = d.find(".dummy-first");
                        r = d.find(".dummy-last");
                        for (e = 1; e <= a.vPieces; e++)j.append('<div><div class="cs-right-face"></div><div class="cs-left-face"></div><div class="cs-bot-face"></div><div class="cs-old-face"></div><div class="cs-new-face"></div></div>');
                        d.css({"-webkit-perspective":"1200", "-webkit-perspective-origin":"50% 50%", "-moz-perspective":"1200", "-moz-origin":"50% 50%", "-ms-perspective":"1200", "-ms-perspective-origin":"50% 50%", "-o-perspective":"1200", "-o-perspective-origin":"50% 50%", perspective:"1200", "perspective-origin":"50% 50%"});
                        a.animateContainer && (d.css({"-webkit-perspective":"1200", perspective:"1200"}), y = "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1) translate3d(0px,0px,0px)", j.csTransform({transform:y, delay:100, time:0, origin:"50% 50%"}, function () {
                            c(this).css({"-webkit-transform-style":"preserve-3d", "-moz-transform-style":"preserve-3d", "-ms-transform-style":"preserve-3d", "-o-transform-style":"preserve-3d", "transform-style":"preserve-3d"}).csTransform({transform:a.animateContainer, time:a.dur1, delay:0, origin:"50% 50%"}, function () {
                                c(this).csTransform({time:a.dur3, delay:a.containerDelay, transform:y, origin:"50% 50%"})
                            })
                        }));
                        j.children("div").each(function () {
                            var b = c(this).index();
                            c(this).css({width:a.width / a.vPieces, height:a.height, position:"absolute", top:0, left:a.width / a.vPieces * b, zIndex:b >= a.vPieces / 2 ? -b : b, "-webkit-transform-style":"preserve-3d", "-webkit-perspective-origin":"50% 50%", "-moz-transform-style":"preserve-3d", "-moz-perspective-origin":"50% 50%", "-ms-transform-style":"preserve-3d", "-ms-perspective-origin":"50% 50%", "-o-transform-style":"preserve-3d", "-o-perspective-origin":"50% 50%", "transform-style":"preserve-3d", "perspective-origin":"50% 50%"}).children("div.cs-old-face").each(function () {
                                c(this).css({width:a.width / a.vPieces, height:a.height, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:0, zIndex:9, "background-image":"url(" + t.find("img").attr("src") + ")", backgroundPosition:-a.width / a.vPieces * b + "px top"})
                            }).end().children("div.cs-new-face").each(function () {
                                c(this).csTransform({transform:"rotateX(90deg) translateY(-" + a.height + "px)", origin:"center top"}).css({width:a.width / a.vPieces, height:a.height, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, "background-image":"url(" + m.find("img").attr("src") + ")", backgroundPosition:-a.width / a.vPieces * b + "px top"})
                            }).end();
                            a.showFaces && c(this).children("div.cs-bot-face").each(function () {
                                c(this).csTransform({transform:"rotateX(-90deg) translateY(" + a.height + "px)", origin:"center bottom"}).css({width:a.width / a.vPieces, height:a.height, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, background:a.t3D.faces.bottom})
                            }).end().children("div.cs-right-face").each(function () {
                                c(this).csTransform({transform:"rotateY(90deg)", origin:"left center"}).css({width:a.height, height:a.height, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:a.width / a.vPieces, background:a.t3D.faces.right, zIndex:10})
                            }).end().children("div.cs-left-face").each(function () {
                                c(this).csTransform({transform:"rotateY(-90deg) translateX(-" + a.height + "px)", origin:"left center"}).css({width:a.height, height:a.height, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:0, background:a.t3D.faces.left, zIndex:2 * -b})
                            }).end();
                            c(this).csTransform({transform:"rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleY(1) scaleX(1) scaleZ(1) translate3d(0px,0px,0px)", delay:0, time:100, ease:a.ease1, origin:"center center", add:"left, top"}, function () {
                                if (1 < a.vPieces)var f = !a.rotateSymmetric ? -a.rotate + 2 * a.rotate * b / (a.vPieces - 1) : a.rotate, e = -a.rotateZ + 2 * a.rotateZ * b / (a.vPieces - 1); else f = a.rotate, e = a.rotateZ;
                                var d = a.vPieces;
                                if (a.startFrom >= d - 1)a.startFrom = d - 1;
                                if (0 >= a.startFrom)a.startFrom = 0;
                                var g = Math.abs(a.pieceDelay * (a.startFrom - b)), h = 0 == a.dur3 ? a.height / 2 : 0;
                                c(this).css({left:(a.width + 2 * a.xOffset) / a.vPieces * b - a.xOffset, top:a.yOffset}).csTransform({transform:"rotateX(" + a.rotateMid + "deg)  rotateZ(" + e + "deg) rotateY(" + f + "deg) scaleX(" + a.scaleX + ") scaleY(" + a.scaleY + ") scaleZ(" + a.scaleZ + ") translate3d(" + a.translateX + "px, " + (a.translateY + h) + "px, " + (a.translateZ + h) + "px)", delay:g, time:a.dur1, ease:a.ease1, origin:"center center", add:"left, top"}, function () {
                                    c(this).css({left:a.width / a.vPieces * b, top:0}).csTransform({transform:"rotateX(-90deg) rotateY(0deg) rotateZ(0deg) scaleZ(1)  scaleY(1) scaleX(1) translate3d(0px," + a.height / 2 + "px," + a.height / 2 + "px)", time:a.dur3, delay:a.xFadeDelay, ease:a.ease2, origin:"center center", add:"left, top"}, function () {
                                        b == (a.startFrom > d / 2 ? 0 : a.vPieces - 1) && i()
                                    })
                                })
                            })
                        });
                        break;
                    case "horizontal3D":
                        j = d.find(".dummy-first");
                        r = d.find(".dummy-last");
                        for (e = 1; e <= a.hPieces; e++)j.append('<div><div class="cs-top-face"></div><div class="cs-bot-face"></div><div class="cs-left-face"></div><div class="cs-old-face"></div><div class="cs-new-face"></div></div>');
                        d.css({"-webkit-perspective":"1200", "-webkit-perspective-origin":"50% 50%", "-moz-perspective":"1200", "-moz-origin":"50% 50%", "-ms-perspective":"1200", "-ms-perspective-origin":"50% 50%", "-o-perspective":"1200", "-o-perspective-origin":"50% 50%", perspective:"1200", "perspective-origin":"50% 50%"});
                        a.animateContainer && (d.css({"-webkit-perspective":"1200", perspective:"1200"}), y = "rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleX(1) scaleY(1) scaleZ(1) translate3d(0px,0px,0px)", j.csTransform({transform:y, delay:100, time:0, origin:"50% 50%"}, function () {
                            c(this).css({"-webkit-transform-style":"preserve-3d", "-moz-transform-style":"preserve-3d", "-ms-transform-style":"preserve-3d", "-o-transform-style":"preserve-3d", "transform-style":"preserve-3d"}).csTransform({transform:a.animateContainer, time:a.dur1, delay:0, origin:"50% 50%"}, function () {
                                c(this).csTransform({time:a.dur3, delay:a.containerDelay, transform:y, origin:"50% 50%"})
                            })
                        }));
                        j.children("div").each(function () {
                            var b = c(this).index();
                            c(this).css({width:a.width, height:a.height / a.hPieces, position:"absolute", top:a.height / a.hPieces * b, left:0, zIndex:b >= a.hPieces / 2 ? -b : b, "-webkit-transform-style":"preserve-3d", "-webkit-perspective-origin":"50% 50%", "-moz-transform-style":"preserve-3d", "-moz-perspective-origin":"50% 50%", "-ms-transform-style":"preserve-3d", "-ms-perspective-origin":"50% 50%", "-o-transform-style":"preserve-3d", "-o-perspective-origin":"50% 50%", "transform-style":"preserve-3d", "perspective-origin":"50% 50%"}).children("div.cs-old-face").each(function () {
                                c(this).css({width:a.width, height:a.height / a.hPieces, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:0, zIndex:9, "background-image":"url(" + t.find("img").attr("src") + ")", backgroundPosition:"left " + (-a.height / a.hPieces * b + "px")}).csTransform({transform:"rotateX(0deg)", origin:"center bottom"})
                            }).end().children("div.cs-new-face").each(function () {
                                c(this).css({width:a.width, height:a.height / a.hPieces, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, "background-image":"url(" + m.find("img").attr("src") + ")", backgroundPosition:"left " + (-a.height / a.hPieces * b + "px")}).csTransform({transform:"rotateY(90deg) translateX(" + a.width + "px)", origin:"right center"})
                            });
                            a.showFaces && c(this).children("div.cs-top-face").each(function () {
                                c(this).css({width:a.width, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, height:a.width, background:a.t3D.faces.top}).csTransform({transform:"rotateX(90deg) translateY(-" + a.width + "px)", origin:"center top"})
                            }).end().children("div.cs-bot-face").each(function () {
                                c(this).css({width:a.width, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", zIndex:10, top:0, left:0, height:a.width, background:a.t3D.faces.bottom}).csTransform({transform:"rotateX(-90deg) translateZ(" + a.height / a.hPieces + "px) translateY(0px)", origin:"center top"})
                            }).end().children("div.cs-left-face").each(function () {
                                c(this).css({width:a.width, height:a.height / a.hPieces, position:"absolute", "-webkit-backface-visibility":"hidden", "-moz-backface-visibility":"hidden", "-ms-backface-visibility":"hidden", "-o-backface-visibility":"hidden", "backface-visibility":"hidden", top:0, left:0, background:a.t3D.faces.left, zIndex:-5}).csTransform({transform:"rotateY(-90deg) translateX(-" + a.width + "px)", origin:"left center"})
                            });
                            c(this).csTransform({transform:"rotateX(0deg) rotateY(0deg) rotateZ(0deg) scaleY(1) scaleX(1) scaleZ(1) translate3d(0px,0px,0px)", delay:0, time:100, ease:a.ease1, origin:"center center", add:"left, top"}, function () {
                                if (1 < a.hPieces)var f = !a.rotateSymmetric ? -a.rotate + 2 * a.rotate * b / (a.hPieces - 1) : a.rotate, e = -a.rotateZ + 2 * a.rotateZ * b / (a.hPieces - 1); else f = a.rotate, e = a.rotateZ;
                                var d = a.hPieces;
                                if (a.startFrom >= d - 1)a.startFrom = d - 1;
                                if (0 == a.startFrom)a.startFrom = 0;
                                var g = Math.abs(a.pieceDelay * (a.startFrom - b)), h = -a.width / 2, l;
                                l = h = h * a.rotateMid / -90;
                                0 > a.rotateMid && (l = -1 * h);
                                c(this).css({top:(a.height + 2 * a.yOffset) / a.hPieces * b - a.yOffset, left:a.xOffset - 2 * a.xOffset / a.hPieces * b}).csTransform({transform:"rotateX(" + f + "deg) rotateY(" + a.rotateMid + "deg) rotateZ(" + e + "deg)  scaleX(" + a.scaleX + ") scaleY(" + a.scaleY + ") scaleZ(" + a.scaleZ + ") translate3d(" + (a.translateX + h) + "px, " + a.translateY + "px, " + (a.translateZ + l) + "px)", delay:g, time:a.dur1, ease:a.ease1, origin:"center center", add:"left, top"}, function () {
                                    c(this).css({left:0, top:a.height / a.hPieces * b}).csTransform({transform:"rotateX(0deg) rotateY(-90deg) rotateZ(0deg) scaleZ(1)  scaleY(1) scaleX(1) translate3d(" + -a.width / 2 + "px, 0px," + a.width / 2 + "px)", time:a.dur3, delay:a.xFadeDelay, ease:a.ease2, origin:"center center", add:"left, top"}, function () {
                                        b == (a.startFrom >= d / 2 ? 0 : a.hPieces - 1) && i()
                                    })
                                })
                            })
                        });
                        break;
                    case "slide":
                        var j = d.find(".dummy-first"), r = d.find(".dummy-last"), A = !0;
                        "prev" == f && (A = !1);
                        if (x && z) {
                            var h = "relative" == m.css("position") || "absolute" == m.css("position"), e = "relative" == t.css("position") || "absolute" == t.css("position"), K = c(a.container).css("overflow");
                            "hidden" != K && c(a.container).css("overflow", "hidden");
                            m.css({left:A ? a.width : -a.width, top:0, position:h ? m.css("position") : "absolute", display:"block", width:a.width}).animate({left:0}, 600);
                            t.css({left:0, top:0, position:e ? t.css("position") : "absolute", display:"block", width:a.width}).animate({left:A ? -a.width : a.width}, 600, function () {
                                "hidden" != K && c(a.container).css("overflow", "visible");
                                i();
                                c(this).css({left:0})
                            });
                            break
                        }
                        for (e = 1; e <= a.vPieces; e++)j.append("<div ></div>"), s || r.append("<div ></div>");
                        s && m.css({display:"block"});
                        d.css({overflow:"hidden"});
                        var J = A ? a.width : -a.width;
                        j.children("div").each(function () {
                            var b = c(this).index(), f = A ? a.pieceDelay * b : (a.vPieces - b) * a.pieceDelay;
                            c(this).css({width:a.width / a.vPieces, display:"block", position:"absolute", top:0, left:a.width / a.vPieces * b, height:a.height, "background-image":"url(" + t.find("img").attr("src") + ")", backgroundPosition:-a.width / a.vPieces * b + "px top"});
                            c(this).delay(f).animate({left:"-=" + J}, a.dur1, function () {
                                var b = A ? a.vPieces - 1 : 0;
                                c(this).index() == b && (d.css({overflow:"visible"}), i())
                            })
                        });
                        r.css({display:"block"});
                        r.children("div").each(function () {
                            var b = c(this).index(), f = A ? a.pieceDelay * b : (a.vPieces - b) * a.pieceDelay;
                            c(this).css({width:a.width / a.vPieces, display:"block", position:"absolute", top:0, left:a.width / a.vPieces * b + J, height:a.height, "background-image":"url(" + m.find("img").attr("src") + ")", backgroundPosition:-a.width / a.vPieces * b + "px top"});
                            c(this).delay(f).animate({left:"-=" + J}, a.dur1)
                        });
                        break;
                    default:
                        var j = d.find(".dummy-first"), r = d.find(".dummy-last"), g = !1;
                        "vertical" == a.type && (g = !0);
                        if (g)for (e = 1; e <= a.vPieces; e++)j.append("<div ></div>"), x || s || r.append("<div></div>"); else for (e = 1; e <= a.hPieces; e++)j.append("<div ></div>"), x || s || r.append("<div></div>");
                        s && m.css({display:"block"});
                        j.children("div").each(function () {
                            var b = c(this).index();
                            c(this).css({width:g ? a.width / a.vPieces : a.width, display:"block", position:"absolute", top:g ? 0 : a.height / a.hPieces * b, left:g ? a.width / a.vPieces * b : 0, height:g ? a.height : a.height / a.hPieces, "background-image":!z ? "url(" + t.find("img").attr("src") + ")" : "none", backgroundPosition:g ? -a.width / a.vPieces * b + "px top" : "left " + -a.height / a.hPieces * b + "px", opacity:1, borderRadius:"0px 0px 0px 0px"});
                            if (F())c(this).csTransform({transform:"rotate(0deg) scaleY(1) scaleX(1) translate(0px,0px)", delay:20, time:0, ease:a.ease1, origin:a.origin, add:"left, top, border-radius, opacity"}, function () {
                                var f = "rotate(" + (g ? !a.rotateSymmetric ? -a.rotate + 2 * a.rotate * b / (a.vPieces - 1) : a.rotate : !a.rotateSymmetric ? -a.rotate + 2 * a.rotate * b / (a.hPieces - 1) : a.rotate) + "deg) scaleY(" + a.scaleY + ") scaleX(" + a.scaleX + ") translate(" + a.translateX + "px," + a.translateY + "px)", e = g ? a.vPieces : a.hPieces;
                                if (a.startFrom >= e - 1)a.startFrom = e - 1;
                                if (0 == a.startFrom)a.startFrom = 0;
                                var d = Math.abs(a.pieceDelay * (a.startFrom - b));
                                c(this).css({left:g ? (a.width + 2 * a.xOffset) / a.vPieces * b - a.xOffset : a.xOffset - 2 * a.xOffset / a.hPieces * b, top:g ? a.yOffset : (a.height + 2 * a.yOffset) / a.hPieces * b - a.yOffset, opacity:s ? a.halfTransitionOpacity : 1, borderRadius:"-o-" != o ? a.borderRadius : ""}).csTransform({transform:f, delay:d, time:a.dur1, ease:a.ease1, origin:a.origin, add:"left, top, border-radius ,opacity"}, function () {
                                    s || x ? b == (a.startFrom > e / 2 ? 0 : g ? a.vPieces - 1 : a.hPieces - 1) && i() : r.css({display:"block"}).find("div:eq(" + b + ")").css({width:g ? a.width / a.vPieces : a.width, position:"absolute", top:g ? a.yOffset : (a.height + 2 * a.yOffset) / a.hPieces * b - a.yOffset, left:g ? (a.width + 2 * a.xOffset) / a.vPieces * b - a.xOffset : a.xOffset - 2 * a.xOffset / a.hPieces * b, height:g ? a.height : a.height / a.hPieces, display:"none", "background-image":"url(" + m.find("img").attr("src") + ")", backgroundPosition:g ? -a.width / a.vPieces * b + "px top" : "left " + -a.height / a.hPieces * b + "px", borderRadius:"-o-" != o ? a.borderRadius : ""}).csTransform({transform:f, delay:0, time:0, ease:a.ease2, origin:a.origin, add:"left, top, border-radius"}, function () {
                                        c(this).delay(a.xFadeDelay).fadeIn(a.dur2, function () {
                                            j.children("div:eq(" + b + ")").hide();
                                            c(this).css({left:g ? a.width / a.vPieces * b : 0, top:g ? 0 : a.height / a.hPieces * b, borderRadius:"0px 0px 0px 0px"}).csTransform({transform:"rotate(0deg) scaleY(1) scaleX(1) translate(0px,0px)", time:a.dur3, delay:0, ease:a.ease2, origin:a.origin, add:"left, top, border-radius"}, function () {
                                                b === (a.startFrom > e / 2 ? 0 : g ? a.vPieces - 1 : a.hPieces - 1) && i()
                                            })
                                        })
                                    })
                                });
                                "-o-" == o && s && c(this).delay(d).animate({"border-radius":a.borderRadius}, a.dur1)
                            }); else {
                                var f = {left:g ? (a.width + 2 * a.xOffset) / a.vPieces * b - a.xOffset : a.xOffset - 2 * a.xOffset / a.hPieces * b, top:g ? a.yOffset : (a.height + 2 * a.yOffset) / a.hPieces * b - a.yOffset, width:g ? a.scaleX * c(this).width() : a.scaleX * a.width, height:g ? a.scaleY * c(this).height() : a.scaleY * a.height / a.hPieces, opacity:s ? a.halfTransitionOpacity : 1}, e = g ? a.vPieces : a.hPieces;
                                if (a.startFrom >= e - 1)a.startFrom = e - 1;
                                if (0 == a.startFrom)a.startFrom = 0;
                                var d = Math.abs(a.pieceDelay * (a.startFrom - b));
                                c(this).delay(d).animate(f, a.dur1, function () {
                                    if (s || x)b == (a.startFrom > e / 2 ? 0 : g ? a.vPieces - 1 : a.hPieces - 1) && i(); else {
                                        var f = {left:g ? a.width / a.vPieces * b : 0, top:g ? 0 : a.height / a.hPieces * b, width:g ? a.width / a.vPieces : a.width, height:g ? a.height : a.height / a.hPieces};
                                        r.css({display:"block"}).find("div:eq(" + b + ")").css({width:g ? c(this).width() : a.scaleX * a.width, height:g ? c(this).height() : a.scaleY * a.height / a.hPieces, position:"absolute", top:g ? a.yOffset : (a.height + 2 * a.yOffset) / a.hPieces * b - a.yOffset, left:g ? (a.width + 2 * a.xOffset) / a.vPieces * b - a.xOffset : a.xOffset - 2 * a.xOffset / a.hPieces * b, display:"none", "background-image":"url(" + m.find("img").attr("src") + ")", backgroundPosition:g ? -a.width / a.vPieces * b + "px top" : "left " + -a.height / a.hPieces * b + "px"}).delay(a.xFadeDelay).fadeIn(a.dur2,function () {
                                            j.children("div:eq(" + b + ")").hide()
                                        }).animate(f, a.dur3, function () {
                                            b == (a.startFrom > e / 2 ? 0 : g ? a.vPieces - 1 : a.hPieces - 1) && i()
                                        })
                                    }
                                })
                            }
                        })
                }
            }
        }

        if (0 != this.length) {
            c.chopSlider = {};
            c.chopSlider.version = "2.2.0";
            b || (b = {});
            b.autoplay = b.autoplay || !1;
            b.autoplayDelay = b.autoplayDelay || 1E4;
            b.useCaptions = b.useCaptions || !1;
            b.captionTransform = b.captionTransform || "";
            b.rotate = b.rotate || 0;
            b.scaleY = b.scaleY || 0 === b.scaleY ? b.scaleY : 1;
            b.scaleX = b.scaleX || 0 === b.scaleX ? b.scaleX : 1;
            b.borderRadius = b.borderRadius || "0px 0px 0px 0px";
            b.translateX = b.translateX || 0 === b.translateX ? b.translateX : 0;
            b.translateY = b.translateY || 0 === b.translateY ? b.translateY : 0;
            b.ease1 = b.ease1 || "ease";
            b.ease2 = b.ease2 || "ease";
            b.origin = b.origin || "50% 50%";
            b.xOffset = b.xOffset || 0;
            b.yOffset = b.yOffset || 0;
            b.startFrom = b.startFrom || 0;
            b.hPieces = 0 < b.hPieces ? b.hPieces : 10;
            b.vPieces = 0 < b.vPieces ? b.vPieces : 10;
            b.dur1 = 0 <= b.dur1 ? b.dur1 : 1E3;
            b.dur2 = 0 <= b.dur2 ? b.dur2 : 600;
            b.dur3 = 0 <= b.dur3 ? b.dur3 : 1E3;
            b.type = b.type || "vertical";
            b.rotateSymmetric = !0 === b.rotateSymmetric || !1 === b.rotateSymmetric ? b.rotateSymmetric : !0;
            b.disableCSS3 = !0 === b.disableCSS3 || !1 === b.disableCSS3 ? b.disableCSS3 : !1;
            b.pieceDelay = 0 <= b.pieceDelay ? b.pieceDelay : 50;
            b.multiDelay = b.multiDelay || "progressive";
            b.xFadeDelay = 0 <= b.xFadeDelay ? b.xFadeDelay : 300;
            b.hideTriggers = !0 === b.hideTriggers || !1 === b.hideTriggers ? b.hideTriggers : !0;
            b.hideCaptions = !0 === b.hideCaptions || !1 === b.hideCaptions ? b.hideCaptions : !0;
            b.activeSlideClass = b.activeSlideClass || "cs-activeSlide";
            b.activeQClass = "." + b.activeSlideClass;
            b.activePaginationClass = b.activePaginationClass || "cs-active-pagination";
            b.activeQPaginationClass = "." + b.activePaginationClass;
            b.mobileUAs = b.mobileUAs || "ndroid,iPhone,iPod,BlackBerry,Symbian,Mobile".split(",");
            b.defaultParameters && c.extend(b, b.defaultParameters);
            if (b.mobile && H() && b.mobile.disableCSS3)b.disableCSS3 = b.mobile.disableCSS3;
            for (var z in b)if ("random" == z)b.random = !0;
            c.chopSlider.isMobile = function () {
                return H()
            };
            c.chopSlider.redefine = function (f) {
                if (f) {
                    var a = {};
                    c.extend(a, b, f);
                    b = a;
                    !1 === b.autoplay ? (clearTimeout(c.chopSlider.autoplay), b.autoplay = !1) : I()
                }
            };
            var o = "";
            (function () {
                c("body").append('<div class="chopSlider-css3Test"></div>');
                var b = c(".chopSlider-css3Test")[0].style, a = void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition;
                void 0 !== b.WebkitTransition && (o = "-webkit-");
                void 0 !== b.MozTransition && (o = "-moz-");
                void 0 !== b.MsTransition && (o = "-ms-");
                void 0 !== b.OTransition && (o = "-o-");
                c.chopSlider.hasCSS3 = function () {
                    return a
                };
                if (a) {
                    var d = !1;
                    "webkitPerspective"in b && (d = !0);
                    "MozPerspective"in b && (d = !0);
                    "OPerspective"in b && (d = !0);
                    "MsPerspective"in b && (d = !0);
                    "perspective"in b && (d = !0);
                    if (d) {
                        b = c('<style media="(transform-3d), (-moz-transform-3d), (-webkit-transform-3d), (-o-transform-3d), (-ms-transform-3d)">div.chopSlider-css3Test { overflow: hidden }</style>');
                        c("head").append(b);
                        var i = !1;
                        "hidden" == c(".chopSlider-css3Test").css("overflow") && (i = !0);
                        b.remove()
                    }
                    c.chopSlider.has3D = function () {
                        return i
                    }
                } else c.chopSlider.has3D = function () {
                    return!1
                };
                c(".chopSlider-css3Test").remove()
            })();
            c.fn.csTransitionEnd = function (b) {
                for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd"], d = 0; d < a.length; d++)this.bind(a[d], function (d) {
                    for (var l = 0; l < a.length; l++)c(this).unbind(a[l]);
                    b && b.call(this, d)
                });
                return this
            };
            c.fn.csTransform = function (b, a) {
                var d, i;
                if (!F())return this;
                if (0 == arguments.length)return this;
                if (3 == arguments.length)d = void 0, i = void 0, d = arguments[0], i = arguments[1], a = arguments[2], b = {}, b.transform = d, b.time = i;
                if (2 >= arguments.length)"string" == typeof b ? (d = void 0, i = void 0, d = arguments[0], 2 == arguments.length ? "number" == typeof arguments[1] || "string" == typeof arguments[1] ? (i = arguments[1], a = "") : (i = 0, a = arguments[1]) : i = 0, b = {}, b.transform = d, b.time = i) : (b.time = b.time || 0, b.transform = b.transform || "");
                b.delay = b.delay || 0;
                b.ease = b.ease || "ease";
                b.origin = b.origin || "50% 50%";
                a && (new M(this, a, b)).runCallback();
                if (b.add) {
                    b.add.replace("{bp}", o);
                    var n = ", " + b.add
                } else n = "";
                return this.each(function () {
                    c(this).css(o + "transform", b.transform).css(o + "transition-property", o + "transform" + (b.animateOrigin ? " ," + o + "transform-origin" : "") + n).css(o + "transition-duration", b.time / 1E3 + "s").css(o + "transition-delay", "" + b.delay / 1E3 + "s").css(o + "transition-timing-function", "" + b.ease).css(o + "transform-origin", "" + b.origin)
                })
            };
            var G = 0;
            c.chopSlider.isAnimating = function () {
                return G
            };
            C = void 0;
            D = void 0;
            d = void 0;
            var u = this;
            b.container = c(u);
            b.width = u.width();
            b.height = u.height();
            c("body").append('<div class="cs-slider-loader" style="display:none"></div>');
            d = c(".cs-slider-loader:last");
            d.html('<div class="dummy-blocks" style="position:relative"><div class="dummy-first" style="width:' + b.width + "px;height:" + b.height + 'px"></div><div class="dummy-last" style="display:none;position:absolute;left:0px;top:0px;"></div></div>');
            b.sliderLoader = d;
            var n = b.slide || ".slide";
            c.chopSlider.slide = function (d) {
                var a = {};
                d ? c.extend(a, b, d) : a = d = b;
                if (!d.direction)d.direction = "next";
                clearTimeout(c.chopSlider.autoplay);
                a.autoplay = !1;
                w(d.direction, a, d.slideTo)
            };
            b.autoplay && I();
            b.useCaptions && (z = c(b.everyCaptionIn).eq(c(b.slide + b.activeQClass).index()).html(), "" != c.trim(z) && c(b.showCaptionIn).show().html(z));
            d.css({left:u.offset().left, top:u.offset().top, position:"absolute", "z-index":0 <= b.loaderIndex ? b.loaderIndex : 2E4, width:b.width, height:b.height, display:"none"});
            c(window).resize(function () {
                d.css({left:u.offset().left, top:u.offset().top})
            });
            C = c(b.nextTrigger);
            D = c(b.prevTrigger);
            C.click(function (d) {
                clearTimeout(c.chopSlider.autoplay);
                b.autoplay = !1;
                d.preventDefault();
                w("next", b)
            });
            D.click(function (d) {
                clearTimeout(c.chopSlider.autoplay);
                b.autoplay = !1;
                d.preventDefault();
                w("prev", b)
            });
            b.sliderPagination && (c(b.sliderPagination).eq(c(b.activeQClass).index()).addClass(b.activePaginationClass), c(b.sliderPagination).click(function (d) {
                d.preventDefault();
                var d = c(this), a = c(b.activeQPaginationClass).index();
                if (!d.hasClass(b.activePaginationClass))clearTimeout(c.chopSlider.autoplay), b.autoplay = !1, a = d.index() > a ? "next" : "prev", w(a, b, d.index())
            }))
        }
    }
})(jQuery);