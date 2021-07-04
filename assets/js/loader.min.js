!(function (t, e) {
  "use strict";
  function i(t) {
    t = t || {};
    for (var e = 1; e < arguments.length; e++) {
      var i = arguments[e];
      if (i)
        for (var a in i)
          i.hasOwnProperty(a) &&
            ("object" == typeof i[a] ? deepExtend(t[a], i[a]) : (t[a] = i[a]));
    }
    return t;
  }
  function a(a, o) {
    function r() {
      (u.width = a.offsetWidth),
        (u.height = a.offsetHeight),
        (y.fillStyle = o.dotColor),
        (y.strokeStyle = o.lineColor),
        (y.lineWidth = o.lineWidth);
    }
    function p() {
      if (Y) {
        (v = t.innerWidth),
          (w = t.innerHeight),
          y.clearRect(0, 0, u.width, u.height);
        for (var e = 0; e < M.length; e++) M[e].updatePosition();
        for (var e = 0; e < M.length; e++) M[e].draw();
        A || (g = requestAnimationFrame(p));
      }
    }
    function l() {
      r();
      for (
        var t = a.offsetWidth, e = a.offsetHeight, i = M.length - 1;
        i >= 0;
        i--
      )
        (M[i].position.x > t || M[i].position.y > e) && M.splice(i, 1);
      var n = Math.round((u.width * u.height) / o.density);
      if (n > M.length)
        for (; n > M.length; ) {
          var s = new f();
          M.push(s);
        }
      else n < M.length && M.splice(n);
      for (i = M.length - 1; i >= 0; i--) M[i].setStackPos(i);
    }
    function d() {
      A = !0;
    }
    function h() {
      (A = !1), p();
    }
    function f() {
      switch (
        (this.stackPos,
        (this.active = !0),
        (this.layer = Math.ceil(3 * Math.random())),
        (this.parallaxOffsetX = 0),
        (this.parallaxOffsetY = 0),
        (this.position = {
          x: Math.ceil(Math.random() * u.width),
          y: Math.ceil(Math.random() * u.height),
        }),
        (this.speed = {}),
        o.directionX)
      ) {
        case "left":
          this.speed.x = +(
            -o.maxSpeedX +
            Math.random() * o.maxSpeedX -
            o.minSpeedX
          ).toFixed(2);
          break;
        case "right":
          this.speed.x = +(Math.random() * o.maxSpeedX + o.minSpeedX).toFixed(
            2
          );
          break;
        default:
          (this.speed.x = +(
            -o.maxSpeedX / 2 +
            Math.random() * o.maxSpeedX
          ).toFixed(2)),
            (this.speed.x += this.speed.x > 0 ? o.minSpeedX : -o.minSpeedX);
      }
      switch (o.directionY) {
        case "up":
          this.speed.y = +(
            -o.maxSpeedY +
            Math.random() * o.maxSpeedY -
            o.minSpeedY
          ).toFixed(2);
          break;
        case "down":
          this.speed.y = +(Math.random() * o.maxSpeedY + o.minSpeedY).toFixed(
            2
          );
          break;
        default:
          (this.speed.y = +(
            -o.maxSpeedY / 2 +
            Math.random() * o.maxSpeedY
          ).toFixed(2)),
            (this.speed.x += this.speed.y > 0 ? o.minSpeedY : -o.minSpeedY);
      }
    }
    function c(t, e) {
      return e ? void (o[t] = e) : o[t];
    }
    function x() {
      console.log("destroy"),
        u.parentNode.removeChild(u),
        m("onDestroy"),
        s && s(a).removeData("plugin_" + n);
    }
    function m(t) {
      void 0 !== o[t] && o[t].call(a);
    }
    var u,
      y,
      g,
      v,
      w,
      S,
      X,
      Y = !!e.createElement("canvas").getContext,
      M = [],
      O = 0,
      b = 0,
      k = !navigator.userAgent.match(
        /(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i
      ),
      F = !!t.DeviceOrientationEvent,
      P = 0,
      C = 0,
      A = !1;
    return (
      (o = i({}, t[n].defaults, o)),
      (f.prototype.draw = function () {
        y.beginPath(),
          y.arc(
            this.position.x + this.parallaxOffsetX,
            this.position.y + this.parallaxOffsetY,
            o.particleRadius / 2,
            0,
            2 * Math.PI,
            !0
          ),
          y.closePath(),
          y.fill(),
          y.beginPath();
        for (var t = M.length - 1; t > this.stackPos; t--) {
          var e = M[t],
            i = this.position.x - e.position.x,
            a = this.position.y - e.position.y;
          Math.sqrt(i * i + a * a).toFixed(2) < o.proximity &&
            (y.moveTo(
              this.position.x + this.parallaxOffsetX,
              this.position.y + this.parallaxOffsetY
            ),
            o.curvedLines
              ? y.quadraticCurveTo(
                  Math.max(e.position.x, e.position.x),
                  Math.min(e.position.y, e.position.y),
                  e.position.x + e.parallaxOffsetX,
                  e.position.y + e.parallaxOffsetY
                )
              : y.lineTo(
                  e.position.x + e.parallaxOffsetX,
                  e.position.y + e.parallaxOffsetY
                ));
        }
        y.stroke(), y.closePath();
      }),
      (f.prototype.updatePosition = function () {
        if (o.parallax) {
          if (F && !k) {
            S = (P - -30) * ((v - 0) / 60) + 0;
            X = (C - -30) * ((w - 0) / 60) + 0;
          } else (S = O), (X = b);
          (this.parallaxTargX =
            (S - v / 2) / (o.parallaxMultiplier * this.layer)),
            (this.parallaxOffsetX +=
              (this.parallaxTargX - this.parallaxOffsetX) / 10),
            (this.parallaxTargY =
              (X - w / 2) / (o.parallaxMultiplier * this.layer)),
            (this.parallaxOffsetY +=
              (this.parallaxTargY - this.parallaxOffsetY) / 10);
        }
        var t = a.offsetWidth,
          e = a.offsetHeight;
        switch (o.directionX) {
          case "left":
            this.position.x + this.speed.x + this.parallaxOffsetX < 0 &&
              (this.position.x = t - this.parallaxOffsetX);
            break;
          case "right":
            this.position.x + this.speed.x + this.parallaxOffsetX > t &&
              (this.position.x = 0 - this.parallaxOffsetX);
            break;
          default:
            (this.position.x + this.speed.x + this.parallaxOffsetX > t ||
              this.position.x + this.speed.x + this.parallaxOffsetX < 0) &&
              (this.speed.x = -this.speed.x);
        }
        switch (o.directionY) {
          case "up":
            this.position.y + this.speed.y + this.parallaxOffsetY < 0 &&
              (this.position.y = e - this.parallaxOffsetY);
            break;
          case "down":
            this.position.y + this.speed.y + this.parallaxOffsetY > e &&
              (this.position.y = 0 - this.parallaxOffsetY);
            break;
          default:
            (this.position.y + this.speed.y + this.parallaxOffsetY > e ||
              this.position.y + this.speed.y + this.parallaxOffsetY < 0) &&
              (this.speed.y = -this.speed.y);
        }
        (this.position.x += this.speed.x), (this.position.y += this.speed.y);
      }),
      (f.prototype.setStackPos = function (t) {
        this.stackPos = t;
      }),
      (function () {
        if (Y) {
          (u = e.createElement("canvas")),
            (u.className = "pg-canvas"),
            (u.style.display = "block"),
            a.insertBefore(u, a.firstChild),
            (y = u.getContext("2d")),
            r();
          for (
            var i = Math.round((u.width * u.height) / o.density), n = 0;
            i > n;
            n++
          ) {
            var s = new f();
            s.setStackPos(n), M.push(s);
          }
          t.addEventListener(
            "resize",
            function () {
              l();
            },
            !1
          ),
            e.addEventListener(
              "mousemove",
              function (t) {
                (O = t.pageX), (b = t.pageY);
              },
              !1
            ),
            F &&
              !k &&
              t.addEventListener(
                "deviceorientation",
                function () {
                  (C = Math.min(Math.max(-event.beta, -30), 30)),
                    (P = Math.min(Math.max(-event.gamma, -30), 30));
                },
                !0
              ),
            p(),
            m("onInit");
        }
      })(),
      { option: c, destroy: x, start: h, pause: d }
    );
  }
  var n = "particleground",
    s = t.jQuery;
  (t[n] = function (t, e) {
    return new a(t, e);
  }),
    (t[n].defaults = {
      minSpeedX: 0.1,
      maxSpeedX: 0.7,
      minSpeedY: 0.1,
      maxSpeedY: 0.7,
      directionX: "center",
      directionY: "center",
      density: 1e4,
      dotColor: "#666666",
      lineColor: "#666666",
      particleRadius: 7,
      lineWidth: 1,
      curvedLines: !1,
      proximity: 100,
      parallax: !0,
      parallaxMultiplier: 5,
      onInit: function () {},
      onDestroy: function () {},
    }),
    s &&
      (s.fn[n] = function (t) {
        if ("string" == typeof arguments[0]) {
          var e,
            i = arguments[0],
            o = Array.prototype.slice.call(arguments, 1);
          return (
            this.each(function () {
              s.data(this, "plugin_" + n) &&
                "function" == typeof s.data(this, "plugin_" + n)[i] &&
                (e = s.data(this, "plugin_" + n)[i].apply(this, o));
            }),
            void 0 !== e ? e : this
          );
        }
        return "object" != typeof t && t
          ? void 0
          : this.each(function () {
              s.data(this, "plugin_" + n) ||
                s.data(this, "plugin_" + n, new a(this, t));
            });
      });
})(window, document),
  (function () {
    for (
      var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0;
      i < e.length && !window.requestAnimationFrame;
      ++i
    )
      (window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"]),
        (window.cancelAnimationFrame =
          window[e[i] + "CancelAnimationFrame"] ||
          window[e[i] + "CancelRequestAnimationFrame"]);
    window.requestAnimationFrame ||
      (window.requestAnimationFrame = function (e) {
        var i = new Date().getTime(),
          a = Math.max(0, 16 - (i - t)),
          n = window.setTimeout(function () {
            e(i + a);
          }, a);
        return (t = i + a), n;
      }),
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function (t) {
          clearTimeout(t);
        });
  })(),
  particleground(document.getElementById("particles-foreground"), {
    dotColor: "rgb(179, 226, 131)",
    lineColor: "rgb(21, 151, 187, 0.3)",
    minSpeedX: 0.6,
    maxSpeedX: 0.9,
    minSpeedY: 0.6,
    maxSpeedY: 0.9,
    density: 3e4,
    curvedLines: !1,
    proximity: 250,
    parallaxMultiplier: 10,
    particleRadius: 5,
  }),
  particleground(document.getElementById("particles-background"), {
    dotColor: "rgba(255, 255, 255, 0.5)",
    lineColor: "rgba(255, 255, 255, 0.05)",
    minSpeedX: 0.075,
    maxSpeedX: 0.15,
    minSpeedY: 0.075,
    maxSpeedY: 0.15,
    density: 3e4,
    curvedLines: !1,
    proximity: 20,
    parallaxMultiplier: 20,
    particleRadius: 2,
  });
