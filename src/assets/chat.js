function lazyload() {
    $(window).trigger("scroll")
}

function getQueryString(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        n = t.exec(location.search);
    return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
}

function getHash(e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var t = new RegExp("[\\?&]" + e + "=([^&#]*)"),
        n = t.exec(location.hash);
    return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
}

function isset() {
    var e = arguments,
        t = e.length,
        n = 0,
        a;
    if (0 === t) throw new Error("Empty isset");
    for (; n !== t;) {
        if (e[n] === a || null === e[n]) return !1;
        n++
    }
    return !0
}

function number_format(e, t, n, a) {
    e = (e + "").replace(/[^0-9+\-Ee.]/g, "");
    var r = isFinite(+e) ? +e : 0,
        o = isFinite(+t) ? Math.abs(t) : 0,
        i = "undefined" == typeof a ? "," : a,
        s = "undefined" == typeof n ? "." : n,
        l = "",
        f = function(e, t) {
            var n = Math.pow(10, t);
            return "" + (Math.round(e * n) / n).toFixed(t)
        };
    return l = (o ? f(r, o) : "" + Math.round(r)).split("."), l[0].length > 3 && (l[0] = l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, i)), (l[1] || "").length < o && (l[1] = l[1] || "", l[1] += new Array(o - l[1].length + 1).join("0")), l.join(s)
}

function str_replace(e, t, n, a) {
    var r = 0,
        o = 0,
        i = "",
        s = "",
        l = 0,
        f = 0,
        c = [].concat(e),
        u = [].concat(t),
        d = n,
        p = "[object Array]" === Object.prototype.toString.call(u),
        h = "[object Array]" === Object.prototype.toString.call(d);
    for (d = [].concat(d), a && (this.window[a] = 0), r = 0, l = d.length; r < l; r++)
        if ("" !== d[r])
            for (o = 0, f = c.length; o < f; o++) i = d[r] + "", s = p ? void 0 !== u[o] ? u[o] : "" : u[0], d[r] = i.split(c[o]).join(s), a && d[r] !== i && (this.window[a] += (i.length - d[r].length) / c[o].length);
    return h ? d : d[0]
}

function windowSize() {
    var e = window,
        t = "inner";
    return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
        width: e[t + "Width"],
        height: e[t + "Height"]
    }
}

function sortBySubkey(e, t) {
    return e.sort(function(e, n) {
        var a = e[t],
            r = n[t];
        return a < r ? -1 : a > r ? 1 : 0
    })
}

function trackEvent(e, t) {
    t = t.replace("https://nomadlist.com/", ""), t = t.replace("https://nomadlist.com", ""), t = t.replace("http://nomadlist.com/", ""), t = t.replace("http://nomadlist.com", "");
    var n = {};
    n.url = t, window.ga && (ga("send", e, t), ga("b.send", e, t))
}

function explode(e, t, n) {
    if (arguments.length < 2 || "undefined" == typeof e || "undefined" == typeof t) return null;
    if ("" === e || e === !1 || null === e) return !1;
    if ("function" == typeof e || "object" == typeof e || "function" == typeof t || "object" == typeof t) return {
        0: ""
    };
    e === !0 && (e = "1"), e += "", t += "";
    var a = t.split(e);
    return "undefined" == typeof n ? a : (0 === n && (n = 1), n > 0 ? n >= a.length ? a : a.slice(0, n - 1).concat([a.slice(n - 1).join(e)]) : -n >= a.length ? [] : (a.splice(a.length + n), a))
}

function isset(e) {
    var e = arguments,
        t = e.length,
        n = 0,
        a;
    if (0 === t) throw new Error("Empty isset");
    for (; n !== t;) {
        if (e[n] === a || null === e[n]) return !1;
        n++
    }
    return !0
}

function empty(e) {
    var t, n, a, r, o = [t, null, !1, 0, "", "0"];
    for (a = 0, r = o.length; a < r; a++)
        if (e === o[a]) return !0;
    if ("object" == typeof e) {
        for (n in e) return !1;
        return !0
    }
    return !1
}

function strtotime(e, t) {
    function n(e, t, n) {
        var a, r = f[t];
        "undefined" != typeof r && (a = r - l.getDay(), 0 === a ? a = 7 * n : a > 0 && "last" === e ? a -= 7 : a < 0 && "next" === e && (a += 7), l.setDate(l.getDate() + a))
    }

    function a(e) {
        var t = e.split(" "),
            a = t[0],
            r = t[1].substring(0, 3),
            o = /\d+/.test(a),
            i = "ago" === t[2],
            s = ("last" === a ? -1 : 1) * (i ? -1 : 1);
        if (o && (s *= parseInt(a, 10)), c.hasOwnProperty(r) && !t[1].match(/^mon(day|\.)?$/i)) return l["set" + c[r]](l["get" + c[r]]() + s);
        if ("wee" === r) return l.setDate(l.getDate() + 7 * s);
        if ("next" === a || "last" === a) n(a, r, s);
        else if (!o) return !1;
        return !0
    }
    var r, o, i, s, l, f, c, u, d, p, h, g = !1;
    if (!e) return g;
    if (e = e.replace(/^\s+|\s+$/g, "").replace(/\s{2,}/g, " ").replace(/[\t\r\n]/g, "").toLowerCase(), o = e.match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/), o && o[2] === o[4])
        if (o[1] > 1901) switch (o[2]) {
            case "-":
                return o[3] > 12 || o[5] > 31 ? g : new Date(o[1], parseInt(o[3], 10) - 1, o[5], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3;
            case ".":
                return g;
            case "/":
                return o[3] > 12 || o[5] > 31 ? g : new Date(o[1], parseInt(o[3], 10) - 1, o[5], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3
        } else if (o[5] > 1901) switch (o[2]) {
            case "-":
                return o[3] > 12 || o[1] > 31 ? g : new Date(o[5], parseInt(o[3], 10) - 1, o[1], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3;
            case ".":
                return o[3] > 12 || o[1] > 31 ? g : new Date(o[5], parseInt(o[3], 10) - 1, o[1], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3;
            case "/":
                return o[1] > 12 || o[3] > 31 ? g : new Date(o[5], parseInt(o[1], 10) - 1, o[3], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3
        } else switch (o[2]) {
            case "-":
                return o[3] > 12 || o[5] > 31 || o[1] < 70 && o[1] > 38 ? g : (s = o[1] >= 0 && o[1] <= 38 ? +o[1] + 2e3 : o[1], new Date(s, parseInt(o[3], 10) - 1, o[5], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3);
            case ".":
                return o[5] >= 70 ? o[3] > 12 || o[1] > 31 ? g : new Date(o[5], parseInt(o[3], 10) - 1, o[1], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3 : o[5] < 60 && !o[6] ? o[1] > 23 || o[3] > 59 ? g : (i = new Date, new Date(i.getFullYear(), i.getMonth(), i.getDate(), o[1] || 0, o[3] || 0, o[5] || 0, o[9] || 0) / 1e3) : g;
            case "/":
                return o[1] > 12 || o[3] > 31 || o[5] < 70 && o[5] > 38 ? g : (s = o[5] >= 0 && o[5] <= 38 ? +o[5] + 2e3 : o[5], new Date(s, parseInt(o[1], 10) - 1, o[3], o[6] || 0, o[7] || 0, o[8] || 0, o[9] || 0) / 1e3);
            case ":":
                return o[1] > 23 || o[3] > 59 || o[5] > 59 ? g : (i = new Date, new Date(i.getFullYear(), i.getMonth(), i.getDate(), o[1] || 0, o[3] || 0, o[5] || 0) / 1e3)
        }
    if ("now" === e) return null === t || isNaN(t) ? (new Date).getTime() / 1e3 | 0 : 0 | t;
    if (!isNaN(r = Date.parse(e))) return r / 1e3 | 0;
    if (l = t ? new Date(1e3 * t) : new Date, f = {
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
        }, c = {
            yea: "FullYear",
            mon: "Month",
            day: "Date",
            hou: "Hours",
            min: "Minutes",
            sec: "Seconds"
        }, d = "(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)", p = "([+-]?\\d+\\s" + d + "|(last|next)\\s" + d + ")(\\sago)?", o = e.match(new RegExp(p, "gi")), !o) return g;
    for (h = 0, u = o.length; h < u; h++)
        if (!a(o[h])) return g;
    return l.getTime() / 1e3
}

function makeUrlSlug(e) {
    return e.toLowerCase().replace(/ /g, "-").replace(/[^\w-]+/g, "")
}

function date(e, t) {
    var n = this,
        a, r, o = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        i = /\\?(.?)/gi,
        s = function(e, t) {
            return r[e] ? r[e]() : t
        },
        l = function(e, t) {
            for (e = String(e); e.length < t;) e = "0" + e;
            return e
        };
    return r = {
        d: function() {
            return l(r.j(), 2)
        },
        D: function() {
            return r.l().slice(0, 3)
        },
        j: function() {
            return a.getDate()
        },
        l: function() {
            return o[r.w()] + "day"
        },
        N: function() {
            return r.w() || 7
        },
        S: function() {
            var e = r.j(),
                t = e % 10;
            return t <= 3 && 1 == parseInt(e % 100 / 10, 10) && (t = 0), ["st", "nd", "rd"][t - 1] || "th"
        },
        w: function() {
            return a.getDay()
        },
        z: function() {
            var e = new Date(r.Y(), r.n() - 1, r.j()),
                t = new Date(r.Y(), 0, 1);
            return Math.round((e - t) / 864e5)
        },
        W: function() {
            var e = new Date(r.Y(), r.n() - 1, r.j() - r.N() + 3),
                t = new Date(e.getFullYear(), 0, 4);
            return l(1 + Math.round((e - t) / 864e5 / 7), 2)
        },
        F: function() {
            return o[6 + r.n()]
        },
        m: function() {
            return l(r.n(), 2)
        },
        M: function() {
            return r.F().slice(0, 3)
        },
        n: function() {
            return a.getMonth() + 1
        },
        t: function() {
            return new Date(r.Y(), r.n(), 0).getDate()
        },
        L: function() {
            var e = r.Y();
            return e % 4 === 0 & e % 100 !== 0 | e % 400 === 0
        },
        o: function() {
            var e = r.n(),
                t = r.W(),
                n = r.Y();
            return n + (12 === e && t < 9 ? 1 : 1 === e && t > 9 ? -1 : 0)
        },
        Y: function() {
            return a.getFullYear()
        },
        y: function() {
            return r.Y().toString().slice(-2)
        },
        a: function() {
            return a.getHours() > 11 ? "pm" : "am"
        },
        A: function() {
            return r.a().toUpperCase()
        },
        B: function() {
            var e = 3600 * a.getUTCHours(),
                t = 60 * a.getUTCMinutes(),
                n = a.getUTCSeconds();
            return l(Math.floor((e + t + n + 3600) / 86.4) % 1e3, 3)
        },
        g: function() {
            return r.G() % 12 || 12
        },
        G: function() {
            return a.getHours()
        },
        h: function() {
            return l(r.g(), 2)
        },
        H: function() {
            return l(r.G(), 2)
        },
        i: function() {
            return l(a.getMinutes(), 2)
        },
        s: function() {
            return l(a.getSeconds(), 2)
        },
        u: function() {
            return l(1e3 * a.getMilliseconds(), 6)
        },
        e: function() {
            throw "Not supported (see source code of date() for timezone on how to add support)"
        },
        I: function() {
            var e = new Date(r.Y(), 0),
                t = Date.UTC(r.Y(), 0),
                n = new Date(r.Y(), 6),
                a = Date.UTC(r.Y(), 6);
            return e - t !== n - a ? 1 : 0
        },
        O: function() {
            var e = a.getTimezoneOffset(),
                t = Math.abs(e);
            return (e > 0 ? "-" : "+") + l(100 * Math.floor(t / 60) + t % 60, 4)
        },
        P: function() {
            var e = r.O();
            return e.substr(0, 3) + ":" + e.substr(3, 2)
        },
        T: function() {
            return "UTC"
        },
        Z: function() {
            return 60 * -a.getTimezoneOffset()
        },
        c: function() {
            return "Y-m-d\\TH:i:sP".replace(i, s)
        },
        r: function() {
            return "D, d M Y H:i:s O".replace(i, s)
        },
        U: function() {
            return a / 1e3 | 0
        }
    }, this.date = function(e, t) {
        return n = this, a = void 0 === t ? new Date : t instanceof Date ? new Date(t) : new Date(1e3 * t), e.replace(i, s)
    }, this.date(e, t)
}

function setCookie(e, t, n) {
    var a = new Date;
    a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3);
    var r = "expires=" + a.toGMTString();
    document.cookie = e + "=" + t + "; " + r
}

function getCookie(e) {
    for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
        for (var r = n[a];
            " " == r.charAt(0);) r = r.substring(1);
        if (r.indexOf(t) != -1) return r.substring(t.length, r.length)
    }
    return ""
}

function time() {
    return Math.floor((new Date).getTime() / 1e3)
}

function in_array(e, t, n) {
    var a = "",
        r = !!n;
    if (r) {
        for (a in t)
            if (t[a] === e) return !0
    } else
        for (a in t)
            if (t[a] == e) return !0;
    return !1
}

function ucwords(e) {
    return (e + "").replace(/^([a-z\u00E0-\u00FC])|\s+([a-z\u00E0-\u00FC])/g, function(e) {
        return e.toUpperCase()
    })
}

function properlyCapitalize(e) {
    var t, n, e, a, r;
    for (e = e.replace(/([^\W_]+[^\s-]*) */g, function(e) {
            return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        }), a = ["vs", "vs.", "A", "An", "The", "And", "But", "Or", "For", "Nor", "As", "At", "By", "For", "From", "In", "Into", "Near", "Of", "On", "Onto", "To", "With"], t = 0, n = a.length; t < n; t++) e = e.replace(new RegExp("\\s" + a[t] + "\\s", "g"), function(e) {
        return e.toLowerCase()
    });
    for (r = ["Id", "Tv"], t = 0, n = r.length; t < n; t++) e = e.replace(new RegExp("\\b" + r[t] + "\\b", "g"), r[t].toUpperCase());
    return e
}

function celsiusToFahrenheit(e) {
    var t = e,
        n = 9 * t / 5 + 32;
    return Math.round(n)
}

function timeAgoShort(e) {
    var t = (new Date).getTime() / 1e3 - e;
    Math.floor(t);
    var n = t / 60;
    if (t = Math.floor(t % 60), n < 1) return t + "s";
    var a = n / 60;
    if (n = Math.floor(n % 60), a < 1) return n + "m";
    var r = a / 24;
    if (a = Math.floor(a % 24), r < 1) return a + "h";
    var o = r / 7;
    if (r = Math.floor(r % 7), o < 1) return r + "d";
    var i = o / 4.35;
    if (o = Math.floor(o % 4.35), i < 1) return o + "w";
    var s = i / 12;
    return i = Math.floor(i % 12), s < 1 ? i + "mo" : (s = Math.floor(s), s + "y")
}

function unserialize(e) {
    function t(e, n) {
        var a, s, l, f, c, u, d, p, h, g, m, v, y, b, w, x, _, C, T = 0,
            k = function(e) {
                return e
            };
        switch (n || (n = 0), a = e.slice(n, n + 1).toLowerCase(), s = n + 2, a) {
            case "i":
                k = function(e) {
                    return parseInt(e, 10)
                }, h = o(e, s, ";"), T = h[0], p = h[1], s += T + 1;
                break;
            case "b":
                k = function(e) {
                    return 0 !== parseInt(e, 10)
                }, h = o(e, s, ";"), T = h[0], p = h[1], s += T + 1;
                break;
            case "d":
                k = function(e) {
                    return parseFloat(e)
                }, h = o(e, s, ";"), T = h[0], p = h[1], s += T + 1;
                break;
            case "n":
                p = null;
                break;
            case "s":
                g = o(e, s, ":"), T = g[0], m = g[1], s += T + 2, h = i(e, s + 1, parseInt(m, 10)), T = h[0], p = h[1], s += T + 2, T !== parseInt(m, 10) && T !== p.length && r("SyntaxError", "String length mismatch");
                break;
            case "a":
                for (p = {}, l = o(e, s, ":"), T = l[0], f = l[1], s += T + 2, u = parseInt(f, 10), c = !0, v = 0; v < u; v++) b = t(e, s), w = b[1], y = b[2], s += w, x = t(e, s), _ = x[1], C = x[2], s += _, y !== v && (c = !1), p[y] = C;
                if (c) {
                    for (d = new Array(u), v = 0; v < u; v++) d[v] = p[v];
                    p = d
                }
                s += 1;
                break;
            default:
                r("SyntaxError", "Unknown / Unhandled data type(s): " + a)
        }
        return [a, s - n, k(p)]
    }
    var n = "undefined" != typeof window ? window : global,
        a = function(e) {
            for (var t = e.length, n = e.length - 1; n >= 0; n--) {
                var a = e.charCodeAt(n);
                a > 127 && a <= 2047 ? t++ : a > 2047 && a <= 65535 && (t += 2), a >= 56320 && a <= 57343 && n--
            }
            return t - 1
        },
        r = function(e, t, a, r) {
            throw new n[e](t, a, r)
        },
        o = function(e, t, n) {
            for (var a = 2, o = [], i = e.slice(t, t + 1); i !== n;) a + t > e.length && r("Error", "Invalid"), o.push(i), i = e.slice(t + (a - 1), t + a), a += 1;
            return [o.length, o.join("")]
        },
        i = function(e, t, n) {
            var r, o, i;
            for (i = [], r = 0; r < n; r++) o = e.slice(t + (r - 1), t + r), i.push(o), n -= a(o);
            return [i.length, i.join("")]
        };
    return t(e + "", 0)[2]
}

function urlencode(e) {
    return e += "", encodeURIComponent(e).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+")
}

function is_numeric(e) {
    return !isNaN(parseFloat(e)) && isFinite(e)
}

function encryptString(e, t) {
    var n = "",
        a = "";
    a = e.toString();
    for (var r = 0; r < e.length; r++) {
        var o = e.charCodeAt(r),
            i = o ^ t;
        n += String.fromCharCode(i)
    }
    return n
}

function shuffle(e) {
    for (var t = e.length, n, a; t;) a = Math.floor(Math.random() * t--), n = e[t], e[t] = e[a], e[a] = n;
    return e
}

function empty(e) {
    var t, n, a, r, o = [t, null, !1, 0, "", "0"];
    for (a = 0, r = o.length; a < r; a++)
        if (e === o[a]) return !0;
    if ("object" == typeof e) {
        for (n in e) return !1;
        return !0
    }
    return !1
}

function windowSize() {
    var e = window,
        t = "inner";
    return "innerWidth" in window || (t = "client", e = document.documentElement || document.body), {
        width: e[t + "Width"],
        height: e[t + "Height"]
    }
}

function time() {
    return Math.floor((new Date).getTime() / 1e3)
}

function linkify(e) {
    e = str_replace("http//", "http://", e);
    var t = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,
        n = /(^|[^\/])(www\.[\S]+(\b|$))/gim,
        a = /[\w.]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,6})+/gim;
    return e.replace(t, '<a target="_new" href="$&">$&</a>').replace(n, '$1<a target="_new" href="http://$2">$2</a>').replace(a, '<a href="mailto:$&">$&</a>')
}

function isHostReachable() {
    var e = new(window.ActiveXObject || XMLHttpRequest)("Microsoft.XMLHTTP"),
        t;
    e.open("HEAD", "//" + window.location.hostname + "/?rand=" + Math.floor(65536 * (1 + Math.random())), !1);
    try {
        return e.send(), e.status >= 200 && (e.status < 300 || 304 === e.status)
    } catch (e) {
        return !1
    }
}

function strip_tags(e) {
    var t = document.createElement("DIV");
    return t.innerHTML = e, t.textContent || t.innerText || ""
}

function viewportToPixels(e) {
    var t = e.match(/([0-9\.]+)(vh|vw)/),
        n = Number(t[1]),
        a = window[["innerHeight", "innerWidth"][
            ["vh", "vw"].indexOf(t[2])
        ]];
    return a * (n / 100)
}

function emojify(e) {
    emoji.img_set = "apple", emoji.init_env();
    var t = emoji.replace_mode;
    emoji.use_sheet = !0, emoji.replace_mode = "img", emoji.text_mode = !1;
    var e = emoji.replace_colons(e);
    return e
}

function consoleNotlog(e) {}

function markdownToHTML(e) {
    return e = e.replace(/\*\*(.*?)\*\*/g, "<i>$1</i>"), e = e.replace(/_(.*?)_/g, "<i>$1</i>"), e = e.replace(/\*(.*?)\*/g, "<b>$1</b>"), e = e.replace(/\`\`\`(.*?)\`\`\`/g, '<span class="note">$1</span>'), e = e.replace(/\`(.*?)\`/g, '<span class="code">$1</span>'), e = e.replace(/~~(.*?)~~/g, "<strike>$1</strike>"), e = e.replace(/~(.*?)~/g, "<strike>$1</strike>")
}

function checkLocalStorageSpaceUsed() {
    var e = "";
    for (var t in window.localStorage) window.localStorage.hasOwnProperty(t) && (e += window.localStorage[t]);
    return 3 + 16 * e.length / 8192
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function a(e) {
        var t = !!e && "length" in e && e.length,
            n = ge.type(e);
        return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        return ge.isFunction(t) ? ge.grep(e, function(e, a) {
            return !!t.call(e, a, e) !== n
        }) : t.nodeType ? ge.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? ge.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : ke.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function i(e) {
        var t = {};
        return ge.each(e.match(Ne) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function f(e, t, n) {
        var a;
        try {
            e && ge.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && ge.isFunction(a = e.then) ? a.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        ne.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), ge.ready()
    }

    function u() {
        this.expando = ge.expando + u.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var a;
        if (void 0 === n && 1 === e.nodeType)
            if (a = "data-" + t.replace(Oe, "-$&").toLowerCase(), n = e.getAttribute(a), "string" == typeof n) {
                try {
                    n = d(n)
                } catch (e) {}
                qe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function h(e, t, n, a) {
        var r, o = 1,
            i = 20,
            s = a ? function() {
                return a.cur()
            } : function() {
                return ge.css(e, t, "")
            },
            l = s(),
            f = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
            c = (ge.cssNumber[t] || "px" !== f && +l) && Re.exec(ge.css(e, t));
        if (c && c[3] !== f) {
            f = f || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, ge.style(e, t, c + f); while (o !== (o = s() / l) && 1 !== o && --i)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], a && (a.unit = f, a.start = c, a.end = r)), r
    }

    function g(e) {
        var t, n = e.ownerDocument,
            a = e.nodeName,
            r = ze[a];
        return r ? r : (t = n.body.appendChild(n.createElement(a)), r = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ze[a] = r, r)
    }

    function m(e, t) {
        for (var n, a, r = [], o = 0, i = e.length; o < i; o++) a = e[o], a.style && (n = a.style.display, t ? ("none" === n && (r[o] = He.get(a, "display") || null, r[o] || (a.style.display = "")), "" === a.style.display && Be(a) && (r[o] = g(a))) : "none" !== n && (r[o] = "none", He.set(a, "display", n)));
        for (o = 0; o < i; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function v(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && ge.nodeName(e, t) ? ge.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, a = e.length; n < a; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
    }

    function b(e, t, n, a, r) {
        for (var o, i, s, l, f, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if (o = e[p], o || 0 === o)
                if ("object" === ge.type(o)) ge.merge(d, o.nodeType ? [o] : o);
                else if (Ve.test(o)) {
            for (i = i || u.appendChild(t.createElement("div")), s = (Ye.exec(o) || ["", ""])[1].toLowerCase(), l = Ge[s] || Ge._default, i.innerHTML = l[1] + ge.htmlPrefilter(o) + l[2], c = l[0]; c--;) i = i.lastChild;
            ge.merge(d, i.childNodes), i = u.firstChild, i.textContent = ""
        } else d.push(t.createTextNode(o));
        for (u.textContent = "", p = 0; o = d[p++];)
            if (a && ge.inArray(o, a) > -1) r && r.push(o);
            else if (f = ge.contains(o.ownerDocument, o), i = v(u.appendChild(o), "script"), f && y(i), n)
            for (c = 0; o = i[c++];) Ze.test(o.type || "") && n.push(o);
        return u
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function _() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function C(e, t, n, a, r, o) {
        var i, s;
        if ("object" == typeof t) {
            "string" != typeof n && (a = a || n, n = void 0);
            for (s in t) C(e, s, n, a, t[s], o);
            return e
        }
        if (null == a && null == r ? (r = n, a = n = void 0) : null == r && ("string" == typeof n ? (r = a, a = void 0) : (r = a, a = n, n = void 0)), r === !1) r = x;
        else if (!r) return e;
        return 1 === o && (i = r, r = function(e) {
            return ge().off(e), i.apply(this, arguments)
        }, r.guid = i.guid || (i.guid = ge.guid++)), e.each(function() {
            ge.event.add(this, t, r, a, n)
        })
    }

    function T(e, t) {
        return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function S(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function L(e, t) {
        var n, a, r, o, i, s, l, f;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (o = He.access(e), i = He.set(t, o), f = o.events)) {
                delete i.handle, i.events = {};
                for (r in f)
                    for (n = 0, a = f[r].length; n < a; n++) ge.event.add(t, r, f[r][n])
            }
            qe.hasData(e) && (s = qe.access(e), l = ge.extend({}, s), qe.set(t, l))
        }
    }

    function E(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && We.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(e, t, a, r) {
        t = oe.apply([], t);
        var o, i, s, l, f, c, u = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            g = ge.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !pe.checkClone && at.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), j(o, t, a, r)
        });
        if (d && (o = b(t, e[0].ownerDocument, !1, e, r), i = o.firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
            for (s = ge.map(v(o, "script"), k), l = s.length; u < d; u++) f = o, u !== p && (f = ge.clone(f, !0, !0), l && ge.merge(s, v(f, "script"))), a.call(e[u], f, u);
            if (l)
                for (c = s[s.length - 1].ownerDocument, ge.map(s, S), u = 0; u < l; u++) f = s[u], Ze.test(f.type || "") && !He.access(f, "globalEval") && ge.contains(c, f) && (f.src ? ge._evalUrl && ge._evalUrl(f.src) : n(f.textContent.replace(ot, ""), c))
        }
        return e
    }

    function N(e, t, n) {
        for (var a, r = t ? ge.filter(t, e) : e, o = 0; null != (a = r[o]); o++) n || 1 !== a.nodeType || ge.cleanData(v(a)), a.parentNode && (n && ge.contains(a.ownerDocument, a) && y(v(a, "script")), a.parentNode.removeChild(a));
        return e
    }

    function D(e, t, n) {
        var a, r, o, i, s = e.style;
        return n = n || lt(e), n && (i = n.getPropertyValue(t) || n[t], "" !== i || ge.contains(e.ownerDocument, e) || (i = ge.style(e, t)), !pe.pixelMarginRight() && st.test(i) && it.test(t) && (a = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = a, s.minWidth = r, s.maxWidth = o)), void 0 !== i ? i + "" : i
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
            if (e = dt[n] + t, e in pt) return e
    }

    function I(e, t, n) {
        var a = Re.exec(t);
        return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
    }

    function H(e, t, n, a, r) {
        var o, i = 0;
        for (o = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (i += ge.css(e, n + Ue[o], !0, r)), a ? ("content" === n && (i -= ge.css(e, "padding" + Ue[o], !0, r)), "margin" !== n && (i -= ge.css(e, "border" + Ue[o] + "Width", !0, r))) : (i += ge.css(e, "padding" + Ue[o], !0, r), "padding" !== n && (i += ge.css(e, "border" + Ue[o] + "Width", !0, r)));
        return i
    }

    function q(e, t, n) {
        var a, r = !0,
            o = lt(e),
            i = "border-box" === ge.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (a = e.getBoundingClientRect()[t]), a <= 0 || null == a) {
            if (a = D(e, t, o), (a < 0 || null == a) && (a = e.style[t]), st.test(a)) return a;
            r = i && (pe.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
        }
        return a + H(e, t, n || (i ? "border" : "content"), r, o) + "px"
    }

    function P(e, t, n, a, r) {
        return new P.prototype.init(e, t, n, a, r)
    }

    function O() {
        gt && (e.requestAnimationFrame(O), ge.fx.tick())
    }

    function F() {
        return e.setTimeout(function() {
            ht = void 0
        }), ht = ge.now()
    }

    function R(e, t) {
        var n, a = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; a < 4; a += 2 - t) n = Ue[a], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function U(e, t, n) {
        for (var a, r = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, i = r.length; o < i; o++)
            if (a = r[o].call(n, t, e)) return a
    }

    function B(e, t, n) {
        var a, r, o, i, s, l, f, c, u = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            g = e.nodeType && Be(e),
            v = He.get(e, "fxshow");
        n.queue || (i = ge._queueHooks(e, "fx"), null == i.unqueued && (i.unqueued = 0, s = i.empty.fire, i.empty.fire = function() {
            i.unqueued || s()
        }), i.unqueued++, d.always(function() {
            d.always(function() {
                i.unqueued--, ge.queue(e, "fx").length || i.empty.fire()
            })
        }));
        for (a in t)
            if (r = t[a], mt.test(r)) {
                if (delete t[a], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[a]) continue;
                    g = !0
                }
                p[a] = v && v[a] || ge.style(e, a)
            }
        if (l = !ge.isEmptyObject(t), l || !ge.isEmptyObject(p)) {
            u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], f = v && v.display, null == f && (f = He.get(e, "display")), c = ge.css(e, "display"), "none" === c && (f ? c = f : (m([e], !0), f = e.style.display || f, c = ge.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != f) && "none" === ge.css(e, "float") && (l || (d.done(function() {
                h.display = f
            }), null == f && (c = h.display, f = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (a in p) l || (v ? "hidden" in v && (g = v.hidden) : v = He.access(e, "fxshow", {
                display: f
            }), o && (v.hidden = !g), g && m([e], !0), d.done(function() {
                g || m([e]), He.remove(e, "fxshow");
                for (a in p) ge.style(e, a, p[a])
            })), l = U(g ? v[a] : 0, a, d), a in v || (v[a] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function X(e, t) {
        var n, a, r, o, i;
        for (n in e)
            if (a = ge.camelCase(n), r = t[a], o = e[n], ge.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== a && (e[a] = o, delete e[n]), i = ge.cssHooks[a], i && "expand" in i) {
                o = i.expand(o), delete e[a];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[a] = r
    }

    function z(e, t, n) {
        var a, r, o = 0,
            i = z.prefilters.length,
            s = ge.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = ht || F(), n = Math.max(0, f.startTime + f.duration - t), a = n / f.duration || 0, o = 1 - a, i = 0, l = f.tweens.length; i < l; i++) f.tweens[i].run(o);
                return s.notifyWith(e, [f, o, n]), o < 1 && l ? n : (s.resolveWith(e, [f]), !1)
            },
            f = s.promise({
                elem: e,
                props: ge.extend({}, t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || F(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var a = ge.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(a), a
                },
                stop: function(t) {
                    var n = 0,
                        a = t ? f.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < a; n++) f.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [f, 1, 0]), s.resolveWith(e, [f, t])) : s.rejectWith(e, [f, t]), this
                }
            }),
            c = f.props;
        for (X(c, f.opts.specialEasing); o < i; o++)
            if (a = z.prefilters[o].call(f, e, c, f.opts)) return ge.isFunction(a.stop) && (ge._queueHooks(f.elem, f.opts.queue).stop = ge.proxy(a.stop, a)), a;
        return ge.map(c, U, f), ge.isFunction(f.opts.start) && f.opts.start.call(e, f), ge.fx.timer(ge.extend(l, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function W(e) {
        var t = e.match(Ne) || [];
        return t.join(" ")
    }

    function Y(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Z(e, t, n, a) {
        var r;
        if (ge.isArray(t)) ge.each(t, function(t, r) {
            n || St.test(e) ? a(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, a)
        });
        else if (n || "object" !== ge.type(t)) a(e, t);
        else
            for (r in t) Z(e + "[" + r + "]", t[r], n, a)
    }

    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var a, r = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (ge.isFunction(n))
                for (; a = o[r++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
        }
    }

    function V(e, t, n, a) {
        function r(s) {
            var l;
            return o[s] = !0, ge.each(e[s] || [], function(e, s) {
                var f = s(t, n, a);
                return "string" != typeof f || i || o[f] ? i ? !(l = f) : void 0 : (t.dataTypes.unshift(f), r(f), !1)
            }), l
        }
        var o = {},
            i = e === Ot;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function J(e, t) {
        var n, a, r = ge.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : a || (a = {}))[n] = t[n]);
        return a && ge.extend(!0, e, a), e
    }

    function Q(e, t, n) {
        for (var a, r, o, i, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)
            for (r in s)
                if (s[r] && s[r].test(a)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                i || (i = r)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function K(e, t, n, a) {
        var r, o, i, s, l, f = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (i in e.converters) f[i.toLowerCase()] = e.converters[i];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (i = f[l + " " + o] || f["* " + o], !i)
                for (r in f)
                    if (s = r.split(" "), s[1] === o && (i = f[l + " " + s[0]] || f["* " + s[0]])) {
                        i === !0 ? i = f[r] : f[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (i !== !0)
                if (i && e.throws) t = i(t);
                else try {
                    t = i(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: i ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function ee(e) {
        return ge.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var te = [],
        ne = e.document,
        ae = Object.getPrototypeOf,
        re = te.slice,
        oe = te.concat,
        ie = te.push,
        se = te.indexOf,
        le = {},
        fe = le.toString,
        ce = le.hasOwnProperty,
        ue = ce.toString,
        de = ue.call(Object),
        pe = {},
        he = "3.1.1",
        ge = function(e, t) {
            return new ge.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        be = function(e, t) {
            return t.toUpperCase()
        };
    ge.fn = ge.prototype = {
        jquery: he,
        constructor: ge,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ge.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ge.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ie,
        sort: te.sort,
        splice: te.splice
    }, ge.extend = ge.fn.extend = function() {
        var e, t, n, a, r, o, i = arguments[0] || {},
            s = 1,
            l = arguments.length,
            f = !1;
        for ("boolean" == typeof i && (f = i, i = arguments[s] || {}, s++), "object" == typeof i || ge.isFunction(i) || (i = {}), s === l && (i = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = i[t], a = e[t], i !== a && (f && a && (ge.isPlainObject(a) || (r = ge.isArray(a))) ? (r ? (r = !1, o = n && ge.isArray(n) ? n : []) : o = n && ge.isPlainObject(n) ? n : {}, i[t] = ge.extend(f, o, a)) : void 0 !== a && (i[t] = a));
        return i
    }, ge.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ge.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== fe.call(e)) && (!(t = ae(e)) || (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && ue.call(n) === de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[fe.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ye, be)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (a(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, a = 0, r = e.length; a < n; a++) e[r++] = t[a];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var a, r = [], o = 0, i = e.length, s = !n; o < i; o++) a = !t(e[o], o), a !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0,
                s = [];
            if (a(e))
                for (r = e.length; i < r; i++) o = t(e[i], i, n), null != o && s.push(o);
            else
                for (i in e) o = t(e[i], i, n), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, a, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e)) return a = re.call(arguments, 2), r = function() {
                return e.apply(t || this, a.concat(re.call(arguments)))
            }, r.guid = e.guid = e.guid || ge.guid++, r
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var we = function(e) {
        function t(e, t, n, a) {
            var r, o, i, s, l, f, c, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!a && ((t ? t.ownerDocument || t : U) !== M && A(t), t = t || M, H)) {
                if (11 !== h && (l = ye.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(i = t.getElementById(r))) return n;
                            if (i.id === r) return n.push(i), n
                        } else if (d && (i = d.getElementById(r)) && F(t, i) && i.id === r) return n.push(i), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                    }
                if (_.qsa && !Y[e + " "] && (!q || !q.test(e))) {
                    if (1 !== h) d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(_e, Ce) : t.setAttribute("id", s = R), f = S(e), o = f.length; o--;) f[o] = "#" + s + " " + p(f[o]);
                        c = f.join(","), d = be.test(e) && u(t.parentNode) || t
                    }
                    if (c) try {
                        return K.apply(n, d.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        s === R && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(le, "$1"), t, n, a)
        }

        function n() {
            function e(n, a) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = a
            }
            var t = [];
            return e
        }

        function a(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = M.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), a = n.length; a--;) C.attrHandle[n[a]] = t
        }

        function i(e, t) {
            var n = t && e,
                a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (a) return a;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function f(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return a(function(t) {
                return t = +t, a(function(n, a) {
                    for (var r, o = e([], n.length, t), i = o.length; i--;) n[r = o[i]] && (n[r] = !(a[r] = n[r]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
            return a
        }

        function h(e, t, n) {
            var a = t.dir,
                r = t.next,
                o = r || a,
                i = n && "parentNode" === o,
                s = X++;
            return t.first ? function(t, n, r) {
                for (; t = t[a];)
                    if (1 === t.nodeType || i) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var f, c, u, d = [B, s];
                if (l) {
                    for (; t = t[a];)
                        if ((1 === t.nodeType || i) && e(t, n, l)) return !0
                } else
                    for (; t = t[a];)
                        if (1 === t.nodeType || i)
                            if (u = t[R] || (t[R] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[a] || t;
                            else {
                                if ((f = c[o]) && f[0] === B && f[1] === s) return d[2] = f[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function(t, n, a) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, a)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, a) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], a);
            return a
        }

        function v(e, t, n, a, r) {
            for (var o, i = [], s = 0, l = e.length, f = null != t; s < l; s++)(o = e[s]) && (n && !n(o, a, r) || (i.push(o), f && t.push(s)));
            return i
        }

        function y(e, t, n, r, o, i) {
            return r && !r[R] && (r = y(r)), o && !o[R] && (o = y(o, i)), a(function(a, i, s, l) {
                var f, c, u, d = [],
                    p = [],
                    h = i.length,
                    g = a || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !a && t ? g : v(g, d, e, s, l),
                    b = n ? o || (a ? e : h || r) ? [] : i : y;
                if (n && n(y, b, s, l), r)
                    for (f = v(b, p), r(f, [], s, l), c = f.length; c--;)(u = f[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (a) {
                    if (o || e) {
                        if (o) {
                            for (f = [], c = b.length; c--;)(u = b[c]) && f.push(y[c] = u);
                            o(null, b = [], f, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (f = o ? te(a, u) : d[c]) > -1 && (a[f] = !(i[f] = u))
                    }
                } else b = v(b === i ? b.splice(h, b.length) : b), o ? o(null, i, b, l) : K.apply(i, b)
            })
        }

        function b(e) {
            for (var t, n, a, r = e.length, o = C.relative[e[0].type], i = o || C.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                    return e === t
                }, i, !0), f = h(function(e) {
                    return te(t, e) > -1
                }, i, !0), c = [function(e, n, a) {
                    var r = !o && (a || n !== j) || ((t = n).nodeType ? l(e, n, a) : f(e, n, a));
                    return t = null, r
                }]; s < r; s++)
                if (n = C.relative[e[s].type]) c = [h(g(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (a = ++s; a < r && !C.relative[e[a].type]; a++);
                        return y(s > 1 && g(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, s < a && b(e.slice(s, a)), a < r && b(e = e.slice(a)), a < r && p(e))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function w(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                i = function(a, i, s, l, f) {
                    var c, u, d, p = 0,
                        h = "0",
                        g = a && [],
                        m = [],
                        y = j,
                        b = a || o && C.find.TAG("*", f),
                        w = B += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (f && (j = i === M || i || f); h !== x && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (u = 0, i || c.ownerDocument === M || (A(c), s = !H); d = e[u++];)
                                if (d(c, i || M, s)) {
                                    l.push(c);
                                    break
                                }
                            f && (B = w)
                        }
                        r && ((c = !d && c) && p--, a && g.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (u = 0; d = n[u++];) d(g, m, i, s);
                        if (a) {
                            if (p > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = J.call(l));
                            m = v(m)
                        }
                        K.apply(l, m), f && !a && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return f && (B = w, j = y), g
                };
            return r ? a(i) : i
        }
        var x, _, C, T, k, S, L, E, j, N, D, A, M, I, H, q, P, O, F, R = "sizzle" + 1 * new Date,
            U = e.document,
            B = 0,
            X = 0,
            z = n(),
            W = n(),
            Y = n(),
            Z = function(e, t) {
                return e === t && (D = !0), 0
            },
            G = {}.hasOwnProperty,
            V = [],
            J = V.pop,
            Q = V.push,
            K = V.push,
            ee = V.slice,
            te = function(e, t) {
                for (var n = 0, a = e.length; n < a; n++)
                    if (e[n] === t) return n;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ae = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ae + "*(" + re + ")(?:" + ae + "*([*^$|!~]?=)" + ae + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ae + "*\\]",
            ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ae + "+", "g"),
            le = new RegExp("^" + ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ae + "+$", "g"),
            fe = new RegExp("^" + ae + "*," + ae + "*"),
            ce = new RegExp("^" + ae + "*([>+~]|" + ae + ")" + ae + "*"),
            ue = new RegExp("=" + ae + "*([^\\]'\"]*?)" + ae + "*\\]", "g"),
            de = new RegExp(ie),
            pe = new RegExp("^" + re + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ae + "*(even|odd|(([+-]|)(\\d*)n|)" + ae + "*(?:([+-]|)" + ae + "*(\\d+)|))" + ae + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ae + "*((?:-\\d)?\\d*)" + ae + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ae + "?|(" + ae + ")|.)", "ig"),
            xe = function(e, t, n) {
                var a = "0x" + t - 65536;
                return a !== a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Te = function() {
                A()
            },
            ke = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(V = ee.call(U.childNodes), U.childNodes), V[U.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: V.length ? function(e, t) {
                    Q.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, a = 0; e[n++] = t[a++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function(e) {
            var t, n, a = e ? e.ownerDocument || e : U;
            return a !== M && 9 === a.nodeType && a.documentElement ? (M = a, I = M.documentElement, H = !k(M), U !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), _.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function(e) {
                return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(M.getElementsByClassName), _.getById = r(function(e) {
                return I.appendChild(e).id = R, !M.getElementsByName || !M.getElementsByName(R).length
            }), _.getById ? (C.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n, a, r, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                        for (r = t.getElementsByName(e), a = 0; o = r[a++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, a = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && a.push(n);
                    return a
                }
                return o
            }, C.find.CLASS = _.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && H) return t.getElementsByClassName(e)
            }, P = [], q = [], (_.qsa = ve.test(M.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ae + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ae + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = M.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ae + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (_.matchesSelector = ve.test(O = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                _.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), P.push("!=", ie)
            }), q = q.length && new RegExp(q.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(I.compareDocumentPosition), F = t || ve.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    a = t && t.parentNode;
                return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Z = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === U && F(U, e) ? -1 : t === M || t.ownerDocument === U && F(U, t) ? 1 : N ? te(N, e) - te(N, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, a = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === M ? -1 : t === M ? 1 : r ? -1 : o ? 1 : N ? te(N, e) - te(N, t) : 0;
                if (r === o) return i(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[a] === l[a];) a++;
                return a ? i(s[a], l[a]) : s[a] === U ? -1 : l[a] === U ? 1 : 0
            }, M) : M
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && A(e), n = n.replace(ue, "='$1']"), _.matchesSelector && H && !Y[n + " "] && (!P || !P.test(n)) && (!q || !q.test(n))) try {
                var a = O.call(e, n);
                if (a || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
            } catch (e) {}
            return t(n, M, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && A(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && A(e);
            var n = C.attrHandle[t.toLowerCase()],
                a = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== a ? a : _.attributes || !H ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }, t.escape = function(e) {
            return (e + "").replace(_e, Ce)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                a = 0,
                r = 0;
            if (D = !_.detectDuplicates, N = !_.sortStable && e.slice(0), e.sort(Z), D) {
                for (; t = e[r++];) t === e[r] && (a = n.push(r));
                for (; a--;) e.splice(n[a], 1)
            }
            return N = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                a = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[a++];) n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ae + ")" + e + "(" + ae + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, a) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === a : "!=" === n ? o !== a : "^=" === n ? a && 0 === o.indexOf(a) : "*=" === n ? a && o.indexOf(a) > -1 : "$=" === n ? a && o.slice(-a.length) === a : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(a) > -1 : "|=" === n && (o === a || o.slice(0, a.length + 1) === a + "-"))
                    }
                },
                CHILD: function(e, t, n, a, r) {
                    var o = "nth" !== e.slice(0, 3),
                        i = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === a && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var f, c, u, d, p, h, g = o !== i ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [i ? m.firstChild : m.lastChild], i && y) {
                                for (d = m, u = d[R] || (d[R] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), f = c[e] || [], p = f[0] === B && f[1], b = p && f[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [B, p, b];
                                        break
                                    }
                            } else if (y && (d = t, u = d[R] || (d[R] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), f = c[e] || [], p = f[0] === B && f[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (u = d[R] || (d[R] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), c[e] = [B, b]), d !== t)););
                            return b -= r, b === a || b % a === 0 && b / a >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                        for (var a, r = o(e, n), i = r.length; i--;) a = te(e, r[i]), e[a] = !(t[a] = r[i])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: a(function(e) {
                    var t = [],
                        n = [],
                        r = L(e.replace(le, "$1"));
                    return r[R] ? a(function(e, t, n, a) {
                        for (var o, i = r(e, null, a, []), s = e.length; s--;)(o = i[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, a, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: a(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: a(function(e) {
                    return e = e.replace(we, xe),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: a(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: f(!1),
                disabled: f(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var a = n < 0 ? n + t : n; --a >= 0;) e.push(a);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = t.tokenize = function(e, n) {
            var a, r, o, i, s, l, f, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], f = C.preFilter; s;) {
                a && !(r = fe.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), a = !1, (r = ce.exec(s)) && (a = r.shift(), o.push({
                    value: a,
                    type: r[0].replace(le, " ")
                }), s = s.slice(a.length));
                for (i in C.filter) !(r = he[i].exec(s)) || f[i] && !(r = f[i](r)) || (a = r.shift(), o.push({
                    value: a,
                    type: i,
                    matches: r
                }), s = s.slice(a.length));
                if (!a) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, L = t.compile = function(e, t) {
            var n, a = [],
                r = [],
                o = Y[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = b(t[n]), o[R] ? a.push(o) : r.push(o);
                o = Y(e, w(r, a)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, a) {
            var r, o, i, s, l, f = "function" == typeof e && e,
                c = !a && S(e = f.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (i = o[0]).type && 9 === t.nodeType && H && C.relative[o[1].type]) {
                    if (t = (C.find.ID(i.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                    f && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (i = o[r], !C.relative[s = i.type]);)
                    if ((l = C.find[s]) && (a = l(i.matches[0].replace(we, xe), be.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = a.length && p(o), !e) return K.apply(n, a), n;
                        break
                    }
            }
            return (f || L(e, c))(a, t, !H, n, !t || be.test(e) && u(t.parentNode) || t), n
        }, _.sortStable = R.split("").sort(Z).join("") === R, _.detectDuplicates = !!D, A(), _.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var a;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }), t
    }(e);
    ge.find = we, ge.expr = we.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = we.uniqueSort, ge.text = we.getText, ge.isXMLDoc = we.isXML, ge.contains = we.contains, ge.escapeSelector = we.escape;
    var xe = function(e, t, n) {
            for (var a = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ge(e).is(n)) break;
                    a.push(e)
                }
            return a
        },
        _e = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ce = ge.expr.match.needsContext,
        Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        ke = /^.[^:#\[\.,]*$/;
    ge.filter = function(e, t, n) {
        var a = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? ge.find.matchesSelector(a, e) ? [a] : [] : ge.find.matches(e, ge.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ge.fn.extend({
        find: function(e) {
            var t, n, a = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(ge(e).filter(function() {
                for (t = 0; t < a; t++)
                    if (ge.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < a; t++) ge.find(e, r[t], n);
            return a > 1 ? ge.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Ce.test(e) ? ge(e) : e || [], !1).length
        }
    });
    var $e, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Le = ge.fn.init = function(e, t, n) {
            var a, r;
            if (!e) return this;
            if (n = n || $e, "string" == typeof e) {
                if (a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e), !a || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (a[1]) {
                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Te.test(a[1]) && ge.isPlainObject(t))
                        for (a in t) ge.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                    return this
                }
                return r = ne.getElementById(a[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
        };
    Le.prototype = ge.fn, $e = ge(ne);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        je = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ge.fn.extend({
        has: function(e) {
            var t = ge(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ge.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, a = 0,
                r = this.length,
                o = [],
                i = "string" != typeof e && ge(e);
            if (!Ce.test(e))
                for (; a < r; a++)
                    for (n = this[a]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ge(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ge.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _e((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _e(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ge.merge([], e.childNodes)
        }
    }, function(e, t) {
        ge.fn[e] = function(n, a) {
            var r = ge.map(this, t, n);
            return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (r = ge.filter(a, r)), this.length > 1 && (je[e] || ge.uniqueSort(r), Ee.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ne = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function(e) {
        e = "string" == typeof e ? i(e) : ge.extend({}, e);
        var t, n, a, r, o = [],
            s = [],
            l = -1,
            f = function() {
                for (r = e.once, a = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, s.push(n)), function t(n) {
                        ge.each(n, function(n, a) {
                            ge.isFunction(a) ? e.unique && c.has(a) || o.push(a) : a && a.length && "string" !== ge.type(a) && t(a)
                        })
                    }(arguments), n && !t && f()), this
                },
                remove: function() {
                    return ge.each(arguments, function(e, t) {
                        for (var n;
                            (n = ge.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? ge.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || f()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return c
    }, ge.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2],
                    ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]
                ],
                a = "pending",
                r = {
                    state: function() {
                        return a
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return ge.Deferred(function(t) {
                            ge.each(n, function(n, a) {
                                var r = ge.isFunction(e[a[4]]) && e[a[4]];
                                o[a[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[a[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, a, r) {
                        function o(t, n, a, r) {
                            return function() {
                                var f = this,
                                    c = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < i)) {
                                            if (e = a.apply(f, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(u) ? r ? u.call(e, o(i, n, s, r), o(i, n, l, r)) : (i++, u.call(e, o(i, n, s, r), o(i, n, l, r), o(i, n, s, n.notifyWith))) : (a !== s && (f = void 0, c = [e]), (r || n.resolveWith)(f, c))
                                        }
                                    },
                                    d = r ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= i && (a !== l && (f = void 0, c = [e]), n.rejectWith(f, c))
                                        }
                                    };
                                t ? d() : (ge.Deferred.getStackHook && (d.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var i = 0;
                        return ge.Deferred(function(e) {
                            n[0][3].add(o(0, e, ge.isFunction(r) ? r : s, e.notifyWith)), n[1][3].add(o(0, e, ge.isFunction(t) ? t : s)), n[2][3].add(o(0, e, ge.isFunction(a) ? a : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, r) : r
                    }
                },
                o = {};
            return ge.each(n, function(e, t) {
                var i = t[2],
                    s = t[5];
                r[t[1]] = i.add, s && i.add(function() {
                    a = s
                }, n[3 - e][2].disable, n[0][2].lock), i.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = i.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                a = Array(n),
                r = re.call(arguments),
                o = ge.Deferred(),
                i = function(e) {
                    return function(n) {
                        a[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(a, r)
                    }
                };
            if (t <= 1 && (f(e, o.done(i(n)).resolve, o.reject), "pending" === o.state() || ge.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) f(r[n], i(n), o.reject);
            return o.promise()
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ge.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ae = ge.Deferred();
    ge.fn.ready = function(e) {
        return Ae.then(e).catch(function(e) {
            ge.readyException(e)
        }), this
    }, ge.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ge.readyWait++ : ge.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, e !== !0 && --ge.readyWait > 0 || Ae.resolveWith(ne, [ge]))
        }
    }), ge.ready.then = Ae.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var Me = function(e, t, n, a, r, o, i) {
            var s = 0,
                l = e.length,
                f = null == n;
            if ("object" === ge.type(n)) {
                r = !0;
                for (s in n) Me(e, t, s, n[s], !0, o, i)
            } else if (void 0 !== a && (r = !0, ge.isFunction(a) || (i = !0), f && (i ? (t.call(e, a), t = null) : (f = t, t = function(e, t, n) {
                    return f.call(ge(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, i ? a : a.call(e[s], s, t(e[s], n)));
            return r ? e : f ? t.call(e) : l ? t(e[0], n) : o
        },
        Ie = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    u.uid = 1, u.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var a, r = this.cache(e);
            if ("string" == typeof t) r[ge.camelCase(t)] = n;
            else
                for (a in t) r[ge.camelCase(a)] = t[a];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 !== t) {
                    ge.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in a ? [t] : t.match(Ne) || []), n = t.length;
                    for (; n--;) delete a[t[n]]
                }(void 0 === t || ge.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ge.isEmptyObject(t)
        }
    };
    var He = new u,
        qe = new u,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Oe = /[A-Z]/g;
    ge.extend({
        hasData: function(e) {
            return qe.hasData(e) || He.hasData(e)
        },
        data: function(e, t, n) {
            return qe.access(e, t, n)
        },
        removeData: function(e, t) {
            qe.remove(e, t)
        },
        _data: function(e, t, n) {
            return He.access(e, t, n)
        },
        _removeData: function(e, t) {
            He.remove(e, t)
        }
    }), ge.fn.extend({
        data: function(e, t) {
            var n, a, r, o = this[0],
                i = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = qe.get(o), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))) {
                    for (n = i.length; n--;) i[n] && (a = i[n].name, 0 === a.indexOf("data-") && (a = ge.camelCase(a.slice(5)), p(o, a, r[a])));
                    He.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                qe.set(this, e)
            }) : Me(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (n = qe.get(o, e), void 0 !== n) return n;
                    if (n = p(o, e), void 0 !== n) return n
                } else this.each(function() {
                    qe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                qe.remove(this, e)
            })
        }
    }), ge.extend({
        queue: function(e, t, n) {
            var a;
            if (e) return t = (t || "fx") + "queue", a = He.get(e, t), n && (!a || ge.isArray(n) ? a = He.access(e, t, ge.makeArray(n)) : a.push(n)), a || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ge.queue(e, t),
                a = n.length,
                r = n.shift(),
                o = ge._queueHooks(e, t),
                i = function() {
                    ge.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), a--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, i, o)), !a && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return He.get(e, n) || He.access(e, n, {
                empty: ge.Callbacks("once memory").add(function() {
                    He.remove(e, [t + "queue", n])
                })
            })
        }
    }), ge.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ge.queue(this, e, t);
                ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ge.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, a = 1,
                r = ge.Deferred(),
                o = this,
                i = this.length,
                s = function() {
                    --a || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;) n = He.get(o[i], e + "queueHooks"), n && n.empty && (a++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Ue = ["Top", "Right", "Bottom", "Left"],
        Be = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
        },
        Xe = function(e, t, n, a) {
            var r, o, i = {};
            for (o in t) i[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, a || []);
            for (o in t) e.style[o] = i[o];
            return r
        },
        ze = {};
    ge.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Be(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });
    var We = /^(?:checkbox|radio)$/i,
        Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ze = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Ve = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Je = ne.documentElement,
        Qe = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {},
        add: function(e, t, n, a, r) {
            var o, i, s, l, f, c, u, d, p, h, g, m = He.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && ge.find.matchesSelector(Je, r), n.guid || (n.guid = ge.guid++), (l = m.events) || (l = m.events = {}), (i = m.handle) || (i = m.handle = function(t) {
                        return "undefined" != typeof ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Ne) || [""], f = t.length; f--;) s = et.exec(t[f]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (u = ge.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = ge.event.special[p] || {}, c = ge.extend({
                    type: p,
                    origType: g,
                    data: a,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ge.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(e, a, h, i) !== !1 || e.addEventListener && e.addEventListener(p, i)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), ge.event.global[p] = !0)
        },
        remove: function(e, t, n, a, r) {
            var o, i, s, l, f, c, u, d, p, h, g, m = He.hasData(e) && He.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(Ne) || [""], f = t.length; f--;)
                    if (s = et.exec(t[f]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (u = ge.event.special[p] || {}, p = (a ? u.delegateType : u.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || a && a !== c.selector && ("**" !== a || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(e, c));
                        i && !d.length && (u.teardown && u.teardown.call(e, h, m.handle) !== !1 || ge.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) ge.event.remove(e, p + t[f], n, a, !0);
                ge.isEmptyObject(l) && He.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = ge.event.fix(e),
                n, a, r, o, i, s, l = new Array(arguments.length),
                f = (He.get(this, "events") || {})[t.type] || [],
                c = ge.event.special[t.type] || {};
            for (l[0] = t, n = 1; n < arguments.length; n++) l[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = ge.event.handlers.call(this, t, f), n = 0;
                    (o = s[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(i.namespace) || (t.handleObj = i, t.data = i.data, r = ((ge.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(e, t) {
            var n, a, r, o, i, s = [],
                l = t.delegateCount,
                f = e.target;
            if (l && f.nodeType && !("click" === e.type && e.button >= 1))
                for (; f !== this; f = f.parentNode || this)
                    if (1 === f.nodeType && ("click" !== e.type || f.disabled !== !0)) {
                        for (o = [], i = {}, n = 0; n < l; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? ge(r, this).index(f) > -1 : ge.find(r, this, null, [f]).length), i[r] && o.push(a);
                        o.length && s.push({
                            elem: f,
                            handlers: o
                        })
                    }
            return f = this, l < t.length && s.push({
                elem: f,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(ge.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ge.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[ge.expando] ? e : new ge.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== _() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === _() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ge.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return ge.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ge.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ge.Event = function(e, t) {
        return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ge.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp), ge.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ge.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, a = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === a || ge.contains(a, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ge.fn.extend({
        on: function(e, t, n, a) {
            return C(this, e, t, n, a)
        },
        one: function(e, t, n, a) {
            return C(this, e, t, n, a, 1)
        },
        off: function(e, t, n) {
            var a, r;
            if (e && e.preventDefault && e.handleObj) return a = e.handleObj, ge(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function() {
                ge.event.remove(this, e, n, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var a, r, o, i, s = e.cloneNode(!0),
                l = ge.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                for (i = v(s), o = v(e), a = 0, r = o.length; a < r; a++) E(o[a], i[a]);
            if (t)
                if (n)
                    for (o = o || v(e), i = i || v(s), a = 0, r = o.length; a < r; a++) L(o[a], i[a]);
                else L(e, s);
            return i = v(s, "script"), i.length > 0 && y(i, !l && v(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, a, r = ge.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ie(n)) {
                    if (t = n[He.expando]) {
                        if (t.events)
                            for (a in t.events) r[a] ? ge.event.remove(n, a) : ge.removeEvent(n, a, t.handle);
                        n[He.expando] = void 0
                    }
                    n[qe.expando] && (n[qe.expando] = void 0)
                }
        }
    }), ge.fn.extend({
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return Me(this, function(e) {
                return void 0 === e ? ge.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ge.clone(this, e, t)
            })
        },
        html: function(e) {
            return Me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    a = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Ge[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; n < a; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return j(this, arguments, function(t) {
                var n = this.parentNode;
                ge.inArray(this, e) < 0 && (ge.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ge.fn[e] = function(e) {
            for (var n, a = [], r = ge(e), o = r.length - 1, i = 0; i <= o; i++) n = i === o ? this : this.clone(!0), ge(r[i])[t](n), ie.apply(a, n.get());
            return this.pushStack(a)
        }
    });
    var it = /^margin/,
        st = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(i);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, a = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Je.removeChild(i), s = null
            }
        }
        var n, a, r, o, i = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", i.appendChild(s), ge.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), a
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var ft = /^(none|table(?!-c[ea]).+)/,
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "Moz", "ms"],
        pt = ne.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = D(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, i, s = ge.camelCase(t),
                    l = e.style;
                return t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s), i = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n ? i && "get" in i && void 0 !== (r = i.get(e, !1, a)) ? r : l[t] : (o = typeof n, "string" === o && (r = Re.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ge.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, a)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, a) {
            var r, o, i, s = ge.camelCase(t);
            return t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s), i = ge.cssHooks[t] || ge.cssHooks[s], i && "get" in i && (r = i.get(e, !0, n)), void 0 === r && (r = D(e, t, a)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), ge.each(["height", "width"], function(e, t) {
        ge.cssHooks[t] = {
            get: function(e, n, a) {
                if (n) return !ft.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, a) : Xe(e, ct, function() {
                    return q(e, t, a)
                })
            },
            set: function(e, n, a) {
                var r, o = a && lt(e),
                    i = a && H(e, t, a, "border-box" === ge.css(e, "boxSizing", !1, o), o);
                return i && (r = Re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), I(e, n, i)
            }
        }
    }), ge.cssHooks.marginLeft = A(pe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ge.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ge.cssHooks[e + t] = {
            expand: function(n) {
                for (var a = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) r[e + Ue[a] + t] = o[a] || o[a - 2] || o[0];
                return r
            }
        }, it.test(e) || (ge.cssHooks[e + t].set = I)
    }), ge.fn.extend({
        css: function(e, t) {
            return Me(this, function(e, t, n) {
                var a, r, o = {},
                    i = 0;
                if (ge.isArray(t)) {
                    for (a = lt(e), r = t.length; i < r; i++) o[t[i]] = ge.css(e, t[i], !1, a);
                    return o
                }
                return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ge.Tween = P, P.prototype = {
        constructor: P,
        init: function(e, t, n, a, r, o) {
            this.elem = e, this.prop = n, this.easing = r || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = o || (ge.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ge.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ge.fx = P.prototype.init, ge.fx.step = {};
    var ht, gt, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    ge.Animation = ge.extend(z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, a = 0, r = e.length; a < r; a++) n = e[a], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
            },
            prefilters: [B],
            prefilter: function(e, t) {
                t ? z.prefilters.unshift(e) : z.prefilters.push(e)
            }
        }), ge.speed = function(e, t, n) {
            var a = e && "object" == typeof e ? ge.extend({}, e) : {
                complete: n || !n && t || ge.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ge.isFunction(t) && t
            };
            return ge.fx.off || ne.hidden ? a.duration = 0 : "number" != typeof a.duration && (a.duration in ge.fx.speeds ? a.duration = ge.fx.speeds[a.duration] : a.duration = ge.fx.speeds._default), null != a.queue && a.queue !== !0 || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                ge.isFunction(a.old) && a.old.call(this), a.queue && ge.dequeue(this, a.queue)
            }, a
        }, ge.fn.extend({
            fadeTo: function(e, t, n, a) {
                return this.filter(Be).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, a)
            },
            animate: function(e, t, n, a) {
                var r = ge.isEmptyObject(e),
                    o = ge.speed(t, n, a),
                    i = function() {
                        var t = z(this, ge.extend({}, e), o);
                        (r || He.get(this, "finish")) && t.stop(!0)
                    };
                return i.finish = i, r || o.queue === !1 ? this.each(i) : this.queue(o.queue, i)
            },
            stop: function(e, t, n) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = ge.timers,
                        i = He.get(this);
                    if (r) i[r] && i[r].stop && a(i[r]);
                    else
                        for (r in i) i[r] && i[r].stop && vt.test(r) && a(i[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || ge.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = He.get(this),
                        a = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = ge.timers,
                        i = a ? a.length : 0;
                    for (n.finish = !0, ge.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < i; t++) a[t] && a[t].finish && a[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ge.each(["toggle", "show", "hide"], function(e, t) {
            var n = ge.fn[t];
            ge.fn[t] = function(e, a, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, a, r)
            }
        }), ge.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ge.fn[e] = function(e, n, a) {
                return this.animate(t, e, n, a)
            }
        }), ge.timers = [], ge.fx.tick = function() {
            var e, t = 0,
                n = ge.timers;
            for (ht = ge.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || ge.fx.stop(), ht = void 0
        }, ge.fx.timer = function(e) {
            ge.timers.push(e), e() ? ge.fx.start() : ge.timers.pop()
        }, ge.fx.interval = 13, ge.fx.start = function() {
            gt || (gt = e.requestAnimationFrame ? e.requestAnimationFrame(O) : e.setInterval(ge.fx.tick, ge.fx.interval))
        }, ge.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(gt) : e.clearInterval(gt), gt = null
        }, ge.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ge.fn.delay = function(t, n) {
            return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, a) {
                var r = e.setTimeout(n, t);
                a.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var yt, bt = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function(e, t) {
            return Me(this, ge.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ge.removeAttr(this, e)
            })
        }
    }), ge.extend({
        attr: function(e, t, n) {
            var a, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (r = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (a = r.get(e, t)) ? a : (a = ge.find.attr(e, t), null == a ? void 0 : a))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, a = 0,
                r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[a++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function(e, t, n) {
            return t === !1 ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = bt[t] || ge.find.attr;
        bt[t] = function(e, t, a) {
            var r, o, i = t.toLowerCase();
            return a || (o = bt[i], bt[i] = r, r = null != n(e, t, a) ? i : null, bt[i] = o), r
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function(e, t) {
            return Me(this, ge.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ge.propFix[e] || e]
            })
        }
    }), ge.extend({
        prop: function(e, t, n) {
            var a, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, r = ge.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get" in r && null !== (a = r.get(e, t)) ? a : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pe.optSelected || (ge.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
        addClass: function(e) {
            var t, n, a, r, o, i, s, l = 0;
            if (ge.isFunction(e)) return this.each(function(t) {
                ge(this).addClass(e.call(this, t, Y(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = Y(n), a = 1 === n.nodeType && " " + W(r) + " ") {
                        for (i = 0; o = t[i++];) a.indexOf(" " + o + " ") < 0 && (a += o + " ");
                        s = W(a), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, a, r, o, i, s, l = 0;
            if (ge.isFunction(e)) return this.each(function(t) {
                ge(this).removeClass(e.call(this, t, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = Y(n), a = 1 === n.nodeType && " " + W(r) + " ") {
                        for (i = 0; o = t[i++];)
                            for (; a.indexOf(" " + o + " ") > -1;) a = a.replace(" " + o + " ", " ");
                        s = W(a), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                ge(this).toggleClass(e.call(this, n, Y(this), t), t)
            }) : this.each(function() {
                var t, a, r, o;
                if ("string" === n)
                    for (a = 0, r = ge(this), o = e.match(Ne) || []; t = o[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Y(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : He.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, a = 0;
            for (t = " " + e + " "; n = this[a++];)
                if (1 === n.nodeType && (" " + W(Y(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    ge.fn.extend({
        val: function(e) {
            var t, n, a, r = this[0]; {
                if (arguments.length) return a = ge.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = a ? e.call(this, n, ge(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ge.isArray(r) && (r = ge.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)
            }
        }
    }), ge.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : W(ge.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, a, r = e.options,
                        o = e.selectedIndex,
                        i = "select-one" === e.type,
                        s = i ? null : [],
                        l = i ? o + 1 : r.length;
                    for (a = o < 0 ? l : i ? o : 0; a < l; a++)
                        if (n = r[a], (n.selected || a === o) && !n.disabled && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ge(n).val(), i) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, a, r = e.options, o = ge.makeArray(t), i = r.length; i--;) a = r[i], (a.selected = ge.inArray(ge.valHooks.option.get(a), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ge.each(["radio", "checkbox"], function() {
        ge.valHooks[this] = {
            set: function(e, t) {
                if (ge.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
            }
        }, pe.checkOn || (ge.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function(t, n, a, r) {
            var o, i, s, l, f, c, u, d = [a || ne],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (i = s = a = a || ne, 3 !== a.nodeType && 8 !== a.nodeType && !Ct.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), f = p.indexOf(":") < 0 && "on" + p, t = t[ge.expando] ? t : new ge.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : ge.makeArray(n, [t]), u = ge.event.special[p] || {}, r || !u.trigger || u.trigger.apply(a, n) !== !1)) {
                if (!r && !u.noBubble && !ge.isWindow(a)) {
                    for (l = u.delegateType || p, Ct.test(l + p) || (i = i.parentNode); i; i = i.parentNode) d.push(i), s = i;
                    s === (a.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (i = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : u.bindType || p, c = (He.get(i, "events") || {})[t.type] && He.get(i, "handle"), c && c.apply(i, n), c = f && i[f], c && c.apply && Ie(i) && (t.result = c.apply(i, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || u._default && u._default.apply(d.pop(), n) !== !1 || !Ie(a) || f && ge.isFunction(a[p]) && !ge.isWindow(a) && (s = a[f], s && (a[f] = null), ge.event.triggered = p, a[p](), ge.event.triggered = void 0, s && (a[f] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var a = ge.extend(new ge.Event, n, {
                type: e,
                isSimulated: !0
            });
            ge.event.trigger(a, null, t)
        }
    }), ge.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ge.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ge.event.trigger(e, t, n, !0)
        }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        ge.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ge.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || ge.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ge.event.simulate(t, e.target, ge.event.fix(e))
        };
        ge.event.special[t] = {
            setup: function() {
                var a = this.ownerDocument || this,
                    r = He.access(a, t);
                r || a.addEventListener(e, n, !0), He.access(a, t, (r || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this,
                    r = He.access(a, t) - 1;
                r ? He.access(a, t, r) : (a.removeEventListener(e, n, !0), He.remove(a, t))
            }
        }
    });
    var Tt = e.location,
        kt = ge.now(),
        $t = /\?/;
    ge.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Lt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    ge.param = function(e, t) {
        var n, a = [],
            r = function(e, t) {
                var n = ge.isFunction(t) ? t() : t;
                a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (ge.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, r);
        return a.join("&")
    }, ge.fn.extend({
        serialize: function() {
            return ge.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && jt.test(this.nodeName) && !Et.test(e) && (this.checked || !We.test(e))
            }).map(function(e, t) {
                var n = ge(this).val();
                return null == n ? null : ge.isArray(n) ? ge.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        Dt = /#.*$/,
        At = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ht = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Pt = {},
        Ot = {},
        Ft = "*/".concat("*"),
        Rt = ne.createElement("a");
    Rt.href = Tt.href, ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: It.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ge.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e)
        },
        ajaxPrefilter: G(Pt),
        ajaxTransport: G(Ot),
        ajax: function(t, n) {
            function a(t, n, a, s) {
                var f, d, p, w, x, _ = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, i = s || "", C.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (w = Q(h, C, a)), w = K(h, w, C, f), f ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (ge.lastModified[o] = x), x = C.getResponseHeader("etag"), x && (ge.etag[o] = x)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = w.state, d = w.data, p = w.error, f = !p)) : (p = _, !t && _ || (_ = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || _) + "", f ? v.resolveWith(g, [d, _, C]) : v.rejectWith(g, [C, _, p]), C.statusCode(b), b = void 0, u && m.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : p]), y.fireWith(g, [C, _]), u && (m.trigger("ajaxComplete", [C, h]), --ge.active || ge.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, i, s, l, f, c, u, d, p, h = ge.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
                v = ge.Deferred(),
                y = ge.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                x = {},
                _ = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Mt.exec(i);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return r && r.abort(t), a(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || Tt.href) + "").replace(qt, Tt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                f = ne.createElement("a");
                try {
                    f.href = h.url, f.href = f.href, h.crossDomain = Rt.protocol + "//" + Rt.host != f.protocol + "//" + f.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ge.param(h.data, h.traditional)), V(Pt, h, n, C), c) return C;
            u = ge.event && h.global, u && 0 === ge.active++ && ge.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), o = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (p = h.url.slice(o.length), h.data && (o += ($t.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(At, "$1"), p = ($t.test(o) ? "&" : "?") + "_=" + kt++ + p), h.url = o + p), h.ifModified && (ge.lastModified[o] && C.setRequestHeader("If-Modified-Since", ge.lastModified[o]), ge.etag[o] && C.setRequestHeader("If-None-Match", ge.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
            if (_ = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = V(Ot, h, n, C)) {
                if (C.readyState = 1, u && m.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, r.send(w, a)
                } catch (e) {
                    if (c) throw e;
                    a(-1, e)
                }
            } else a(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return ge.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ge.get(e, void 0, t, "script")
        }
    }), ge.each(["get", "post"], function(e, t) {
        ge[t] = function(e, n, a, r) {
            return ge.isFunction(n) && (r = r || a, a = n, n = void 0), ge.ajax(ge.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: a
            }, ge.isPlainObject(e) && e))
        }
    }), ge._evalUrl = function(e) {
        return ge.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, ge.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ge.isFunction(e) ? this.each(function(t) {
                ge(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ge(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ge.isFunction(e);
            return this.each(function(n) {
                ge(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ge(this).replaceWith(this.childNodes)
            }), this
        }
    }), ge.expr.pseudos.hidden = function(e) {
        return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Bt = ge.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, ge.ajaxTransport(function(t) {
        var n, a;
        if (pe.cors || Bt && !t.crossDomain) return {
            send: function(r, o) {
                var i, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (i in t.xhrFields) s[i] = t.xhrFields[i];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (i in r) s.setRequestHeader(i, r[i]);
                n = function(e) {
                    return function() {
                        n && (n = a = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), a = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = a : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && a()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), ge.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ge.globalEval(e), e
            }
        }
    }), ge.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(a, r) {
                    t = ge("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Xt = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || ge.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), ge.ajaxPrefilter("json jsonp", function(t, n, a) {
        var r, o, i, s = t.jsonp !== !1 && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + r) : t.jsonp !== !1 && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return i || ge.error(r + " was not called"), i[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            i = arguments
        }, a.always(function() {
            void 0 === o ? ge(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Xt.push(r)), i && ge.isFunction(o) && o(i[0]), i = o = void 0
        }), "script"
    }), pe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var a, r, o;
        return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), a = t.createElement("base"), a.href = ne.location.href, t.head.appendChild(a)) : t = ne), r = Te.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, o), o && o.length && ge(o).remove(), ge.merge([], r.childNodes))
    }, ge.fn.load = function(e, t, n) {
        var a, r, o, i = this,
            s = e.indexOf(" ");
        return s > -1 && (a = W(e.slice(s)), e = e.slice(0, s)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), i.length > 0 && ge.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, i.html(a ? ge("<div>").append(ge.parseHTML(e)).find(a) : e)
        }).always(n && function(e, t) {
            i.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ge.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ge.expr.pseudos.animated = function(e) {
        return ge.grep(ge.timers, function(t) {
            return e === t.elem
        }).length
    }, ge.offset = {
        setOffset: function(e, t, n) {
            var a, r, o, i, s, l, f, c = ge.css(e, "position"),
                u = ge(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = ge.css(e, "top"), l = ge.css(e, "left"), f = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, f ? (a = u.position(), i = a.top, r = a.left) : (i = parseFloat(o) || 0, r = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, ge.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ge.offset.setOffset(this, e, t)
            });
            var t, n, a, r, o = this[0];
            if (o) return o.getClientRects().length ? (a = o.getBoundingClientRect(), a.width || a.height ? (r = o.ownerDocument, n = ee(r), t = r.documentElement, {
                top: a.top + n.pageYOffset - t.clientTop,
                left: a.left + n.pageXOffset - t.clientLeft
            }) : a) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    a = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ge.nodeName(e[0], "html") || (a = e.offset()), a = {
                    top: a.top + ge.css(e[0], "borderTopWidth", !0),
                    left: a.left + ge.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - a.top - ge.css(n, "marginTop", !0),
                    left: t.left - a.left - ge.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), ge.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ge.fn[e] = function(a) {
            return Me(this, function(e, a, r) {
                var o = ee(e);
                return void 0 === r ? o ? o[t] : e[a] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[a] = r)
            }, e, a, arguments.length)
        }
    }), ge.each(["top", "left"], function(e, t) {
        ge.cssHooks[t] = A(pe.pixelPosition, function(e, n) {
            if (n) return n = D(e, t), st.test(n) ? ge(e).position()[t] + "px" : n
        })
    }), ge.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ge.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, a) {
            ge.fn[a] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || o === !0 ? "margin" : "border");
                return Me(this, function(t, n, r) {
                    var o;
                    return ge.isWindow(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ge.css(t, n, s) : ge.style(t, n, r, s)
                }, t, i ? r : void 0, i)
            }
        })
    }), ge.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, a) {
            return this.on(t, e, n, a)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ge.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ge
    });
    var Wt = e.jQuery,
        Yt = e.$;
    return ge.noConflict = function(t) {
        return e.$ === ge && (e.$ = Yt), t && e.jQuery === ge && (e.jQuery = Wt), ge
    }, t || (e.jQuery = e.$ = ge), ge
}),
function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || ne;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function a(e) {
        var t = !!e && "length" in e && e.length,
            n = ge.type(e);
        return "function" !== n && !ge.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e, t, n) {
        return ge.isFunction(t) ? ge.grep(e, function(e, a) {
            return !!t.call(e, a, e) !== n
        }) : t.nodeType ? ge.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? ge.grep(e, function(e) {
            return se.call(t, e) > -1 !== n
        }) : ke.test(t) ? ge.filter(t, e, n) : (t = ge.filter(t, e), ge.grep(e, function(e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function o(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function i(e) {
        var t = {};
        return ge.each(e.match(Ne) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function f(e, t, n) {
        var a;
        try {
            e && ge.isFunction(a = e.promise) ? a.call(e).done(t).fail(n) : e && ge.isFunction(a = e.then) ? a.call(e, t, n) : t.call(void 0, e)
        } catch (e) {
            n.call(void 0, e)
        }
    }

    function c() {
        ne.removeEventListener("DOMContentLoaded", c), e.removeEventListener("load", c), ge.ready()
    }

    function u() {
        this.expando = ge.expando + u.uid++
    }

    function d(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Pe.test(e) ? JSON.parse(e) : e)
    }

    function p(e, t, n) {
        var a;
        if (void 0 === n && 1 === e.nodeType)
            if (a = "data-" + t.replace(Oe, "-$&").toLowerCase(), n = e.getAttribute(a), "string" == typeof n) {
                try {
                    n = d(n)
                } catch (e) {}
                qe.set(e, t, n)
            } else n = void 0;
        return n
    }

    function h(e, t, n, a) {
        var r, o = 1,
            i = 20,
            s = a ? function() {
                return a.cur()
            } : function() {
                return ge.css(e, t, "")
            },
            l = s(),
            f = n && n[3] || (ge.cssNumber[t] ? "" : "px"),
            c = (ge.cssNumber[t] || "px" !== f && +l) && Re.exec(ge.css(e, t));
        if (c && c[3] !== f) {
            f = f || c[3], n = n || [], c = +l || 1;
            do o = o || ".5", c /= o, ge.style(e, t, c + f); while (o !== (o = s() / l) && 1 !== o && --i)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], a && (a.unit = f, a.start = c, a.end = r)), r
    }

    function g(e) {
        var t, n = e.ownerDocument,
            a = e.nodeName,
            r = ze[a];
        return r ? r : (t = n.body.appendChild(n.createElement(a)), r = ge.css(t, "display"), t.parentNode.removeChild(t), "none" === r && (r = "block"), ze[a] = r, r)
    }

    function m(e, t) {
        for (var n, a, r = [], o = 0, i = e.length; o < i; o++) a = e[o], a.style && (n = a.style.display, t ? ("none" === n && (r[o] = He.get(a, "display") || null, r[o] || (a.style.display = "")), "" === a.style.display && Be(a) && (r[o] = g(a))) : "none" !== n && (r[o] = "none", He.set(a, "display", n)));
        for (o = 0; o < i; o++) null != r[o] && (e[o].style.display = r[o]);
        return e
    }

    function v(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && ge.nodeName(e, t) ? ge.merge([e], n) : n
    }

    function y(e, t) {
        for (var n = 0, a = e.length; n < a; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
    }

    function b(e, t, n, a, r) {
        for (var o, i, s, l, f, c, u = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if (o = e[p], o || 0 === o)
                if ("object" === ge.type(o)) ge.merge(d, o.nodeType ? [o] : o);
                else if (Ve.test(o)) {
            for (i = i || u.appendChild(t.createElement("div")), s = (Ye.exec(o) || ["", ""])[1].toLowerCase(), l = Ge[s] || Ge._default, i.innerHTML = l[1] + ge.htmlPrefilter(o) + l[2], c = l[0]; c--;) i = i.lastChild;
            ge.merge(d, i.childNodes), i = u.firstChild, i.textContent = ""
        } else d.push(t.createTextNode(o));
        for (u.textContent = "", p = 0; o = d[p++];)
            if (a && ge.inArray(o, a) > -1) r && r.push(o);
            else if (f = ge.contains(o.ownerDocument, o), i = v(u.appendChild(o), "script"), f && y(i), n)
            for (c = 0; o = i[c++];) Ze.test(o.type || "") && n.push(o);
        return u
    }

    function w() {
        return !0
    }

    function x() {
        return !1
    }

    function _() {
        try {
            return ne.activeElement
        } catch (e) {}
    }

    function C(e, t, n, a, r, o) {
        var i, s;
        if ("object" == typeof t) {
            "string" != typeof n && (a = a || n, n = void 0);
            for (s in t) C(e, s, n, a, t[s], o);
            return e
        }
        if (null == a && null == r ? (r = n, a = n = void 0) : null == r && ("string" == typeof n ? (r = a, a = void 0) : (r = a, a = n, n = void 0)), r === !1) r = x;
        else if (!r) return e;
        return 1 === o && (i = r, r = function(e) {
            return ge().off(e), i.apply(this, arguments)
        }, r.guid = i.guid || (i.guid = ge.guid++)), e.each(function() {
            ge.event.add(this, t, r, a, n)
        })
    }

    function T(e, t) {
        return ge.nodeName(e, "table") && ge.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e
    }

    function k(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function S(e) {
        var t = rt.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function L(e, t) {
        var n, a, r, o, i, s, l, f;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (o = He.access(e), i = He.set(t, o), f = o.events)) {
                delete i.handle, i.events = {};
                for (r in f)
                    for (n = 0, a = f[r].length; n < a; n++) ge.event.add(t, r, f[r][n])
            }
            qe.hasData(e) && (s = qe.access(e), l = ge.extend({}, s), qe.set(t, l))
        }
    }

    function E(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && We.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function j(e, t, a, r) {
        t = oe.apply([], t);
        var o, i, s, l, f, c, u = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            g = ge.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !pe.checkClone && at.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), j(o, t, a, r)
        });
        if (d && (o = b(t, e[0].ownerDocument, !1, e, r), i = o.firstChild, 1 === o.childNodes.length && (o = i), i || r)) {
            for (s = ge.map(v(o, "script"), k), l = s.length; u < d; u++) f = o, u !== p && (f = ge.clone(f, !0, !0), l && ge.merge(s, v(f, "script"))), a.call(e[u], f, u);
            if (l)
                for (c = s[s.length - 1].ownerDocument, ge.map(s, S), u = 0; u < l; u++) f = s[u], Ze.test(f.type || "") && !He.access(f, "globalEval") && ge.contains(c, f) && (f.src ? ge._evalUrl && ge._evalUrl(f.src) : n(f.textContent.replace(ot, ""), c))
        }
        return e
    }

    function N(e, t, n) {
        for (var a, r = t ? ge.filter(t, e) : e, o = 0; null != (a = r[o]); o++) n || 1 !== a.nodeType || ge.cleanData(v(a)), a.parentNode && (n && ge.contains(a.ownerDocument, a) && y(v(a, "script")), a.parentNode.removeChild(a));
        return e
    }

    function D(e, t, n) {
        var a, r, o, i, s = e.style;
        return n = n || lt(e), n && (i = n.getPropertyValue(t) || n[t], "" !== i || ge.contains(e.ownerDocument, e) || (i = ge.style(e, t)), !pe.pixelMarginRight() && st.test(i) && it.test(t) && (a = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = i, i = n.width, s.width = a, s.minWidth = r, s.maxWidth = o)), void 0 !== i ? i + "" : i
    }

    function A(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        if (e in pt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
            if (e = dt[n] + t, e in pt) return e
    }

    function I(e, t, n) {
        var a = Re.exec(t);
        return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t
    }

    function H(e, t, n, a, r) {
        var o, i = 0;
        for (o = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (i += ge.css(e, n + Ue[o], !0, r)), a ? ("content" === n && (i -= ge.css(e, "padding" + Ue[o], !0, r)), "margin" !== n && (i -= ge.css(e, "border" + Ue[o] + "Width", !0, r))) : (i += ge.css(e, "padding" + Ue[o], !0, r), "padding" !== n && (i += ge.css(e, "border" + Ue[o] + "Width", !0, r)));
        return i
    }

    function q(e, t, n) {
        var a, r = !0,
            o = lt(e),
            i = "border-box" === ge.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (a = e.getBoundingClientRect()[t]), a <= 0 || null == a) {
            if (a = D(e, t, o), (a < 0 || null == a) && (a = e.style[t]), st.test(a)) return a;
            r = i && (pe.boxSizingReliable() || a === e.style[t]), a = parseFloat(a) || 0
        }
        return a + H(e, t, n || (i ? "border" : "content"), r, o) + "px"
    }

    function P(e, t, n, a, r) {
        return new P.prototype.init(e, t, n, a, r)
    }

    function O() {
        gt && (e.requestAnimationFrame(O), ge.fx.tick())
    }

    function F() {
        return e.setTimeout(function() {
            ht = void 0
        }), ht = ge.now()
    }

    function R(e, t) {
        var n, a = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; a < 4; a += 2 - t) n = Ue[a], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function U(e, t, n) {
        for (var a, r = (z.tweeners[t] || []).concat(z.tweeners["*"]), o = 0, i = r.length; o < i; o++)
            if (a = r[o].call(n, t, e)) return a
    }

    function B(e, t, n) {
        var a, r, o, i, s, l, f, c, u = "width" in t || "height" in t,
            d = this,
            p = {},
            h = e.style,
            g = e.nodeType && Be(e),
            v = He.get(e, "fxshow");
        n.queue || (i = ge._queueHooks(e, "fx"), null == i.unqueued && (i.unqueued = 0, s = i.empty.fire, i.empty.fire = function() {
            i.unqueued || s()
        }), i.unqueued++, d.always(function() {
            d.always(function() {
                i.unqueued--, ge.queue(e, "fx").length || i.empty.fire()
            })
        }));
        for (a in t)
            if (r = t[a], mt.test(r)) {
                if (delete t[a], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
                    if ("show" !== r || !v || void 0 === v[a]) continue;
                    g = !0
                }
                p[a] = v && v[a] || ge.style(e, a)
            }
        if (l = !ge.isEmptyObject(t), l || !ge.isEmptyObject(p)) {
            u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], f = v && v.display, null == f && (f = He.get(e, "display")), c = ge.css(e, "display"), "none" === c && (f ? c = f : (m([e], !0), f = e.style.display || f, c = ge.css(e, "display"), m([e]))), ("inline" === c || "inline-block" === c && null != f) && "none" === ge.css(e, "float") && (l || (d.done(function() {
                h.display = f
            }), null == f && (c = h.display, f = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", d.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), l = !1;
            for (a in p) l || (v ? "hidden" in v && (g = v.hidden) : v = He.access(e, "fxshow", {
                display: f
            }), o && (v.hidden = !g), g && m([e], !0), d.done(function() {
                g || m([e]), He.remove(e, "fxshow");
                for (a in p) ge.style(e, a, p[a])
            })), l = U(g ? v[a] : 0, a, d), a in v || (v[a] = l.start, g && (l.end = l.start, l.start = 0))
        }
    }

    function X(e, t) {
        var n, a, r, o, i;
        for (n in e)
            if (a = ge.camelCase(n), r = t[a], o = e[n], ge.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== a && (e[a] = o, delete e[n]), i = ge.cssHooks[a], i && "expand" in i) {
                o = i.expand(o), delete e[a];
                for (n in o) n in e || (e[n] = o[n], t[n] = r)
            } else t[a] = r
    }

    function z(e, t, n) {
        var a, r, o = 0,
            i = z.prefilters.length,
            s = ge.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) return !1;
                for (var t = ht || F(), n = Math.max(0, f.startTime + f.duration - t), a = n / f.duration || 0, o = 1 - a, i = 0, l = f.tweens.length; i < l; i++) f.tweens[i].run(o);
                return s.notifyWith(e, [f, o, n]), o < 1 && l ? n : (s.resolveWith(e, [f]), !1)
            },
            f = s.promise({
                elem: e,
                props: ge.extend({}, t),
                opts: ge.extend(!0, {
                    specialEasing: {},
                    easing: ge.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: ht || F(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var a = ge.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(a), a
                },
                stop: function(t) {
                    var n = 0,
                        a = t ? f.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < a; n++) f.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [f, 1, 0]), s.resolveWith(e, [f, t])) : s.rejectWith(e, [f, t]), this
                }
            }),
            c = f.props;
        for (X(c, f.opts.specialEasing); o < i; o++)
            if (a = z.prefilters[o].call(f, e, c, f.opts)) return ge.isFunction(a.stop) && (ge._queueHooks(f.elem, f.opts.queue).stop = ge.proxy(a.stop, a)), a;
        return ge.map(c, U, f), ge.isFunction(f.opts.start) && f.opts.start.call(e, f), ge.fx.timer(ge.extend(l, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function W(e) {
        var t = e.match(Ne) || [];
        return t.join(" ")
    }

    function Y(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function Z(e, t, n, a) {
        var r;
        if (ge.isArray(t)) ge.each(t, function(t, r) {
            n || St.test(e) ? a(e, r) : Z(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, a)
        });
        else if (n || "object" !== ge.type(t)) a(e, t);
        else
            for (r in t) Z(e + "[" + r + "]", t[r], n, a)
    }

    function G(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var a, r = 0,
                o = t.toLowerCase().match(Ne) || [];
            if (ge.isFunction(n))
                for (; a = o[r++];) "+" === a[0] ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
        }
    }

    function V(e, t, n, a) {
        function r(s) {
            var l;
            return o[s] = !0, ge.each(e[s] || [], function(e, s) {
                var f = s(t, n, a);
                return "string" != typeof f || i || o[f] ? i ? !(l = f) : void 0 : (t.dataTypes.unshift(f), r(f), !1)
            }), l
        }
        var o = {},
            i = e === Ot;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }

    function J(e, t) {
        var n, a, r = ge.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : a || (a = {}))[n] = t[n]);
        return a && ge.extend(!0, e, a), e
    }

    function Q(e, t, n) {
        for (var a, r, o, i, s = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === a && (a = e.mimeType || t.getResponseHeader("Content-Type"));
        if (a)
            for (r in s)
                if (s[r] && s[r].test(a)) {
                    l.unshift(r);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (r in n) {
                if (!l[0] || e.converters[r + " " + l[0]]) {
                    o = r;
                    break
                }
                i || (i = r)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function K(e, t, n, a) {
        var r, o, i, s, l, f = {},
            c = e.dataTypes.slice();
        if (c[1])
            for (i in e.converters) f[i.toLowerCase()] = e.converters[i];
        for (o = c.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
            if (i = f[l + " " + o] || f["* " + o], !i)
                for (r in f)
                    if (s = r.split(" "), s[1] === o && (i = f[l + " " + s[0]] || f["* " + s[0]])) {
                        i === !0 ? i = f[r] : f[r] !== !0 && (o = s[0], c.unshift(s[1]));
                        break
                    }
            if (i !== !0)
                if (i && e.throws) t = i(t);
                else try {
                    t = i(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: i ? e : "No conversion from " + l + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }

    function ee(e) {
        return ge.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var te = [],
        ne = e.document,
        ae = Object.getPrototypeOf,
        re = te.slice,
        oe = te.concat,
        ie = te.push,
        se = te.indexOf,
        le = {},
        fe = le.toString,
        ce = le.hasOwnProperty,
        ue = ce.toString,
        de = ue.call(Object),
        pe = {},
        he = "3.1.1",
        ge = function(e, t) {
            return new ge.fn.init(e, t)
        },
        me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ve = /^-ms-/,
        ye = /-([a-z])/g,
        be = function(e, t) {
            return t.toUpperCase()
        };
    ge.fn = ge.prototype = {
        jquery: he,
        constructor: ge,
        length: 0,
        toArray: function() {
            return re.call(this)
        },
        get: function(e) {
            return null == e ? re.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ge.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ge.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ge.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(re.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ie,
        sort: te.sort,
        splice: te.splice
    }, ge.extend = ge.fn.extend = function() {
        var e, t, n, a, r, o, i = arguments[0] || {},
            s = 1,
            l = arguments.length,
            f = !1;
        for ("boolean" == typeof i && (f = i, i = arguments[s] || {}, s++), "object" == typeof i || ge.isFunction(i) || (i = {}), s === l && (i = this, s--); s < l; s++)
            if (null != (e = arguments[s]))
                for (t in e) n = i[t], a = e[t], i !== a && (f && a && (ge.isPlainObject(a) || (r = ge.isArray(a))) ? (r ? (r = !1, o = n && ge.isArray(n) ? n : []) : o = n && ge.isPlainObject(n) ? n : {}, i[t] = ge.extend(f, o, a)) : void 0 !== a && (i[t] = a));
        return i
    }, ge.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ge.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = ge.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== fe.call(e)) && (!(t = ae(e)) || (n = ce.call(t, "constructor") && t.constructor, "function" == typeof n && ue.call(n) === de))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[fe.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ve, "ms-").replace(ye, be)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, r = 0;
            if (a(e))
                for (n = e.length; r < n && t.call(e[r], r, e[r]) !== !1; r++);
            else
                for (r in e)
                    if (t.call(e[r], r, e[r]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (a(Object(e)) ? ge.merge(n, "string" == typeof e ? [e] : e) : ie.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : se.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, a = 0, r = e.length; a < n; a++) e[r++] = t[a];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var a, r = [], o = 0, i = e.length, s = !n; o < i; o++) a = !t(e[o], o), a !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, o, i = 0,
                s = [];
            if (a(e))
                for (r = e.length; i < r; i++) o = t(e[i], i, n), null != o && s.push(o);
            else
                for (i in e) o = t(e[i], i, n), null != o && s.push(o);
            return oe.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, a, r;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ge.isFunction(e)) return a = re.call(arguments, 2), r = function() {
                return e.apply(t || this, a.concat(re.call(arguments)))
            }, r.guid = e.guid = e.guid || ge.guid++, r
        },
        now: Date.now,
        support: pe
    }), "function" == typeof Symbol && (ge.fn[Symbol.iterator] = te[Symbol.iterator]), ge.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var we = function(e) {
        function t(e, t, n, a) {
            var r, o, i, s, l, f, c, d = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!a && ((t ? t.ownerDocument || t : U) !== M && A(t), t = t || M, H)) {
                if (11 !== h && (l = ye.exec(e)))
                    if (r = l[1]) {
                        if (9 === h) {
                            if (!(i = t.getElementById(r))) return n;
                            if (i.id === r) return n.push(i), n
                        } else if (d && (i = d.getElementById(r)) && F(t, i) && i.id === r) return n.push(i), n
                    } else {
                        if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(r)), n
                    }
                if (_.qsa && !Y[e + " "] && (!q || !q.test(e))) {
                    if (1 !== h) d = t, c = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(_e, Ce) : t.setAttribute("id", s = R), f = S(e), o = f.length; o--;) f[o] = "#" + s + " " + p(f[o]);
                        c = f.join(","), d = be.test(e) && u(t.parentNode) || t
                    }
                    if (c) try {
                        return K.apply(n, d.querySelectorAll(c)), n
                    } catch (e) {} finally {
                        s === R && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(le, "$1"), t, n, a)
        }

        function n() {
            function e(n, a) {
                return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = a
            }
            var t = [];
            return e
        }

        function a(e) {
            return e[R] = !0, e
        }

        function r(e) {
            var t = M.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), a = n.length; a--;) C.attrHandle[n[a]] = t
        }

        function i(e, t) {
            var n = t && e,
                a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (a) return a;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function f(e) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function c(e) {
            return a(function(t) {
                return t = +t, a(function(n, a) {
                    for (var r, o = e([], n.length, t), i = o.length; i--;) n[r = o[i]] && (n[r] = !(a[r] = n[r]))
                })
            })
        }

        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function d() {}

        function p(e) {
            for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
            return a
        }

        function h(e, t, n) {
            var a = t.dir,
                r = t.next,
                o = r || a,
                i = n && "parentNode" === o,
                s = X++;
            return t.first ? function(t, n, r) {
                for (; t = t[a];)
                    if (1 === t.nodeType || i) return e(t, n, r);
                return !1
            } : function(t, n, l) {
                var f, c, u, d = [B, s];
                if (l) {
                    for (; t = t[a];)
                        if ((1 === t.nodeType || i) && e(t, n, l)) return !0
                } else
                    for (; t = t[a];)
                        if (1 === t.nodeType || i)
                            if (u = t[R] || (t[R] = {}), c = u[t.uniqueID] || (u[t.uniqueID] = {}), r && r === t.nodeName.toLowerCase()) t = t[a] || t;
                            else {
                                if ((f = c[o]) && f[0] === B && f[1] === s) return d[2] = f[2];
                                if (c[o] = d, d[2] = e(t, n, l)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function(t, n, a) {
                for (var r = e.length; r--;)
                    if (!e[r](t, n, a)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, a) {
            for (var r = 0, o = n.length; r < o; r++) t(e, n[r], a);
            return a
        }

        function v(e, t, n, a, r) {
            for (var o, i = [], s = 0, l = e.length, f = null != t; s < l; s++)(o = e[s]) && (n && !n(o, a, r) || (i.push(o), f && t.push(s)));
            return i
        }

        function y(e, t, n, r, o, i) {
            return r && !r[R] && (r = y(r)), o && !o[R] && (o = y(o, i)), a(function(a, i, s, l) {
                var f, c, u, d = [],
                    p = [],
                    h = i.length,
                    g = a || m(t || "*", s.nodeType ? [s] : s, []),
                    y = !e || !a && t ? g : v(g, d, e, s, l),
                    b = n ? o || (a ? e : h || r) ? [] : i : y;
                if (n && n(y, b, s, l), r)
                    for (f = v(b, p), r(f, [], s, l), c = f.length; c--;)(u = f[c]) && (b[p[c]] = !(y[p[c]] = u));
                if (a) {
                    if (o || e) {
                        if (o) {
                            for (f = [], c = b.length; c--;)(u = b[c]) && f.push(y[c] = u);
                            o(null, b = [], f, l)
                        }
                        for (c = b.length; c--;)(u = b[c]) && (f = o ? te(a, u) : d[c]) > -1 && (a[f] = !(i[f] = u))
                    }
                } else b = v(b === i ? b.splice(h, b.length) : b), o ? o(null, i, b, l) : K.apply(i, b)
            })
        }

        function b(e) {
            for (var t, n, a, r = e.length, o = C.relative[e[0].type], i = o || C.relative[" "], s = o ? 1 : 0, l = h(function(e) {
                    return e === t
                }, i, !0), f = h(function(e) {
                    return te(t, e) > -1
                }, i, !0), c = [function(e, n, a) {
                    var r = !o && (a || n !== j) || ((t = n).nodeType ? l(e, n, a) : f(e, n, a));
                    return t = null, r
                }]; s < r; s++)
                if (n = C.relative[e[s].type]) c = [h(g(c), n)];
                else {
                    if (n = C.filter[e[s].type].apply(null, e[s].matches), n[R]) {
                        for (a = ++s; a < r && !C.relative[e[a].type]; a++);
                        return y(s > 1 && g(c), s > 1 && p(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(le, "$1"), n, s < a && b(e.slice(s, a)), a < r && b(e = e.slice(a)), a < r && p(e))
                    }
                    c.push(n)
                }
            return g(c)
        }

        function w(e, n) {
            var r = n.length > 0,
                o = e.length > 0,
                i = function(a, i, s, l, f) {
                    var c, u, d, p = 0,
                        h = "0",
                        g = a && [],
                        m = [],
                        y = j,
                        b = a || o && C.find.TAG("*", f),
                        w = B += null == y ? 1 : Math.random() || .1,
                        x = b.length;
                    for (f && (j = i === M || i || f); h !== x && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (u = 0, i || c.ownerDocument === M || (A(c), s = !H); d = e[u++];)
                                if (d(c, i || M, s)) {
                                    l.push(c);
                                    break
                                }
                            f && (B = w)
                        }
                        r && ((c = !d && c) && p--, a && g.push(c))
                    }
                    if (p += h, r && h !== p) {
                        for (u = 0; d = n[u++];) d(g, m, i, s);
                        if (a) {
                            if (p > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = J.call(l));
                            m = v(m)
                        }
                        K.apply(l, m), f && !a && m.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                    }
                    return f && (B = w, j = y), g
                };
            return r ? a(i) : i
        }
        var x, _, C, T, k, S, L, E, j, N, D, A, M, I, H, q, P, O, F, R = "sizzle" + 1 * new Date,
            U = e.document,
            B = 0,
            X = 0,
            z = n(),
            W = n(),
            Y = n(),
            Z = function(e, t) {
                return e === t && (D = !0), 0
            },
            G = {}.hasOwnProperty,
            V = [],
            J = V.pop,
            Q = V.push,
            K = V.push,
            ee = V.slice,
            te = function(e, t) {
                for (var n = 0, a = e.length; n < a; n++)
                    if (e[n] === t) return n;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ae = "[\\x20\\t\\r\\n\\f]",
            re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            oe = "\\[" + ae + "*(" + re + ")(?:" + ae + "*([*^$|!~]?=)" + ae + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ae + "*\\]",
            ie = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            se = new RegExp(ae + "+", "g"),
            le = new RegExp("^" + ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ae + "+$", "g"),
            fe = new RegExp("^" + ae + "*," + ae + "*"),
            ce = new RegExp("^" + ae + "*([>+~]|" + ae + ")" + ae + "*"),
            ue = new RegExp("=" + ae + "*([^\\]'\"]*?)" + ae + "*\\]", "g"),
            de = new RegExp(ie),
            pe = new RegExp("^" + re + "$"),
            he = {
                ID: new RegExp("^#(" + re + ")"),
                CLASS: new RegExp("^\\.(" + re + ")"),
                TAG: new RegExp("^(" + re + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + ie),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ae + "*(even|odd|(([+-]|)(\\d*)n|)" + ae + "*(?:([+-]|)" + ae + "*(\\d+)|))" + ae + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ae + "*((?:-\\d)?\\d*)" + ae + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /^(?:input|select|textarea|button)$/i,
            me = /^h\d$/i,
            ve = /^[^{]+\{\s*\[native \w/,
            ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            we = new RegExp("\\\\([\\da-f]{1,6}" + ae + "?|(" + ae + ")|.)", "ig"),
            xe = function(e, t, n) {
                var a = "0x" + t - 65536;
                return a !== a || n ? t : a < 0 ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            },
            _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Te = function() {
                A()
            },
            ke = h(function(e) {
                return e.disabled === !0 && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            K.apply(V = ee.call(U.childNodes), U.childNodes), V[U.childNodes.length].nodeType
        } catch (e) {
            K = {
                apply: V.length ? function(e, t) {
                    Q.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, a = 0; e[n++] = t[a++];);
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {}, k = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, A = t.setDocument = function(e) {
            var t, n, a = e ? e.ownerDocument || e : U;
            return a !== M && 9 === a.nodeType && a.documentElement ? (M = a, I = M.documentElement, H = !k(M), U !== M && (n = M.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), _.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), _.getElementsByTagName = r(function(e) {
                return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length
            }), _.getElementsByClassName = ve.test(M.getElementsByClassName), _.getById = r(function(e) {
                return I.appendChild(e).id = R, !M.getElementsByName || !M.getElementsByName(R).length
            }), _.getById ? (C.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (C.filter.ID = function(e) {
                var t = e.replace(we, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, C.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && H) {
                    var n, a, r, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [o];
                        for (r = t.getElementsByName(e), a = 0; o = r[a++];)
                            if (n = o.getAttributeNode("id"), n && n.value === e) return [o]
                    }
                    return []
                }
            }), C.find.TAG = _.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, a = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && a.push(n);
                    return a
                }
                return o
            }, C.find.CLASS = _.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && H) return t.getElementsByClassName(e)
            }, P = [], q = [], (_.qsa = ve.test(M.querySelectorAll)) && (r(function(e) {
                I.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + ae + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + ae + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + R + "-]").length || q.push("~="), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || q.push(".#.+[+~]")
            }), r(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = M.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + ae + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), I.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (_.matchesSelector = ve.test(O = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && r(function(e) {
                _.disconnectedMatch = O.call(e, "*"), O.call(e, "[s!='']:x"), P.push("!=", ie)
            }), q = q.length && new RegExp(q.join("|")), P = P.length && new RegExp(P.join("|")), t = ve.test(I.compareDocumentPosition), F = t || ve.test(I.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    a = t && t.parentNode;
                return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, Z = t ? function(e, t) {
                if (e === t) return D = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === M || e.ownerDocument === U && F(U, e) ? -1 : t === M || t.ownerDocument === U && F(U, t) ? 1 : N ? te(N, e) - te(N, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return D = !0, 0;
                var n, a = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    l = [t];
                if (!r || !o) return e === M ? -1 : t === M ? 1 : r ? -1 : o ? 1 : N ? te(N, e) - te(N, t) : 0;
                if (r === o) return i(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[a] === l[a];) a++;
                return a ? i(s[a], l[a]) : s[a] === U ? -1 : l[a] === U ? 1 : 0
            }, M) : M
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== M && A(e), n = n.replace(ue, "='$1']"), _.matchesSelector && H && !Y[n + " "] && (!P || !P.test(n)) && (!q || !q.test(n))) try {
                var a = O.call(e, n);
                if (a || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return a
            } catch (e) {}
            return t(n, M, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== M && A(e), F(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== M && A(e);
            var n = C.attrHandle[t.toLowerCase()],
                a = n && G.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
            return void 0 !== a ? a : _.attributes || !H ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }, t.escape = function(e) {
            return (e + "").replace(_e, Ce)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                a = 0,
                r = 0;
            if (D = !_.detectDuplicates, N = !_.sortStable && e.slice(0), e.sort(Z), D) {
                for (; t = e[r++];) t === e[r] && (a = n.push(r));
                for (; a--;) e.splice(n[a], 1)
            }
            return N = null, e
        }, T = t.getText = function(e) {
            var t, n = "",
                a = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += T(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else
                for (; t = e[a++];) n += T(t);
            return n
        }, C = t.selectors = {
            cacheLength: 50,
            createPseudo: a,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(we, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(we, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && de.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(we, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + ae + ")" + e + "(" + ae + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, a) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === a : "!=" === n ? o !== a : "^=" === n ? a && 0 === o.indexOf(a) : "*=" === n ? a && o.indexOf(a) > -1 : "$=" === n ? a && o.slice(-a.length) === a : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(a) > -1 : "|=" === n && (o === a || o.slice(0, a.length + 1) === a + "-"))
                    }
                },
                CHILD: function(e, t, n, a, r) {
                    var o = "nth" !== e.slice(0, 3),
                        i = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === a && 0 === r ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, l) {
                        var f, c, u, d, p, h, g = o !== i ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(),
                            y = !l && !s,
                            b = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [i ? m.firstChild : m.lastChild], i && y) {
                                for (d = m, u = d[R] || (d[R] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), f = c[e] || [], p = f[0] === B && f[1], b = p && f[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [B, p, b];
                                        break
                                    }
                            } else if (y && (d = t, u = d[R] || (d[R] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), f = c[e] || [], p = f[0] === B && f[1], b = p), b === !1)
                                for (;
                                    (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (u = d[R] || (d[R] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), c[e] = [B, b]), d !== t)););
                            return b -= r, b === a || b % a === 0 && b / a >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var r, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (r = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? a(function(e, t) {
                        for (var a, r = o(e, n), i = r.length; i--;) a = te(e, r[i]), e[a] = !(t[a] = r[i])
                    }) : function(e) {
                        return o(e, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: a(function(e) {
                    var t = [],
                        n = [],
                        r = L(e.replace(le, "$1"));
                    return r[R] ? a(function(e, t, n, a) {
                        for (var o, i = r(e, null, a, []), s = e.length; s--;)(o = i[s]) && (e[s] = !(t[s] = o))
                    }) : function(e, a, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: a(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: a(function(e) {
                    return e = e.replace(we, xe),
                        function(t) {
                            return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                        }
                }),
                lang: a(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do
                                if (n = H ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === I
                },
                focus: function(e) {
                    return e === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: f(!1),
                disabled: f(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !C.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return ge.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: c(function() {
                    return [0]
                }),
                last: c(function(e, t) {
                    return [t - 1]
                }),
                eq: c(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: c(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: c(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: c(function(e, t, n) {
                    for (var a = n < 0 ? n + t : n; --a >= 0;) e.push(a);
                    return e
                }),
                gt: c(function(e, t, n) {
                    for (var a = n < 0 ? n + t : n; ++a < t;) e.push(a);
                    return e
                })
            }
        }, C.pseudos.nth = C.pseudos.eq;
        for (x in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) C.pseudos[x] = s(x);
        for (x in {
                submit: !0,
                reset: !0
            }) C.pseudos[x] = l(x);
        return d.prototype = C.filters = C.pseudos, C.setFilters = new d, S = t.tokenize = function(e, n) {
            var a, r, o, i, s, l, f, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], f = C.preFilter; s;) {
                a && !(r = fe.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(o = [])), a = !1, (r = ce.exec(s)) && (a = r.shift(), o.push({
                    value: a,
                    type: r[0].replace(le, " ")
                }), s = s.slice(a.length));
                for (i in C.filter) !(r = he[i].exec(s)) || f[i] && !(r = f[i](r)) || (a = r.shift(), o.push({
                    value: a,
                    type: i,
                    matches: r
                }), s = s.slice(a.length));
                if (!a) break
            }
            return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
        }, L = t.compile = function(e, t) {
            var n, a = [],
                r = [],
                o = Y[e + " "];
            if (!o) {
                for (t || (t = S(e)), n = t.length; n--;) o = b(t[n]), o[R] ? a.push(o) : r.push(o);
                o = Y(e, w(r, a)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, a) {
            var r, o, i, s, l, f = "function" == typeof e && e,
                c = !a && S(e = f.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (i = o[0]).type && 9 === t.nodeType && H && C.relative[o[1].type]) {
                    if (t = (C.find.ID(i.matches[0].replace(we, xe), t) || [])[0], !t) return n;
                    f && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (r = he.needsContext.test(e) ? 0 : o.length; r-- && (i = o[r], !C.relative[s = i.type]);)
                    if ((l = C.find[s]) && (a = l(i.matches[0].replace(we, xe), be.test(o[0].type) && u(t.parentNode) || t))) {
                        if (o.splice(r, 1), e = a.length && p(o), !e) return K.apply(n, a), n;
                        break
                    }
            }
            return (f || L(e, c))(a, t, !H, n, !t || be.test(e) && u(t.parentNode) || t), n
        }, _.sortStable = R.split("").sort(Z).join("") === R, _.detectDuplicates = !!D, A(), _.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(M.createElement("fieldset"))
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), _.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), r(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var a;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }), t
    }(e);
    ge.find = we, ge.expr = we.selectors, ge.expr[":"] = ge.expr.pseudos, ge.uniqueSort = ge.unique = we.uniqueSort, ge.text = we.getText, ge.isXMLDoc = we.isXML, ge.contains = we.contains, ge.escapeSelector = we.escape;
    var xe = function(e, t, n) {
            for (var a = [], r = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (r && ge(e).is(n)) break;
                    a.push(e)
                }
            return a
        },
        _e = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ce = ge.expr.match.needsContext,
        Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        ke = /^.[^:#\[\.,]*$/;
    ge.filter = function(e, t, n) {
        var a = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? ge.find.matchesSelector(a, e) ? [a] : [] : ge.find.matches(e, ge.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ge.fn.extend({
        find: function(e) {
            var t, n, a = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(ge(e).filter(function() {
                for (t = 0; t < a; t++)
                    if (ge.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < a; t++) ge.find(e, r[t], n);
            return a > 1 ? ge.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && Ce.test(e) ? ge(e) : e || [], !1).length
        }
    });
    var $e, Se = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
        Le = ge.fn.init = function(e, t, n) {
            var a, r;
            if (!e) return this;
            if (n = n || $e, "string" == typeof e) {
                if (a = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Se.exec(e), !a || !a[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (a[1]) {
                    if (t = t instanceof ge ? t[0] : t, ge.merge(this, ge.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)), Te.test(a[1]) && ge.isPlainObject(t))
                        for (a in t) ge.isFunction(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                    return this
                }
                return r = ne.getElementById(a[2]), r && (this[0] = r, this.length = 1), this
            }
            return e.nodeType ? (this[0] = e, this.length = 1, this) : ge.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ge) : ge.makeArray(e, this)
        };
    Le.prototype = ge.fn, $e = ge(ne);
    var Ee = /^(?:parents|prev(?:Until|All))/,
        je = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ge.fn.extend({
        has: function(e) {
            var t = ge(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ge.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, a = 0,
                r = this.length,
                o = [],
                i = "string" != typeof e && ge(e);
            if (!Ce.test(e))
                for (; a < r; a++)
                    for (n = this[a]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (i ? i.index(n) > -1 : 1 === n.nodeType && ge.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? ge.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? se.call(ge(e), this[0]) : se.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ge.uniqueSort(ge.merge(this.get(), ge(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ge.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return xe(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return xe(e, "parentNode", n)
        },
        next: function(e) {
            return o(e, "nextSibling")
        },
        prev: function(e) {
            return o(e, "previousSibling")
        },
        nextAll: function(e) {
            return xe(e, "nextSibling")
        },
        prevAll: function(e) {
            return xe(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return xe(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return xe(e, "previousSibling", n)
        },
        siblings: function(e) {
            return _e((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return _e(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ge.merge([], e.childNodes)
        }
    }, function(e, t) {
        ge.fn[e] = function(n, a) {
            var r = ge.map(this, t, n);
            return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (r = ge.filter(a, r)), this.length > 1 && (je[e] || ge.uniqueSort(r), Ee.test(e) && r.reverse()), this.pushStack(r)
        }
    });
    var Ne = /[^\x20\t\r\n\f]+/g;
    ge.Callbacks = function(e) {
        e = "string" == typeof e ? i(e) : ge.extend({}, e);
        var t, n, a, r, o = [],
            s = [],
            l = -1,
            f = function() {
                for (r = e.once, a = t = !0; s.length; l = -1)
                    for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
                e.memory || (n = !1), t = !1, r && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (l = o.length - 1, s.push(n)), function t(n) {
                        ge.each(n, function(n, a) {
                            ge.isFunction(a) ? e.unique && c.has(a) || o.push(a) : a && a.length && "string" !== ge.type(a) && t(a)
                        })
                    }(arguments), n && !t && f()), this
                },
                remove: function() {
                    return ge.each(arguments, function(e, t) {
                        for (var n;
                            (n = ge.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? ge.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return r = s = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return r = s = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    return r || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || f()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!a
                }
            };
        return c
    }, ge.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", ge.Callbacks("memory"), ge.Callbacks("memory"), 2],
                    ["resolve", "done", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ge.Callbacks("once memory"), ge.Callbacks("once memory"), 1, "rejected"]
                ],
                a = "pending",
                r = {
                    state: function() {
                        return a
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return r.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return ge.Deferred(function(t) {
                            ge.each(n, function(n, a) {
                                var r = ge.isFunction(e[a[4]]) && e[a[4]];
                                o[a[1]](function() {
                                    var e = r && r.apply(this, arguments);
                                    e && ge.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[a[0] + "With"](this, r ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, a, r) {
                        function o(t, n, a, r) {
                            return function() {
                                var f = this,
                                    c = arguments,
                                    u = function() {
                                        var e, u;
                                        if (!(t < i)) {
                                            if (e = a.apply(f, c), e === n.promise()) throw new TypeError("Thenable self-resolution");
                                            u = e && ("object" == typeof e || "function" == typeof e) && e.then, ge.isFunction(u) ? r ? u.call(e, o(i, n, s, r), o(i, n, l, r)) : (i++, u.call(e, o(i, n, s, r), o(i, n, l, r), o(i, n, s, n.notifyWith))) : (a !== s && (f = void 0, c = [e]), (r || n.resolveWith)(f, c))
                                        }
                                    },
                                    d = r ? u : function() {
                                        try {
                                            u()
                                        } catch (e) {
                                            ge.Deferred.exceptionHook && ge.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= i && (a !== l && (f = void 0, c = [e]), n.rejectWith(f, c))
                                        }
                                    };
                                t ? d() : (ge.Deferred.getStackHook && (d.stackTrace = ge.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var i = 0;
                        return ge.Deferred(function(e) {
                            n[0][3].add(o(0, e, ge.isFunction(r) ? r : s, e.notifyWith)), n[1][3].add(o(0, e, ge.isFunction(t) ? t : s)), n[2][3].add(o(0, e, ge.isFunction(a) ? a : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ge.extend(e, r) : r
                    }
                },
                o = {};
            return ge.each(n, function(e, t) {
                var i = t[2],
                    s = t[5];
                r[t[1]] = i.add, s && i.add(function() {
                    a = s
                }, n[3 - e][2].disable, n[0][2].lock), i.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = i.fireWith
            }), r.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                a = Array(n),
                r = re.call(arguments),
                o = ge.Deferred(),
                i = function(e) {
                    return function(n) {
                        a[e] = this, r[e] = arguments.length > 1 ? re.call(arguments) : n, --t || o.resolveWith(a, r)
                    }
                };
            if (t <= 1 && (f(e, o.done(i(n)).resolve, o.reject), "pending" === o.state() || ge.isFunction(r[n] && r[n].then))) return o.then();
            for (; n--;) f(r[n], i(n), o.reject);
            return o.promise()
        }
    });
    var De = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ge.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && De.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ge.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var Ae = ge.Deferred();
    ge.fn.ready = function(e) {
        return Ae.then(e).catch(function(e) {
            ge.readyException(e)
        }), this
    }, ge.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ge.readyWait++ : ge.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --ge.readyWait : ge.isReady) || (ge.isReady = !0, e !== !0 && --ge.readyWait > 0 || Ae.resolveWith(ne, [ge]))
        }
    }), ge.ready.then = Ae.then, "complete" === ne.readyState || "loading" !== ne.readyState && !ne.documentElement.doScroll ? e.setTimeout(ge.ready) : (ne.addEventListener("DOMContentLoaded", c), e.addEventListener("load", c));
    var Me = function(e, t, n, a, r, o, i) {
            var s = 0,
                l = e.length,
                f = null == n;
            if ("object" === ge.type(n)) {
                r = !0;
                for (s in n) Me(e, t, s, n[s], !0, o, i)
            } else if (void 0 !== a && (r = !0, ge.isFunction(a) || (i = !0), f && (i ? (t.call(e, a), t = null) : (f = t, t = function(e, t, n) {
                    return f.call(ge(e), n)
                })), t))
                for (; s < l; s++) t(e[s], n, i ? a : a.call(e[s], s, t(e[s], n)));
            return r ? e : f ? t.call(e) : l ? t(e[0], n) : o
        },
        Ie = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    u.uid = 1, u.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var a, r = this.cache(e);
            if ("string" == typeof t) r[ge.camelCase(t)] = n;
            else
                for (a in t) r[ge.camelCase(a)] = t[a];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ge.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 !== t) {
                    ge.isArray(t) ? t = t.map(ge.camelCase) : (t = ge.camelCase(t), t = t in a ? [t] : t.match(Ne) || []), n = t.length;
                    for (; n--;) delete a[t[n]]
                }(void 0 === t || ge.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ge.isEmptyObject(t)
        }
    };
    var He = new u,
        qe = new u,
        Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Oe = /[A-Z]/g;
    ge.extend({
        hasData: function(e) {
            return qe.hasData(e) || He.hasData(e)
        },
        data: function(e, t, n) {
            return qe.access(e, t, n)
        },
        removeData: function(e, t) {
            qe.remove(e, t)
        },
        _data: function(e, t, n) {
            return He.access(e, t, n)
        },
        _removeData: function(e, t) {
            He.remove(e, t)
        }
    }), ge.fn.extend({
        data: function(e, t) {
            var n, a, r, o = this[0],
                i = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = qe.get(o), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))) {
                    for (n = i.length; n--;) i[n] && (a = i[n].name, 0 === a.indexOf("data-") && (a = ge.camelCase(a.slice(5)), p(o, a, r[a])));
                    He.set(o, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                qe.set(this, e)
            }) : Me(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (n = qe.get(o, e), void 0 !== n) return n;
                    if (n = p(o, e), void 0 !== n) return n
                } else this.each(function() {
                    qe.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                qe.remove(this, e)
            })
        }
    }), ge.extend({
        queue: function(e, t, n) {
            var a;
            if (e) return t = (t || "fx") + "queue", a = He.get(e, t), n && (!a || ge.isArray(n) ? a = He.access(e, t, ge.makeArray(n)) : a.push(n)), a || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ge.queue(e, t),
                a = n.length,
                r = n.shift(),
                o = ge._queueHooks(e, t),
                i = function() {
                    ge.dequeue(e, t)
                };
            "inprogress" === r && (r = n.shift(), a--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, i, o)), !a && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return He.get(e, n) || He.access(e, n, {
                empty: ge.Callbacks("once memory").add(function() {
                    He.remove(e, [t + "queue", n])
                })
            })
        }
    }), ge.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ge.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ge.queue(this, e, t);
                ge._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ge.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ge.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, a = 1,
                r = ge.Deferred(),
                o = this,
                i = this.length,
                s = function() {
                    --a || r.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; i--;) n = He.get(o[i], e + "queueHooks"), n && n.empty && (a++, n.empty.add(s));
            return s(), r.promise(t)
        }
    });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Re = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
        Ue = ["Top", "Right", "Bottom", "Left"],
        Be = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ge.contains(e.ownerDocument, e) && "none" === ge.css(e, "display")
        },
        Xe = function(e, t, n, a) {
            var r, o, i = {};
            for (o in t) i[o] = e.style[o], e.style[o] = t[o];
            r = n.apply(e, a || []);
            for (o in t) e.style[o] = i[o];
            return r
        },
        ze = {};
    ge.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Be(this) ? ge(this).show() : ge(this).hide()
            })
        }
    });
    var We = /^(?:checkbox|radio)$/i,
        Ye = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Ze = /^$|\/(?:java|ecma)script/i,
        Ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ge.optgroup = Ge.option, Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead, Ge.th = Ge.td;
    var Ve = /<|&#?\w+;/;
    ! function() {
        var e = ne.createDocumentFragment(),
            t = e.appendChild(ne.createElement("div")),
            n = ne.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), pe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", pe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Je = ne.documentElement,
        Qe = /^key/,
        Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        et = /^([^.]*)(?:\.(.+)|)/;
    ge.event = {
        global: {},
        add: function(e, t, n, a, r) {
            var o, i, s, l, f, c, u, d, p, h, g, m = He.get(e);
            if (m)
                for (n.handler && (o = n, n = o.handler, r = o.selector), r && ge.find.matchesSelector(Je, r), n.guid || (n.guid = ge.guid++), (l = m.events) || (l = m.events = {}), (i = m.handle) || (i = m.handle = function(t) {
                        return "undefined" != typeof ge && ge.event.triggered !== t.type ? ge.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(Ne) || [""], f = t.length; f--;) s = et.exec(t[f]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (u = ge.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = ge.event.special[p] || {}, c = ge.extend({
                    type: p,
                    origType: g,
                    data: a,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ge.expr.match.needsContext.test(r),
                    namespace: h.join(".")
                }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && u.setup.call(e, a, h, i) !== !1 || e.addEventListener && e.addEventListener(p, i)), u.add && (u.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, c) : d.push(c), ge.event.global[p] = !0)
        },
        remove: function(e, t, n, a, r) {
            var o, i, s, l, f, c, u, d, p, h, g, m = He.hasData(e) && He.get(e);
            if (m && (l = m.events)) {
                for (t = (t || "").match(Ne) || [""], f = t.length; f--;)
                    if (s = et.exec(t[f]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
                        for (u = ge.event.special[p] || {}, p = (a ? u.delegateType : u.bindType) || p, d = l[p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = o = d.length; o--;) c = d[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || a && a !== c.selector && ("**" !== a || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(e, c));
                        i && !d.length && (u.teardown && u.teardown.call(e, h, m.handle) !== !1 || ge.removeEvent(e, p, m.handle), delete l[p])
                    } else
                        for (p in l) ge.event.remove(e, p + t[f], n, a, !0);
                ge.isEmptyObject(l) && He.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t = ge.event.fix(e),
                n, a, r, o, i, s, l = new Array(arguments.length),
                f = (He.get(this, "events") || {})[t.type] || [],
                c = ge.event.special[t.type] || {};
            for (l[0] = t, n = 1; n < arguments.length; n++) l[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                for (s = ge.event.handlers.call(this, t, f), n = 0;
                    (o = s[n++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, a = 0;
                        (i = o.handlers[a++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(i.namespace) || (t.handleObj = i, t.data = i.data, r = ((ge.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), void 0 !== r && (t.result = r) === !1 && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(e, t) {
            var n, a, r, o, i, s = [],
                l = t.delegateCount,
                f = e.target;
            if (l && f.nodeType && !("click" === e.type && e.button >= 1))
                for (; f !== this; f = f.parentNode || this)
                    if (1 === f.nodeType && ("click" !== e.type || f.disabled !== !0)) {
                        for (o = [], i = {}, n = 0; n < l; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? ge(r, this).index(f) > -1 : ge.find(r, this, null, [f]).length), i[r] && o.push(a);
                        o.length && s.push({
                            elem: f,
                            handlers: o
                        })
                    }
            return f = this, l < t.length && s.push({
                elem: f,
                handlers: t.slice(l)
            }), s
        },
        addProp: function(e, t) {
            Object.defineProperty(ge.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ge.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[ge.expando] ? e : new ge.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== _() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === _() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && ge.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return ge.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ge.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ge.Event = function(e, t) {
        return this instanceof ge.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? w : x, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ge.extend(this, t), this.timeStamp = e && e.timeStamp || ge.now(), void(this[ge.expando] = !0)) : new ge.Event(e, t)
    }, ge.Event.prototype = {
        constructor: ge.Event,
        isDefaultPrevented: x,
        isPropagationStopped: x,
        isImmediatePropagationStopped: x,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ge.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Qe.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ge.event.addProp), ge.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ge.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, a = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                return r && (r === a || ge.contains(a, r)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ge.fn.extend({
        on: function(e, t, n, a) {
            return C(this, e, t, n, a)
        },
        one: function(e, t, n, a) {
            return C(this, e, t, n, a, 1)
        },
        off: function(e, t, n) {
            var a, r;
            if (e && e.preventDefault && e.handleObj) return a = e.handleObj, ge(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = x), this.each(function() {
                ge.event.remove(this, e, n, t)
            })
        }
    });
    var tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        nt = /<script|<style|<link/i,
        at = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rt = /^true\/(.*)/,
        ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ge.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var a, r, o, i, s = e.cloneNode(!0),
                l = ge.contains(e.ownerDocument, e);
            if (!(pe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e)))
                for (i = v(s), o = v(e), a = 0, r = o.length; a < r; a++) E(o[a], i[a]);
            if (t)
                if (n)
                    for (o = o || v(e), i = i || v(s), a = 0, r = o.length; a < r; a++) L(o[a], i[a]);
                else L(e, s);
            return i = v(s, "script"), i.length > 0 && y(i, !l && v(e, "script")), s
        },
        cleanData: function(e) {
            for (var t, n, a, r = ge.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (Ie(n)) {
                    if (t = n[He.expando]) {
                        if (t.events)
                            for (a in t.events) r[a] ? ge.event.remove(n, a) : ge.removeEvent(n, a, t.handle);
                        n[He.expando] = void 0
                    }
                    n[qe.expando] && (n[qe.expando] = void 0)
                }
        }
    }), ge.fn.extend({
        detach: function(e) {
            return N(this, e, !0)
        },
        remove: function(e) {
            return N(this, e)
        },
        text: function(e) {
            return Me(this, function(e) {
                return void 0 === e ? ge.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return j(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = T(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return j(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ge.cleanData(v(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ge.clone(this, e, t)
            })
        },
        html: function(e) {
            return Me(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    a = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !nt.test(e) && !Ge[(Ye.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ge.htmlPrefilter(e);
                    try {
                        for (; n < a; n++) t = this[n] || {}, 1 === t.nodeType && (ge.cleanData(v(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return j(this, arguments, function(t) {
                var n = this.parentNode;
                ge.inArray(this, e) < 0 && (ge.cleanData(v(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ge.fn[e] = function(e) {
            for (var n, a = [], r = ge(e), o = r.length - 1, i = 0; i <= o; i++) n = i === o ? this : this.clone(!0), ge(r[i])[t](n), ie.apply(a, n.get());
            return this.pushStack(a)
        }
    });
    var it = /^margin/,
        st = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
        lt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (s) {
                s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", Je.appendChild(i);
                var t = e.getComputedStyle(s);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, a = "4px" === t.width, s.style.marginRight = "50%", r = "4px" === t.marginRight, Je.removeChild(i), s = null
            }
        }
        var n, a, r, o, i = ne.createElement("div"),
            s = ne.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", pe.clearCloneStyle = "content-box" === s.style.backgroundClip, i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", i.appendChild(s), ge.extend(pe, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), a
            },
            pixelMarginRight: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var ft = /^(none|table(?!-c[ea]).+)/,
        ct = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ut = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        dt = ["Webkit", "Moz", "ms"],
        pt = ne.createElement("div").style;
    ge.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = D(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, i, s = ge.camelCase(t),
                    l = e.style;
                return t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s), i = ge.cssHooks[t] || ge.cssHooks[s], void 0 === n ? i && "get" in i && void 0 !== (r = i.get(e, !1, a)) ? r : l[t] : (o = typeof n, "string" === o && (r = Re.exec(n)) && r[1] && (n = h(e, t, r), o = "number"), null != n && n === n && ("number" === o && (n += r && r[3] || (ge.cssNumber[s] ? "" : "px")), pe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), i && "set" in i && void 0 === (n = i.set(e, n, a)) || (l[t] = n)), void 0)
            }
        },
        css: function(e, t, n, a) {
            var r, o, i, s = ge.camelCase(t);
            return t = ge.cssProps[s] || (ge.cssProps[s] = M(s) || s), i = ge.cssHooks[t] || ge.cssHooks[s], i && "get" in i && (r = i.get(e, !0, n)), void 0 === r && (r = D(e, t, a)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), n === !0 || isFinite(o) ? o || 0 : r) : r
        }
    }), ge.each(["height", "width"], function(e, t) {
        ge.cssHooks[t] = {
            get: function(e, n, a) {
                if (n) return !ft.test(ge.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, a) : Xe(e, ct, function() {
                    return q(e, t, a)
                })
            },
            set: function(e, n, a) {
                var r, o = a && lt(e),
                    i = a && H(e, t, a, "border-box" === ge.css(e, "boxSizing", !1, o), o);
                return i && (r = Re.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = ge.css(e, t)), I(e, n, i)
            }
        }
    }), ge.cssHooks.marginLeft = A(pe.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(D(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), ge.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ge.cssHooks[e + t] = {
            expand: function(n) {
                for (var a = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) r[e + Ue[a] + t] = o[a] || o[a - 2] || o[0];
                return r
            }
        }, it.test(e) || (ge.cssHooks[e + t].set = I)
    }), ge.fn.extend({
        css: function(e, t) {
            return Me(this, function(e, t, n) {
                var a, r, o = {},
                    i = 0;
                if (ge.isArray(t)) {
                    for (a = lt(e), r = t.length; i < r; i++) o[t[i]] = ge.css(e, t[i], !1, a);
                    return o
                }
                return void 0 !== n ? ge.style(e, t, n) : ge.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), ge.Tween = P, P.prototype = {
        constructor: P,
        init: function(e, t, n, a, r, o) {
            this.elem = e, this.prop = n, this.easing = r || ge.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = o || (ge.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = P.propHooks[this.prop];
            return e && e.get ? e.get(this) : P.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = P.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ge.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : P.propHooks._default.set(this), this
        }
    }, P.prototype.init.prototype = P.prototype, P.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ge.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                ge.fx.step[e.prop] ? ge.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ge.cssProps[e.prop]] && !ge.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ge.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, P.propHooks.scrollTop = P.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ge.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, ge.fx = P.prototype.init, ge.fx.step = {};
    var ht, gt, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;
    ge.Animation = ge.extend(z, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return h(n.elem, e, Re.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Ne);
                for (var n, a = 0, r = e.length; a < r; a++) n = e[a], z.tweeners[n] = z.tweeners[n] || [], z.tweeners[n].unshift(t)
            },
            prefilters: [B],
            prefilter: function(e, t) {
                t ? z.prefilters.unshift(e) : z.prefilters.push(e)
            }
        }), ge.speed = function(e, t, n) {
            var a = e && "object" == typeof e ? ge.extend({}, e) : {
                complete: n || !n && t || ge.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !ge.isFunction(t) && t
            };
            return ge.fx.off || ne.hidden ? a.duration = 0 : "number" != typeof a.duration && (a.duration in ge.fx.speeds ? a.duration = ge.fx.speeds[a.duration] : a.duration = ge.fx.speeds._default), null != a.queue && a.queue !== !0 || (a.queue = "fx"), a.old = a.complete, a.complete = function() {
                ge.isFunction(a.old) && a.old.call(this), a.queue && ge.dequeue(this, a.queue)
            }, a
        }, ge.fn.extend({
            fadeTo: function(e, t, n, a) {
                return this.filter(Be).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, a)
            },
            animate: function(e, t, n, a) {
                var r = ge.isEmptyObject(e),
                    o = ge.speed(t, n, a),
                    i = function() {
                        var t = z(this, ge.extend({}, e), o);
                        (r || He.get(this, "finish")) && t.stop(!0)
                    };
                return i.finish = i, r || o.queue === !1 ? this.each(i) : this.queue(o.queue, i)
            },
            stop: function(e, t, n) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        r = null != e && e + "queueHooks",
                        o = ge.timers,
                        i = He.get(this);
                    if (r) i[r] && i[r].stop && a(i[r]);
                    else
                        for (r in i) i[r] && i[r].stop && vt.test(r) && a(i[r]);
                    for (r = o.length; r--;) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), t = !1, o.splice(r, 1));
                    !t && n || ge.dequeue(this, e)
                })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"), this.each(function() {
                    var t, n = He.get(this),
                        a = n[e + "queue"],
                        r = n[e + "queueHooks"],
                        o = ge.timers,
                        i = a ? a.length : 0;
                    for (n.finish = !0, ge.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < i; t++) a[t] && a[t].finish && a[t].finish.call(this);
                    delete n.finish
                })
            }
        }), ge.each(["toggle", "show", "hide"], function(e, t) {
            var n = ge.fn[t];
            ge.fn[t] = function(e, a, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, a, r)
            }
        }), ge.each({
            slideDown: R("show"),
            slideUp: R("hide"),
            slideToggle: R("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            ge.fn[e] = function(e, n, a) {
                return this.animate(t, e, n, a)
            }
        }), ge.timers = [], ge.fx.tick = function() {
            var e, t = 0,
                n = ge.timers;
            for (ht = ge.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
            n.length || ge.fx.stop(), ht = void 0
        }, ge.fx.timer = function(e) {
            ge.timers.push(e), e() ? ge.fx.start() : ge.timers.pop()
        }, ge.fx.interval = 13, ge.fx.start = function() {
            gt || (gt = e.requestAnimationFrame ? e.requestAnimationFrame(O) : e.setInterval(ge.fx.tick, ge.fx.interval))
        }, ge.fx.stop = function() {
            e.cancelAnimationFrame ? e.cancelAnimationFrame(gt) : e.clearInterval(gt), gt = null
        }, ge.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ge.fn.delay = function(t, n) {
            return t = ge.fx ? ge.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, a) {
                var r = e.setTimeout(n, t);
                a.stop = function() {
                    e.clearTimeout(r)
                }
            })
        },
        function() {
            var e = ne.createElement("input"),
                t = ne.createElement("select"),
                n = t.appendChild(ne.createElement("option"));
            e.type = "checkbox", pe.checkOn = "" !== e.value, pe.optSelected = n.selected, e = ne.createElement("input"), e.value = "t", e.type = "radio", pe.radioValue = "t" === e.value
        }();
    var yt, bt = ge.expr.attrHandle;
    ge.fn.extend({
        attr: function(e, t) {
            return Me(this, ge.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ge.removeAttr(this, e)
            })
        }
    }), ge.extend({
        attr: function(e, t, n) {
            var a, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? ge.prop(e, t, n) : (1 === o && ge.isXMLDoc(e) || (r = ge.attrHooks[t.toLowerCase()] || (ge.expr.match.bool.test(t) ? yt : void 0)), void 0 !== n ? null === n ? void ge.removeAttr(e, t) : r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (a = r.get(e, t)) ? a : (a = ge.find.attr(e, t), null == a ? void 0 : a))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!pe.radioValue && "radio" === t && ge.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, a = 0,
                r = t && t.match(Ne);
            if (r && 1 === e.nodeType)
                for (; n = r[a++];) e.removeAttribute(n)
        }
    }), yt = {
        set: function(e, t, n) {
            return t === !1 ? ge.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ge.each(ge.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = bt[t] || ge.find.attr;
        bt[t] = function(e, t, a) {
            var r, o, i = t.toLowerCase();
            return a || (o = bt[i], bt[i] = r, r = null != n(e, t, a) ? i : null, bt[i] = o), r
        }
    });
    var wt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;
    ge.fn.extend({
        prop: function(e, t) {
            return Me(this, ge.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ge.propFix[e] || e]
            })
        }
    }), ge.extend({
        prop: function(e, t, n) {
            var a, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ge.isXMLDoc(e) || (t = ge.propFix[t] || t, r = ge.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (a = r.set(e, n, t)) ? a : e[t] = n : r && "get" in r && null !== (a = r.get(e, t)) ? a : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ge.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : wt.test(e.nodeName) || xt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), pe.optSelected || (ge.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ge.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ge.propFix[this.toLowerCase()] = this
    }), ge.fn.extend({
        addClass: function(e) {
            var t, n, a, r, o, i, s, l = 0;
            if (ge.isFunction(e)) return this.each(function(t) {
                ge(this).addClass(e.call(this, t, Y(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = Y(n), a = 1 === n.nodeType && " " + W(r) + " ") {
                        for (i = 0; o = t[i++];) a.indexOf(" " + o + " ") < 0 && (a += o + " ");
                        s = W(a), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, a, r, o, i, s, l = 0;
            if (ge.isFunction(e)) return this.each(function(t) {
                ge(this).removeClass(e.call(this, t, Y(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++];)
                    if (r = Y(n), a = 1 === n.nodeType && " " + W(r) + " ") {
                        for (i = 0; o = t[i++];)
                            for (; a.indexOf(" " + o + " ") > -1;) a = a.replace(" " + o + " ", " ");
                        s = W(a), r !== s && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ge.isFunction(e) ? this.each(function(n) {
                ge(this).toggleClass(e.call(this, n, Y(this), t), t)
            }) : this.each(function() {
                var t, a, r, o;
                if ("string" === n)
                    for (a = 0, r = ge(this), o = e.match(Ne) || []; t = o[a++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = Y(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : He.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, a = 0;
            for (t = " " + e + " "; n = this[a++];)
                if (1 === n.nodeType && (" " + W(Y(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var _t = /\r/g;
    ge.fn.extend({
        val: function(e) {
            var t, n, a, r = this[0]; {
                if (arguments.length) return a = ge.isFunction(e), this.each(function(n) {
                    var r;
                    1 === this.nodeType && (r = a ? e.call(this, n, ge(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : ge.isArray(r) && (r = ge.map(r, function(e) {
                        return null == e ? "" : e + ""
                    })), t = ge.valHooks[this.type] || ge.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                });
                if (r) return t = ge.valHooks[r.type] || ge.valHooks[r.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(_t, "") : null == n ? "" : n)
            }
        }
    }), ge.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ge.find.attr(e, "value");
                    return null != t ? t : W(ge.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, a, r = e.options,
                        o = e.selectedIndex,
                        i = "select-one" === e.type,
                        s = i ? null : [],
                        l = i ? o + 1 : r.length;
                    for (a = o < 0 ? l : i ? o : 0; a < l; a++)
                        if (n = r[a], (n.selected || a === o) && !n.disabled && (!n.parentNode.disabled || !ge.nodeName(n.parentNode, "optgroup"))) {
                            if (t = ge(n).val(), i) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, a, r = e.options, o = ge.makeArray(t), i = r.length; i--;) a = r[i], (a.selected = ge.inArray(ge.valHooks.option.get(a), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ge.each(["radio", "checkbox"], function() {
        ge.valHooks[this] = {
            set: function(e, t) {
                if (ge.isArray(t)) return e.checked = ge.inArray(ge(e).val(), t) > -1
            }
        }, pe.checkOn || (ge.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Ct = /^(?:focusinfocus|focusoutblur)$/;
    ge.extend(ge.event, {
        trigger: function(t, n, a, r) {
            var o, i, s, l, f, c, u, d = [a || ne],
                p = ce.call(t, "type") ? t.type : t,
                h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (i = s = a = a || ne, 3 !== a.nodeType && 8 !== a.nodeType && !Ct.test(p + ge.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), f = p.indexOf(":") < 0 && "on" + p, t = t[ge.expando] ? t : new ge.Event(p, "object" == typeof t && t), t.isTrigger = r ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : ge.makeArray(n, [t]), u = ge.event.special[p] || {}, r || !u.trigger || u.trigger.apply(a, n) !== !1)) {
                if (!r && !u.noBubble && !ge.isWindow(a)) {
                    for (l = u.delegateType || p, Ct.test(l + p) || (i = i.parentNode); i; i = i.parentNode) d.push(i), s = i;
                    s === (a.ownerDocument || ne) && d.push(s.defaultView || s.parentWindow || e)
                }
                for (o = 0;
                    (i = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : u.bindType || p, c = (He.get(i, "events") || {})[t.type] && He.get(i, "handle"), c && c.apply(i, n), c = f && i[f], c && c.apply && Ie(i) && (t.result = c.apply(i, n), t.result === !1 && t.preventDefault());
                return t.type = p, r || t.isDefaultPrevented() || u._default && u._default.apply(d.pop(), n) !== !1 || !Ie(a) || f && ge.isFunction(a[p]) && !ge.isWindow(a) && (s = a[f], s && (a[f] = null), ge.event.triggered = p, a[p](), ge.event.triggered = void 0, s && (a[f] = s)), t.result
            }
        },
        simulate: function(e, t, n) {
            var a = ge.extend(new ge.Event, n, {
                type: e,
                isSimulated: !0
            });
            ge.event.trigger(a, null, t)
        }
    }), ge.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ge.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ge.event.trigger(e, t, n, !0)
        }
    }), ge.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        ge.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ge.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), pe.focusin = "onfocusin" in e, pe.focusin || ge.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ge.event.simulate(t, e.target, ge.event.fix(e))
        };
        ge.event.special[t] = {
            setup: function() {
                var a = this.ownerDocument || this,
                    r = He.access(a, t);
                r || a.addEventListener(e, n, !0), He.access(a, t, (r || 0) + 1)
            },
            teardown: function() {
                var a = this.ownerDocument || this,
                    r = He.access(a, t) - 1;
                r ? He.access(a, t, r) : (a.removeEventListener(e, n, !0), He.remove(a, t))
            }
        }
    });
    var Tt = e.location,
        kt = ge.now(),
        $t = /\?/;
    ge.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ge.error("Invalid XML: " + t), n
    };
    var St = /\[\]$/,
        Lt = /\r?\n/g,
        Et = /^(?:submit|button|image|reset|file)$/i,
        jt = /^(?:input|select|textarea|keygen)/i;
    ge.param = function(e, t) {
        var n, a = [],
            r = function(e, t) {
                var n = ge.isFunction(t) ? t() : t;
                a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (ge.isArray(e) || e.jquery && !ge.isPlainObject(e)) ge.each(e, function() {
            r(this.name, this.value)
        });
        else
            for (n in e) Z(n, e[n], t, r);
        return a.join("&")
    }, ge.fn.extend({
        serialize: function() {
            return ge.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ge.prop(this, "elements");
                return e ? ge.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ge(this).is(":disabled") && jt.test(this.nodeName) && !Et.test(e) && (this.checked || !We.test(e))
            }).map(function(e, t) {
                var n = ge(this).val();
                return null == n ? null : ge.isArray(n) ? ge.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        Dt = /#.*$/,
        At = /([?&])_=[^&]*/,
        Mt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ht = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Pt = {},
        Ot = {},
        Ft = "*/".concat("*"),
        Rt = ne.createElement("a");
    Rt.href = Tt.href, ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: It.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ft,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": ge.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? J(J(e, ge.ajaxSettings), t) : J(ge.ajaxSettings, e)
        },
        ajaxPrefilter: G(Pt),
        ajaxTransport: G(Ot),
        ajax: function(t, n) {
            function a(t, n, a, s) {
                var f, d, p, w, x, _ = n;
                c || (c = !0, l && e.clearTimeout(l), r = void 0, i = s || "", C.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (w = Q(h, C, a)), w = K(h, w, C, f), f ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (ge.lastModified[o] = x), x = C.getResponseHeader("etag"), x && (ge.etag[o] = x)), 204 === t || "HEAD" === h.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = w.state, d = w.data, p = w.error, f = !p)) : (p = _, !t && _ || (_ = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (n || _) + "", f ? v.resolveWith(g, [d, _, C]) : v.rejectWith(g, [C, _, p]), C.statusCode(b), b = void 0, u && m.trigger(f ? "ajaxSuccess" : "ajaxError", [C, h, f ? d : p]), y.fireWith(g, [C, _]), u && (m.trigger("ajaxComplete", [C, h]), --ge.active || ge.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, i, s, l, f, c, u, d, p, h = ge.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? ge(g) : ge.event,
                v = ge.Deferred(),
                y = ge.Callbacks("once memory"),
                b = h.statusCode || {},
                w = {},
                x = {},
                _ = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (c) {
                            if (!s)
                                for (s = {}; t = Mt.exec(i);) s[t[1].toLowerCase()] = t[2];
                            t = s[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return c ? i : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == c && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (c) C.always(e[C.status]);
                            else
                                for (t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || _;
                        return r && r.abort(t), a(0, t), this
                    }
                };
            if (v.promise(C), h.url = ((t || h.url || Tt.href) + "").replace(qt, Tt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Ne) || [""], null == h.crossDomain) {
                f = ne.createElement("a");
                try {
                    f.href = h.url, f.href = f.href, h.crossDomain = Rt.protocol + "//" + Rt.host != f.protocol + "//" + f.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = ge.param(h.data, h.traditional)), V(Pt, h, n, C), c) return C;
            u = ge.event && h.global, u && 0 === ge.active++ && ge.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ht.test(h.type), o = h.url.replace(Dt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Nt, "+")) : (p = h.url.slice(o.length), h.data && (o += ($t.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(At, "$1"), p = ($t.test(o) ? "&" : "?") + "_=" + kt++ + p), h.url = o + p), h.ifModified && (ge.lastModified[o] && C.setRequestHeader("If-Modified-Since", ge.lastModified[o]), ge.etag[o] && C.setRequestHeader("If-None-Match", ge.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) C.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
            if (_ = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), r = V(Ot, h, n, C)) {
                if (C.readyState = 1, u && m.trigger("ajaxSend", [C, h]), c) return C;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    C.abort("timeout")
                }, h.timeout));
                try {
                    c = !1, r.send(w, a)
                } catch (e) {
                    if (c) throw e;
                    a(-1, e)
                }
            } else a(-1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return ge.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ge.get(e, void 0, t, "script")
        }
    }), ge.each(["get", "post"], function(e, t) {
        ge[t] = function(e, n, a, r) {
            return ge.isFunction(n) && (r = r || a, a = n, n = void 0), ge.ajax(ge.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: a
            }, ge.isPlainObject(e) && e))
        }
    }), ge._evalUrl = function(e) {
        return ge.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, ge.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ge.isFunction(e) && (e = e.call(this[0])), t = ge(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ge.isFunction(e) ? this.each(function(t) {
                ge(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ge(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ge.isFunction(e);
            return this.each(function(n) {
                ge(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ge(this).replaceWith(this.childNodes)
            }), this
        }
    }), ge.expr.pseudos.hidden = function(e) {
        return !ge.expr.pseudos.visible(e)
    }, ge.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ge.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Ut = {
            0: 200,
            1223: 204
        },
        Bt = ge.ajaxSettings.xhr();
    pe.cors = !!Bt && "withCredentials" in Bt, pe.ajax = Bt = !!Bt, ge.ajaxTransport(function(t) {
        var n, a;
        if (pe.cors || Bt && !t.crossDomain) return {
            send: function(r, o) {
                var i, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (i in t.xhrFields) s[i] = t.xhrFields[i];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (i in r) s.setRequestHeader(i, r[i]);
                n = function(e) {
                    return function() {
                        n && (n = a = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        } : {
                            text: s.responseText
                        }, s.getAllResponseHeaders()))
                    }
                }, s.onload = n(), a = s.onerror = n("error"), void 0 !== s.onabort ? s.onabort = a : s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && a()
                    })
                }, n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), ge.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), ge.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ge.globalEval(e), e
            }
        }
    }), ge.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), ge.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(a, r) {
                    t = ge("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
                    }), ne.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Xt = [],
        zt = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || ge.expando + "_" + kt++;
            return this[e] = !0, e
        }
    }), ge.ajaxPrefilter("json jsonp", function(t, n, a) {
        var r, o, i, s = t.jsonp !== !1 && (zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && zt.test(t.data) && "data");
        if (s || "jsonp" === t.dataTypes[0]) return r = t.jsonpCallback = ge.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(zt, "$1" + r) : t.jsonp !== !1 && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
            return i || ge.error(r + " was not called"), i[0]
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            i = arguments
        }, a.always(function() {
            void 0 === o ? ge(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, Xt.push(r)), i && ge.isFunction(o) && o(i[0]), i = o = void 0
        }), "script"
    }), pe.createHTMLDocument = function() {
        var e = ne.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ge.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var a, r, o;
        return t || (pe.createHTMLDocument ? (t = ne.implementation.createHTMLDocument(""), a = t.createElement("base"), a.href = ne.location.href, t.head.appendChild(a)) : t = ne), r = Te.exec(e), o = !n && [], r ? [t.createElement(r[1])] : (r = b([e], t, o), o && o.length && ge(o).remove(), ge.merge([], r.childNodes))
    }, ge.fn.load = function(e, t, n) {
        var a, r, o, i = this,
            s = e.indexOf(" ");
        return s > -1 && (a = W(e.slice(s)), e = e.slice(0, s)), ge.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), i.length > 0 && ge.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, i.html(a ? ge("<div>").append(ge.parseHTML(e)).find(a) : e)
        }).always(n && function(e, t) {
            i.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, ge.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        ge.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), ge.expr.pseudos.animated = function(e) {
        return ge.grep(ge.timers, function(t) {
            return e === t.elem
        }).length
    }, ge.offset = {
        setOffset: function(e, t, n) {
            var a, r, o, i, s, l, f, c = ge.css(e, "position"),
                u = ge(e),
                d = {};
            "static" === c && (e.style.position = "relative"), s = u.offset(), o = ge.css(e, "top"), l = ge.css(e, "left"), f = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, f ? (a = u.position(), i = a.top, r = a.left) : (i = parseFloat(o) || 0, r = parseFloat(l) || 0), ge.isFunction(t) && (t = t.call(e, n, ge.extend({}, s))), null != t.top && (d.top = t.top - s.top + i), null != t.left && (d.left = t.left - s.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
        }
    }, ge.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ge.offset.setOffset(this, e, t)
            });
            var t, n, a, r, o = this[0];
            if (o) return o.getClientRects().length ? (a = o.getBoundingClientRect(), a.width || a.height ? (r = o.ownerDocument, n = ee(r), t = r.documentElement, {
                top: a.top + n.pageYOffset - t.clientTop,
                left: a.left + n.pageXOffset - t.clientLeft
            }) : a) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    a = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ge.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ge.nodeName(e[0], "html") || (a = e.offset()), a = {
                    top: a.top + ge.css(e[0], "borderTopWidth", !0),
                    left: a.left + ge.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - a.top - ge.css(n, "marginTop", !0),
                    left: t.left - a.left - ge.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ge.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }), ge.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ge.fn[e] = function(a) {
            return Me(this, function(e, a, r) {
                var o = ee(e);
                return void 0 === r ? o ? o[t] : e[a] : void(o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[a] = r)
            }, e, a, arguments.length)
        }
    }), ge.each(["top", "left"], function(e, t) {
        ge.cssHooks[t] = A(pe.pixelPosition, function(e, n) {
            if (n) return n = D(e, t), st.test(n) ? ge(e).position()[t] + "px" : n
        })
    }), ge.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ge.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, a) {
            ge.fn[a] = function(r, o) {
                var i = arguments.length && (n || "boolean" != typeof r),
                    s = n || (r === !0 || o === !0 ? "margin" : "border");
                return Me(this, function(t, n, r) {
                    var o;
                    return ge.isWindow(t) ? 0 === a.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? ge.css(t, n, s) : ge.style(t, n, r, s)
                }, t, i ? r : void 0, i)
            }
        })
    }), ge.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, a) {
            return this.on(t, e, n, a)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ge.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ge
    });
    var Wt = e.jQuery,
        Yt = e.$;
    return ge.noConflict = function(t) {
        return e.$ === ge && (e.$ = Yt), t && e.jQuery === ge && (e.jQuery = Wt), ge
    }, t || (e.jQuery = e.$ = ge), ge
}), window.Modernizr = function(e, t, n) {
        function a(e) {
            h.cssText = e
        }

        function r(e, t) {
            return a(v.join(e + ";") + (t || ""))
        }

        function o(e, t) {
            return typeof e === t
        }

        function i(e, t) {
            return !!~("" + e).indexOf(t)
        }

        function s(e, t, a) {
            for (var r in e) {
                var i = t[e[r]];
                if (i !== n) return a === !1 ? e[r] : o(i, "function") ? i.bind(a || t) : i
            }
            return !1
        }
        var l = "2.8.3",
            f = {},
            c = !0,
            u = t.documentElement,
            d = "modernizr",
            p = t.createElement(d),
            h = p.style,
            g, m = {}.toString,
            v = " -webkit- -moz- -o- -ms- ".split(" "),
            y = {},
            b = {},
            w = {},
            x = [],
            _ = x.slice,
            C, T = function(e, n, a, r) {
                var o, i, s, l, f = t.createElement("div"),
                    c = t.body,
                    p = c || t.createElement("body");
                if (parseInt(a, 10))
                    for (; a--;) s = t.createElement("div"), s.id = r ? r[a] : d + (a + 1), f.appendChild(s);
                return o = ["&#173;", '<style id="s', d, '">', e, "</style>"].join(""), f.id = d, (c ? f : p).innerHTML += o, p.appendChild(f), c || (p.style.background = "", p.style.overflow = "hidden", l = u.style.overflow, u.style.overflow = "hidden", u.appendChild(p)), i = n(f, e), c ? f.parentNode.removeChild(f) : (p.parentNode.removeChild(p), u.style.overflow = l), !!i
            },
            k = {}.hasOwnProperty,
            S;
        S = o(k, "undefined") || o(k.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return k.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function e(t) {
            var n = this;
            if ("function" != typeof n) throw new TypeError;
            var a = _.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var e = function() {};
                        e.prototype = n.prototype;
                        var o = new e,
                            i = n.apply(o, a.concat(_.call(arguments)));
                        return Object(i) === i ? i : o
                    }
                    return n.apply(t, a.concat(_.call(arguments)))
                };
            return r
        }), y.touch = function() {
            var n;
            return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : T(["@media (", v.join("touch-enabled),("), d, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
                n = 9 === e.offsetTop
            }), n
        };
        for (var L in y) S(y, L) && (C = L.toLowerCase(), f[C] = y[L](), x.push((f[C] ? "" : "no-") + C));
        return f.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var a in e) S(e, a) && f.addTest(a, e[a]);
            else {
                if (e = e.toLowerCase(), f[e] !== n) return f;
                t = "function" == typeof t ? t() : t, "undefined" != typeof c && c && (u.className += " " + (t ? "" : "no-") + e), f[e] = t
            }
            return f
        }, a(""), p = g = null, f._version = l, f._prefixes = v, f.testStyles = T, u.className = u.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (c ? " js " + x.join(" ") : ""), f
    }(this, this.document),
    function(e, t, n) {
        function a(e) {
            return "[object Function]" == h.call(e)
        }

        function r(e) {
            return "string" == typeof e
        }

        function o() {}

        function i(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function s() {
            var e = g.shift();
            m = 1, e ? e.t ? d(function() {
                ("c" == e.t ? L.injectCss : L.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), s()) : m = 0
        }

        function l(e, n, a, r, o, l, f) {
            function c(t) {
                if (!h && i(u.readyState) && (w.r = h = 1, !m && s(), u.onload = u.onreadystatechange = null, t)) {
                    "img" != e && d(function() {
                        b.removeChild(u)
                    }, 50);
                    for (var a in T[n]) T[n].hasOwnProperty(a) && T[n][a].onload()
                }
            }
            var f = f || L.errorTimeout,
                u = t.createElement(e),
                h = 0,
                v = 0,
                w = {
                    t: a,
                    s: n,
                    e: o,
                    a: l,
                    x: f
                };
            1 === T[n] && (v = 1, T[n] = []), "object" == e ? u.data = n : (u.src = n, u.type = e), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function() {
                c.call(this, v)
            }, g.splice(r, 0, w), "img" != e && (v || 2 === T[n] ? (b.insertBefore(u, y ? null : p), d(c, f)) : T[n].push(u))
        }

        function f(e, t, n, a, o) {
            return m = 0, t = t || "j", r(e) ? l("c" == t ? x : w, e, t, this.i++, n, a, o) : (g.splice(this.i++, 0, e), 1 == g.length && s()), this
        }

        function c() {
            var e = L;
            return e.loader = {
                load: f,
                i: 0
            }, e
        }
        var u = t.documentElement,
            d = e.setTimeout,
            p = t.getElementsByTagName("script")[0],
            h = {}.toString,
            g = [],
            m = 0,
            v = "MozAppearance" in u.style,
            y = v && !!t.createRange().compareNode,
            b = y ? u : p.parentNode,
            u = e.opera && "[object Opera]" == h.call(e.opera),
            u = !!t.attachEvent && !u,
            w = v ? "object" : u ? "script" : "img",
            x = u ? "script" : w,
            _ = Array.isArray || function(e) {
                return "[object Array]" == h.call(e)
            },
            C = [],
            T = {},
            k = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            },
            S, L;
        L = function(e) {
            function t(e) {
                var e = e.split("!"),
                    t = C.length,
                    n = e.pop(),
                    a = e.length,
                    n = {
                        url: n,
                        origUrl: n,
                        prefixes: e
                    },
                    r, o, i;
                for (o = 0; o < a; o++) i = e[o].split("="), (r = k[i.shift()]) && (n = r(n, i));
                for (o = 0; o < t; o++) n = C[o](n);
                return n
            }

            function i(e, r, o, i, s) {
                var l = t(e),
                    f = l.autoCallback;
                l.url.split(".").pop().split("?").shift(), l.bypass || (r && (r = a(r) ? r : r[e] || r[i] || r[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, r, o, i, s) : (T[l.url] ? l.noexec = !0 : T[l.url] = 1, o.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (a(r) || a(f)) && o.load(function() {
                    c(), r && r(l.origUrl, s, i), f && f(l.origUrl, s, i), T[l.url] = 2
                })))
            }

            function s(e, t) {
                function n(e, n) {
                    if (e) {
                        if (r(e)) n || (f = function() {
                            var e = [].slice.call(arguments);
                            c.apply(this, e), u()
                        }), i(e, f, t, 0, s);
                        else if (Object(e) === e)
                            for (p in d = function() {
                                    var t = 0,
                                        n;
                                    for (n in e) e.hasOwnProperty(n) && t++;
                                    return t
                                }(), e) e.hasOwnProperty(p) && (!n && !--d && (a(f) ? f = function() {
                                var e = [].slice.call(arguments);
                                c.apply(this, e), u()
                            } : f[p] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), u()
                                }
                            }(c[p])), i(e[p], f, t, p, s))
                    } else !n && u()
                }
                var s = !!e.test,
                    l = e.load || e.both,
                    f = e.callback || o,
                    c = f,
                    u = e.complete || o,
                    d, p;
                n(s ? e.yep : e.nope, !!l), l && n(l)
            }
            var l, f, u = this.yepnope.loader;
            if (r(e)) i(e, 0, u, 0);
            else if (_(e))
                for (l = 0; l < e.length; l++) f = e[l], r(f) ? i(f, 0, u, 0) : _(f) ? L(f) : Object(f) === f && s(f, u);
            else Object(e) === e && s(e, u)
        }, L.addPrefix = function(e, t) {
            k[e] = t
        }, L.addFilter = function(e) {
            C.push(e)
        }, L.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", S = function() {
            t.removeEventListener("DOMContentLoaded", S, 0), t.readyState = "complete"
        }, 0)), e.yepnope = c(), e.yepnope.executeStack = s, e.yepnope.injectJs = function(e, n, a, r, l, f) {
            var c = t.createElement("script"),
                u, h, r = r || L.errorTimeout;
            c.src = e;
            for (h in a) c.setAttribute(h, a[h]);
            n = f ? s : n || o, c.onreadystatechange = c.onload = function() {
                !u && i(c.readyState) && (u = 1, n(), c.onload = c.onreadystatechange = null)
            }, d(function() {
                u || (u = 1, n(1))
            }, r), l ? c.onload() : p.parentNode.insertBefore(c, p)
        }, e.yepnope.injectCss = function(e, n, a, r, i, l) {
            var r = t.createElement("link"),
                f, n = l ? s : n || o;
            r.href = e, r.rel = "stylesheet", r.type = "text/css";
            for (f in a) r.setAttribute(f, a[f]);
            i || (p.parentNode.insertBefore(r, p), d(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };
var lazyloadTimeout, windowWidth = windowSize().width,
    windowHeight = windowSize().height,
    isChrome = navigator.userAgent.indexOf("Chrome") > -1,
    isIE = navigator.userAgent.indexOf("MSIE") > -1,
    isFirefox = navigator.userAgent.indexOf("Firefox") > -1,
    isSafari = navigator.userAgent.indexOf("Safari") > -1,
    isOpera = navigator.userAgent.indexOf("Presto") > -1,
    isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),
    isIOS = !1;
isChrome && isSafari && (isSafari = !1), isMobile && isSafari && (isIOS = !0);
var lazyloadItemTimeout = setTimeout(function() {}, 0);
$(function() {
    isSafari && $("html").addClass("is_safari"), isChrome && $("html").addClass("is_chrome"), isIOS && $("html").addClass("is_ios"), console.log("yolo 0"), $(window).scroll(function() {
        clearTimeout(lazyloadItemTimeout), lazyloadItemTimeout = setTimeout(function() {
            $(".view .item.show .lazyload-item").each(function() {
                console.log("yolo 1"), objectTop = $(this).offset().top, empty(objectTop) || (console.log("yolo 2"), scrollTop = $(window).scrollTop(), edge = scrollTop + windowHeight, objectTop != scrollTop && objectTop < 2 * edge && (console.log("yolo 3"), "undefined" == typeof size && (size = 500), empty($(this).data("image-slug-alt")) ? (slug = $(this).parent().parent().data("slug"), url = "/assets/img/" + type + "/" + slug + "-" + size + "px.jpg") : url = $(this).data("image-slug-alt"), console.log("image url", url), console.log("yolo 4"), $(this).css("background-image", "url('" + url + "')"), $(this).parent().find(".blur").css("background-image", "url('" + url + "')"), $(this).removeClass("lazyload-item"), $(this).parent().addClass("lazyloaded")))
            })
        }, 250)
    }), $("body").on("click", ".grid .item .click", function(e) {
        return $(this).hasClass("do-not-open-on-click") ? (e.preventDefault(), void e.stopPropagation()) : (url = $(this).closest(".item").data("url"), void(empty(url) || ("undefined" == typeof openItemAsNewTab ? window.location.href = url : openItemAsNewTab ? window.open(url, "_blank") : window.location.href = url, e.stopPropagation(), e.preventDefault())))
    }), $("body").on("mousemove", ".item .container", function(e) {
        parentOffset = $(this).parent().offset(), x = e.pageX - parentOffset.left, y = e.pageY - parentOffset.top, w = $(this).width(), h = $(this).height(), propX = x / w, propY = y / h, $(this).find(".blur").css("transform", "perspective(500px) translateZ(-50px) rotateX(" + 15 * (propY - .5) + "deg) rotateY(" + 15 * (.5 - propX) + "deg)")
    }), $(".action-toggle-mobile-nav").bind("click", function() {
        $(".top-bar").toggleClass("mobile-nav-extended")
    }), $(window).resize(function() {
        var e = windowSize().width,
            t = windowSize().height
    }), $(".prevent-default").bind("click", function(e) {
        e.preventDefault()
    }), $(".action-expand-nav").bind("click", function() {
        $("body").toggleClass("nav-opened"), $("body").hasClass("filter-opened") && $("body").hasClass("nav-opened") && $("body").removeClass("filter-opened")
    }), insideTwitterButton = !1, $(".twitter-follow-floating-container").bind("mouseenter", function() {
        insideTwitterButton || (insideTwitterButton = !0)
    }), $(".twitter-follow-floating-container").bind("mouseleave", function() {
        insideTwitterButton = !1
    }), $(window).blur(function() {
        insideTwitterButton && (setCookie("twitter_followed", "true", 99999), setTimeout(function() {
            $(".twitter-follow-floating-container").hide()
        }, 1e3))
    }), $(window).scroll(function() {
        empty(lazyloadTimeout) || clearTimeout(lazyloadTimeout), lazyloadTimeout = setTimeout(function() {
            $(".lazyload").each(function() {
                edge = $(this).offset().top - 1.5 * windowSize().height, $(window).scrollTop() > edge && (empty($(this).data("bg-small")) ? $(this).css("background-image", "url('" + $(this).data("bg") + "')") : $(window).width() > 800 ? $(this).css("background-image", "url('" + $(this).data("bg") + "')") : $(this).css("background-image", "url('" + $(this).data("bg-small") + "')"), $(this).removeClass("lazyload"), $(this).addClass("lazy-loaded"))
            })
        }, 300)
    }), $(".top-links").bind("change", function() {
        window.location.href = $(".top-links").find(":selected").data("href")
    }), $(".insert form.mailchimp .button").bind("click", function() {
        $(this).parent().submit()
    }), $(".backdrop").bind("click", function(e) {
        if ($(this).hasClass("not-clickable")) {
            return;
            e.stopPropagation(), e.preventDefault()
        }
    }), $(".tooltip").each(function() {
        empty($(this).attr("title")) || ($(this).data("tooltip", $(this).attr("title")), $(this).attr("title", ""), $(this).removeClass("tooltip"), $(this).addClass("tooltip-set"))
    }), $("body").append('<div class="tooltip-ui"></div>'), $("body").on("mouseenter", ".tooltip-set", function() {
        $(".tooltip-ui").text($(this).data("tooltip")), $(".tooltip-ui").css({
            top: $(this).offset().top + $(this).height()
        }), $(".tooltip-ui").css({
            left: $(this).offset().left + $(this).width() / 2 - $(".tooltip-ui").width() / 2
        }), $(".tooltip-ui").show()
    }), $("body").on("mouseleave", ".tooltip-set", function() {
        $(".tooltip-ui").hide()
    }), $(window).scroll(function() {
        $(window).scrollTop() > 50 && ($("html").hasClass("map-view") || ($(".top-bar .brand h2").hide(), $(".top-bar .brand h1").hide()), $(".top-bar .button").hide(), $(".top-bar .action-toggle-mobile-nav").hide()), $(window).scrollTop() < 100 && ($("html").hasClass("map-view") || ($(".top-bar .brand h2").css("display", "inline-block"), $(".top-bar .brand h1").css("display", "inline-block")), $(".top-bar .button").css("display", "inline-block"), $(".top-bar .action-toggle-mobile-nav").show())
    })
}), jQuery.fn.outerHTML = function() {
    return jQuery("<div />").append(this.eq(0).clone()).html()
};
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
! function($) {
    "use strict";

    function e(e, t) {
        var n = (65535 & e) + (65535 & t),
            a = (e >> 16) + (t >> 16) + (n >> 16);
        return a << 16 | 65535 & n
    }

    function t(e, t) {
        return e << t | e >>> 32 - t
    }

    function n(n, a, r, o, i, s) {
        return e(t(e(e(a, n), e(o, s)), i), r)
    }

    function a(e, t, a, r, o, i, s) {
        return n(t & a | ~t & r, e, t, o, i, s)
    }

    function r(e, t, a, r, o, i, s) {
        return n(t & r | a & ~r, e, t, o, i, s)
    }

    function o(e, t, a, r, o, i, s) {
        return n(t ^ a ^ r, e, t, o, i, s)
    }

    function i(e, t, a, r, o, i, s) {
        return n(a ^ (t | ~r), e, t, o, i, s)
    }

    function s(t, n) {
        t[n >> 5] |= 128 << n % 32, t[(n + 64 >>> 9 << 4) + 14] = n;
        var s, l, f, c, u, d = 1732584193,
            p = -271733879,
            h = -1732584194,
            g = 271733878;
        for (s = 0; s < t.length; s += 16) l = d, f = p, c = h, u = g, d = a(d, p, h, g, t[s], 7, -680876936), g = a(g, d, p, h, t[s + 1], 12, -389564586), h = a(h, g, d, p, t[s + 2], 17, 606105819), p = a(p, h, g, d, t[s + 3], 22, -1044525330), d = a(d, p, h, g, t[s + 4], 7, -176418897), g = a(g, d, p, h, t[s + 5], 12, 1200080426), h = a(h, g, d, p, t[s + 6], 17, -1473231341), p = a(p, h, g, d, t[s + 7], 22, -45705983), d = a(d, p, h, g, t[s + 8], 7, 1770035416), g = a(g, d, p, h, t[s + 9], 12, -1958414417), h = a(h, g, d, p, t[s + 10], 17, -42063), p = a(p, h, g, d, t[s + 11], 22, -1990404162), d = a(d, p, h, g, t[s + 12], 7, 1804603682), g = a(g, d, p, h, t[s + 13], 12, -40341101), h = a(h, g, d, p, t[s + 14], 17, -1502002290), p = a(p, h, g, d, t[s + 15], 22, 1236535329), d = r(d, p, h, g, t[s + 1], 5, -165796510), g = r(g, d, p, h, t[s + 6], 9, -1069501632), h = r(h, g, d, p, t[s + 11], 14, 643717713), p = r(p, h, g, d, t[s], 20, -373897302), d = r(d, p, h, g, t[s + 5], 5, -701558691), g = r(g, d, p, h, t[s + 10], 9, 38016083), h = r(h, g, d, p, t[s + 15], 14, -660478335), p = r(p, h, g, d, t[s + 4], 20, -405537848), d = r(d, p, h, g, t[s + 9], 5, 568446438), g = r(g, d, p, h, t[s + 14], 9, -1019803690), h = r(h, g, d, p, t[s + 3], 14, -187363961), p = r(p, h, g, d, t[s + 8], 20, 1163531501), d = r(d, p, h, g, t[s + 13], 5, -1444681467), g = r(g, d, p, h, t[s + 2], 9, -51403784), h = r(h, g, d, p, t[s + 7], 14, 1735328473), p = r(p, h, g, d, t[s + 12], 20, -1926607734), d = o(d, p, h, g, t[s + 5], 4, -378558), g = o(g, d, p, h, t[s + 8], 11, -2022574463), h = o(h, g, d, p, t[s + 11], 16, 1839030562), p = o(p, h, g, d, t[s + 14], 23, -35309556), d = o(d, p, h, g, t[s + 1], 4, -1530992060), g = o(g, d, p, h, t[s + 4], 11, 1272893353), h = o(h, g, d, p, t[s + 7], 16, -155497632), p = o(p, h, g, d, t[s + 10], 23, -1094730640), d = o(d, p, h, g, t[s + 13], 4, 681279174), g = o(g, d, p, h, t[s], 11, -358537222), h = o(h, g, d, p, t[s + 3], 16, -722521979), p = o(p, h, g, d, t[s + 6], 23, 76029189), d = o(d, p, h, g, t[s + 9], 4, -640364487), g = o(g, d, p, h, t[s + 12], 11, -421815835), h = o(h, g, d, p, t[s + 15], 16, 530742520), p = o(p, h, g, d, t[s + 2], 23, -995338651), d = i(d, p, h, g, t[s], 6, -198630844), g = i(g, d, p, h, t[s + 7], 10, 1126891415), h = i(h, g, d, p, t[s + 14], 15, -1416354905), p = i(p, h, g, d, t[s + 5], 21, -57434055), d = i(d, p, h, g, t[s + 12], 6, 1700485571), g = i(g, d, p, h, t[s + 3], 10, -1894986606), h = i(h, g, d, p, t[s + 10], 15, -1051523), p = i(p, h, g, d, t[s + 1], 21, -2054922799), d = i(d, p, h, g, t[s + 8], 6, 1873313359), g = i(g, d, p, h, t[s + 15], 10, -30611744), h = i(h, g, d, p, t[s + 6], 15, -1560198380), p = i(p, h, g, d, t[s + 13], 21, 1309151649), d = i(d, p, h, g, t[s + 4], 6, -145523070), g = i(g, d, p, h, t[s + 11], 10, -1120210379), h = i(h, g, d, p, t[s + 2], 15, 718787259), p = i(p, h, g, d, t[s + 9], 21, -343485551), d = e(d, l), p = e(p, f), h = e(h, c), g = e(g, u);
        return [d, p, h, g]
    }

    function l(e) {
        var t, n = "",
            a = 32 * e.length;
        for (t = 0; t < a; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }

    function f(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
        var a = 8 * e.length;
        for (t = 0; t < a; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }

    function c(e) {
        return l(s(f(e), 8 * e.length))
    }

    function u(e, t) {
        var n, a = f(e),
            r = [],
            o = [],
            i;
        for (r[15] = o[15] = void 0, a.length > 16 && (a = s(a, 8 * e.length)), n = 0; n < 16; n += 1) r[n] = 909522486 ^ a[n], o[n] = 1549556828 ^ a[n];
        return i = s(r.concat(f(t)), 512 + 8 * t.length), l(s(o.concat(i), 640))
    }

    function d(e) {
        var t = "0123456789abcdef",
            n = "",
            a, r;
        for (r = 0; r < e.length; r += 1) a = e.charCodeAt(r), n += t.charAt(a >>> 4 & 15) + t.charAt(15 & a);
        return n
    }

    function p(e) {
        return unescape(encodeURIComponent(e))
    }

    function h(e) {
        return c(p(e))
    }

    function g(e) {
        return d(h(e))
    }

    function m(e, t) {
        return u(p(e), p(t))
    }

    function v(e, t) {
        return d(m(e, t))
    }

    function y(e, t, n) {
        return t ? n ? m(t, e) : v(t, e) : n ? h(e) : g(e)
    }
    "function" == typeof define && define.amd ? define(function() {
        return y
    }) : "object" == typeof module && module.exports ? module.exports = y : $.md5 = y
}(this),
function() {
    var e = this,
        t = e.EmojiConvertor,
        n = function() {
            var e = this;
            return e.img_set = "apple", e.img_sets = {
                apple: {
                    path: "/assets/emoji-data/img-apple-64/",
                    mask: 1
                }
            }, e.use_css_imgs = !1, e.colons_mode = !1, e.text_mode = !1, e.include_title = !1, e.include_text = !1, e.allow_native = !0, e.use_sheet = !1, e.avoid_ms_emoji = !0, e.allow_caps = !1, e.img_suffix = "", e.inits = {}, e.map = {}, e.init_env(), e
        };
    n.prototype.noConflict = function() {
        return e.EmojiConvertor = t, n
    }, n.prototype.replace_emoticons = function(e) {
        var t = this,
            n = t.replace_emoticons_with_colons(e);
        return t.replace_colons(n)
    }, n.prototype.replace_emoticons_with_colons = function(e) {
        var t = this;
        t.init_emoticons();
        var n = 0,
            a = [],
            r = e.replace(t.rx_emoticons, function(r, o, i, s) {
                var l = n;
                n = s + r.length;
                var f = i.indexOf("(") !== -1,
                    c = i.indexOf(")") !== -1;
                if ((f || c) && a.indexOf(i) == -1 && a.push(i), c && !f) {
                    var u = e.substring(l, s);
                    if (u.indexOf("(") !== -1 && u.indexOf(")") === -1) return r
                }
                if ("\n8)" === r) {
                    var d = e.substring(0, s);
                    if (/\n?(6\)|7\))/.test(d)) return r
                }
                var p = t.data[t.map.emoticons[i]][3][0];
                return p ? o + ":" + p + ":" : r
            });
        if (a.length) {
            var o = a.map(t.escape_rx),
                i = new RegExp("(\\(.+)(" + o.join("|") + ")(.+\\))", "g");
            r = r.replace(i, function(e, n, a, r) {
                var o = t.data[t.map.emoticons[a]][3][0];
                return o ? n + ":" + o + ":" + r : e
            })
        }
        return r
    }, n.prototype.replace_colons = function(e) {
        var t = this;
        return t.init_colons(), e.replace(t.rx_colons, function(e) {
            var n = e.substr(1, e.length - 2);
            if (t.allow_caps && (n = n.toLowerCase()), n.indexOf("::skin-tone-") > -1) {
                var a = n.substr(-1, 1),
                    r = "skin-tone-" + a,
                    o = t.map.colons[r];
                n = n.substr(0, n.length - 13);
                var i = t.map.colons[n];
                return i ? t.replacement(i, n, ":", {
                    idx: o,
                    actual: r,
                    wrapper: ":"
                }) : ":" + n + ":" + t.replacement(o, r, ":")
            }
            var i = t.map.colons[n];
            return i ? t.replacement(i, n, ":") : e
        })
    }, n.prototype.replace_unified = function(e) {
        var t = this;
        return t.init_unified(), e.replace(t.rx_unified, function(e, n, a) {
            var r = t.map.unified[n];
            if (!r) return e;
            var o = null;
            return "🏻" == a && (o = "1f3fb"), "🏼" == a && (o = "1f3fc"), "🏽" == a && (o = "1f3fd"), "🏾" == a && (o = "1f3fe"), "🏿" == a && (o = "1f3ff"), o ? t.replacement(r, null, null, {
                idx: o,
                actual: a,
                wrapper: ""
            }) : t.replacement(r)
        })
    }, n.prototype.addAliases = function(e) {
        var t = this;
        t.init_colons();
        for (var n in e) t.map.colons[n] = e[n]
    }, n.prototype.removeAliases = function(e) {
        for (var t = this, n = 0; n < e.length; n++) {
            var a = e[n];
            delete t.map.colons[a];
            e: for (var r in t.data)
                for (var o = 0; o < t.data[r][3].length; o++)
                    if (a == t.data[r][3][o]) {
                        t.map.colons[a] = r;
                        break e
                    }
        }
    }, n.prototype.replacement = function(e, t, n, a) {
        var r = this,
            o = e,
            i = "",
            s = 0;
        "object" == typeof a && (i = r.replacement(a.idx, a.actual, a.wrapper), s = e + "-" + a.idx);
        var l = r.img_set;
        if (r.use_sheet && r.supports_css || r.data[e][6] & r.img_sets[r.img_set].mask || (l = "apple"), n = n || "", r.colons_mode) return ":" + r.data[e][3][0] + ":" + i;
        var f = t ? n + t + n : r.data[e][8] || n + r.data[e][3][0] + n;
        if (r.text_mode) return f + i;
        if (r.init_env(), "unified" == r.replace_mode && r.allow_native && r.data[e][0][0]) return r.data[e][0][0] + i;
        if ("softbank" == r.replace_mode && r.allow_native && r.data[e][1]) return r.data[e][1] + i;
        if ("google" == r.replace_mode && r.allow_native && r.data[e][2]) return r.data[e][2] + i;
        var c = r.data[e][7] || r.img_sets[l].path + e + ".png" + r.img_suffix,
            u = r.include_title ? ' title="' + (t || r.data[e][3][0]) + '"' : "",
            d = r.include_text ? n + (t || r.data[e][3][0]) + n : "",
            p = r.data[e][4],
            h = r.data[e][5];
        if (s && r.variations_data[s] && r.variations_data[s][2] && !r.data[e][7] && r.variations_data[s][2] & r.img_sets[r.img_set].mask && (c = r.img_sets[r.img_set].path + s + ".png", p = r.variations_data[s][0], h = r.variations_data[s][1], i = "", o = s, r.include_text && a && a.actual && a.wrapper && (d += a.wrapper + a.actual + a.wrapper)), r.supports_css) {
            if (r.use_sheet && null != p && null != h) {
                var g = 100 / (r.sheet_size - 1),
                    m = "background: url(" + r.img_sets[l].sheet + ");background-position:" + g * p + "% " + g * h + "%;background-size:" + r.sheet_size + "00%";
                return '<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="' + m + '"' + u + ' data-codepoints="' + o + '">' + d + "</span></span>" + i
            }
            return r.use_css_imgs ? '<span class="emoji emoji-' + e + '"' + u + ' data-codepoints="' + o + '">' + d + "</span>" + i : '<span class="emoji emoji-sizer" style="background-image:url(' + c + ')"' + u + ' data-codepoints="' + o + '">' + d + "</span>" + i
        }
        return '<img src="' + c + '" class="emoji" data-codepoints="' + o + '" ' + u + "/>" + i
    }, n.prototype.init_emoticons = function() {
        var e = this;
        if (!e.inits.emoticons) {
            e.init_colons(), e.inits.emoticons = 1;
            var t = [];
            e.map.emoticons = {};
            for (var n in e.emoticons_data) {
                var a = n.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
                e.map.colons[e.emoticons_data[n]] && (e.map.emoticons[a] = e.map.colons[e.emoticons_data[n]], t.push(e.escape_rx(a)))
            }
            e.rx_emoticons = new RegExp("(^|\\s)(" + t.join("|") + ")(?=$|[\\s|\\?\\.,!])", "g")
        }
    }, n.prototype.init_colons = function() {
        var e = this;
        if (!e.inits.colons) {
            e.inits.colons = 1, e.rx_colons = new RegExp(":[a-zA-Z0-9-_+]+:(:skin-tone-[2-6]:)?", "g"), e.map.colons = {};
            for (var t in e.data)
                for (var n = 0; n < e.data[t][3].length; n++) e.map.colons[e.data[t][3][n]] = t
        }
    }, n.prototype.init_unified = function() {
        var e = this;
        if (!e.inits.unified) {
            e.inits.unified = 1;
            var t = [];
            e.map.unified = {};
            for (var n in e.data)
                for (var a = 0; a < e.data[n][0].length; a++) t.push(e.data[n][0][a].replace("*", "\\*")), e.map.unified[e.data[n][0][a]] = n;
            t = t.sort(function(e, t) {
                return t.length - e.length
            }), e.rx_unified = new RegExp("(" + t.join("|") + ")(�[�-�])?", "g")
        }
    }, n.prototype.init_env = function() {
        var e = this;
        if (!e.inits.env) {
            if (e.inits.env = 1, e.replace_mode = "img", e.supports_css = !1, "undefined" != typeof navigator) {
                var t = navigator.userAgent;
                if (window.getComputedStyle) try {
                    var n = window.getComputedStyle(document.body);
                    (n["background-size"] || n.backgroundSize) && (e.supports_css = !0)
                } catch (n) {
                    t.match(/Firefox/i) && (e.supports_css = !0)
                }
                if (t.match(/(iPhone|iPod|iPad|iPhone\s+Simulator)/i)) {
                    if (t.match(/OS\s+[12345]/i)) return void(e.replace_mode = "softbank");
                    if (t.match(/OS\s+[6789]/i)) return void(e.replace_mode = "unified")
                }
                if (t.match(/Mac OS X 10[._ ](?:[789]|1\d)/i)) return void(e.replace_mode = "unified");
                if (!e.avoid_ms_emoji && (t.match(/Windows NT 6.[1-9]/i) || t.match(/Windows NT 10.[0-9]/i)) && !t.match(/Chrome/i) && !t.match(/MSIE 8/i)) return void(e.replace_mode = "unified")
            }
            return void(e.supports_css && (e.replace_mode = "css"))
        }
    }, n.prototype.escape_rx = function(e) {
        return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }, n.prototype.sheet_size = 41, n.prototype.data = {
        "00a9": [
            ["©️", "©"], "", "󾬩", ["copyright"], 0, 0, 11, 0
        ],
        "00ae": [
            ["®️", "®"], "", "󾬭", ["registered"], 0, 1, 11, 0
        ],
        "203c": [
            ["‼️", "‼"], "", "󾬆", ["bangbang"], 0, 2, 15, 0
        ],
        2049: [
            ["⁉️", "⁉"], "", "󾬅", ["interrobang"], 0, 3, 15, 0
        ],
        2122: [
            ["™️", "™"], "", "󾬪", ["tm"], 0, 4, 11, 0
        ],
        2139: [
            ["ℹ️", "ℹ"], "", "󾭇", ["information_source"], 0, 5, 15, 0
        ],
        2194: [
            ["↔️", "↔"], "", "󾫶", ["left_right_arrow"], 0, 6, 15, 0
        ],
        2195: [
            ["↕️", "↕"], "", "󾫷", ["arrow_up_down"], 0, 7, 15, 0
        ],
        2196: [
            ["↖️", "↖"], "", "󾫲", ["arrow_upper_left"], 0, 8, 15, 0
        ],
        2197: [
            ["↗️", "↗"], "", "󾫰", ["arrow_upper_right"], 0, 9, 15, 0
        ],
        2198: [
            ["↘️", "↘"], "", "󾫱", ["arrow_lower_right"], 0, 10, 15, 0
        ],
        2199: [
            ["↙️", "↙"], "", "󾫳", ["arrow_lower_left"], 0, 11, 15, 0
        ],
        "21a9": [
            ["↩️", "↩"], "", "󾮃", ["leftwards_arrow_with_hook"], 0, 12, 15, 0
        ],
        "21aa": [
            ["↪️", "↪"], "", "󾮈", ["arrow_right_hook"], 0, 13, 15, 0
        ],
        "231a": [
            ["⌚️", "⌚"], "", "󾀝", ["watch"], 0, 14, 15, 0
        ],
        "231b": [
            ["⌛️", "⌛"], "", "󾀜", ["hourglass"], 0, 15, 15, 0
        ],
        2328: [
            ["⌨️", "⌨"], "", "", ["keyboard"], 0, 16, 15, 0
        ],
        "23cf": [
            ["⏏"], "", "", ["eject"], 0, 17, 2, 0
        ],
        "23e9": [
            ["⏩"], "", "󾫾", ["fast_forward"], 0, 18, 15, 0
        ],
        "23ea": [
            ["⏪"], "", "󾫿", ["rewind"], 0, 19, 15, 0
        ],
        "23eb": [
            ["⏫"], "", "󾬃", ["arrow_double_up"], 0, 20, 15, 0
        ],
        "23ec": [
            ["⏬"], "", "󾬂", ["arrow_double_down"], 0, 21, 15, 0
        ],
        "23ed": [
            ["⏭"], "", "", ["black_right_pointing_double_triangle_with_vertical_bar"], 0, 22, 15, 0
        ],
        "23ee": [
            ["⏮"], "", "", ["black_left_pointing_double_triangle_with_vertical_bar"], 0, 23, 15, 0
        ],
        "23ef": [
            ["⏯"], "", "", ["black_right_pointing_triangle_with_double_vertical_bar"], 0, 24, 15, 0
        ],
        "23f0": [
            ["⏰"], "", "󾀪", ["alarm_clock"], 0, 25, 15, 0
        ],
        "23f1": [
            ["⏱"], "", "", ["stopwatch"], 0, 26, 15, 0
        ],
        "23f2": [
            ["⏲"], "", "", ["timer_clock"], 0, 27, 15, 0
        ],
        "23f3": [
            ["⏳"], "", "󾀛", ["hourglass_flowing_sand"], 0, 28, 15, 0
        ],
        "23f8": [
            ["⏸"], "", "", ["double_vertical_bar"], 0, 29, 15, 0
        ],
        "23f9": [
            ["⏹"], "", "", ["black_square_for_stop"], 0, 30, 15, 0
        ],
        "23fa": [
            ["⏺"], "", "", ["black_circle_for_record"], 0, 31, 15, 0
        ],
        "24c2": [
            ["Ⓜ️", "Ⓜ"], "", "󾟡", ["m"], 0, 32, 15, 0
        ],
        "25aa": [
            ["▪️", "▪"], "", "󾭮", ["black_small_square"], 0, 33, 15, 0
        ],
        "25ab": [
            ["▫️", "▫"], "", "󾭭", ["white_small_square"], 0, 34, 15, 0
        ],
        "25b6": [
            ["▶️", "▶"], "", "󾫼", ["arrow_forward"], 0, 35, 15, 0
        ],
        "25c0": [
            ["◀️", "◀"], "", "󾫽", ["arrow_backward"], 0, 36, 15, 0
        ],
        "25fb": [
            ["◻️", "◻"], "", "󾭱", ["white_medium_square"], 0, 37, 15, 0
        ],
        "25fc": [
            ["◼️", "◼"], "", "󾭲", ["black_medium_square"], 0, 38, 15, 0
        ],
        "25fd": [
            ["◽️", "◽"], "", "󾭯", ["white_medium_small_square"], 0, 39, 15, 0
        ],
        "25fe": [
            ["◾️", "◾"], "", "󾭰", ["black_medium_small_square"], 0, 40, 15, 0
        ],
        2600: [
            ["☀️", "☀"], "", "󾀀", ["sunny"], 1, 0, 15, 0
        ],
        2601: [
            ["☁️", "☁"], "", "󾀁", ["cloud"], 1, 1, 15, 0
        ],
        2602: [
            ["☂️", "☂"], "", "", ["umbrella"], 1, 2, 15, 0
        ],
        2603: [
            ["☃️", "☃"], "", "", ["snowman"], 1, 3, 15, 0
        ],
        2604: [
            ["☄️", "☄"], "", "", ["comet"], 1, 4, 15, 0
        ],
        "260e": [
            ["☎️", "☎"], "", "󾔣", ["phone", "telephone"], 1, 5, 15, 0
        ],
        2611: [
            ["☑️", "☑"], "", "󾮋", ["ballot_box_with_check"], 1, 6, 15, 0
        ],
        2614: [
            ["☔️", "☔"], "", "󾀂", ["umbrella_with_rain_drops"], 1, 7, 15, 0
        ],
        2615: [
            ["☕️", "☕"], "", "󾦁", ["coffee"], 1, 8, 15, 0
        ],
        2618: [
            ["☘"], "", "", ["shamrock"], 1, 9, 15, 0
        ],
        "261d": [
            ["☝️", "☝"], "", "󾮘", ["point_up"], 1, 10, 15, 0
        ],
        2620: [
            ["☠️", "☠"], "", "", ["skull_and_crossbones"], 1, 16, 15, 0
        ],
        2622: [
            ["☢️", "☢"], "", "", ["radioactive_sign"], 1, 17, 15, 0
        ],
        2623: [
            ["☣️", "☣"], "", "", ["biohazard_sign"], 1, 18, 15, 0
        ],
        2626: [
            ["☦️", "☦"], "", "", ["orthodox_cross"], 1, 19, 15, 0
        ],
        "262a": [
            ["☪️", "☪"], "", "", ["star_and_crescent"], 1, 20, 15, 0
        ],
        "262e": [
            ["☮️", "☮"], "", "", ["peace_symbol"], 1, 21, 15, 0
        ],
        "262f": [
            ["☯️", "☯"], "", "", ["yin_yang"], 1, 22, 15, 0
        ],
        2638: [
            ["☸️", "☸"], "", "", ["wheel_of_dharma"], 1, 23, 15, 0
        ],
        2639: [
            ["☹️", "☹"], "", "", ["white_frowning_face"], 1, 24, 15, 0
        ],
        "263a": [
            ["☺️", "☺"], "", "󾌶", ["relaxed"], 1, 25, 15, 0
        ],
        2648: [
            ["♈️", "♈"], "", "󾀫", ["aries"], 1, 26, 15, 0
        ],
        2649: [
            ["♉️", "♉"], "", "󾀬", ["taurus"], 1, 27, 15, 0
        ],
        "264a": [
            ["♊️", "♊"], "", "󾀭", ["gemini"], 1, 28, 15, 0
        ],
        "264b": [
            ["♋️", "♋"], "", "󾀮", ["cancer"], 1, 29, 15, 0
        ],
        "264c": [
            ["♌️", "♌"], "", "󾀯", ["leo"], 1, 30, 15, 0
        ],
        "264d": [
            ["♍️", "♍"], "", "󾀰", ["virgo"], 1, 31, 15, 0
        ],
        "264e": [
            ["♎️", "♎"], "", "󾀱", ["libra"], 1, 32, 15, 0
        ],
        "264f": [
            ["♏️", "♏"], "", "󾀲", ["scorpius"], 1, 33, 15, 0
        ],
        2650: [
            ["♐️", "♐"], "", "󾀳", ["sagittarius"], 1, 34, 15, 0
        ],
        2651: [
            ["♑️", "♑"], "", "󾀴", ["capricorn"], 1, 35, 15, 0
        ],
        2652: [
            ["♒️", "♒"], "", "󾀵", ["aquarius"], 1, 36, 15, 0
        ],
        2653: [
            ["♓️", "♓"], "", "󾀶", ["pisces"], 1, 37, 15, 0
        ],
        2660: [
            ["♠️", "♠"], "", "󾬛", ["spades"], 1, 38, 15, 0
        ],
        2663: [
            ["♣️", "♣"], "", "󾬝", ["clubs"], 1, 39, 15, 0
        ],
        2665: [
            ["♥️", "♥"], "", "󾬚", ["hearts"], 1, 40, 15, 0
        ],
        2666: [
            ["♦️", "♦"], "", "󾬜", ["diamonds"], 2, 0, 15, 0
        ],
        2668: [
            ["♨️", "♨"], "", "󾟺", ["hotsprings"], 2, 1, 15, 0
        ],
        "267b": [
            ["♻️", "♻"], "", "󾬬", ["recycle"], 2, 2, 15, 0
        ],
        "267f": [
            ["♿️", "♿"], "", "󾬠", ["wheelchair"], 2, 3, 15, 0
        ],
        2692: [
            ["⚒"], "", "", ["hammer_and_pick"], 2, 4, 15, 0
        ],
        2693: [
            ["⚓️", "⚓"], "", "󾓁", ["anchor"], 2, 5, 15, 0
        ],
        2694: [
            ["⚔"], "", "", ["crossed_swords"], 2, 6, 15, 0
        ],
        2696: [
            ["⚖"], "", "", ["scales"], 2, 7, 15, 0
        ],
        2697: [
            ["⚗"], "", "", ["alembic"], 2, 8, 15, 0
        ],
        2699: [
            ["⚙"], "", "", ["gear"], 2, 9, 15, 0
        ],
        "269b": [
            ["⚛"], "", "", ["atom_symbol"], 2, 10, 15, 0
        ],
        "269c": [
            ["⚜"], "", "", ["fleur_de_lis"], 2, 11, 15, 0
        ],
        "26a0": [
            ["⚠️", "⚠"], "", "󾬣", ["warning"], 2, 12, 15, 0
        ],
        "26a1": [
            ["⚡️", "⚡"], "", "󾀄", ["zap"], 2, 13, 15, 0
        ],
        "26aa": [
            ["⚪️", "⚪"], "", "󾭥", ["white_circle"], 2, 14, 15, 0
        ],
        "26ab": [
            ["⚫️", "⚫"], "", "󾭦", ["black_circle"], 2, 15, 15, 0
        ],
        "26b0": [
            ["⚰"], "", "", ["coffin"], 2, 16, 15, 0
        ],
        "26b1": [
            ["⚱"], "", "", ["funeral_urn"], 2, 17, 15, 0
        ],
        "26bd": [
            ["⚽️", "⚽"], "", "󾟔", ["soccer"], 2, 18, 15, 0
        ],
        "26be": [
            ["⚾️", "⚾"], "", "󾟑", ["baseball"], 2, 19, 15, 0
        ],
        "26c4": [
            ["⛄️", "⛄"], "", "󾀃", ["snowman_without_snow"], 2, 20, 15, 0
        ],
        "26c5": [
            ["⛅️", "⛅"], "", "󾀏", ["partly_sunny"], 2, 21, 15, 0
        ],
        "26c8": [
            ["⛈"], "", "", ["thunder_cloud_and_rain"], 2, 22, 15, 0
        ],
        "26ce": [
            ["⛎"], "", "󾀷", ["ophiuchus"], 2, 23, 15, 0
        ],
        "26cf": [
            ["⛏"], "", "", ["pick"], 2, 24, 15, 0
        ],
        "26d1": [
            ["⛑"], "", "", ["helmet_with_white_cross"], 2, 25, 15, 0
        ],
        "26d3": [
            ["⛓"], "", "", ["chains"], 2, 26, 15, 0
        ],
        "26d4": [
            ["⛔️", "⛔"], "", "󾬦", ["no_entry"], 2, 27, 15, 0
        ],
        "26e9": [
            ["⛩"], "", "", ["shinto_shrine"], 2, 28, 15, 0
        ],
        "26ea": [
            ["⛪️", "⛪"], "", "󾒻", ["church"], 2, 29, 15, 0
        ],
        "26f0": [
            ["⛰"], "", "", ["mountain"], 2, 30, 15, 0
        ],
        "26f1": [
            ["⛱"], "", "", ["umbrella_on_ground"], 2, 31, 15, 0
        ],
        "26f2": [
            ["⛲️", "⛲"], "", "󾒼", ["fountain"], 2, 32, 15, 0
        ],
        "26f3": [
            ["⛳️", "⛳"], "", "󾟒", ["golf"], 2, 33, 15, 0
        ],
        "26f4": [
            ["⛴"], "", "", ["ferry"], 2, 34, 15, 0
        ],
        "26f5": [
            ["⛵️", "⛵"], "", "󾟪", ["boat", "sailboat"], 2, 35, 15, 0
        ],
        "26f7": [
            ["⛷"], "", "", ["skier"], 2, 36, 15, 0
        ],
        "26f8": [
            ["⛸"], "", "", ["ice_skate"], 2, 37, 15, 0
        ],
        "26f9": [
            ["⛹"], "", "", ["person_with_ball"], 2, 38, 15, 0
        ],
        "26fa": [
            ["⛺️", "⛺"], "", "󾟻", ["tent"], 3, 3, 15, 0
        ],
        "26fd": [
            ["⛽️", "⛽"], "", "󾟵", ["fuelpump"], 3, 4, 15, 0
        ],
        2702: [
            ["✂️", "✂"], "", "󾔾", ["scissors"], 3, 5, 15, 0
        ],
        2705: [
            ["✅"], "", "󾭊", ["white_check_mark"], 3, 6, 15, 0
        ],
        2708: [
            ["✈️", "✈"], "", "󾟩", ["airplane"], 3, 7, 15, 0
        ],
        2709: [
            ["✉️", "✉"], "", "󾔩", ["email", "envelope"], 3, 8, 15, 0
        ],
        "270a": [
            ["✊"], "", "󾮓", ["fist"], 3, 9, 15, 0
        ],
        "270b": [
            ["✋"], "", "󾮕", ["hand", "raised_hand"], 3, 15, 15, 0
        ],
        "270c": [
            ["✌️", "✌"], "", "󾮔", ["v"], 3, 21, 15, 0
        ],
        "270d": [
            ["✍️", "✍"], "", "", ["writing_hand"], 3, 27, 15, 0
        ],
        "270f": [
            ["✏️", "✏"], "", "󾔹", ["pencil2"], 3, 33, 15, 0
        ],
        2712: [
            ["✒️", "✒"], "", "󾔶", ["black_nib"], 3, 34, 15, 0
        ],
        2714: [
            ["✔️", "✔"], "", "󾭉", ["heavy_check_mark"], 3, 35, 15, 0
        ],
        2716: [
            ["✖️", "✖"], "", "󾭓", ["heavy_multiplication_x"], 3, 36, 15, 0
        ],
        "271d": [
            ["✝️", "✝"], "", "", ["latin_cross"], 3, 37, 15, 0
        ],
        2721: [
            ["✡️", "✡"], "", "", ["star_of_david"], 3, 38, 15, 0
        ],
        2728: [
            ["✨"], "", "󾭠", ["sparkles"], 3, 39, 15, 0
        ],
        2733: [
            ["✳️", "✳"], "", "󾭢", ["eight_spoked_asterisk"], 3, 40, 15, 0
        ],
        2734: [
            ["✴️", "✴"], "", "󾭡", ["eight_pointed_black_star"], 4, 0, 15, 0
        ],
        2744: [
            ["❄️", "❄"], "", "󾀎", ["snowflake"], 4, 1, 15, 0
        ],
        2747: [
            ["❇️", "❇"], "", "󾭷", ["sparkle"], 4, 2, 15, 0
        ],
        "274c": [
            ["❌"], "", "󾭅", ["x"], 4, 3, 15, 0
        ],
        "274e": [
            ["❎"], "", "󾭆", ["negative_squared_cross_mark"], 4, 4, 15, 0
        ],
        2753: [
            ["❓"], "", "󾬉", ["question"], 4, 5, 15, 0
        ],
        2754: [
            ["❔"], "", "󾬊", ["grey_question"], 4, 6, 15, 0
        ],
        2755: [
            ["❕"], "", "󾬋", ["grey_exclamation"], 4, 7, 15, 0
        ],
        2757: [
            ["❗️", "❗"], "", "󾬄", ["exclamation", "heavy_exclamation_mark"], 4, 8, 15, 0
        ],
        2763: [
            ["❣️", "❣"], "", "", ["heavy_heart_exclamation_mark_ornament"], 4, 9, 15, 0
        ],
        2764: [
            ["❤️", "❤"], "", "󾬌", ["heart"], 4, 10, 15, 0, "<3"
        ],
        2795: [
            ["➕"], "", "󾭑", ["heavy_plus_sign"], 4, 11, 15, 0
        ],
        2796: [
            ["➖"], "", "󾭒", ["heavy_minus_sign"], 4, 12, 15, 0
        ],
        2797: [
            ["➗"], "", "󾭔", ["heavy_division_sign"], 4, 13, 15, 0
        ],
        "27a1": [
            ["➡️", "➡"], "", "󾫺", ["arrow_right"], 4, 14, 15, 0
        ],
        "27b0": [
            ["➰"], "", "󾬈", ["curly_loop"], 4, 15, 15, 0
        ],
        "27bf": [
            ["➿"], "", "󾠫", ["loop"], 4, 16, 15, 0
        ],
        2934: [
            ["⤴️", "⤴"], "", "󾫴", ["arrow_heading_up"], 4, 17, 15, 0
        ],
        2935: [
            ["⤵️", "⤵"], "", "󾫵", ["arrow_heading_down"], 4, 18, 15, 0
        ],
        "2b05": [
            ["⬅️", "⬅"], "", "󾫻", ["arrow_left"], 4, 19, 15, 0
        ],
        "2b06": [
            ["⬆️", "⬆"], "", "󾫸", ["arrow_up"], 4, 20, 15, 0
        ],
        "2b07": [
            ["⬇️", "⬇"], "", "󾫹", ["arrow_down"], 4, 21, 15, 0
        ],
        "2b1b": [
            ["⬛️", "⬛"], "", "󾭬", ["black_large_square"], 4, 22, 15, 0
        ],
        "2b1c": [
            ["⬜️", "⬜"], "", "󾭫", ["white_large_square"], 4, 23, 15, 0
        ],
        "2b50": [
            ["⭐️", "⭐"], "", "󾭨", ["star"], 4, 24, 15, 0
        ],
        "2b55": [
            ["⭕️", "⭕"], "", "󾭄", ["o"], 4, 25, 15, 0
        ],
        3030: [
            ["〰️", "〰"], "", "󾬇", ["wavy_dash"], 4, 26, 15, 0
        ],
        "303d": [
            ["〽️", "〽"], "", "󾠛", ["part_alternation_mark"], 4, 27, 15, 0
        ],
        3297: [
            ["㊗️", "㊗"], "", "󾭃", ["congratulations"], 4, 28, 15, 0
        ],
        3299: [
            ["㊙️", "㊙"], "", "󾬫", ["secret"], 4, 29, 15, 0
        ],
        "1f004": [
            ["🀄️", "🀄"], "", "󾠋", ["mahjong"], 4, 30, 15, 0
        ],
        "1f0cf": [
            ["🃏"], "", "󾠒", ["black_joker"], 4, 31, 15, 0
        ],
        "1f170": [
            ["🅰️", "🅰"], "", "󾔋", ["a"], 4, 32, 15, 0
        ],
        "1f171": [
            ["🅱️", "🅱"], "", "󾔌", ["b"], 4, 33, 15, 0
        ],
        "1f17e": [
            ["🅾️", "🅾"], "", "󾔎", ["o2"], 4, 34, 15, 0
        ],
        "1f17f": [
            ["🅿️", "🅿"], "", "󾟶", ["parking"], 4, 35, 15, 0
        ],
        "1f18e": [
            ["🆎"], "", "󾔍", ["ab"], 4, 36, 15, 0
        ],
        "1f191": [
            ["🆑"], "", "󾮄", ["cl"], 4, 37, 15, 0
        ],
        "1f192": [
            ["🆒"], "", "󾬸", ["cool"], 4, 38, 15, 0
        ],
        "1f193": [
            ["🆓"], "", "󾬡", ["free"], 4, 39, 15, 0
        ],
        "1f194": [
            ["🆔"], "", "󾮁", ["id"], 4, 40, 15, 0
        ],
        "1f195": [
            ["🆕"], "", "󾬶", ["new"], 5, 0, 15, 0
        ],
        "1f196": [
            ["🆖"], "", "󾬨", ["ng"], 5, 1, 15, 0
        ],
        "1f197": [
            ["🆗"], "", "󾬧", ["ok"], 5, 2, 15, 0
        ],
        "1f198": [
            ["🆘"], "", "󾭏", ["sos"], 5, 3, 15, 0
        ],
        "1f199": [
            ["🆙"], "", "󾬷", ["up"], 5, 4, 15, 0
        ],
        "1f19a": [
            ["🆚"], "", "󾬲", ["vs"], 5, 5, 15, 0
        ],
        "1f201": [
            ["🈁"], "", "󾬤", ["koko"], 5, 6, 15, 0
        ],
        "1f202": [
            ["🈂️", "🈂"], "", "󾬿", ["sa"], 5, 7, 15, 0
        ],
        "1f21a": [
            ["🈚️", "🈚"], "", "󾬺", ["u7121"], 5, 8, 15, 0
        ],
        "1f22f": [
            ["🈯️", "🈯"], "", "󾭀", ["u6307"], 5, 9, 15, 0
        ],
        "1f232": [
            ["🈲"], "", "󾬮", ["u7981"], 5, 10, 15, 0
        ],
        "1f233": [
            ["🈳"], "", "󾬯", ["u7a7a"], 5, 11, 15, 0
        ],
        "1f234": [
            ["🈴"], "", "󾬰", ["u5408"], 5, 12, 15, 0
        ],
        "1f235": [
            ["🈵"], "", "󾬱", ["u6e80"], 5, 13, 15, 0
        ],
        "1f236": [
            ["🈶"], "", "󾬹", ["u6709"], 5, 14, 15, 0
        ],
        "1f237": [
            ["🈷️", "🈷"], "", "󾬻", ["u6708"], 5, 15, 15, 0
        ],
        "1f238": [
            ["🈸"], "", "󾬼", ["u7533"], 5, 16, 15, 0
        ],
        "1f239": [
            ["🈹"], "", "󾬾", ["u5272"], 5, 17, 15, 0
        ],
        "1f23a": [
            ["🈺"], "", "󾭁", ["u55b6"], 5, 18, 15, 0
        ],
        "1f250": [
            ["🉐"], "", "󾬽", ["ideograph_advantage"], 5, 19, 15, 0
        ],
        "1f251": [
            ["🉑"], "", "󾭐", ["accept"], 5, 20, 15, 0
        ],
        "1f300": [
            ["🌀"], "", "󾀅", ["cyclone"], 5, 21, 15, 0
        ],
        "1f301": [
            ["🌁"], "", "󾀆", ["foggy"], 5, 22, 15, 0
        ],
        "1f302": [
            ["🌂"], "", "󾀇", ["closed_umbrella"], 5, 23, 15, 0
        ],
        "1f303": [
            ["🌃"], "", "󾀈", ["night_with_stars"], 5, 24, 15, 0
        ],
        "1f304": [
            ["🌄"], "", "󾀉", ["sunrise_over_mountains"], 5, 25, 15, 0
        ],
        "1f305": [
            ["🌅"], "", "󾀊", ["sunrise"], 5, 26, 15, 0
        ],
        "1f306": [
            ["🌆"], "", "󾀋", ["city_sunset"], 5, 27, 15, 0
        ],
        "1f307": [
            ["🌇"], "", "󾀌", ["city_sunrise"], 5, 28, 15, 0
        ],
        "1f308": [
            ["🌈"], "", "󾀍", ["rainbow"], 5, 29, 15, 0
        ],
        "1f309": [
            ["🌉"], "", "󾀐", ["bridge_at_night"], 5, 30, 15, 0
        ],
        "1f30a": [
            ["🌊"], "", "󾀸", ["ocean"], 5, 31, 15, 0
        ],
        "1f30b": [
            ["🌋"], "", "󾀺", ["volcano"], 5, 32, 15, 0
        ],
        "1f30c": [
            ["🌌"], "", "󾀻", ["milky_way"], 5, 33, 15, 0
        ],
        "1f30d": [
            ["🌍"], "", "", ["earth_africa"], 5, 34, 15, 0
        ],
        "1f30e": [
            ["🌎"], "", "", ["earth_americas"], 5, 35, 15, 0
        ],
        "1f30f": [
            ["🌏"], "", "󾀹", ["earth_asia"], 5, 36, 15, 0
        ],
        "1f310": [
            ["🌐"], "", "", ["globe_with_meridians"], 5, 37, 15, 0
        ],
        "1f311": [
            ["🌑"], "", "󾀑", ["new_moon"], 5, 38, 15, 0
        ],
        "1f312": [
            ["🌒"], "", "", ["waxing_crescent_moon"], 5, 39, 15, 0
        ],
        "1f313": [
            ["🌓"], "", "󾀓", ["first_quarter_moon"], 5, 40, 15, 0
        ],
        "1f314": [
            ["🌔"], "", "󾀒", ["moon", "waxing_gibbous_moon"], 6, 0, 15, 0
        ],
        "1f315": [
            ["🌕"], "", "󾀕", ["full_moon"], 6, 1, 15, 0
        ],
        "1f316": [
            ["🌖"], "", "", ["waning_gibbous_moon"], 6, 2, 15, 0
        ],
        "1f317": [
            ["🌗"], "", "", ["last_quarter_moon"], 6, 3, 15, 0
        ],
        "1f318": [
            ["🌘"], "", "", ["waning_crescent_moon"], 6, 4, 15, 0
        ],
        "1f319": [
            ["🌙"], "", "󾀔", ["crescent_moon"], 6, 5, 15, 0
        ],
        "1f31a": [
            ["🌚"], "", "", ["new_moon_with_face"], 6, 6, 15, 0
        ],
        "1f31b": [
            ["🌛"], "", "󾀖", ["first_quarter_moon_with_face"], 6, 7, 15, 0
        ],
        "1f31c": [
            ["🌜"], "", "", ["last_quarter_moon_with_face"], 6, 8, 15, 0
        ],
        "1f31d": [
            ["🌝"], "", "", ["full_moon_with_face"], 6, 9, 15, 0
        ],
        "1f31e": [
            ["🌞"], "", "", ["sun_with_face"], 6, 10, 15, 0
        ],
        "1f31f": [
            ["🌟"], "", "󾭩", ["star2"], 6, 11, 15, 0
        ],
        "1f320": [
            ["🌠"], "", "󾭪", ["stars"], 6, 12, 15, 0
        ],
        "1f321": [
            ["🌡"], "", "", ["thermometer"], 6, 13, 15, 0
        ],
        "1f324": [
            ["🌤"], "", "", ["mostly_sunny", "sun_small_cloud"], 6, 14, 15, 0
        ],
        "1f325": [
            ["🌥"], "", "", ["barely_sunny", "sun_behind_cloud"], 6, 15, 15, 0
        ],
        "1f326": [
            ["🌦"], "", "", ["partly_sunny_rain", "sun_behind_rain_cloud"], 6, 16, 15, 0
        ],
        "1f327": [
            ["🌧"], "", "", ["rain_cloud"], 6, 17, 15, 0
        ],
        "1f328": [
            ["🌨"], "", "", ["snow_cloud"], 6, 18, 15, 0
        ],
        "1f329": [
            ["🌩"], "", "", ["lightning", "lightning_cloud"], 6, 19, 15, 0
        ],
        "1f32a": [
            ["🌪"], "", "", ["tornado", "tornado_cloud"], 6, 20, 15, 0
        ],
        "1f32b": [
            ["🌫"], "", "", ["fog"], 6, 21, 15, 0
        ],
        "1f32c": [
            ["🌬"], "", "", ["wind_blowing_face"], 6, 22, 15, 0
        ],
        "1f32d": [
            ["🌭"], "", "", ["hotdog"], 6, 23, 15, 0
        ],
        "1f32e": [
            ["🌮"], "", "", ["taco"], 6, 24, 15, 0
        ],
        "1f32f": [
            ["🌯"], "", "", ["burrito"], 6, 25, 15, 0
        ],
        "1f330": [
            ["🌰"], "", "󾁌", ["chestnut"], 6, 26, 15, 0
        ],
        "1f331": [
            ["🌱"], "", "󾀾", ["seedling"], 6, 27, 15, 0
        ],
        "1f332": [
            ["🌲"], "", "", ["evergreen_tree"], 6, 28, 15, 0
        ],
        "1f333": [
            ["🌳"], "", "", ["deciduous_tree"], 6, 29, 15, 0
        ],
        "1f334": [
            ["🌴"], "", "󾁇", ["palm_tree"], 6, 30, 15, 0
        ],
        "1f335": [
            ["🌵"], "", "󾁈", ["cactus"], 6, 31, 15, 0
        ],
        "1f336": [
            ["🌶"], "", "", ["hot_pepper"], 6, 32, 15, 0
        ],
        "1f337": [
            ["🌷"], "", "󾀽", ["tulip"], 6, 33, 15, 0
        ],
        "1f338": [
            ["🌸"], "", "󾁀", ["cherry_blossom"], 6, 34, 15, 0
        ],
        "1f339": [
            ["🌹"], "", "󾁁", ["rose"], 6, 35, 15, 0
        ],
        "1f33a": [
            ["🌺"], "", "󾁅", ["hibiscus"], 6, 36, 15, 0
        ],
        "1f33b": [
            ["🌻"], "", "󾁆", ["sunflower"], 6, 37, 15, 0
        ],
        "1f33c": [
            ["🌼"], "", "󾁍", ["blossom"], 6, 38, 15, 0
        ],
        "1f33d": [
            ["🌽"], "", "󾁊", ["corn"], 6, 39, 15, 0
        ],
        "1f33e": [
            ["🌾"], "", "󾁉", ["ear_of_rice"], 6, 40, 15, 0
        ],
        "1f33f": [
            ["🌿"], "", "󾁎", ["herb"], 7, 0, 15, 0
        ],
        "1f340": [
            ["🍀"], "", "󾀼", ["four_leaf_clover"], 7, 1, 15, 0
        ],
        "1f341": [
            ["🍁"], "", "󾀿", ["maple_leaf"], 7, 2, 15, 0
        ],
        "1f342": [
            ["🍂"], "", "󾁂", ["fallen_leaf"], 7, 3, 15, 0
        ],
        "1f343": [
            ["🍃"], "", "󾁃", ["leaves"], 7, 4, 15, 0
        ],
        "1f344": [
            ["🍄"], "", "󾁋", ["mushroom"], 7, 5, 15, 0
        ],
        "1f345": [
            ["🍅"], "", "󾁕", ["tomato"], 7, 6, 15, 0
        ],
        "1f346": [
            ["🍆"], "", "󾁖", ["eggplant"], 7, 7, 15, 0
        ],
        "1f347": [
            ["🍇"], "", "󾁙", ["grapes"], 7, 8, 15, 0
        ],
        "1f348": [
            ["🍈"], "", "󾁗", ["melon"], 7, 9, 15, 0
        ],
        "1f349": [
            ["🍉"], "", "󾁔", ["watermelon"], 7, 10, 15, 0
        ],
        "1f34a": [
            ["🍊"], "", "󾁒", ["tangerine"], 7, 11, 15, 0
        ],
        "1f34b": [
            ["🍋"], "", "", ["lemon"], 7, 12, 15, 0
        ],
        "1f34c": [
            ["🍌"], "", "󾁐", ["banana"], 7, 13, 15, 0
        ],
        "1f34d": [
            ["🍍"], "", "󾁘", ["pineapple"], 7, 14, 15, 0
        ],
        "1f34e": [
            ["🍎"], "", "󾁑", ["apple"], 7, 15, 15, 0
        ],
        "1f34f": [
            ["🍏"], "", "󾁛", ["green_apple"], 7, 16, 15, 0
        ],
        "1f350": [
            ["🍐"], "", "", ["pear"], 7, 17, 15, 0
        ],
        "1f351": [
            ["🍑"], "", "󾁚", ["peach"], 7, 18, 15, 0
        ],
        "1f352": [
            ["🍒"], "", "󾁏", ["cherries"], 7, 19, 15, 0
        ],
        "1f353": [
            ["🍓"], "", "󾁓", ["strawberry"], 7, 20, 15, 0
        ],
        "1f354": [
            ["🍔"], "", "󾥠", ["hamburger"], 7, 21, 15, 0
        ],
        "1f355": [
            ["🍕"], "", "󾥵", ["pizza"], 7, 22, 15, 0
        ],
        "1f356": [
            ["🍖"], "", "󾥲", ["meat_on_bone"], 7, 23, 15, 0
        ],
        "1f357": [
            ["🍗"], "", "󾥶", ["poultry_leg"], 7, 24, 15, 0
        ],
        "1f358": [
            ["🍘"], "", "󾥩", ["rice_cracker"], 7, 25, 15, 0
        ],
        "1f359": [
            ["🍙"], "", "󾥡", ["rice_ball"], 7, 26, 15, 0
        ],
        "1f35a": [
            ["🍚"], "", "󾥪", ["rice"], 7, 27, 15, 0
        ],
        "1f35b": [
            ["🍛"], "", "󾥬", ["curry"], 7, 28, 15, 0
        ],
        "1f35c": [
            ["🍜"], "", "󾥣", ["ramen"], 7, 29, 15, 0
        ],
        "1f35d": [
            ["🍝"], "", "󾥫", ["spaghetti"], 7, 30, 15, 0
        ],
        "1f35e": [
            ["🍞"], "", "󾥤", ["bread"], 7, 31, 15, 0
        ],
        "1f35f": [
            ["🍟"], "", "󾥧", ["fries"], 7, 32, 15, 0
        ],
        "1f360": [
            ["🍠"], "", "󾥴", ["sweet_potato"], 7, 33, 15, 0
        ],
        "1f361": [
            ["🍡"], "", "󾥨", ["dango"], 7, 34, 15, 0
        ],
        "1f362": [
            ["🍢"], "", "󾥭", ["oden"], 7, 35, 15, 0
        ],
        "1f363": [
            ["🍣"], "", "󾥮", ["sushi"], 7, 36, 15, 0
        ],
        "1f364": [
            ["🍤"], "", "󾥿", ["fried_shrimp"], 7, 37, 15, 0
        ],
        "1f365": [
            ["🍥"], "", "󾥳", ["fish_cake"], 7, 38, 15, 0
        ],
        "1f366": [
            ["🍦"], "", "󾥦", ["icecream"], 7, 39, 15, 0
        ],
        "1f367": [
            ["🍧"], "", "󾥱", ["shaved_ice"], 7, 40, 15, 0
        ],
        "1f368": [
            ["🍨"], "", "󾥷", ["ice_cream"], 8, 0, 15, 0
        ],
        "1f369": [
            ["🍩"], "", "󾥸", ["doughnut"], 8, 1, 15, 0
        ],
        "1f36a": [
            ["🍪"], "", "󾥹", ["cookie"], 8, 2, 15, 0
        ],
        "1f36b": [
            ["🍫"], "", "󾥺", ["chocolate_bar"], 8, 3, 15, 0
        ],
        "1f36c": [
            ["🍬"], "", "󾥻", ["candy"], 8, 4, 15, 0
        ],
        "1f36d": [
            ["🍭"], "", "󾥼", ["lollipop"], 8, 5, 15, 0
        ],
        "1f36e": [
            ["🍮"], "", "󾥽", ["custard"], 8, 6, 15, 0
        ],
        "1f36f": [
            ["🍯"], "", "󾥾", ["honey_pot"], 8, 7, 15, 0
        ],
        "1f370": [
            ["🍰"], "", "󾥢", ["cake"], 8, 8, 15, 0
        ],
        "1f371": [
            ["🍱"], "", "󾥯", ["bento"], 8, 9, 15, 0
        ],
        "1f372": [
            ["🍲"], "", "󾥰", ["stew"], 8, 10, 15, 0
        ],
        "1f373": [
            ["🍳"], "", "󾥥", ["egg"], 8, 11, 15, 0
        ],
        "1f374": [
            ["🍴"], "", "󾦀", ["fork_and_knife"], 8, 12, 15, 0
        ],
        "1f375": [
            ["🍵"], "", "󾦄", ["tea"], 8, 13, 15, 0
        ],
        "1f376": [
            ["🍶"], "", "󾦅", ["sake"], 8, 14, 15, 0
        ],
        "1f377": [
            ["🍷"], "", "󾦆", ["wine_glass"], 8, 15, 15, 0
        ],
        "1f378": [
            ["🍸"], "", "󾦂", ["cocktail"], 8, 16, 15, 0
        ],
        "1f379": [
            ["🍹"], "", "󾦈", ["tropical_drink"], 8, 17, 15, 0
        ],
        "1f37a": [
            ["🍺"], "", "󾦃", ["beer"], 8, 18, 15, 0
        ],
        "1f37b": [
            ["🍻"], "", "󾦇", ["beers"], 8, 19, 15, 0
        ],
        "1f37c": [
            ["🍼"], "", "", ["baby_bottle"], 8, 20, 15, 0
        ],
        "1f37d": [
            ["🍽"], "", "", ["knife_fork_plate"], 8, 21, 15, 0
        ],
        "1f37e": [
            ["🍾"], "", "", ["champagne"], 8, 22, 15, 0
        ],
        "1f37f": [
            ["🍿"], "", "", ["popcorn"], 8, 23, 15, 0
        ],
        "1f380": [
            ["🎀"], "", "󾔏", ["ribbon"], 8, 24, 15, 0
        ],
        "1f381": [
            ["🎁"], "", "󾔐", ["gift"], 8, 25, 15, 0
        ],
        "1f382": [
            ["🎂"], "", "󾔑", ["birthday"], 8, 26, 15, 0
        ],
        "1f383": [
            ["🎃"], "", "󾔟", ["jack_o_lantern"], 8, 27, 15, 0
        ],
        "1f384": [
            ["🎄"], "", "󾔒", ["christmas_tree"], 8, 28, 15, 0
        ],
        "1f385": [
            ["🎅"], "", "󾔓", ["santa"], 8, 29, 15, 0
        ],
        "1f386": [
            ["🎆"], "", "󾔕", ["fireworks"], 8, 35, 15, 0
        ],
        "1f387": [
            ["🎇"], "", "󾔝", ["sparkler"], 8, 36, 15, 0
        ],
        "1f388": [
            ["🎈"], "", "󾔖", ["balloon"], 8, 37, 15, 0
        ],
        "1f389": [
            ["🎉"], "", "󾔗", ["tada"], 8, 38, 15, 0
        ],
        "1f38a": [
            ["🎊"], "", "󾔠", ["confetti_ball"], 8, 39, 15, 0
        ],
        "1f38b": [
            ["🎋"], "", "󾔡", ["tanabata_tree"], 8, 40, 15, 0
        ],
        "1f38c": [
            ["🎌"], "", "󾔔", ["crossed_flags"], 9, 0, 15, 0
        ],
        "1f38d": [
            ["🎍"], "", "󾔘", ["bamboo"], 9, 1, 15, 0
        ],
        "1f38e": [
            ["🎎"], "", "󾔙", ["dolls"], 9, 2, 15, 0
        ],
        "1f38f": [
            ["🎏"], "", "󾔜", ["flags"], 9, 3, 15, 0
        ],
        "1f390": [
            ["🎐"], "", "󾔞", ["wind_chime"], 9, 4, 15, 0
        ],
        "1f391": [
            ["🎑"], "", "󾀗", ["rice_scene"], 9, 5, 15, 0
        ],
        "1f392": [
            ["🎒"], "", "󾔛", ["school_satchel"], 9, 6, 15, 0
        ],
        "1f393": [
            ["🎓"], "", "󾔚", ["mortar_board"], 9, 7, 15, 0
        ],
        "1f396": [
            ["🎖"], "", "", ["medal"], 9, 8, 15, 0
        ],
        "1f397": [
            ["🎗"], "", "", ["reminder_ribbon"], 9, 9, 15, 0
        ],
        "1f399": [
            ["🎙"], "", "", ["studio_microphone"], 9, 10, 15, 0
        ],
        "1f39a": [
            ["🎚"], "", "", ["level_slider"], 9, 11, 15, 0
        ],
        "1f39b": [
            ["🎛"], "", "", ["control_knobs"], 9, 12, 15, 0
        ],
        "1f39e": [
            ["🎞"], "", "", ["film_frames"], 9, 13, 15, 0
        ],
        "1f39f": [
            ["🎟"], "", "", ["admission_tickets"], 9, 14, 15, 0
        ],
        "1f3a0": [
            ["🎠"], "", "󾟼", ["carousel_horse"], 9, 15, 15, 0
        ],
        "1f3a1": [
            ["🎡"], "", "󾟽", ["ferris_wheel"], 9, 16, 15, 0
        ],
        "1f3a2": [
            ["🎢"], "", "󾟾", ["roller_coaster"], 9, 17, 15, 0
        ],
        "1f3a3": [
            ["🎣"], "", "󾟿", ["fishing_pole_and_fish"], 9, 18, 15, 0
        ],
        "1f3a4": [
            ["🎤"], "", "󾠀", ["microphone"], 9, 19, 15, 0
        ],
        "1f3a5": [
            ["🎥"], "", "󾠁", ["movie_camera"], 9, 20, 15, 0
        ],
        "1f3a6": [
            ["🎦"], "", "󾠂", ["cinema"], 9, 21, 15, 0
        ],
        "1f3a7": [
            ["🎧"], "", "󾠃", ["headphones"], 9, 22, 15, 0
        ],
        "1f3a8": [
            ["🎨"], "", "󾠄", ["art"], 9, 23, 15, 0
        ],
        "1f3a9": [
            ["🎩"], "", "󾠅", ["tophat"], 9, 24, 15, 0
        ],
        "1f3aa": [
            ["🎪"], "", "󾠆", ["circus_tent"], 9, 25, 15, 0
        ],
        "1f3ab": [
            ["🎫"], "", "󾠇", ["ticket"], 9, 26, 15, 0
        ],
        "1f3ac": [
            ["🎬"], "", "󾠈", ["clapper"], 9, 27, 15, 0
        ],
        "1f3ad": [
            ["🎭"], "", "󾠉", ["performing_arts"], 9, 28, 15, 0
        ],
        "1f3ae": [
            ["🎮"], "", "󾠊", ["video_game"], 9, 29, 15, 0
        ],
        "1f3af": [
            ["🎯"], "", "󾠌", ["dart"], 9, 30, 15, 0
        ],
        "1f3b0": [
            ["🎰"], "", "󾠍", ["slot_machine"], 9, 31, 15, 0
        ],
        "1f3b1": [
            ["🎱"], "", "󾠎", ["8ball"], 9, 32, 15, 0
        ],
        "1f3b2": [
            ["🎲"], "", "󾠏", ["game_die"], 9, 33, 15, 0
        ],
        "1f3b3": [
            ["🎳"], "", "󾠐", ["bowling"], 9, 34, 15, 0
        ],
        "1f3b4": [
            ["🎴"], "", "󾠑", ["flower_playing_cards"], 9, 35, 15, 0
        ],
        "1f3b5": [
            ["🎵"], "", "󾠓", ["musical_note"], 9, 36, 15, 0
        ],
        "1f3b6": [
            ["🎶"], "", "󾠔", ["notes"], 9, 37, 15, 0
        ],
        "1f3b7": [
            ["🎷"], "", "󾠕", ["saxophone"], 9, 38, 15, 0
        ],
        "1f3b8": [
            ["🎸"], "", "󾠖", ["guitar"], 9, 39, 15, 0
        ],
        "1f3b9": [
            ["🎹"], "", "󾠗", ["musical_keyboard"], 9, 40, 15, 0
        ],
        "1f3ba": [
            ["🎺"], "", "󾠘", ["trumpet"], 10, 0, 15, 0
        ],
        "1f3bb": [
            ["🎻"], "", "󾠙", ["violin"], 10, 1, 15, 0
        ],
        "1f3bc": [
            ["🎼"], "", "󾠚", ["musical_score"], 10, 2, 15, 0
        ],
        "1f3bd": [
            ["🎽"], "", "󾟐", ["running_shirt_with_sash"], 10, 3, 15, 0
        ],
        "1f3be": [
            ["🎾"], "", "󾟓", ["tennis"], 10, 4, 15, 0
        ],
        "1f3bf": [
            ["🎿"], "", "󾟕", ["ski"], 10, 5, 15, 0
        ],
        "1f3c0": [
            ["🏀"], "", "󾟖", ["basketball"], 10, 6, 15, 0
        ],
        "1f3c1": [
            ["🏁"], "", "󾟗", ["checkered_flag"], 10, 7, 15, 0
        ],
        "1f3c2": [
            ["🏂"], "", "󾟘", ["snowboarder"], 10, 8, 15, 0
        ],
        "1f3c3": [
            ["🏃"], "", "󾟙", ["runner", "running"], 10, 9, 15, 0
        ],
        "1f3c4": [
            ["🏄"], "", "󾟚", ["surfer"], 10, 15, 15, 0
        ],
        "1f3c5": [
            ["🏅"], "", "", ["sports_medal"], 10, 21, 15, 0
        ],
        "1f3c6": [
            ["🏆"], "", "󾟛", ["trophy"], 10, 22, 15, 0
        ],
        "1f3c7": [
            ["🏇"], "", "", ["horse_racing"], 10, 23, 15, 0
        ],
        "1f3c8": [
            ["🏈"], "", "󾟝", ["football"], 10, 24, 15, 0
        ],
        "1f3c9": [
            ["🏉"], "", "", ["rugby_football"], 10, 25, 15, 0
        ],
        "1f3ca": [
            ["🏊"], "", "󾟞", ["swimmer"], 10, 26, 15, 0
        ],
        "1f3cb": [
            ["🏋"], "", "", ["weight_lifter"], 10, 32, 15, 0
        ],
        "1f3cc": [
            ["🏌"], "", "", ["golfer"], 10, 38, 15, 0
        ],
        "1f3cd": [
            ["🏍"], "", "", ["racing_motorcycle"], 10, 39, 15, 0
        ],
        "1f3ce": [
            ["🏎"], "", "", ["racing_car"], 10, 40, 15, 0
        ],
        "1f3cf": [
            ["🏏"], "", "", ["cricket_bat_and_ball"], 11, 0, 15, 0
        ],
        "1f3d0": [
            ["🏐"], "", "", ["volleyball"], 11, 1, 15, 0
        ],
        "1f3d1": [
            ["🏑"], "", "", ["field_hockey_stick_and_ball"], 11, 2, 15, 0
        ],
        "1f3d2": [
            ["🏒"], "", "", ["ice_hockey_stick_and_puck"], 11, 3, 15, 0
        ],
        "1f3d3": [
            ["🏓"], "", "", ["table_tennis_paddle_and_ball"], 11, 4, 15, 0
        ],
        "1f3d4": [
            ["🏔"], "", "", ["snow_capped_mountain"], 11, 5, 15, 0
        ],
        "1f3d5": [
            ["🏕"], "", "", ["camping"], 11, 6, 15, 0
        ],
        "1f3d6": [
            ["🏖"], "", "", ["beach_with_umbrella"], 11, 7, 15, 0
        ],
        "1f3d7": [
            ["🏗"], "", "", ["building_construction"], 11, 8, 15, 0
        ],
        "1f3d8": [
            ["🏘"], "", "", ["house_buildings"], 11, 9, 15, 0
        ],
        "1f3d9": [
            ["🏙"], "", "", ["cityscape"], 11, 10, 15, 0
        ],
        "1f3da": [
            ["🏚"], "", "", ["derelict_house_building"], 11, 11, 15, 0
        ],
        "1f3db": [
            ["🏛"], "", "", ["classical_building"], 11, 12, 15, 0
        ],
        "1f3dc": [
            ["🏜"], "", "", ["desert"], 11, 13, 15, 0
        ],
        "1f3dd": [
            ["🏝"], "", "", ["desert_island"], 11, 14, 15, 0
        ],
        "1f3de": [
            ["🏞"], "", "", ["national_park"], 11, 15, 15, 0
        ],
        "1f3df": [
            ["🏟"], "", "", ["stadium"], 11, 16, 15, 0
        ],
        "1f3e0": [
            ["🏠"], "", "󾒰", ["house"], 11, 17, 15, 0
        ],
        "1f3e1": [
            ["🏡"], "", "󾒱", ["house_with_garden"], 11, 18, 15, 0
        ],
        "1f3e2": [
            ["🏢"], "", "󾒲", ["office"], 11, 19, 15, 0
        ],
        "1f3e3": [
            ["🏣"], "", "󾒳", ["post_office"], 11, 20, 15, 0
        ],
        "1f3e4": [
            ["🏤"], "", "", ["european_post_office"], 11, 21, 15, 0
        ],
        "1f3e5": [
            ["🏥"], "", "󾒴", ["hospital"], 11, 22, 15, 0
        ],
        "1f3e6": [
            ["🏦"], "", "󾒵", ["bank"], 11, 23, 15, 0
        ],
        "1f3e7": [
            ["🏧"], "", "󾒶", ["atm"], 11, 24, 15, 0
        ],
        "1f3e8": [
            ["🏨"], "", "󾒷", ["hotel"], 11, 25, 15, 0
        ],
        "1f3e9": [
            ["🏩"], "", "󾒸", ["love_hotel"], 11, 26, 15, 0
        ],
        "1f3ea": [
            ["🏪"], "", "󾒹", ["convenience_store"], 11, 27, 15, 0
        ],
        "1f3eb": [
            ["🏫"], "", "󾒺", ["school"], 11, 28, 15, 0
        ],
        "1f3ec": [
            ["🏬"], "", "󾒽", ["department_store"], 11, 29, 15, 0
        ],
        "1f3ed": [
            ["🏭"], "", "󾓀", ["factory"], 11, 30, 15, 0
        ],
        "1f3ee": [
            ["🏮"], "", "󾓂", ["izakaya_lantern", "lantern"], 11, 31, 15, 0
        ],
        "1f3ef": [
            ["🏯"], "", "󾒾", ["japanese_castle"], 11, 32, 15, 0
        ],
        "1f3f0": [
            ["🏰"], "", "󾒿", ["european_castle"], 11, 33, 15, 0
        ],
        "1f3f3": [
            ["🏳"], "", "", ["waving_white_flag"], 11, 34, 15, 0
        ],
        "1f3f4": [
            ["🏴"], "", "", ["waving_black_flag"], 11, 35, 15, 0
        ],
        "1f3f5": [
            ["🏵"], "", "", ["rosette"], 11, 36, 15, 0
        ],
        "1f3f7": [
            ["🏷"], "", "", ["label"], 11, 37, 15, 0
        ],
        "1f3f8": [
            ["🏸"], "", "", ["badminton_racquet_and_shuttlecock"], 11, 38, 15, 0
        ],
        "1f3f9": [
            ["🏹"], "", "", ["bow_and_arrow"], 11, 39, 15, 0
        ],
        "1f3fa": [
            ["🏺"], "", "", ["amphora"], 11, 40, 15, 0
        ],
        "1f3fb": [
            ["🏻"], "", "", ["skin-tone-2"], 12, 0, 15, 0
        ],
        "1f3fc": [
            ["🏼"], "", "", ["skin-tone-3"], 12, 1, 15, 0
        ],
        "1f3fd": [
            ["🏽"], "", "", ["skin-tone-4"], 12, 2, 15, 0
        ],
        "1f3fe": [
            ["🏾"], "", "", ["skin-tone-5"], 12, 3, 15, 0
        ],
        "1f3ff": [
            ["🏿"], "", "", ["skin-tone-6"], 12, 4, 15, 0
        ],
        "1f400": [
            ["🐀"], "", "", ["rat"], 12, 5, 15, 0
        ],
        "1f401": [
            ["🐁"], "", "", ["mouse2"], 12, 6, 15, 0
        ],
        "1f402": [
            ["🐂"], "", "", ["ox"], 12, 7, 15, 0
        ],
        "1f403": [
            ["🐃"], "", "", ["water_buffalo"], 12, 8, 15, 0
        ],
        "1f404": [
            ["🐄"], "", "", ["cow2"], 12, 9, 15, 0
        ],
        "1f405": [
            ["🐅"], "", "", ["tiger2"], 12, 10, 15, 0
        ],
        "1f406": [
            ["🐆"], "", "", ["leopard"], 12, 11, 15, 0
        ],
        "1f407": [
            ["🐇"], "", "", ["rabbit2"], 12, 12, 15, 0
        ],
        "1f408": [
            ["🐈"], "", "", ["cat2"], 12, 13, 15, 0
        ],
        "1f409": [
            ["🐉"], "", "", ["dragon"], 12, 14, 15, 0
        ],
        "1f40a": [
            ["🐊"], "", "", ["crocodile"], 12, 15, 15, 0
        ],
        "1f40b": [
            ["🐋"], "", "", ["whale2"], 12, 16, 15, 0
        ],
        "1f40c": [
            ["🐌"], "", "󾆹", ["snail"], 12, 17, 15, 0
        ],
        "1f40d": [
            ["🐍"], "", "󾇓", ["snake"], 12, 18, 15, 0
        ],
        "1f40e": [
            ["🐎"], "", "󾟜", ["racehorse"], 12, 19, 15, 0
        ],
        "1f40f": [
            ["🐏"], "", "", ["ram"], 12, 20, 15, 0
        ],
        "1f410": [
            ["🐐"], "", "", ["goat"], 12, 21, 15, 0
        ],
        "1f411": [
            ["🐑"], "", "󾇏", ["sheep"], 12, 22, 15, 0
        ],
        "1f412": [
            ["🐒"], "", "󾇎", ["monkey"], 12, 23, 15, 0
        ],
        "1f413": [
            ["🐓"], "", "", ["rooster"], 12, 24, 15, 0
        ],
        "1f414": [
            ["🐔"], "", "󾇔", ["chicken"], 12, 25, 15, 0
        ],
        "1f415": [
            ["🐕"], "", "", ["dog2"], 12, 26, 15, 0
        ],
        "1f416": [
            ["🐖"], "", "", ["pig2"], 12, 27, 15, 0
        ],
        "1f417": [
            ["🐗"], "", "󾇕", ["boar"], 12, 28, 15, 0
        ],
        "1f418": [
            ["🐘"], "", "󾇌", ["elephant"], 12, 29, 15, 0
        ],
        "1f419": [
            ["🐙"], "", "󾇅", ["octopus"], 12, 30, 15, 0
        ],
        "1f41a": [
            ["🐚"], "", "󾇆", ["shell"], 12, 31, 15, 0
        ],
        "1f41b": [
            ["🐛"], "", "󾇋", ["bug"], 12, 32, 15, 0
        ],
        "1f41c": [
            ["🐜"], "", "󾇚", ["ant"], 12, 33, 15, 0
        ],
        "1f41d": [
            ["🐝"], "", "󾇡", ["bee", "honeybee"], 12, 34, 15, 0
        ],
        "1f41e": [
            ["🐞"], "", "󾇢", ["beetle"], 12, 35, 15, 0
        ],
        "1f41f": [
            ["🐟"], "", "󾆽", ["fish"], 12, 36, 15, 0
        ],
        "1f420": [
            ["🐠"], "", "󾇉", ["tropical_fish"], 12, 37, 15, 0
        ],
        "1f421": [
            ["🐡"], "", "󾇙", ["blowfish"], 12, 38, 15, 0
        ],
        "1f422": [
            ["🐢"], "", "󾇜", ["turtle"], 12, 39, 15, 0
        ],
        "1f423": [
            ["🐣"], "", "󾇝", ["hatching_chick"], 12, 40, 15, 0
        ],
        "1f424": [
            ["🐤"], "", "󾆺", ["baby_chick"], 13, 0, 15, 0
        ],
        "1f425": [
            ["🐥"], "", "󾆻", ["hatched_chick"], 13, 1, 15, 0
        ],
        "1f426": [
            ["🐦"], "", "󾇈", ["bird"], 13, 2, 15, 0
        ],
        "1f427": [
            ["🐧"], "", "󾆼", ["penguin"], 13, 3, 15, 0
        ],
        "1f428": [
            ["🐨"], "", "󾇍", ["koala"], 13, 4, 15, 0
        ],
        "1f429": [
            ["🐩"], "", "󾇘", ["poodle"], 13, 5, 15, 0
        ],
        "1f42a": [
            ["🐪"], "", "", ["dromedary_camel"], 13, 6, 15, 0
        ],
        "1f42b": [
            ["🐫"], "", "󾇖", ["camel"], 13, 7, 15, 0
        ],
        "1f42c": [
            ["🐬"], "", "󾇇", ["dolphin", "flipper"], 13, 8, 15, 0
        ],
        "1f42d": [
            ["🐭"], "", "󾇂", ["mouse"], 13, 9, 15, 0
        ],
        "1f42e": [
            ["🐮"], "", "󾇑", ["cow"], 13, 10, 15, 0
        ],
        "1f42f": [
            ["🐯"], "", "󾇀", ["tiger"], 13, 11, 15, 0
        ],
        "1f430": [
            ["🐰"], "", "󾇒", ["rabbit"], 13, 12, 15, 0
        ],
        "1f431": [
            ["🐱"], "", "󾆸", ["cat"], 13, 13, 15, 0
        ],
        "1f432": [
            ["🐲"], "", "󾇞", ["dragon_face"], 13, 14, 15, 0
        ],
        "1f433": [
            ["🐳"], "", "󾇃", ["whale"], 13, 15, 15, 0
        ],
        "1f434": [
            ["🐴"], "", "󾆾", ["horse"], 13, 16, 15, 0
        ],
        "1f435": [
            ["🐵"], "", "󾇄", ["monkey_face"], 13, 17, 15, 0
        ],
        "1f436": [
            ["🐶"], "", "󾆷", ["dog"], 13, 18, 15, 0
        ],
        "1f437": [
            ["🐷"], "", "󾆿", ["pig"], 13, 19, 15, 0
        ],
        "1f438": [
            ["🐸"], "", "󾇗", ["frog"], 13, 20, 15, 0
        ],
        "1f439": [
            ["🐹"], "", "󾇊", ["hamster"], 13, 21, 15, 0
        ],
        "1f43a": [
            ["🐺"], "", "󾇐", ["wolf"], 13, 22, 15, 0
        ],
        "1f43b": [
            ["🐻"], "", "󾇁", ["bear"], 13, 23, 15, 0
        ],
        "1f43c": [
            ["🐼"], "", "󾇟", ["panda_face"], 13, 24, 15, 0
        ],
        "1f43d": [
            ["🐽"], "", "󾇠", ["pig_nose"], 13, 25, 15, 0
        ],
        "1f43e": [
            ["🐾"], "", "󾇛", ["feet", "paw_prints"], 13, 26, 15, 0
        ],
        "1f43f": [
            ["🐿"], "", "", ["chipmunk"], 13, 27, 15, 0
        ],
        "1f440": [
            ["👀"], "", "󾆐", ["eyes"], 13, 28, 15, 0
        ],
        "1f441": [
            ["👁"], "", "", ["eye"], 13, 29, 15, 0
        ],
        "1f442": [
            ["👂"], "", "󾆑", ["ear"], 13, 30, 15, 0
        ],
        "1f443": [
            ["👃"], "", "󾆒", ["nose"], 13, 36, 15, 0
        ],
        "1f444": [
            ["👄"], "", "󾆓", ["lips"], 14, 1, 15, 0
        ],
        "1f445": [
            ["👅"], "", "󾆔", ["tongue"], 14, 2, 15, 0
        ],
        "1f446": [
            ["👆"], "", "󾮙", ["point_up_2"], 14, 3, 15, 0
        ],
        "1f447": [
            ["👇"], "", "󾮚", ["point_down"], 14, 9, 15, 0
        ],
        "1f448": [
            ["👈"], "", "󾮛", ["point_left"], 14, 15, 15, 0
        ],
        "1f449": [
            ["👉"], "", "󾮜", ["point_right"], 14, 21, 15, 0
        ],
        "1f44a": [
            ["👊"], "", "󾮖", ["facepunch", "punch"], 14, 27, 15, 0
        ],
        "1f44b": [
            ["👋"], "", "󾮝", ["wave"], 14, 33, 15, 0
        ],
        "1f44c": [
            ["👌"], "", "󾮟", ["ok_hand"], 14, 39, 15, 0
        ],
        "1f44d": [
            ["👍"], "", "󾮗", ["+1", "thumbsup"], 15, 4, 15, 0
        ],
        "1f44e": [
            ["👎"], "", "󾮠", ["-1", "thumbsdown"], 15, 10, 15, 0
        ],
        "1f44f": [
            ["👏"], "", "󾮞", ["clap"], 15, 16, 15, 0
        ],
        "1f450": [
            ["👐"], "", "󾮡", ["open_hands"], 15, 22, 15, 0
        ],
        "1f451": [
            ["👑"], "", "󾓑", ["crown"], 15, 28, 15, 0
        ],
        "1f452": [
            ["👒"], "", "󾓔", ["womans_hat"], 15, 29, 15, 0
        ],
        "1f453": [
            ["👓"], "", "󾓎", ["eyeglasses"], 15, 30, 15, 0
        ],
        "1f454": [
            ["👔"], "", "󾓓", ["necktie"], 15, 31, 15, 0
        ],
        "1f455": [
            ["👕"], "", "󾓏", ["shirt", "tshirt"], 15, 32, 15, 0
        ],
        "1f456": [
            ["👖"], "", "󾓐", ["jeans"], 15, 33, 15, 0
        ],
        "1f457": [
            ["👗"], "", "󾓕", ["dress"], 15, 34, 15, 0
        ],
        "1f458": [
            ["👘"], "", "󾓙", ["kimono"], 15, 35, 15, 0
        ],
        "1f459": [
            ["👙"], "", "󾓚", ["bikini"], 15, 36, 15, 0
        ],
        "1f45a": [
            ["👚"], "", "󾓛", ["womans_clothes"], 15, 37, 15, 0
        ],
        "1f45b": [
            ["👛"], "", "󾓜", ["purse"], 15, 38, 15, 0
        ],
        "1f45c": [
            ["👜"], "", "󾓰", ["handbag"], 15, 39, 15, 0
        ],
        "1f45d": [
            ["👝"], "", "󾓱", ["pouch"], 15, 40, 15, 0
        ],
        "1f45e": [
            ["👞"], "", "󾓌", ["mans_shoe", "shoe"], 16, 0, 15, 0
        ],
        "1f45f": [
            ["👟"], "", "󾓍", ["athletic_shoe"], 16, 1, 15, 0
        ],
        "1f460": [
            ["👠"], "", "󾓖", ["high_heel"], 16, 2, 15, 0
        ],
        "1f461": [
            ["👡"], "", "󾓗", ["sandal"], 16, 3, 15, 0
        ],
        "1f462": [
            ["👢"], "", "󾓘", ["boot"], 16, 4, 15, 0
        ],
        "1f463": [
            ["👣"], "", "󾕓", ["footprints"], 16, 5, 15, 0
        ],
        "1f464": [
            ["👤"], "", "󾆚", ["bust_in_silhouette"], 16, 6, 15, 0
        ],
        "1f465": [
            ["👥"], "", "", ["busts_in_silhouette"], 16, 7, 15, 0
        ],
        "1f466": [
            ["👦"], "", "󾆛", ["boy"], 16, 8, 15, 0
        ],
        "1f467": [
            ["👧"], "", "󾆜", ["girl"], 16, 14, 15, 0
        ],
        "1f468": [
            ["👨"], "", "󾆝", ["man"], 16, 20, 15, 0
        ],
        "1f469": [
            ["👩"], "", "󾆞", ["woman"], 16, 26, 15, 0
        ],
        "1f46a": [
            ["👨‍👩‍👦", "👪"], "", "󾆟", ["family", "man-woman-boy"], 16, 32, 15, 0
        ],
        "1f46b": [
            ["👫"], "", "󾆠", ["couple", "man_and_woman_holding_hands"], 16, 33, 15, 0
        ],
        "1f46c": [
            ["👬"], "", "", ["two_men_holding_hands"], 16, 34, 15, 0
        ],
        "1f46d": [
            ["👭"], "", "", ["two_women_holding_hands"], 16, 35, 15, 0
        ],
        "1f46e": [
            ["👮"], "", "󾆡", ["cop"], 16, 36, 15, 0
        ],
        "1f46f": [
            ["👯"], "", "󾆢", ["dancers"], 17, 1, 15, 0
        ],
        "1f470": [
            ["👰"], "", "󾆣", ["bride_with_veil"], 17, 2, 15, 0
        ],
        "1f471": [
            ["👱"], "", "󾆤", ["person_with_blond_hair"], 17, 8, 15, 0
        ],
        "1f472": [
            ["👲"], "", "󾆥", ["man_with_gua_pi_mao"], 17, 14, 15, 0
        ],
        "1f473": [
            ["👳"], "", "󾆦", ["man_with_turban"], 17, 20, 15, 0
        ],
        "1f474": [
            ["👴"], "", "󾆧", ["older_man"], 17, 26, 15, 0
        ],
        "1f475": [
            ["👵"], "", "󾆨", ["older_woman"], 17, 32, 15, 0
        ],
        "1f476": [
            ["👶"], "", "󾆩", ["baby"], 17, 38, 15, 0
        ],
        "1f477": [
            ["👷"], "", "󾆪", ["construction_worker"], 18, 3, 15, 0
        ],
        "1f478": [
            ["👸"], "", "󾆫", ["princess"], 18, 9, 15, 0
        ],
        "1f479": [
            ["👹"], "", "󾆬", ["japanese_ogre"], 18, 15, 15, 0
        ],
        "1f47a": [
            ["👺"], "", "󾆭", ["japanese_goblin"], 18, 16, 15, 0
        ],
        "1f47b": [
            ["👻"], "", "󾆮", ["ghost"], 18, 17, 15, 0
        ],
        "1f47c": [
            ["👼"], "", "󾆯", ["angel"], 18, 18, 15, 0
        ],
        "1f47d": [
            ["👽"], "", "󾆰", ["alien"], 18, 24, 15, 0
        ],
        "1f47e": [
            ["👾"], "", "󾆱", ["space_invader"], 18, 25, 15, 0
        ],
        "1f47f": [
            ["👿"], "", "󾆲", ["imp"], 18, 26, 15, 0
        ],
        "1f480": [
            ["💀"], "", "󾆳", ["skull"], 18, 27, 15, 0
        ],
        "1f481": [
            ["💁"], "", "󾆴", ["information_desk_person"], 18, 28, 15, 0
        ],
        "1f482": [
            ["💂"], "", "󾆵", ["guardsman"], 18, 34, 15, 0
        ],
        "1f483": [
            ["💃"], "", "󾆶", ["dancer"], 18, 40, 15, 0
        ],
        "1f484": [
            ["💄"], "", "󾆕", ["lipstick"], 19, 5, 15, 0
        ],
        "1f485": [
            ["💅"], "", "󾆖", ["nail_care"], 19, 6, 15, 0
        ],
        "1f486": [
            ["💆"], "", "󾆗", ["massage"], 19, 12, 15, 0
        ],
        "1f487": [
            ["💇"], "", "󾆘", ["haircut"], 19, 18, 15, 0
        ],
        "1f488": [
            ["💈"], "", "󾆙", ["barber"], 19, 24, 15, 0
        ],
        "1f489": [
            ["💉"], "", "󾔉", ["syringe"], 19, 25, 15, 0
        ],
        "1f48a": [
            ["💊"], "", "󾔊", ["pill"], 19, 26, 15, 0
        ],
        "1f48b": [
            ["💋"], "", "󾠣", ["kiss"], 19, 27, 15, 0
        ],
        "1f48c": [
            ["💌"], "", "󾠤", ["love_letter"], 19, 28, 15, 0
        ],
        "1f48d": [
            ["💍"], "", "󾠥", ["ring"], 19, 29, 15, 0
        ],
        "1f48e": [
            ["💎"], "", "󾠦", ["gem"], 19, 30, 15, 0
        ],
        "1f48f": [
            ["💏"], "", "󾠧", ["couplekiss"], 19, 31, 15, 0
        ],
        "1f490": [
            ["💐"], "", "󾠨", ["bouquet"], 19, 32, 15, 0
        ],
        "1f491": [
            ["💑"], "", "󾠩", ["couple_with_heart"], 19, 33, 15, 0
        ],
        "1f492": [
            ["💒"], "", "󾠪", ["wedding"], 19, 34, 15, 0
        ],
        "1f493": [
            ["💓"], "", "󾬍", ["heartbeat"], 19, 35, 15, 0
        ],
        "1f494": [
            ["💔"], "", "󾬎", ["broken_heart"], 19, 36, 15, 0, "</3"
        ],
        "1f495": [
            ["💕"], "", "󾬏", ["two_hearts"], 19, 37, 15, 0
        ],
        "1f496": [
            ["💖"], "", "󾬐", ["sparkling_heart"], 19, 38, 15, 0
        ],
        "1f497": [
            ["💗"], "", "󾬑", ["heartpulse"], 19, 39, 15, 0
        ],
        "1f498": [
            ["💘"], "", "󾬒", ["cupid"], 19, 40, 15, 0
        ],
        "1f499": [
            ["💙"], "", "󾬓", ["blue_heart"], 20, 0, 15, 0, "<3"
        ],
        "1f49a": [
            ["💚"], "", "󾬔", ["green_heart"], 20, 1, 15, 0, "<3"
        ],
        "1f49b": [
            ["💛"], "", "󾬕", ["yellow_heart"], 20, 2, 15, 0, "<3"
        ],
        "1f49c": [
            ["💜"], "", "󾬖", ["purple_heart"], 20, 3, 15, 0, "<3"
        ],
        "1f49d": [
            ["💝"], "", "󾬗", ["gift_heart"], 20, 4, 15, 0
        ],
        "1f49e": [
            ["💞"], "", "󾬘", ["revolving_hearts"], 20, 5, 15, 0
        ],
        "1f49f": [
            ["💟"], "", "󾬙", ["heart_decoration"], 20, 6, 15, 0
        ],
        "1f4a0": [
            ["💠"], "", "󾭕", ["diamond_shape_with_a_dot_inside"], 20, 7, 15, 0
        ],
        "1f4a1": [
            ["💡"], "", "󾭖", ["bulb"], 20, 8, 15, 0
        ],
        "1f4a2": [
            ["💢"], "", "󾭗", ["anger"], 20, 9, 15, 0
        ],
        "1f4a3": [
            ["💣"], "", "󾭘", ["bomb"], 20, 10, 15, 0
        ],
        "1f4a4": [
            ["💤"], "", "󾭙", ["zzz"], 20, 11, 15, 0
        ],
        "1f4a5": [
            ["💥"], "", "󾭚", ["boom", "collision"], 20, 12, 15, 0
        ],
        "1f4a6": [
            ["💦"], "", "󾭛", ["sweat_drops"], 20, 13, 15, 0
        ],
        "1f4a7": [
            ["💧"], "", "󾭜", ["droplet"], 20, 14, 15, 0
        ],
        "1f4a8": [
            ["💨"], "", "󾭝", ["dash"], 20, 15, 15, 0
        ],
        "1f4a9": [
            ["💩"], "", "󾓴", ["hankey", "poop", "shit"], 20, 16, 15, 0
        ],
        "1f4aa": [
            ["💪"], "", "󾭞", ["muscle"], 20, 17, 15, 0
        ],
        "1f4ab": [
            ["💫"], "", "󾭟", ["dizzy"], 20, 23, 15, 0
        ],
        "1f4ac": [
            ["💬"], "", "󾔲", ["speech_balloon"], 20, 24, 15, 0
        ],
        "1f4ad": [
            ["💭"], "", "", ["thought_balloon"], 20, 25, 15, 0
        ],
        "1f4ae": [
            ["💮"], "", "󾭺", ["white_flower"], 20, 26, 15, 0
        ],
        "1f4af": [
            ["💯"], "", "󾭻", ["100"], 20, 27, 15, 0
        ],
        "1f4b0": [
            ["💰"], "", "󾓝", ["moneybag"], 20, 28, 15, 0
        ],
        "1f4b1": [
            ["💱"], "", "󾓞", ["currency_exchange"], 20, 29, 15, 0
        ],
        "1f4b2": [
            ["💲"], "", "󾓠", ["heavy_dollar_sign"], 20, 30, 15, 0
        ],
        "1f4b3": [
            ["💳"], "", "󾓡", ["credit_card"], 20, 31, 15, 0
        ],
        "1f4b4": [
            ["💴"], "", "󾓢", ["yen"], 20, 32, 15, 0
        ],
        "1f4b5": [
            ["💵"], "", "󾓣", ["dollar"], 20, 33, 15, 0
        ],
        "1f4b6": [
            ["💶"], "", "", ["euro"], 20, 34, 15, 0
        ],
        "1f4b7": [
            ["💷"], "", "", ["pound"], 20, 35, 15, 0
        ],
        "1f4b8": [
            ["💸"], "", "󾓤", ["money_with_wings"], 20, 36, 15, 0
        ],
        "1f4b9": [
            ["💹"], "", "󾓟", ["chart"], 20, 37, 15, 0
        ],
        "1f4ba": [
            ["💺"], "", "󾔷", ["seat"], 20, 38, 15, 0
        ],
        "1f4bb": [
            ["💻"], "", "󾔸", ["computer"], 20, 39, 15, 0
        ],
        "1f4bc": [
            ["💼"], "", "󾔻", ["briefcase"], 20, 40, 15, 0
        ],
        "1f4bd": [
            ["💽"], "", "󾔼", ["minidisc"], 21, 0, 15, 0
        ],
        "1f4be": [
            ["💾"], "", "󾔽", ["floppy_disk"], 21, 1, 15, 0
        ],
        "1f4bf": [
            ["💿"], "", "󾠝", ["cd"], 21, 2, 15, 0
        ],
        "1f4c0": [
            ["📀"], "", "󾠞", ["dvd"], 21, 3, 15, 0
        ],
        "1f4c1": [
            ["📁"], "", "󾕃", ["file_folder"], 21, 4, 15, 0
        ],
        "1f4c2": [
            ["📂"], "", "󾕄", ["open_file_folder"], 21, 5, 15, 0
        ],
        "1f4c3": [
            ["📃"], "", "󾕀", ["page_with_curl"], 21, 6, 15, 0
        ],
        "1f4c4": [
            ["📄"], "", "󾕁", ["page_facing_up"], 21, 7, 15, 0
        ],
        "1f4c5": [
            ["📅"], "", "󾕂", ["date"], 21, 8, 15, 0
        ],
        "1f4c6": [
            ["📆"], "", "󾕉", ["calendar"], 21, 9, 15, 0
        ],
        "1f4c7": [
            ["📇"], "", "󾕍", ["card_index"], 21, 10, 15, 0
        ],
        "1f4c8": [
            ["📈"], "", "󾕋", ["chart_with_upwards_trend"], 21, 11, 15, 0
        ],
        "1f4c9": [
            ["📉"], "", "󾕌", ["chart_with_downwards_trend"], 21, 12, 15, 0
        ],
        "1f4ca": [
            ["📊"], "", "󾕊", ["bar_chart"], 21, 13, 15, 0
        ],
        "1f4cb": [
            ["📋"], "", "󾕈", ["clipboard"], 21, 14, 15, 0
        ],
        "1f4cc": [
            ["📌"], "", "󾕎", ["pushpin"], 21, 15, 15, 0
        ],
        "1f4cd": [
            ["📍"], "", "󾔿", ["round_pushpin"], 21, 16, 15, 0
        ],
        "1f4ce": [
            ["📎"], "", "󾔺", ["paperclip"], 21, 17, 15, 0
        ],
        "1f4cf": [
            ["📏"], "", "󾕐", ["straight_ruler"], 21, 18, 15, 0
        ],
        "1f4d0": [
            ["📐"], "", "󾕑", ["triangular_ruler"], 21, 19, 15, 0
        ],
        "1f4d1": [
            ["📑"], "", "󾕒", ["bookmark_tabs"], 21, 20, 15, 0
        ],
        "1f4d2": [
            ["📒"], "", "󾕏", ["ledger"], 21, 21, 15, 0
        ],
        "1f4d3": [
            ["📓"], "", "󾕅", ["notebook"], 21, 22, 15, 0
        ],
        "1f4d4": [
            ["📔"], "", "󾕇", ["notebook_with_decorative_cover"], 21, 23, 15, 0
        ],
        "1f4d5": [
            ["📕"], "", "󾔂", ["closed_book"], 21, 24, 15, 0
        ],
        "1f4d6": [
            ["📖"], "", "󾕆", ["book", "open_book"], 21, 25, 15, 0
        ],
        "1f4d7": [
            ["📗"], "", "󾓿", ["green_book"], 21, 26, 15, 0
        ],
        "1f4d8": [
            ["📘"], "", "󾔀", ["blue_book"], 21, 27, 15, 0
        ],
        "1f4d9": [
            ["📙"], "", "󾔁", ["orange_book"], 21, 28, 15, 0
        ],
        "1f4da": [
            ["📚"], "", "󾔃", ["books"], 21, 29, 15, 0
        ],
        "1f4db": [
            ["📛"], "", "󾔄", ["name_badge"], 21, 30, 15, 0
        ],
        "1f4dc": [
            ["📜"], "", "󾓽", ["scroll"], 21, 31, 15, 0
        ],
        "1f4dd": [
            ["📝"], "", "󾔧", ["memo", "pencil"], 21, 32, 15, 0
        ],
        "1f4de": [
            ["📞"], "", "󾔤", ["telephone_receiver"], 21, 33, 15, 0
        ],
        "1f4df": [
            ["📟"], "", "󾔢", ["pager"], 21, 34, 15, 0
        ],
        "1f4e0": [
            ["📠"], "", "󾔨", ["fax"], 21, 35, 15, 0
        ],
        "1f4e1": [
            ["📡"], "", "󾔱", ["satellite_antenna"], 21, 36, 15, 0
        ],
        "1f4e2": [
            ["📢"], "", "󾔯", ["loudspeaker"], 21, 37, 15, 0
        ],
        "1f4e3": [
            ["📣"], "", "󾔰", ["mega"], 21, 38, 15, 0
        ],
        "1f4e4": [
            ["📤"], "", "󾔳", ["outbox_tray"], 21, 39, 15, 0
        ],
        "1f4e5": [
            ["📥"], "", "󾔴", ["inbox_tray"], 21, 40, 15, 0
        ],
        "1f4e6": [
            ["📦"], "", "󾔵", ["package"], 22, 0, 15, 0
        ],
        "1f4e7": [
            ["📧"], "", "󾮒", ["e-mail"], 22, 1, 15, 0
        ],
        "1f4e8": [
            ["📨"], "", "󾔪", ["incoming_envelope"], 22, 2, 15, 0
        ],
        "1f4e9": [
            ["📩"], "", "󾔫", ["envelope_with_arrow"], 22, 3, 15, 0
        ],
        "1f4ea": [
            ["📪"], "", "󾔬", ["mailbox_closed"], 22, 4, 15, 0
        ],
        "1f4eb": [
            ["📫"], "", "󾔭", ["mailbox"], 22, 5, 15, 0
        ],
        "1f4ec": [
            ["📬"], "", "", ["mailbox_with_mail"], 22, 6, 15, 0
        ],
        "1f4ed": [
            ["📭"], "", "", ["mailbox_with_no_mail"], 22, 7, 15, 0
        ],
        "1f4ee": [
            ["📮"], "", "󾔮", ["postbox"], 22, 8, 15, 0
        ],
        "1f4ef": [
            ["📯"], "", "", ["postal_horn"], 22, 9, 15, 0
        ],
        "1f4f0": [
            ["📰"], "", "󾠢", ["newspaper"], 22, 10, 15, 0
        ],
        "1f4f1": [
            ["📱"], "", "󾔥", ["iphone"], 22, 11, 15, 0
        ],
        "1f4f2": [
            ["📲"], "", "󾔦", ["calling"], 22, 12, 15, 0
        ],
        "1f4f3": [
            ["📳"], "", "󾠹", ["vibration_mode"], 22, 13, 15, 0
        ],
        "1f4f4": [
            ["📴"], "", "󾠺", ["mobile_phone_off"], 22, 14, 15, 0
        ],
        "1f4f5": [
            ["📵"], "", "", ["no_mobile_phones"], 22, 15, 15, 0
        ],
        "1f4f6": [
            ["📶"], "", "󾠸", ["signal_strength"], 22, 16, 15, 0
        ],
        "1f4f7": [
            ["📷"], "", "󾓯", ["camera"], 22, 17, 15, 0
        ],
        "1f4f8": [
            ["📸"], "", "", ["camera_with_flash"], 22, 18, 15, 0
        ],
        "1f4f9": [
            ["📹"], "", "󾓹", ["video_camera"], 22, 19, 15, 0
        ],
        "1f4fa": [
            ["📺"], "", "󾠜", ["tv"], 22, 20, 15, 0
        ],
        "1f4fb": [
            ["📻"], "", "󾠟", ["radio"], 22, 21, 15, 0
        ],
        "1f4fc": [
            ["📼"], "", "󾠠", ["vhs"], 22, 22, 15, 0
        ],
        "1f4fd": [
            ["📽"], "", "", ["film_projector"], 22, 23, 15, 0
        ],
        "1f4ff": [
            ["📿"], "", "", ["prayer_beads"], 22, 24, 15, 0
        ],
        "1f500": [
            ["🔀"], "", "", ["twisted_rightwards_arrows"], 22, 25, 15, 0
        ],
        "1f501": [
            ["🔁"], "", "", ["repeat"], 22, 26, 15, 0
        ],
        "1f502": [
            ["🔂"], "", "", ["repeat_one"], 22, 27, 15, 0
        ],
        "1f503": [
            ["🔃"], "", "󾮑", ["arrows_clockwise"], 22, 28, 15, 0
        ],
        "1f504": [
            ["🔄"], "", "", ["arrows_counterclockwise"], 22, 29, 15, 0
        ],
        "1f505": [
            ["🔅"], "", "", ["low_brightness"], 22, 30, 15, 0
        ],
        "1f506": [
            ["🔆"], "", "", ["high_brightness"], 22, 31, 15, 0
        ],
        "1f507": [
            ["🔇"], "", "", ["mute"], 22, 32, 15, 0
        ],
        "1f508": [
            ["🔈"], "", "", ["speaker"], 22, 33, 15, 0
        ],
        "1f509": [
            ["🔉"], "", "", ["sound"], 22, 34, 15, 0
        ],
        "1f50a": [
            ["🔊"], "", "󾠡", ["loud_sound"], 22, 35, 15, 0
        ],
        "1f50b": [
            ["🔋"], "", "󾓼", ["battery"], 22, 36, 15, 0
        ],
        "1f50c": [
            ["🔌"], "", "󾓾", ["electric_plug"], 22, 37, 15, 0
        ],
        "1f50d": [
            ["🔍"], "", "󾮅", ["mag"], 22, 38, 15, 0
        ],
        "1f50e": [
            ["🔎"], "", "󾮍", ["mag_right"], 22, 39, 15, 0
        ],
        "1f50f": [
            ["🔏"], "", "󾮐", ["lock_with_ink_pen"], 22, 40, 15, 0
        ],
        "1f510": [
            ["🔐"], "", "󾮊", ["closed_lock_with_key"], 23, 0, 15, 0
        ],
        "1f511": [
            ["🔑"], "", "󾮂", ["key"], 23, 1, 15, 0
        ],
        "1f512": [
            ["🔒"], "", "󾮆", ["lock"], 23, 2, 15, 0
        ],
        "1f513": [
            ["🔓"], "", "󾮇", ["unlock"], 23, 3, 15, 0
        ],
        "1f514": [
            ["🔔"], "", "󾓲", ["bell"], 23, 4, 15, 0
        ],
        "1f515": [
            ["🔕"], "", "", ["no_bell"], 23, 5, 15, 0
        ],
        "1f516": [
            ["🔖"], "", "󾮏", ["bookmark"], 23, 6, 15, 0
        ],
        "1f517": [
            ["🔗"], "", "󾭋", ["link"], 23, 7, 15, 0
        ],
        "1f518": [
            ["🔘"], "", "󾮌", ["radio_button"], 23, 8, 15, 0
        ],
        "1f519": [
            ["🔙"], "", "󾮎", ["back"], 23, 9, 15, 0
        ],
        "1f51a": [
            ["🔚"], "", "󾀚", ["end"], 23, 10, 15, 0
        ],
        "1f51b": [
            ["🔛"], "", "󾀙", ["on"], 23, 11, 15, 0
        ],
        "1f51c": [
            ["🔜"], "", "󾀘", ["soon"], 23, 12, 15, 0
        ],
        "1f51d": [
            ["🔝"], "", "󾭂", ["top"], 23, 13, 15, 0
        ],
        "1f51e": [
            ["🔞"], "", "󾬥", ["underage"], 23, 14, 15, 0
        ],
        "1f51f": [
            ["🔟"], "", "󾠻", ["keycap_ten"], 23, 15, 15, 0
        ],
        "1f520": [
            ["🔠"], "", "󾭼", ["capital_abcd"], 23, 16, 15, 0
        ],
        "1f521": [
            ["🔡"], "", "󾭽", ["abcd"], 23, 17, 15, 0
        ],
        "1f522": [
            ["🔢"], "", "󾭾", ["1234"], 23, 18, 15, 0
        ],
        "1f523": [
            ["🔣"], "", "󾭿", ["symbols"], 23, 19, 15, 0
        ],
        "1f524": [
            ["🔤"], "", "󾮀", ["abc"], 23, 20, 15, 0
        ],
        "1f525": [
            ["🔥"], "", "󾓶", ["fire"], 23, 21, 15, 0
        ],
        "1f526": [
            ["🔦"], "", "󾓻", ["flashlight"], 23, 22, 15, 0
        ],
        "1f527": [
            ["🔧"], "", "󾓉", ["wrench"], 23, 23, 15, 0
        ],
        "1f528": [
            ["🔨"], "", "󾓊", ["hammer"], 23, 24, 15, 0
        ],
        "1f529": [
            ["🔩"], "", "󾓋", ["nut_and_bolt"], 23, 25, 15, 0
        ],
        "1f52a": [
            ["🔪"], "", "󾓺", ["hocho", "knife"], 23, 26, 15, 0
        ],
        "1f52b": [
            ["🔫"], "", "󾓵", ["gun"], 23, 27, 15, 0
        ],
        "1f52c": [
            ["🔬"], "", "", ["microscope"], 23, 28, 15, 0
        ],
        "1f52d": [
            ["🔭"], "", "", ["telescope"], 23, 29, 15, 0
        ],
        "1f52e": [
            ["🔮"], "", "󾓷", ["crystal_ball"], 23, 30, 15, 0
        ],
        "1f52f": [
            ["🔯"], "", "󾓸", ["six_pointed_star"], 23, 31, 15, 0
        ],
        "1f530": [
            ["🔰"], "", "󾁄", ["beginner"], 23, 32, 15, 0
        ],
        "1f531": [
            ["🔱"], "", "󾓒", ["trident"], 23, 33, 15, 0
        ],
        "1f532": [
            ["🔲"], "", "󾭤", ["black_square_button"], 23, 34, 15, 0
        ],
        "1f533": [
            ["🔳"], "", "󾭧", ["white_square_button"], 23, 35, 15, 0
        ],
        "1f534": [
            ["🔴"], "", "󾭣", ["red_circle"], 23, 36, 15, 0
        ],
        "1f535": [
            ["🔵"], "", "󾭤", ["large_blue_circle"], 23, 37, 15, 0
        ],
        "1f536": [
            ["🔶"], "", "󾭳", ["large_orange_diamond"], 23, 38, 15, 0
        ],
        "1f537": [
            ["🔷"], "", "󾭴", ["large_blue_diamond"], 23, 39, 15, 0
        ],
        "1f538": [
            ["🔸"], "", "󾭵", ["small_orange_diamond"], 23, 40, 15, 0
        ],
        "1f539": [
            ["🔹"], "", "󾭶", ["small_blue_diamond"], 24, 0, 15, 0
        ],
        "1f53a": [
            ["🔺"], "", "󾭸", ["small_red_triangle"], 24, 1, 15, 0
        ],
        "1f53b": [
            ["🔻"], "", "󾭹", ["small_red_triangle_down"], 24, 2, 15, 0
        ],
        "1f53c": [
            ["🔼"], "", "󾬁", ["arrow_up_small"], 24, 3, 15, 0
        ],
        "1f53d": [
            ["🔽"], "", "󾬀", ["arrow_down_small"], 24, 4, 15, 0
        ],
        "1f549": [
            ["🕉"], "", "", ["om_symbol"], 24, 5, 15, 0
        ],
        "1f54a": [
            ["🕊"], "", "", ["dove_of_peace"], 24, 6, 15, 0
        ],
        "1f54b": [
            ["🕋"], "", "", ["kaaba"], 24, 7, 15, 0
        ],
        "1f54c": [
            ["🕌"], "", "", ["mosque"], 24, 8, 15, 0
        ],
        "1f54d": [
            ["🕍"], "", "", ["synagogue"], 24, 9, 15, 0
        ],
        "1f54e": [
            ["🕎"], "", "", ["menorah_with_nine_branches"], 24, 10, 15, 0
        ],
        "1f550": [
            ["🕐"], "", "󾀞", ["clock1"], 24, 11, 15, 0
        ],
        "1f551": [
            ["🕑"], "", "󾀟", ["clock2"], 24, 12, 15, 0
        ],
        "1f552": [
            ["🕒"], "", "󾀠", ["clock3"], 24, 13, 15, 0
        ],
        "1f553": [
            ["🕓"], "", "󾀡", ["clock4"], 24, 14, 15, 0
        ],
        "1f554": [
            ["🕔"], "", "󾀢", ["clock5"], 24, 15, 15, 0
        ],
        "1f555": [
            ["🕕"], "", "󾀣", ["clock6"], 24, 16, 15, 0
        ],
        "1f556": [
            ["🕖"], "", "󾀤", ["clock7"], 24, 17, 15, 0
        ],
        "1f557": [
            ["🕗"], "", "󾀥", ["clock8"], 24, 18, 15, 0
        ],
        "1f558": [
            ["🕘"], "", "󾀦", ["clock9"], 24, 19, 15, 0
        ],
        "1f559": [
            ["🕙"], "", "󾀧", ["clock10"], 24, 20, 15, 0
        ],
        "1f55a": [
            ["🕚"], "", "󾀨", ["clock11"], 24, 21, 15, 0
        ],
        "1f55b": [
            ["🕛"], "", "󾀩", ["clock12"], 24, 22, 15, 0
        ],
        "1f55c": [
            ["🕜"], "", "", ["clock130"], 24, 23, 15, 0
        ],
        "1f55d": [
            ["🕝"], "", "", ["clock230"], 24, 24, 15, 0
        ],
        "1f55e": [
            ["🕞"], "", "", ["clock330"], 24, 25, 15, 0
        ],
        "1f55f": [
            ["🕟"], "", "", ["clock430"], 24, 26, 15, 0
        ],
        "1f560": [
            ["🕠"], "", "", ["clock530"], 24, 27, 15, 0
        ],
        "1f561": [
            ["🕡"], "", "", ["clock630"], 24, 28, 15, 0
        ],
        "1f562": [
            ["🕢"], "", "", ["clock730"], 24, 29, 15, 0
        ],
        "1f563": [
            ["🕣"], "", "", ["clock830"], 24, 30, 15, 0
        ],
        "1f564": [
            ["🕤"], "", "", ["clock930"], 24, 31, 15, 0
        ],
        "1f565": [
            ["🕥"], "", "", ["clock1030"], 24, 32, 15, 0
        ],
        "1f566": [
            ["🕦"], "", "", ["clock1130"], 24, 33, 15, 0
        ],
        "1f567": [
            ["🕧"], "", "", ["clock1230"], 24, 34, 15, 0
        ],
        "1f56f": [
            ["🕯"], "", "", ["candle"], 24, 35, 15, 0
        ],
        "1f570": [
            ["🕰"], "", "", ["mantelpiece_clock"], 24, 36, 15, 0
        ],
        "1f573": [
            ["🕳"], "", "", ["hole"], 24, 37, 15, 0
        ],
        "1f574": [
            ["🕴"], "", "", ["man_in_business_suit_levitating"], 24, 38, 15, 0
        ],
        "1f575": [
            ["🕵"], "", "", ["sleuth_or_spy"], 24, 39, 15, 0
        ],
        "1f576": [
            ["🕶"], "", "", ["dark_sunglasses"], 25, 4, 15, 0
        ],
        "1f577": [
            ["🕷"], "", "", ["spider"], 25, 5, 15, 0
        ],
        "1f578": [
            ["🕸"], "", "", ["spider_web"], 25, 6, 15, 0
        ],
        "1f579": [
            ["🕹"], "", "", ["joystick"], 25, 7, 15, 0
        ],
        "1f587": [
            ["🖇"], "", "", ["linked_paperclips"], 25, 8, 15, 0
        ],
        "1f58a": [
            ["🖊"], "", "", ["lower_left_ballpoint_pen"], 25, 9, 15, 0
        ],
        "1f58b": [
            ["🖋"], "", "", ["lower_left_fountain_pen"], 25, 10, 15, 0
        ],
        "1f58c": [
            ["🖌"], "", "", ["lower_left_paintbrush"], 25, 11, 15, 0
        ],
        "1f58d": [
            ["🖍"], "", "", ["lower_left_crayon"], 25, 12, 15, 0
        ],
        "1f590": [
            ["🖐"], "", "", ["raised_hand_with_fingers_splayed"], 25, 13, 15, 0
        ],
        "1f595": [
            ["🖕"], "", "", ["middle_finger", "reversed_hand_with_middle_finger_extended"], 25, 19, 15, 0
        ],
        "1f596": [
            ["🖖"], "", "", ["spock-hand"], 25, 25, 15, 0
        ],
        "1f5a5": [
            ["🖥"], "", "", ["desktop_computer"], 25, 31, 15, 0
        ],
        "1f5a8": [
            ["🖨"], "", "", ["printer"], 25, 32, 15, 0
        ],
        "1f5b1": [
            ["🖱"], "", "", ["three_button_mouse"], 25, 33, 15, 0
        ],
        "1f5b2": [
            ["🖲"], "", "", ["trackball"], 25, 34, 15, 0
        ],
        "1f5bc": [
            ["🖼"], "", "", ["frame_with_picture"], 25, 35, 15, 0
        ],
        "1f5c2": [
            ["🗂"], "", "", ["card_index_dividers"], 25, 36, 15, 0
        ],
        "1f5c3": [
            ["🗃"], "", "", ["card_file_box"], 25, 37, 15, 0
        ],
        "1f5c4": [
            ["🗄"], "", "", ["file_cabinet"], 25, 38, 15, 0
        ],
        "1f5d1": [
            ["🗑"], "", "", ["wastebasket"], 25, 39, 15, 0
        ],
        "1f5d2": [
            ["🗒"], "", "", ["spiral_note_pad"], 25, 40, 15, 0
        ],
        "1f5d3": [
            ["🗓"], "", "", ["spiral_calendar_pad"], 26, 0, 15, 0
        ],
        "1f5dc": [
            ["🗜"], "", "", ["compression"], 26, 1, 15, 0
        ],
        "1f5dd": [
            ["🗝"], "", "", ["old_key"], 26, 2, 15, 0
        ],
        "1f5de": [
            ["🗞"], "", "", ["rolled_up_newspaper"], 26, 3, 15, 0
        ],
        "1f5e1": [
            ["🗡"], "", "", ["dagger_knife"], 26, 4, 15, 0
        ],
        "1f5e3": [
            ["🗣"], "", "", ["speaking_head_in_silhouette"], 26, 5, 15, 0
        ],
        "1f5e8": [
            ["🗨"], "", "", ["left_speech_bubble"], 26, 6, 7, 0
        ],
        "1f5ef": [
            ["🗯"], "", "", ["right_anger_bubble"], 26, 7, 15, 0
        ],
        "1f5f3": [
            ["🗳"], "", "", ["ballot_box_with_ballot"], 26, 8, 15, 0
        ],
        "1f5fa": [
            ["🗺"], "", "", ["world_map"], 26, 9, 15, 0
        ],
        "1f5fb": [
            ["🗻"], "", "󾓃", ["mount_fuji"], 26, 10, 15, 0
        ],
        "1f5fc": [
            ["🗼"], "", "󾓄", ["tokyo_tower"], 26, 11, 15, 0
        ],
        "1f5fd": [
            ["🗽"], "", "󾓆", ["statue_of_liberty"], 26, 12, 15, 0
        ],
        "1f5fe": [
            ["🗾"], "", "󾓇", ["japan"], 26, 13, 15, 0
        ],
        "1f5ff": [
            ["🗿"], "", "󾓈", ["moyai"], 26, 14, 15, 0
        ],
        "1f600": [
            ["😀"], "", "", ["grinning"], 26, 15, 15, 0, ":D"
        ],
        "1f601": [
            ["😁"], "", "󾌳", ["grin"], 26, 16, 15, 0
        ],
        "1f602": [
            ["😂"], "", "󾌴", ["joy"], 26, 17, 15, 0
        ],
        "1f603": [
            ["😃"], "", "󾌰", ["smiley"], 26, 18, 15, 0, ":)"
        ],
        "1f604": [
            ["😄"], "", "󾌸", ["smile"], 26, 19, 15, 0, ":)"
        ],
        "1f605": [
            ["😅"], "", "󾌱", ["sweat_smile"], 26, 20, 15, 0
        ],
        "1f606": [
            ["😆"], "", "󾌲", ["laughing", "satisfied"], 26, 21, 15, 0
        ],
        "1f607": [
            ["😇"], "", "", ["innocent"], 26, 22, 15, 0
        ],
        "1f608": [
            ["😈"], "", "", ["smiling_imp"], 26, 23, 15, 0
        ],
        "1f609": [
            ["😉"], "", "󾍇", ["wink"], 26, 24, 15, 0, ";)"
        ],
        "1f60a": [
            ["😊"], "", "󾌵", ["blush"], 26, 25, 15, 0, ":)"
        ],
        "1f60b": [
            ["😋"], "", "󾌫", ["yum"], 26, 26, 15, 0
        ],
        "1f60c": [
            ["😌"], "", "󾌾", ["relieved"], 26, 27, 15, 0
        ],
        "1f60d": [
            ["😍"], "", "󾌧", ["heart_eyes"], 26, 28, 15, 0
        ],
        "1f60e": [
            ["😎"], "", "", ["sunglasses"], 26, 29, 15, 0
        ],
        "1f60f": [
            ["😏"], "", "󾍃", ["smirk"], 26, 30, 15, 0
        ],
        "1f610": [
            ["😐"], "", "", ["neutral_face"], 26, 31, 15, 0
        ],
        "1f611": [
            ["😑"], "", "", ["expressionless"], 26, 32, 15, 0
        ],
        "1f612": [
            ["😒"], "", "󾌦", ["unamused"], 26, 33, 15, 0, ":("
        ],
        "1f613": [
            ["😓"], "", "󾍄", ["sweat"], 26, 34, 15, 0
        ],
        "1f614": [
            ["😔"], "", "󾍀", ["pensive"], 26, 35, 15, 0
        ],
        "1f615": [
            ["😕"], "", "", ["confused"], 26, 36, 15, 0
        ],
        "1f616": [
            ["😖"], "", "󾌿", ["confounded"], 26, 37, 15, 0
        ],
        "1f617": [
            ["😗"], "", "", ["kissing"], 26, 38, 15, 0
        ],
        "1f618": [
            ["😘"], "", "󾌬", ["kissing_heart"], 26, 39, 15, 0
        ],
        "1f619": [
            ["😙"], "", "", ["kissing_smiling_eyes"], 26, 40, 15, 0
        ],
        "1f61a": [
            ["😚"], "", "󾌭", ["kissing_closed_eyes"], 27, 0, 15, 0
        ],
        "1f61b": [
            ["😛"], "", "", ["stuck_out_tongue"], 27, 1, 15, 0, ":p"
        ],
        "1f61c": [
            ["😜"], "", "󾌩", ["stuck_out_tongue_winking_eye"], 27, 2, 15, 0, ";p"
        ],
        "1f61d": [
            ["😝"], "", "󾌪", ["stuck_out_tongue_closed_eyes"], 27, 3, 15, 0
        ],
        "1f61e": [
            ["😞"], "", "󾌣", ["disappointed"], 27, 4, 15, 0, ":("
        ],
        "1f61f": [
            ["😟"], "", "", ["worried"], 27, 5, 15, 0
        ],
        "1f620": [
            ["😠"], "", "󾌠", ["angry"], 27, 6, 15, 0
        ],
        "1f621": [
            ["😡"], "", "󾌽", ["rage"], 27, 7, 15, 0
        ],
        "1f622": [
            ["😢"], "", "󾌹", ["cry"], 27, 8, 15, 0, ":'("
        ],
        "1f623": [
            ["😣"], "", "󾌼", ["persevere"], 27, 9, 15, 0
        ],
        "1f624": [
            ["😤"], "", "󾌨", ["triumph"], 27, 10, 15, 0
        ],
        "1f625": [
            ["😥"], "", "󾍅", ["disappointed_relieved"], 27, 11, 15, 0
        ],
        "1f626": [
            ["😦"], "", "", ["frowning"], 27, 12, 15, 0
        ],
        "1f627": [
            ["😧"], "", "", ["anguished"], 27, 13, 15, 0
        ],
        "1f628": [
            ["😨"], "", "󾌻", ["fearful"], 27, 14, 15, 0
        ],
        "1f629": [
            ["😩"], "", "󾌡", ["weary"], 27, 15, 15, 0
        ],
        "1f62a": [
            ["😪"], "", "󾍂", ["sleepy"], 27, 16, 15, 0
        ],
        "1f62b": [
            ["😫"], "", "󾍆", ["tired_face"], 27, 17, 15, 0
        ],
        "1f62c": [
            ["😬"], "", "", ["grimacing"], 27, 18, 15, 0
        ],
        "1f62d": [
            ["😭"], "", "󾌺", ["sob"], 27, 19, 15, 0, ":'("
        ],
        "1f62e": [
            ["😮"], "", "", ["open_mouth"], 27, 20, 15, 0
        ],
        "1f62f": [
            ["😯"], "", "", ["hushed"], 27, 21, 15, 0
        ],
        "1f630": [
            ["😰"], "", "󾌥", ["cold_sweat"], 27, 22, 15, 0
        ],
        "1f631": [
            ["😱"], "", "󾍁", ["scream"], 27, 23, 15, 0
        ],
        "1f632": [
            ["😲"], "", "󾌢", ["astonished"], 27, 24, 15, 0
        ],
        "1f633": [
            ["😳"], "", "󾌯", ["flushed"], 27, 25, 15, 0
        ],
        "1f634": [
            ["😴"], "", "", ["sleeping"], 27, 26, 15, 0
        ],
        "1f635": [
            ["😵"], "", "󾌤", ["dizzy_face"], 27, 27, 15, 0
        ],
        "1f636": [
            ["😶"], "", "", ["no_mouth"], 27, 28, 15, 0
        ],
        "1f637": [
            ["😷"], "", "󾌮", ["mask"], 27, 29, 15, 0
        ],
        "1f638": [
            ["😸"], "", "󾍉", ["smile_cat"], 27, 30, 15, 0
        ],
        "1f639": [
            ["😹"], "", "󾍊", ["joy_cat"], 27, 31, 15, 0
        ],
        "1f63a": [
            ["😺"], "", "󾍈", ["smiley_cat"], 27, 32, 15, 0
        ],
        "1f63b": [
            ["😻"], "", "󾍌", ["heart_eyes_cat"], 27, 33, 15, 0
        ],
        "1f63c": [
            ["😼"], "", "󾍏", ["smirk_cat"], 27, 34, 15, 0
        ],
        "1f63d": [
            ["😽"], "", "󾍋", ["kissing_cat"], 27, 35, 15, 0
        ],
        "1f63e": [
            ["😾"], "", "󾍎", ["pouting_cat"], 27, 36, 15, 0
        ],
        "1f63f": [
            ["😿"], "", "󾍍", ["crying_cat_face"], 27, 37, 15, 0
        ],
        "1f640": [
            ["🙀"], "", "󾍐", ["scream_cat"], 27, 38, 15, 0
        ],
        "1f641": [
            ["🙁"], "", "", ["slightly_frowning_face"], 27, 39, 15, 0
        ],
        "1f642": [
            ["🙂"], "", "", ["slightly_smiling_face"], 27, 40, 15, 0
        ],
        "1f642": [
            ["🙂"], "", "", ["simple_smile"], 27, 40, 15, 0
        ],
        "1f643": [
            ["🙃"], "", "", ["upside_down_face"], 28, 0, 15, 0
        ],
        "1f644": [
            ["🙄"], "", "", ["face_with_rolling_eyes"], 28, 1, 15, 0
        ],
        "1f645": [
            ["🙅"], "", "󾍑", ["no_good"], 28, 2, 15, 0
        ],
        "1f646": [
            ["🙆"], "", "󾍒", ["ok_woman"], 28, 8, 15, 0
        ],
        "1f647": [
            ["🙇"], "", "󾍓", ["bow"], 28, 14, 15, 0
        ],
        "1f648": [
            ["🙈"], "", "󾍔", ["see_no_evil"], 28, 20, 15, 0
        ],
        "1f649": [
            ["🙉"], "", "󾍖", ["hear_no_evil"], 28, 21, 15, 0
        ],
        "1f64a": [
            ["🙊"], "", "󾍕", ["speak_no_evil"], 28, 22, 15, 0
        ],
        "1f64b": [
            ["🙋"], "", "󾍗", ["raising_hand"], 28, 23, 15, 0
        ],
        "1f64c": [
            ["🙌"], "", "󾍘", ["raised_hands"], 28, 29, 15, 0
        ],
        "1f64d": [
            ["🙍"], "", "󾍙", ["person_frowning"], 28, 35, 15, 0
        ],
        "1f64e": [
            ["🙎"], "", "󾍚", ["person_with_pouting_face"], 29, 0, 15, 0
        ],
        "1f64f": [
            ["🙏"], "", "󾍛", ["pray"], 29, 6, 15, 0
        ],
        "1f680": [
            ["🚀"], "", "󾟭", ["rocket"], 29, 12, 15, 0
        ],
        "1f681": [
            ["🚁"], "", "", ["helicopter"], 29, 13, 15, 0
        ],
        "1f682": [
            ["🚂"], "", "", ["steam_locomotive"], 29, 14, 15, 0
        ],
        "1f683": [
            ["🚃"], "", "󾟟", ["railway_car"], 29, 15, 15, 0
        ],
        "1f684": [
            ["🚄"], "", "󾟢", ["bullettrain_side"], 29, 16, 15, 0
        ],
        "1f685": [
            ["🚅"], "", "󾟣", ["bullettrain_front"], 29, 17, 15, 0
        ],
        "1f686": [
            ["🚆"], "", "", ["train2"], 29, 18, 15, 0
        ],
        "1f687": [
            ["🚇"], "", "󾟠", ["metro"], 29, 19, 15, 0
        ],
        "1f688": [
            ["🚈"], "", "", ["light_rail"], 29, 20, 15, 0
        ],
        "1f689": [
            ["🚉"], "", "󾟬", ["station"], 29, 21, 15, 0
        ],
        "1f68a": [
            ["🚊"], "", "", ["tram"], 29, 22, 15, 0
        ],
        "1f68b": [
            ["🚋"], "", "", ["train"], 29, 23, 15, 0
        ],
        "1f68c": [
            ["🚌"], "", "󾟦", ["bus"], 29, 24, 15, 0
        ],
        "1f68d": [
            ["🚍"], "", "", ["oncoming_bus"], 29, 25, 15, 0
        ],
        "1f68e": [
            ["🚎"], "", "", ["trolleybus"], 29, 26, 15, 0
        ],
        "1f68f": [
            ["🚏"], "", "󾟧", ["busstop"], 29, 27, 15, 0
        ],
        "1f690": [
            ["🚐"], "", "", ["minibus"], 29, 28, 15, 0
        ],
        "1f691": [
            ["🚑"], "", "󾟳", ["ambulance"], 29, 29, 15, 0
        ],
        "1f692": [
            ["🚒"], "", "󾟲", ["fire_engine"], 29, 30, 15, 0
        ],
        "1f693": [
            ["🚓"], "", "󾟴", ["police_car"], 29, 31, 15, 0
        ],
        "1f694": [
            ["🚔"], "", "", ["oncoming_police_car"], 29, 32, 15, 0
        ],
        "1f695": [
            ["🚕"], "", "󾟯", ["taxi"], 29, 33, 15, 0
        ],
        "1f696": [
            ["🚖"], "", "", ["oncoming_taxi"], 29, 34, 15, 0
        ],
        "1f697": [
            ["🚗"], "", "󾟤", ["car", "red_car"], 29, 35, 15, 0
        ],
        "1f698": [
            ["🚘"], "", "", ["oncoming_automobile"], 29, 36, 15, 0
        ],
        "1f699": [
            ["🚙"], "", "󾟥", ["blue_car"], 29, 37, 15, 0
        ],
        "1f69a": [
            ["🚚"], "", "󾟱", ["truck"], 29, 38, 15, 0
        ],
        "1f69b": [
            ["🚛"], "", "", ["articulated_lorry"], 29, 39, 15, 0
        ],
        "1f69c": [
            ["🚜"], "", "", ["tractor"], 29, 40, 15, 0
        ],
        "1f69d": [
            ["🚝"], "", "", ["monorail"], 30, 0, 15, 0
        ],
        "1f69e": [
            ["🚞"], "", "", ["mountain_railway"], 30, 1, 15, 0
        ],
        "1f69f": [
            ["🚟"], "", "", ["suspension_railway"], 30, 2, 15, 0
        ],
        "1f6a0": [
            ["🚠"], "", "", ["mountain_cableway"], 30, 3, 15, 0
        ],
        "1f6a1": [
            ["🚡"], "", "", ["aerial_tramway"], 30, 4, 15, 0
        ],
        "1f6a2": [
            ["🚢"], "", "󾟨", ["ship"], 30, 5, 15, 0
        ],
        "1f6a3": [
            ["🚣"], "", "", ["rowboat"], 30, 6, 15, 0
        ],
        "1f6a4": [
            ["🚤"], "", "󾟮", ["speedboat"], 30, 12, 15, 0
        ],
        "1f6a5": [
            ["🚥"], "", "󾟷", ["traffic_light"], 30, 13, 15, 0
        ],
        "1f6a6": [
            ["🚦"], "", "", ["vertical_traffic_light"], 30, 14, 15, 0
        ],
        "1f6a7": [
            ["🚧"], "", "󾟸", ["construction"], 30, 15, 15, 0
        ],
        "1f6a8": [
            ["🚨"], "", "󾟹", ["rotating_light"], 30, 16, 15, 0
        ],
        "1f6a9": [
            ["🚩"], "", "󾬢", ["triangular_flag_on_post"], 30, 17, 15, 0
        ],
        "1f6aa": [
            ["🚪"], "", "󾓳", ["door"], 30, 18, 15, 0
        ],
        "1f6ab": [
            ["🚫"], "", "󾭈", ["no_entry_sign"], 30, 19, 15, 0
        ],
        "1f6ac": [
            ["🚬"], "", "󾬞", ["smoking"], 30, 20, 15, 0
        ],
        "1f6ad": [
            ["🚭"], "", "󾬟", ["no_smoking"], 30, 21, 15, 0
        ],
        "1f6ae": [
            ["🚮"], "", "", ["put_litter_in_its_place"], 30, 22, 15, 0
        ],
        "1f6af": [
            ["🚯"], "", "", ["do_not_litter"], 30, 23, 15, 0
        ],
        "1f6b0": [
            ["🚰"], "", "", ["potable_water"], 30, 24, 15, 0
        ],
        "1f6b1": [
            ["🚱"], "", "", ["non-potable_water"], 30, 25, 15, 0
        ],
        "1f6b2": [
            ["🚲"], "", "󾟫", ["bike"], 30, 26, 15, 0
        ],
        "1f6b3": [
            ["🚳"], "", "", ["no_bicycles"], 30, 27, 15, 0
        ],
        "1f6b4": [
            ["🚴"], "", "", ["bicyclist"], 30, 28, 15, 0
        ],
        "1f6b5": [
            ["🚵"], "", "", ["mountain_bicyclist"], 30, 34, 15, 0
        ],
        "1f6b6": [
            ["🚶"], "", "󾟰", ["walking"], 30, 40, 15, 0
        ],
        "1f6b7": [
            ["🚷"], "", "", ["no_pedestrians"], 31, 5, 15, 0
        ],
        "1f6b8": [
            ["🚸"], "", "", ["children_crossing"], 31, 6, 15, 0
        ],
        "1f6b9": [
            ["🚹"], "", "󾬳", ["mens"], 31, 7, 15, 0
        ],
        "1f6ba": [
            ["🚺"], "", "󾬴", ["womens"], 31, 8, 15, 0
        ],
        "1f6bb": [
            ["🚻"], "", "󾔆", ["restroom"], 31, 9, 15, 0
        ],
        "1f6bc": [
            ["🚼"], "", "󾬵", ["baby_symbol"], 31, 10, 15, 0
        ],
        "1f6bd": [
            ["🚽"], "", "󾔇", ["toilet"], 31, 11, 15, 0
        ],
        "1f6be": [
            ["🚾"], "", "󾔈", ["wc"], 31, 12, 15, 0
        ],
        "1f6bf": [
            ["🚿"], "", "", ["shower"], 31, 13, 15, 0
        ],
        "1f6c0": [
            ["🛀"], "", "󾔅", ["bath"], 31, 14, 15, 0
        ],
        "1f6c1": [
            ["🛁"], "", "", ["bathtub"], 31, 20, 15, 0
        ],
        "1f6c2": [
            ["🛂"], "", "", ["passport_control"], 31, 21, 15, 0
        ],
        "1f6c3": [
            ["🛃"], "", "", ["customs"], 31, 22, 15, 0
        ],
        "1f6c4": [
            ["🛄"], "", "", ["baggage_claim"], 31, 23, 15, 0
        ],
        "1f6c5": [
            ["🛅"], "", "", ["left_luggage"], 31, 24, 15, 0
        ],
        "1f6cb": [
            ["🛋"], "", "", ["couch_and_lamp"], 31, 25, 15, 0
        ],
        "1f6cc": [
            ["🛌"], "", "", ["sleeping_accommodation"], 31, 26, 15, 0
        ],
        "1f6cd": [
            ["🛍"], "", "", ["shopping_bags"], 31, 27, 15, 0
        ],
        "1f6ce": [
            ["🛎"], "", "", ["bellhop_bell"], 31, 28, 15, 0
        ],
        "1f6cf": [
            ["🛏"], "", "", ["bed"], 31, 29, 15, 0
        ],
        "1f6d0": [
            ["🛐"], "", "", ["place_of_worship"], 31, 30, 15, 0
        ],
        "1f6e0": [
            ["🛠"], "", "", ["hammer_and_wrench"], 31, 31, 15, 0
        ],
        "1f6e1": [
            ["🛡"], "", "", ["shield"], 31, 32, 15, 0
        ],
        "1f6e2": [
            ["🛢"], "", "", ["oil_drum"], 31, 33, 15, 0
        ],
        "1f6e3": [
            ["🛣"], "", "", ["motorway"], 31, 34, 15, 0
        ],
        "1f6e4": [
            ["🛤"], "", "", ["railway_track"], 31, 35, 15, 0
        ],
        "1f6e5": [
            ["🛥"], "", "", ["motor_boat"], 31, 36, 15, 0
        ],
        "1f6e9": [
            ["🛩"], "", "", ["small_airplane"], 31, 37, 15, 0
        ],
        "1f6eb": [
            ["🛫"], "", "", ["airplane_departure"], 31, 38, 15, 0
        ],
        "1f6ec": [
            ["🛬"], "", "", ["airplane_arriving"], 31, 39, 15, 0
        ],
        "1f6f0": [
            ["🛰"], "", "", ["satellite"], 31, 40, 15, 0
        ],
        "1f6f3": [
            ["🛳"], "", "", ["passenger_ship"], 32, 0, 15, 0
        ],
        "1f910": [
            ["🤐"], "", "", ["zipper_mouth_face"], 32, 1, 15, 0
        ],
        "1f911": [
            ["🤑"], "", "", ["money_mouth_face"], 32, 2, 15, 0
        ],
        "1f912": [
            ["🤒"], "", "", ["face_with_thermometer"], 32, 3, 15, 0
        ],
        "1f913": [
            ["🤓"], "", "", ["nerd_face"], 32, 4, 15, 0
        ],
        "1f914": [
            ["🤔"], "", "", ["thinking_face"], 32, 5, 15, 0
        ],
        "1f915": [
            ["🤕"], "", "", ["face_with_head_bandage"], 32, 6, 15, 0
        ],
        "1f916": [
            ["🤖"], "", "", ["robot_face"], 32, 7, 15, 0
        ],
        "1f917": [
            ["🤗"], "", "", ["hugging_face"], 32, 8, 15, 0
        ],
        "1f918": [
            ["🤘"], "", "", ["the_horns", "sign_of_the_horns"], 32, 9, 15, 0
        ],
        "1f980": [
            ["🦀"], "", "", ["crab"], 32, 15, 15, 0
        ],
        "1f981": [
            ["🦁"], "", "", ["lion_face"], 32, 16, 15, 0
        ],
        "1f982": [
            ["🦂"], "", "", ["scorpion"], 32, 17, 15, 0
        ],
        "1f983": [
            ["🦃"], "", "", ["turkey"], 32, 18, 15, 0
        ],
        "1f984": [
            ["🦄"], "", "", ["unicorn_face"], 32, 19, 15, 0
        ],
        "1f9c0": [
            ["🧀"], "", "", ["cheese_wedge"], 32, 20, 15, 0
        ],
        "0023-20e3": [
            ["#️⃣", "#⃣"], "", "󾠬", ["hash"], 32, 21, 15, 0
        ],
        "002a-20e3": [
            ["*⃣"], "", "", ["keycap_star"], 32, 22, 15, 0
        ],
        "0030-20e3": [
            ["0️⃣", "0⃣"], "", "󾠷", ["zero"], 32, 23, 15, 0
        ],
        "0031-20e3": [
            ["1️⃣", "1⃣"], "", "󾠮", ["one"], 32, 24, 15, 0
        ],
        "0032-20e3": [
            ["2️⃣", "2⃣"], "", "󾠯", ["two"], 32, 25, 15, 0
        ],
        "0033-20e3": [
            ["3️⃣", "3⃣"], "", "󾠰", ["three"], 32, 26, 15, 0
        ],
        "0034-20e3": [
            ["4️⃣", "4⃣"], "", "󾠱", ["four"], 32, 27, 15, 0
        ],
        "0035-20e3": [
            ["5️⃣", "5⃣"], "", "󾠲", ["five"], 32, 28, 15, 0
        ],
        "0036-20e3": [
            ["6️⃣", "6⃣"], "", "󾠳", ["six"], 32, 29, 15, 0
        ],
        "0037-20e3": [
            ["7️⃣", "7⃣"], "", "󾠴", ["seven"], 32, 30, 15, 0
        ],
        "0038-20e3": [
            ["8️⃣", "8⃣"], "", "󾠵", ["eight"], 32, 31, 15, 0
        ],
        "0039-20e3": [
            ["9️⃣", "9⃣"], "", "󾠶", ["nine"], 32, 32, 15, 0
        ],
        "1f1e6-1f1e8": [
            ["🇦🇨"], "", "", ["flag-ac"], 32, 33, 15, 0
        ],
        "1f1e6-1f1e9": [
            ["🇦🇩"], "", "", ["flag-ad"], 32, 34, 15, 0
        ],
        "1f1e6-1f1ea": [
            ["🇦🇪"], "", "", ["flag-ae"], 32, 35, 15, 0
        ],
        "1f1e6-1f1eb": [
            ["🇦🇫"], "", "", ["flag-af"], 32, 36, 15, 0
        ],
        "1f1e6-1f1ec": [
            ["🇦🇬"], "", "", ["flag-ag"], 32, 37, 15, 0
        ],
        "1f1e6-1f1ee": [
            ["🇦🇮"], "", "", ["flag-ai"], 32, 38, 15, 0
        ],
        "1f1e6-1f1f1": [
            ["🇦🇱"], "", "", ["flag-al"], 32, 39, 15, 0
        ],
        "1f1e6-1f1f2": [
            ["🇦🇲"], "", "", ["flag-am"], 32, 40, 15, 0
        ],
        "1f1e6-1f1f4": [
            ["🇦🇴"], "", "", ["flag-ao"], 33, 0, 15, 0
        ],
        "1f1e6-1f1f6": [
            ["🇦🇶"], "", "", ["flag-aq"], 33, 1, 15, 0
        ],
        "1f1e6-1f1f7": [
            ["🇦🇷"], "", "", ["flag-ar"], 33, 2, 15, 0
        ],
        "1f1e6-1f1f8": [
            ["🇦🇸"], "", "", ["flag-as"], 33, 3, 15, 0
        ],
        "1f1e6-1f1f9": [
            ["🇦🇹"], "", "", ["flag-at"], 33, 4, 15, 0
        ],
        "1f1e6-1f1fa": [
            ["🇦🇺"], "", "", ["flag-au"], 33, 5, 15, 0
        ],
        "1f1e6-1f1fc": [
            ["🇦🇼"], "", "", ["flag-aw"], 33, 6, 15, 0
        ],
        "1f1e6-1f1fd": [
            ["🇦🇽"], "", "", ["flag-ax"], 33, 7, 15, 0
        ],
        "1f1e6-1f1ff": [
            ["🇦🇿"], "", "", ["flag-az"], 33, 8, 15, 0
        ],
        "1f1e7-1f1e6": [
            ["🇧🇦"], "", "", ["flag-ba"], 33, 9, 15, 0
        ],
        "1f1e7-1f1e7": [
            ["🇧🇧"], "", "", ["flag-bb"], 33, 10, 15, 0
        ],
        "1f1e7-1f1e9": [
            ["🇧🇩"], "", "", ["flag-bd"], 33, 11, 15, 0
        ],
        "1f1e7-1f1ea": [
            ["🇧🇪"], "", "", ["flag-be"], 33, 12, 15, 0
        ],
        "1f1e7-1f1eb": [
            ["🇧🇫"], "", "", ["flag-bf"], 33, 13, 15, 0
        ],
        "1f1e7-1f1ec": [
            ["🇧🇬"], "", "", ["flag-bg"], 33, 14, 15, 0
        ],
        "1f1e7-1f1ed": [
            ["🇧🇭"], "", "", ["flag-bh"], 33, 15, 15, 0
        ],
        "1f1e7-1f1ee": [
            ["🇧🇮"], "", "", ["flag-bi"], 33, 16, 15, 0
        ],
        "1f1e7-1f1ef": [
            ["🇧🇯"], "", "", ["flag-bj"], 33, 17, 15, 0
        ],
        "1f1e7-1f1f1": [
            ["🇧🇱"], "", "", ["flag-bl"], 33, 18, 13, 0
        ],
        "1f1e7-1f1f2": [
            ["🇧🇲"], "", "", ["flag-bm"], 33, 19, 15, 0
        ],
        "1f1e7-1f1f3": [
            ["🇧🇳"], "", "", ["flag-bn"], 33, 20, 15, 0
        ],
        "1f1e7-1f1f4": [
            ["🇧🇴"], "", "", ["flag-bo"], 33, 21, 15, 0
        ],
        "1f1e7-1f1f6": [
            ["🇧🇶"], "", "", ["flag-bq"], 33, 22, 13, 0
        ],
        "1f1e7-1f1f7": [
            ["🇧🇷"], "", "", ["flag-br"], 33, 23, 15, 0
        ],
        "1f1e7-1f1f8": [
            ["🇧🇸"], "", "", ["flag-bs"], 33, 24, 15, 0
        ],
        "1f1e7-1f1f9": [
            ["🇧🇹"], "", "", ["flag-bt"], 33, 25, 15, 0
        ],
        "1f1e7-1f1fb": [
            ["🇧🇻"], "", "", ["flag-bv"], 33, 26, 13, 0
        ],
        "1f1e7-1f1fc": [
            ["🇧🇼"], "", "", ["flag-bw"], 33, 27, 15, 0
        ],
        "1f1e7-1f1fe": [
            ["🇧🇾"], "", "", ["flag-by"], 33, 28, 15, 0
        ],
        "1f1e7-1f1ff": [
            ["🇧🇿"], "", "", ["flag-bz"], 33, 29, 15, 0
        ],
        "1f1e8-1f1e6": [
            ["🇨🇦"], "", "", ["flag-ca"], 33, 30, 15, 0
        ],
        "1f1e8-1f1e8": [
            ["🇨🇨"], "", "", ["flag-cc"], 33, 31, 15, 0
        ],
        "1f1e8-1f1e9": [
            ["🇨🇩"], "", "", ["flag-cd"], 33, 32, 15, 0
        ],
        "1f1e8-1f1eb": [
            ["🇨🇫"], "", "", ["flag-cf"], 33, 33, 15, 0
        ],
        "1f1e8-1f1ec": [
            ["🇨🇬"], "", "", ["flag-cg"], 33, 34, 15, 0
        ],
        "1f1e8-1f1ed": [
            ["🇨🇭"], "", "", ["flag-ch"], 33, 35, 15, 0
        ],
        "1f1e8-1f1ee": [
            ["🇨🇮"], "", "", ["flag-ci"], 33, 36, 15, 0
        ],
        "1f1e8-1f1f0": [
            ["🇨🇰"], "", "", ["flag-ck"], 33, 37, 15, 0
        ],
        "1f1e8-1f1f1": [
            ["🇨🇱"], "", "", ["flag-cl"], 33, 38, 15, 0
        ],
        "1f1e8-1f1f2": [
            ["🇨🇲"], "", "", ["flag-cm"], 33, 39, 15, 0
        ],
        "1f1e8-1f1f3": [
            ["🇨🇳"], "", "󾓭", ["flag-cn", "cn"], 33, 40, 15, 0
        ],
        "1f1e8-1f1f4": [
            ["🇨🇴"], "", "", ["flag-co"], 34, 0, 15, 0
        ],
        "1f1e8-1f1f5": [
            ["🇨🇵"], "", "", ["flag-cp"], 34, 1, 13, 0
        ],
        "1f1e8-1f1f7": [
            ["🇨🇷"], "", "", ["flag-cr"], 34, 2, 15, 0
        ],
        "1f1e8-1f1fa": [
            ["🇨🇺"], "", "", ["flag-cu"], 34, 3, 15, 0
        ],
        "1f1e8-1f1fb": [
            ["🇨🇻"], "", "", ["flag-cv"], 34, 4, 15, 0
        ],
        "1f1e8-1f1fc": [
            ["🇨🇼"], "", "", ["flag-cw"], 34, 5, 15, 0
        ],
        "1f1e8-1f1fd": [
            ["🇨🇽"], "", "", ["flag-cx"], 34, 6, 15, 0
        ],
        "1f1e8-1f1fe": [
            ["🇨🇾"], "", "", ["flag-cy"], 34, 7, 15, 0
        ],
        "1f1e8-1f1ff": [
            ["🇨🇿"], "", "", ["flag-cz"], 34, 8, 15, 0
        ],
        "1f1e9-1f1ea": [
            ["🇩🇪"], "", "󾓨", ["flag-de", "de"], 34, 9, 15, 0
        ],
        "1f1e9-1f1ec": [
            ["🇩🇬"], "", "", ["flag-dg"], 34, 10, 13, 0
        ],
        "1f1e9-1f1ef": [
            ["🇩🇯"], "", "", ["flag-dj"], 34, 11, 15, 0
        ],
        "1f1e9-1f1f0": [
            ["🇩🇰"], "", "", ["flag-dk"], 34, 12, 15, 0
        ],
        "1f1e9-1f1f2": [
            ["🇩🇲"], "", "", ["flag-dm"], 34, 13, 15, 0
        ],
        "1f1e9-1f1f4": [
            ["🇩🇴"], "", "", ["flag-do"], 34, 14, 15, 0
        ],
        "1f1e9-1f1ff": [
            ["🇩🇿"], "", "", ["flag-dz"], 34, 15, 15, 0
        ],
        "1f1ea-1f1e6": [
            ["🇪🇦"], "", "", ["flag-ea"], 34, 16, 13, 0
        ],
        "1f1ea-1f1e8": [
            ["🇪🇨"], "", "", ["flag-ec"], 34, 17, 15, 0
        ],
        "1f1ea-1f1ea": [
            ["🇪🇪"], "", "", ["flag-ee"], 34, 18, 15, 0
        ],
        "1f1ea-1f1ec": [
            ["🇪🇬"], "", "", ["flag-eg"], 34, 19, 15, 0
        ],
        "1f1ea-1f1ed": [
            ["🇪🇭"], "", "", ["flag-eh"], 34, 20, 13, 0
        ],
        "1f1ea-1f1f7": [
            ["🇪🇷"], "", "", ["flag-er"], 34, 21, 15, 0
        ],
        "1f1ea-1f1f8": [
            ["🇪🇸"], "", "󾓫", ["flag-es", "es"], 34, 22, 15, 0
        ],
        "1f1ea-1f1f9": [
            ["🇪🇹"], "", "", ["flag-et"], 34, 23, 15, 0
        ],
        "1f1ea-1f1fa": [
            ["🇪🇺"], "", "", ["flag-eu"], 34, 24, 15, 0
        ],
        "1f1eb-1f1ee": [
            ["🇫🇮"], "", "", ["flag-fi"], 34, 25, 15, 0
        ],
        "1f1eb-1f1ef": [
            ["🇫🇯"], "", "", ["flag-fj"], 34, 26, 15, 0
        ],
        "1f1eb-1f1f0": [
            ["🇫🇰"], "", "", ["flag-fk"], 34, 27, 13, 0
        ],
        "1f1eb-1f1f2": [
            ["🇫🇲"], "", "", ["flag-fm"], 34, 28, 15, 0
        ],
        "1f1eb-1f1f4": [
            ["🇫🇴"], "", "", ["flag-fo"], 34, 29, 15, 0
        ],
        "1f1eb-1f1f7": [
            ["🇫🇷"], "", "󾓧", ["flag-fr", "fr"], 34, 30, 15, 0
        ],
        "1f1ec-1f1e6": [
            ["🇬🇦"], "", "", ["flag-ga"], 34, 31, 15, 0
        ],
        "1f1ec-1f1e7": [
            ["🇬🇧"], "", "󾓪", ["flag-gb", "gb", "uk"], 34, 32, 15, 0
        ],
        "1f1ec-1f1e9": [
            ["🇬🇩"], "", "", ["flag-gd"], 34, 33, 15, 0
        ],
        "1f1ec-1f1ea": [
            ["🇬🇪"], "", "", ["flag-ge"], 34, 34, 15, 0
        ],
        "1f1ec-1f1eb": [
            ["🇬🇫"], "", "", ["flag-gf"], 34, 35, 13, 0
        ],
        "1f1ec-1f1ec": [
            ["🇬🇬"], "", "", ["flag-gg"], 34, 36, 15, 0
        ],
        "1f1ec-1f1ed": [
            ["🇬🇭"], "", "", ["flag-gh"], 34, 37, 15, 0
        ],
        "1f1ec-1f1ee": [
            ["🇬🇮"], "", "", ["flag-gi"], 34, 38, 15, 0
        ],
        "1f1ec-1f1f1": [
            ["🇬🇱"], "", "", ["flag-gl"], 34, 39, 15, 0
        ],
        "1f1ec-1f1f2": [
            ["🇬🇲"], "", "", ["flag-gm"], 34, 40, 15, 0
        ],
        "1f1ec-1f1f3": [
            ["🇬🇳"], "", "", ["flag-gn"], 35, 0, 15, 0
        ],
        "1f1ec-1f1f5": [
            ["🇬🇵"], "", "", ["flag-gp"], 35, 1, 13, 0
        ],
        "1f1ec-1f1f6": [
            ["🇬🇶"], "", "", ["flag-gq"], 35, 2, 15, 0
        ],
        "1f1ec-1f1f7": [
            ["🇬🇷"], "", "", ["flag-gr"], 35, 3, 15, 0
        ],
        "1f1ec-1f1f8": [
            ["🇬🇸"], "", "", ["flag-gs"], 35, 4, 13, 0
        ],
        "1f1ec-1f1f9": [
            ["🇬🇹"], "", "", ["flag-gt"], 35, 5, 15, 0
        ],
        "1f1ec-1f1fa": [
            ["🇬🇺"], "", "", ["flag-gu"], 35, 6, 15, 0
        ],
        "1f1ec-1f1fc": [
            ["🇬🇼"], "", "", ["flag-gw"], 35, 7, 15, 0
        ],
        "1f1ec-1f1fe": [
            ["🇬🇾"], "", "", ["flag-gy"], 35, 8, 15, 0
        ],
        "1f1ed-1f1f0": [
            ["🇭🇰"], "", "", ["flag-hk"], 35, 9, 15, 0
        ],
        "1f1ed-1f1f2": [
            ["🇭🇲"], "", "", ["flag-hm"], 35, 10, 13, 0
        ],
        "1f1ed-1f1f3": [
            ["🇭🇳"], "", "", ["flag-hn"], 35, 11, 15, 0
        ],
        "1f1ed-1f1f7": [
            ["🇭🇷"], "", "", ["flag-hr"], 35, 12, 15, 0
        ],
        "1f1ed-1f1f9": [
            ["🇭🇹"], "", "", ["flag-ht"], 35, 13, 15, 0
        ],
        "1f1ed-1f1fa": [
            ["🇭🇺"], "", "", ["flag-hu"], 35, 14, 15, 0
        ],
        "1f1ee-1f1e8": [
            ["🇮🇨"], "", "", ["flag-ic"], 35, 15, 15, 0
        ],
        "1f1ee-1f1e9": [
            ["🇮🇩"], "", "", ["flag-id"], 35, 16, 15, 0
        ],
        "1f1ee-1f1ea": [
            ["🇮🇪"], "", "", ["flag-ie"], 35, 17, 15, 0
        ],
        "1f1ee-1f1f1": [
            ["🇮🇱"], "", "", ["flag-il"], 35, 18, 15, 0
        ],
        "1f1ee-1f1f2": [
            ["🇮🇲"], "", "", ["flag-im"], 35, 19, 15, 0
        ],
        "1f1ee-1f1f3": [
            ["🇮🇳"], "", "", ["flag-in"], 35, 20, 15, 0
        ],
        "1f1ee-1f1f4": [
            ["🇮🇴"], "", "", ["flag-io"], 35, 21, 15, 0
        ],
        "1f1ee-1f1f6": [
            ["🇮🇶"], "", "", ["flag-iq"], 35, 22, 15, 0
        ],
        "1f1ee-1f1f7": [
            ["🇮🇷"], "", "", ["flag-ir"], 35, 23, 15, 0
        ],
        "1f1ee-1f1f8": [
            ["🇮🇸"], "", "", ["flag-is"], 35, 24, 15, 0
        ],
        "1f1ee-1f1f9": [
            ["🇮🇹"], "", "󾓩", ["flag-it", "it"], 35, 25, 15, 0
        ],
        "1f1ef-1f1ea": [
            ["🇯🇪"], "", "", ["flag-je"], 35, 26, 15, 0
        ],
        "1f1ef-1f1f2": [
            ["🇯🇲"], "", "", ["flag-jm"], 35, 27, 15, 0
        ],
        "1f1ef-1f1f4": [
            ["🇯🇴"], "", "", ["flag-jo"], 35, 28, 15, 0
        ],
        "1f1ef-1f1f5": [
            ["🇯🇵"], "", "󾓥", ["flag-jp", "jp"], 35, 29, 15, 0
        ],
        "1f1f0-1f1ea": [
            ["🇰🇪"], "", "", ["flag-ke"], 35, 30, 15, 0
        ],
        "1f1f0-1f1ec": [
            ["🇰🇬"], "", "", ["flag-kg"], 35, 31, 15, 0
        ],
        "1f1f0-1f1ed": [
            ["🇰🇭"], "", "", ["flag-kh"], 35, 32, 15, 0
        ],
        "1f1f0-1f1ee": [
            ["🇰🇮"], "", "", ["flag-ki"], 35, 33, 15, 0
        ],
        "1f1f0-1f1f2": [
            ["🇰🇲"], "", "", ["flag-km"], 35, 34, 15, 0
        ],
        "1f1f0-1f1f3": [
            ["🇰🇳"], "", "", ["flag-kn"], 35, 35, 15, 0
        ],
        "1f1f0-1f1f5": [
            ["🇰🇵"], "", "", ["flag-kp"], 35, 36, 15, 0
        ],
        "1f1f0-1f1f7": [
            ["🇰🇷"], "", "󾓮", ["flag-kr", "kr"], 35, 37, 15, 0
        ],
        "1f1f0-1f1fc": [
            ["🇰🇼"], "", "", ["flag-kw"], 35, 38, 15, 0
        ],
        "1f1f0-1f1fe": [
            ["🇰🇾"], "", "", ["flag-ky"], 35, 39, 15, 0
        ],
        "1f1f0-1f1ff": [
            ["🇰🇿"], "", "", ["flag-kz"], 35, 40, 15, 0
        ],
        "1f1f1-1f1e6": [
            ["🇱🇦"], "", "", ["flag-la"], 36, 0, 15, 0
        ],
        "1f1f1-1f1e7": [
            ["🇱🇧"], "", "", ["flag-lb"], 36, 1, 15, 0
        ],
        "1f1f1-1f1e8": [
            ["🇱🇨"], "", "", ["flag-lc"], 36, 2, 15, 0
        ],
        "1f1f1-1f1ee": [
            ["🇱🇮"], "", "", ["flag-li"], 36, 3, 15, 0
        ],
        "1f1f1-1f1f0": [
            ["🇱🇰"], "", "", ["flag-lk"], 36, 4, 15, 0
        ],
        "1f1f1-1f1f7": [
            ["🇱🇷"], "", "", ["flag-lr"], 36, 5, 15, 0
        ],
        "1f1f1-1f1f8": [
            ["🇱🇸"], "", "", ["flag-ls"], 36, 6, 15, 0
        ],
        "1f1f1-1f1f9": [
            ["🇱🇹"], "", "", ["flag-lt"], 36, 7, 15, 0
        ],
        "1f1f1-1f1fa": [
            ["🇱🇺"], "", "", ["flag-lu"], 36, 8, 15, 0
        ],
        "1f1f1-1f1fb": [
            ["🇱🇻"], "", "", ["flag-lv"], 36, 9, 15, 0
        ],
        "1f1f1-1f1fe": [
            ["🇱🇾"], "", "", ["flag-ly"], 36, 10, 15, 0
        ],
        "1f1f2-1f1e6": [
            ["🇲🇦"], "", "", ["flag-ma"], 36, 11, 15, 0
        ],
        "1f1f2-1f1e8": [
            ["🇲🇨"], "", "", ["flag-mc"], 36, 12, 15, 0
        ],
        "1f1f2-1f1e9": [
            ["🇲🇩"], "", "", ["flag-md"], 36, 13, 15, 0
        ],
        "1f1f2-1f1ea": [
            ["🇲🇪"], "", "", ["flag-me"], 36, 14, 15, 0
        ],
        "1f1f2-1f1eb": [
            ["🇲🇫"], "", "", ["flag-mf"], 36, 15, 13, 0
        ],
        "1f1f2-1f1ec": [
            ["🇲🇬"], "", "", ["flag-mg"], 36, 16, 15, 0
        ],
        "1f1f2-1f1ed": [
            ["🇲🇭"], "", "", ["flag-mh"], 36, 17, 15, 0
        ],
        "1f1f2-1f1f0": [
            ["🇲🇰"], "", "", ["flag-mk"], 36, 18, 15, 0
        ],
        "1f1f2-1f1f1": [
            ["🇲🇱"], "", "", ["flag-ml"], 36, 19, 15, 0
        ],
        "1f1f2-1f1f2": [
            ["🇲🇲"], "", "", ["flag-mm"], 36, 20, 15, 0
        ],
        "1f1f2-1f1f3": [
            ["🇲🇳"], "", "", ["flag-mn"], 36, 21, 15, 0
        ],
        "1f1f2-1f1f4": [
            ["🇲🇴"], "", "", ["flag-mo"], 36, 22, 15, 0
        ],
        "1f1f2-1f1f5": [
            ["🇲🇵"], "", "", ["flag-mp"], 36, 23, 15, 0
        ],
        "1f1f2-1f1f6": [
            ["🇲🇶"], "", "", ["flag-mq"], 36, 24, 13, 0
        ],
        "1f1f2-1f1f7": [
            ["🇲🇷"], "", "", ["flag-mr"], 36, 25, 15, 0
        ],
        "1f1f2-1f1f8": [
            ["🇲🇸"], "", "", ["flag-ms"], 36, 26, 15, 0
        ],
        "1f1f2-1f1f9": [
            ["🇲🇹"], "", "", ["flag-mt"], 36, 27, 15, 0
        ],
        "1f1f2-1f1fa": [
            ["🇲🇺"], "", "", ["flag-mu"], 36, 28, 15, 0
        ],
        "1f1f2-1f1fb": [
            ["🇲🇻"], "", "", ["flag-mv"], 36, 29, 15, 0
        ],
        "1f1f2-1f1fc": [
            ["🇲🇼"], "", "", ["flag-mw"], 36, 30, 15, 0
        ],
        "1f1f2-1f1fd": [
            ["🇲🇽"], "", "", ["flag-mx"], 36, 31, 15, 0
        ],
        "1f1f2-1f1fe": [
            ["🇲🇾"], "", "", ["flag-my"], 36, 32, 15, 0
        ],
        "1f1f2-1f1ff": [
            ["🇲🇿"], "", "", ["flag-mz"], 36, 33, 15, 0
        ],
        "1f1f3-1f1e6": [
            ["🇳🇦"], "", "", ["flag-na"], 36, 34, 15, 0
        ],
        "1f1f3-1f1e8": [
            ["🇳🇨"], "", "", ["flag-nc"], 36, 35, 13, 0
        ],
        "1f1f3-1f1ea": [
            ["🇳🇪"], "", "", ["flag-ne"], 36, 36, 15, 0
        ],
        "1f1f3-1f1eb": [
            ["🇳🇫"], "", "", ["flag-nf"], 36, 37, 15, 0
        ],
        "1f1f3-1f1ec": [
            ["🇳🇬"], "", "", ["flag-ng"], 36, 38, 15, 0
        ],
        "1f1f3-1f1ee": [
            ["🇳🇮"], "", "", ["flag-ni"], 36, 39, 15, 0
        ],
        "1f1f3-1f1f1": [
            ["🇳🇱"], "", "", ["flag-nl"], 36, 40, 15, 0
        ],
        "1f1f3-1f1f4": [
            ["🇳🇴"], "", "", ["flag-no"], 37, 0, 15, 0
        ],
        "1f1f3-1f1f5": [
            ["🇳🇵"], "", "", ["flag-np"], 37, 1, 15, 0
        ],
        "1f1f3-1f1f7": [
            ["🇳🇷"], "", "", ["flag-nr"], 37, 2, 15, 0
        ],
        "1f1f3-1f1fa": [
            ["🇳🇺"], "", "", ["flag-nu"], 37, 3, 15, 0
        ],
        "1f1f3-1f1ff": [
            ["🇳🇿"], "", "", ["flag-nz"], 37, 4, 15, 0
        ],
        "1f1f4-1f1f2": [
            ["🇴🇲"], "", "", ["flag-om"], 37, 5, 15, 0
        ],
        "1f1f5-1f1e6": [
            ["🇵🇦"], "", "", ["flag-pa"], 37, 6, 15, 0
        ],
        "1f1f5-1f1ea": [
            ["🇵🇪"], "", "", ["flag-pe"], 37, 7, 15, 0
        ],
        "1f1f5-1f1eb": [
            ["🇵🇫"], "", "", ["flag-pf"], 37, 8, 15, 0
        ],
        "1f1f5-1f1ec": [
            ["🇵🇬"], "", "", ["flag-pg"], 37, 9, 15, 0
        ],
        "1f1f5-1f1ed": [
            ["🇵🇭"], "", "", ["flag-ph"], 37, 10, 15, 0
        ],
        "1f1f5-1f1f0": [
            ["🇵🇰"], "", "", ["flag-pk"], 37, 11, 15, 0
        ],
        "1f1f5-1f1f1": [
            ["🇵🇱"], "", "", ["flag-pl"], 37, 12, 15, 0
        ],
        "1f1f5-1f1f2": [
            ["🇵🇲"], "", "", ["flag-pm"], 37, 13, 13, 0
        ],
        "1f1f5-1f1f3": [
            ["🇵🇳"], "", "", ["flag-pn"], 37, 14, 15, 0
        ],
        "1f1f5-1f1f7": [
            ["🇵🇷"], "", "", ["flag-pr"], 37, 15, 15, 0
        ],
        "1f1f5-1f1f8": [
            ["🇵🇸"], "", "", ["flag-ps"], 37, 16, 15, 0
        ],
        "1f1f5-1f1f9": [
            ["🇵🇹"], "", "", ["flag-pt"], 37, 17, 15, 0
        ],
        "1f1f5-1f1fc": [
            ["🇵🇼"], "", "", ["flag-pw"], 37, 18, 15, 0
        ],
        "1f1f5-1f1fe": [
            ["🇵🇾"], "", "", ["flag-py"], 37, 19, 15, 0
        ],
        "1f1f6-1f1e6": [
            ["🇶🇦"], "", "", ["flag-qa"], 37, 20, 15, 0
        ],
        "1f1f7-1f1ea": [
            ["🇷🇪"], "", "", ["flag-re"], 37, 21, 13, 0
        ],
        "1f1f7-1f1f4": [
            ["🇷🇴"], "", "", ["flag-ro"], 37, 22, 15, 0
        ],
        "1f1f7-1f1f8": [
            ["🇷🇸"], "", "", ["flag-rs"], 37, 23, 15, 0
        ],
        "1f1f7-1f1fa": [
            ["🇷🇺"], "", "󾓬", ["flag-ru", "ru"], 37, 24, 15, 0
        ],
        "1f1f7-1f1fc": [
            ["🇷🇼"], "", "", ["flag-rw"], 37, 25, 15, 0
        ],
        "1f1f8-1f1e6": [
            ["🇸🇦"], "", "", ["flag-sa"], 37, 26, 15, 0
        ],
        "1f1f8-1f1e7": [
            ["🇸🇧"], "", "", ["flag-sb"], 37, 27, 15, 0
        ],
        "1f1f8-1f1e8": [
            ["🇸🇨"], "", "", ["flag-sc"], 37, 28, 15, 0
        ],
        "1f1f8-1f1e9": [
            ["🇸🇩"], "", "", ["flag-sd"], 37, 29, 15, 0
        ],
        "1f1f8-1f1ea": [
            ["🇸🇪"], "", "", ["flag-se"], 37, 30, 15, 0
        ],
        "1f1f8-1f1ec": [
            ["🇸🇬"], "", "", ["flag-sg"], 37, 31, 15, 0
        ],
        "1f1f8-1f1ed": [
            ["🇸🇭"], "", "", ["flag-sh"], 37, 32, 15, 0
        ],
        "1f1f8-1f1ee": [
            ["🇸🇮"], "", "", ["flag-si"], 37, 33, 15, 0
        ],
        "1f1f8-1f1ef": [
            ["🇸🇯"], "", "", ["flag-sj"], 37, 34, 13, 0
        ],
        "1f1f8-1f1f0": [
            ["🇸🇰"], "", "", ["flag-sk"], 37, 35, 15, 0
        ],
        "1f1f8-1f1f1": [
            ["🇸🇱"], "", "", ["flag-sl"], 37, 36, 15, 0
        ],
        "1f1f8-1f1f2": [
            ["🇸🇲"], "", "", ["flag-sm"], 37, 37, 15, 0
        ],
        "1f1f8-1f1f3": [
            ["🇸🇳"], "", "", ["flag-sn"], 37, 38, 15, 0
        ],
        "1f1f8-1f1f4": [
            ["🇸🇴"], "", "", ["flag-so"], 37, 39, 15, 0
        ],
        "1f1f8-1f1f7": [
            ["🇸🇷"], "", "", ["flag-sr"], 37, 40, 15, 0
        ],
        "1f1f8-1f1f8": [
            ["🇸🇸"], "", "", ["flag-ss"], 38, 0, 15, 0
        ],
        "1f1f8-1f1f9": [
            ["🇸🇹"], "", "", ["flag-st"], 38, 1, 15, 0
        ],
        "1f1f8-1f1fb": [
            ["🇸🇻"], "", "", ["flag-sv"], 38, 2, 15, 0
        ],
        "1f1f8-1f1fd": [
            ["🇸🇽"], "", "", ["flag-sx"], 38, 3, 15, 0
        ],
        "1f1f8-1f1fe": [
            ["🇸🇾"], "", "", ["flag-sy"], 38, 4, 15, 0
        ],
        "1f1f8-1f1ff": [
            ["🇸🇿"], "", "", ["flag-sz"], 38, 5, 15, 0
        ],
        "1f1f9-1f1e6": [
            ["🇹🇦"], "", "", ["flag-ta"], 38, 6, 15, 0
        ],
        "1f1f9-1f1e8": [
            ["🇹🇨"], "", "", ["flag-tc"], 38, 7, 15, 0
        ],
        "1f1f9-1f1e9": [
            ["🇹🇩"], "", "", ["flag-td"], 38, 8, 15, 0
        ],
        "1f1f9-1f1eb": [
            ["🇹🇫"], "", "", ["flag-tf"], 38, 9, 13, 0
        ],
        "1f1f9-1f1ec": [
            ["🇹🇬"], "", "", ["flag-tg"], 38, 10, 15, 0
        ],
        "1f1f9-1f1ed": [
            ["🇹🇭"], "", "", ["flag-th"], 38, 11, 15, 0
        ],
        "1f1f9-1f1ef": [
            ["🇹🇯"], "", "", ["flag-tj"], 38, 12, 15, 0
        ],
        "1f1f9-1f1f0": [
            ["🇹🇰"], "", "", ["flag-tk"], 38, 13, 15, 0
        ],
        "1f1f9-1f1f1": [
            ["🇹🇱"], "", "", ["flag-tl"], 38, 14, 15, 0
        ],
        "1f1f9-1f1f2": [
            ["🇹🇲"], "", "", ["flag-tm"], 38, 15, 15, 0
        ],
        "1f1f9-1f1f3": [
            ["🇹🇳"], "", "", ["flag-tn"], 38, 16, 15, 0
        ],
        "1f1f9-1f1f4": [
            ["🇹🇴"], "", "", ["flag-to"], 38, 17, 15, 0
        ],
        "1f1f9-1f1f7": [
            ["🇹🇷"], "", "", ["flag-tr"], 38, 18, 15, 0
        ],
        "1f1f9-1f1f9": [
            ["🇹🇹"], "", "", ["flag-tt"], 38, 19, 15, 0
        ],
        "1f1f9-1f1fb": [
            ["🇹🇻"], "", "", ["flag-tv"], 38, 20, 15, 0
        ],
        "1f1f9-1f1fc": [
            ["🇹🇼"], "", "", ["flag-tw"], 38, 21, 15, 0
        ],
        "1f1f9-1f1ff": [
            ["🇹🇿"], "", "", ["flag-tz"], 38, 22, 15, 0
        ],
        "1f1fa-1f1e6": [
            ["🇺🇦"], "", "", ["flag-ua"], 38, 23, 15, 0
        ],
        "1f1fa-1f1ec": [
            ["🇺🇬"], "", "", ["flag-ug"], 38, 24, 15, 0
        ],
        "1f1fa-1f1f2": [
            ["🇺🇲"], "", "", ["flag-um"], 38, 25, 13, 0
        ],
        "1f1fa-1f1f8": [
            ["🇺🇸"], "", "󾓦", ["flag-us", "us"], 38, 26, 15, 0
        ],
        "1f1fa-1f1fe": [
            ["🇺🇾"], "", "", ["flag-uy"], 38, 27, 15, 0
        ],
        "1f1fa-1f1ff": [
            ["🇺🇿"], "", "", ["flag-uz"], 38, 28, 15, 0
        ],
        "1f1fb-1f1e6": [
            ["🇻🇦"], "", "", ["flag-va"], 38, 29, 15, 0
        ],
        "1f1fb-1f1e8": [
            ["🇻🇨"], "", "", ["flag-vc"], 38, 30, 15, 0
        ],
        "1f1fb-1f1ea": [
            ["🇻🇪"], "", "", ["flag-ve"], 38, 31, 15, 0
        ],
        "1f1fb-1f1ec": [
            ["🇻🇬"], "", "", ["flag-vg"], 38, 32, 15, 0
        ],
        "1f1fb-1f1ee": [
            ["🇻🇮"], "", "", ["flag-vi"], 38, 33, 15, 0
        ],
        "1f1fb-1f1f3": [
            ["🇻🇳"], "", "", ["flag-vn"], 38, 34, 15, 0
        ],
        "1f1fb-1f1fa": [
            ["🇻🇺"], "", "", ["flag-vu"], 38, 35, 15, 0
        ],
        "1f1fc-1f1eb": [
            ["🇼🇫"], "", "", ["flag-wf"], 38, 36, 13, 0
        ],
        "1f1fc-1f1f8": [
            ["🇼🇸"], "", "", ["flag-ws"], 38, 37, 15, 0
        ],
        "1f1fd-1f1f0": [
            ["🇽🇰"], "", "", ["flag-xk"], 38, 38, 13, 0
        ],
        "1f1fe-1f1ea": [
            ["🇾🇪"], "", "", ["flag-ye"], 38, 39, 15, 0
        ],
        "1f1fe-1f1f9": [
            ["🇾🇹"], "", "", ["flag-yt"], 38, 40, 13, 0
        ],
        "1f1ff-1f1e6": [
            ["🇿🇦"], "", "", ["flag-za"], 39, 0, 15, 0
        ],
        "1f1ff-1f1f2": [
            ["🇿🇲"], "", "", ["flag-zm"], 39, 1, 15, 0
        ],
        "1f1ff-1f1fc": [
            ["🇿🇼"], "", "", ["flag-zw"], 39, 2, 15, 0
        ],
        "1f468-200d-1f468-200d-1f466": [
            ["👨‍👨‍👦"], "", "", ["man-man-boy"], 39, 3, 15, 0
        ],
        "1f468-200d-1f468-200d-1f466-200d-1f466": [
            ["👨‍👨‍👦‍👦"], "", "", ["man-man-boy-boy"], 39, 4, 15, 0
        ],
        "1f468-200d-1f468-200d-1f467": [
            ["👨‍👨‍👧"], "", "", ["man-man-girl"], 39, 5, 15, 0
        ],
        "1f468-200d-1f468-200d-1f467-200d-1f466": [
            ["👨‍👨‍👧‍👦"], "", "", ["man-man-girl-boy"], 39, 6, 15, 0
        ],
        "1f468-200d-1f468-200d-1f467-200d-1f467": [
            ["👨‍👨‍👧‍👧"], "", "", ["man-man-girl-girl"], 39, 7, 15, 0
        ],
        "1f468-200d-1f469-200d-1f466-200d-1f466": [
            ["👨‍👩‍👦‍👦"], "", "", ["man-woman-boy-boy"], 39, 8, 15, 0
        ],
        "1f468-200d-1f469-200d-1f467": [
            ["👨‍👩‍👧"], "", "", ["man-woman-girl"], 39, 9, 15, 0
        ],
        "1f468-200d-1f469-200d-1f467-200d-1f466": [
            ["👨‍👩‍👧‍👦"], "", "", ["man-woman-girl-boy"], 39, 10, 15, 0
        ],
        "1f468-200d-1f469-200d-1f467-200d-1f467": [
            ["👨‍👩‍👧‍👧"], "", "", ["man-woman-girl-girl"], 39, 11, 15, 0
        ],
        "1f468-200d-2764-fe0f-200d-1f468": [
            ["👨‍❤️‍👨"], "", "", ["man-heart-man"], 39, 12, 7, 0
        ],
        "1f468-200d-2764-fe0f-200d-1f48b-200d-1f468": [
            ["👨‍❤️‍💋‍👨"], "", "", ["man-kiss-man"], 39, 13, 7, 0
        ],
        "1f469-200d-1f469-200d-1f466": [
            ["👩‍👩‍👦"], "", "", ["woman-woman-boy"], 39, 14, 15, 0
        ],
        "1f469-200d-1f469-200d-1f466-200d-1f466": [
            ["👩‍👩‍👦‍👦"], "", "", ["woman-woman-boy-boy"], 39, 15, 15, 0
        ],
        "1f469-200d-1f469-200d-1f467": [
            ["👩‍👩‍👧"], "", "", ["woman-woman-girl"], 39, 16, 15, 0
        ],
        "1f469-200d-1f469-200d-1f467-200d-1f466": [
            ["👩‍👩‍👧‍👦"], "", "", ["woman-woman-girl-boy"], 39, 17, 15, 0
        ],
        "1f469-200d-1f469-200d-1f467-200d-1f467": [
            ["👩‍👩‍👧‍👧"], "", "", ["woman-woman-girl-girl"], 39, 18, 15, 0
        ],
        "1f469-200d-2764-fe0f-200d-1f469": [
            ["👩‍❤️‍👩"], "", "", ["woman-heart-woman"], 39, 19, 7, 0
        ],
        "1f469-200d-2764-fe0f-200d-1f48b-200d-1f469": [
            ["👩‍❤️‍💋‍👩"], "", "", ["woman-kiss-woman"], 39, 20, 7, 0
        ]
    }, n.prototype.emoticons_data = {
        "<3": "heart",
        ":o)": "monkey_face",
        ":*": "kiss",
        ":-*": "kiss",
        "</3": "broken_heart",
        "=)": "smiley",
        "=-)": "smiley",
        "C:": "smile",
        "c:": "smile",
        ":D": "smile",
        ":-D": "smile",
        ":>": "laughing",
        ":->": "laughing",
        ";)": "wink",
        ";-)": "wink",
        "8)": "sunglasses",
        ":|": "neutral_face",
        ":-|": "neutral_face",
        ":\\": "confused",
        ":-\\": "confused",
        ":/": "confused",
        ":-/": "confused",
        ":p": "stuck_out_tongue",
        ":-p": "stuck_out_tongue",
        ":P": "stuck_out_tongue",
        ":-P": "stuck_out_tongue",
        ":b": "stuck_out_tongue",
        ":-b": "stuck_out_tongue",
        ";p": "stuck_out_tongue_winking_eye",
        ";-p": "stuck_out_tongue_winking_eye",
        ";b": "stuck_out_tongue_winking_eye",
        ";-b": "stuck_out_tongue_winking_eye",
        ";P": "stuck_out_tongue_winking_eye",
        ";-P": "stuck_out_tongue_winking_eye",
        "):": "disappointed",
        ":(": "disappointed",
        ":-(": "disappointed",
        ">:(": "angry",
        ">:-(": "angry",
        ":'(": "cry",
        "D:": "anguished",
        ":o": "open_mouth",
        ":-o": "open_mouth",
        ":O": "open_mouth",
        ":-O": "open_mouth",
        ":)": "slightly_smiling_face",
        "(:": "slightly_smiling_face",
        ":-)": "slightly_smiling_face"
    }, n.prototype.variations_data = {
        "261d-1f3fb": [1, 11, 15],
        "261d-1f3fc": [1, 12, 15],
        "261d-1f3fd": [1, 13, 15],
        "261d-1f3fe": [1, 14, 15],
        "261d-1f3ff": [1, 15, 15],
        "26f9-1f3fb": [2, 39, 15],
        "26f9-1f3fc": [2, 40, 15],
        "26f9-1f3fd": [3, 0, 15],
        "26f9-1f3fe": [3, 1, 15],
        "26f9-1f3ff": [3, 2, 15],
        "270a-1f3fb": [3, 10, 15],
        "270a-1f3fc": [3, 11, 15],
        "270a-1f3fd": [3, 12, 15],
        "270a-1f3fe": [3, 13, 15],
        "270a-1f3ff": [3, 14, 15],
        "270b-1f3fb": [3, 16, 15],
        "270b-1f3fc": [3, 17, 15],
        "270b-1f3fd": [3, 18, 15],
        "270b-1f3fe": [3, 19, 15],
        "270b-1f3ff": [3, 20, 15],
        "270c-1f3fb": [3, 22, 15],
        "270c-1f3fc": [3, 23, 15],
        "270c-1f3fd": [3, 24, 15],
        "270c-1f3fe": [3, 25, 15],
        "270c-1f3ff": [3, 26, 15],
        "270d-1f3fb": [3, 28, 15],
        "270d-1f3fc": [3, 29, 15],
        "270d-1f3fd": [3, 30, 15],
        "270d-1f3fe": [3, 31, 15],
        "270d-1f3ff": [3, 32, 15],
        "1f385-1f3fb": [8, 30, 15],
        "1f385-1f3fc": [8, 31, 15],
        "1f385-1f3fd": [8, 32, 15],
        "1f385-1f3fe": [8, 33, 15],
        "1f385-1f3ff": [8, 34, 15],
        "1f3c3-1f3fb": [10, 10, 15],
        "1f3c3-1f3fc": [10, 11, 15],
        "1f3c3-1f3fd": [10, 12, 15],
        "1f3c3-1f3fe": [10, 13, 15],
        "1f3c3-1f3ff": [10, 14, 15],
        "1f3c4-1f3fb": [10, 16, 15],
        "1f3c4-1f3fc": [10, 17, 15],
        "1f3c4-1f3fd": [10, 18, 15],
        "1f3c4-1f3fe": [10, 19, 15],
        "1f3c4-1f3ff": [10, 20, 15],
        "1f3ca-1f3fb": [10, 27, 15],
        "1f3ca-1f3fc": [10, 28, 15],
        "1f3ca-1f3fd": [10, 29, 15],
        "1f3ca-1f3fe": [10, 30, 15],
        "1f3ca-1f3ff": [10, 31, 15],
        "1f3cb-1f3fb": [10, 33, 15],
        "1f3cb-1f3fc": [10, 34, 15],
        "1f3cb-1f3fd": [10, 35, 15],
        "1f3cb-1f3fe": [10, 36, 15],
        "1f3cb-1f3ff": [10, 37, 15],
        "1f442-1f3fb": [13, 31, 15],
        "1f442-1f3fc": [13, 32, 15],
        "1f442-1f3fd": [13, 33, 15],
        "1f442-1f3fe": [13, 34, 15],
        "1f442-1f3ff": [13, 35, 15],
        "1f443-1f3fb": [13, 37, 15],
        "1f443-1f3fc": [13, 38, 15],
        "1f443-1f3fd": [13, 39, 15],
        "1f443-1f3fe": [13, 40, 15],
        "1f443-1f3ff": [14, 0, 15],
        "1f446-1f3fb": [14, 4, 15],
        "1f446-1f3fc": [14, 5, 15],
        "1f446-1f3fd": [14, 6, 15],
        "1f446-1f3fe": [14, 7, 15],
        "1f446-1f3ff": [14, 8, 15],
        "1f447-1f3fb": [14, 10, 15],
        "1f447-1f3fc": [14, 11, 15],
        "1f447-1f3fd": [14, 12, 15],
        "1f447-1f3fe": [14, 13, 15],
        "1f447-1f3ff": [14, 14, 15],
        "1f448-1f3fb": [14, 16, 15],
        "1f448-1f3fc": [14, 17, 15],
        "1f448-1f3fd": [14, 18, 15],
        "1f448-1f3fe": [14, 19, 15],
        "1f448-1f3ff": [14, 20, 15],
        "1f449-1f3fb": [14, 22, 15],
        "1f449-1f3fc": [14, 23, 15],
        "1f449-1f3fd": [14, 24, 15],
        "1f449-1f3fe": [14, 25, 15],
        "1f449-1f3ff": [14, 26, 15],
        "1f44a-1f3fb": [14, 28, 15],
        "1f44a-1f3fc": [14, 29, 15],
        "1f44a-1f3fd": [14, 30, 15],
        "1f44a-1f3fe": [14, 31, 15],
        "1f44a-1f3ff": [14, 32, 15],
        "1f44b-1f3fb": [14, 34, 15],
        "1f44b-1f3fc": [14, 35, 15],
        "1f44b-1f3fd": [14, 36, 15],
        "1f44b-1f3fe": [14, 37, 15],
        "1f44b-1f3ff": [14, 38, 15],
        "1f44c-1f3fb": [14, 40, 15],
        "1f44c-1f3fc": [15, 0, 15],
        "1f44c-1f3fd": [15, 1, 15],
        "1f44c-1f3fe": [15, 2, 15],
        "1f44c-1f3ff": [15, 3, 15],
        "1f44d-1f3fb": [15, 5, 15],
        "1f44d-1f3fc": [15, 6, 15],
        "1f44d-1f3fd": [15, 7, 15],
        "1f44d-1f3fe": [15, 8, 15],
        "1f44d-1f3ff": [15, 9, 15],
        "1f44e-1f3fb": [15, 11, 15],
        "1f44e-1f3fc": [15, 12, 15],
        "1f44e-1f3fd": [15, 13, 15],
        "1f44e-1f3fe": [15, 14, 15],
        "1f44e-1f3ff": [15, 15, 15],
        "1f44f-1f3fb": [15, 17, 15],
        "1f44f-1f3fc": [15, 18, 15],
        "1f44f-1f3fd": [15, 19, 15],
        "1f44f-1f3fe": [15, 20, 15],
        "1f44f-1f3ff": [15, 21, 15],
        "1f450-1f3fb": [15, 23, 15],
        "1f450-1f3fc": [15, 24, 15],
        "1f450-1f3fd": [15, 25, 15],
        "1f450-1f3fe": [15, 26, 15],
        "1f450-1f3ff": [15, 27, 15],
        "1f466-1f3fb": [16, 9, 15],
        "1f466-1f3fc": [16, 10, 15],
        "1f466-1f3fd": [16, 11, 15],
        "1f466-1f3fe": [16, 12, 15],
        "1f466-1f3ff": [16, 13, 15],
        "1f467-1f3fb": [16, 15, 15],
        "1f467-1f3fc": [16, 16, 15],
        "1f467-1f3fd": [16, 17, 15],
        "1f467-1f3fe": [16, 18, 15],
        "1f467-1f3ff": [16, 19, 15],
        "1f468-1f3fb": [16, 21, 15],
        "1f468-1f3fc": [16, 22, 15],
        "1f468-1f3fd": [16, 23, 15],
        "1f468-1f3fe": [16, 24, 15],
        "1f468-1f3ff": [16, 25, 15],
        "1f469-1f3fb": [16, 27, 15],
        "1f469-1f3fc": [16, 28, 15],
        "1f469-1f3fd": [16, 29, 15],
        "1f469-1f3fe": [16, 30, 15],
        "1f469-1f3ff": [16, 31, 15],
        "1f46e-1f3fb": [16, 37, 15],
        "1f46e-1f3fc": [16, 38, 15],
        "1f46e-1f3fd": [16, 39, 15],
        "1f46e-1f3fe": [16, 40, 15],
        "1f46e-1f3ff": [17, 0, 15],
        "1f470-1f3fb": [17, 3, 15],
        "1f470-1f3fc": [17, 4, 15],
        "1f470-1f3fd": [17, 5, 15],
        "1f470-1f3fe": [17, 6, 15],
        "1f470-1f3ff": [17, 7, 15],
        "1f471-1f3fb": [17, 9, 15],
        "1f471-1f3fc": [17, 10, 15],
        "1f471-1f3fd": [17, 11, 15],
        "1f471-1f3fe": [17, 12, 15],
        "1f471-1f3ff": [17, 13, 15],
        "1f472-1f3fb": [17, 15, 15],
        "1f472-1f3fc": [17, 16, 15],
        "1f472-1f3fd": [17, 17, 15],
        "1f472-1f3fe": [17, 18, 15],
        "1f472-1f3ff": [17, 19, 15],
        "1f473-1f3fb": [17, 21, 15],
        "1f473-1f3fc": [17, 22, 15],
        "1f473-1f3fd": [17, 23, 15],
        "1f473-1f3fe": [17, 24, 15],
        "1f473-1f3ff": [17, 25, 15],
        "1f474-1f3fb": [17, 27, 15],
        "1f474-1f3fc": [17, 28, 15],
        "1f474-1f3fd": [17, 29, 15],
        "1f474-1f3fe": [17, 30, 15],
        "1f474-1f3ff": [17, 31, 15],
        "1f475-1f3fb": [17, 33, 15],
        "1f475-1f3fc": [17, 34, 15],
        "1f475-1f3fd": [17, 35, 15],
        "1f475-1f3fe": [17, 36, 15],
        "1f475-1f3ff": [17, 37, 15],
        "1f476-1f3fb": [17, 39, 15],
        "1f476-1f3fc": [17, 40, 15],
        "1f476-1f3fd": [18, 0, 15],
        "1f476-1f3fe": [18, 1, 15],
        "1f476-1f3ff": [18, 2, 15],
        "1f477-1f3fb": [18, 4, 15],
        "1f477-1f3fc": [18, 5, 15],
        "1f477-1f3fd": [18, 6, 15],
        "1f477-1f3fe": [18, 7, 15],
        "1f477-1f3ff": [18, 8, 15],
        "1f478-1f3fb": [18, 10, 15],
        "1f478-1f3fc": [18, 11, 15],
        "1f478-1f3fd": [18, 12, 15],
        "1f478-1f3fe": [18, 13, 15],
        "1f478-1f3ff": [18, 14, 15],
        "1f47c-1f3fb": [18, 19, 15],
        "1f47c-1f3fc": [18, 20, 15],
        "1f47c-1f3fd": [18, 21, 15],
        "1f47c-1f3fe": [18, 22, 15],
        "1f47c-1f3ff": [18, 23, 15],
        "1f481-1f3fb": [18, 29, 15],
        "1f481-1f3fc": [18, 30, 15],
        "1f481-1f3fd": [18, 31, 15],
        "1f481-1f3fe": [18, 32, 15],
        "1f481-1f3ff": [18, 33, 15],
        "1f482-1f3fb": [18, 35, 15],
        "1f482-1f3fc": [18, 36, 15],
        "1f482-1f3fd": [18, 37, 15],
        "1f482-1f3fe": [18, 38, 15],
        "1f482-1f3ff": [18, 39, 15],
        "1f483-1f3fb": [19, 0, 15],
        "1f483-1f3fc": [19, 1, 15],
        "1f483-1f3fd": [19, 2, 15],
        "1f483-1f3fe": [19, 3, 15],
        "1f483-1f3ff": [19, 4, 15],
        "1f485-1f3fb": [19, 7, 15],
        "1f485-1f3fc": [19, 8, 15],
        "1f485-1f3fd": [19, 9, 15],
        "1f485-1f3fe": [19, 10, 15],
        "1f485-1f3ff": [19, 11, 15],
        "1f486-1f3fb": [19, 13, 15],
        "1f486-1f3fc": [19, 14, 15],
        "1f486-1f3fd": [19, 15, 15],
        "1f486-1f3fe": [19, 16, 15],
        "1f486-1f3ff": [19, 17, 15],
        "1f487-1f3fb": [19, 19, 15],
        "1f487-1f3fc": [19, 20, 15],
        "1f487-1f3fd": [19, 21, 15],
        "1f487-1f3fe": [19, 22, 15],
        "1f487-1f3ff": [19, 23, 15],
        "1f4aa-1f3fb": [20, 18, 15],
        "1f4aa-1f3fc": [20, 19, 15],
        "1f4aa-1f3fd": [20, 20, 15],
        "1f4aa-1f3fe": [20, 21, 15],
        "1f4aa-1f3ff": [20, 22, 15],
        "1f575-1f3fb": [24, 40, 11],
        "1f575-1f3fc": [25, 0, 11],
        "1f575-1f3fd": [25, 1, 11],
        "1f575-1f3fe": [25, 2, 11],
        "1f575-1f3ff": [25, 3, 11],
        "1f590-1f3fb": [25, 14, 15],
        "1f590-1f3fc": [25, 15, 15],
        "1f590-1f3fd": [25, 16, 15],
        "1f590-1f3fe": [25, 17, 15],
        "1f590-1f3ff": [25, 18, 15],
        "1f595-1f3fb": [25, 20, 15],
        "1f595-1f3fc": [25, 21, 15],
        "1f595-1f3fd": [25, 22, 15],
        "1f595-1f3fe": [25, 23, 15],
        "1f595-1f3ff": [25, 24, 15],
        "1f596-1f3fb": [25, 26, 15],
        "1f596-1f3fc": [25, 27, 15],
        "1f596-1f3fd": [25, 28, 15],
        "1f596-1f3fe": [25, 29, 15],
        "1f596-1f3ff": [25, 30, 15],
        "1f645-1f3fb": [28, 3, 15],
        "1f645-1f3fc": [28, 4, 15],
        "1f645-1f3fd": [28, 5, 15],
        "1f645-1f3fe": [28, 6, 15],
        "1f645-1f3ff": [28, 7, 15],
        "1f646-1f3fb": [28, 9, 15],
        "1f646-1f3fc": [28, 10, 15],
        "1f646-1f3fd": [28, 11, 15],
        "1f646-1f3fe": [28, 12, 15],
        "1f646-1f3ff": [28, 13, 15],
        "1f647-1f3fb": [28, 15, 15],
        "1f647-1f3fc": [28, 16, 15],
        "1f647-1f3fd": [28, 17, 15],
        "1f647-1f3fe": [28, 18, 15],
        "1f647-1f3ff": [28, 19, 15],
        "1f64b-1f3fb": [28, 24, 15],
        "1f64b-1f3fc": [28, 25, 15],
        "1f64b-1f3fd": [28, 26, 15],
        "1f64b-1f3fe": [28, 27, 15],
        "1f64b-1f3ff": [28, 28, 15],
        "1f64c-1f3fb": [28, 30, 15],
        "1f64c-1f3fc": [28, 31, 15],
        "1f64c-1f3fd": [28, 32, 15],
        "1f64c-1f3fe": [28, 33, 15],
        "1f64c-1f3ff": [28, 34, 15],
        "1f64d-1f3fb": [28, 36, 15],
        "1f64d-1f3fc": [28, 37, 15],
        "1f64d-1f3fd": [28, 38, 15],
        "1f64d-1f3fe": [28, 39, 15],
        "1f64d-1f3ff": [28, 40, 15],
        "1f64e-1f3fb": [29, 1, 15],
        "1f64e-1f3fc": [29, 2, 15],
        "1f64e-1f3fd": [29, 3, 15],
        "1f64e-1f3fe": [29, 4, 15],
        "1f64e-1f3ff": [29, 5, 15],
        "1f64f-1f3fb": [29, 7, 15],
        "1f64f-1f3fc": [29, 8, 15],
        "1f64f-1f3fd": [29, 9, 15],
        "1f64f-1f3fe": [29, 10, 15],
        "1f64f-1f3ff": [29, 11, 15],
        "1f6a3-1f3fb": [30, 7, 15],
        "1f6a3-1f3fc": [30, 8, 15],
        "1f6a3-1f3fd": [30, 9, 15],
        "1f6a3-1f3fe": [30, 10, 15],
        "1f6a3-1f3ff": [30, 11, 15],
        "1f6b4-1f3fb": [30, 29, 15],
        "1f6b4-1f3fc": [30, 30, 15],
        "1f6b4-1f3fd": [30, 31, 15],
        "1f6b4-1f3fe": [30, 32, 15],
        "1f6b4-1f3ff": [30, 33, 15],
        "1f6b5-1f3fb": [30, 35, 15],
        "1f6b5-1f3fc": [30, 36, 15],
        "1f6b5-1f3fd": [30, 37, 15],
        "1f6b5-1f3fe": [30, 38, 15],
        "1f6b5-1f3ff": [30, 39, 15],
        "1f6b6-1f3fb": [31, 0, 15],
        "1f6b6-1f3fc": [31, 1, 15],
        "1f6b6-1f3fd": [31, 2, 15],
        "1f6b6-1f3fe": [31, 3, 15],
        "1f6b6-1f3ff": [31, 4, 15],
        "1f6c0-1f3fb": [31, 15, 15],
        "1f6c0-1f3fc": [31, 16, 15],
        "1f6c0-1f3fd": [31, 17, 15],
        "1f6c0-1f3fe": [31, 18, 15],
        "1f6c0-1f3ff": [31, 19, 15],
        "1f918-1f3fb": [32, 10, 15],
        "1f918-1f3fc": [32, 11, 15],
        "1f918-1f3fd": [32, 12, 15],
        "1f918-1f3fe": [32, 13, 15],
        "1f918-1f3ff": [32, 14, 15]
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = n), exports.EmojiConvertor = n) : "function" == typeof define && define.amd ? define(function() {
        return n
    }) : e.EmojiConvertor = n
}.call(function() {
    return this || ("undefined" != typeof window ? window : global)
}());
var LZString = function() {
    function e(e, t) {
        if (!r[e]) {
            r[e] = {};
            for (var n = 0; n < e.length; n++) r[e][e.charAt(n)] = n
        }
        return r[e][t]
    }
    var t = String.fromCharCode,
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
        r = {},
        o = {
            compressToBase64: function(e) {
                if (null == e) return "";
                var t = o._compress(e, 6, function(e) {
                    return n.charAt(e)
                });
                switch (t.length % 4) {
                    default:
                        case 0:
                        return t;
                    case 1:
                            return t + "===";
                    case 2:
                            return t + "==";
                    case 3:
                            return t + "="
                }
            },
            decompressFromBase64: function(t) {
                return null == t ? "" : "" == t ? null : o._decompress(t.length, 32, function(a) {
                    return e(n, t.charAt(a))
                })
            },
            compressToUTF16: function(e) {
                return null == e ? "" : o._compress(e, 15, function(e) {
                    return t(e + 32)
                }) + " "
            },
            decompressFromUTF16: function(e) {
                return null == e ? "" : "" == e ? null : o._decompress(e.length, 16384, function(t) {
                    return e.charCodeAt(t) - 32
                })
            },
            compressToUint8Array: function(e) {
                for (var t = o.compress(e), n = new Uint8Array(2 * t.length), a = 0, r = t.length; a < r; a++) {
                    var i = t.charCodeAt(a);
                    n[2 * a] = i >>> 8, n[2 * a + 1] = i % 256
                }
                return n
            },
            decompressFromUint8Array: function(e) {
                if (null === e || void 0 === e) return o.decompress(e);
                for (var n = new Array(e.length / 2), a = 0, r = n.length; a < r; a++) n[a] = 256 * e[2 * a] + e[2 * a + 1];
                var i = [];
                return n.forEach(function(e) {
                    i.push(t(e));
                }), o.decompress(i.join(""))
            },
            compressToEncodedURIComponent: function(e) {
                return null == e ? "" : o._compress(e, 6, function(e) {
                    return a.charAt(e)
                })
            },
            decompressFromEncodedURIComponent: function(t) {
                return null == t ? "" : "" == t ? null : (t = t.replace(/ /g, "+"), o._decompress(t.length, 32, function(n) {
                    return e(a, t.charAt(n))
                }))
            },
            compress: function(e) {
                return o._compress(e, 16, function(e) {
                    return t(e)
                })
            },
            _compress: function(e, t, n) {
                if (null == e) return "";
                var a, r, o = {},
                    i = {},
                    s = "",
                    l = "",
                    f = "",
                    c = 2,
                    u = 3,
                    d = 2,
                    p = [],
                    h = 0,
                    g = 0,
                    m;
                for (m = 0; m < e.length; m += 1)
                    if (s = e.charAt(m), Object.prototype.hasOwnProperty.call(o, s) || (o[s] = u++, i[s] = !0), l = f + s, Object.prototype.hasOwnProperty.call(o, l)) f = l;
                    else {
                        if (Object.prototype.hasOwnProperty.call(i, f)) {
                            if (f.charCodeAt(0) < 256) {
                                for (a = 0; a < d; a++) h <<= 1, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++;
                                for (r = f.charCodeAt(0), a = 0; a < 8; a++) h = h << 1 | 1 & r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r >>= 1
                            } else {
                                for (r = 1, a = 0; a < d; a++) h = h << 1 | r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r = 0;
                                for (r = f.charCodeAt(0), a = 0; a < 16; a++) h = h << 1 | 1 & r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r >>= 1
                            }
                            c--, 0 == c && (c = Math.pow(2, d), d++), delete i[f]
                        } else
                            for (r = o[f], a = 0; a < d; a++) h = h << 1 | 1 & r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r >>= 1;
                        c--, 0 == c && (c = Math.pow(2, d), d++), o[l] = u++, f = String(s)
                    }
                if ("" !== f) {
                    if (Object.prototype.hasOwnProperty.call(i, f)) {
                        if (f.charCodeAt(0) < 256) {
                            for (a = 0; a < d; a++) h <<= 1, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++;
                            for (r = f.charCodeAt(0), a = 0; a < 8; a++) h = h << 1 | 1 & r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r >>= 1
                        } else {
                            for (r = 1, a = 0; a < d; a++) h = h << 1 | r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r = 0;
                            for (r = f.charCodeAt(0), a = 0; a < 16; a++) h = h << 1 | 1 & r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r >>= 1
                        }
                        c--, 0 == c && (c = Math.pow(2, d), d++), delete i[f]
                    } else
                        for (r = o[f], a = 0; a < d; a++) h = h << 1 | 1 & r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r >>= 1;
                    c--, 0 == c && (c = Math.pow(2, d), d++)
                }
                for (r = 2, a = 0; a < d; a++) h = h << 1 | 1 & r, g == t - 1 ? (g = 0, p.push(n(h)), h = 0) : g++, r >>= 1;
                for (;;) {
                    if (h <<= 1, g == t - 1) {
                        p.push(n(h));
                        break
                    }
                    g++
                }
                return p.join("")
            },
            decompress: function(e) {
                return null == e ? "" : "" == e ? null : o._decompress(e.length, 32768, function(t) {
                    return e.charCodeAt(t)
                })
            },
            _decompress: function(e, n, a) {
                var r = [],
                    o, i = 4,
                    s = 4,
                    l = 3,
                    f = "",
                    c = [],
                    u, d, p, h, g, m, v, y = {
                        val: a(0),
                        position: n,
                        index: 1
                    };
                for (u = 0; u < 3; u += 1) r[u] = u;
                for (p = 0, g = Math.pow(2, 2), m = 1; m != g;) h = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), p |= (h > 0 ? 1 : 0) * m, m <<= 1;
                switch (o = p) {
                    case 0:
                        for (p = 0, g = Math.pow(2, 8), m = 1; m != g;) h = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), p |= (h > 0 ? 1 : 0) * m, m <<= 1;
                        v = t(p);
                        break;
                    case 1:
                        for (p = 0, g = Math.pow(2, 16), m = 1; m != g;) h = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), p |= (h > 0 ? 1 : 0) * m, m <<= 1;
                        v = t(p);
                        break;
                    case 2:
                        return ""
                }
                for (r[3] = v, d = v, c.push(v);;) {
                    if (y.index > e) return "";
                    for (p = 0, g = Math.pow(2, l), m = 1; m != g;) h = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), p |= (h > 0 ? 1 : 0) * m, m <<= 1;
                    switch (v = p) {
                        case 0:
                            for (p = 0, g = Math.pow(2, 8), m = 1; m != g;) h = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), p |= (h > 0 ? 1 : 0) * m, m <<= 1;
                            r[s++] = t(p), v = s - 1, i--;
                            break;
                        case 1:
                            for (p = 0, g = Math.pow(2, 16), m = 1; m != g;) h = y.val & y.position, y.position >>= 1, 0 == y.position && (y.position = n, y.val = a(y.index++)), p |= (h > 0 ? 1 : 0) * m, m <<= 1;
                            r[s++] = t(p), v = s - 1, i--;
                            break;
                        case 2:
                            return c.join("")
                    }
                    if (0 == i && (i = Math.pow(2, l), l++), r[v]) f = r[v];
                    else {
                        if (v !== s) return null;
                        f = d + d.charAt(0)
                    }
                    c.push(f), r[s++] = d + f.charAt(0), i--, d = f, 0 == i && (i = Math.pow(2, l), l++)
                }
            }
        };
    return o
}();
"function" == typeof define && define.amd ? define(function() {
        return LZString
    }) : "undefined" != typeof module && null != module ? module.exports = LZString : "undefined" != typeof angular && null != angular && angular.module("LZString", []).factory("LZString", function() {
        return LZString
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function($) {
        function e(e, t) {
            var n = t.times,
                a = e.timeout;
            return function(r, o, i) {
                function s() {
                    $.ajax(l).retry({
                        times: n - 1,
                        timeout: t.timeout,
                        statusCodes: t.statusCodes
                    }).pipe(f.resolve, f.reject)
                }
                var l = this,
                    f = new $.Deferred,
                    c = e.getResponseHeader("Retry-After");
                return n > 1 && (!e.statusCodes || $.inArray(r.status, e.statusCodes) > -1) ? (c && (a = isNaN(c) ? new Date(c).getTime() - $.now() : 1e3 * parseInt(c, 10), (isNaN(a) || a < 0) && (a = e.timeout)), void 0 !== a ? setTimeout(s, a) : s()) : f.rejectWith(this, arguments), f
            }
        }
        $.ajaxPrefilter(function(t, n, a) {
            a.retry = function(t) {
                return t.timeout && (this.timeout = t.timeout), t.statusCodes && (this.statusCodes = t.statusCodes), this.pipe(null, e(this, t))
            }
        })
    });
var isCacheEnabled = !0,
    showSignUpCTAPhotoInterval, isUploadingFileRightNow = !1,
    channelToUploadFileTo, currentImageBeingPreviewedObject, autoCompleteActive = !1,
    isUserDraggingGallery = !1,
    autoCompleteQuery = "",
    emoji = new EmojiConvertor,
    dragging = !1,
    ajaxRequestTimeout, refreshChannelListIntervalTime = 6e4,
    addDotsToNoticeInterval, prevLine = "",
    line = "",
    searchStoppedTypingTimeout, refreshChatAjaxRequest, internetDisconnectedTimeout, lazyloadTimeOut, recipient_user_id = "",
    private = "false",
    lastHash = "load",
    lastMentionHash = "load",
    lastChannelListHash = "load",
    refreshChatInterval, refreshChannelListInterval, startChatIntervalTime = 3e3,
    currentChannelListIntervalTime = startChatIntervalTime,
    currentChatIntervalTime = startChatIntervalTime,
    slowDownIntervalTime = 1e3,
    minChatIntervalTime = 3e3,
    maxChatIntervalTime = 15e3,
    minChannelListIntervalTime = 1e4,
    maxChannelListIntervalTime = 3e4,
    pollingNow = !1,
    earliestChatEpoch = 0,
    latestChatEpoch = 0,
    earliestChannelListEpoch = 0,
    latestChannelListEpoch = 0,
    isPushEnabled = !1,
    useNotifications = !1,
    channelsCache = {},
    channelListCache = {},
    Notification;
epoch = Math.floor((new Date).getTime());
var blurTime = epoch,
    newMessagesSinceBlur = 0,
    touchXStart, touchYStart, touchXEnd, touchYEnd, chatBoxPosX = 0,
    isTabFocused = !0,
    isTeamListScrolling = !1,
    isChannelListScrolling = !1,
    isLiveContainerScrolling = !1,
    isLiveContainerScrollingTimeout = setTimeout(function() {}, 0),
    isUserDraggingTeamList = !1,
    isUserDraggingChannelList = !1,
    isUserDraggingLiveContainer = !1,
    liveContainerScrollStartY = 0;
standalone = window.navigator.standalone, userAgent = window.navigator.userAgent.toLowerCase(), safari = /safari/.test(userAgent), ios = /iphone|ipod|ipad/.test(userAgent);
var insideUiWebView = !1;
if (ios)
    if (!standalone && safari);
    else if (standalone && !safari);
else if (!standalone && !safari) var insideUiWebView = !0;
if (console.log("localStorage used: " + checkLocalStorageSpaceUsed()), checkLocalStorageSpaceUsed() > 4e3 && (console.log("clearing localStorage because over 4MB used"), localStorage.clear()), empty(localStorage.getItem("channelsCache20170306")) || (channelsCache = JSON.parse(LZString.decompress(localStorage.getItem("channelsCache20170306")))), empty(localStorage.getItem("channelListCache20170306")) || (channelsCache = JSON.parse(LZString.decompress(localStorage.getItem("channelListCache20170306")))), console.log("channelsCache", channelsCache), setInterval(function() {
        consoleNotlog(". " + Math.random())
    }, 1e3), consoleNotlog(localStorage), document.addEventListener("DOMContentLoaded", function() {
        Notification && "granted" !== Notification.permission && Notification.requestPermission()
    }), "undefined" == typeof top) var insideIframe = !1;
else if (top.location != self.location) var insideIframe = !0;
else var insideIframe = !1;
consoleNotlog("insideIframe", insideIframe);
var y = 0;
"_all_channels" == activeChannel && (activeChannel = "all_channels"), "_all_messages" == activeChannel && (activeChannel = "all_channels"), $(function() {
    function e() {
        $(".chat-box .time").each(function() {
            $(this).text(timeAgoShort($(this).data("epoch")))
        }), $(".chat-box .divider").each(function() {
            date("Y-m-d", $(this).data("epoch") / 1e3) == date("Y-m-d") ? label = "Today" : date("Y-m-d", $(this).data("epoch") / 1e3) == date("Y-m-d", strtotime("-24 hours")) ? label = "Yesterday" : label = date("F j", $(this).data("epoch") / 1e3), $(this).html("<span>" + label + "</span>")
        })
    }

    function t(e, t) {
        if (console.log("sendMessage", e), !empty(t)) var n = t;
        if (empty(t)) var n = activeChannel;
        var a = new Date,
            o = a.getHours(),
            i = a.getMinutes();
        if (o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), time = o + ":" + i, empty(e)) var e = $(".chat .text-box").val();
        else var e = e;
        var e = e.trim();
        if (!empty(e) || 0 == e) {
            $('.channel_list li[data-channel="' + n + '"]').length > 0 && (html = $('.channel_list li[data-channel="' + n + '"]')[0].outerHTML, $('.channel_list li[data-channel="' + n + '"]').remove(), $(".channel_list li").eq(0).after(html), $('.channel_list li[data-channel="' + n + '"] .lastMessage').html(selfUsername + ": " + e), $('.channel_list li[data-channel="' + n + '"] .time').text(""), html = $('.channel_list li[data-channel="All Channels"]').outerHTML(), $('.channel_list li[data-channel="All Channels"]').remove(), $(".channel_list").prepend(html)), channelListCache[activeTeam] = $(".channel_list").html();
            try {
                localStorage.setItem("channelListCache20170306", LZString.compress(JSON.stringify(channelListCache)))
            } catch (e) {}
            currentChatIntervalTime = startChatIntervalTime, consoleNotlog("Messages: Polling every " + currentChatIntervalTime / 1e3 + " seconds"), epoch = Math.floor((new Date).getTime()), message = linkify(e), empty(e.trim()) || (message = markdownToHTML(message), newLine = "", words = explode(" ", message), words.forEach(function(e, t, n) {
                stripped = strip_tags(e), "@" == stripped.substr(0, 1) && (e = '<a class="action-show-user" data-username="' + stripped.substr(1, stripped.length) + '">' + e + "</a>"), "#" == stripped.substr(0, 1) && (e = '<a class="action-open-channel" data-channel="' + stripped.substr(1, stripped.length) + '">' + e + "</a>"), newLine = newLine + " " + e
            }), onlyEmojiMsg = "", ":" == message.substr(0, 1) && ":" == message.slice(-1) && (onlyEmojiMsg = "only-emoji-msg"), message = emojify(newLine.trim()), message = markdownToHTML(message), epoch = Math.floor((new Date).getTime()), clearInterval(refreshChatInterval), messageSource = "", source = '<a target="_new" href="https://nomadlist.com/chat">web</a>', messageSource = '<div class="source">' + source + "</div>", $(".chat .live .msg-box").last().find(".username").text() == selfUsername ? $(".chat .live").append('<div class="msg-box ' + onlyEmojiMsg + ' grouped-message temporarySelfMessages"><div class="message"><div class="username" style="display:none">' + selfUsername + '</div><div class="msg">' + message + "</div></div></div>") : $(".chat .live").append('<div class="msg-box ' + onlyEmojiMsg + ' temporarySelfMessages"><div class="img avatar ' + selfUsername + '" data-avatar="' + selfUserAvatarUrl + '" data-username="' + selfUsername + '" style="background-image:url(\'' + selfUserAvatarUrl + '\');"></div><div class="message"><div class="username">' + selfUsername + "</div>" + messageSource + ' <div class="time" data-epoch="' + epoch / 1e3 + '">' + timeAgoShort(epoch / 1e3) + '</div><div class="msg">' + e + "</div></div></div>"), "all_channels" == n && r(generalChannel), private = !1, t = n, "@" == n.substr(0, 1) && (t = n.substr(1, n.length), private = !0), private ? data = {
                action: "message-channel",
                username: t,
                message: e,
                team: activeTeam,
                epoch: epoch,
                private: private,
                earliestEpoch: earliestChatEpoch,
                latestEpoch: latestChatEpoch,
                recipient_user_id: recipient_user_id
            } : data = {
                action: "message-channel",
                channel: t,
                message: e,
                team: activeTeam,
                epoch: epoch,
                private: private,
                earliestEpoch: earliestChatEpoch,
                latestEpoch: latestChatEpoch,
                recipient_user_id: recipient_user_id
            }, console.log("ajaxing /chat PUT"), $.ajax({
                url: "/chat",
                type: "PUT",
                dataType: "json",
                async: !0,
                data: data,
                context: document.body
            }).done(function(e) {
                console.log("ajaxing done! /chat PUT"), console.log(e), $(".temporarySelfMessages").remove(), f(e), refreshChatInterval = setInterval(function() {
                    l()
                }, currentChatIntervalTime)
            }), $(".chat-box .live-container").scrollTop($(".chat-box .live-container")[0].scrollHeight + 200), $(".chat .text-box").val(""))
        }
    }

    function n(e) {
        var t = [],
            n = "";
        channelToUploadFileTo = activeChannel;
        for (var a, r = 0, o; o = e[r]; r++) {
            console.log(r);
            var i = new FileReader;
            i.readAsDataURL(o);
            var a = o.name;
            i.onload = function(e) {
                imageAsBase64 = e.target.result, array = explode(",", imageAsBase64), imageAsBase64 = array[1], $(".chat-box .notice").html("Uploading"), $(".chat-box .notice").show(), $(".chat-box .notice").data("original-width", $(".chat-box .notice").width()), $(".chat-box .notice").css("width", "20vw"), $(".chat-box .notice").animate({
                    width: "+250"
                }, 2e4, function() {
                    $(".chat-box .notice").css("width", $(".chat-box .notice").data("original-width") + "px")
                }), "undefined" != typeof addDotsToNoticeInterval && clearInterval(addDotsToNoticeInterval), addDotsToNoticeInterval = setInterval(function() {
                    $(".chat-box .notice").html(str_replace("....", "", $(".chat-box .notice").html() + "."))
                }, 500), console.log("ajaxing https://api.imgur.com/3/upload"), $.ajax({
                    url: "https://api.imgur.com/3/upload",
                    headers: {
                        authorization: "Client-ID 54d591aedeba2d4"
                    },
                    type: "POST",
                    data: {
                        image: imageAsBase64
                    },
                    context: document.body,
                    error: function(e, t, n) {
                        $(".chat-box .notice").text("Couldn't upload image: " + n), clearInterval(addDotsToNoticeInterval), isUploadingFileRightNow = !1
                    },
                    success: function(e) {
                        $(".chat-box .notice").stop(), $(".chat-box .notice").css("width", $(".chat-box .notice").data("original-width") + "px"), $(".chat-box .notice").removeClass("uploading"), isUploadingFileRightNow = !1, imgUrl = str_replace("http:", "https:", e.data.link), filenameText = "", empty(a) || (filenameText = " " + a), origMessage = "_@" + selfUsername + " uploaded this image:_ " + imgUrl, private = !1, channel = activeChannel, "@" == activeChannel.substr(0, 1) && (channel = activeChannel.substr(1, activeChannel.length), private = !0), private ? data = {
                            action: "message-channel",
                            username: channel,
                            message: origMessage,
                            team: activeTeam,
                            epoch: epoch,
                            private: private,
                            earliestEpoch: earliestChatEpoch,
                            latestEpoch: latestChatEpoch,
                            recipient_user_id: recipient_user_id
                        } : data = {
                            action: "message-channel",
                            channel: channel,
                            message: origMessage,
                            team: activeTeam,
                            epoch: epoch,
                            private: private,
                            earliestEpoch: earliestChatEpoch,
                            latestEpoch: latestChatEpoch,
                            recipient_user_id: recipient_user_id
                        }, console.log("ajaxing /chat PUT"), $.ajax({
                            url: "/chat",
                            type: "PUT",
                            dataType: "json",
                            async: !0,
                            data: data,
                            context: document.body
                        }).done(function(e) {
                            console.log("ajaxing done! /chat PUT"), $(".chat-box .notice").hide(), clearInterval(addDotsToNoticeInterval), consoleNotlog(e), f(e)
                        })
                    }
                })
            }
        }
    }

    function a() {
        setTimeout(function() {
            console.log("refreshGallery"), galleryHtml = "", $(".loading_spinner").addClass("show"), $(".gallery").hasClass("media-gallery") ? (console.log("refreshGallery for media-gallery"), $(".chat-box .live .img").each(function() {
                imgUrl = $(this).data("bg"), empty(imgUrl) || (galleryHtml = '<div class="img" style="background-image:url(\'' + imgUrl + '\');" data-bg="' + imgUrl + '"></div>' + galleryHtml)
            })) : $(".gallery").hasClass("links-gallery") && (console.log("refreshGallery for links-gallery"), $(".chat-box .live .link").each(function() {
                galleryHtml = '<div class="link">' + $(this).html() + "</div>" + galleryHtml
            })), $(".gallery").html(galleryHtml), $(".loading_spinner").removeClass("show")
        }, 500)
    }

    function r(t, n) {
        if ($(".gallery").hasClass("show") && $(".gallery").html(""), console.log("switchChannel", t), t == activeChannel && !empty($(".chat-box .live").text())) return void console.log("switching to same channel as current, so do nothing");
        for (clearTimeout(ajaxRequestTimeout), clearInterval(refreshChatInterval), $(".chat-box .live").html(""), activeChannel = t, "@" == activeChannel.substr(0, 1) ? (console.log("this channel is a @person"), $(".chat-box .text-box").attr("placeholder", "Message " + activeChannel), document.title = activeChannel, username = activeChannel.substr(1, activeChannel.length), $("html").addClass("user-box-expanded"), $(".user-container").data("username", username), $(".user-container .username").text(username), user_id = allUsers[username], avatar = allUsersAvatars[username], $(".user-container").data("avatar", avatar), $(".user-container").data("user-id", user_id), $(".user-container .avatar").css("background-image", "url('" + avatar + "')")) : (isLoggedIn ? $(".chat-box .text-box").attr("placeholder", "Message #" + activeChannel) : "nomadlist" == activeTeam && "all_channels" == t ? $(".chat-box .text-box").attr("placeholder", "Message #" + activeTeam) : "nomadlist" == activeTeam ? $(".chat-box .text-box").attr("placeholder", "Message #" + activeChannel) : isLoggedIn && "all_channels" == t ? $(".chat-box .text-box").attr("placeholder", "Message #" + generalChannel) : isLoggedIn || "all" != activeTeam ? $(".chat-box .text-box").attr("placeholder", "Message #" + activeTeam) : $(".chat-box .text-box").attr("placeholder", "Message #" + activeChannel), document.title = activeChannel), prevLine = "", earliestChatEpoch = 0, latestChatEpoch = 0, $(".channel_list li").removeClass("active"), consoleNotlog('.channel_list li[data-channel="' + t + '"].removeClass(new)'), $('.channel_list li[data-channel="' + t + '"]').removeClass("new"), $('.channel_list li[data-channel="' + t + '"]').find(".newMessageCount").remove(), $('.channel_list li[data-channel="' + t + '"]').addClass("active"), empty(localStorage.channelListHTML20170306) && (localStorage.channelListHTML20170306 = {}), localStorage.channelListHTML20170306[activeTeam] = $(".chat .channel_list").html(), u(), html = "", i = 0; i < 5;) html = html + '<div class="msg-box placeholder"><div class="img avatar placeholder"></div><div class="message"><span class="username placeholder"></span><div class="msg placeholder" style="width:' + Math.floor(100 * Math.random()) + '%"></div></div></div>\n', html = html + '<div class="msg-box grouped-message placeholder "><div class="msg placeholder" style="width:' + Math.floor(100 * Math.random()) + '%"></div></div>', html = html + '<div class="msg-box grouped-message placeholder"><div class="msg placeholder" style="width:' + Math.floor(100 * Math.random()) + '%"></div></div>', html = html + '<div class="msg-box grouped-message placeholder"><div class="msg placeholder" style="width:' + Math.floor(100 * Math.random()) + '%"></div></div>', html = html + '<div class="msg-box placeholder "><div class="img avatar placeholder"></div><div class="message"><span class="username placeholder"></span><div class="msg placeholder" style="width:' + Math.floor(100 * Math.random()) + '%"></div></div></div>\n', html = html + '<div class="msg-box grouped-message placeholder"><div class="msg placeholder" style="width:' + Math.floor(100 * Math.random()) + '%"></div></div>', html = html + '<div class="msg-box placeholder "><div class="img avatar placeholder"></div><div class="message"><span class="username placeholder"></span><div class="msg placeholder" style="width:' + Math.floor(100 * Math.random()) + '%"></div></div></div>\n', i++;
        console.log("added " + i + " placeholder messages"), $(".chat-box .live-container .live").html(html), $(".loading_screen").hide(), console.log("scroll all the way down in messages"), $(".chat-box .live-container").scrollTop($(".chat-box .live-container")[0].scrollHeight + 200), setTimeout(function() {
            console.log("scroll all the way down in messages again"), $(".chat-box .live-container").scrollTop($(".chat-box .live-container")[0].scrollHeight + 200)
        }, 1e3), console.log("setting time from epoch to readable for messages"), $(".chat-box .live .time").each(function() {
            $(this).text(timeAgoShort($(this).data("epoch")))
        }), window.location.hostname.indexOf("hashtag") > -1 || window.location.hostname.indexOf("icecream") > -1 ? (reddit = "reddit_", "reddit_" == activeTeam.substring(0, reddit.length) ? history.replaceState(null, null, "/r/" + str_replace("reddit_", "", activeTeam) + "/" + activeChannel) : history.replaceState(null, null, "/" + activeTeam + "/" + activeChannel)) : history.replaceState(null, null, "/chat/" + activeChannel), "all_channels" == activeChannel ? ($(".chat-box .channel .name").text("All Channels"), $(".top-bar .activeChannel").text("All Channels"), $(".top-bar .activeChannel").html('<i class="fa fa-star"></i> ' + $(".top-bar .activeChannel").text())) : "@" == activeChannel.substr(0, 1) ? ($(".chat-box .channel .name").text(activeChannel), $(".top-bar .activeChannel").html('<i class="fa fa-star-o action-unstar-channel"></i> ' + activeChannel), $(".top-bar .activeChannel").html('<i class="fa fa-star action-star-channel"></i> ' + activeChannel)) : ($(".chat-box .channel .name").text("#" + activeChannel), $(".top-bar .activeChannel").text("#" + activeChannel)), lastHash = "load", empty(channelsCache) || (!empty(channelsCache[activeTeam]) && isCacheEnabled ? (console.log("found previous cache for team: " + activeTeam), empty(channelsCache[activeTeam][activeChannel]) ? ($(".chat-box .notice").html("Retrieving history"), addDotsToNoticeInterval = setInterval(function() {
            $(".chat-box .notice").html(str_replace("....", "", $(".chat-box .notice").html() + "."))
        }, 500), $(".chat-box .notice").show(), $(".loading_spinner").addClass("show")) : (console.log("found previous cache for channel: " + activeChannel), $(".chat-box .live").html(channelsCache[activeTeam][activeChannel].html), $(".gallery").hasClass("show") && a(), e(), $(".loading_spinner").removeClass("show"), earliestChatEpoch = channelsCache[activeTeam][activeChannel].earliestEpoch, latestChatEpoch = channelsCache[activeTeam][activeChannel].latestEpoch, epoch = Math.floor((new Date).getTime()), epoch - latestChatEpoch < 3600 && (console.log("cache is stale, older than 3600 seconds, retrieving new messages"), $(".chat-box .notice").html("Retrieving new messages"), $(".chat-box .notice").show(), "undefined" != typeof addDotsToNoticeInterval && clearInterval(addDotsToNoticeInterval), addDotsToNoticeInterval = setInterval(function() {
            $(".chat-box .notice").html(str_replace("....", "", $(".chat-box .notice").html() + "."))
        }, 500)), $(".chat-box .live-container").scrollTop($(".chat-box .live-container")[0].scrollHeight + 200), $(".chat-box .time").each(function() {
            $(this).text(timeAgoShort($(this).data("epoch")))
        }))) : ($(".chat-box .notice").html("Retrieving history"), addDotsToNoticeInterval = setInterval(function() {
            $(".chat-box .notice").html(str_replace("....", "", $(".chat-box .notice").html() + "."))
        }, 500), $(".chat-box .notice").show(), $(".loading_spinner").addClass("show"))), setTimeout(function() {
            console.log("refresChat(true)"), l(!0)
        }, 500)
    }

    function o() {
        consoleNotlog("refreshChannelList"), empty($(".search_channels").val()) && (channelListScrollTopPositionBeforeRefresh = $(".channel_list").scrollTop(), consoleNotlog("------------------------"), consoleNotlog("Channel list: Polling (" + latestChannelListEpoch + ") (" + currentChannelListIntervalTime + ")..."), consoleNotlog("------------------------"), consoleNotlog("refreshChannelList"), console.log("ajaxing /chat?action=get-channel_list"), $.ajax({
            url: "/chat?action=get-channel_list&team=" + activeTeam + "&latestEpoch=" + latestChannelListEpoch,
            dataType: "json",
            async: !0,
            context: document.body,
            error: function(e, t, n) {
                clearInterval(refreshChannelListInterval), refreshChannelListInterval = setInterval(function() {
                    o()
                }, currentChannelListIntervalTime), consoleNotlog("Channel list: AJAX error: " + n + ", now polling every " + currentChannelListIntervalTime / 1e3 + " seconds"), consoleNotlog(e.responseText), consoleNotlog("=======================")
            },
            success: function(e) {
                if (console.log("ajaxing done! /chat?action=get-channel_list"), consoleNotlog("======================="), consoleNotlog("Channel list: Received reply!"), consoleNotlog("======================="), "" == e) return currentChannelListIntervalTime = 2 * currentChannelListIntervalTime, currentChannelListIntervalTime > maxChannelListIntervalTime && (currentChannelListIntervalTime = maxChannelListIntervalTime), clearInterval(refreshChannelListInterval), refreshChannelListInterval = setInterval(function() {
                    o()
                }, currentChannelListIntervalTime), consoleNotlog("Channel list: Empty, polling every " + currentChannelListIntervalTime / 1e3 + " seconds"), void consoleNotlog("=======================");
                if (channelListOnlyHasUpdatedChannels = !1, 0 != latestChannelListEpoch && (channelListOnlyHasUpdatedChannels = !0), consoleNotlog("channelListOnlyHasUpdatedChannels", channelListOnlyHasUpdatedChannels), currentChannelListIntervalTime /= 2, currentChannelListIntervalTime < minChannelListIntervalTime && (currentChannelListIntervalTime = minChannelListIntervalTime), clearInterval(refreshChannelListInterval), refreshChannelListInterval = setInterval(function() {
                        o()
                    }, currentChannelListIntervalTime), consoleNotlog("Channel list: " + e.channels.length + " new channels! Polling every " + currentChannelListIntervalTime / 1e3 + " seconds"), consoleNotlog("======================="), epoch = Math.floor((new Date).getTime()), latestChannelListEpoch = epoch, consoleNotlog("latestChannelListEpoch", latestChannelListEpoch), html = "", e) {
                    e.channels.forEach(function(e, t, n) {
                        unread = "", e.epoch / 1e3 > strtotime("-1 hours") && (unread = "unread"), isEmpty = "", empty(e.epoch) && (isEmpty = "empty"), isUser = "", metaSpan = "", timeStamp = "", empty(e.epoch) || (timeStamp = '<div class="time" data-epoch="' + e.epoch / 1e3 + '">' + timeAgoShort(e.epoch / 1e3) + "</div>"), isNew = "", e.epoch / 1e3 > strtotime("-24 hours") && (isNew = "new"), str = e.channel, empty(e.channel) || (last = str.substring(str.lastIndexOf("/") + 1, str.length), e.channel = last, isPrivate = "", "true" == e.private || 1 == e.private ? (e.label = last, isPrivate = "private", e.channel = "@" + last) : e.label = last, e.message = str_replace("â", "'", e.message), showLastMessage = e.username + ": " + emojify(e.message), empty(e.message) && (showLastMessage = ""), "_all_channels" == e.channel && empty(e.avatar) && (e.avatar = activeTeamLogo), "_general" == e.channel && empty(e.avatar) && (e.avatar = activeTeamLogo), "-_general" == e.channel && empty(e.avatar) && (e.avatar = activeTeamLogo), "__general" == e.channel && empty(e.avatar) && (e.avatar = activeTeamLogo), "general" == e.channel && empty(e.avatar) && (e.avatar = activeTeamLogo), "all_channels" == e.channel && empty(e.avatar) && (e.avatar = activeTeamLogo), e.channel == generalChannel && empty(e.avatar) && (e.avatar = activeTeamLogo), avatar = e.avatar, empty(avatar) && "nomadlist" == activeTeam && !empty(e) && (avatar = "/assets/img/users/" + e.user_id + "-100px.jpg"), empty(avatar) || avatar.indexOf("facebook") !== -1 && (avatar = str_replace("/picture", "/picture?type=large", avatar)), empty(avatar) && (avatar = activeTeamLogo), e.avatar = avatar, e.channel = e.channel.toLowerCase(), e.label = e.label.toLowerCase(), "_all_channels" == e.channel && (e.label = "All Channels"), "all-channels" == e.channel && (e.label = "All Channels"), "all_channels" == e.channel && (e.label = "All Channels"), newMessageCount = "", channelListOnlyHasUpdatedChannels && (newMessageCount = '<span class="newMessageCount">&nbsp;</span>'), channelListOnlyHasUpdatedChannels ? ($('.channel_list li[data-channel="' + e.channel + '"]').remove(), html = '<li class="action-open-channel ' + isNew + " " + isPrivate + " " + e.channel + " " + isEmpty + '" data-channel="' + e.channel + '" data-label="' + e.label + '">' + timeStamp + '<div class="channel_right"><span class="channel_string">' + e.label + metaSpan + newMessageCount + '</span><span class="lastMessage">' + showLastMessage + "</span></div></li>", consoleNotlog("Channel list: prepending " + html), $(".chat .channel_list").prepend(html)) : html = html + '<li class="action-open-channel ' + isNew + " " + isPrivate + " " + e.channel + " " + isEmpty + '" data-channel="' + e.channel + '" data-label="' + e.label + '">' + timeStamp + '<div class="channel_right"><span class="channel_string">' + e.label + metaSpan + newMessageCount + '</span><span class="lastMessage">' + showLastMessage + "</span></div></li>")
                    }), channelListOnlyHasUpdatedChannels || $(".chat .channel_list").html(html), isChannelListScrolling = !1, localStorage.channelListHTML20170306[activeTeam] = $(".chat .channel_list").html(), html = $('.channel_list li[data-channel="all_channels"]').outerHTML(), $('.channel_list li[data-channel="all_channels"]').remove(), $(".channel_list").prepend(html);
                    var t = 20,
                        n = 0;
                    $(".channel_list li .image").each(function() {
                        $(this).css("background-image", "url('" + $(this).data("bg") + "')"), n > t || n++
                    }), $('.channel_list li[data-channel="' + activeChannel + '"]').addClass("active"), setTimeout(function() {
                        $(".channel_list").animate({
                            scrollTop: 1
                        }, 0), $(".channel_list").animate({
                            scrollTop: 0
                        }, 0), $(".channel_list").animate({
                            scrollTop: channelListScrollTopPositionBeforeRefresh
                        }, 0)
                    }, 500), channelListScrollTopPositionBeforeRefresh = $(".channel_list").scrollTop()
                }
            }
        }))
    }

    function l(e) {
        tz_offset = 60 * (new Date).getTimezoneOffset(), pollingNow && !e || (consoleNotlog("------------------------"), consoleNotlog("Messages: Polling #" + activeChannel + " (" + latestChatEpoch + ") (" + currentChatIntervalTime + ")..."), consoleNotlog("------------------------"), pollingNow = !0, clearInterval(refreshChatInterval), ajaxRequestTimeout = setTimeout(function() {
            consoleNotlog("Messages: Timeout after 30 seconds, let's try again"), consoleNotlog("======================="), l(!0)
        }, 3e4), private = !1, channel = activeChannel, "@" == activeChannel.substr(0, 1) && (channel = activeChannel.substr(1, activeChannel.length), private = !0), console.log("ajaxing /chat?action=get-messages"), refreshChatAjaxRequest = $.ajax({
            url: "/chat",
            dataType: "json",
            async: !0,
            type: "GET",
            data: {
                action: "get-messages",
                tz_offset: tz_offset,
                channel: activeChannel,
                team: activeTeam,
                hash: lastHash,
                private: private,
                recipient_user_id: recipient_user_id,
                earliestEpoch: earliestChatEpoch,
                latestEpoch: latestChatEpoch
            },
            context: document.body,
            error: function(e, t, n) {
                isHostReachable() ? ($(".chat-box .notice").html("Chat is currently unavailable"), console.log("Chat is currently unavailable"), console.log(e, t, n), $(".chat-box .notice").show()) : ($(".chat-box .notice").html("No internet connection"), $(".chat-box .notice").show()), consoleNotlog("Messages: AJAX error: " + n + ", now polling every " + currentChatIntervalTime / 1e3 + " seconds"), consoleNotlog(e.responseText), consoleNotlog("======================="), clearInterval(refreshChatInterval), refreshChatInterval = setInterval(function() {
                    l()
                }, currentChatIntervalTime)
            },
            success: function(e) {
                return console.log("ajaxing done for #" + e.channel + " and we are in #" + activeChannel), e.channel != activeChannel ? (console.log("ajax back for wrong channel: " + e.channel + " but we are in " + activeChannel + " already"), !1) : void f(e)
            }
        }))
    }

    function f(e) {
        if (e.success) {
            if (console.log("reply", e), console.log("reply.messages", e.messages), console.log("reply.messages.length", e.messages.length), console.log("A"), $(".loading_screen").hide(), $(".chat-box .notice").hide(), "undefined" != typeof addDotsToNoticeInterval && clearInterval(addDotsToNoticeInterval), console.log("B"), clearTimeout(ajaxRequestTimeout), $(".loading_spinner").removeClass("show"), $(".loading-channel-notice").remove(), $(".loading_spinner").removeClass("show"), console.log("C"), console.log("======================="), console.log("Messages: Received reply for #" + activeChannel + " (" + e.messages.length + ")!"), console.log("======================="), console.log("D"), pollingNow = !1, console.log("E"), 0 == e.messages.length && 0 == $(".chat-box .live .msg-box:not(.placeholder").length) return console.log("channel is empty! show new channel message!"), void("nomadlist" != activeTeam && t("_This is #" + activeChannel + ", a new public channel created by @" + selfUsername + "_"));
            if (console.log("G"), !(e.latestEpoch < latestChatEpoch)) {
                if (console.log("H"), latestChatEpoch > 0 && (!e || empty(e) || 0 == e.messages.length)) return currentChatIntervalTime = 2 * currentChatIntervalTime, currentChatIntervalTime > maxChatIntervalTime && (currentChatIntervalTime = maxChatIntervalTime), consoleNotlog("Messages: Empty reply, polling every " + currentChatIntervalTime / 1e3 + " seconds"), consoleNotlog("======================="), clearInterval(refreshChatInterval), void(refreshChatInterval = setInterval(function() {
                    l()
                }, currentChatIntervalTime));
                if (0 == e.messages.length) return consoleNotlog("Messages: Empty channel (no messages in there yet), polling every " + currentChatIntervalTime / 1e3 + " seconds"), consoleNotlog("======================="), void $(".chat-box .live").html("");
                if ($(".chat-box .live .placeholder").length > 0 && $(".chat-box .live").html(""), $(".unread").remove(), isTabFocused || (newMessagesSinceBlur += e.messages.length), newMessagesSinceBlur > 0)
                    for (x = 0, document.title = "(" + newMessagesSinceBlur + ") " + activeChannel; x < newMessagesSinceBlur;) $("html").append('<div class="unread"></div>'), x++;
                if (currentChatIntervalTime /= 2, currentChatIntervalTime < minChatIntervalTime && (currentChatIntervalTime = minChatIntervalTime), clearInterval(refreshChatInterval), refreshChatInterval = setInterval(function() {
                        l()
                    }, currentChatIntervalTime), lastHash = e.hash, consoleNotlog("Messages: " + e.messages.length + " new messages (before: " + latestChatEpoch + " / now: " + e.latestEpoch + ")! Polling every " + currentChatIntervalTime / 1e3 + " seconds"), consoleNotlog("======================="), "undefined" == typeof channelsCache && (channelsCache = {}), empty(channelsCache) && (channelsCache = {}), "undefined" == typeof channelsCache[activeTeam] && (channelsCache[activeTeam] = {}), "undefined" == typeof channelsCache[activeTeam][activeChannel] && (channelsCache[activeTeam][activeChannel] = {}, channelsCache[activeTeam][activeChannel].html = "", channelsCache[activeTeam][activeChannel].latestEpoch = 0, channelsCache[activeTeam][activeChannel].earliestEpoch = 0), earliestChatEpoch = e.earliestEpoch, latestChatEpoch = e.latestEpoch, channelsCache[activeTeam][activeChannel].latestEpoch = e.latestEpoch, channelsCache[activeTeam][activeChannel].earliestEpoch = e.earliestEpoch, consoleNotlog("channelsCache[activeTeam][activeChannel][latestEpoch]", channelsCache[activeTeam][activeChannel].latestEpoch),
                    userIsScrolledToBottom = !0, Math.abs($(".chat-box .live-container")[0].scrollHeight - $(".chat-box .live-container").scrollTop()) - $(".chat-box .live-container").outerHeight() < 10 ? userIsScrolledToBottom = !0 : userIsScrolledToBottom = !1, $(".chat-box .live .placeholder").length > 0 && (userIsScrolledToBottom = !0), e.messages.forEach(function(e, t, n) {
                        if (empty(e.message) || (e.message = e.message.replace(/<(?:.|\n)*?>/gm, "")), empty(e.username) || (e.username = e.username.replace(/<(?:.|\n)*?>/gm, "")), empty(e.user_id) || (e.user_id = e.user_id.replace(/<(?:.|\n)*?>/gm, "")), empty(e.avatar) || (e.avatar = e.avatar.replace(/<(?:.|\n)*?>/gm, "")), "undefined" == typeof prevLine && (prevLine = [], prevLine.epoch = 1e3), console.log("prevLine", prevLine), console.log("prevLine A", date("Y-m-d", e.epoch / 1e3)), console.log("prevLine B", date("Y-m-d", prevLine.epoch / 1e3)), date("Y-m-d", e.epoch / 1e3) != date("Y-m-d", prevLine.epoch / 1e3) && "divider" != prevLine && (console.log("i am in!"), date("Y-m-d", e.epoch / 1e3) == date("Y-m-d") ? label = "Today" : date("Y-m-d", e.epoch / 1e3) == date("Y-m-d", strtotime("-24 hours")) ? label = "Yesterday" : label = date("F j", e.epoch / 1e3), console.log("adding divider", label, e.message), divider = '<div class="divider" data-epoch="' + e.epoch + '"><span>' + label + "</span></div>", $(".chat-box .live").append(divider), prevLine = "divider"), e.message = str_replace("â", "'", e.message), !(e.message.indexOf("slack.com/files") > -1 || (e.message.indexOf("a href") === -1 && (e.message = linkify(e.message)), "undefined" != typeof selfUsername && (e.message = str_replace("@" + selfUsername, '<a class="action-show-user" data-username="' + selfUsername + '">@<span class="highlight">' + selfUsername + "</span></a>", e.message)), newLine = "", words = explode(" ", e.message), words.forEach(function(e, t, n) {
                                stripped = strip_tags(e), "@" == stripped.substr(0, 1) && (e = '<a class="action-show-user" data-username="' + stripped.substr(1, stripped.length) + '">' + e + "</a>"), "#" == stripped.substr(0, 1) && (e = '<a class="action-open-channel" data-channel="' + stripped.substr(1, stripped.length) + '">' + e + "</a>"), newLine = newLine + " " + e
                            }), e.message = newLine.trim(), e.message.indexOf("a href") === -1 && (messageLines = e.message.split("\n"), newMessage = "", messageLines.forEach(function(e, t, n) {
                                "> " == e.substr(0, 2) ? newMessage = newMessage + '\n<span class="quote">' + e.slice(2) + "</span>" : "&gt; " == e.substr(0, 5) ? newMessage = newMessage + '\n<span class="quote">' + e.slice(5) + "</span>" : newMessage = newMessage + "\n" + e
                            }), newMessage = newMessage.trim(), e.message = newMessage), empty(e.links) || (consoleNotlog(e.links), "null" !== e.links && e.links.length > 0 && JSON.parse(e.links).forEach(function(t, n, a) {
                                consoleNotlog(t), empty(t.url) || (t.url = t.url.replace(/<(?:.|\n)*?>/gm, "")), t.description = str_replace("\n", "", t.description), imgHtml = "", faviconHtml = "", empty(t.image) && empty(t.title) || (empty(t.favicon) || "undefined" == t.favicon || (faviconHtml = '<div class="favicon" style="background-image:url(\'' + t.favicon + "');\" /></div>"), websiteHtml = "", empty(t.website) || (websiteHtml = '<span class="website">' + t.website + "</span>\n"), titleHtml = "", empty(t.title) || "undefined" == t.title || (t.title = t.title.replace(/<(?:.|\n)*?>/gm, ""), titleHtml = '<a target="_new" href="' + t.url + '">' + t.title + "</a>"), descriptionHtml = "", empty(t.description) || "undefined" === t.description || (t.description = t.description.replace(/<(?:.|\n)*?>/gm, ""), empty(t.description) || (descriptionHtml = t.description + "\n")), empty(t.image) || (t.image = str_replace(".gifv", ".gif", t.image), t.image = t.image.replace(/<(?:.|\n)*?>/gm, ""), imgHtml = '<a target="_new" href="' + t.url + '"><div class="img big" data-bg="' + t.image + '" style="background-image:url(\'' + t.image + "');\" /></div></a>", t.url.indexOf("gfycat.com") !== -1 && (array = explode("gfycat.com/", t.url), t.image = t.image.replace("thumb100", "poster"), t.video = "https://giant.gfycat.com/" + array[1] + ".mp4", t.title = ";", titleHtml = "", t.description = "", descriptionHtml = "", imgHtml = '<a target="_new" href="' + t.url + '"><div class="img big" data-bg="' + t.image + '" data-video="' + t.video + '" style="background-image:url(\'' + t.image + "');\" /></div></a>")), t.url.indexOf("google.com/maps") === -1 && t.url.indexOf("maps.google.com/") === -1 && t.url.indexOf("bing.com/maps") === -1 && t.url.indexOf("maps.bing.com") === -1 || (array = explode("https://maps.google.com/?q=", t.url), latitude = "", longitude = "", empty(array[1]) || (array = explode(",", array[1]), latitude = array[0], longitude = array[1]), array = explode("https://www.bing.com/maps/?q=", t.url), empty(array[1]) || (array = explode(",", array[1]), latitude = array[0], longitude = array[1]), empty(latitude) || empty(longitude) || (windowSize().width < 800 ? imgHtml = '<iframe scrolling="no" width="200" height="160" style="overflow:hidden !important;" frameborder="0" src="https://www.bing.com/maps/embed/viewer.aspx?cp=' + latitude + "~" + longitude + "&q=" + latitude + "," + longitude + '&v=3&amp;&amp;lvl=16&amp;w=325&amp;h=280&amp;sty=r&amp;typ=d&amp;pp=&amp;ps=&amp;dir=0&amp;mkt=en-us&amp;src=SHELL&amp;form=BMEMJS"></iframe>' : imgHtml = '<iframe scrolling="no" width="320" height="285" style="overflow:hidden !important;" frameborder="0" src="https://www.bing.com/maps/embed/viewer.aspx?cp=' + latitude + "~" + longitude + "&q=" + latitude + "," + longitude + '&v=3&amp;&amp;lvl=14&amp;w=325&amp;h=280&amp;sty=r&amp;typ=d&amp;pp=&amp;ps=&amp;dir=0&amp;mkt=en-us&amp;src=SHELL&amp;form=BMEMJS"></iframe>')), label_1 = "", empty(t.label_1) || (label_1 = '<span class="label"><strong>' + t.label_1 + "</strong><br>" + t.value_1 + "</span>"), label_2 = "", empty(t.label_2) || (label_2 = '<span class="label"><strong>' + t.label_2 + "</strong><br>" + t.value_2 + "</span>"), e.message = e.message + '\n<span class="link">' + faviconHtml + websiteHtml + titleHtml + descriptionHtml + imgHtml + label_1 + label_2 + "</span>")
                            })), onlyEmojiMsg = "", ":" == e.message.substr(0, 1) && ":" == e.message.substr(e.message.length - 1, e.message.length) && (onlyEmojiMsg = "only-emoji-msg"), empty(e.message) || (e.message = emojify(e.message)), e.message = markdownToHTML(e.message), empty(e.message)))) {
                            if (inChannel = "", empty(e.channel) || activeChannel != e.channel && (inChannel = ' <span class="link-to-channel"> in <a class="action-open-channel" data-channel="' + e.channel + '">#' + e.channel + "</a></span>"), "all" == activeTeam && (empty(e.channel) || activeChannel != e.channel && (inChannel = ' <span class="link-to-channel"> in <a href="/' + e.team + "/" + e.channel + '">' + e.team + "/#" + e.channel + "</a></span>")), avatar = e.avatar, empty(avatar) && "nomadlist" == activeTeam && !empty(e) && (avatar = "/assets/img/users/" + e.user_id + "-100px.jpg"), empty(avatar) || avatar.indexOf("facebook") !== -1 && (avatar = e.avatar, avatar = str_replace("/picture", "/picture?type=large", avatar)), empty(avatar) && (avatar = activeTeamLogo), "web" == e.source && (e.source = '<a target="_new" href="https://nomadlist.com/chat">web</a>'), "slack" == e.source && (e.source = ""), messageSource = "", empty(e.source) || (messageSource = '<div class="source">' + e.source + "</div>"), html = '<div class="msg-box ' + onlyEmojiMsg + '"><a><div class="img avatar ' + e.username + '" data-username="' + e.username + '" data-avatar="' + avatar + '" style="background-image:url(' + avatar + ');" /></a><div class="message"><a><span class="username">' + e.username + "</span></a>" + messageSource + inChannel + ' <div class="time" data-epoch="' + e.epoch / 1e3 + '">' + timeAgoShort(e.epoch / 1e3) + '</div><div class="msg">' + str_replace("\n", "<br>", e.message) + "</div></div></div>\n", t > 0 && "divider" != prevLine && "" != prevLine.username && e.username == prevLine.username && e.channel == prevLine.channel && e.epoch - prevLine.epoch < 3e5 && "reddit" != e.source && (console.log("grouping messages:", e, prevLine), html = '<div class="msg-box grouped-message"><div class="msg">' + str_replace("\n", "<br>", e.message) + "</div></div>"), prevLine = e, html == $(".chat-box .live").html()) return;
                            $(".chat-box .live").append(html), "undefined" == typeof channelsCache[activeTeam] && (channelsCache[activeTeam] = {}), "undefined" == typeof channelsCache[activeTeam][activeChannel] && (channelsCache[activeTeam][activeChannel] = {}, channelsCache[activeTeam][activeChannel].html = ""), channelsCache[activeTeam][activeChannel].html = $(".chat-box .live").html()
                        }
                    }), slicedHTML = [], maxChatMessages = 50, console.log($(".chat-box .live .msg-box").length, maxChatMessages), $(".chat-box .live .msg-box").length > maxChatMessages) {
                    console.log("remove", $(".chat-box .live .msg-box").length - maxChatMessages), amountOfMessageBoxes = $(".chat-box .live .msg-box").length;
                    for (var n = 0; n < amountOfMessageBoxes - maxChatMessages;) $(".chat-box .live .msg-box")[0].remove(), n++
                }
                try {
                    localStorage.setItem("channelsCache20170306", LZString.compress(JSON.stringify(channelsCache)))
                } catch (e) {}
                $(".gallery").hasClass("show") && a(), userIsScrolledToBottom ? ($(".chat-box .live-container").scrollTop($(".chat-box .live-container")[0].scrollHeight + 200), $(".chat-box .live img").length > 0 && $(".chat-box .live img").on("load", function() {
                    changedCauseImageLoad = $(".chat-box .live-container")[0].scrollHeight - y, console.log("changedCauseImageLoad", changedCauseImageLoad)
                })) : (s = "", e.messages.length > 1 && (s = "s"), $(".chat-box .notice").html('<i class="fa fa-arrow"></i> ' + e.messages.length + " new message" + s + " below"), $(".chat-box .notice").show()), $(".loading_spinner").removeClass("show")
            }
        }
    }

    function c() {
        consoleNotlog("openChannelList"), $("html").addClass("left_list_expanded"), windowSize().width > 800 || (isUserDraggingLiveContainer = !1, $(".top-bar").css("transform", "translateX(" + viewportToPixels("80vw") + "px) translateZ(0px)"), $(".chat-box").css("transform", "translateX(" + viewportToPixels("80vw") + "px) translateZ(0px)"), $(".left_list").css("transform", "translateX(0px) translateZ(0px)"), $(".search_channels").css("transform", "translateX(0px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(0px) translateZ(0px)"))
    }

    function u() {
        consoleNotlog("closeChannelList"), $("html").removeClass("left_list_expanded"), windowSize().width > 800 || (isUserDraggingLiveContainer = !1, $(".top-bar").css("transform", "translateX(0px)"), $(".chat-box").css("transform", "translateX(0px)"), $(".left_list").css("transform", "translateX(-" + viewportToPixels("80vw") + "px) translateZ(0px)"), $(".search_channels").css("transform", "translateX(-" + viewportToPixels("80vw") + "px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(-" + viewportToPixels("80vw") + "px) translateZ(0px)"))
    }

    function d() {
        $(".modal.login").addClass("show"), $(".backdrop.login").addClass("show")
    }

    function p() {
        number = Math.floor(34 * Math.random()) + 1, $(".modal.sign-up.cta .photo").data("photo", number), h("/assets/meetup-" + number + ".jpg", ".modal.sign-up.cta .photo"), showSignUpCTAPhotoInterval = setInterval(function() {
            number = $(".modal.sign-up.cta .photo").data("photo") + 1, number > 30 && (number = 1), $(".modal.sign-up.cta .photo").data("photo", number), h("/assets/meetup-" + number + ".jpg", ".modal.sign-up.cta .photo")
        }, 2e3), $("html").addClass("stick"), $(".backdrop").addClass("show"), $(".modal.sign-up.cta").addClass("show")
    }

    function h(e, t) {
        consoleNotlog("preloading " + e);
        var n = new Image;
        n.src = e, n.onload = function() {
            consoleNotlog("preloaded " + e);
            var a = "url(" + n.src + ")";
            $(t).css("background-image", a)
        }
    }
    if (isLoggedIn ? console.log("user", selfUsername, selfUserAvatarUrl, isLoggedIn) : console.log("user", isLoggedIn), "#_=_" != window.location.hash && "_=_" != window.location.hash || (window.location.hash = ""), $(".top-bar .brand").bind("click", function(e) {
            c(), e.preventDefault(), e.stopPropagation()
        }), $(".top-bar .brand .logo").css("margin-right", "0em"), $(".top-bar .brand").append('<h2 class="h activeChannel"></h2>'), console.log("activeTeamLogo", activeTeamLogo), $(".action-toggle-mobile-nav").remove(), empty(activeTeamLogo)) {
        if (empty(activeTeamLogo)) {
            url = "https://logo.clearbit.com/" + activeTeam + ".com", console.log(url);
            var g;
            g = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            try {
                g.open("GET", url, !1), g.send(), 404 === g.status || ($(".top-bar .brand .logo").attr("src", url), activeTeamLogo = url)
            } catch (e) {}
        }
    }
    for ($("#favicon").attr("href", activeTeamLogo), $("body").on("click touchend", ".chat-box .live .msg-box .img.avatar", function(e) {
            isUserDraggingLiveContainer || (e.preventDefault(), e.stopPropagation(), username = $(this).data("username"), user_id = allUsers[username], avatar = $(this).data("avatar"), $(".user-container").data("avatar", avatar), $(".user-container").data("username", username), $(".user-container").data("user-id", user_id), $(".user-container .avatar").css("background-image", "url('" + avatar + "')"), $(".user-container .username").text(username), $("html").addClass("user-box-expanded"))
        }), $("body").on("touchmove", function() {
            dragging = !0
        }), $("body").on("touchend", function() {}), $("body").on("touchstart", function() {
            dragging = !1
        }), $(".live-container").bind("touchstart", function() {
            $(".live-container").trigger("focus")
        }), $(".channel_list").on("scroll", function(e) {
            console.log("scrolling left_list, isChannelListScrolling=true"), isChannelListScrolling = !0
        }), $(".live-container").on("scroll", function(e) {
            return isLiveContainerScrolling ? (liveContainerMovedY = $(".live-container").scrollTop() - liveContainerScrollStartY, consoleNotlog("liveContainerMovedY", liveContainerMovedY), Math.abs(liveContainerMovedY) < 10 ? (e.preventDefault(), e.stopPropagation(), consoleNotlog("preventDefault"), !1) : (isLiveContainerScrolling = !0, consoleNotlog("isLiveContainerScrolling", isLiveContainerScrolling), void e.stopPropagation())) : (liveContainerScrollStartY = $(".live-container").scrollTop(), consoleNotlog("liveContainerScrollStartY", liveContainerScrollStartY), e.preventDefault(), e.stopPropagation(), consoleNotlog("preventDefault"), !1)
        }), $(".live-container").bind("click touchend", function(e) {
            $("html").hasClass("left_list_expanded") && (u(), e.preventDefault(), e.stopPropagation()), $("html").removeClass("disable-swipe-transition")
        }), movedX = 0, windowSize().width < 800 && $(".top-bar .brand h1.h").remove(), $(".live-container").on("touchstart", function(e) {
            if (!(windowSize().width > 800)) {
                if ($("html").hasClass("user-box-expanded")) return void console.log("returning because user-box-expanded");
                if (isUserDraggingLiveContainer = !0, isLiveContainerScrolling) return void console.log("returning because isLiveContainerScrolling");
                touchXStart = e.originalEvent.touches[0].pageX, touchYStart = e.originalEvent.touches[0].pageY, chatBoxPosX = movedX, consoleNotlog("chatBoxPosX=movedX", movedX), consoleNotlog("touchstart")
            }
        }), $(".live-container").on("touchmove", function(e) {
            if (!(windowSize().width > 800)) {
                if ($("html").hasClass("user-box-expanded")) return void console.log("returning because user-box-expanded");
                if ($("html").addClass("disable-swipe-transition"), isUserDraggingLiveContainer = !0, isLiveContainerScrolling) return void console.log("returning because isLiveContainerScrolling");
                if (movedX = e.originalEvent.touches[0].pageX - touchXStart, consoleNotlog("movedX=e.originalEvent.touches[0].pageX-touchXStart;", movedX), movedY = e.originalEvent.touches[0].pageY - touchYStart, touchXEnd = e.originalEvent.touches[0].pageX, touchYEnd = e.originalEvent.touches[0].pageY, movedX > 0 ? (opacity = .2 * (1 - movedX / viewportToPixels("100vw") * 1), $(".chat-box").css("box-shadow", "-5px 0 5px rgba(0,0,0," + opacity + ")")) : (opacity = .2 * (1 - (movedX + viewportToPixels("80vw")) / viewportToPixels("100vw") * 1), $(".chat-box").css("box-shadow", "-5px 0 5px rgba(0,0,0," + opacity + ")")), consoleNotlog(movedX), consoleNotlog("touchmove"), chatBoxPosX = movedX, minMoveX = 50, !(Math.abs(movedX) < minMoveX))
                    if (console.log("movedX", movedX), $("html").hasClass("left_list_expanded")) {
                        if (movedX > 0) return;
                        if (movedX < -viewportToPixels("80vw")) return;
                        console.log(movedX, viewportToPixels("80vw") + (chatBoxPosX - minMoveX)), $(".top-bar").css("transform", "translateX(" + (viewportToPixels("80vw") + (chatBoxPosX - minMoveX)) + "px) translateZ(0px)"), $(".chat-box").css("transform", "translateX(" + (viewportToPixels("80vw") + (chatBoxPosX - minMoveX)) + "px) translateZ(0px)"), $(".left_list").css("transform", "translateX(" + (chatBoxPosX - minMoveX) + "px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(" + (chatBoxPosX - minMoveX) + "px) translateZ(0px)")
                    } else {
                        if (movedX < 1) return;
                        if (movedX > viewportToPixels("80vw")) return;
                        $(".top-bar").css("transform", "translateX(" + (chatBoxPosX - minMoveX) + "px) translateZ(0px)"), $(".chat-box").css("transform", "translateX(" + (chatBoxPosX - minMoveX) + "px) translateZ(0px)"), $(".left_list").css("transform", "translateX(" + (chatBoxPosX - minMoveX - viewportToPixels("80vw")) + "px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(" + (chatBoxPosX - minMoveX - viewportToPixels("80vw")) + "px) translateZ(0px)")
                    }
            }
        }), $("body").on("touchend", function(e) {
            if (console.log('1$(".body").on("touchend", function(e) {'), !(windowSize().width > 800 || $("html").hasClass("user-box-expanded"))) {
                if (isUserDraggingGallery) return void console.log("returning because isUserDraggingGallery");
                if (isChannelListScrolling && !isUserDraggingLiveContainer && isUserDraggingChannelList) return void console.log("returning because isChannelListScrolling");
                if ($("html").removeClass("disable-swipe-transition"), isLiveContainerScrolling = !1, isChannelListScrolling = !1, isUserDraggingLiveContainer || isUserDraggingChannelList) {
                    if (consoleNotlog("isLiveContainerScrolling", isLiveContainerScrolling), movedX = touchXEnd - touchXStart, movedY = touchYEnd - touchYStart, chatBoxPosX = movedX, console.log("movedX", movedX), consoleNotlog("viewportToPixels(50vw)", viewportToPixels("50vw")), !$("html").hasClass("left_list_expanded") && isUserDraggingLiveContainer) {
                        return movedX > viewportToPixels("33vw") ? (c(), isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1)) : (u(), isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1));
                        if (movedX < 1) return isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1);
                        if (movedX > viewportToPixels("80vw")) return isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1)
                    } else if (isUserDraggingLiveContainer) {
                        return movedX < -(viewportToPixels("80vw") - viewportToPixels("33vw")) ? (u(), isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1)) : (c(), isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1));
                        if (movedX > 0) return isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1);
                        if (movedX < -viewportToPixels("80vw")) return isUserDraggingLiveContainer = !1, void(isUserDraggingChannelList = !1)
                    }
                    consoleNotlog(movedX), consoleNotlog("touchend"), chatBoxPos = 0
                }
            }
        }), isMobile && !insideIframe && ($("html").height(window.innerHeight), $("body").height(window.innerHeight)), insideUiWebView && ($("html").height(window.innerHeight), $("body").height(window.innerHeight)), $(window).bind("resize", function() {
            isMobile && !insideIframe && ($("html").height(window.innerHeight), $("body").height(window.innerHeight)), insideUiWebView && ($("html").height(window.innerHeight), $("body").height(window.innerHeight))
        }), navigator.userAgent.toLowerCase().indexOf("twitter") > -1 && navigator.userAgent.toLowerCase().indexOf("ipad") < 1 && ($("html").height("calc(100vh - 109px)"), $("body").height("calc(100vh - 109px)")), window.onblur = function() {
            newMessagesSinceBlur = 0, console.log("blur"), insideIframe || (isTabFocused = !1, epoch = Math.floor((new Date).getTime()), blurTime = epoch)
        }, window.onfocus = function() {
            isTabFocused = !0, "@" == activeChannel.substr(0, 1) ? document.title = activeChannel : document.title = activeChannel, console.log("focus"), consoleNotlog("blurTime", blurTime), consoleNotlog("blurTime", date("H:i", blurTime / 1e3)), consoleNotlog("newMessagesSinceBlur", newMessagesSinceBlur), epoch = Math.floor((new Date).getTime()), !empty(blurTime) && !empty(newMessagesSinceBlur) && epoch - blurTime > 3e5 && (s = "", newMessagesSinceBlur > 1 && (s = "s"), $(".chat-box .notice").html('<i class="fa fa-arrow"></i> ' + newMessagesSinceBlur + " new message" + s + " since " + date("H:i", blurTime / 1e3)), $(".chat-box .notice").show()), newMessagesSinceBlur = 0, insideIframe || ($(".unread").remove(), refreshTimeAgoInterval = setInterval(function() {
                e()
            }, 1e4), refreshChatInterval = setInterval(function() {
                l()
            }, currentChatIntervalTime), refreshChannelListInterval = setTimeout(function() {
                o()
            }, refreshChannelListIntervalTime))
        }, $(window).trigger("focus"), $("body").on("click", ".action-show-user", function(e) {
            isUserDraggingLiveContainer || (username = $(this).data("username"), user_id = allUsers[username], $(".chat-box .live-container .img.avatar." + username).length > 0 ? (avatar = $(".chat-box .live-container .img.avatar." + username).data("avatar"), console.log("found in page! " + avatar)) : avatar = allUsersAvatars[username], console.log(username, user_id, avatar), $(".user-container").data("username", username), $(".user-container").data("avatar", avatar), $(".user-container").data("user-id", user_id), $(".user-container .avatar").css("background-image", "url('" + avatar + "')"), $(".user-container .username").text(username), $("html").addClass("user-box-expanded"))
        }), $(".action-close-user-box").bind("click", function() {
            $("html").removeClass("user-box-expanded")
        }), html = "", i = 0; i < 25;) html = html + '<li class="new isChannel placeholder"><div class="channel_right placeholder"><span class="channel_string placeholder"></span><span class="lastmessage" style="width:' + Math.floor(100 * Math.random()) + '%"></span></div></li>', i++;
    $(".chat .channel_list").html(emojify(html)), isChannelListScrolling = !1, empty(localStorage.channelListHTML20170306) || empty(localStorage.channelListHTML20170306[activeTeam]) || (channelListHTML = localStorage.channelListHTML20170306[activeTeam], $(".channel_list").html(channelListHTML), latestChannelListEpoch = Math.round($(".channel_list li").eq(1).find(".time").data("epoch")), $(".channel_list").animate({
        scrollTop: 1
    }, 0), $(".channel_list").animate({
        scrollTop: 0
    }, 0)), o(), empty(window.location.hash) || (activeChannel = window.location.hash.substr(1, 100), $('.channel_list li[data-channel="' + activeChannel + '"]').length > 0 && ($('.chat .channel_list li[data-channel="' + activeChannel + '"]').addClass("active"), $(".channel_list").animate({
        scrollTop: $('.channel_list li[data-channel="' + activeChannel + '"]').offset().top - $(".channel_list").offset().top
    }, 250))), r(activeChannel), emoji.text_mode = !0, emoji.include_title = !0, $(".backdrop").bind("click touchend", function(e) {
        clearInterval(showSignUpCTAPhotoInterval), $(".backdrop").removeClass("show"), $(".modal").removeClass("show"), $(".loading_spinner").removeClass("show"), $(".image-previewer").hide(), $(".video-previewer").hide(), e.preventDefault(), e.stopPropagation()
    }), $(".cta .cancel").bind("click touchend", function(e) {
        clearInterval(showSignUpCTAPhotoInterval), $(".backdrop").removeClass("show"), $(".cta.modal").removeClass("show"), e.preventDefault(), e.stopPropagation()
    }), $(".chat .team_list li").bind("touchend click", function(e) {
        $(".loading_spinner").addClass("show")
    }), $(".chat .text-box").bind("touchend click", function(e) {
        return isLoggedIn || "nomadlist" != activeTeam ? isLoggedIn ? ("all_channels" == activeChannel && r(generalChannel), "all" == activeTeam ? (window.location.href = "/" + activeChannel, e.preventDefault(), e.stopPropagation(), $(".chat .text-box").trigger("blur"), void $(".chat .text-box").text("")) : void 0) : ($(".chat .text-box").trigger("blur"), $(".chat .text-box").text(""), void d()) : (e.preventDefault(), e.stopPropagation(), $(".chat .text-box").trigger("blur"), $(".chat .text-box").text(""), void p())
    }), $("body").on("click touchend", ".action-open-user", function(e) {
        isMobile || (e.stopPropagation(), e.preventDefault(), $(".search_channels").val(""), href = $(this).attr("href"), $("body").addClass("user-pane-expanded"), $(".user-pane iframe").text(""), $(".user-pane iframe").attr("src", ""), $(".user-pane").addClass("show"), $(".user-pane iframe").attr("src", href + "?user-pane-in-chat=true"))
    }), $(".chat").bind("touchstart", function(e) {}), window.addEventListener("dragstart", function(e) {
        $("body").css("opacity", .5), e.dataTransfer.effectAllowed = "move", e = e || event, e.preventDefault(), e.stopPropagation()
    }, !1), window.addEventListener("dragenter", function(e) {
        $("body").css("opacity", .5), e = e || event, e.preventDefault(), e.stopPropagation()
    }, !1), window.addEventListener("dragover", function(e) {
        $("body").css("opacity", .5), e = e || event, e.preventDefault(), e.stopPropagation()
    }, !1), window.addEventListener("drop", function(e) {
        $("body").css("opacity", 1), e = e || event, e.preventDefault(), e.stopPropagation(), files = e.dataTransfer.files, n(files)
    }, !1), $(".chat .text-box").bind("keydown", function(e) {
        if (isLoggedIn || $(".chat .text-box").val(""), empty($(".chat .text-box").val().trim())) return $(".chat .autocomplete").hide(), void(autoCompleteActive = !1);
        var n = e.keyCode ? e.keyCode : e.which;
        13 != n || empty($(this).val()) || autoCompleteActive || t()
    }), $("body").on("click touchend", ".autocomplete span", function(e) {
        $(".chat .text-box").val(str_replace(autoCompleteQuery, "@" + $(this).text(), $(".chat .text-box").val() + " ")), $(".chat .autocomplete").hide(), autoCompleteActive = !1, e.stopPropagation(), e.preventDefault()
    }), $(".chat .text-box").bind("keyup", function(e) {
        if (console.log("-------"), origMessage = $(".chat .text-box").val(), console.log(origMessage), "/" == origMessage.substr(0, 1)) return array = explode(" ", origMessage.substr(1, strlen(origMessage))), command = array[0], void console.log("command: " + origMessage);
        if ("nomadlist" == activeTeam && !isLoggedIn) return p(), e.preventDefault(), void e.stopPropagation();
        if (!isLoggedIn) return void d();
        if (empty($(".chat .text-box").val().trim())) return autoCompleteActive = !1, void $(".chat .autocomplete").hide();
        if ($(".chat .autocomplete").hide(), char = $(this).val().substr($(this).val().length - 1, $(this).val().length), "@" == char && (autoCompleteActive = !0, autoCompleteQuery = "@"), autoCompleteActive) {
            var t = e.keyCode ? e.keyCode : e.which;
            if ((13 == t || 32 == t || 9 == t) && autoCompleteActive) return $(".chat .autocomplete span").eq(0).trigger("click"), void(autoCompleteActive = !1);
            $(".autocomplete span").remove(), array = explode("@", $(".chat .text-box").val()), lastPart = array[array.length - 1], autoCompleteQuery = "@" + lastPart, console.log(autoCompleteQuery), maxToShow = 10, isMobile && (maxToShow = 5), x = 0, $(".chat .autocomplete").hide();
            for (var n in allUsers)
                if (autoCompleteQuery.substr(1, autoCompleteQuery.length) == n.substr(0, autoCompleteQuery.length - 1)) {
                    if ($(".chat .autocomplete").prepend('<span><div class="avatar" style="background-image:url(\'' + allUsersAvatars[n] + "');\" /></div>" + n + "</span>"), $(".chat .autocomplete").show(), x > maxToShow) return !1;
                    x++
                }
        }
    }), $(".chat .text-box").bind("blur", function(e) {
        isMobile && t()
    }), $(".channel_list").bind("scroll", function() {
        clearTimeout(lazyloadTimeOut), lazyloadTimeOut = setTimeout(function() {
            $(".channel_list .lazyload").each(function() {
                objectTop = $(this).offset().top, empty(objectTop) || (scrollTop = $(".channel_list").scrollTop(), edge = scrollTop + windowHeight, objectTop != scrollTop && objectTop < 2 * edge && (url = $(this).data("bg"), empty(url) || ($(this).css("background-image", "url('" + url + "')"), $(this).removeClass("lazyload"))))
            })
        }, 250)
    }), $(".chat-box .notice").bind("click touchend", function(e) {
        $(".chat-box .notice").fadeOut(250), $(".chat-box .live-container").scrollTop($(".chat-box .live-container")[0].scrollHeight + 200)
    }), w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var m;
    $("body").on("touchend click", ".action-open-channel", function(e) {
        dragging || (channel = $(this).data("channel"), !empty($('.channel_list li[data-channel="' + channel + '"]').text()) && $(this).hasClass("link") && $(".channel_list").animate({
            scrollTop: $('.channel_list li[data-channel="' + channel + '"]').offset().top - $(".channel_list").offset().top
        }, 250), $("html").hasClass("left_list_expanded") && ($("html").removeClass("disable-swipe-transition"), u()), r(channel, $(this).data("string")), e.preventDefault(), e.stopPropagation())
    }), $(".action-share-location").bind("click", function() {
        return isLoggedIn || "nomadlist" != activeTeam ? isLoggedIn ? void(confirm("Share your current location?") && (navigator.geolocation ? ($(".chat-box .notice").html("Locating you"), $(".chat-box .notice").show(), addDotsToNoticeInterval = setInterval(function() {
            $(".chat-box .notice").html(str_replace("....", "", $(".chat-box .notice").html() + "."))
        }, 500), navigator.geolocation.getCurrentPosition(function(e) {
            clearInterval(addDotsToNoticeInterval), $(".chat-box .notice").hide(), t("_@" + selfUsername + " shared their location:_ https://www.bing.com/maps/?q=" + e.coords.latitude + "," + e.coords.longitude)
        }, function(e) {
            alert("Location information is unavailable, try enabling GPS or disabling Airplane Mode"), clearInterval(addDotsToNoticeInterval), $(".chat-box .notice").hide()
        })) : alert("Sorry, location sharing is not enabled on your device, try enabling it in your device's settings"))) : void d() : void p()
    }), $(".action-upload-file").bind("click", function() {
        return isLoggedIn || "nomadlist" != activeTeam ? isLoggedIn ? void $(".upload-file-uploader").trigger("click") : void d() : void p()
    }), $(".upload-file-uploader").bind("change", function(e) {
        if (!isUploadingFileRightNow) {
            isUploadingFileRightNow = !0;
            var t = e.target.files;
            console.log(t), n(t)
        }
    }), $("body").on("click touchend", ".chat-box .live .link .img", function(e) {
        if (!isUserDraggingLiveContainer && !isLiveContainerScrolling) {
            if (e.preventDefault(), e.stopPropagation(), currentImageBeingPreviewedObject = this, !empty($(this).data("video"))) return $(".video-previewer").attr("src", $(this).data("video")), $(".video-previewer").show(), void $(".backdrop").addClass("show");
            $(".image-previewer").attr("src", $(this).data("bg")), $(".image-previewer").show(), $(".backdrop").addClass("show")
        }
    }), $(".action-open-links-gallery").bind("click", function() {
        return $(".gallery").hasClass("show") && $(".gallery").hasClass("links-gallery") ? ($(".gallery").removeClass("show"), void $(".gallery").html("")) : ($(".gallery").html("").removeClass("media-gallery").removeClass("links-gallery").addClass("links-gallery").addClass("show"), $(".gallery").addClass("show"), galleryHtml = "", void a())
    }), $(".action-open-media-gallery").bind("click", function() {
        return $(".gallery").hasClass("show") && $(".gallery").hasClass("media-gallery") ? ($(".gallery").removeClass("show"), void $(".gallery").html("")) : ($(".gallery").html("").removeClass("media-gallery").removeClass("links-gallery").addClass("media-gallery").addClass("show"), $(".gallery").addClass("show"), galleryHtml = "", void a())
    }), $("body").on("click touchend", ".gallery.media-gallery .img", function(e) {
        if (!dragging) {
            if (isUserDraggingGallery = !1, currentImageBeingPreviewedObject = this, !empty($(this).data("video")) && !isMobile) return $(".video-previewer").attr("src", $(this).data("video")), $(".video-previewer").show(), void $(".backdrop").addClass("show");
            $(".image-previewer").attr("src", $(this).data("bg")), $(".image-previewer").show(), $(".backdrop").addClass("show")
        }
    }), $("body").on("click touchend", ".image-previewer", function(e) {
        $(".image-previewer").hide(), $(".backdrop").removeClass("show"), e.preventDefault(), e.stopPropagation()
    }), $("body").on("click touchend", ".video-previewer", function(e) {
        $(".video-previewer").hide(), $(".backdrop").removeClass("show"), e.preventDefault(), e.stopPropagation()
    }), $("body").on("click touchend", ".chat-box .live .link img", function(e) {
        isUserDraggingLiveContainer || isLiveContainerScrolling || (e.preventDefault(), e.stopPropagation(), $(".image-previewer").attr("src", $(this).data("src")), $(".loading_spinner").addClass("show"), $(".image-previewer").show(), $(".backdrop").addClass("show"))
    }), $("body").on("keyup", function(e) {
        var t = e.keyCode ? e.keyCode : e.which;
        if (37 == t) {
            images = [];
            var n = 0,
                a;
            $(".chat-box .live .link .img").each(function() {
                images.push($(this).data("bg")), console.log($(this).data("bg")), $(this) == $(currentImageBeingPreviewedObject) && (a = n), n++
            }), console.log(images), prevImage = images[a - 1], console.log(prevImage)
        }
        39 == t && currentImageBeingPreviewedObject.parent().parent().parent().parent().prev(".link .img").trigger("click"), console.log(t)
    }), refreshTimeAgoInterval = setInterval(function() {
        $(".chat-box .time").each(function() {
            $(this).text(timeAgoShort($(this).data("epoch")))
        })
    }, 1e4);
    var v = $(".chat-box .live-container")[0].scrollTop,
        y = $(".chat-box .live-container")[0].scrollHeight;
    $(".chat-box .live-container").bind("scroll", function() {
        v = $(".chat-box .live-container")[0].scrollTop, y = $(".chat-box .live-container")[0].scrollHeight
    }), $(".action-call-user").bind("click", function() {
        isLoggedIn && (user_id = $(".user-container").data("user-id"), username = $(".user-container").data("username"), $(".user-container").data("avatar", avatar), $(".user-container").data("user-id", user_id), $(".user-container .avatar").css("background-image", "url('" + avatar + "')"), $(".user-container .username").text(username), callLink = "https://appear.in/" + activeTeam + "_" + selfUsername + "_" + username + "_" + randomString, window.open(callLink, "targetWindow", "width=640,height=480"), t("@" + selfUsername + " is calling you, open " + callLink + " to accept the call", "@" + username),
            r("@" + username), console.log(callLink))
    }), $(".action-message-user").bind("click", function() {
        isLoggedIn && (user_id = $(".user-container").data("user-id"), username = $(".user-container").data("username"), $(".user-container").data("avatar", avatar), $(".user-container").data("user-id", user_id), $(".user-container .avatar").css("background-image", "url('" + avatar + "')"), $(".user-container .username").text(username), timeStamp = "", epoch = Math.floor((new Date).getTime()), timeStamp = '<div class="time" data-epoch="' + epoch + '">' + timeAgoShort(epoch / 1e3) + "</div>", html = '<li class="action-open-channel new" data-username="' + username + '">' + timeStamp + '<div class="channel_right"><span class="channel_string">' + username + '</span><span class="lastMessage"></span></div></li>', $(".chat .channel_list").prepend(html), $('.channel_list li[data-username="' + username + '"]').trigger("click"), consoleNotlog('.channel_list li[data-username="@' + username + '"]'), windowSize().width < 800 && $("html").removeClass("user-box-expanded"))
    }), $(".action-clear-search").bind("click touchend", function() {
        $(".search_channels").val(""), $(".search_channels").trigger("click"), $(".channel_list .action-create-channel").remove(), $(".channel_list .action-create-private-message").remove()
    }), $(".search_channels").bind("keyup click", function() {
        return empty($(this).val()) || $(this).val().length < 1 ? ($(".action-clear-search").hide(), void $(".channel_list li").show()) : ($(".action-clear-search").show(), "undefined" != typeof searchStoppedTypingTimeout && clearTimeout(searchStoppedTypingTimeout), maxToShow = 20, void(searchStoppedTypingTimeout = setTimeout(function(e) {
            if ($(".channel_list .action-create-channel").remove(), $(".channel_list .action-create-private-message").remove(), query = $(e).val().toLowerCase(), $(".channel_list li").hide(), empty($(e).val()) || $(e).val().length < 1) return void $(".channel_list li").show();
            channelMatches = 0, exactChannelMatches = 0, x = 0;
            for (var t in allUsers)
                if (query == t.substr(0, query.length)) {
                    if (avatar = allUsersAvatars[t], $(".channel_list").append('<li class="action-create-private-message private action-open-channel new" data-channel="@' + t + '"><div class="channel_right"><span class="channel_string">' + t + '</span><span class="lastMessage">Message @' + t + "</span></div></li>"), x > maxToShow) return;
                    x++
                }
            "@" != query.substr(0, 1) && (x = 0, $(".channel_list li").each(function() {
                if (normalWordForSearch = str_replace("@", "", str_replace("#", "", str_replace("_", " ", str_replace("-", " ", $(this).data("channel"))))), $(this).data("channel").toLowerCase() == query && normalWordForSearch == query) {
                    if ($(this).show(), $(this).find(".image").css("background-image", "url('" + $(this).find(".image").data("bg") + "')"), exactChannelMatches++, x > maxToShow) return
                } else if ($(this).data("channel").toLowerCase().indexOf(query) !== -1 || normalWordForSearch.indexOf(query) !== -1) {
                    if ($(this).show(), $(this).find(".image").css("background-image", "url('" + $(this).find(".image").data("bg") + "')"), channelMatches++, x > maxToShow) return
                } else $(this).hide();
                x++
            })), "@" == query.substr(0, 1) && (query = query.substr(1, query.length)), $(".channel_list .action-create-channel").remove(), empty(query) || 0 != exactChannelMatches || $(".channel_list").prepend('/ class="action-create-channel action-open-channel new" data-channel="' + query + '"><div class="channel_right"><span class="channel_string">' + query + '</span><span class="lastMessage">Create channel "' + query + '"</span></div></li>')
        }, 500, this)))
    }), $(window).resize(function() {
        $(".chat-box .live-container").scrollTop($(".chat-box .live-container")[0].scrollHeight + 200), windowSize().width < 800 ? ($(".top-bar").css("transform", "translateX(0px) translateZ(0px)"), $(".chat-box").css("transform", "translateX(0px) translateZ(0px)"), $(".channel_list").css("transform", "translateX(-" + viewportToPixels("80vw") + "px) translateZ(0px)"), $(".search_channels").css("transform", "translateX(-" + viewportToPixels("80vw") + "px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(-" + viewportToPixels("80vw") + "px) translateZ(0px)")) : ($(".top-bar").css("transform", "translateX(0px) translateZ(0px)"), $(".chat-box").css("transform", "translateX(0px) translateZ(0px)"), $(".channel_list").css("transform", "translateX(0px) translateZ(0px)"), $(".search_channels").css("transform", "translateX(0px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(0px) translateZ(0px)"))
    }), $(".brand .logo").bind("click touchend", function(e) {
        console.log(".brand .logo"), e.preventDefault(), e.stopPropagation(), windowSize().width < 800 ? ($("html").hasClass("left_list_expanded") ? u() : c(), $(".channel_list").animate({
            scrollTop: 1
        }, 0), $(".channel_list").animate({
            scrollTop: 0
        }, 0)) : $("html").hasClass("team_list_expanded") ? ($("html").removeClass("disable-swipe-transition"), $(".team_list").css("transform", "translateX(80vw) translateZ(0px)"), $(".left_list").css("transform", "translateX(0px) translateZ(0px)"), $(".search_channels").css("transform", "translateX(0px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(0px) translateZ(0px)"), $("html").removeClass("team_list_expanded"), $("html").removeClass("enable-swipe-transition")) : ($("html").removeClass("disable-swipe-transition"), $(".team_list").css("transform", "translateX(0) translateZ(0px)"), $(".left_list").css("transform", "translateX(" + viewportToPixels("20vw") + "px) translateZ(0px)"), $(".search_channels").css("transform", "translateX(" + viewportToPixels("20vw") + "px) translateZ(0px)"), $(".action-clear-search").css("transform", "translateX(" + viewportToPixels("20vw") + "px) translateZ(0px)"), $("html").addClass("team_list_expanded"), $("html").removeClass("enable-swipe-transition"))
    }), $(".chat-box .live a").bind("click", function(e) {
        isMobile && (e.preventDefault(), e.stopPropagation())
    }), $(".channel").bind("click touchend", function() {
        $("html").addClass("left_list_expanded")
    })
});
var windowWidth = windowSize().width,
    windowHeight = windowSize().height;
//# sourceMappingURL=./chat.min.js.map
