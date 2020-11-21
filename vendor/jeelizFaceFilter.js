/**
 * Jeeliz Face Filter - https://github.com/jeeliz/jeelizFaceFilter
 *
 * Copyright 2018 Jeeliz ( https://jeeliz.com )
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var JEEFACEFILTERAPI = (function () {
  window.JEEFACEFILTERAPIGEN = function () {
    function Cb(a) {
      var b = null,
        d = null,
        e = null,
        n = 0;
      this.o = function (f) {
        this.ue(f.Pa);
        e.Bd({ Hb: f.Hb, Eb: f.Eb });
      };
      this.Td = function (f) {
        return b[f];
      };
      this.ue = function (f) {
        var t = null;
        n = f.length;
        b = f.map(function (l, h) {
          l = Object.assign({}, l, { index: h, parent: this, Wa: t, ce: h === n - 1 });
          return (t = h = 0 === h ? Db.instance(l) : Eb.instance(l));
        });
        d = b[0];
        e = b[n - 1];
        b.forEach(function (l, h) {
          0 !== h && l.qe();
        });
      };
      this.O = function (f, t) {
        var l = t;
        b.forEach(function (h) {
          l = h.O(l, f);
        });
        return l;
      };
      this.Sd = function () {
        return d.B();
      };
      this.yc = function () {
        return e.Ud();
      };
      this.vc = function () {
        return e.vc();
      };
      this.h = function () {
        b &&
          (b.forEach(function (f) {
            f.h();
          }),
          (e = d = b = null),
          (n = 0));
      };
      'undefined' !== typeof a && this.o(a);
    }
    function bb(a, b) {
      var d = b % 8;
      return (a[(b - d) / 8] >> (7 - d)) & 1;
    }
    function Fb(a) {
      var b = JSON.parse(a);
      a = b.ne;
      var d = b.nf,
        e = b.n;
      var n = 'undefined' === typeof btoa ? Buffer.from(b.data, 'base64').toString('latin1') : atob(b.data);
      var f = n.length;
      b = new Uint8Array(f);
      for (var t = 0; t < f; ++t) b[t] = n.charCodeAt(t);
      n = new Float32Array(e);
      f = new Float32Array(d);
      t = a + d + 1;
      for (var l = 0; l < e; ++l) {
        for (var h = t * l, v = 0 === bb(b, h) ? 1 : -1, g = h + 1, m = 1, q = 0, k = g + a - 1; k >= g; --k) (q += m * bb(b, k)), (m *= 2);
        g = q;
        h = h + 1 + a;
        m = f.length;
        q = 0;
        for (k = h; k < h + m; ++k) (f[q] = bb(b, k, !0)), ++q;
        for (m = h = 0; m < d; ++m) h += f[m] * Math.pow(2, -m - 1);
        n[l] = 0 === h && 0 === g ? 0 : v * (1 + h) * Math.pow(2, 1 + g - Math.pow(2, a - 1));
      }
      return n;
    }
    function Ua() {
      return -1 !== [ba.ready, ba.play, ba.pause].indexOf(ia);
    }
    function Gb(a) {
      if (ia !== ba.pause) {
        var b = ia === ba.play ? K.Aa : Y.pd;
        Va = setTimeout(ob.bind(null, a), b);
      }
    }
    function cb() {
      if (ia === ba.play) return !1;
      ia = ba.play;
      Ma && window.cancelAnimationFrame(Ma);
      ob(0);
    }
    function pb() {
      if (ia !== ba.play) return !1;
      Va && (clearTimeout(Va), (Va = null));
      Ma && (window.cancelAnimationFrame(Ma), (Ma = null));
      ia = ba.pause;
      return !0;
    }
    function Ea(a, b, d, e, n) {
      a = 4 * (3 * b + a) + d;
      return e + (T.buffer[a] / 255 + T.buffer[a + 12] / 65025) * (n - e);
    }
    function db() {
      c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
      sa.X();
      U.reset();
      W.reset();
      y.K();
      y.jc();
      c.disable(c.DEPTH_TEST);
      c.disable(c.BLEND);
      U.sa();
      y.la();
    }
    function ob() {
      if (ia !== ba.pause) {
        y.jc();
        U.reset();
        U.sa();
        c.disable(c.DEPTH_TEST);
        c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
        sa.X();
        y.la();
        if (!x.zb)
          if (x.Ma) x.element.needsUpdate && (x.H.Ke(x.element.arrayBuffer), (x.element.needsUpdate = !1));
          else {
            var a = x.element.currentTime,
              b = a - x.Xa;
            0 > b && (x.Xa = a);
            1e3 * b < Y.Me || ((x.Xa += b), x.H.refresh());
          }
        a = za.wc();
        if (H.P.length > a) H.P.splice(0, H.P.length - a);
        else for (; H.P.length < a; ) H.P.push(0);
        if (1 !== H.i)
          if (oa.every(eb)) {
            for (var d = 0, e = (b = 0); e < oa.length; ++e) oa[e].detected > d && ((d = oa[e].detected), (b = 0));
            for (d = 0; d < a; ++d) H.P[d] = b;
          } else {
            b = H.Mc;
            d = 0;
            for (e = !1; d < a; ++d) {
              if (eb(oa[b]))
                if (e) {
                  do ++b === H.i && (b = 0);
                  while (eb(oa[b]));
                } else e = !0;
              H.P[d] = b++;
              b >= H.i && (b = 0);
            }
            H.Mc = b;
          }
        for (a = 0; a < za.wc(); ++a)
          (H.fa = H.P[a]),
            (H.Db = (0.5 + H.fa) / H.i),
            (H.Hc = H.P.lastIndexOf(H.fa) === a),
            y.set('s51'),
            (b = oa[H.fa]),
            y.A('u37', 1 + Na.Kb * (Math.cos(b.ry) - 1)),
            K.ia && y.A('u36', b.rz),
            1 !== H.i && y.A('u35', H.Db),
            X.ka.ba(),
            x.H.b(0),
            T.na.b(1),
            U.g(!1, !1),
            X.ka.b(0),
            Oa.O(!1, X.ka);
        za.Fe();
        sa.J();
        c.viewport(0, 0, 3, 2 * H.i);
        y.set('s49');
        T.na.b(0);
        U.g(!1, !1);
        c.readPixels(0, 0, 3, 2 * H.i, c.RGBA, c.UNSIGNED_BYTE, T.buffer);
        for (a = 0; a < H.i; ++a)
          if (-1 !== H.P.indexOf(a)) {
            var n = a;
            b = Sa[n];
            var f = [n];
            d = oa[n];
            e = fb[n];
            var t = 2 * n;
            b.Ea = Ea(1, t, 3, 0, 1);
            d.detected = pa.S(d.detected, b.Ea, Y.md);
            if (b.Ea < Y.Oc) K.ia && ((d.rz = 0), (d.ry = 0));
            else {
              var l = T.xa;
              b.x = Ea(0, t, 1, -1, 1);
              b.y = Ea(0, t, 2, -1, 1);
              b.V = Ea(0, t, 3, 0, 1);
              b.Ib = Ea(1, t, 0, -l[0], l[0]);
              b.Jb = Ea(1, t, 1, -l[1], l[1]);
              b.ya = Ea(1, t, 2, -l[2], l[2]);
              for (l = 0; l < T.T; ++l) b.qc[l] = T.wa[l](Ea(2, t, l, 0, 1));
              f.ob = b.x - d.xRaw;
              f.pb = b.y - d.yRaw;
              f.nb = b.V - d.sRaw;
              f.kb = b.Ib - d.rx;
              f.lb = b.Jb - d.ry;
              f.mb = K.ia ? b.ya : b.ya - d.rz;
              t = za.Pd();
              f =
                (1 - Wa.Qa(ta.translationFactorRange[0], ta.translationFactorRange[1], Math.sqrt(f.ob * f.ob + f.pb * f.pb + f.nb * f.nb) / t)) *
                (1 - Wa.Qa(ta.rotationFactorRange[0], ta.rotationFactorRange[1], Math.sqrt(f.kb * f.kb + f.lb * f.lb + f.mb * f.mb) / t)) *
                Wa.Qa(ta.qualityFactorRange[0], ta.qualityFactorRange[1], b.Ea);
              n = e[++gb[n] % e.length] = f;
              for (t = 0; t < e.length; ++t) n = Math.min(n, e[t]);
              n = Math.max(0.5, n);
              f = Math.min(n, f);
              e = pa.S(ta.alphaRange[1], ta.alphaRange[0], Math.pow(f, Y.od));
              d.xRaw = pa.S(d.xRaw, b.x, e);
              d.yRaw = pa.S(d.yRaw, b.y, e);
              d.sRaw = pa.S(d.sRaw, b.V, e);
              d.rx = pa.S(d.rx, b.Ib, e);
              d.ry = pa.S(d.ry, b.Jb, e);
              d.rz = K.ia ? d.rz + e * b.ya : pa.S(d.rz, b.ya, e);
              n = d.sRaw * Na.jb * Math.sin(d.ry);
              f = (Math.sin(d.rz) * n) / Pa;
              d.x = d.xRaw + Math.cos(d.rz) * n;
              d.y = d.yRaw + f;
              d.s = d.sRaw;
              e = Math.max(e, Y.nd);
              for (n = 0; n < T.T; ++n) d.expressions[n] = pa.S(d.expressions[n], b.qc[n], e);
              ++b.Ta;
            }
          }
        sa.Ie();
        sa.reset();
        W.reset();
        c.enable(c.DEPTH_TEST);
        K.Da && (1 === H.i ? K.Da(oa[0]) : K.Da(oa));
        c.disable(c.BLEND);
        ia === ba.play && (Ma = window.requestAnimationFrame(Gb));
      }
    }
    function qb() {
      X.ka = W.instance({ isPot: !0, isFloat: !1, width: Oa.Sd() });
      for (
        var a = Y.dd, b = H.i, d = new Float32Array([0, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e = new Float32Array(d.length * H.i), n = 0, f;
        n < H.i;
        ++n
      )
        for (f = 0; f < d.length; ++f) e[n * d.length + f] = d[f];
      T.na = Hb.instance({ width: a, height: b, isFloat: !0, isPot: !1, array: e });
    }
    function Ib() {
      function a(b) {
        for (var d = [], e = 0; e < H.i; ++e) d.push(JSON.parse(JSON.stringify(b)));
        return d;
      }
      T.buffer = new Uint8Array(8 * Y.dd * H.i);
      Sa = a({ Ea: 0, x: 0, y: 0, V: 1, Ib: 0, Jb: 0, ya: 0, qc: new Float32Array(T.T), Ta: 0 });
      oa = a({ detected: 0, x: 0, y: 0, s: 1, xRaw: 0, yRaw: 0, sRaw: 1, rx: 0, ry: 0, rz: 0, expressions: new Float32Array(T.T) });
      a({ ob: 0, pb: 0, nb: 0, kb: 0, lb: 0, mb: 0 });
    }
    function hb() {
      y.N('s51', [
        { type: '1i', name: 'u1', value: 0 },
        { type: '1i', name: 'u33', value: 1 },
        { type: '2f', name: 'u34', value: X.u },
        { type: '1f', name: 'u35', value: 0.5 },
        { type: '1f', name: 'u36', value: 0 },
      ]);
      y.N('s52', [
        { type: '1i', name: 'u38', value: 0 },
        { type: '1i', name: 'u33', value: 1 },
        { type: '1f', name: 'u41', value: Y.Ge },
        { type: '1f', name: 'u42', value: na.threshold },
        { type: '3f', name: 'u40', value: [T.I[0] * X.u[0], T.I[1] * X.u[1], T.I[2]] },
        { type: '1f', name: 'u35', value: 0.5 },
        { type: '1f', name: 'u43', value: 1 },
        { type: '1f', name: 'u36', value: 0 },
      ]);
      var a = [{ type: '1i', name: 'u38', value: 0 }];
      y.N('s53', a);
      y.N('s54', a);
      y.N('s49', [
        { type: '1i', name: 'u33', value: 0 },
        { type: '1f', name: 'u46', value: X.u[0] },
        { type: '2f', name: 'u45', value: [0, 0.5 / H.i] },
      ]);
    }
    function ib() {
      X.u[0] = 1;
      X.u[1] = X.L / X.G;
      rb.o({ Va: na.overlapFactors, Sc: na.nScaleLevels, L: X.L, G: X.G, Yc: na.scale0Factor, I: T.I, Zc: na.scanCenterFirst });
    }
    function Jb(a) {
      if (K.oa) sb('string' === typeof K.oa ? JSON.parse(K.oa) : K.oa, a);
      else {
        var b = K.Vb;
        'JSON' !== b.toUpperCase().split('.').pop() && (b += Y.neuralNetworkPath);
        tb.get(b, function (d) {
          d = JSON.parse(d);
          sb(d, a);
        });
      }
    }
    function sb(a, b) {
      if (a.exportData) {
        var d = a.exportData;
        d.rotationEulerAnglesFactors && (T.xa = d.rotationEulerAnglesFactors);
        d.translationScalingFactors && (T.I = d.translationScalingFactors);
        'undefined' !== typeof d.nExpressions && (T.T = d.nExpressions);
        Na.Kb = 0.4;
        Na.jb = 0.7;
        'undefined' !== typeof d.fgScaleXFactor && (Na.Kb = d.fgScaleXFactor);
        'undefined' !== typeof d.fgDisplaceXFactor && (Na.jb = d.fgDisplaceXFactor);
      }
      T.T || (T.T = Y.Rc);
      if (!T.wa) for (T.wa = [], d = 0; d < T.T; ++d) T.wa.push(Y.Jd);
      b(a);
    }
    function Kb() {
      if (
        Qa.o({
          gb: K.Y,
          width: X.L,
          height: X.G,
          debug: !1,
          Tc: function () {
            Ga('GLCONTEXT_LOST');
          },
          antialias: K.antialias,
          premultipliedAlpha: !0,
        })
      )
        return !0;
      Ga('GL_INCOMPATIBLE');
      return !1;
    }
    function eb(a) {
      return a.detected <= Y.Oc;
    }
    function ub(a, b, d, e) {
      return d > a ? Math.max(0, a + b / 2 - (d - e / 2)) : Math.max(0, d + e / 2 - (a - b / 2));
    }
    function Lb() {
      return Sa.some(function (a, b) {
        if (b === H.fa) return !1;
        b = Sa[H.fa];
        if (b.Ta > a.Ta || 3 > a.Ta || ub(b.x, b.V, a.x, a.V) < Y.Pc * b.V) return !1;
        var d = X.L / X.G;
        return ub(b.y, b.V * d, a.y, a.V * d) > Y.Pc * b.V * d;
      });
    }
    function Mb() {
      var a = H.fa;
      T.na.xe(1);
      1 !== H.i && (c.viewport(0, 0, 3, H.i), y.set('s0'), y.cd('u1', 1), U.g(!1, !1), y.cd('u1', 0));
      c.viewport(0, a, 1, 1);
      y.set('s52');
      K.ia && y.A('u36', oa[a].rz);
      1 !== H.i && y.A('u35', H.Db);
      if (1 < H.i) {
        var b = Lb() ? 0 : 1;
        y.A('u43', b);
      }
      y.ze('u39', rb.get());
      U.g(!1, !1);
      H.Hc && (c.viewport(1, a, 1, 1), y.set('s53'), U.g(!1, !1), c.viewport(2, a, 1, 1), y.set('s54'), U.g(!1, !1));
    }
    function vb() {
      x.H && x.H.remove();
      x.Ma = x.element.isFakeVideo ? !0 : !1;
      if (x.Ma) {
        var a = wb();
        a = { isFlipY: !1, array: x.element.arrayBuffer, width: a.w, height: a.ja, isKeepArray: !0 };
      } else a = { F: x.element };
      x.Ob = W.instance(Object.assign({ isPot: !1, isLinear: !0, isFloat: !1 }, a));
      x.H = x.Ob;
    }
    function Ha() {
      var a = [{ type: 'mat2', name: 'u32', value: x.j }];
      y.N('s50', [{ type: '1i', name: 'u1', value: 0 }].concat(a));
      y.N('s51', a);
    }
    function Ia() {
      x.D[0] = 0.5;
      x.D[1] = 0.5;
      var a = x.u[1] / x.u[0];
      Pa = Qa.R() / Qa.B();
      90 === Math.abs(ma.rotate) && (a = 1 / a);
      a > Pa ? (x.D[1] *= Pa / a) : (x.D[0] *= a / Pa);
      y.N('s52', [{ name: 'u44', type: '1f', value: Pa }]);
      x.j[0] = 0;
      x.j[1] = 0;
      x.j[2] = 0;
      x.j[3] = 0;
      switch (ma.rotate) {
        case 0:
          x.j[0] = x.D[0];
          x.j[3] = x.D[1];
          break;
        case 180:
          x.j[0] = -x.D[0];
          x.j[3] = -x.D[1];
          break;
        case 90:
          x.j[1] = x.D[0];
          x.j[2] = -x.D[1];
          break;
        case -90:
          (x.j[1] = -x.D[0]), (x.j[2] = x.D[1]);
      }
      ma.flipX && ((x.j[0] *= -1), (x.j[2] *= -1));
      x.j[1] *= -1;
      x.j[3] *= -1;
    }
    function wb() {
      var a = { w: x.element.videoWidth || x.element.width, ja: x.element.videoHeight || x.element.height };
      if (!a.w || !a.ja || 4 > a.w || 4 > a.ja) throw Error('INVALID VIDEO DIMENSIONS - width = ' + a.w + ' height = ' + a.ja);
      return a;
    }
    function jb() {
      var a = wb(),
        b = x.u[0] !== a.w || x.u[1] !== a.ja;
      b && ((x.u[0] = a.w), (x.u[1] = a.ja));
      return b;
    }
    function Xa(a, b) {
      if (ia === ba.error) return !1;
      x.element = a;
      jb();
      b && b();
      return !0;
    }
    function xb(a, b, d) {
      a && a();
      x.ua = {
        video: {
          facingMode: { exact: ma.facingMode },
          width: { min: ma.minWidth, max: ma.maxWidth, ideal: ma.idealWidth },
          height: { min: ma.minHeight, max: ma.maxHeight, ideal: ma.idealHeight },
        },
        audio: !1,
      };
      ma.deviceId && (x.ua.deviceId = ma.deviceId);
      S.get(
        x.element ? x.element : S.Wd(),
        function (e) {
          b && b(e);
          d(e);
        },
        function () {
          Ga('WEBCAM_UNAVAILABLE');
        },
        x.ua
      );
    }
    function Ga(a) {
      ia !== ba.error && ((ia = ba.error), K.ta && K.ta(a));
    }
    var pa = {
        If: function (a) {
          return Math.ceil(Math.log2(a));
        },
        ge: function (a) {
          return Math.log2(a);
        },
        Wf: function (a) {
          return 0 === Math.log2(a) % 1;
        },
        Ve: function (a) {
          var b = [0, 0, 0, 0];
          a.forEach(function (d) {
            b[0] += d[0];
            b[1] += d[1];
            b[2] += d[2];
            b[3] += d[3];
          });
          return b;
        },
        We: function (a, b, d) {
          return Math.min(Math.max(a, b), d);
        },
        Ze: function (a) {
          return (a * Math.PI) / 180;
        },
        bg: function (a, b) {
          b = Math.pow(10, b);
          return Math.round(a * b) / b;
        },
        cg: function (a) {
          return Math.round(1e6 * a) / 1e6;
        },
        Jf: function (a, b) {
          return ((100 * a) / b).toFixed(3);
        },
        S: function (a, b, d) {
          return a * (1 - d) + b * d;
        },
        Fd: function (a, b) {
          return pa.zd(a - b);
        },
        zd: function (a) {
          for (; a > Math.PI; ) a -= 2 * Math.PI;
          for (; a <= -Math.PI; ) a += 2 * Math.PI;
          return a;
        },
        af: function (a, b) {
          return Math.abs(pa.Fd(a, b));
        },
        Ne: function (a, b) {
          return Math.atan2(Math.sin(a) + Math.sin(b), Math.cos(a) + Math.cos(b));
        },
      },
      tb = {
        get: function (a, b, d) {
          var e = new XMLHttpRequest();
          e.open('GET', a, !0);
          e.withCredentials = !1;
          e.onreadystatechange = function () {
            4 === e.readyState && (200 === e.status || 0 === e.status ? b(e.responseText) : 'undefined' !== typeof d && d(e.status));
          };
          e.send();
        },
        Ff: function (a, b) {
          tb.get(a, function (d) {
            b(JSON.parse(d));
          });
        },
        $f: function (a, b, d) {
          var e = new XMLHttpRequest();
          e.open('POST', a, !0);
          e.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          e.onreadystatechange = function () {
            4 !== e.readyState || (200 !== e.status && 0 !== e.status) || d(e.responseText);
          };
          e.send(b);
        },
        uf: function (a, b) {
          var d = new XMLHttpRequest();
          d.open('POST', a, !0);
          d.responseType = 'arraybuffer';
          d.onload = function () {
            b(d.response);
          };
          d.send();
        },
      },
      kb = {
        hb: function (a, b) {
          if (0 === b || 'object' !== typeof a) return a;
          a = Object.assign({}, a);
          b = void 0 === b || -1 === b ? -1 : b - 1;
          for (var d in a) a[d] = kb.hb(a[d], b);
          return a;
        },
      },
      Wa = {
        ng: function (a, b, d) {
          a = Math.min(Math.max((d - a) / (b - a), 0), 1);
          return a * a * (3 - 2 * a);
        },
        Qa: function (a, b, d) {
          return Math.min(Math.max((d - a) / (b - a), 0), 1);
        },
        mf: function (a, b, d, e) {
          return Math.pow(Math.min(Math.max((e - a) / (b - a), 0), 1), d);
        },
        rg: function () {
          return 0;
        },
        Zf: function () {
          return 1;
        },
        Yf: function (a) {
          return a;
        },
        jf: function (a) {
          return a * a;
        },
        qf: function (a) {
          return a * (2 - a);
        },
        ff: function (a) {
          return 0.5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a;
        },
        df: function (a) {
          return a * a * a;
        },
        pf: function (a) {
          return --a * a * a + 1;
        },
        ef: function (a) {
          return 0.5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
        },
        kf: function (a) {
          return a * a * a * a;
        },
        rf: function (a) {
          return 1 - --a * a * a * a;
        },
        gf: function (a) {
          return 0.5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a;
        },
        lf: function (a) {
          return a * a * a * a * a;
        },
        sf: function (a) {
          return 1 + --a * a * a * a * a;
        },
        hf: function (a) {
          return 0.5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a;
        },
      },
      Nb = {
        Ld: function (a, b, d) {
          switch (a) {
            case 'relu':
              return d + '=max(vec4(0.,0.,0.,0.),' + b + ');';
            case 'elu':
              return d + '=mix(exp(-abs(' + b + '))-vec4(1.,1.,1.,1.),' + b + ',step(0.,' + b + '));';
            case 'elu01':
              return d + '=mix(0.1*exp(-abs(' + b + '))-vec4(0.1,0.1,0.1,0.1),' + b + ',step(0.,' + b + '));';
            case 'arctan':
              return d + '=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;';
            case 'copy':
              return '';
            default:
              return !1;
          }
        },
      },
      y = (function () {
        function a(w, u, B) {
          u = w.createShader(u);
          w.shaderSource(u, B);
          w.compileShader(u);
          return w.getShaderParameter(u, w.COMPILE_STATUS) ? u : !1;
        }
        function b(w, u, B) {
          u = a(w, w.VERTEX_SHADER, u);
          B = a(w, w.FRAGMENT_SHADER, B);
          w === c && t.push(u, B);
          var N = w.createProgram();
          w.attachShader(N, u);
          w.attachShader(N, B);
          w.linkProgram(N);
          return N;
        }
        function d(w, u) {
          void 0 === u.ha &&
            (u.ha = 'precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5,.5);}');
          void 0 === u.Ba && (u.Ba = ['a0']);
          void 0 === u.qa && (u.qa = [2]);
          if (void 0 === u.precision || 'highp' === u.precision) u.precision = m;
          u.id = v++;
          void 0 !== u.$c &&
            (u.$c.forEach(function (N, A) {
              u.a = u.a.replace(N, u.Ya[A]);
            }),
            u.$c.splice(0));
          u.Ub = 0;
          u.qa.forEach(function (N) {
            u.Ub += 4 * N;
          });
          u.ga = b(w, u.ha, 'precision ' + u.precision + ' float;\n' + u.a);
          u.l = {};
          u.c.forEach(function (N) {
            u.l[N] = w.getUniformLocation(u.ga, N);
          });
          u.attributes = {};
          u.ra = [];
          u.Ba.forEach(function (N) {
            var A = w.getAttribLocation(u.ga, N);
            u.attributes[N] = A;
            u.ra.push(A);
          });
          if (u.f) {
            w.useProgram(u.ga);
            h = u;
            l = u.id;
            for (var B in u.f) w.uniform1i(u.l[B], u.f[B]);
          }
          u.yb = !0;
        }
        function e(w) {
          ua.ye(V);
          l !== w.id &&
            (V.K(),
            (l = w.id),
            (h = w),
            c.useProgram(w.ga),
            w.ra.forEach(function (u) {
              0 !== u && c.enableVertexAttribArray(u);
            }));
        }
        function n(w, u, B) {
          d(w, u, B);
          w.useProgram(u.ga);
          w.enableVertexAttribArray(0);
          l = -1;
          return (h = u);
        }
        function f() {
          return { a: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}', c: ['u1'], f: { u1: 0 } };
        }
        var t = [],
          l = -1,
          h = null,
          v = 0,
          g = !1,
          m = 'highp',
          q = ['u1'],
          k = ['u0'],
          C = { u1: 0 },
          F = { u0: 0 },
          I = { u1: 0, u2: 1 },
          O = { u3: 0 },
          D = {
            s0: f(),
            s1: { a: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}', c: q, f: C, precision: 'lowp' },
            s2: {
              a: 'uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}',
              c: ['u1', 'u2'],
              f: I,
            },
            s3: {
              a: 'uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}',
              c: q,
              f: C,
            },
            s4: {
              a:
                'uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}',
              c: ['u1', 'u2'],
              f: I,
            },
            s5: { a: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}', c: q, f: C },
            s6: { a: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}', c: q, f: C },
            s7: {
              a: 'uniform sampler2D u0;uniform float u4;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u4;}',
              c: ['u0', 'u4'],
              f: F,
            },
            s8: {
              a:
                'uniform sampler2D u0;uniform float u4;varying vec2 vv0;const vec4 f=vec4(.25,.25,.25,.25),g=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u4,f);gl_FragColor=b*g;}',
              c: ['u0', 'u4'],
              f: F,
            },
            s9: {
              a:
                'uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}',
              c: q,
              f: C,
            },
            s10: {
              a:
                'uniform sampler2D u1,u5;uniform float u6;const vec4 f=vec4(1.,1.,1.,1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u5,vv0);gl_FragColor=mix(b,a,u6*f);}',
              c: ['u1', 'u5', 'u6'],
              f: { u1: 0, u5: 1 },
            },
            s11: {
              a:
                'uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u7)+texture2D(u1,vv0+u7*vec2(1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,-1.))+texture2D(u1,vv0+u7*vec2(-1.,1.)));}',
              c: ['u1', 'u7'],
              f: C,
            },
            s12: {
              a:
                'uniform sampler2D u1;uniform vec4 u8;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u8);gl_FragColor=j(a);}',
              c: ['u1', 'u8'],
              f: C,
            },
            s13: {
              a:
                'uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}',
              c: k,
              f: F,
            },
            s14: {
              a: 'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.,0.,0.,0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}',
              c: k,
              f: F,
            },
            s15: {
              a:
                'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}',
              c: k,
              f: F,
            },
            s16: {
              a:
                'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(-abs(a))-f;gl_FragColor=mix(.1*b,a,step(0.,a));}',
              c: k,
              f: F,
            },
            s17: {
              a:
                'uniform sampler2D u0,u6,u9;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u6,vv0),d=texture2D(u9,vv0),b=a/d;gl_FragColor=c*mix(exp(-abs(b))-f,b,step(0.,a));}',
              c: ['u0', 'u6', 'u9'],
              f: { u0: 0, u6: 1, u9: 2 },
            },
            s18: {
              a: 'uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}',
              c: k,
              f: F,
            },
            s19: {
              a:
                'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u0,vv0),b=log(f+a);gl_FragColor=b;}',
              c: k,
              f: F,
            },
            s20: {
              a:
                'uniform sampler2D u0,u10;uniform float u11;const vec2 e=vec2(.5,.5);const float f=1e-5;const vec4 g=vec4(1.,1.,1.,1.),i=vec4(0.,0.,0.,0.);varying vec2 vv0;void main(){vec4 a=texture2D(u10,e);float b=u11*u11;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}',
              c: ['u0', 'u10', 'u11'],
              f: { u0: 0, u10: 1 },
            },
            s21: {
              a:
                'uniform sampler2D u1;uniform vec2 u12;varying vec2 vv0;void main(){float a=u12.x*u12.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u12.y),f=floor(u12.x*fract(b*u12.y)),g=(f*u12.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}',
              c: ['u1', 'u12'],
              f: C,
            },
            s22: {
              a:
                'uniform sampler2D u13,u14,u15;varying vec2 vv0;void main(){vec4 a=texture2D(u15,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u13,b),f=texture2D(u14,c);gl_FragColor=d*f;}',
              c: ['u13', 'u14', 'u15'],
              f: { u14: 0, u13: 1, u15: 2 },
            },
            s23: {
              a:
                'uniform float u16;uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec2 a=fract(vv0*u16);vec4 b=texture2D(u13,vv0),c=texture2D(u14,a);gl_FragColor=b*c;}',
              c: ['u14', 'u13', 'u16'],
              f: { u14: 0, u13: 1 },
            },
            s24: {
              a:
                'uniform float u16;uniform sampler2D u13,u14,u17,u18,u19,u20;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 h=vv0*u16,l=floor(h),c=h-l;vec4 m=texture2D(u13,vv0),d=texture2D(u14,c),a=texture2D(u20,vv0);a=a*255.;vec4 n=texture2D(u17,c),o=texture2D(u18,c),p=texture2D(u19,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b;d=i*d+j*n+k*o+q*p,gl_FragColor=m*d;}',
              c: 'u13 u14 u16 u20 u17 u18 u19'.split(' '),
              f: { u14: 0, u13: 1, u20: 3, u17: 4, u18: 5, u19: 6 },
            },
            s25: {
              a:
                'uniform sampler2D u13,u14,u21;uniform float u16,u22,u23,u24;varying vec2 vv0;const vec2 j=vec2(1.,1.);void main(){vec2 a=floor(u22*vv0),b=u22*vv0-a;float c=u16/u22;vec2 d=floor(b*c),f=b*c-d,g=(a+f)/u22;float k=u22*u24/u16;vec2 l=k*d,h=(l+f*u23)/u24,i=step(h,j);vec4 m=texture2D(u13,g),n=texture2D(u14,h),o=m*n*i.x*i.y,p=texture2D(u21,g);gl_FragColor=o*u23*u23+p;}',
              c: 'u13 u14 u16 u22 u23 u24 u21'.split(' '),
              f: { u14: 0, u13: 1, u21: 2 },
            },
            s26: {
              a: 'uniform sampler2D u13,u14;varying vec2 vv0;void main(){vec4 a=texture2D(u13,vv0),b=texture2D(u14,vv0);gl_FragColor=a*b;}',
              c: ['u13', 'u14'],
              f: { u14: 0, u13: 1 },
            },
            s27: {
              a: 'uniform sampler2D u1,u21;uniform float u25;varying vec2 vv0;void main(){gl_FragColor=texture2D(u21,vv0)+u25*texture2D(u1,vv0);}',
              c: ['u1', 'u21', 'u25'],
              f: { u1: 0, u21: 1 },
            },
            s28: {
              a:
                'varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}',
              c: q,
              f: C,
              precision: 'lowp',
            },
            s29: {
              a:
                'varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}',
              c: ['u1', 'u26'],
              f: C,
              precision: 'lowp',
            },
            s30: {
              a:
                'varying vec2 vv0;uniform sampler2D u1;uniform float u26;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u26)).rgb,c=texture2D(u1,vv0+vec2(u26,u26)).rgb,d=texture2D(u1,vv0+vec2(u26,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}',
              c: ['u1', 'u26'],
              f: C,
              precision: 'lowp',
            },
            s31: {
              a:
                'varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u27,vv0.y-u27))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u27))*2.,b-=texture2D(u1,vec2(vv0.x+u27,vv0.y-u27))*1.,b+=texture2D(u1,vec2(vv0.x-u27,vv0.y+u27))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u27))*2.,b+=texture2D(u1,vec2(vv0.x+u27,vv0.y+u27))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}',
              c: ['u1', 'u2', 'u27'],
              f: I,
            },
            s32: {
              a:
                'varying vec2 vv0;uniform sampler2D u1,u2;uniform float u27;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u27,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}',
              c: ['u1', 'u2', 'u27'],
              f: I,
            },
            s33: {
              a:
                'uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u7*g;vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*h),d=texture2D(u3,a+u7*i),j=texture2D(u3,a+u7),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}',
              c: ['u3', 'u7'],
              f: O,
            },
            s34: {
              a:
                'uniform sampler2D u3;uniform vec2 u7;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u3,a),c=texture2D(u3,a+u7*k),d=texture2D(u3,a+u7*l),g=texture2D(u3,a+u7),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u7*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u7*m),d=f(a+u7*2.),g=f(a+u7*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}',
              c: ['u3', 'u7'],
              f: O,
            },
            s35: {
              a: 'uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}',
              c: ['u1'],
              f: C,
              precision: 'lowp',
            },
            s36: {
              a:
                'uniform sampler2D u1;uniform vec2 u7;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u7)+2002./e*texture2D(u1,vv0-2.*u7)+3003./e*texture2D(u1,vv0-u7)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u7)+2002./e*texture2D(u1,vv0+2.*u7)+1001./e*texture2D(u1,vv0+3.*u7);gl_FragColor=a;}',
              c: ['u7', 'u1'],
              f: C,
              precision: 'lowp',
            },
            s37: {
              a:
                'uniform sampler2D u1,u28,u29;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u28,vv0),b=texture2D(u29,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}',
              c: ['u1', 'u28', 'u29'],
              f: { u1: 0, u28: 1, u29: 2 },
            },
          },
          G = {
            s38: {
              a:
                'uniform float u16,u30;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-5,1e-5);void main(){vec4 sum=texture2D(u21,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u16,xyTo=floor(vv0*u16+eps2);float weightSize=toSparsity*u16;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u30*(xyPatch-halfFromSparsity))/u16,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}',
              c: ['u16', 'u13', 'u14', 'u21', 'u30'],
              Ya: ['1.1111', 'gl_FragColor\\*=2.2222;'],
            },
            s39: {
              a:
                'uniform float u16,u30,u24;uniform sampler2D u13,u14,u21;varying vec2 vv0;const vec2 ZERO2=vec2(0.,0.),ONE2=vec2(1.,1.),HALF2=vec2(.5,.5),EPS2=vec2(1e-4,1e-4);void main(){vec4 sum=texture2D(u21,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u24,xyTo=floor(vv0*u16+eps2);float weightSize=fromSparsity*u24;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u16;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u30*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u24,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u13,uvWeight)*texture2D(u14,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}',
              c: 'u16 u24 u13 u14 u21 u30'.split(' '),
              Ya: ['1.1111', 'gl_FragColor\\*=2.2222;', '3.3333'],
            },
          },
          E = null,
          Z = null,
          V = {
            Oa: function () {
              return g;
            },
            o: function () {
              if (!g) {
                E = kb.hb(D, 2);
                Z = kb.hb(G, 2);
                m = 'highp';
                for (var w in E) d(c, E[w], w);
                y.set('s0');
                c.enableVertexAttribArray(0);
                g = !0;
              }
            },
            ld: function (w) {
              w.forEach(function (u) {
                V.Xb(u);
              });
            },
            Xb: function (w) {
              E[w.id] = w;
              d(c, w, w.id);
            },
            Ac: function (w, u, B) {
              u || (u = w);
              E[u] = Object.create(Z[w]);
              E[u].be = !0;
              Z[w].Ya &&
                Z[w].Ya.forEach(function (N, A) {
                  E[u].a = E[u].a.replace(new RegExp(N, 'g'), B[A]);
                });
              d(c, E[u], u);
            },
            set: function (w) {
              e(E[w]);
            },
            Za: function (w) {
              return n(w, f(), 's40');
            },
            Lb: function (w) {
              return n(w, { a: 'void main(){gl_FragColor=vec4(.5,.5,.5,.5);}', c: [], precision: 'highp' }, 's41');
            },
            Id: function (w) {
              return 'undefined' === typeof E[w] ? !1 : E[w].yb;
            },
            K: function () {
              -1 !== l &&
                ((l = -1),
                h.ra.forEach(function (w) {
                  0 !== w && c.disableVertexAttribArray(w);
                }));
            },
            Nb: function () {
              var w = 0;
              h.ra.forEach(function (u, B) {
                B = h.qa[B];
                c.vertexAttribPointer(u, B, c.FLOAT, !1, h.Ub, w);
                w += 4 * B;
              });
            },
            jc: function () {
              c.enableVertexAttribArray(0);
            },
            la: function () {
              V.$a(c);
            },
            $a: function (w) {
              w.vertexAttribPointer(h.ra[0], 2, w.FLOAT, !1, 8, 0);
            },
            cd: function (w, u) {
              c.uniform1i(h.l[w], u);
            },
            A: function (w, u) {
              c.uniform1f(h.l[w], u);
            },
            za: function (w, u, B) {
              c.uniform2f(h.l[w], u, B);
            },
            hg: function (w, u) {
              c.uniform2fv(h.l[w], u);
            },
            ze: function (w, u) {
              c.uniform3fv(h.l[w], u);
            },
            ig: function (w, u, B, N) {
              c.uniform3f(h.l[w], u, B, N);
            },
            jg: function (w, u, B, N, A) {
              c.uniform4f(h.l[w], u, B, N, A);
            },
            Mb: function (w, u) {
              c.uniform4fv(h.l[w], u);
            },
            kg: function (w, u) {
              c.uniformMatrix2fv(h.l[w], !1, u);
            },
            lg: function (w, u) {
              c.uniformMatrix3fv(h.l[w], !1, u);
            },
            mg: function (w, u) {
              c.uniformMatrix4fv(h.l[w], !1, u);
            },
            N: function (w, u) {
              V.set(w);
              u.forEach(function (B) {
                switch (B.type) {
                  case '4f':
                    c.uniform4fv(h.l[B.name], B.value);
                    break;
                  case '3f':
                    c.uniform3fv(h.l[B.name], B.value);
                    break;
                  case '2f':
                    c.uniform2fv(h.l[B.name], B.value);
                    break;
                  case '1f':
                    c.uniform1f(h.l[B.name], B.value);
                    break;
                  case '1i':
                    c.uniform1i(h.l[B.name], B.value);
                    break;
                  case 'mat2':
                    c.uniformMatrix2fv(h.l[B.name], !1, B.value);
                    break;
                  case 'mat3':
                    c.uniformMatrix3fv(h.l[B.name], !1, B.value);
                    break;
                  case 'mat4':
                    c.uniformMatrix4fv(h.l[B.name], !1, B.value);
                }
              });
            },
            Hf: function () {
              return 'lowp';
            },
            h: function () {
              c.disableVertexAttribArray(0);
              V.K();
              for (var w in E) {
                var u = E[w];
                u.yb && ((u.yb = !1), c.deleteProgram(u.ga));
                u.be && delete E[w];
              }
              t.forEach(function (B) {
                c.deleteShader(B);
              });
              t.splice(0);
              v = 0;
              g = !1;
              h = null;
              l = -1;
            },
          };
        return V;
      })(),
      c = null,
      Qa = (function () {
        function a(m) {
          console.log('ERROR in ContextFF: ', m);
          return !1;
        }
        function b(m) {
          function q() {
            Aa.h();
            C.getExtension('WEBGL_lose_context').loseContext();
          }
          if (navigator.userAgent && -1 !== navigator.userAgent.indexOf('forceWebGL1')) return !1;
          var k = document.createElement('canvas');
          k.setAttribute('width', 1);
          k.setAttribute('height', 1);
          var C = null;
          try {
            C = k.getContext('webgl2', m);
          } catch (F) {
            return !1;
          }
          if (!C) return !1;
          d(C);
          ca.kc(C);
          m = ca.ib(C);
          if (!m.Z && !m.$) return q(), !1;
          m = Aa.ac(C, m);
          q();
          return m ? !0 : !1;
        }
        function d(m) {
          m.clearColor(0, 0, 0, 0);
          m.disable(m.DEPTH_TEST);
          m.disable(m.BLEND);
          m.disable(m.DITHER);
          m.disable(m.STENCIL_TEST);
          m.disable(m.CULL_FACE);
          m.GENERATE_MIPMAP_HINT && m.hint(m.GENERATE_MIPMAP_HINT, m.FASTEST);
          m.disable(m.SAMPLE_ALPHA_TO_COVERAGE);
          m.disable(m.SAMPLE_COVERAGE);
          m.depthFunc(m.LEQUAL);
          m.clearDepth(1);
        }
        var e = null,
          n = null,
          f = null,
          t = null,
          l = !0,
          h = null,
          v = null,
          g = {
            B: function () {
              return e.width;
            },
            R: function () {
              return e.height;
            },
            yf: function () {
              return e;
            },
            wf: function () {
              return c;
            },
            aa: function () {
              return l;
            },
            flush: function () {
              c.flush();
            },
            Od: function () {
              h || (h = new Uint8Array(e.width * e.height * 4));
              c.readPixels(0, 0, e.width, e.height, c.RGBA, c.UNSIGNED_BYTE, h);
              return h;
            },
            Af: function () {
              return e.toDataURL('image/jpeg');
            },
            Bf: function () {
              sa.J();
              n || ((n = document.createElement('canvas')), (f = n.getContext('2d')));
              n.width = e.width;
              n.height = e.height;
              for (var m = g.Od(), q = f.createImageData(n.width, n.height), k = n.width, C = n.height, F = q.data, I = 0; I < C; ++I)
                for (var O = C - I - 1, D = 0; D < k; ++D) {
                  var G = 4 * (I * k + D),
                    E = 4 * (O * k + D);
                  F[G] = m[E];
                  F[G + 1] = m[E + 1];
                  F[G + 2] = m[E + 2];
                  F[G + 3] = m[E + 3];
                }
              f.putImageData(q, 0, 0);
              return n.toDataURL('image/png');
            },
            zf: function (m) {
              !n && m && ((n = document.createElement('canvas')), (f = n.getContext('2d')));
              var q = m ? n : document.createElement('canvas');
              q.width = e.width;
              q.height = e.height;
              (m ? f : q.getContext('2d')).drawImage(e, 0, 0);
              return q;
            },
            o: function (m) {
              m.Cd && !m.gb ? (e = document.getElementById(m.Cd)) : m.gb && (e = m.gb);
              e || (e = document.createElement('canvas'));
              e.width = m && void 0 !== m.width ? m.width : 512;
              e.height = m && void 0 !== m.height ? m.height : 512;
              'undefined' === typeof m && (m = {});
              void 0 === m.premultipliedAlpha && (m.premultipliedAlpha = !1);
              void 0 === m.Ec && (m.Ec = !0);
              void 0 === m.antialias && (m.antialias = !1);
              if (c) l = c instanceof WebGL2RenderingContext;
              else {
                l = !0;
                var q = {
                  antialias: m.antialias,
                  alpha: !0,
                  preserveDrawingBuffer: !0,
                  premultipliedAlpha: m.premultipliedAlpha,
                  stencil: !1,
                  depth: m.Ec,
                };
                navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf('noAntialiasing') && (q.antialias = !1);
                var k = b(q);
                !k && q.antialias && ((q.antialias = !1), (k = b(q)));
                k && (c = e.getContext('webgl2', q));
                c ? (l = !0) : ((c = e.getContext('webgl', q)) || (c = e.getContext('experimental-webgl', q)), (l = !1));
              }
              if (!c) return a('WebGL1 and 2 are not enabled');
              (t = c.getExtension('WEBGL_lose_context')) && m.Tc && ((v = m.Tc), e.addEventListener('webglcontextlost', v, !1));
              if (!ca.o()) return a('Not enough GL capabilities');
              d(c);
              y.o();
              U.o();
              return Aa.ac(c, ca.Nd()) ? !0 : a('Cannot filter float textures');
            },
            h: function () {
              c && (ca.h(), Aa.h());
              t && v && (e.removeEventListener('webglcontextlost', v, !1), (t = v = null));
              c = h = f = n = e = null;
            },
          };
        return g;
      })(),
      ua = (function () {
        function a() {
          null === b && ('undefined' !== typeof y ? (b = y) : 'undefined' !== typeof JEShaders && (b = JEShaders));
        }
        var b = null;
        a();
        return {
          ye: function (d) {
            b !== d && (b && b.K(), (b = d));
          },
          Oa: function () {
            return b.Oa();
          },
          la: function () {
            return b.la();
          },
          $a: function (d) {
            return b.$a(d);
          },
          Nb: function () {
            return b.Nb();
          },
          K: function () {
            return b.K();
          },
          set: function (d) {
            return b.set(d);
          },
          Za: function (d) {
            a();
            return b.Za(d);
          },
          Lb: function (d) {
            a();
            return b.Lb(d);
          },
          h: function () {
            return b.h();
          },
        };
      })(),
      Da = (function () {
        function a(p) {
          c.bindTexture(c.TEXTURE_2D, p);
        }
        function b(p) {
          u[0] = p;
          p = B[0];
          var L = (p >> 16) & 32768,
            J = (p >> 12) & 2047,
            r = (p >> 23) & 255;
          return 103 > r
            ? L
            : 142 < r
            ? L | 31744 | ((255 == r ? 0 : 1) && p & 8388607)
            : 113 > r
            ? ((J |= 2048), L | ((J >> (114 - r)) + ((J >> (113 - r)) & 1)))
            : (L = (L | ((r - 112) << 10) | (J >> 1)) + (J & 1));
        }
        function d(p) {
          var L = new Uint16Array(p.length);
          p.forEach(function (J, r) {
            L[r] = b(J);
          });
          return L;
        }
        function e() {
          if (null !== N.vb) return N.vb;
          var p = f(d([1, 1, 1, 1]));
          return null === p ? !0 : (N.vb = p);
        }
        function n() {
          if (null !== N.wb) return N.wb;
          var p = f(new Uint8Array([255, 255, 255, 255]));
          return null === p ? !0 : (N.wb = p);
        }
        function f(p) {
          if (!ua.Oa() || !F) return null;
          var L = null;
          try {
            var J = c.getError();
            if ('FUCKING_BIG_ERROR' === J) return !1;
            L = A.instance({ isFloat: !1, M: !0, array: p, width: 1 });
            J = c.getError();
            if (J !== c.NO_ERROR) return !1;
          } catch (r) {
            return !1;
          }
          ka.J();
          c.viewport(0, 0, 1, 1);
          c.clearColor(0, 0, 0, 0);
          c.clear(c.COLOR_BUFFER_BIT);
          ua.set('s0');
          L.Zb(0);
          la.g(!0, !0);
          p = new Uint8Array(4);
          c.readPixels(0, 0, 1, 1, c.RGBA, c.UNSIGNED_BYTE, p);
          p = 0.9 < p[0];
          L.remove();
          ka.X();
          return p;
        }
        var t = 0,
          l = null,
          h = 0,
          v = null,
          g = null,
          m = null,
          q = null,
          k = null,
          C = null,
          F = !1,
          I = [],
          O = {
            isFloat: !1,
            isPot: !0,
            isLinear: !1,
            isMipmap: !1,
            isAnisotropicFiltering: !1,
            isMirrorX: !1,
            isMirrorY: !1,
            isSrgb: !1,
            isKeepArray: !1,
            isFlipY: null,
            width: 0,
            height: 0,
            url: null,
            array: null,
            data: null,
            F: null,
            ub: null,
            ae: !1,
            M: !1,
            ea: null,
            Sa: 4,
            Ab: 0,
          },
          D = !1,
          G = null,
          E = null,
          Z = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
          ],
          V = !1,
          w = !1,
          u = new Float32Array(1),
          B = new Int32Array(u.buffer),
          N = { vb: null, wb: null },
          A = {
            o: function () {
              F ||
                ((k = [c.RGB, null, c.RGB, c.RGBA]),
                (C = [c.RGB, null, c.RGB, c.RGBA]),
                (l = [c.TEXTURE0, c.TEXTURE1, c.TEXTURE2, c.TEXTURE3, c.TEXTURE4, c.TEXTURE5, c.TEXTURE6, c.TEXTURE7]),
                (V = 'undefined' !== typeof JEContext),
                (w = 'undefined' !== typeof ca),
                V && JEContext.Xf() && l.push(c.TEXTURE8, c.TEXTURE9),
                (v = [-1, -1, -1, -1, -1, -1, -1, -1]),
                (q = [c.UNSIGNED_BYTE, c.FLOAT, c.FLOAT]),
                (F = !0));
            },
            Yd: function () {
              if (!g) {
                for (var p = new Float32Array(16384), L = 0; 16384 > L; ++L) p[L] = 2 * Math.random() - 1;
                g = {
                  random: A.instance({ isFloat: !0, isPot: !0, array: p, width: 64 }),
                  hd: A.instance({ isFloat: !1, isPot: !0, width: 1, array: new Uint8Array([0, 0, 0, 0]) }),
                };
              }
              A.Le();
            },
            Of: function () {
              return g.hd;
            },
            Le: function () {
              q[1] = ca.sb(c);
            },
            ve: function () {
              C = k = [c.RGBA, c.RGBA, c.RGBA, c.RGBA];
            },
            ag: function (p, L) {
              y.set('s1');
              ka.J();
              var J = p.B(),
                r = p.R();
              c.viewport(0, 0, J, r);
              p.b(0);
              la.g(!1, !1);
              c.readPixels(0, 0, J, r, c.RGBA, c.UNSIGNED_BYTE, L);
            },
            sc: function (p, L, J, r, ea, va, Ba) {
              p.activeTexture(p.TEXTURE0);
              var qa = p.createTexture();
              p.bindTexture(p.TEXTURE_2D, qa);
              ea = ea instanceof Float32Array ? ea : new Float32Array(ea);
              0 !== pa.ge(ea.length) % 1 &&
                (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE));
              p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.NEAREST);
              p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST);
              p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL, va);
              p.texImage2D(p.TEXTURE_2D, 0, p.RGBA, J, r, 0, p.RGBA, p.FLOAT, ea);
              p.bindTexture(p.TEXTURE_2D, null);
              p.pixelStorei(p.UNPACK_FLIP_Y_WEBGL, !1);
              Ba && (ka.X(), y.set('s0'));
              p.viewport(0, 0, J, r);
              p.framebufferTexture2D(p.FRAMEBUFFER, p.COLOR_ATTACHMENT0, p.TEXTURE_2D, L, 0);
              p.bindTexture(p.TEXTURE_2D, qa);
              Ba ? la.g(!0, !0) : U.Ia(p);
              p.deleteTexture(qa);
              F && ((v[0] = -1), (m = null), (t = 0));
            },
            cb: function (p) {
              p !== t && (c.activeTexture(l[p]), (t = p));
            },
            instance: function (p) {
              function L(z) {
                var M = c.getError();
                if ('FUCKING_BIG_ERROR' === M) return !1;
                c.texImage2D(c.TEXTURE_2D, 0, fa, da, ha, z);
                M = c.getError();
                M !== c.NO_ERROR && da !== c.RGBA && ((da = c.RGBA), c.texImage2D(c.TEXTURE_2D, 0, fa, da, ha, z));
                return !0;
              }
              function J() {
                if (!yb) {
                  a(ra);
                  wa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, wa);
                  r.isPot
                    ? (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, r.isMirrorX ? c.MIRRORED_REPEAT : c.REPEAT),
                      c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, r.isMirrorY ? c.MIRRORED_REPEAT : c.REPEAT))
                    : (c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_S, c.CLAMP_TO_EDGE),
                      c.texParameteri(c.TEXTURE_2D, c.TEXTURE_WRAP_T, c.CLAMP_TO_EDGE));
                  r.isAnisotropicFiltering &&
                    'undefined' !== typeof JESETTINGS &&
                    c.texParameterf(c.TEXTURE_2D, JEContext.Cf().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.Oe);
                  c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, r.isLinear ? c.LINEAR : c.NEAREST);
                  r.isLinear
                    ? c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, r.isMipmap && !Ja ? c.NEAREST_MIPMAP_LINEAR : c.LINEAR)
                    : c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, r.isMipmap && !Ja ? c.NEAREST_MIPMAP_NEAREST : c.NEAREST);
                  da = k[r.Sa - 1];
                  fa = C[r.Sa - 1];
                  ha = q[va];
                  if (ca.aa()) {
                    var z = c.RGBA32F;
                    da === c.RGBA && ha === c.FLOAT
                      ? r.isMipmap || r.isLinear
                        ? (fa = Aa.Qd(c))
                        : ca.bc()
                        ? z && (fa = z)
                        : (fa = c.RGBA16F || c.RGBA)
                      : da === c.RGB && ha === c.FLOAT && z && ((fa = z), (da = c.RGBA));
                  }
                  if ((r.M && !r.isFloat) || (r.isFloat && r.isMipmap && Aa.fe())) (z = c.RGBA16F) && (fa = z), (ha = ca.sb(c));
                  r.Ab && (Ya = r.Ab);
                  r.isSrgb && 4 === r.Sa && (da = JEContext.Mf());
                  if (r.F) L(r.F);
                  else if (r.url) L(Fa);
                  else if (xa) {
                    z = xa;
                    try {
                      'FUCKING_BIG_ERROR' !== c.getError() &&
                        (c.texImage2D(c.TEXTURE_2D, 0, fa, P, Q, 0, da, ha, z),
                        c.getError() !== c.NO_ERROR &&
                          (c.texImage2D(c.TEXTURE_2D, 0, fa, P, Q, 0, da, ha, null),
                          c.getError() !== c.NO_ERROR && c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, P, Q, 0, c.RGBA, c.UNSIGNED_BYTE, null)));
                    } catch (Zb) {
                      c.texImage2D(c.TEXTURE_2D, 0, fa, P, Q, 0, da, ha, null);
                    }
                    r.isKeepArray || (xa = null);
                  } else
                    (z = c.getError()),
                      'FUCKING_BIG_ERROR' !== z &&
                        (c.texImage2D(c.TEXTURE_2D, 0, fa, P, Q, 0, da, ha, null),
                        (z = c.getError()),
                        z !== c.NO_ERROR &&
                          ((da = c.RGBA), r.M && ha !== c.FLOAT && ((ha = c.FLOAT), c.texImage2D(c.TEXTURE_2D, 0, fa, P, Q, 0, da, ha, null))));
                  if (r.isMipmap)
                    if (!Ja && aa) aa.rb(), (Za = !0);
                    else if (Ja) {
                      z = Math.log2(Math.min(P, Q));
                      Ra = Array(1 + z);
                      Ra[0] = ra;
                      for (var M = 1; M <= z; ++M) {
                        var ja = Math.pow(2, M),
                          R = P / ja;
                        ja = Q / ja;
                        var Ka = c.createTexture();
                        a(Ka);
                        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MIN_FILTER, c.NEAREST);
                        c.texParameteri(c.TEXTURE_2D, c.TEXTURE_MAG_FILTER, c.NEAREST);
                        c.texImage2D(c.TEXTURE_2D, 0, fa, R, ja, 0, da, ha, null);
                        a(null);
                        Ra[M] = Ka;
                      }
                      Za = !0;
                    }
                  a(null);
                  v[t] = -1;
                  wa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                  $a = !0;
                  r.ea && aa && (r.ea(aa), (r.ea = null));
                }
              }
              var r = Object.assign({}, O, p),
                ea = h++;
              null === r.isFlipY && (r.isFlipY = r.url || r.array ? !0 : !1);
              r.data &&
                ((r.array = 'string' === typeof r.data ? Fb(r.data) : r.isFloat ? new Float32Array(r.data) : new Uint8Array(r.data)),
                (r.isFlipY = !1));
              var va = 0,
                Ba = r.F ? !0 : !1,
                qa = null,
                lb = null,
                zb = !1,
                mb = null;
              r.M = r.M || r.isFloat;
              r.M && (va = 1);
              r.ae || ca.aa() || !r.isFloat || !w || ca.bc() || (r.isFloat = !1);
              r.isFloat && (va = 2);
              r.isAnisotropicFiltering && V && !JEContext.Rf() && (r.isAnisotropicFiltering = !1);
              var ra = r.ub || c.createTexture(),
                Fa = null,
                xa = !1,
                P = 0,
                Q = 0,
                $a = !1,
                yb = !1,
                ab = !1,
                ya = null,
                Ca = null,
                nb = null,
                Ta = null,
                fa = null,
                da = null,
                ha = null,
                wa = r.isFlipY,
                Ob = (p = r.M && r.isMipmap) && Aa.vd(),
                Ja = p && Ob ? !0 : !1,
                Ra = null,
                Ya = -1,
                Za = !1,
                La = { Ic: !1, $b: null, tc: null };
              r.width && ((P = r.width), (Q = r.height ? r.height : P));
              var aa = {
                get: function () {
                  return ra;
                },
                B: function () {
                  return P;
                },
                R: function () {
                  return Q;
                },
                Pf: function () {
                  return r.url;
                },
                Sf: function () {
                  return r.isFloat;
                },
                Uf: function () {
                  return r.M;
                },
                Vf: function () {
                  return r.isLinear;
                },
                rb: function () {
                  c.generateMipmap(c.TEXTURE_2D);
                },
                td: function (z, M) {
                  Ja ? (z || (z = aa.xc()), A.cb(M), a(Ra[z]), (v[M] = -1)) : aa.b(M);
                },
                xc: function () {
                  -1 === Ya && (Ya = Math.log(P) / Math.log(2));
                  return Ya;
                },
                Kd: function (z) {
                  if (Ja) {
                    z || (z = aa.xc());
                    y.set('s11');
                    A.cb(0);
                    for (var M = P, ja = Q, R = 1; R <= z; ++R)
                      (M /= 2),
                        (ja /= 2),
                        y.za('u7', 0.25 / M, 0.25 / ja),
                        c.viewport(0, 0, M, ja),
                        a(Ra[R - 1]),
                        c.framebufferTexture2D(ka.La(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, Ra[R], 0),
                        la.g(!1, 1 === R);
                    v[0] = -1;
                  } else aa.rb();
                },
                b: function (z) {
                  if (!$a) return !1;
                  A.cb(z);
                  if (v[z] === ea) return !1;
                  a(ra);
                  v[z] = ea;
                  return !0;
                },
                Zb: function (z) {
                  c.activeTexture(l[z]);
                  t = z;
                  a(ra);
                  v[z] = ea;
                },
                m: function () {
                  m = aa;
                  c.framebufferTexture2D(ka.La(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, ra, 0);
                },
                ba: function () {
                  m = aa;
                  c.viewport(0, 0, P, Q);
                  c.framebufferTexture2D(ka.La(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, ra, 0);
                },
                Tb: A.Tb,
                resize: function (z, M) {
                  P = z;
                  Q = M;
                  J();
                },
                clone: function (z) {
                  z = A.instance({
                    width: P,
                    height: Q,
                    M: r.M,
                    isFloat: r.isFloat,
                    isLinear: r.isLinear,
                    isMirrorY: r.isMirrorY,
                    isFlipY: z ? !wa : wa,
                    isPot: r.isPot,
                  });
                  ua.set('s0');
                  ka.X();
                  z.m();
                  c.viewport(0, 0, P, Q);
                  aa.b(0);
                  la.g(!0, !0);
                  return z;
                },
                Ae: function () {
                  c.viewport(0, 0, P, Q);
                },
                remove: function () {
                  c.deleteTexture(ra);
                  yb = !0;
                  I.splice(I.indexOf(aa), 1);
                  aa = null;
                },
                refresh: function () {
                  aa.Zb(0);
                  wa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                  Ba ? c.texImage2D(c.TEXTURE_2D, 0, fa, da, c.UNSIGNED_BYTE, r.F) : c.texImage2D(c.TEXTURE_2D, 0, fa, P, Q, 0, da, ha, xa);
                  wa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                },
                hc: function () {
                  var z = P * Q * 4;
                  Ca = [new Uint8Array(z), new Uint8Array(z), new Uint8Array(z), new Uint8Array(z)];
                  ya = [
                    new Float32Array(Ca[0].buffer),
                    new Float32Array(Ca[1].buffer),
                    new Float32Array(Ca[2].buffer),
                    new Float32Array(Ca[3].buffer),
                  ];
                  nb = new Uint8Array(4 * z);
                  Ta = new Float32Array(nb.buffer);
                  ab = !0;
                },
                Xc: function () {
                  ab || aa.hc();
                  c.readPixels(0, 0, P, 4 * Q, c.RGBA, c.UNSIGNED_BYTE, nb);
                  for (var z = P * Q, M = 2 * z, ja = 3 * z, R = 0; R < z; ++R)
                    (ya[0][R] = Ta[R]), (ya[1][R] = Ta[R + z]), (ya[2][R] = Ta[R + M]), (ya[3][R] = Ta[R + ja]);
                  return ya;
                },
                se: function () {
                  La.Ic || ((La.$b = new Uint8Array(P * Q * 4)), (La.tc = new Float32Array(La.buffer)), (La.Ic = !0));
                  c.readPixels(0, 0, P, Q, c.RGBA, c.UNSIGNED_BYTE, La.$b);
                  return La.tc;
                },
                ic: function (z) {
                  ka.J();
                  y.set('s12');
                  aa.b(0);
                  if (z) c.viewport(0, 0, P, Q), y.Mb('u8', 0.25, 0.25, 0.25, 0.25), la.g(!1, !0);
                  else for (z = 0; 4 > z; ++z) c.viewport(0, Q * z, P, Q), y.Mb('u8', Z[z]), la.g(!1, 0 === z);
                },
                Ke: function (z) {
                  var M = ha === q[0] && !n();
                  a(ra);
                  wa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                  M
                    ? (zb ||
                        ((qa = document.createElement('canvas')),
                        (qa.width = P),
                        (qa.height = Q),
                        (lb = qa.getContext('2d')),
                        (mb = lb.createImageData(P, Q)),
                        (zb = !0)),
                      mb.data.set(z),
                      lb.putImageData(mb, 0, 0),
                      c.texImage2D(c.TEXTURE_2D, 0, fa, da, ha, qa))
                    : c.texImage2D(c.TEXTURE_2D, 0, fa, P, Q, 0, da, ha, z);
                  v[t] = ea;
                  wa && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                },
                qg: function (z, M) {
                  a(ra);
                  M && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !0);
                  c.texImage2D(c.TEXTURE_2D, 0, fa, da, ha, z);
                  v[t] = ea;
                  M && c.pixelStorei(c.UNPACK_FLIP_Y_WEBGL, !1);
                },
                fg: function (z, M) {
                  var ja = P * Q,
                    R = 4 * ja;
                  z = r.M ? (z ? 'RGBE' : 'JSON') : 'RGBA';
                  M && (z = M);
                  M = ca.aa() && !1;
                  var Ka = null;
                  switch (z) {
                    case 'RGBE':
                      Ka = 's42';
                      break;
                    case 'JSON':
                      Ka = M ? 's0' : 's12';
                      break;
                    case 'RGBA':
                    case 'RGBAARRAY':
                      Ka = 's6';
                  }
                  ab || ('RGBA' === z || 'RGBE' === z || 'RGBAARRAY' === z ? ((Ca = new Uint8Array(R)), (ab = !0)) : 'JSON' !== z || M || aa.hc());
                  ka.J();
                  y.set(Ka);
                  aa.b(0);
                  R = null;
                  if ('RGBA' === z || 'RGBE' === z || 'RGBAARRAY' === z) {
                    c.viewport(0, 0, P, Q);
                    la.g(!0, !0);
                    c.readPixels(0, 0, P, Q, c.RGBA, c.UNSIGNED_BYTE, Ca);
                    if ('RGBAARRAY' === z) return { data: Ca };
                    D || ((G = document.createElement('canvas')), (E = G.getContext('2d')), (D = !0));
                    G.width = P;
                    G.height = Q;
                    ja = E.createImageData(P, Q);
                    ja.data.set(Ca);
                    E.putImageData(ja, 0, 0);
                    R = G.toDataURL('image/png');
                  } else if ('JSON' === z)
                    if (M) (R = new Float32Array(ja)), c.viewport(0, 0, P, Q), la.g(!0, !0), c.readPixels(0, 0, P, Q, c.RGBA, c.FLOAT, R);
                    else {
                      for (R = 0; 4 > R; ++R) c.viewport(0, Q * R, P, Q), y.Mb('u8', Z[R]), la.g(!R, !R);
                      aa.Xc();
                      R = Array(ja);
                      for (M = 0; M < ja; ++M) (R[4 * M] = ya[0][M]), (R[4 * M + 1] = ya[1][M]), (R[4 * M + 2] = ya[2][M]), (R[4 * M + 3] = ya[3][M]);
                    }
                  return { format: z, data: R, width: P, height: Q, isMirrorY: r.isMirrorY, isFlipY: 'RGBA' === z ? r.isFlipY : !r.isFlipY };
                },
              };
              r.isMipmap && !Ja && $a && !Za && (aa.rb(), (Za = !0));
              if (r.url)
                a(ra),
                  c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, 1, 1, 0, c.RGBA, c.UNSIGNED_BYTE, null),
                  (Fa = new Image()),
                  (Fa.$e = 'Anonymous'),
                  (Fa.crossOrigin = 'Anonymous'),
                  (Fa.src = r.url),
                  (Fa.onload = function () {
                    P = Fa.width;
                    Q = Fa.height;
                    J();
                  });
              else if (r.F) {
                var Ab = function () {
                  P = void 0 !== r.F.videoWidth ? r.F.videoWidth : r.F.width;
                  Q = void 0 !== r.F.videoHeight ? r.F.videoHeight : r.F.height;
                  P ? J() : setTimeout(Ab, 1);
                };
                Ab();
              } else
                r.array
                  ? (r.M && !r.isFloat
                      ? r.array instanceof Uint16Array
                        ? ((xa = r.array), J())
                        : e()
                        ? ((xa = d(r.array)), J())
                        : (J(), A.sc(c, ra, aa.B(), aa.R(), r.array, wa, !0))
                      : ((xa = r.isFloat
                          ? r.array instanceof Float32Array
                            ? r.array
                            : new Float32Array(r.array)
                          : r.array instanceof Uint8Array
                          ? r.array
                          : new Uint8Array(r.array)),
                        J()),
                    r.isKeepArray || (xa && xa !== r.array && (xa = null), delete r.array))
                  : r.ub || J();
              aa.Lf = aa.B;
              r.ea && $a && (r.ea(aa), (r.ea = null));
              I.push(aa);
              return aa;
            },
            J: function (p) {
              p !== t && (c.activeTexture(l[p]), (t = p));
              v[p] = -1;
              a(null);
            },
            Re: function (p) {
              g.random.b(p);
            },
            Tb: function () {
              m = null;
              c.framebufferTexture2D(ka.La(), c.COLOR_ATTACHMENT0, c.TEXTURE_2D, null, 0);
            },
            reset: function () {
              for (var p = 0; p < l.length; ++p) v[p] = -1;
              t = -1;
            },
            dg: function () {
              t = -1;
            },
            He: function () {
              for (var p = 0; p < l.length; ++p) A.J(p);
            },
            uc: function () {
              g && (g.random.remove(), g.hd.remove());
            },
            pg: function (p, L) {
              if ('RGBA' === p.format || 'RGBE' === p.format) {
                var J = new Image();
                J.src = p.data;
                J.onload = function () {
                  A.instance({
                    isMirrorY: p.isMirrorY,
                    isFlipY: p.isFlipY,
                    isFloat: !1,
                    F: J,
                    ea: function (r) {
                      if ('RGBA' === p.format) L(r);
                      else {
                        var ea = p.width,
                          va = p.height,
                          Ba = A.instance({ isMirrorY: p.isMirrorY, isFloat: !0, width: ea, height: va, isFlipY: p.isFlipY });
                        ka.X();
                        c.viewport(0, 0, ea, va);
                        y.set('s43');
                        Ba.m();
                        r.b(0);
                        la.g(!0, !0);
                        A.J(0);
                        L(Ba);
                        c.flush();
                        setTimeout(r.remove, 50);
                      }
                    },
                  });
                };
              } else
                'JSON' === p.format
                  ? L(A.instance({ isFloat: !0, isFlipY: p.isFlipY, width: p.width, height: p.height, array: new Float32Array(p.data) }))
                  : L(!1);
            },
            h: function () {
              m && (sa.X(), A.Tb(), sa.J());
              A.He();
              I.slice(0).forEach(function (p) {
                p.remove();
              });
              I.splice(0);
              F = !1;
              h = 0;
              'undefined' !== typeof Aa && Aa.h();
              g = null;
            },
          };
        return A;
      })(),
      Hb = (function () {
        return {
          instance: function (a) {
            var b = [Da.instance(a), Da.instance(a)],
              d = [b[1], b[0]],
              e = d,
              n = {
                xe: function (f) {
                  e[1].m();
                  e[0].b(f);
                  n.ed();
                },
                gg: function (f) {
                  e[1].ba();
                  e[0].b(f);
                  n.ed();
                },
                ed: function () {
                  e = e === b ? d : b;
                },
                refresh: function () {
                  e[0].refresh();
                  e[1].refresh();
                },
                b: function (f) {
                  e[0].b(f);
                },
                Qe: function (f) {
                  e[1].b(f);
                },
                Gf: function () {
                  return e[0];
                },
                remove: function () {
                  e[0].remove();
                  e[1].remove();
                  e = null;
                },
              };
            return n;
          },
        };
      })(),
      la = (function () {
        function a(h) {
          var v = { W: null, C: null };
          v.W = h.createBuffer();
          h.bindBuffer(h.ARRAY_BUFFER, v.W);
          h.bufferData(h.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), h.STATIC_DRAW);
          v.C = h.createBuffer();
          h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, v.C);
          h.bufferData(h.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), h.STATIC_DRAW);
          return v;
        }
        var b = null,
          d = 0,
          e = !1,
          n = [],
          f = -2,
          t = -2,
          l = {
            reset: function () {
              t = f = -2;
            },
            o: function () {
              e || ((b = a(c)), l.sa(), (e = !0));
            },
            instance: function (h) {
              var v = d++,
                g = h.C ? h.C.length : 0,
                m = 'undefined' === typeof h.mode ? c.STATIC_DRAW : h.mode,
                q = c.createBuffer();
              c.bindBuffer(c.ARRAY_BUFFER, q);
              c.bufferData(c.ARRAY_BUFFER, h.W instanceof Float32Array ? h.W : new Float32Array(h.W), m);
              f = v;
              var k = null,
                C = null,
                F = null;
              if (h.C) {
                k = c.createBuffer();
                c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, k);
                var I = null;
                65536 > h.C.length ? ((I = Uint16Array), (C = c.UNSIGNED_SHORT), (F = 2)) : ((I = Uint32Array), (C = c.UNSIGNED_INT), (F = 4));
                I = h.C instanceof I ? h.C : new I(h.C);
                c.bufferData(c.ELEMENT_ARRAY_BUFFER, I, m);
                t = v;
              }
              var O = {
                ud: function (D) {
                  f !== v && (c.bindBuffer(c.ARRAY_BUFFER, q), (f = v));
                  D && ua.Nb();
                },
                rd: function () {
                  t !== v && (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, k), (t = v));
                },
                bind: function (D) {
                  O.ud(D);
                  O.rd();
                },
                bf: function () {
                  c.drawElements(c.TRIANGLES, g, C, 0);
                },
                cf: function (D, G) {
                  c.drawElements(c.TRIANGLES, D, C, G * F);
                },
                remove: function () {
                  c.deleteBuffer(q);
                  h.C && c.deleteBuffer(k);
                  O = null;
                },
              };
              n.push(O);
              return O;
            },
            sa: function () {
              -1 !== f && (c.bindBuffer(c.ARRAY_BUFFER, b.W), (f = -1));
              -1 !== t && (c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, b.C), (t = -1));
            },
            g: function (h, v) {
              h && la.sa();
              v && ua.la();
              c.drawElements(c.TRIANGLES, 3, c.UNSIGNED_SHORT, 0);
            },
            Ia: function (h) {
              h = h || c;
              var v = a(h);
              h.bindBuffer(h.ARRAY_BUFFER, v.W);
              h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, v.C);
              ua.$a(h);
              h.drawElements(h.TRIANGLES, 3, h.UNSIGNED_SHORT, 0);
              h.deleteBuffer(v.W);
              h.deleteBuffer(v.C);
              l.reset();
              e && (l.sa(), ua.la());
            },
            uc: function () {
              var h = c,
                v = b;
              h.deleteBuffer(v.W);
              h.deleteBuffer(v.C);
            },
            h: function () {
              l.uc();
              n.forEach(function (h) {
                h.remove();
              });
              c.bindBuffer(c.ARRAY_BUFFER, null);
              c.bindBuffer(c.ELEMENT_ARRAY_BUFFER, null);
              l.reset();
              e = !1;
              n.splice(0);
              d = 0;
            },
          };
        return l;
      })(),
      ka = (function () {
        var a = null,
          b = null,
          d = null,
          e = !1,
          n = [],
          f = { v: -2, rc: 1 },
          t = {
            Oa: function () {
              return e;
            },
            o: function () {
              if (!e) {
                a = c.createFramebuffer();
                var l = ca.aa();
                b = l && c.DRAW_FRAMEBUFFER ? c.DRAW_FRAMEBUFFER : c.FRAMEBUFFER;
                d = l && c.READ_FRAMEBUFFER ? c.READ_FRAMEBUFFER : c.FRAMEBUFFER;
                e = !0;
              }
            },
            Df: function () {
              return b;
            },
            Rd: function () {
              return d;
            },
            La: function () {
              return c.FRAMEBUFFER;
            },
            Kf: function () {
              return f;
            },
            vf: function () {
              return a;
            },
            instance: function (l) {
              void 0 === l.Dc && (l.Dc = !1);
              var h = l.H ? l.H : null,
                v = l.width,
                g = void 0 !== l.height ? l.height : l.width,
                m = a,
                q = null,
                k = !1,
                C = !1,
                F = 0;
              h && ((v = v ? v : h.B()), (g = g ? g : h.R()));
              var I = {
                ad: function () {
                  k || ((m = c.createFramebuffer()), (k = !0), (F = f.rc++));
                },
                kd: function () {
                  I.ad();
                  I.m();
                  q = c.createRenderbuffer();
                  c.bindRenderbuffer(c.RENDERBUFFER, q);
                  c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, v, g);
                  c.framebufferRenderbuffer(b, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, q);
                  c.clearDepth(1);
                },
                bind: function (O, D) {
                  F !== f.v && (c.bindFramebuffer(b, m), (f.v = F));
                  h && h.m();
                  D && c.viewport(0, 0, v, g);
                  O && c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                },
                Pe: function () {
                  F !== f.v && (c.bindFramebuffer(b, m), (f.v = F));
                },
                clear: function () {
                  c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                },
                Xe: function () {
                  c.clear(c.COLOR_BUFFER_BIT);
                },
                Ye: function () {
                  c.clear(c.DEPTH_BUFFER_BIT);
                },
                Ae: function () {
                  c.viewport(0, 0, v, g);
                },
                m: function () {
                  F !== f.v && (c.bindFramebuffer(b, m), (f.v = F));
                },
                rtt: function (O) {
                  h = O;
                  f.v !== F && (c.bindFramebuffer(c.FRAMEBUFFER, m), (f.v = F));
                  O.m();
                },
                J: function () {
                  c.bindFramebuffer(b, null);
                  f.v = -1;
                },
                resize: function (O, D) {
                  v = O;
                  g = D;
                  q && (c.bindRenderbuffer(c.RENDERBUFFER, q), c.renderbufferStorage(c.RENDERBUFFER, c.DEPTH_COMPONENT16, v, g));
                },
                remove: function () {
                  m === a ||
                    C ||
                    (c.bindFramebuffer(b, m),
                    c.framebufferTexture2D(b, c.COLOR_ATTACHMENT0, c.TEXTURE_2D, null, 0),
                    q && c.framebufferRenderbuffer(b, c.DEPTH_ATTACHMENT, c.RENDERBUFFER, null),
                    c.bindFramebuffer(b, null),
                    c.deleteFramebuffer(m),
                    q && c.deleteRenderbuffer(q));
                  C = !0;
                },
              };
              l.Dc && I.kd();
              n.push(I);
              return I;
            },
            J: function () {
              c.bindFramebuffer(b, null);
              f.v = -1;
            },
            Ie: function () {
              c.bindFramebuffer(b, null);
              c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
              c.viewport(0, 0, ca.B(), ca.R());
              f.v = -1;
            },
            reset: function () {
              f.v = -2;
            },
            X: function () {
              0 !== f.v && (c.bindFramebuffer(b, a), (f.v = 0));
            },
            clear: function () {
              c.viewport(0, 0, ca.B(), ca.R());
              c.clear(c.COLOR_BUFFER_BIT);
            },
            h: function () {
              t.J();
              n.forEach(function (l) {
                l.remove();
              });
              c.deleteFramebuffer(a);
              t.reset();
              e = !1;
              n.splice(0);
              f.v = -2;
              f.rc = 1;
            },
          };
        return t;
      })(),
      ca = (function () {
        function a() {
          d = 'undefined' === typeof Qa ? JEContext : Qa;
          e = !0;
        }
        function b(g, m) {
          for (var q = 0; q < g.length; ++q) {
            var k = m.getExtension(g[q]);
            if (k) return k;
          }
          return null;
        }
        var d = null,
          e = !1,
          n = { Fc: !1, Pb: null, Qb: null, Jc: !1, de: !1, Rb: null, Kc: !1, Sb: null, Gc: !1, eb: null, Zd: !1, fb: null, $d: !1 },
          f = null,
          t = { Z: !0, $: !0, qb: !0 },
          l = null,
          h = 'undefined' === typeof window ? {} : window,
          v = {
            o: function () {
              if (e) return !0;
              f = Object.assign({}, n);
              l = Object.assign({}, t);
              e || a();
              var g = c;
              if (!f.Fc) {
                f.Pb = v.nc(g);
                h.GL_EXT_FLOAT = f.Pb;
                f.Jc = f.Pb ? !0 : !1;
                if (f.Jc || v.aa()) (f.Qb = v.oc(g)), (f.de = f.Qb ? !0 : !1), (h.GL_EXT_FLOATLINEAR = f.Qb);
                f.Fc = !0;
              }
              if (!f.Gc) {
                f.Rb = v.Ha(g);
                f.Rb && ((f.Kc = !0), (h.GL_EXT_HALFFLOAT = f.Rb));
                if (f.Kc || v.aa()) (f.Sb = v.pc(g)), (h.GL_EXT_HALFFLOATLINEAR = f.Sb);
                f.Qf = f.Sb ? !0 : !1;
                f.Gc = !0;
              }
              f.eb = v.lc(g);
              f.Zd = f.eb ? !0 : !1;
              h.GL_EXT_COLORBUFFERFLOAT = f.eb;
              f.fb = v.mc(g);
              f.$d = f.fb ? !0 : !1;
              h.GL_EXT_COLORBUFFERHALFFLOAT = f.fb;
              ka.o();
              Da.o();
              if (!v.Dd()) return !1;
              la.o();
              Da.Yd();
              return !0;
            },
            B: function () {
              e || a();
              return d.B();
            },
            R: function () {
              e || a();
              return d.R();
            },
            aa: function () {
              e || a();
              return d.aa();
            },
            kc: function (g) {
              v.lc(g);
              v.mc(g);
              v.nc(g);
              v.oc(g);
              v.Ha(g);
              v.pc(g);
            },
            lc: b.bind(null, ['EXT_color_buffer_float', 'WEBGL_color_buffer_float', 'OES_color_buffer_float']),
            mc: b.bind(null, ['EXT_color_buffer_half_float', 'WEBGL_color_buffer_half_float', 'OES_color_buffer_half_float']),
            nc: b.bind(null, ['OES_texture_float', 'MOZ_OES_texture_float', 'WEBKIT_OES_texture_float']),
            oc: b.bind(null, ['OES_texture_float_linear', 'MOZ_OES_texture_float_linear', 'WEBKIT_OES_texture_float_linear']),
            Ha: b.bind(null, ['OES_texture_half_float', 'MOZ_OES_texture_half_float', 'WEBKIT_OES_texture_half_float']),
            pc: b.bind(null, ['OES_texture_half_float_linear', 'MOZ_OES_texture_half_float_linear', 'WEBKIT_OES_texture_half_float_linear']),
            sb: function (g) {
              var m = v.Ha(g);
              return m && m.HALF_FLOAT_OES ? m.HALF_FLOAT_OES : g.HALF_FLOAT || g.FLOAT;
            },
            Nd: function () {
              return l;
            },
            bc: function () {
              return l.Z;
            },
            Te: function () {
              return l.$;
            },
            Se: function () {
              return l.qb;
            },
            ab: function (g, m, q) {
              function k() {
                g.bindTexture(g.TEXTURE_2D, null);
                g.bindFramebuffer(C, null);
                g.deleteTexture(O);
                g.deleteFramebuffer(I);
              }
              var C = g.FRAMEBUFFER,
                F = g.NEAREST,
                I = g.createFramebuffer();
              g.bindFramebuffer(C, I);
              var O = g.createTexture();
              g.bindTexture(g.TEXTURE_2D, O);
              g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1);
              g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, F);
              g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, F);
              g.texImage2D(g.TEXTURE_2D, 0, m, 1, 1, 0, g.RGBA, q, null);
              g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, O, 0);
              if (g.checkFramebufferStatus(g.READ_FRAMEBUFFER || g.FRAMEBUFFER) !== g.FRAMEBUFFER_COMPLETE) return k(), !1;
              ua.Lb(g);
              g.clearColor(0, 0, 0, 0);
              g.viewport(0, 0, 1, 1);
              g.disable(g.DEPTH_TEST);
              g.clear(g.COLOR_BUFFER_BIT);
              la.Ia(g);
              g.bindFramebuffer(C, null);
              ua.Za(g);
              g.activeTexture(g.TEXTURE0);
              g.bindTexture(g.TEXTURE_2D, O);
              la.Ia(g);
              m = new Uint8Array(4);
              g.readPixels(0, 0, 1, 1, g.RGBA, g.UNSIGNED_BYTE, m);
              k();
              return 3 < Math.abs(m[0] - 127) ? !1 : !0;
            },
            ib: function (g) {
              var m = { Z: !1, $: !1 };
              g.disable(g.BLEND);
              g.clearColor(0, 0, 0, 0);
              g.clear(g.COLOR_BUFFER_BIT);
              g.RGBA32F && v.ab(g, g.RGBA32F, g.FLOAT) && (m.Z = !0);
              !m.Z && v.ab(g, g.RGBA, g.FLOAT) && (m.Z = !0);
              var q = v.sb(g);
              g.RGBA16F && v.ab(g, g.RGBA16F, q) && (m.$ = !0);
              !m.$ && v.ab(g, g.RGBA, q) && (m.$ = !0);
              return m;
            },
            Ed: function () {
              var g = ka.instance({ width: 1 });
              g.ad();
              var m = Da.instance({ width: 1, isFloat: !0, Sa: 3 });
              g.m();
              m.m();
              c.flush();
              c.checkFramebufferStatus(ka.Rd()) !== c.FRAMEBUFFER_COMPLETE ? (Da.ve(), (l.qb = !1)) : (l.qb = !0);
              g.remove();
              m.remove();
            },
            Dd: function () {
              var g = v.ib(c);
              Object.assign(l, g);
              if (!l.Z && !l.$) return !1;
              v.Ed();
              return !0;
            },
            h: function () {
              Da.h();
              ua.h();
              ka.h();
              la.h();
              e = !1;
            },
          };
        return v;
      })(),
      U = la,
      sa = ka,
      W = Da,
      Aa = (function () {
        function a(D, G, E, Z) {
          k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MIN_FILTER, Z ? k.NEAREST_MIPMAP_NEAREST : k.LINEAR);
          var V = null;
          if (null !== E)
            try {
              V = k.getError();
              if ('FUCKING_BIG_ERROR' === V) return !1;
              k.texImage2D(k.TEXTURE_2D, 0, D, 2, 2, 0, k.RGBA, G, E);
              V = k.getError();
              if (V !== k.NO_ERROR) return !1;
            } catch (w) {
              return !1;
            }
          Z && k.generateMipmap(k.TEXTURE_2D);
          k.clear(k.COLOR_BUFFER_BIT);
          U.Ia(k);
          V = k.getError();
          if ('FUCKING_BIG_ERROR' === V) return !1;
          k.readPixels(0, 0, 1, 1, k.RGBA, k.UNSIGNED_BYTE, g);
          V = k.getError();
          V === k.INVALID_OPERATION &&
            'undefined' !== typeof k.PIXEL_PACK_BUFFER &&
            (k.bindBuffer(k.PIXEL_PACK_BUFFER, null), k.readPixels(0, 0, 1, 1, k.RGBA, k.UNSIGNED_BYTE, g), (V = k.getError()));
          if (V !== k.NO_ERROR) return !1;
          if ((E = 0 !== g[0])) (h.Vc = G), (h.Cc = D);
          return E;
        }
        function b(D, G) {
          return C.Z && a(D, k.FLOAT, new Float32Array(q), G) ? ((l = t.Wb), !0) : !1;
        }
        function d(D, G, E) {
          if (!C.$) return !1;
          var Z = ca.Ha(k);
          if (
            (Z && Z.HALF_FLOAT_OES && a(D, Z.HALF_FLOAT_OES, new Uint16Array(q), G)) ||
            (k.HALF_FLOAT && a(D, k.HALF_FLOAT, new Uint16Array(q), G)) ||
            a(D, k.FLOAT, new Float32Array(q), G)
          )
            return (l = t.pa), !0;
          k.bindTexture(k.TEXTURE_2D, E);
          k.texImage2D(k.TEXTURE_2D, 0, k.RGBA, 1, 1, 0, k.RGBA, k.UNSIGNED_BYTE, null);
          k.bindFramebuffer(h.Fa, O);
          Da.sc(k, E, 1, 1, new Float32Array(q), !1, !1);
          k.bindFramebuffer(h.Fa, null);
          k.bindTexture(k.TEXTURE_2D, E);
          return a(D, null, null, G) ? ((l = t.pa), !0) : !1;
        }
        function e(D, G, E) {
          v = !0;
          if (d(D, !0, E) || b(G, !0)) return !0;
          v = !1;
          return d(D, !1, E) || b(G, !1) ? !0 : !1;
        }
        function n(D) {
          if (l === t.K) {
            k = D || c;
            l = t.RGBA8;
            v = !0;
            ca.kc(k);
            C || (C = ca.ib(k));
            sa.reset();
            O = k.createFramebuffer();
            h.Fa = k.DRAW_FRAMEBUFFER || k.FRAMEBUFFER;
            k.bindFramebuffer(h.Fa, null);
            k.clearColor(0, 0, 0, 0);
            k.viewport(0, 0, 1, 1);
            y.K();
            F = y.Za(k);
            D = k.createTexture();
            k.activeTexture(k.TEXTURE0);
            k.bindTexture(k.TEXTURE_2D, D);
            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_S, k.REPEAT);
            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_WRAP_T, k.REPEAT);
            k.texParameteri(k.TEXTURE_2D, k.TEXTURE_MAG_FILTER, k.NEAREST);
            I = D;
            var G = (D = k.RGBA),
              E = k.RGBA16F,
              Z = k.RGBA32F;
            Z && (D = Z);
            E && (G = E);
            if ((E || Z) && e(G, D, I)) return f(), !0;
            D = G = k.RGBA;
            if (e(G, D, I)) return f(), !0;
            l = t.RGBA8;
            f();
            return !1;
          }
        }
        function f() {
          k.deleteProgram(F.ga);
          k.deleteTexture(I);
          I = F = null;
        }
        var t = { K: -1, Wb: 3, pa: 2, RGBA8: 0 },
          l = t.K,
          h = { Vc: null, Cc: null, Fa: null },
          v = !0,
          g = new Uint8Array(4),
          m = [0.8, 1, 0.8, 1],
          q = [].concat(m, m, m, m),
          k = null,
          C = null,
          F = null,
          I = null,
          O = null;
        return {
          vd: function (D) {
            n(D);
            return v;
          },
          ac: function (D, G) {
            l === t.K && (typeof ('undefined' !== G) && (C = G), n(D));
            return l !== t.RGBA8;
          },
          Tf: function (D) {
            n(D);
            return l === t.Wb;
          },
          fe: function (D) {
            n(D);
            return l === t.pa;
          },
          Ef: function (D) {
            n(D);
            return h.Vc;
          },
          Qd: function (D) {
            n(D);
            return h.Cc;
          },
          h: function () {
            k = null;
            v = !0;
            l = t.K;
            C = null;
          },
        };
      })(),
      Pb = (function () {
        return {
          instance: function (a) {
            var b = W.instance(a.alpha),
              d = W.instance(a.beta);
            return {
              Gd: function () {
                b.b(1);
                d.b(2);
              },
            };
          },
        };
      })(),
      Db = (function () {
        return {
          instance: function (a) {
            var b = null,
              d = !1,
              e = !1,
              n = null,
              f = !1,
              t = !1,
              l = null,
              h = 'undefined' === typeof a.preprocessing ? !1 : a.preprocessing,
              v = 'undefined' === typeof a.preprocessingSize ? a.size : a.preprocessingSize;
            a.mask && ((d = !0), Y && void 0 !== Y.qd && (a.mask = Y.qd + a.mask), (b = W.instance({ isFloat: !1, url: a.mask })));
            var g = !1;
            a.customInputShader &&
              ((g = 's44'),
              y.Xb({ name: '_', id: g, a: a.customInputShader, og: ['uSource'], precision: 'lowp' }),
              y.N(g, [{ type: '1i', name: '_', value: 0 }]));
            switch (h) {
              case 'sobel':
                l = 's31';
                f = !0;
                break;
              case 'meanNormalization':
                l = 's32';
                f = !0;
                break;
              case 'grayScale':
                l = 's28';
                f = !1;
                break;
              case 'grayScaleTilt':
                l = 's29';
                t = !0;
                f = !1;
                break;
              case 'rgbGrayTilt':
                l = 's30';
                t = !0;
                f = !1;
                break;
              case 'copy':
                l = g ? g : 's0';
                break;
              case 'inputLightRegulation':
                l = g ? g : 's28';
                n = Qb.instance({ Bc: v, Uc: a.size, Qc: a.nBlurPass, ee: !1 });
                e = !0;
                break;
              case 'direct':
              case 'none':
                l = !1;
                break;
              default:
                l = 's3';
            }
            t && y.N(l, [{ name: 'u26', type: '1f', value: a.tilt }]);
            d && (l += 'Mask');
            var m = W.instance({ isFloat: !1, isPot: !1, width: a.size }),
              q = {
                B: function () {
                  return v;
                },
                tb: function () {
                  return q.B();
                },
                Ud: function () {
                  return e ? n.yc() : m;
                },
                O: function () {
                  sa.X();
                  l && (y.set(l), f && y.A('u27', 1 / a.size), m.ba(), d && b.b(1), U.g(!1, !1), m.b(0), e && n.process(m));
                },
                h: function () {
                  m.remove();
                  d && b.remove();
                },
              };
            return q;
          },
        };
      })(),
      Eb = (function () {
        return {
          instance: function (a) {
            'undefined' === typeof a.normalize && (a.normalize = !1);
            var b = { input: null, Ca: null, xb: null, U: null, Ua: null, Fb: null, Gb: null },
              d = null,
              e = [],
              n = [],
              f = !1,
              t = null,
              l = !0,
              h = -1,
              v = a.isReorganize ? a.isReorganize : !1,
              g = a.kernelsCount ? !0 : !1,
              m = a.dynPelu ? Pb.instance(a.dynPelu) : !1,
              q = m ? !0 : !1,
              k = { isEnabled: !1 };
            a.ce
              ? ((a.sparsity = 'undefined' !== typeof a.sparsity ? a.sparsity : a.Wa.tb()), (l = !1))
              : 'full' === a.connectivityUp && (a.sparsity = a.Wa.tb());
            var C = { elu: 's15', elu01: 's16', relu: 's14', arctan: 's18', sigmoid: 's13', copy: 's0', softplus: 's19', dynPelu: 's17' }[
                a.activation
              ],
              F = a.sparsity * a.sparsity,
              I = !1,
              O = a.size,
              D = '';
            if (a.maxPooling) {
              switch (a.maxPooling.size) {
                case 2:
                  D = 's33';
                  break;
                case 4:
                  D = 's34';
              }
              I = !0;
              O /= a.maxPooling.size;
              b.Fb = W.instance({ isFloat: !0, isPot: !1, width: O });
            }
            var G = void 0 !== a.me && a.me ? !0 : !1,
              E = null,
              Z = null,
              V = null;
            if (G) {
              E = 's45' + a.index.toString();
              y.Ac('s45', E, [((a.normalization.n - 1) / 2).toFixed(1)]);
              y.N(E, [
                { type: '1i', name: 'u1', value: 0 },
                { type: '2f', name: 'u7', value: [1 / a.size, 1 / a.size] },
                { type: '1f', name: 'u6', value: a.normalization.alpha },
                { type: '1f', name: 'u9', value: a.normalization.beta },
                { type: '1f', name: 'u31', value: a.normalization.k },
              ]);
              var w = { isFloat: !0, isPot: !0, width: a.size };
              Z = W.instance(w);
              V = W.instance(w);
            }
            var u = -1,
              B = null;
            l && (b.U = W.instance({ isFloat: !0, isPot: !1, width: a.size }));
            b.Ca = W.instance(a.bias);
            var N = {
              B: function () {
                return a.size;
              },
              tb: function () {
                return O;
              },
              vc: function () {
                return a.classesCount;
              },
              sd: function (A) {
                d.b(A);
              },
              qe: function () {
                a.remap &&
                  a.remap.isEnabled &&
                  (k = {
                    isEnabled: !0,
                    ie: W.instance({
                      isFloat: !1,
                      isFlipY: !1,
                      array: new Uint8Array(a.remap.maskTexture.data),
                      width: a.remap.maskTexture.width,
                      isPot: !1,
                    }),
                    Pa: a.remap.layers.map(function (A) {
                      return a.parent.Td(A);
                    }),
                    depth: a.remap.depth,
                  });
              },
              we: function () {
                switch (a.connectivityUp) {
                  case 'direct':
                    B = Rb.instance(a.connectivity);
                    break;
                  case 'square':
                    B = Sb.instance(a.connectivity);
                    break;
                  case 'squareFast':
                    B = Tb.instance(a.connectivity, a.activation);
                    break;
                  case 'full':
                    B = Ub.instance(a.connectivity);
                    break;
                  case 'conv':
                    (h = a.kernelsCount),
                      (B = Vb.instance(a.connectivity)),
                      v && (b.Ua = W.instance({ width: O, isFloat: !0, isFlipY: !1, isPot: !1 }));
                }
                if (B.ma) {
                  var A = a.size * a.sparsity;
                  u = Math.log(A / a.size) / Math.log(2);
                  b.input = W.instance({ isMipmap: !0, isFloat: !0, isPot: !0, width: A, Ab: u });
                  b.xb = W.instance({ isFloat: !0, isPot: !0, width: a.size });
                }
              },
              O: function (A) {
                d = A;
                B.ma
                  ? (b.input.ba(),
                    g && b.Ca.b(2),
                    B.O(k),
                    b.input.b(0),
                    b.input.Kd(u),
                    b.xb.ba(),
                    g ? y.set('s0') : (y.set('s27'), y.A('u25', F), b.Ca.b(1)),
                    b.input.td(u, 0),
                    U.g(!1, !1),
                    y.set(C),
                    G ? Z.m() : b.U.m(),
                    b.xb.b(0),
                    q && m.Gd(),
                    U.g(!1, !1))
                  : (b.U.ba(), b.Ca.b(1), B.O());
                G && (y.set(E), V.m(), Z.b(0), U.g(!1, !1), y.set('s46'), y.A('u6', 1), b.U.m(), V.b(1), U.g(!1, !1));
                if (l)
                  return (
                    I ? (b.Fb.ba(), b.U.b(0), y.set(D), y.za('u7', 1 / a.size, 1 / a.size), U.g(!1, !1), (A = b.Fb)) : (A = b.U),
                    A.b(0),
                    v && (b.Ua.m(), y.set('s21'), y.za('u12', h, O / h), U.g(!1, !1), (A = b.Ua), b.Ua.b(0)),
                    A
                  );
                A = b.U;
                a.normalize && (y.set('gpuRawAvg' === f ? 's8' : 's7'), y.A('u4', 1 / a.size), b.Gb.ba(), b.U.b(0), U.g(!1, !1), (A = b.Gb));
                switch (f) {
                  case 'cpuRGBA2Float':
                    A.ic(!1);
                    A = N.re(A);
                    t(A);
                    break;
                  case 'cpuMeanFloat':
                    A.ic(!0);
                    A = A.se();
                    t(A);
                    break;
                  case 'gpuRawAvg':
                  case 'gpuRaw':
                    A.b(0);
                  case 'none':
                    null !== t && t(A);
                }
                return !1;
              },
              Bd: function (A) {
                A && ((f = A.Hb || 'none'), (t = A.Eb || null));
                b.U = W.instance({ isFloat: !0, isPot: !0, isMipmap: !1, width: a.size });
                A = 'undefined' !== typeof a.classesCount && a.classesCount ? a.classesCount : a.size * a.size;
                for (var p = 0, L = 0, J = 0; p < A; ++p)
                  e.push(L + (a.size - 1 - J) * a.size), n.push([-1, -1, -1, -1]), ++L, L === a.size && ((L = 0), ++J);
                a.normalize && (b.Gb = W.instance({ isFloat: !0, isPot: !0, width: a.size }));
              },
              re: function (A) {
                var p = A.Xc();
                e.forEach(function (L, J) {
                  n[J][0] = p[0][L];
                  n[J][1] = p[1][L];
                  n[J][2] = p[2][L];
                  n[J][3] = p[3][L];
                });
                return n;
              },
              h: function () {
                for (var A in b) {
                  var p = b[A];
                  p && p.remove();
                }
                B && (B.h(), (B = null));
              },
            };
            a.Wa && N.we(a.Wa);
            return N;
          },
        };
      })(),
      Rb = (function () {
        return {
          instance: function (a) {
            var b = W.instance(a.weights);
            return {
              ma: !0,
              Ka: function () {
                return 1;
              },
              h: function () {
                b.remove();
              },
              Xd: function () {
                return b;
              },
              O: function () {
                y.set('s26');
                b.b(1);
                U.g(!1, !1);
              },
            };
          },
        };
      })(),
      Ub = (function () {
        return {
          instance: function (a) {
            var b = a.fromLayerSize,
              d = W.instance(a.weights);
            return {
              ma: !0,
              Ka: function () {
                return b;
              },
              h: function () {
                d.remove();
              },
              O: function (e) {
                if (e.isEnabled) {
                  y.set('s24');
                  e.ie.b(3);
                  var n,
                    f = Math.min(e.Pa.length, e.depth);
                  for (n = 0; n < f; ++n) e.Pa[n].sd(4 + n);
                } else y.set('s23');
                y.A('u16', a.toLayerSize);
                d.b(1);
                U.g(!1, !1);
              },
            };
          },
        };
      })(),
      Sb = (function () {
        return {
          instance: function (a) {
            for (
              var b = a.fromLayerSize,
                d = a.toLayerSize,
                e = a.toSparsity,
                n = e * d,
                f = n / b,
                t = b / d,
                l = 0,
                h = 0,
                v = 0,
                g = Array(e * d * e * d * 4),
                m = Array(e * d * e * d * 4),
                q = Array(b * b),
                k = 0;
              k < q.length;
              ++k
            )
              q[k] = 0;
            k = Math.floor(e / 2);
            for (var C = 0.5 / d, F = 0.5 / b, I = 0.5 / n, O = 0; O < d; ++O)
              for (var D = Math.round(O * t), G = 0; G < d; ++G) {
                var E = Math.round(G * t),
                  Z = O / d,
                  V = G / d;
                Z += C;
                V += C;
                for (var w = 0; w < e; ++w) {
                  var u = D + w - k;
                  0 > u && (u += b);
                  u >= b && (u -= b);
                  for (var B = 0; B < e; ++B) {
                    var N = l / n,
                      A = h / n,
                      p = E + B - k;
                    0 > p && (p += b);
                    p >= b && (p -= b);
                    var L = u / b,
                      J = p / b;
                    A = 1 - A - 1 / n;
                    L += F;
                    J += F;
                    N += I;
                    A += I;
                    var r = O * e + w,
                      ea = G * e + B;
                    ea = d * e - ea - 1;
                    r = ea * d * e + r;
                    g[4 * r] = N;
                    g[4 * r + 1] = A;
                    g[4 * r + 2] = L;
                    g[4 * r + 3] = J;
                    J = q[p * b + u]++;
                    r = J % f;
                    L = u * f + r;
                    p = p * f + (J - r) / f;
                    p = b * f - 1 - p;
                    p = p * b * f + L;
                    m[4 * p] = N;
                    m[4 * p + 1] = A;
                    m[4 * p + 2] = Z;
                    m[4 * p + 3] = V;
                    ++l >= n && ((l = 0), ++h);
                    ++v;
                  }
                }
              }
            q = null;
            var va = W.instance(a.weights);
            delete a.weights.data;
            var Ba = W.instance({ width: n, isFloat: !0, array: new Float32Array(m), isPot: !0 });
            m = null;
            var qa = W.instance({ width: n, isFloat: !0, array: new Float32Array(g), isPot: !0 });
            g = null;
            return {
              ma: !0,
              Ka: function () {
                return f;
              },
              h: function () {
                Ba.remove();
                qa.remove();
                va.remove();
              },
              O: function () {
                y.set('s22');
                va.b(1);
                qa.b(2);
                U.g(!1, !1);
              },
            };
          },
        };
      })(),
      Vb = (function () {
        return {
          instance: function (a) {
            var b = a.kernelsCount,
              d = a.toSparsity,
              e = (d * a.toLayerSize) / a.fromLayerSize,
              n = W.instance(a.weights);
            return {
              ma: !0,
              Ka: function () {
                return e;
              },
              Nf: function () {
                return d;
              },
              Xd: function () {
                return n;
              },
              h: function () {
                n.remove();
              },
              O: function () {
                y.set('s25');
                y.A('u22', b);
                y.A('u23', d);
                y.A('u16', a.toLayerSize);
                y.A('u24', a.fromLayerSize);
                n.b(1);
                U.g(!1, !1);
              },
            };
          },
        };
      })(),
      Tb = (function () {
        return {
          instance: function (a, b) {
            var d = a.fromLayerSize,
              e = a.toLayerSize,
              n = a.toSparsity,
              f = a.stride ? a.stride : 1,
              t = (n * e) / d,
              l = e < d,
              h = d / e,
              v = W.instance(a.weights),
              g = 's47' + [d.toString(), e.toString(), n.toString(), f.toString(), b].join('_');
            y.Id(g) ||
              ((a = Nb.Ld(b, 'gl_FragColor', 'gl_FragColor')),
              (e = [
                { type: '1f', name: 'u16', value: e },
                { type: '1f', name: 'u30', value: f },
              ]),
              l && e.push({ type: '1f', name: 'u24', value: d }),
              (d = [(l ? t : n).toFixed(1), a]),
              l && d.push(h.toFixed(1)),
              y.Ac(l ? 's39' : 's38', g, d),
              y.N(
                g,
                e.concat([
                  { type: '1i', name: 'u14', value: 0 },
                  { type: '1i', name: 'u21', value: 1 },
                  { type: '1i', name: 'u13', value: 3 },
                ])
              ));
            return {
              ma: !1,
              Ka: function () {
                return t;
              },
              h: function () {
                v.remove();
              },
              O: function () {
                y.set(g);
                v.b(3);
                U.g(!1, !1);
              },
            };
          },
        };
      })(),
      Qb = (function () {
        return {
          instance: function (a) {
            var b = a.Qc ? a.Qc : 3,
              d = a.Bc ? a.Bc : 64,
              e = a.Uc ? a.Uc : 64,
              n = a.ee ? !0 : !1;
            a = { isFloat: !1, width: d, isPot: !1, isFlipY: !1 };
            var f = W.instance(a),
              t = W.instance(a),
              l = W.instance(a),
              h = W.instance(a),
              v = W.instance({ isFloat: !0, width: e, isPot: !1, isFlipY: !1 }),
              g = 1 / d;
            return {
              process: function (m) {
                y.set('s35');
                h.m();
                U.g(n, !1);
                y.set('s36');
                for (var q = 0; q < b; ++q)
                  f.m(),
                    y.za('u7', g, 0),
                    U.g(n, !1),
                    l.m(),
                    h.b(0),
                    U.g(n, !1),
                    t.m(),
                    f.b(0),
                    y.za('u7', 0, g),
                    U.g(n, !1),
                    h.m(),
                    l.b(0),
                    U.g(n, !1),
                    q !== b - 1 && t.b(0);
                y.set('s37');
                v.m();
                m.b(0);
                t.b(1);
                h.b(2);
                U.g(n, !1);
                v.b(0);
              },
              yc: function () {
                return v;
              },
            };
          },
        };
      })(),
      S = {
        Wd: function () {
          return S.fc() ? document.createElement('video') : !1;
        },
        va: function (a, b) {
          a[b] = !0;
          a.setAttribute(b, 'true');
        },
        yd: function () {
          var a = !1,
            b = navigator.userAgent || navigator.vendor || window.opera;
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              b
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              b.substr(0, 4)
            )
          )
            a = !0;
          return a;
        },
        cc: function () {
          return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        },
        Md: function () {
          var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          return 2 < a.length ? [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)] : [0, 0, 0];
        },
        Lc: function () {
          try {
            return window.matchMedia('(orientation: portrait)').matches ? !0 : !1;
          } catch (a) {
            return window.innerHeight > window.innerWidth;
          }
        },
        xd: function () {
          return S.dc() || S.cc();
        },
        dc: function () {
          var a = navigator.userAgent.toLowerCase();
          return -1 !== a.indexOf('safari') && -1 === a.indexOf('chrome') ? !0 : !1;
        },
        tf: function () {
          return S.yd() ? (S.Lc() ? (window.innerHeight / window.innerWidth) * 45 : 45) : 45;
        },
        fc: function () {
          return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1;
        },
        pause: function (a) {
          a.pause();
        },
        eg: function (a) {
          a.play();
        },
        release: function (a) {
          a.pause();
          a.videoStream && a.videoStream.stop();
          a.videoStream = null;
        },
        ec: function (a) {
          if (!a) return a;
          var b = null;
          if (a.video) {
            var d = function (e) {
              return e && 'object' === typeof e ? Object.assign({}, e) : e;
            };
            b = {};
            'undefined' !== typeof a.video.width && (b.width = d(a.video.width));
            'undefined' !== typeof a.video.height && (b.height = d(a.video.height));
            'undefined' !== typeof a.video.facingMode && (b.facingMode = d(a.video.facingMode));
          }
          b = { audio: a.audio, video: b };
          'undefined' !== typeof a.deviceId && (b.deviceId = a.deviceId);
          return b;
        },
        fd: function (a) {
          var b = a.video.width;
          a.video.width = a.video.height;
          a.video.height = b;
          return a;
        },
        Ad: function (a) {
          function b(q) {
            return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function (k, C) {
              return Math.abs(k - q) - Math.abs(C - q);
            });
          }
          function d(q) {
            var k = S.ec(a);
            q = q(k);
            n.push(q);
            e(q);
          }
          function e(q) {
            if (q.video && q.video.facingMode && q.video.facingMode.exact) {
              var k = q.video.facingMode.exact;
              q = S.ec(q);
              delete q.video.facingMode.exact;
              q.video.facingMode.ideal = k;
              n.push(q);
            }
          }
          var n = [];
          if (!a || !a.video) return n;
          e(a);
          if (a.video.width && a.video.height) {
            if (a.video.width.ideal && a.video.height.ideal) {
              var f = b(a.video.width.ideal).slice(0, 3),
                t = b(a.video.height.ideal).slice(0, 3),
                l = {},
                h = 0;
              for (l.da = void 0; h < f.length; l = { da: l.da }, ++h) {
                l.da = f[h];
                var v = {},
                  g = 0;
                for (v.ca = void 0; g < t.length; v = { ca: v.ca }, ++g)
                  if (((v.ca = t[g]), l.da !== a.video.width.ideal || v.ca !== a.video.height.ideal)) {
                    var m = Math.max(l.da, v.ca) / Math.min(l.da, v.ca);
                    m < 4 / 3 - 0.1 ||
                      m > 16 / 9 + 0.1 ||
                      d(
                        (function (q, k) {
                          return function (C) {
                            C.video.width.ideal = q.da;
                            C.video.height.ideal = k.ca;
                            return C;
                          };
                        })(l, v)
                      );
                  }
              }
            }
            d(function (q) {
              return S.fd(q);
            });
          }
          a.video.width &&
            a.video.height &&
            (a.video.width.ideal &&
              a.video.height.ideal &&
              d(function (q) {
                delete q.video.width.ideal;
                delete q.video.height.ideal;
                return q;
              }),
            d(function (q) {
              delete q.video.width;
              delete q.video.height;
              return q;
            }));
          a.video.facingMode &&
            (d(function (q) {
              delete q.video.facingMode;
              return q;
            }),
            a.video.width &&
              a.video.height &&
              d(function (q) {
                S.fd(q);
                delete q.video.facingMode;
                return q;
              }));
          n.push({ audio: a.audio, video: !0 });
          return n;
        },
        Ee: function (a) {
          if (S.Lc()) {
            if (!a || !a.video) return !1;
            var b = a.video.width,
              d = a.video.height;
            if (!b || !d) return !1;
            if (b.ideal && d.ideal && b.ideal > d.ideal) return (a.video.height = b), (a.video.width = d), !0;
          }
          return !1;
        },
        Ra: function (a) {
          a.volume = 0;
          S.va(a, 'muted');
          if (S.dc()) {
            if (1 === a.volume) {
              var b = function () {
                a.volume = 0;
                window.removeEventListener('mousemove', b, !1);
                window.removeEventListener('touchstart', b, !1);
              };
              window.addEventListener('mousemove', b, !1);
              window.addEventListener('touchstart', b, !1);
            }
            setTimeout(function () {
              a.volume = 0;
              S.va(a, 'muted');
            }, 5);
          }
        },
        gd: function (a, b, d) {
          return new Promise(function (e, n) {
            if (a.srcObject && a.srcObject.getVideoTracks) {
              var f = a.srcObject.getVideoTracks();
              1 !== f.length ? n('INVALID_TRACKNUMBER') : ((f = f[0]), b ? S.get(a, e, n, d) : (f.stop(), e()));
            } else n('BAD_IMPLEMENTATION');
          });
        },
        zc: function (a, b, d, e) {
          function n(t) {
            f || ((f = !0), d(t));
          }
          var f = !1;
          return navigator.mediaDevices
            .getUserMedia(e)
            .then(function (t) {
              function l() {
                setTimeout(function () {
                  if (a.currentTime) {
                    var h = a.videoWidth,
                      v = a.videoHeight;
                    if (0 === h || 0 === v) n('VIDEO_NULLSIZE');
                    else {
                      h && (a.style.width = h.toString() + 'px');
                      v && (a.style.height = v.toString() + 'px');
                      h = { wd: null, Be: null, je: null };
                      try {
                        var g = t.getVideoTracks()[0];
                        g && ((h.je = g), (h.wd = g.getCapabilities()), (h.Be = g.getSettings()));
                      } catch (m) {}
                      S.xd()
                        ? a.parentNode && null !== a.parentNode
                          ? (f || b(a, t, h),
                            setTimeout(function () {
                              a.play();
                            }, 100))
                          : (document.body.appendChild(a),
                            S.Ra(a),
                            f || b(a, t, h),
                            setTimeout(function () {
                              a.style.transform = 'scale(0.0001,0.0001)';
                              a.style.position = 'fixed';
                              a.style.bottom = '0px';
                              a.style.right = '0px';
                              S.Ra(a);
                              setTimeout(function () {
                                a.play();
                              }, 100);
                            }, 80))
                        : f || b(a, t, h);
                    }
                  } else n('VIDEO_NOTSTARTED');
                }, 700);
              }
              'undefined' !== typeof a.srcObject ? (a.srcObject = t) : ((a.src = window.URL.createObjectURL(t)), (a.videoStream = t));
              S.Ra(a);
              a.addEventListener(
                'loadeddata',
                function () {
                  var h = a.play();
                  S.Ra(a);
                  'undefined' === typeof h
                    ? l()
                    : h
                        .then(function () {
                          l();
                        })
                        .catch(function () {
                          n('VIDEO_PLAYPROMISEREJECTED');
                        });
                },
                !1
              );
            })
            .catch(function (t) {
              n(t);
            });
        },
        get: function (a, b, d, e) {
          if (!a) return d && d('VIDEO_NOTPROVIDED'), !1;
          if (!S.fc()) return d && d('MEDIASTREAMAPI_NOTFOUND'), !1;
          if (e && e.video) {
            if (S.cc()) {
              var n = S.Md();
              (12 > n[0] || (12 === n[0] && 2 > n[1])) && S.Ee(e);
            }
            e.video.width && e.video.width.ideal && (a.style.width = e.video.width.ideal + 'px');
            e.video.height && e.video.height.ideal && (a.style.height = e.video.height.ideal + 'px');
          }
          S.va(a, 'autoplay');
          S.va(a, 'playsinline');
          e && e.audio ? (a.volume = 0) : S.va(a, 'muted');
          S.zc(
            a,
            b,
            function () {
              function f(l) {
                if (0 === l.length) d('INVALID_FALLBACKCONSTRAINTS');
                else {
                  var h = l.shift();
                  S.zc(
                    a,
                    b,
                    function () {
                      f(l);
                    },
                    h
                  );
                }
              }
              var t = S.Ad(e);
              f(t);
            },
            e
          );
        },
        Vd: function (a) {
          if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return a(!1, 'NOTSUPPORTED'), !1;
          navigator.mediaDevices
            .enumerateDevices()
            .then(function (b) {
              (b = b.filter(function (d) {
                return d.kind && -1 !== d.kind.toLowerCase().indexOf('video') && d.label && d.deviceId;
              })) &&
              b.length &&
              0 < b.length
                ? a(b, !1)
                : a(!1, 'NODEVICESFOUND');
            })
            .catch(function () {
              a(!1, 'PROMISEREJECTED');
            });
        },
        Ue: function (a, b, d) {
          var e = {};
          e[b] = d;
          b = [];
          b.push(e);
          a.applyConstraints({ advanced: b }).catch(function () {});
        },
      },
      za = (function () {
        var a = { n: 5, Bb: 1, Nc: 0, Ja: [30, 45], Ga: [2, 200], k: 0.7, Je: 200, pe: 0.05 },
          b = -1,
          d = null,
          e = -1,
          n = -1,
          f = 0,
          t = -1,
          l = -1,
          h = 0,
          v = 0,
          g = a.Ga[1],
          m = {
            wc: function () {
              switch (b) {
                case -1:
                  return -1;
                case 0:
                  return l + d.Nc;
                case 1:
                  return h;
              }
            },
            xf: function (q) {
              return Math.pow(Math.min(Math.max(t, 0), d.n - 1) / (d.n - 1), q || 1);
            },
            o: function (q) {
              d = Object.assign({}, a, q);
              t = l = d.Bb;
              b = 0;
              m.reset();
            },
            Fe: function (q) {
              q = ('undefined' === typeof q ? Date.now() : q) || 0;
              var k = Math.min(Math.max(q - v, d.Ga[0]), d.Ga[1]);
              g = k;
              v = q;
              var C = -1 === e ? 0 : d.k;
              e = Math.min(Math.max(1e3 / k, 5), 120) * (1 - C) + e * C;
              q - n > d.Je &&
                5 < ++f &&
                ((k = d.k),
                (t = t * (1 - k) + (e < d.Ja[0] ? l - 1 : e > d.Ja[1] ? l + 1 : l) * k),
                Math.abs(t - l) > 1 - d.pe &&
                  ((k = Math.min(Math.max(Math.round(t), 0), d.n - 1)), k !== l && ((t = l = k), (e = (d.Ja[1] - d.Ja[0]) / 2))),
                (n = q));
            },
            bd: function (q) {
              h = q;
              b = 1;
            },
            jd: function () {
              b = 0;
              m.reset();
            },
            reset: function () {
              g = a.Ga[1];
              n = e = -1;
              f = 0;
            },
            Pd: function () {
              return g;
            },
          };
        return m;
      })(),
      rb = (function () {
        var a = { Sc: 4, Va: [1.5, 1.5, 2], I: [0.1, 0.1, 0.1], Yc: 1, L: -1, G: -1, De: 2, oe: 1, Zc: !0, Hd: 0.8 },
          b = null,
          d = [],
          e = 0,
          n = [0.5, 0.5, 1];
        return {
          o: function (f) {
            b = Object.assign({}, a, f);
            d.splice(0);
            f = b.Va[0] * b.I[0];
            var t = b.Va[1] * b.I[1],
              l = 1 / (1 + b.Va[2] * b.I[2]),
              h = b.Yc * Math.min(b.L, b.G),
              v = h / b.L;
            h /= b.G;
            var g = 0.5 * b.Hd;
            g *= g;
            for (var m = 0; m < b.Sc; ++m) {
              var q = Math.pow(l, m),
                k = v * q,
                C = h * q;
              q = k * f;
              var F = C * t,
                I = k / 2;
              C /= 2;
              for (var O = 1 + (1 - I - I) / q, D = 1 + (1 - C - C) / F, G = 0; G < D; ++G)
                for (var E = C + G * F, Z = E - 0.5, V = 0; V < O; ++V) {
                  var w = I + V * q,
                    u = w - 0.5;
                  u * u + Z * Z > g || d.push([w, E, k * b.oe]);
                }
            }
            b.Zc &&
              d.sort(function (B, N) {
                var A = B[0] - 0.5;
                B = B[1] - 0.5;
                var p = N[0] - 0.5;
                N = N[1] - 0.5;
                return A * A + B * B - (p * p + N * N);
              });
          },
          get: function () {
            var f = d.length;
            if (0 === f) return n;
            e >= f && (e = 0);
            var t = d[Math.floor(e)];
            e = (e + 1 / b.De) % f;
            return t;
          },
        };
      })(),
      Y = {
        neuralNetworkPath: 'NN_DEFAULT.json',
        Yb: 0,
        pd: 25,
        bb: [2, 7],
        te: { threshold: 1, nScaleLevels: 3, scale0Factor: 0.8, overlapFactors: [2, 2, 3], scanCenterFirst: !0, nDetectsPerLoop: -1 },
        Ge: 50,
        Pc: 0.5,
        Oc: 0.4,
        ke: 8,
        Ce: { translationFactorRange: [0.0015, 0.005], rotationFactorRange: [0.003, 0.02], qualityFactorRange: [0.9, 0.98], alphaRange: [0.05, 1] },
        xa: [0.65, 1, 0.262],
        I: [0.092, 0.092, 0.3],
        md: 0.2,
        od: 2,
        nd: 0.1,
        le: 8,
        Rc: 1,
        Jd: Wa.Qa.bind(null, 0.3, 0.7),
        Me: 20,
        dd: 3,
      },
      ma = {
        facingMode: 'user',
        idealWidth: 800,
        idealHeight: 600,
        minWidth: 480,
        maxWidth: 1920,
        minHeight: 480,
        maxHeight: 1920,
        rotate: 0,
        flipX: !1,
      },
      ba = { Cb: -3, he: -1, error: -2, ready: 1, play: 2, pause: 3 },
      ia = ba.Cb,
      x = null,
      Wb = { zb: !1, Ob: null, element: null, H: null, u: [0, 0], D: [0.5, 0.5], j: [0.5, 0, 0, 0.5], Xa: 0, ua: null, Ma: !1 },
      K = null,
      Xb = { ta: null, Da: null, antialias: !0, Vb: './', oa: null, Y: null, Aa: Y.Yb, Wc: Y.Yb, Na: !1, ia: !0 },
      Oa = null,
      na = null,
      ta = null,
      Pa = 1,
      Na = { Kb: -1, jb: -1 },
      X = null,
      Yb = { L: 0, G: 0, u: [0, 0], ka: null },
      T = { na: null, buffer: null, I: null, xa: null, T: Y.Rc, wa: null },
      Sa = null,
      oa = null,
      Va = null,
      Ma = null,
      H = { i: 1, fa: 0, P: null, Hc: !1, Mc: 0, Db: 0 },
      fb = [],
      gb = [],
      Bb = {
        VERSION: '2.0.5',
        init: function (a) {
          function b() {
            ia !== ba.error &&
              2 === ++e &&
              (Ia(),
              vb(),
              Ha(),
              K.ta &&
                ((ia = ba.ready),
                K.ta(!1, {
                  GL: c,
                  canvasElement: K.Y,
                  videoTexture: x.H.get(),
                  videoTransformMat2: x.j,
                  maxFacesDetected: H.i,
                  videoElement: x.element,
                }),
                db()),
              cb());
          }
          if (ia !== ba.Cb) return a.callbackReady && a.callbackReady('ALREADY_INITIALIZED'), !1;
          ia = ba.he;
          x = Object.assign({}, Wb);
          K = Object.assign({}, Xb);
          X = Object.assign({}, Yb);
          H.P = [0];
          T.I = Y.I.slice(0);
          T.xa = Y.xa.slice(0);
          'undefined' !== typeof a.antialias && (K.antialias = a.antialias);
          a.callbackReady && (K.ta = a.callbackReady);
          a.callbackTrack && (K.Da = a.callbackTrack);
          a.nExpressions && (T.T = a.nExpressions);
          a.expressionsEasings && (T.wa = a.expressionsEasings);
          'undefined' !== typeof a.animateDelay && (K.Aa = a.animateDelay);
          'undefined' !== typeof a.NNCPath && (K.Vb = a.NNCPath);
          'undefined' !== typeof a.NNC && (K.oa = a.NNC);
          'undefined' !== typeof a.maxFacesDetected && (H.i = Math.max(1, a.maxFacesDetected));
          'undefined' !== typeof a.followZRot && (K.ia = a.followZRot ? !0 : !1);
          if (H.i > Y.ke) return Ga('MAXFACES_TOOHIGH'), !1;
          if (!a.canvasId && !a.canvas) return Ga('NO_CANVASID'), !1;
          K.Y = a.canvas ? a.canvas : document.getElementById(a.canvasId);
          if (!K.Y) return Ga('INVALID_CANVASID'), !1;
          X.L = K.Y.width;
          X.G = K.Y.height;
          if (!X.L || !X.G) return Ga('INVALID_CANVASDIMENSIONS'), !1;
          for (var d = 0; d < H.i; ++d) fb.push(new Float32Array(Y.le)), gb.push(0);
          za.o({ Bb: 0, n: Y.bb[1] - Y.bb[0] + 1, Nc: Y.bb[0] });
          na = Object.create(Y.te);
          a.scanSettings && (Object.assign(na, a.scanSettings), -1 !== na.nDetectsPerLoop ? za.bd(na.nDetectsPerLoop) : za.jd());
          ta = Object.create(Y.Ce);
          a.stabilizationSettings && Object.assign(ta, a.stabilizationSettings);
          var e = 0;
          a.videoSettings && a.videoSettings.videoElement
            ? Xa(a.videoSettings.videoElement, b)
            : (a.videoSettings && Object.assign(ma, a.videoSettings),
              xb(a.onWebcamAsk, a.onWebcamGet, function (n) {
                Xa(n, b);
              }));
          Jb(function (n) {
            if (!Kb()) return !1;
            Oa = new Cb({ Pa: n.layers, Hb: 'gpuRawAvg', Eb: Mb });
            y.ld([
              {
                id: 's50',
                name: '_',
                ha: 'attribute vec2 a0;uniform mat2 u32;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5,.5)+u32*a0;}',
                Ba: ['a0'],
                qa: [2],
                a: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
                c: ['u1', 'u32'],
                precision: 'lowp',
              },
              {
                id: 's51',
                name: '_',
                a: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
                ha:
                  'attribute vec2 a0;uniform sampler2D u33;uniform mat2 u32;uniform vec2 u34;uniform float u35,u36,u37;varying vec2 vv0;void main(){vec4 a=texture2D(u33,vec2(.17,u35));vec2 f=a.gb,g=a.a*u34,b=a0;b.x*=u37;float c=cos(u36),d=sin(u36);vec2 h=mat2(c,d,-d,c)*b,i=f+h*.5*g,j=i-.5;vv0=.5+2.*u32*j,gl_Position=vec4(a0,0.,1.);}',
                Ba: ['a0'],
                qa: [2],
                c: 'u1 u33 u34 u35 u36 u37 u32'.split(' '),
                precision: 'lowp',
              },
              {
                id: 's52',
                name: '_',
                a:
                  'uniform sampler2D u38,u33;uniform vec3 u39,u40;uniform float u41,u42,u35,u43,u36,u44;const vec4 e=vec4(.25,.25,.25,.25);void main(){vec4 d=texture2D(u38,vec2(.625,.625)),f=texture2D(u38,vec2(.875,.625)),a=texture2D(u33,vec2(.17,u35));float g=dot(d-f,e);bool h=g>u42;h?a.r=2.:a.r>u41?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r*=u43;if(a.r<.9)a=vec4(1.,u39);else{a.r*=step(1.9,a.r);float i=dot(e,texture2D(u38,vec2(.875,.875))),j=dot(e,texture2D(u38,vec2(.125,.625))),k=dot(e,texture2D(u38,vec2(.375,.625))),b=cos(u36),c=sin(u36);vec2 l=mat2(b,c*u44,-c/u44,b)*vec2(i,j);a.gba+=vec3(l,k)*u40*a.a;}gl_FragColor=a;}',
                ha: 'attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}',
                c: 'u38 u33 u39 u41 u40 u43 u36 u44 u42 u35'.split(' '),
              },
              {
                id: 's53',
                name: '_',
                ha: 'attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}',
                a:
                  'uniform sampler2D u38;const vec4 e=vec4(.25,.25,.25,.25);const vec3 f=vec3(.5,.5,.5);void main(){float a=dot(e,texture2D(u38,vec2(.125,.875))),b=dot(e,texture2D(u38,vec2(.375,.875))),c=dot(e,texture2D(u38,vec2(.625,.875))),d=dot(e,texture2D(u38,vec2(.625,.625)));vec3 g=vec3(a,b,c)*.5+f;gl_FragColor=vec4(g,d);}',
                c: ['u38'],
              },
              {
                id: 's54',
                name: '_',
                ha: 'attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}',
                a:
                  'uniform sampler2D u38;const vec4 e=vec4(.25,.25,.25,.25);void main(){float a=dot(e,texture2D(u38,vec2(.375,.375))),b=dot(e,texture2D(u38,vec2(.625,.375))),c=dot(e,texture2D(u38,vec2(.875,.375))),d=dot(e,texture2D(u38,vec2(.125,.125)));gl_FragColor=vec4(a,b,c,d);}',
                c: ['u38'],
              },
              {
                id: 's49',
                name: '_',
                a:
                  'uniform sampler2D u33;uniform vec2 u45;uniform float u46;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),c=step(.33,vv0.x);vec4 a=texture2D(u33,vv0+u45);a.a=mix(a.a*u46,a.a,c);vec4 d=floor(255.*a),g=255.*(255.*a-d),b=mix(d,g,f)/255.;b.x=mix(step(a.x,1.5),b.x,c),gl_FragColor=b;}',
                c: ['u33', 'u46', 'u45'],
              },
            ]);
            qb();
            Ib();
            ib();
            hb();
            b();
          });
          return !0;
        },
        destroy: function () {
          return new Promise(function (a, b) {
            Bb.toggle_pause(!0, !0)
              .catch(function () {
                b();
              })
              .then(function () {
                Oa && Oa.h();
                Qa.h();
                Oa = oa = Sa = null;
                fb.splice(0);
                gb.splice(0);
                X.ka = null;
                T.na = null;
                x.H = null;
                ia = ba.Cb;
                a();
              });
          });
        },
        toggle_pause: function (a, b) {
          if (!Ua()) return Promise.reject();
          var d = null;
          d = x.Ma ? Promise.resolve() : b ? S.gd(x.element, !a, x.ua) : Promise.resolve();
          a
            ? pb()
            : d.then(function () {
                cb();
              });
          return d;
        },
        update_videoSettings: function (a) {
          pb();
          return new Promise(function (b) {
            S.gd(x.element, !1, x.ua).then(function () {
              Object.assign(ma, a);
              xb(null, null, function (d) {
                Xa(d, function () {
                  Ia();
                  Ha();
                  cb();
                  b();
                });
              });
            });
          });
        },
        toggle_slow: function (a) {
          Ua() &&
            ia === ba.play &&
            (a && !K.Na
              ? ((K.Wc = K.Aa), (na.nDetectsPerLoop = 1), this.set_animateDelay(100), (K.Na = !0))
              : !a && K.Na && ((na.nDetectsPerLoop = -1), this.set_animateDelay(K.Wc), (K.Na = !1)));
        },
        set_animateDelay: function (a) {
          K.Aa = a;
        },
        resize: function () {
          if (!Ua()) return !1;
          var a = K.Y.width,
            b = K.Y.height;
          if (!jb() && a === X.L && b === X.G) return !1;
          X.L = a;
          X.G = b;
          y.K();
          ib();
          hb();
          Ia();
          Ha();
          return !0;
        },
        set_inputTexture: function (a, b, d) {
          x.u[0] = b;
          x.u[1] = d;
          x.H = W.instance({ width: b, height: d, ub: a });
          x.zb = !0;
          Ia();
          db();
          Ha();
        },
        reset_GLState: function () {
          db();
          X.ka.remove();
          T.na.remove();
          qb();
        },
        render_video: function () {
          sa.J();
          y.set('s50');
          c.viewport(0, 0, X.L, X.G);
          x.H.b(0);
          U.g(!0, !0);
        },
        reset_inputTexture: function () {
          x.zb = !1;
          x.H = x.Ob;
          jb();
          Ia();
          Ha();
        },
        get_videoDevices: function (a) {
          return S.Vd(a);
        },
        set_scanSettings: function (a) {
          Object.assign(na, a);
          -1 !== na.nDetectsPerLoop ? za.bd(na.nDetectsPerLoop) : za.jd();
          ib();
          hb();
        },
        set_stabilizationSettings: function (a) {
          Object.assign(ta, a);
        },
        set_videoOrientation: function (a, b) {
          Ua() && ((ma.flipX = b), (ma.rotate = a), Ia(), Ha());
        },
        update_videoElement: function (a, b) {
          Xa(a ? a : x.element, function () {
            vb();
            Ia();
            Ha();
            b && b();
          });
        },
        create_new: function () {
          return window.JEEFACEFILTERAPIGEN();
        },
      };
    return Bb;
  };
  window.JEEFACEFILTERAPI = window.JEEFACEFILTERAPIGEN();
  return JEEFACEFILTERAPI || window.JEEFACEFILTERAPI;
})();
