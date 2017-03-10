/*
    Commit by VK Source Updates
    Author: @iprxy
    Version: 6141701117
    Link: https://vk.com/js/al/writebox.js?6141701117
    Last Update: 10.2.117
*/
﻿! function(e) {
    function t(i) {
        if (r[i]) return r[i].exports;
        var o = r[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.p = "", t(0)
}({
    0: function(e, t, r) {
        e.exports = r(168)
    },
    17: function(e, t) {
        "use strict";

        function r(e) {
            return "im_store_" + e
        }

        function i(e) {
            return ls.get(r(e)) || {}
        }

        function o(e, t, i) {
            if (ls.checkVersion()) {
                var o = JSON.stringify(t);
                rand(0, 1e5) <= 1 && statlogsValueEvent("im_local_store_size", o.length), i(r(e), o)
            }
        }

        function a(e, t, r) {
            if (t === _) return e[t] || [];
            if (e[t]) {
                var i = extend(!0, {}, e[t][r]);
                if (t == s) return i.txt = clean(i.txt), i
            }
            return null
        }

        function n(e, t, r) {
            switch (e[t] || (e[t] = {}), t) {
                case l:
                    var i = d(r, 2),
                        o = i[0],
                        a = i[1];
                    a && a.length ? e[t][o] = a : e[t][o] && delete e[t][o];
                    break;
                case s:
                    var n = d(r, 2),
                        c = n[0],
                        m = n[1];
                    m && (m.txt || m.medias && m.medias.length) ? e[t][c] = m : e[t][c] && delete e[t][c];
                    break;
                case _:
                    var u = r;
                    u && u.length > 0 ? e[t] = u : delete e[t];
                    break;
                case b:
                    var f = d(r, 2),
                        h = f[0],
                        v = f[1];
                    v && !isEmpty(v) ? e[t][h] = v : e[t][h] && delete e[t][h]
            }
            return e
        }

        function c(e, t) {
            var r = ["peerFwd_", "im_draft", "bind_to_url_store_"],
                a = r.length;
            if (ls.checkVersion()) {
                var c = i(e);
                Object.keys(localStorage).reduce(function(e, t) {
                    for (var i = 0; a > i; i++)
                        if (t.substr(0, r[i].length) === r[i]) return e.concat([
                            [r[i]].concat(t.substr(r[i].length).split("_"))
                        ]);
                    return e
                }, []).forEach(function(t) {
                    var r = d(t, 3),
                        i = r[0],
                        o = r[1],
                        a = r[2];
                    switch (i) {
                        case "peerFwd_":
                            if (intval(o) === e) {
                                var m = "peerFwd_" + e + "_" + a,
                                    u = ls.get(m);
                                c = n(c, l, [a, u]), ls.remove(m)
                            }
                            break;
                        case "im_draft":
                            if (intval(o) === e) {
                                var _ = "im_draft" + e + "_" + a,
                                    f = ls.get(_);
                                c = n(c, s, [a, f]), ls.remove(_)
                            }
                            break;
                        case "bind_to_url_store_":
                            var h = "bind_to_url_store_" + o,
                                v = ls.get(h);
                            c = n(c, b, [o, v]), ls.remove(h)
                    }
                }), o(e, c, t)
            }
        }

        function m(e, t, i) {
            i.key === r(e) && (t.db = JSON.parse(i.newValue), t.checkTime = Date.now())
        }

        function u(e) {
            var t = debounce(function(e, t) {
                localStorage.setItem(e, t)
            }, 300);
            c(e, t);
            var r = {
                    db: i(e),
                    checkTime: Date.now()
                },
                u = m.bind(null, e, r);
            return window.addEventListener("storage", u, !1), {
                select: function(t, o) {
                    return Date.now() - r.checkTime > 1e3 && (r.db = i(e)), a(r.db, t, o)
                },
                update: function(i, a) {
                    var c = n(r.db, i, a);
                    return r.db = c, r.checkTime = Date.now(), o(e, c, t)
                },
                unmount: function() {
                    window.removeEventListener("storage", u, !1)
                }
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var d = function() {
            function e(e, t) {
                var r = [],
                    i = !0,
                    o = !1,
                    a = void 0;
                try {
                    for (var n, c = e[Symbol.iterator](); !(i = (n = c.next()).done) && (r.push(n.value), !t || r.length !== t); i = !0);
                } catch (m) {
                    o = !0, a = m
                } finally {
                    try {
                        !i && c["return"] && c["return"]()
                    } finally {
                        if (o) throw a
                    }
                }
                return r
            }
            return function(t, r) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.migrateLocalstorage = c, t.mount = u;
        var l = t.FWD_STORE_OP = "fwd",
            s = t.DRAFT_STORE_OP = "draft",
            b = t.ATTACH_STORE_OP = "bind_attach",
            _ = t.RECENT_SEARCH_OP = "recent_search"
    },
    168: function(e, t, r) {
        "use strict";
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
            },
            o = r(17),
            a = window.WriteBox = {
                mrg: function(e) {
                    return vk.rtl ? {
                        marginRight: e
                    } : {
                        marginLeft: e
                    }
                },
                show: function(e, t) {
                    var r = t.toData[0],
                        i = t.toData[7];
                    if (e.setOptions({
                            hideButtons: !0,
                            width: 502,
                            bodyStyle: "padding: 0px; border: 0px;",
                            title: t.title,
                            titleControls: ('<a class="mail_box_header_link" href="/im?sel=' + r + '" onclick="return WriteBox.toFull(event, ' + r + ')">' + t.mail_go_to_dialog + "</a>").replace("%s", i)
                        }), e.removeButtons(), cur.lang = extend(cur.lang || {}, t.lang), extend(cur, {
                            mbTxtInp: {},
                            mbEditable: t.editable,
                            mbSmile: ge("mbe_smile"),
                            toData: t.toData,
                            mbEmoji: t.emoji,
                            mbMedia: null,
                            mbField: ge(t.editable ? "mail_box_editable" : "mail_box_text"),
                            mbAva: ge("mail_box_ava"),
                            mbMediaTypes: t.mediaTypes,
                            mbTo: t.toData,
                            mbHash: t.hash,
                            mbBannedHim: t.bannedhim,
                            ldb: (0, o.mount)(vk.id)
                        }), t.emojiRcnt && !cur.mbRcntEmoji) {
                        for (var n = [], c = t.emojiRcnt, m = 0, u = c.length; u > m; ++m) {
                            var d = c[m];
                            d && n.push('<a id="mbe_rc_em_' + d + '" class="mbe_rc_emojibtn" onmousedown="Emoji.addEmoji(cur.emojiWId, \'' + d + "', this); return cancelEvent(event);\">" + Emoji.getEmojiHTML(d, !1, !0) + "</a>")
                        }
                        cur.mbRcntEmoji = n.join("")
                    }
                    cur.nav.push(function() {
                        cur.ldb.unmount()
                    }), val("mbe_rcemoji", cur.mbRcntEmoji || ""), cur.peer = a.getPeer(), cur.sharedImWrite = {}, cur.emojiWId = Emoji.init(cur.mbField, {
                        ttDiff: 1,
                        controlsCont: ge("mbe_emoji_wrap"),
                        shouldFocus: !0,
                        onSend: a.send,
                        rPointer: !0,
                        noEnterSend: 1,
                        noStickers: !!t.checkedRecipent,
                        forceTxt: !t.editable,
                        sharedTT: cur.sharedImWrite,
                        txt: ge("mail_box_editable"),
                        checkEditable: a.checkEditable,
                        saveDraft: a.saveDraft,
                        rceCont: ge("mbe_rcemoji_cont"),
                        addMediaBtn: ge("mail_box_add_row"),
                        sendWrap: ge("mail_box_controls"),
                        onKeyAction: function(e) {
                            clearTimeout(cur.saveWriteBoxDraft);
                            var t = "paste" == e.type ? 0 : 300;
                            cur.saveWriteBoxDraft = setTimeout(a.saveDraft, t)
                        },
                        onStickerSend: function(e, t) {
                            var r = trim(Emoji.editableVal(cur.mbField)),
                                i = cur.mbMedia.getMedias(),
                                o = cur.toData[0];
                            ajax.post("/al_mail.php", {
                                act: "a_send",
                                to_ids: o,
                                chas: cur.mbHash,
                                msg: "",
                                ts: cur.ts,
                                media: "sticker:" + e,
                                send_sticker: 1,
                                from: "box",
                                sticker_referrer: t
                            }, {
                                onDone: function(e, t) {
                                    r || i.length ? a.send(!1) : (t && ls.set("im_draft" + vk.id + "_" + t, !1), curBox().hide(), showDoneBox(e))
                                },
                                showProgress: lockButton.pbind("mail_box_send"),
                                hideProgress: unlockButton.pbind("mail_box_send"),
                                onFail: function(e) {
                                    var t = showFastBox(getLang("global_error"), e).hide;
                                    return setTimeout(t, 3e3), !0
                                }
                            })
                        },
                        onRecentEmojiUpdate: function() {
                            a.extractEmoji()
                        }
                    }), Emoji.emojiLoadMore(cur.emojiWId), cur.mbTo[0] ? cur.mbHidden = !1 : cur.mbHidden = !0, cur.imwEmoji = -1;
                    var l = cur.postTo;
                    cur.postTo = !1, e.setOptions({
                        onHide: function() {
                            removeEvent(document, "keydown", a.onKey), cur.mbEmojiShown && Emoji.ttClick(cur.emojiWId, cur.mbSmile, !0), cur.mbOnMouseClick && (cur.onMouseClick = cur.mbOnMouseClick, cur.mbOnMouseClick = !1), browser.mozilla
                        },
                        onShow: function() {
                            addEvent(document, "keydown", a.onKey), cur.mbOnMouseClick || (cur.mbOnMouseClick = cur.onMouseClick), browser.mozilla, cur.sorterClbk && (cur.sorterClbk(), delete cur.sorterClbk)
                        },
                        onClean: function() {
                            clearTimeout(cur.mbSaveDraftTO), delete cur.mbSaveDraftTO, delete cur.mbField, cur.postTo = l, cur.mbEmojiScroll = cur.mbEmojiExpanded = !1, cur.mbForceAttach = !1, window.WideDropdown && WideDropdown.deinit("mail_box_dd")
                        }
                    }), addEvent(document, "keydown", a.onKey), cur.mbOnMouseClick || (cur.mbOnMouseClick = cur.onMouseClick), stManager.add(["page.js", "page.css"], function() {
                        var t = {
                            mail: 1,
                            nocl: 1,
                            editable: 1,
                            sortable: 1,
                            teWidth: 150,
                            teHeight: 100,
                            toggleLnk: !0
                        };
                        cur.mbForceAttach && "market" == cur.mbForceAttach[0] && (t.onMediaAdd = function() {
                            for (var e in cur.mbMedia.chosenMedias)
                                if ("market" == cur.mbMedia.chosenMedias[e][0]) {
                                    var t = cur.mbMedia.chosenMedias[e][2];
                                    hide(geByClass1("page_media_x_wrap", t)), cur.mbMedia.chosenMedias.splice(e, 1)
                                }
                        }), cur.mbMedia = new MediaSelector("mail_box_add_link", "mail_box_added_row", cur.mbMediaTypes, t), cur.mbMedia.onChange = function() {
                            e.changed = !0, setTimeout(function() {
                                a.saveDraft()
                            }, 100)
                        }, ls.checkVersion() && cur.mbTo[0] && a.restoreDraft(cur.mbTo[0])
                    })
                },
                getPeer: function() {
                    return intval(cur.toData[0])
                },
                restoreDraft: function(e) {
                    var t = a.getPeer();
                    if (!(!t || e && t != intval(e) || browser.mobile) && cur.mbMedia) {
                        var r = cur.ldb.select(o.DRAFT_STORE_OP, t);
                        if (cur.mbForceAttach && "market" == cur.mbForceAttach[0] && (r = {
                                txt: unclean(getLang("mail_market_tmpl")).replace(/<br>/g, "\n"),
                                medias: [cur.mbForceAttach]
                            }), r) {
                            a.editableHasVal(cur.mbField) || (cur.mbEditable ? (val(cur.mbField, clean(r.txt || "").replace(/\n/g, "<br/>")), window.Emoji && Emoji.editableFocus(cur.mbField, !1, !0)) : val(cur.mbField, r.txt || ""));
                            var i = (r.medias || []).length && !(cur.mbMedia.chosenMedias || []).length;
                            if (i) {
                                var n = [];
                                for (var c in r.medias) r.medias[c] && n.push(r.medias[c].slice(0, 2).join(","));
                                ajax.post("al_im.php", {
                                    act: "draft_medias",
                                    media: n.join("*")
                                }, {
                                    onDone: function(e) {
                                        cur.mbField && a.getPeer() == t && (e || []).length && each(e, function() {
                                            var e = [this[0], this[1], this[2], this[3], !0];
                                            cur.mbMedia.chooseMedia.bind(cur.mbMedia).apply(void 0, e)
                                        })
                                    }
                                })
                            }
                        }
                        a.checkEditable(cur.emojiWId, cur.mbField), a.checkLen(cur.mbField)
                    }
                },
                saveDraft: function() {
                    var e = a.getPeer();
                    if (e) {
                        for (var t = {
                                txt: trim(Emoji.editableVal(cur.mbField)),
                                medias: []
                            }, r = cur.mbMedia.getMedias(), i = 0, n = r.length; n > i; ++i) r[i] && t.medias.push([r[i][0], r[i][1]]);
                        t.medias.length || t.txt.length || (t = !1), cur.ldb.update(o.DRAFT_STORE_OP, [intval(e), t])
                    }
                },
                toFull: function(e, t) {
                    if (!checkEvent(e)) {
                        var r = {
                                0: "im",
                                sel: t
                            },
                            o = trim(Emoji.editableVal(cur.mbField));
                        if (o && (r.message = o), cur.mbMedia.chosenMedias) {
                            for (var a = cur.mbMedia.getMedias(), n = [], c = 0, m = a.length; m > c; ++c) {
                                var u = a[c],
                                    d = [];
                                for (var l in u) "object" != i(u[l]) && d.push(u[l]);
                                n.push(d.join(","))
                            }
                            r.media = n.join("*")
                        }
                        return nav.go(r, null, {
                            noback: !0
                        }), !1
                    }
                },
                send: function(e) {
                    if (!buttonLocked("mail_box_send")) {
                        var t = trim(Emoji.editableVal(cur.mbField)),
                            r = cur.mbMedia.getMedias();
                        cur.mbEditable && a.extractEmoji();
                        var i = {
                            act: "a_send",
                            chas: cur.mbHash,
                            message: t,
                            title: isVisible("mail_box_title_wrap") && val("mail_box_title") || "",
                            from: "box",
                            media: [],
                            to_ids: []
                        };
                        cur.mbForceAttach && (i.attach1_type = cur.mbForceAttach[0], i.attach1 = cur.mbForceAttach[1], i.attach1_hash = cur.mbForceAttach[2]);
                        for (var n, c = 0, m = r.length; m > c; ++c)(n = r[c]) && i.media.push(n[0] + ":" + n[1]);
                        return i.media = i.media.join(","), t || i.media ? (i.to_ids = cur.toData[0], cur.mbBannedHim == i.to_ids && e !== !0 ? void(showBox("al_profile.php", {
                            act: "banned_him",
                            action: "mail",
                            mid: cur.mbBannedHim
                        }, {
                            dark: 1
                        }).onContinue = a.send.pbind(!0)) : void ajax.post("al_mail.php", i, {
                            onDone: function(e, t) {
                                t && cur.ldb.update(o.DRAFT_STORE_OP, [t, !1]), curBox().hide(), showDoneBox(e)
                            },
                            showProgress: lockButton.pbind("mail_box_send"),
                            hideProgress: unlockButton.pbind("mail_box_send")
                        })) : cur.mbEditable ? Emoji.editableFocus(cur.mbField) : elfocus(cur.mbField)
                    }
                },
                checkLen: function(e) {
                    cur.mbTxtInp.value = Emoji.editableVal(e), checkTextLength(4096, cur.mbTxtInp, "mail_box_warn"), toggle("mail_box_title_wrap", cur.mbTxtInp.lastLen > 200)
                },
                codeToChr: function(e) {
                    for (var t = e.length / 4, r = "", i = 0; t--;) r += String.fromCharCode(parseInt(e.substr(i, 4), 16)), i += 4;
                    return r
                },
                editableHasVal: function(e) {
                    return e ? "TEXTAREA" == e.tagName ? !!val(e) : !(!geByTag1("IMG", e) && !stripHTML(val(e)).replace(/[\s\xa0]/g, "").length) : !1
                },
                checkEditable: function(e, t) {
                    cur.mbEditable && Emoji.checkEditable(e, t, {
                        height: 180
                    })
                },
                cssAnimation: function() {
                    var e = intval(browser.version);
                    return browser.chrome && e > 14 || browser.mozilla && e > 13 || browser.opera && e > 2 ? !0 : !1
                },
                onKey: function(e) {
                    var t = "INPUT" == e.target.tagName || "TEXTAREA" == e.target.tagName || "mail_box_editable" == e.target.id;
                    if (!isInputActive()) {
                        if (e.keyCode > 40 && !e.ctrlKey && !e.metaKey && !t)
                            if (cur.mbEditable) Emoji.editableFocus(cur.mbField, !1, !0);
                            else {
                                var r = cur.mbField;
                                !r.active && elfocus(r)
                            }
                        return !0
                    }
                },
                extractEmoji: function() {
                    var e = ge("mbe_rcemoji");
                    if (e) {
                        var t = "",
                            r = Emoji.getRecentEmojiSorted().slice(0, 7);
                        for (var i in r)
                            if (r.hasOwnProperty(i)) {
                                var o = r[i];
                                t += '<a id="mbe_rc_em_' + o + '" class="mbe_rc_emojibtn" onmousedown="Emoji.addEmoji(cur.emojiWId, \'' + o + "', this); return cancelEvent(event);\">" + Emoji.getEmojiHTML(o, !1, !0) + "</a>"
                            }
                        val(e, t)
                    }
                }
            };
        try {
            stManager.done("writebox.js")
        } catch (n) {}
    }
});