/**
 * Jeeliz Face Filter - https://github.com/jeeliz/jeelizFaceFilter
 *
 * Copyright 2020 WebAR.rocks ( https://webar.rocks )
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

var JEELIZFACEFILTER = (function () {
  window.JEELIZFACEFILTERGEN = function () {
    function Kb(a) {
      var c = null,
        d = null,
        h = null,
        k = 0,
        p = this,
        q = null,
        n = { ab: [], Ib: 'none', Ac: !1, Hb: null, grid: null };
      this.A = function () {
        this.Fe(q.ab);
        h.kg({ Ib: q.Ib, Ac: q.Ac, Hb: q.Hb });
      };
      this.qf = function (l) {
        return c[l];
      };
      this.Tb = function (l) {
        ['s32', 's34', 's27'].forEach(function (t) {
          D.T(t, [{ type: '2f', name: 'u20', value: l }]);
        });
        c &&
          c.forEach(function (t) {
            t.Tb(l);
          });
      };
      this.Fe = function (l) {
        var t = null;
        k = l.length;
        var w = null !== q.grid && a.grid.length && !(1 === a.grid[0] && 1 === a.grid[1]),
          y = w ? q.grid : [1, 1];
        w && this.Tb(y);
        c = l.map(function (x, r) {
          x = Object.assign({}, x, { index: r, parent: p, Kb: t, Ef: r === k - 1, Ya: w, Y: y });
          return (t = r = 0 === r ? Lb.instance(x) : Mb.instance(x));
        });
        d = c[0];
        h = c[k - 1];
        c.forEach(function (x, r) {
          0 !== r && x.Tf();
        });
      };
      this.U = function (l) {
        l.h(0);
        var t = l;
        c.forEach(function (w) {
          t = w.U(t, !1);
        });
        return t;
      };
      this.pf = function () {
        return d.mf();
      };
      this.Wa = function () {
        return h.sf();
      };
      this.vd = function () {
        return h.vd();
      };
      this.m = function () {
        c &&
          (c.forEach(function (l) {
            l.m();
          }),
          (h = d = c = null),
          (k = 0));
      };
      'undefined' !== typeof a && ((q = Object.assign({}, n, a)), this.A());
    }
    function fb(a, c) {
      var d = c % 8;
      return (a[(c - d) / 8] >> (7 - d)) & 1;
    }
    function tb(a, c, d) {
      var h = 1,
        k = 0;
      for (d = c + d - 1; d >= c; --d) (k += h * fb(a, d)), (h *= 2);
      return k;
    }
    function ub(a) {
      a = a.data;
      a = 'undefined' === typeof btoa ? Buffer.from(a, 'base64').toString('latin1') : atob(a);
      for (var c = a.length, d = new Uint8Array(c), h = 0; h < c; ++h) d[h] = a.charCodeAt(h);
      return d;
    }
    function gb(a) {
      return 'string' === typeof a ? JSON.parse(a) : a;
    }
    function Nb(a) {
      if ('undefined' === typeof gb(a).nb) {
        var c = gb(a);
        a = c.ne;
        var d = c.nf,
          h = c.n;
        c = ub(c);
        for (var k = new Float32Array(h), p = new Float32Array(d), q = a + d + 1, n = 0; n < h; ++n) {
          var l = q * n,
            t = 0 === fb(c, l) ? 1 : -1,
            w = tb(c, l + 1, a);
          l = l + 1 + a;
          for (var y = p.length, x = 0, r = l; r < l + y; ++r) (p[x] = fb(c, r, !0)), ++x;
          for (y = l = 0; y < d; ++y) l += p[y] * Math.pow(2, -y - 1);
          k[n] = 0 === l && 0 === w ? 0 : t * (1 + l) * Math.pow(2, 1 + w - Math.pow(2, a - 1));
        }
        a = k;
      } else if (((h = gb(a)), (a = h.nb), 0 === a)) a = new Uint8Array(h.nb);
      else {
        d = h.n;
        h = ub(h);
        c = new Uint32Array(d);
        for (k = 0; k < d; ++k) c[k] = tb(h, k * a, a);
        a = c;
      }
      return a;
    }
    function Za() {
      return -1 !== [ja.ready, ja.play, ja.pause].indexOf(na);
    }
    function hb() {
      if (na === ja.play) return !1;
      na = ja.play;
      Ma.stop();
      vb(0);
    }
    function wb() {
      if (na !== ja.play) return !1;
      qa.stop();
      Ma.stop();
      na = ja.pause;
      return !0;
    }
    function Fa(a, c, d, h, k) {
      a = 4 * (3 * c + a) + d;
      return h + (V.buffer[a] / 255 + V.buffer[a + 12] / 65025) * (k - h);
    }
    function ib() {
      b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
      Ha.vf();
    }
    function Ob() {
      var a = da.qa();
      sa.M();
      b.viewport(0, 0, 3, 2 * a);
      D.set('s62');
      V.ya.h(0);
      Q.l(!1, !1);
      return ba.enableAsyncReadPixels ? Y.Mb(0, 0, 3, 2 * a, V.buffer, xb, 1) : Y.be(0, 0, 3, 2 * a, V.buffer);
    }
    function vb() {
      na !== ja.pause &&
        (ba.isCleanGLStateAtEachIteration && (D.kd(), Q.reset(), Q.Ca(), b.disable(b.DEPTH_TEST), b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1), D.Ka()),
        qa.Fc(Pb, Ob, Qb, xb, Rb, ba.animateProcessOrder));
    }
    function Pb() {
      sa.fa();
      if (!J.Ab)
        if (J.zb)
          J.element.needsUpdate && (J.D.ie(J.element.videoWidth, J.element.videoHeight), J.D.Sb(J.element.arrayBuffer), (J.element.needsUpdate = !1));
        else {
          var a = J.element.currentTime,
            c = a - J.Lb;
          0 > c && ((J.Lb = a), (c = 0));
          1e3 * c < ea.vg || ((J.Lb += c), J.D.refresh());
        }
      a = qa.rf();
      da.update(a, Ca);
      for (c = 0; c < a; ++c) {
        da.Qb(c);
        D.set('s64');
        var d = Ca[da.wd()];
        D.I('u45', 1 + Na.Gc * (Math.cos(d.ry) - 1));
        S.Ea && D.I('u44', d.rz);
        da.re('u43');
        var h = Oa.pf();
        d = yb.Ye(Z.u, d, h);
        Z.Xa.L(d, h);
        J.D.h(0);
        V.ya.h(1);
        Q.l(!1, !1);
        Oa.U(Z.Xa);
      }
      qa.Qb();
    }
    function xb() {
      sa.sg();
      ba.isCleanGLStateAtEachIteration && (sa.reset(), aa.reset(), b.enable(b.DEPTH_TEST));
      S.Wb && S.Wb(da.Nd() ? Ca : Ca[0]);
      ba.isCleanGLStateAtEachIteration && (b.disable(b.BLEND), Q.reset(), Q.Ca());
    }
    function Qb() {
      for (var a = 0; a < da.qa(); ++a)
        if (da.Jf(a)) {
          var c = a,
            d = Sa[c],
            h = [c],
            k = Ca[c],
            p = jb[c],
            q = 2 * c;
          d.kb = Fa(1, q, 3, 0, 1);
          k.detected = wa.aa(k.detected, d.kb, ea.xe);
          d.x = Fa(0, q, 1, -1, 1);
          d.y = Fa(0, q, 2, -1, 1);
          d.ca = Fa(0, q, 3, 0, 1);
          if (d.kb < ba.multiDetectionThresholdFactors[0] * ba.threshold) (d.ua = Math.floor(d.ua / 2)), S.Ea && ((k.rz = 0), (k.ry = 0));
          else {
            var n = V.bb;
            d.rx = Fa(1, q, 0, -n[0], n[0]);
            d.ry = Fa(1, q, 1, -n[1], n[1]);
            d.xa = Fa(1, q, 2, -n[2], n[2]);
            for (n = 0; n < V.ba; ++n) d.rd[n] = V.Da[n](Fa(2, q, n, 0, 1));
            q = d.ca * V.ee;
            h.dx = d.x - k.xRaw;
            h.dy = d.y - k.yRaw;
            h.ec = q - k.sRaw;
            h.bc = d.rx - k.rx;
            h.cc = d.ry - k.ry;
            h.dc = S.Ea ? d.xa : d.xa - k.rz;
            n = qa.ff();
            h =
              (1 - $a.Fb(ta.translationFactorRange[0], ta.translationFactorRange[1], Math.sqrt(h.dx * h.dx + h.dy * h.dy + h.ec * h.ec) / n)) *
              (1 - $a.Fb(ta.rotationFactorRange[0], ta.rotationFactorRange[1], Math.sqrt(h.bc * h.bc + h.cc * h.cc + h.dc * h.dc) / n)) *
              $a.Fb(ta.qualityFactorRange[0], ta.qualityFactorRange[1], d.kb);
            c = p[++kb[c] % p.length] = h;
            for (n = 0; n < p.length; ++n) c = Math.min(c, p[n]);
            c = Math.max(0.5, c);
            h = Math.min(c, h);
            p = wa.aa(ta.alphaRange[1], ta.alphaRange[0], Math.pow(h, ea.ze));
            k.xRaw = wa.aa(k.xRaw, d.x, p);
            k.yRaw = wa.aa(k.yRaw, d.y, p);
            k.sRaw = wa.aa(k.sRaw, q, p);
            k.rx = wa.aa(k.rx, d.rx, p);
            k.ry = wa.aa(k.ry, d.ry, p);
            k.rz = S.Ea ? k.rz + ta.followZRotAlphaFactor * p * d.xa : wa.aa(k.rz, d.xa, p);
            c = k.sRaw * Na.ac * Math.sin(k.ry);
            q = (Math.sin(k.rz) * c) / Pa;
            k.x = k.xRaw + Math.cos(k.rz) * c;
            k.y = k.yRaw + q;
            k.s = k.sRaw;
            p = Math.max(p, ea.ye);
            for (c = 0; c < V.ba; ++c) k.expressions[c] = wa.aa(k.expressions[c], d.rd[c], p);
            ++d.ua;
          }
        }
    }
    function Rb() {
      na === ja.play && Ma.Fc(vb);
    }
    function zb() {
      Z.Xa = yb.instance({});
      var a = { width: ea.oe, height: da.qa(), isFloat: !0, isPot: !1, array: da.Ue(new Float32Array([0, 0.5, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0])) };
      V.ya = Sb.instance(a);
    }
    function lb() {
      D.T('s64', [
        { type: '1i', name: 'u1', value: 0 },
        { type: '1i', name: 'u41', value: 1 },
        { type: '2f', name: 'u42', value: Z.G },
        { type: '1f', name: 'u43', value: 0.5 },
        { type: '1f', name: 'u44', value: 0 },
      ]);
      D.T('s65', [
        { type: '1i', name: 'u46', value: 0 },
        { type: '1i', name: 'u41', value: 1 },
        { type: '1f', name: 'u49', value: ea.qg },
        { type: '1f', name: 'u50', value: ba.threshold },
        { type: '3f', name: 'u48', value: [V.P[0] * Z.G[0], V.P[1] * Z.G[1], V.P[2]] },
        { type: '1f', name: 'u43', value: 0.5 },
        { type: '1f', name: 'u51', value: 1 },
        { type: '1f', name: 'u44', value: 0 },
      ]);
      var a = [{ type: '1i', name: 'u46', value: 0 }];
      D.T('s66', a);
      D.T('s67', a);
      D.T('s62', [
        { type: '1i', name: 'u41', value: 0 },
        { type: '1f', name: 'u54', value: Z.G[0] },
        { type: '2f', name: 'u53', value: [0, 0.5 / da.qa()] },
      ]);
    }
    function mb() {
      Z.G[0] = 1;
      Z.G[1] = Z.u / Z.N;
      Ta.A({ Jb: ba.overlapFactors, Vd: ba.nScaleLevels, u: Z.u, N: Z.N, de: ba.scale0Factor, P: V.P, Hc: ba.scanCenterFirst });
    }
    function Tb(a) {
      if (S.Na) Ab('string' === typeof S.Na ? JSON.parse(S.Na) : S.Na, a);
      else {
        var c = S.Xc;
        'JSON' !== c.toUpperCase().split('.').pop() && (c += ea.neuralNetworkPath);
        ab.get(c, function (d) {
          d = JSON.parse(d);
          Ab(d, a);
        });
      }
    }
    function Ab(a, c) {
      if (a.exportData) {
        var d = a.exportData;
        d.rotationEulerAnglesFactors && (V.bb = d.rotationEulerAnglesFactors);
        if (d.translationScalingFactors) {
          var h = d.translationScalingFactors,
            k = ba.translationScalingFactors;
          V.P[0] = h[0] * k[0];
          V.P[1] = h[1] * k[1];
          V.P[2] = h[2] * k[2];
        }
        'undefined' !== typeof d.nExpressions && (V.ba = d.nExpressions);
        V.ee = d.dsMean ? 1 + d.dsMean : 1;
        Na.Gc = 0.4;
        Na.ac = 0.7;
        'undefined' !== typeof d.fgScaleXFactor && (Na.Gc = d.fgScaleXFactor);
        'undefined' !== typeof d.fgDisplaceXFactor && (Na.ac = d.fgDisplaceXFactor);
      }
      V.ba || (V.ba = ea.Ud);
      if (!V.Da) for (V.Da = [], d = 0; d < V.ba; ++d) V.Da.push(ea.$e);
      c(a);
    }
    function Ub() {
      if (
        Ha.A({
          jb: S.ha,
          width: Z.u,
          height: Z.N,
          debug: !1,
          zc: function () {
            Ia('GLCONTEXT_LOST');
          },
          antialias: S.antialias,
          premultipliedAlpha: !0,
        })
      )
        return !0;
      Ia('GL_INCOMPATIBLE');
      return !1;
    }
    function Vb() {
      var a = da.wd(),
        c = Ca[a];
      V.ya.ag(1);
      b.viewport(0, a, 1, 1);
      D.set('s65');
      S.Ea && D.I('u44', c.rz);
      da.re('u43');
      var d = 1,
        h = da.mg(Sa, Ca, Z.u / Z.N);
      da.Nd() && (h && ((d = 0), (Sa[a].ua = 0), (c.isDetected = !1), (c.detected = 0)), D.I('u51', d));
      D.gg('u47', Ta.get(a));
      Q.l(!1, !1);
      if (da.Md() || h) b.viewport(1, a, 1, 1), D.set('s66'), D.I('u51', d), Q.l(!1, !1);
      da.Md() && (b.viewport(2, a, 1, 1), D.set('s67'), Q.l(!1, !1));
      V.ya.sync();
    }
    function Bb() {
      J.D && J.D.remove();
      J.zb = J.element.isFakeVideo ? !0 : !1;
      if (J.zb) {
        var a = Cb();
        a = { isFlipY: !1, array: J.element.arrayBuffer, width: a.w, height: a.Ga, isKeepArray: !0 };
      } else a = { J: J.element };
      J.Mc = aa.instance(Object.assign({ isPot: !1, isLinear: !0, isFloat: !1 }, a));
      J.D = J.Mc;
    }
    function Ja() {
      var a = [{ type: 'mat2', name: 'u40', value: J.B }];
      D.T('s63', [{ type: '1i', name: 'u1', value: 0 }].concat(a));
      D.T('s64', a);
    }
    function Ka() {
      var a = [0.5, 0.5],
        c = J.G[1] / J.G[0];
      Pa = Ha.W() / Ha.K();
      90 === Math.abs(pa.rotate) && (c = 1 / c);
      c > Pa ? (a[1] *= Pa / c) : (a[0] *= c / Pa);
      D.T('s65', [{ name: 'u52', type: '1f', value: Pa }]);
      J.B[0] = 0;
      J.B[1] = 0;
      J.B[2] = 0;
      J.B[3] = 0;
      switch (pa.rotate) {
        case 0:
          J.B[0] = a[0];
          J.B[3] = a[1];
          break;
        case 180:
          J.B[0] = -a[0];
          J.B[3] = -a[1];
          break;
        case 90:
          J.B[1] = a[0];
          J.B[2] = -a[1];
          break;
        case -90:
          (J.B[1] = -a[0]), (J.B[2] = a[1]);
      }
      pa.flipX && ((J.B[0] *= -1), (J.B[2] *= -1));
      J.Ab || ((J.B[1] *= -1), (J.B[3] *= -1));
    }
    function Cb() {
      var a = { w: J.element.videoWidth || J.element.width, Ga: J.element.videoHeight || J.element.height };
      if (!a.w || !a.Ga || 4 > a.w || 4 > a.Ga) throw Error('INVALID VIDEO DIMENSIONS - width = ' + a.w + ' height = ' + a.Ga);
      return a;
    }
    function nb() {
      var a = Cb(),
        c = J.G[0] !== a.w || J.G[1] !== a.Ga;
      c && ((J.G[0] = a.w), (J.G[1] = a.Ga));
      return c;
    }
    function bb(a, c) {
      if (na === ja.error) return !1;
      J.element = a;
      nb();
      c && c();
      return !0;
    }
    function Db(a, c, d) {
      a && a();
      J.Sa = {
        video: {
          facingMode: { exact: pa.facingMode },
          width: { min: pa.minWidth, max: pa.maxWidth, ideal: pa.idealWidth },
          height: { min: pa.minHeight, max: pa.maxHeight, ideal: pa.idealHeight },
        },
        audio: !1,
      };
      X.Zc(J.Sa, pa.deviceId);
      X.get(
        J.element ? J.element : X.Ad(),
        function (h) {
          c && c(h);
          d(h);
        },
        function () {
          Ia('WEBCAM_UNAVAILABLE');
        },
        J.Sa
      );
    }
    function Ia(a) {
      na !== ja.error && ((na = ja.error), S.Ra && S.Ra(a));
    }
    var wa = {
        yh: function (a) {
          return Math.ceil(Math.log2(a));
        },
        Uh: function (a) {
          return Math.log2(a);
        },
        Qh: function (a) {
          return 0 === Math.log2(a) % 1;
        },
        Hg: function (a) {
          var c = [0, 0, 0, 0];
          a.forEach(function (d) {
            c[0] += d[0];
            c[1] += d[1];
            c[2] += d[2];
            c[3] += d[3];
          });
          return c;
        },
        Ig: function (a, c, d) {
          return Math.min(Math.max(a, c), d);
        },
        Lg: function (a) {
          return (a * Math.PI) / 180;
        },
        ai: function (a, c) {
          c = Math.pow(10, c);
          return Math.round(a * c) / c;
        },
        bi: function (a) {
          return Math.round(1e6 * a) / 1e6;
        },
        zh: function (a, c) {
          return ((100 * a) / c).toFixed(3);
        },
        aa: function (a, c, d) {
          return a * (1 - d) + c * d;
        },
        Vh: function (a, c) {
          return a[0] * (1 - c) + a[1] * c;
        },
        Te: function (a, c) {
          return wa.Le(a - c);
        },
        Le: function (a) {
          for (; a > Math.PI; ) a -= 2 * Math.PI;
          for (; a <= -Math.PI; ) a += 2 * Math.PI;
          return a;
        },
        Qg: function (a, c) {
          return Math.abs(wa.Te(a, c));
        },
        wg: function (a, c) {
          return Math.atan2(Math.sin(a) + Math.sin(c), Math.cos(a) + Math.cos(c));
        },
      },
      ab = {
        get: function (a, c, d) {
          var h = new XMLHttpRequest();
          h.open('GET', a, !0);
          h.withCredentials = !1;
          h.onreadystatechange = function () {
            4 === h.readyState && (200 === h.status || 0 === h.status ? c(h.responseText) : 'undefined' !== typeof d && d(h.status));
          };
          h.send();
        },
        tf: function (a) {
          return new Promise(function (c, d) {
            ab.get(a, c, d);
          });
        },
        vh: function (a, c, d) {
          a += d ? '?' + ab.Xe(d) : '';
          ab.get(a, function (h) {
            c(JSON.parse(h));
          });
        },
        Xh: function (a, c, d) {
          var h = new XMLHttpRequest();
          h.open('POST', a, !0);
          h.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          h.onreadystatechange = function () {
            4 !== h.readyState || (200 !== h.status && 0 !== h.status) || d(h.responseText);
          };
          h.send(c);
        },
        Xe: function (a) {
          return 'string' === typeof a
            ? a
            : Object.keys(a)
                .map(function (c) {
                  return encodeURIComponent(c) + '=' + encodeURIComponent(a[c]);
                })
                .join('&');
        },
        jh: function (a, c) {
          var d = new XMLHttpRequest();
          d.open('POST', a, !0);
          d.responseType = 'arraybuffer';
          d.onload = function () {
            c(d.response);
          };
          d.send();
        },
      },
      Wb = {
        create: function (a, c) {
          for (var d = Array(c), h = 0; h < c; ++h) d[h] = a;
          return d;
        },
        Mg: function (a, c) {
          for (var d = 0; d < a.length; ++d) c[d] = a[d];
        },
        clone: function (a) {
          for (var c = Array(a.length), d = 0; d < a.length; ++d) c[d] = a[d];
          return c;
        },
        ei: function (a, c, d) {
          a.forEach(function (h, k) {
            c[k] = h * d;
          });
        },
        ni: function (a) {
          for (var c = a.length - 1; 0 < c; --c) {
            var d = Math.floor(Math.random() * (c + 1)),
              h = a[c];
            a[c] = a[d];
            a[d] = h;
          }
        },
        pi: function (a) {
          return a.sort(function (c, d) {
            return c - d;
          });
        },
        pg: function (a) {
          return Array.isArray(a) || a.constructor === Float32Array || a.constructor === Uint8Array;
        },
      },
      ob = {
        Zb: function (a, c) {
          if (0 === c || 'object' !== typeof a) return a;
          a = Object.assign({}, a);
          c = void 0 === c || -1 === c ? -1 : c - 1;
          for (var d in a) a[d] = ob.Zb(a[d], c);
          return a;
        },
        Pg: function (a) {
          return JSON.parse(JSON.stringify(a));
        },
      },
      $a = {
        oi: function (a, c, d) {
          a = Math.min(Math.max((d - a) / (c - a), 0), 1);
          return a * a * (3 - 2 * a);
        },
        Fb: function (a, c, d) {
          return Math.min(Math.max((d - a) / (c - a), 0), 1);
        },
        ah: function (a, c, d, h) {
          return Math.pow(Math.min(Math.max((h - a) / (c - a), 0), 1), d);
        },
        vi: function () {
          return 0;
        },
        Wh: function () {
          return 1;
        },
        Th: function (a) {
          return a;
        },
        Yg: function (a) {
          return a * a;
        },
        dh: function (a) {
          return a * (2 - a);
        },
        Vg: function (a) {
          return 0.5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a;
        },
        Tg: function (a) {
          return a * a * a;
        },
        bh: function (a) {
          return --a * a * a + 1;
        },
        Ug: function (a) {
          return 0.5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1;
        },
        Zg: function (a) {
          return a * a * a * a;
        },
        eh: function (a) {
          return 1 - --a * a * a * a;
        },
        Wg: function (a) {
          return 0.5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a;
        },
        $g: function (a) {
          return a * a * a * a * a;
        },
        fh: function (a) {
          return 1 + --a * a * a * a * a;
        },
        Xg: function (a) {
          return 0.5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a;
        },
      },
      Xb = {
        cf: function (a, c, d) {
          switch (a) {
            case 'relu':
              return d + '=max(vec4(0.),' + c + ');';
            case 'elu':
              return d + '=mix(exp(-abs(' + c + '))-vec4(1.),' + c + ',step(0.,' + c + '));';
            case 'elu01':
              return d + '=mix(0.1*exp(-abs(' + c + '))-vec4(0.1),' + c + ',step(0.,' + c + '));';
            case 'arctan':
              return d + '=atan(3.14159265359*texture2D(u0,vUV))/3.14159265359;';
            case 'copy':
              return '';
            case 'gelu':
              return (
                d +
                '=' +
                d +
                ';\n          vec4 zou=' +
                c +
                ';\n          vec4 polyZou=0.7978845608028654*(zou+0.044715*zou*zou*zou);\n          vec4 exZou=exp(-abs(polyZou));\n          vec4 exZou2=exZou*exZou;\n          vec4 tanhZou=sign(polyZou)*(vec4(1.)-exZou2)/(vec4(1.)+exZou2);\n          ' +
                d +
                '=0.5*zou*(vec4(1.)+tanhZou);'
              );
            default:
              return !1;
          }
        },
      },
      D = (function () {
        function a(e, m, H) {
          m = e.createShader(m);
          e.shaderSource(m, H);
          e.compileShader(m);
          return e.getShaderParameter(m, e.COMPILE_STATUS) ? m : null;
        }
        function c(e, m, H) {
          m = a(e, e.VERTEX_SHADER, m);
          H = a(e, e.FRAGMENT_SHADER, H);
          e === b && n.push(m, H);
          var M = e.createProgram();
          e.attachShader(M, m);
          e.attachShader(M, H);
          e.linkProgram(M);
          return M;
        }
        function d(e) {
          return ['float', 'sampler2D', 'int']
            .map(function (m) {
              return 'precision ' + e + ' ' + m + ';\n';
            })
            .join('');
        }
        function h(e, m) {
          m.o = m.o ? !0 : !1;
          if (!m.o) {
            m.za = m.za || 'precision lowp float;attribute vec2 a0;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=a0*.5+vec2(.5);}';
            m.ib = m.ib || ['a0'];
            m.Pa = m.Pa || [2];
            m.precision = m.precision || x;
            m.id = w++;
            void 0 !== m.ge &&
              (m.ge.forEach(function (P, fa) {
                m.g = m.g.replace(P, m.Nb[fa]);
              }),
              m.ge.splice(0));
            m.Tc = 0;
            m.Pa.forEach(function (P) {
              m.Tc += 4 * P;
            });
            var H = d(m.precision);
            m.wa = c(e, H + m.za, H + m.g);
            m.C = {};
            m.i.forEach(function (P) {
              m.C[P] = e.getUniformLocation(m.wa, P);
            });
            m.attributes = {};
            m.Qa = [];
            m.ib.forEach(function (P) {
              var fa = e.getAttribLocation(m.wa, P);
              m.attributes[P] = fa;
              m.Qa.push(fa);
            });
            if (m.j) {
              e.useProgram(m.wa);
              t = m;
              l = m.id;
              for (var M in m.j) e.uniform1i(m.C[M], m.j[M]);
            }
            m.ta = !0;
          }
        }
        function k(e) {
          xa.eg(N);
          l !== e.id &&
            (N.R(),
            (l = e.id),
            (t = e),
            b.useProgram(e.wa),
            e.Qa.forEach(function (m) {
              0 !== m && b.enableVertexAttribArray(m);
            }));
        }
        function p(e, m, H) {
          h(e, m, H);
          e.useProgram(m.wa);
          e.enableVertexAttribArray(m.attributes.a0);
          l = -1;
          return (t = m);
        }
        function q() {
          return { g: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}', i: ['u1'], j: { u1: 0 } };
        }
        var n = [],
          l = -1,
          t = null,
          w = 0,
          y = !1,
          x = 'highp',
          r = ['u1'],
          F = ['u0'],
          C = { u1: 0 },
          f = { u0: 0 },
          E = { u1: 0, u2: 1 },
          K = { u1: 0, u3: 1 },
          A = ['u1', 'u3', 'u4'],
          z = { u5: 0 },
          g = ['u6', 'u7', 'u8', 'u9'],
          u = { u6: 0, u7: 1 },
          I = {
            s0: q(),
            s1: { g: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}', i: r, j: C, precision: 'lowp' },
            s2: {
              g: 'uniform sampler2D u1,u2;varying vec2 vv0;void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a*b;}',
              i: ['u1', 'u2'],
              j: E,
            },
            s3: {
              g: 'uniform sampler2D u1;uniform vec2 u10,u11;varying vec2 vv0;void main(){vec2 a=vv0*u10+u11;gl_FragColor=texture2D(u1,a);}',
              i: ['u1', 'u10', 'u11'],
              j: C,
              o: !0,
            },
            s4: {
              g: 'uniform sampler2D u1;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a.r*f;}',
              i: r,
              j: C,
            },
            s5: {
              g:
                'uniform sampler2D u1,u2;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=texture2D(u2,vv0),b=texture2D(u1,vv0);gl_FragColor=a.a*b.r*f;}',
              i: ['u1', 'u2'],
              j: E,
            },
            s6: { g: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(1.-vv0.x,vv0.y));}', i: r, j: C },
            s7: { g: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vec2(vv0.x,1.-vv0.y));}', i: r, j: C },
            s8: {
              g: 'uniform sampler2D u0;uniform float u10;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=a*u10;}',
              i: ['u0', 'u10'],
              j: f,
            },
            s9: {
              g:
                'uniform sampler2D u0;uniform float u10;varying vec2 vv0;const vec4 f=vec4(.25),g=vec4(1.);void main(){vec4 a=texture2D(u0,vv0);float b=dot(a*u10,f);gl_FragColor=b*g;}',
              i: ['u0', 'u10'],
              j: f,
            },
            s10: {
              g:
                'uniform sampler2D u1;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.);void main(){float a=.25*dot(e,texture2D(u1,vv0));gl_FragColor=a*e;}',
              i: r,
              j: C,
            },
            s11: {
              g:
                'uniform sampler2D u1,u12;uniform float u13;const vec4 f=vec4(1.);varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0),b=texture2D(u12,vv0);gl_FragColor=mix(b,a,u13*f);}',
              i: ['u1', 'u12', 'u13'],
              j: { u1: 0, u12: 1 },
            },
            s12: {
              g:
                'uniform sampler2D u1;uniform vec2 u14;varying vec2 vv0;void main(){gl_FragColor=.25*(texture2D(u1,vv0+u14)+texture2D(u1,vv0+u14*vec2(1.,-1.))+texture2D(u1,vv0+u14*vec2(-1.,-1.))+texture2D(u1,vv0+u14*vec2(-1.,1.)));}',
              i: ['u1', 'u14'],
              j: C,
            },
            s13: {
              g:
                'uniform sampler2D u1;varying vec2 vv0;vec4 f(vec3 d){vec3 b=d/65536.,a=clamp(ceil(log2(b)),-128.,127.);float c=max(max(a.r,a.g),a.b),g=exp2(c);vec3 h=clamp(b/g,0.,1.);return vec4(h,(c+128.)/256.);}void main(){vec3 a=texture2D(u1,vv0).rgb;gl_FragColor=f(a);}',
              i: r,
              j: C,
              o: !0,
            },
            s14: {
              g:
                'uniform sampler2D u1;varying vec2 vv0;vec3 f(vec4 a){float b=a.a*256.-128.;vec3 c=a.rgb;return exp2(b)*c*65536.;}void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=vec4(f(a),1.);}',
              i: r,
              j: C,
              o: !0,
            },
            s15: {
              g:
                'uniform sampler2D u1;uniform vec4 u15;varying vec2 vv0;float g(float a,float b){a=floor(a)+.5;return floor(a/exp2(b));}float h(float a,float b){return floor(a*exp2(b)+.5);}float i(float a,float b){return mod(a,h(1.,b));}float e(float c,float a,float b){a=floor(a+.5),b=floor(b+.5);return i(g(c,a),b-a);}vec4 j(float a){if(a==0.)return vec4(0.,0.,0.,0.);float k=128.*step(a,0.);a=abs(a);float c=floor(log2(a)),l=c+127.,b=(a/exp2(c)-1.)*8388608.,d=l/2.,m=fract(d)*2.,n=floor(d),o=e(b,0.,8.),p=e(b,8.,16.),q=m*128.+e(b,16.,23.),r=k+n;return vec4(o,p,q,r)/255.;}void main(){float a=dot(texture2D(u1,vv0),u15);gl_FragColor=j(a);}',
              i: ['u1', 'u15'],
              j: C,
            },
            s16: {
              g: 'uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u0,vv0),b=e/(e+exp(-a));gl_FragColor=b;}',
              i: F,
              j: f,
              o: !0,
            },
            s17: {
              g: 'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(0.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=max(f,a);}',
              i: F,
              j: f,
              o: !0,
            },
            s18: {
              g:
                'uniform sampler2D u0;varying vec2 vv0;const vec4 e=vec4(1.);const float g=.797885,h=.044715;vec4 i(vec4 a){vec4 b=exp(-abs(a)),c=b*b,d=sign(a)*(e-c)/(e+c);return d;}void main(){vec4 a=texture2D(u0,vv0),b=a+h*a*a*a,c=i(g*b);gl_FragColor=.5*a*(e+c);}',
              i: F,
              j: f,
              o: !0,
            },
            s19: {
              g:
                'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.);void main(){vec4 a=texture2D(u0,vv0);gl_FragColor=mix(exp(-abs(a))-f,a,step(0.,a));}',
              i: F,
              j: f,
              o: !0,
            },
            s20: {
              g:
                'uniform sampler2D u0;varying vec2 vv0;const vec4 f=vec4(1.);void main(){vec4 a=texture2D(u0,vv0),b=exp(a)-f;gl_FragColor=mix(.1*b,a,step(0.,a));}',
              i: F,
              j: f,
            },
            s21: {
              g: 'uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=atan(e*texture2D(u0,vv0))/e;}',
              i: F,
              j: f,
            },
            s22: {
              g: 'uniform sampler2D u0;const float e=3.141593;varying vec2 vv0;void main(){gl_FragColor=2.*atan(e*texture2D(u0,vv0))/e;}',
              i: F,
              j: f,
              o: !0,
            },
            s23: {
              g:
                'uniform sampler2D u0,u16;uniform float u17;const vec2 e=vec2(.5);const float f=1e-5;const vec4 g=vec4(1.),i=vec4(0.);varying vec2 vv0;void main(){vec4 a=texture2D(u16,e);float b=u17*u17;vec4 c=max(b*a,f*g);gl_FragColor=texture2D(u0,vv0)/c;}',
              i: ['u0', 'u16', 'u17'],
              j: { u0: 0, u16: 1 },
              o: !0,
            },
            s24: {
              g:
                'uniform sampler2D u1;uniform vec2 u18;varying vec2 vv0;void main(){float a=u18.x*u18.y;vec2 b=floor(vv0*a)/a,c=fract(vv0*a),d=floor(b*u18.y),f=floor(u18.x*fract(b*u18.y)),g=(f*u18.y+d)/a;gl_FragColor=texture2D(u1,g+c/a);}',
              i: ['u1', 'u18'],
              j: C,
            },
            s25: {
              g:
                'uniform sampler2D u7,u6,u19;varying vec2 vv0;void main(){vec4 a=texture2D(u19,vv0);vec2 b=a.rg,c=a.ba;vec4 d=texture2D(u7,b),f=texture2D(u6,c);gl_FragColor=d*f;}',
              i: ['u7', 'u6', 'u19'],
              j: Object.assign({ u19: 2 }, u),
              o: !0,
            },
            s26: {
              g:
                'uniform float u8,u9;uniform sampler2D u7,u6;varying vec2 vv0;void main(){vec2 b=fract(vv0*u8);float a=u8*u9;vec2 c=(vec2(.5)+floor(a*vv0))/a;vec4 d=texture2D(u7,c),f=texture2D(u6,b);gl_FragColor=d*f;}',
              i: g,
              j: u,
            },
            s27: {
              g:
                'uniform float u8,u9;uniform vec2 u20;uniform sampler2D u7,u6;varying vec2 vv0;void main(){float a=u8*u9;vec2 b=mod(vv0*u20,vec2(1.)),c=floor(vv0*u20)/u20,d=c+fract(b*u8)/u20,f=(vec2(.5)+floor(a*b))/a;vec4 g=texture2D(u7,f),h=texture2D(u6,d);gl_FragColor=g*h;}',
              i: ['u20'].concat(g),
              j: u,
              o: !0,
            },
            s28: {
              g:
                'uniform float u8,u9;uniform sampler2D u7,u6,u22,u23,u24,u25;varying vec2 vv0;const vec4 e=vec4(1.,1.,1.,1.),g=vec4(1e-3,1e-3,1e-3,1e-3);void main(){vec2 c=fract(vv0*u8),d=vv0;float h=u8*u9;d=(.5+floor(h*vv0))/h;vec4 l=texture2D(u7,d),m=texture2D(u6,c),a=texture2D(u25,d);a=floor(.5+a*255.);vec4 n=texture2D(u22,c),o=texture2D(u23,c),p=texture2D(u24,c),i=step(-g,-a),b=e-i,j=b*step(-e-g,-a);b*=e-j;vec4 k=b*step(-2.*e-g,-a);b*=e-k;vec4 q=b,r=i*m+j*n+k*o+q*p;gl_FragColor=l*r;}',
              i: ['u25', 'u22', 'u23', 'u24'].concat(g),
              j: Object.assign({ u25: 3, u22: 4, u23: 5, u24: 6 }, u),
              o: !0,
            },
            s29: {
              g:
                'uniform sampler2D u7,u6,u3;uniform float u8,u26,u27,u9;uniform vec2 u28;varying vec2 vv0;const vec2 f=vec2(1.),l=vec2(0.);void main(){vec2 c=floor(u26*vv0),d=u26*vv0-c;float g=u8/u26;vec2 h=floor(d*g),i=d*g-h,j=(c+i)/u26;float m=u26*u9/u8;vec2 b=m*h;b=floor(u28*b+.5*(u9-1.)*(f-u28));vec2 a=(b+i*u27)/u9;a+=.25/u9;vec2 k=step(a,f)*step(l,a);vec4 n=texture2D(u7,j),o=texture2D(u6,a),p=n*o,q=texture2D(u3,j);gl_FragColor=(p*u27*u27+q)*k.x*k.y;}',
              i: ['u26', 'u27', 'u3', 'u28'].concat(g),
              j: Object.assign({ u3: 2 }, u),
            },
            s30: {
              g: 'uniform sampler2D u7,u6;varying vec2 vv0;void main(){vec4 a=texture2D(u7,vv0),b=texture2D(u6,vv0);gl_FragColor=a*b;}',
              i: ['u7', 'u6'],
              j: u,
              o: !0,
            },
            s31: {
              g: 'uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;void main(){gl_FragColor=texture2D(u3,vv0)+u4*texture2D(u1,vv0);}',
              i: A,
              j: K,
            },
            s32: {
              g:
                'uniform sampler2D u1,u3;uniform vec2 u20;uniform float u4;varying vec2 vv0;void main(){gl_FragColor=texture2D(u3,vv0*u20)+u4*texture2D(u1,vv0);}',
              i: ['u20'].concat(A),
              j: K,
              o: !0,
            },
            s33: {
              g:
                'uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u3,vv0)+u4*texture2D(u1,vv0);vec2 h=mod(gl_FragCoord.xy,vec2(2.)),d=step(h,vec2(.75));float b=d.x+2.*d.y,c=step(2.5,b),g=(1.-c)*step(1.5,b),i=(1.-c)*(1.-g)*step(.5,b);a=mix(a,a.argb,i*e),a=mix(a,a.barg,g*e),a=mix(a,a.gbar,c*e),gl_FragColor=a;}',
              i: A,
              j: K,
              o: !0,
            },
            s34: {
              g:
                'uniform sampler2D u1,u3;uniform vec2 u20;uniform float u4;varying vec2 vv0;const vec4 e=vec4(1.);void main(){vec4 a=texture2D(u3,vv0*u20)+u4*texture2D(u1,vv0);vec2 h=mod(gl_FragCoord.xy,vec2(2.)),d=step(h,vec2(.75));float b=d.x+2.*d.y,c=step(2.5,b),g=(1.-c)*step(1.5,b),i=(1.-c)*(1.-g)*step(.5,b);a=mix(a,a.argb,i*e),a=mix(a,a.barg,g*e),a=mix(a,a.gbar,c*e),gl_FragColor=a;}',
              i: ['u20'].concat(A),
              j: K,
              o: !0,
            },
            s35: {
              g:
                'uniform sampler2D u1,u3;uniform float u4;varying vec2 vv0;const vec4 h=vec4(1.);void main(){vec4 a=texture2D(u3,vv0)+u4*texture2D(u1,vv0);vec2 b=floor(gl_FragCoord.xy);vec3 d=b.x*vec3(1.)+vec3(0.,1.,2.);float c=mod(b.y,2.);vec4 f=vec4(c,(1.-c)*step(mod(d,vec3(3.)),vec3(.5)));mat4 g=mat4(a.rgba,a.gbar,a.barg,a.argb);gl_FragColor=g*f;}',
              i: A,
              j: K,
              o: !0,
            },
            s36: {
              g:
                'varying vec2 vv0;uniform sampler2D u1;const vec4 f=vec4(1.,1.,1.,1.),g=vec4(.299,.587,.114,0.);void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=dot(a,g)*f;}',
              i: r,
              j: C,
              precision: 'lowp',
            },
            s37: {
              g:
                'varying vec2 vv0;uniform sampler2D u1;uniform float u29;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u29)).rgb,c=texture2D(u1,vv0+vec2(u29,u29)).rgb,d=texture2D(u1,vv0+vec2(u29,0.)).rgb;gl_FragColor=vec4(dot(a,f),dot(b,f),dot(c,f),dot(d,f));}',
              i: ['u1', 'u29'],
              j: C,
              precision: 'lowp',
            },
            s38: {
              g:
                'varying vec2 vv0;uniform sampler2D u1;uniform float u29;const vec3 f=vec3(.299,.587,.114);void main(){vec3 a=texture2D(u1,vv0).rgb,b=texture2D(u1,vv0+vec2(0.,u29)).rgb,c=texture2D(u1,vv0+vec2(u29,u29)).rgb,d=texture2D(u1,vv0+vec2(u29,0.)).rgb;gl_FragColor=vec4(a.r,b.g,c.b,dot(d,f));}',
              i: ['u1', 'u29'],
              j: C,
              precision: 'lowp',
            },
            s39: {
              g:
                'varying vec2 vv0;uniform sampler2D u1,u2;uniform float u30;const vec4 f=vec4(1.,1.,1.,1.);void main(){vec4 a=vec4(0.);a-=texture2D(u1,vec2(vv0.x-u30,vv0.y-u30))*1.,a-=texture2D(u1,vec2(vv0.x-u30,vv0.y))*2.,a-=texture2D(u1,vec2(vv0.x-u30,vv0.y+u30))*1.,a+=texture2D(u1,vec2(vv0.x+u30,vv0.y-u30))*1.,a+=texture2D(u1,vec2(vv0.x+u30,vv0.y))*2.,a+=texture2D(u1,vec2(vv0.x+u30,vv0.y+u30))*1.;vec4 b=vec4(0.);b-=texture2D(u1,vec2(vv0.x-u30,vv0.y-u30))*1.,b-=texture2D(u1,vec2(vv0.x,vv0.y-u30))*2.,b-=texture2D(u1,vec2(vv0.x+u30,vv0.y-u30))*1.,b+=texture2D(u1,vec2(vv0.x-u30,vv0.y+u30))*1.,b+=texture2D(u1,vec2(vv0.x,vv0.y+u30))*2.,b+=texture2D(u1,vec2(vv0.x+u30,vv0.y+u30))*1.;vec3 c=sqrt(a.rgb*a.rgb+b.rgb*b.rgb);vec4 e=vec4(c,texture2D(u1,vv0).a),g=texture2D(u2,vv0);gl_FragColor=g.a*e.r*f;}',
              i: ['u1', 'u2', 'u30'],
              j: E,
              o: !0,
            },
            s40: {
              g:
                'varying vec2 vv0;uniform sampler2D u1,u2;uniform float u30;const vec4 j=vec4(1.,1.,1.,1.);const vec2 k=vec2(1.,1.);void main(){float h=0.;vec2 l=k*u30,a,b;float c,d,i=0.;for(float e=-4.;e<=4.;e+=1.)for(float f=-4.;f<=4.;f+=1.)a=vec2(e,f),c=length(a)/2.,d=exp(-c*c),b=vv0+l*a,h+=d*texture2D(u1,b).r,i+=d;vec4 m=texture2D(u2,vv0);gl_FragColor=m.a*(texture2D(u1,b).r-h/i)*j;}',
              i: ['u1', 'u2', 'u30'],
              j: E,
              o: !0,
            },
            s41: {
              g:
                'uniform sampler2D u5;uniform vec2 u14;varying vec2 vv0;vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}const vec2 g=vec2(.5,.5),h=vec2(1.,0.),i=vec2(0.,1.);void main(){vec2 a=vv0-u14*g;vec4 b=texture2D(u5,a),c=texture2D(u5,a+u14*h),d=texture2D(u5,a+u14*i),j=texture2D(u5,a+u14),k=e(b,c),l=e(d,j);gl_FragColor=e(k,l);}',
              i: ['u5', 'u14'],
              j: z,
            },
            s42: {
              g:
                'uniform sampler2D u5;uniform vec2 u14;varying vec2 vv0;const vec2 k=vec2(1.,0.),l=vec2(0.,1.),m=vec2(2.,0.),n=vec2(0.,2.);vec4 e(vec4 a,vec4 b){vec4 c=step(a,b);return mix(a,b,c);}vec4 f(vec2 a){vec4 b=texture2D(u5,a),c=texture2D(u5,a+u14*k),d=texture2D(u5,a+u14*l),g=texture2D(u5,a+u14),h=e(b,c),i=e(d,g);return e(h,i);}void main(){vec2 a=vv0+u14*vec2(-.55,-1.05);vec4 b=f(a),c=f(a+u14*m),d=f(a+u14*2.),g=f(a+u14*n),h=e(b,c),i=e(d,g);gl_FragColor=e(h,i);}',
              i: ['u5', 'u14'],
              j: z,
              o: !0,
            },
            s43: {
              g: 'uniform sampler2D u1;varying vec2 vv0;void main(){vec4 a=texture2D(u1,vv0);gl_FragColor=a*a;}',
              i: ['u1'],
              j: C,
              precision: 'lowp',
              o: !0,
            },
            s44: {
              g:
                'uniform sampler2D u1;uniform vec2 u14;varying vec2 vv0;const float e=15444.;void main(){vec4 a=1001./e*texture2D(u1,vv0-3.*u14)+2002./e*texture2D(u1,vv0-2.*u14)+3003./e*texture2D(u1,vv0-u14)+3432./e*texture2D(u1,vv0)+3003./e*texture2D(u1,vv0+u14)+2002./e*texture2D(u1,vv0+2.*u14)+1001./e*texture2D(u1,vv0+3.*u14);gl_FragColor=a;}',
              i: ['u14', 'u1'],
              j: C,
              precision: 'lowp',
              o: !0,
            },
            s45: {
              g:
                'uniform sampler2D u1,u16,u31;varying vec2 vv0;const vec4 f=vec4(1.,1.,1.,1.);const float g=.1;void main(){vec4 a=texture2D(u16,vv0),b=texture2D(u31,vv0),c=texture2D(u1,vv0),d=max(f*g,b-a*a),h=sqrt(d);gl_FragColor=(c-a)/h;}',
              i: ['u1', 'u16', 'u31'],
              j: { u1: 0, u16: 1, u31: 2 },
              o: !0,
            },
          },
          L = {
            s46: {
              g:
                'uniform float u8,u32;uniform sampler2D u7,u6,u3;varying vec2 vv0;const vec2 ZERO2=vec2(0.),ONE2=vec2(1.),HALF2=vec2(.5),EPS2=vec2(1e-5);void main(){vec4 sum=texture2D(u3,vv0);float toSparsity=1.1111;vec2 uvFrom,uvWeight,xyPatch=ZERO2,eps2=EPS2/u8,xyTo=floor(vv0*u8+eps2);float weightSize=toSparsity*u8;vec2 halfFromSparsity=ONE2*(toSparsity-1.)/2.;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.)xyPatch.y=patch_y,uvFrom=(xyTo+HALF2+u32*(xyPatch-halfFromSparsity))/u8,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),uvWeight=(xyTo*toSparsity+xyPatch+HALF2)/weightSize,sum+=texture2D(u7,uvWeight)*texture2D(u6,uvFrom);}gl_FragColor=sum,gl_FragColor*=2.2222;}',
              i: ['u8', 'u7', 'u6', 'u3', 'u32'],
              Nb: ['1.1111', 'gl_FragColor\\*=2.2222;'],
            },
            s47: {
              g:
                'uniform float u8,u32,u9;uniform sampler2D u7,u6,u3;varying vec2 vv0;const vec2 ZERO2=vec2(0.),ONE2=vec2(1.),HALF2=vec2(.5),EPS2=vec2(1e-4);void main(){vec4 sum=texture2D(u3,vv0);float fromSparsity=1.1111,shrinkFactor=3.3333;vec2 uvFrom,uvWeight,xyFrom,xyPatchTo,xyPatch=ZERO2,xyShrink=ZERO2,eps2=EPS2/u9,xyTo=floor(vv0*u8+eps2);float weightSize=fromSparsity*u9;vec2 halfFromSparsity=ONE2*(fromSparsity-1.)/2.;float toSparsity=weightSize/u8;vec2 xyFrom0=xyTo*shrinkFactor;for(float patch_x=0.;patch_x<1.1111;patch_x+=1.){xyPatch.x=patch_x;for(float patch_y=0.;patch_y<1.1111;patch_y+=1.){xyPatch.y=patch_y;for(float shrink_x=0.;shrink_x<3.3333;shrink_x+=1.){xyShrink.x=shrink_x;for(float shrink_y=0.;shrink_y<3.3333;shrink_y+=1.)xyShrink.y=shrink_y,xyFrom=xyFrom0+xyShrink+shrinkFactor*u32*(xyPatch-halfFromSparsity),uvFrom=(xyFrom+HALF2)/u9,uvFrom+=step(uvFrom,-eps2),uvFrom-=step(ONE2-eps2,uvFrom),xyPatchTo=xyPatch*shrinkFactor+xyShrink,uvWeight=(xyTo*toSparsity+xyPatchTo+HALF2)/weightSize,sum+=texture2D(u7,uvWeight)*texture2D(u6,uvFrom);}}}gl_FragColor=sum,gl_FragColor*=2.2222;}',
              i: 'u8 u9 u7 u6 u3 u32'.split(' '),
              Nb: ['1.1111', 'gl_FragColor\\*=2.2222;', '3.3333'],
            },
          },
          v = null,
          O = null,
          N = {
            Cb: function () {
              return y;
            },
            A: function () {
              if (!y) {
                v = ob.Zb(I, 2);
                O = ob.Zb(L, 2);
                x = 'highp';
                b.getShaderPrecisionFormat &&
                  (b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.MEDIUM_FLOAT), b.getShaderPrecisionFormat(b.FRAGMENT_SHADER, b.LOW_FLOAT));
                for (var e in v) h(b, v[e], e);
                D.set('s0');
                b.enableVertexAttribArray(0);
                y = !0;
              }
            },
            fb: function (e) {
              e.forEach(function (m) {
                N.$c(m);
              });
            },
            $c: function (e) {
              v[e.id] = e;
              h(b, e, e.id);
            },
            xf: function (e, m, H) {
              m || (m = e);
              v[m] = Object.create(O[e]);
              v[m].Df = !0;
              O[e].Nb &&
                O[e].Nb.forEach(function (M, P) {
                  var fa = '';
                  'gl_Frag' === M.substring(0, 7) ? ((M = new RegExp('[,;]?' + M, 'g')), (fa = ';')) : (M = new RegExp(M, 'g'));
                  v[m].g = v[m].g.replace(M, fa + H[P]);
                });
              h(b, v[m], m);
            },
            set: function (e) {
              var m = v[e];
              m.o && ((m.o = !1), h(b, m, e));
              k(m);
            },
            cb: function (e) {
              return p(e, q(), 's48');
            },
            Kc: function (e) {
              return p(e, { g: 'void main(){gl_FragColor=vec4(.5,.5,.5,.5);}', i: [], precision: x }, 's49');
            },
            Ze: function (e) {
              return 'undefined' === typeof v[e] ? !1 : v[e].ta;
            },
            R: function () {
              -1 !== l &&
                ((l = -1),
                t.Qa.forEach(function (e) {
                  0 !== e && b.disableVertexAttribArray(e);
                }));
            },
            Lc: function () {
              var e = 0;
              t.Qa.forEach(function (m, H) {
                H = t.Pa[H];
                b.vertexAttribPointer(m, H, b.FLOAT, !1, t.Tc, e);
                e += 4 * H;
              });
            },
            kd: function () {
              b.enableVertexAttribArray(0);
            },
            Ka: function () {
              N.Ob(b);
            },
            Ob: function (e) {
              e.vertexAttribPointer(t.Qa[0], 2, e.FLOAT, !1, 8, 0);
            },
            ii: function (e, m) {
              b.uniform1i(t.C[e], m);
            },
            I: function (e, m) {
              b.uniform1f(t.C[e], m);
            },
            V: function (e, m, H) {
              b.uniform2f(t.C[e], m, H);
            },
            fg: function (e, m) {
              b.uniform2fv(t.C[e], m);
            },
            gg: function (e, m) {
              b.uniform3fv(t.C[e], m);
            },
            ji: function (e, m, H, M) {
              b.uniform3f(t.C[e], m, H, M);
            },
            hg: function (e, m, H, M, P) {
              b.uniform4f(t.C[e], m, H, M, P);
            },
            le: function (e, m) {
              b.uniform4fv(t.C[e], m);
            },
            ki: function (e, m) {
              b.uniformMatrix2fv(t.C[e], !1, m);
            },
            li: function (e, m) {
              b.uniformMatrix3fv(t.C[e], !1, m);
            },
            mi: function (e, m) {
              b.uniformMatrix4fv(t.C[e], !1, m);
            },
            T: function (e, m) {
              N.set(e);
              m.forEach(function (H) {
                switch (H.type) {
                  case '4f':
                    b.uniform4fv(t.C[H.name], H.value);
                    break;
                  case '3f':
                    b.uniform3fv(t.C[H.name], H.value);
                    break;
                  case '2f':
                    b.uniform2fv(t.C[H.name], H.value);
                    break;
                  case '1f':
                    b.uniform1f(t.C[H.name], H.value);
                    break;
                  case '1i':
                    b.uniform1i(t.C[H.name], H.value);
                    break;
                  case 'mat2':
                    b.uniformMatrix2fv(t.C[H.name], !1, H.value);
                    break;
                  case 'mat3':
                    b.uniformMatrix3fv(t.C[H.name], !1, H.value);
                    break;
                  case 'mat4':
                    b.uniformMatrix4fv(t.C[H.name], !1, H.value);
                }
              });
            },
            xh: function () {
              return 'lowp';
            },
            m: function () {
              N.R();
              b.disableVertexAttribArray(0);
              for (var e in v) {
                var m = v[e];
                m.ta && ((m.ta = !1), b.deleteProgram(m.wa));
                m.Df && delete v[e];
              }
              n.forEach(function (H) {
                b.deleteShader(H);
              });
              n.splice(0);
              w = 0;
              y = !1;
              t = null;
              l = -1;
            },
          };
        return N;
      })(),
      b = null,
      Ha = (function () {
        function a(r) {
          console.log('ERROR in ContextFF: ', r);
          return !1;
        }
        function c() {
          return navigator.userAgent && -1 !== navigator.userAgent.indexOf('forceWebGL1');
        }
        function d(r, F, C) {
          r.setAttribute('width', F);
          r.setAttribute('height', C);
        }
        function h(r) {
          if (c()) return !1;
          var F = document.createElement('canvas');
          d(F, 5, 5);
          var C = null;
          try {
            C = F.getContext('webgl2', r);
          } catch (f) {
            return !1;
          }
          if (!C) return !1;
          k(C);
          Y.ld(C);
          r = Y.$b(C);
          if (!r.ka && !r.ma) return Aa.m(), Y.reset(), !1;
          C = Aa.ad(C, r);
          Aa.m();
          Y.reset();
          return C ? !0 : !1;
        }
        function k(r) {
          r.clearColor(0, 0, 0, 0);
          r.disable(r.DEPTH_TEST);
          r.disable(r.BLEND);
          r.disable(r.DITHER);
          r.disable(r.STENCIL_TEST);
          r.disable(r.CULL_FACE);
          r.GENERATE_MIPMAP_HINT && r.FASTEST && r.hint(r.GENERATE_MIPMAP_HINT, r.FASTEST);
          r.disable(r.SAMPLE_ALPHA_TO_COVERAGE);
          r.disable(r.SAMPLE_COVERAGE);
          r.depthFunc(r.LEQUAL);
          r.clearDepth(1);
        }
        var p = null,
          q = null,
          n = null,
          l = !0,
          t = null,
          w = null,
          y = [],
          x = {
            K: function () {
              return p.width;
            },
            W: function () {
              return p.height;
            },
            oh: function () {
              return p;
            },
            mh: function () {
              return b;
            },
            na: function () {
              return l;
            },
            flush: function () {
              b.flush();
            },
            vf: function () {
              sa.reset();
              sa.fa();
              x.Zf();
            },
            Zf: function () {
              aa.reset();
              Q.reset();
              D.R();
              D.kd();
              b.disable(b.DEPTH_TEST);
              b.disable(b.BLEND);
              Q.Ca();
              D.Ka();
            },
            ef: function () {
              t || (t = new Uint8Array(p.width * p.height * 4));
              b.readPixels(0, 0, p.width, p.height, b.RGBA, b.UNSIGNED_BYTE, t);
              return t;
            },
            qh: function () {
              return p.toDataURL('image/jpeg');
            },
            rh: function () {
              sa.M();
              q || ((q = document.createElement('canvas')), (n = q.getContext('2d')));
              d(q, p.width, p.height);
              for (var r = x.ef(), F = n.createImageData(q.width, q.height), C = q.width, f = q.height, E = F.data, K = 0; K < f; ++K)
                for (var A = f - K - 1, z = 0; z < C; ++z) {
                  var g = 4 * (K * C + z),
                    u = 4 * (A * C + z);
                  E[g] = r[u];
                  E[g + 1] = r[u + 1];
                  E[g + 2] = r[u + 2];
                  E[g + 3] = r[u + 3];
                }
              n.putImageData(F, 0, 0);
              return q.toDataURL('image/png');
            },
            ph: function (r) {
              !q && r && ((q = document.createElement('canvas')), (n = q.getContext('2d')));
              var F = r ? q : document.createElement('canvas');
              d(F, p.width, p.height);
              (r ? n : F.getContext('2d')).drawImage(p, 0, 0);
              return F;
            },
            A: function (r) {
              r = Object.assign(
                { la: null, zc: null, jb: null, fd: null, width: 512, height: 512, premultipliedAlpha: !1, Af: !0, antialias: !1, debug: !1, Og: !1 },
                r
              );
              r.la ? ((b = r.la), (p = r.la.canvas)) : r.fd && !r.jb ? (p = document.getElementById(r.fd)) : r.jb && (p = r.jb);
              p || (p = document.createElement('canvas'));
              p.width = r.width;
              p.height = r.height;
              if (b) l = b instanceof WebGL2RenderingContext;
              else {
                l = !0;
                var F = {
                  antialias: r.antialias,
                  alpha: !0,
                  preserveDrawingBuffer: !0,
                  premultipliedAlpha: r.premultipliedAlpha,
                  stencil: !1,
                  depth: r.Af,
                  failIfMajorPerformanceCaveat: !0,
                  powerPreference: 'high-performance',
                };
                navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf('noAntialiasing') && (F.antialias = !1);
                var C = h(F);
                C || !F.antialias || c() || ((F.antialias = !1), (C = h(F)));
                C && (b = p.getContext('webgl2', F));
                b ? (l = !0) : ((b = p.getContext('webgl', F)) || (b = p.getContext('experimental-webgl', F)), (l = !1));
              }
              if (!b) return a('WebGL1 and 2 are not enabled');
              r.zc && p.addEventListener && ((w = r.zc), p.addEventListener('webglcontextlost', w, !1));
              if (!Y.A()) return a('Not enough GL capabilities');
              k(b);
              D.A();
              Q.A();
              Aa.ad(b, Y.df());
              y.forEach(function (f) {
                f(b);
              });
              y.splice(0);
              return !0;
            },
            Cg: function () {
              return new Promise(function (r) {
                b ? r(b) : y.push(r);
              });
            },
            m: function () {
              b && (Y.m(), D.m(), Aa.m());
              w && (p.removeEventListener('webglcontextlost', w, !1), (w = null));
              b = t = n = q = p = null;
              y.splice(0);
            },
          };
        return x;
      })(),
      xa = (function () {
        function a() {
          null === c && ('undefined' !== typeof D ? (c = D) : 'undefined' !== typeof JEShaders && (c = JEShaders));
        }
        var c = null;
        return {
          reset: function () {
            c = null;
          },
          eg: function (d) {
            c !== d && (c && c.R(), (c = d));
          },
          Cb: function () {
            return c.Cb();
          },
          Ka: function () {
            return c.Ka();
          },
          Ob: function (d) {
            return c.Ob(d);
          },
          Lc: function () {
            return c.Lc();
          },
          R: function () {
            return c.R();
          },
          set: function (d) {
            a();
            return c.set(d);
          },
          cb: function (d) {
            a();
            return c.cb(d);
          },
          Kc: function (d) {
            a();
            return c.Kc(d);
          },
        };
      })(),
      za = (function () {
        function a(e) {
          b.bindTexture(b.TEXTURE_2D, e);
        }
        function c(e) {
          L[0] = e;
          e = v[0];
          var m = (e >> 16) & 32768,
            H = (e >> 12) & 2047,
            M = (e >> 23) & 255;
          return 103 > M
            ? m
            : 142 < M
            ? m | 31744 | ((255 == M ? 0 : 1) && e & 8388607)
            : 113 > M
            ? ((H |= 2048), m | ((H >> (114 - M)) + ((H >> (113 - M)) & 1)))
            : (m = (m | ((M - 112) << 10) | (H >> 1)) + (H & 1));
        }
        function d(e) {
          var m = new Uint16Array(e.length);
          e.forEach(function (H, M) {
            m[M] = c(H);
          });
          return m;
        }
        function h() {
          if (null !== O.mc) return O.mc;
          var e = p(d([0.5, 0.5, 0.5, 0.5]), !0);
          return null === e ? !0 : (O.mc = e);
        }
        function k() {
          if (null !== O.nc) return O.nc;
          var e = p(new Uint8Array([127, 127, 127, 127]), !1);
          return null === e ? !0 : (O.nc = e);
        }
        function p(e, m) {
          if (!xa.Cb() || !C) return null;
          var H = null,
            M = Math.sqrt(e.length / 4);
          try {
            var P = b.getError();
            if ('FUCKING_BIG_ERROR' === P) return !1;
            H = N.instance({ isFloat: !1, S: m, array: e, width: M });
            P = b.getError();
            if (P !== b.NO_ERROR) return !1;
          } catch (fa) {
            return !1;
          }
          oa.M();
          b.viewport(0, 0, M, M);
          b.clearColor(0, 0, 0, 0);
          b.clear(b.COLOR_BUFFER_BIT);
          xa.set('s0');
          H.Ba(0);
          ma.l(!0, !0);
          e = 4 * M * M;
          m = new Uint8Array(e);
          b.readPixels(0, 0, M, M, b.RGBA, b.UNSIGNED_BYTE, m);
          M = !0;
          for (P = 0; P < e; ++P) M = M && 3 > Math.abs(m[P] - 127);
          H.remove();
          oa.fa();
          return M;
        }
        var q = 0,
          n = null,
          l = 0,
          t = null,
          w = null,
          y = null,
          x = null,
          r = null,
          F = null,
          C = !1,
          f = [],
          E = {
            isFloat: !1,
            isPot: !0,
            isLinear: !1,
            isMipmap: !1,
            Jd: !1,
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
            J: null,
            lc: null,
            Cf: !1,
            S: !1,
            F: null,
            Gb: 4,
            tc: 0,
          },
          K = !1,
          A = null,
          z = null,
          g = [
            [1, 0, 0, 0],
            [0, 1, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 1],
          ],
          u = !1,
          I = !1,
          L = new Float32Array(1),
          v = new Int32Array(L.buffer),
          O = { mc: null, nc: null },
          N = {
            A: function () {
              C ||
                ((r = [b.RGBA, null, b.RGBA, b.RGBA]),
                (F = [b.RGBA, null, b.RGBA, b.RGBA]),
                (n = [b.TEXTURE0, b.TEXTURE1, b.TEXTURE2, b.TEXTURE3, b.TEXTURE4, b.TEXTURE5, b.TEXTURE6, b.TEXTURE7]),
                (u = 'undefined' !== typeof JEContext),
                (I = 'undefined' !== typeof Y),
                u && JEContext.Rh() && n.push(b.TEXTURE8, b.TEXTURE9),
                (t = [-1, -1, -1, -1, -1, -1, -1, -1]),
                (x = [b.UNSIGNED_BYTE, b.FLOAT, b.FLOAT]),
                (C = !0));
            },
            wf: function () {
              if (!w) {
                for (var e = new Float32Array(16384), m = 0; 16384 > m; ++m) e[m] = 2 * Math.random() - 1;
                w = {
                  random: N.instance({ isFloat: !0, isPot: !0, array: e, width: 64 }),
                  ue: N.instance({ isFloat: !1, isPot: !0, width: 1, array: new Uint8Array([0, 0, 0, 0]) }),
                };
              }
              N.ug();
            },
            je: function (e) {
              b.framebufferTexture2D(oa.jc(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, e, 0);
            },
            Gh: function () {
              return w.ue;
            },
            ug: function () {
              x[1] = Y.ic(b);
            },
            cg: function () {
              F = r = [b.RGBA, b.RGBA, b.RGBA, b.RGBA];
            },
            ce: function (e) {
              D.set('s1');
              oa.M();
              var m = e.K(),
                H = e.W();
              b.viewport(0, 0, m, H);
              e.h(0);
              ma.l(!1, !1);
            },
            Zh: function (e, m) {
              N.ce(e);
              b.readPixels(0, 0, e.K(), e.W(), b.RGBA, b.UNSIGNED_BYTE, m);
            },
            $h: function (e, m) {
              N.ce(e);
              return Y.Mb(0, 0, e.K(), e.W(), m);
            },
            td: function (e, m, H, M, P, fa, ua) {
              e.activeTexture(e.TEXTURE0);
              var Da = e.createTexture();
              e.bindTexture(e.TEXTURE_2D, Da);
              P = P instanceof Float32Array ? P : new Float32Array(P);
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
              e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
              e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, fa);
              e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, H, M, 0, e.RGBA, e.FLOAT, P);
              e.bindTexture(e.TEXTURE_2D, null);
              e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1);
              ua && (oa.fa(), D.cb(e));
              e.viewport(0, 0, H, M);
              e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, m, 0);
              e.bindTexture(e.TEXTURE_2D, Da);
              ua ? ma.l(!0, !0) : Q.qb(e);
              e.deleteTexture(Da);
              C && ((t[0] = -1), (y = null), (q = 0));
            },
            Vb: function (e) {
              e !== q && (b.activeTexture(n[e]), (q = e));
            },
            instance: function (e) {
              var m;
              function H() {
                T = void 0 !== B.J.videoWidth ? B.J.videoWidth : B.J.width;
                U = void 0 !== B.J.videoHeight ? B.J.videoHeight : B.J.height;
              }
              function M(G) {
                var R = b.getError();
                if ('FUCKING_BIG_ERROR' === R) return !1;
                b.texImage2D(b.TEXTURE_2D, 0, ka, ha, ia, G);
                R = b.getError();
                R !== b.NO_ERROR && ha !== b.RGBA && ((ha = b.RGBA), b.texImage2D(b.TEXTURE_2D, 0, ka, ha, ia, G));
                return !0;
              }
              function P() {
                if (!Eb) {
                  a(ra);
                  Ba && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, Ba);
                  B.isPot
                    ? (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, B.isMirrorX ? b.MIRRORED_REPEAT : b.REPEAT),
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, B.isMirrorY ? b.MIRRORED_REPEAT : b.REPEAT))
                    : (b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_S, b.CLAMP_TO_EDGE),
                      b.texParameteri(b.TEXTURE_2D, b.TEXTURE_WRAP_T, b.CLAMP_TO_EDGE));
                  B.isAnisotropicFiltering &&
                    'undefined' !== typeof JESETTINGS &&
                    b.texParameterf(b.TEXTURE_2D, JEContext.sh().TEXTURE_MAX_ANISOTROPY_EXT, JESETTINGS.yg);
                  b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, B.isLinear ? b.LINEAR : b.NEAREST);
                  var G = B.isMipmap && !Qa;
                  b.texParameteri(
                    b.TEXTURE_2D,
                    b.TEXTURE_MIN_FILTER,
                    B.Jd ? b.LINEAR_MIPMAP_LINEAR : B.isLinear ? (G ? b.NEAREST_MIPMAP_LINEAR : b.LINEAR) : G ? b.NEAREST_MIPMAP_NEAREST : b.NEAREST
                  );
                  ha = r[B.Gb - 1];
                  ka = F[B.Gb - 1];
                  ia = x[pb];
                  Y.na() &&
                    ((G = Y.gf()),
                    ha === b.RGBA && ia === b.FLOAT
                      ? B.isMipmap || B.isLinear
                        ? (ka = Aa.jf(b))
                        : Y.bd()
                        ? G && (ka = G)
                        : (ka = b.RGBA16F || b.RGBA)
                      : ha === b.RGB && ia === b.FLOAT && G && ((ka = G), (ha = b.RGBA)));
                  if ((B.S && !B.isFloat) || (B.isFloat && B.isMipmap && Aa.Hf())) (ka = Y.hf()), (ia = Y.ic(b));
                  B.tc && (cb = B.tc);
                  B.isSrgb && 4 === B.Gb && (ha = JEContext.Eh());
                  if (B.J) M(B.J);
                  else if (B.url) M(Ga);
                  else if (va) {
                    G = va;
                    try {
                      'FUCKING_BIG_ERROR' !== b.getError() &&
                        (b.texImage2D(b.TEXTURE_2D, 0, ka, T, U, 0, ha, ia, G),
                        b.getError() !== b.NO_ERROR &&
                          (b.texImage2D(b.TEXTURE_2D, 0, ka, T, U, 0, ha, ia, null),
                          b.getError() !== b.NO_ERROR && b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, T, U, 0, b.RGBA, b.UNSIGNED_BYTE, null)));
                    } catch (kc) {
                      b.texImage2D(b.TEXTURE_2D, 0, ka, T, U, 0, ha, ia, null);
                    }
                    B.isKeepArray || (va = null);
                  } else
                    (G = b.getError()),
                      'FUCKING_BIG_ERROR' !== G &&
                        (b.texImage2D(b.TEXTURE_2D, 0, ka, T, U, 0, ha, ia, null),
                        (G = b.getError()),
                        G !== b.NO_ERROR &&
                          ((ha = b.RGBA), B.S && ia !== b.FLOAT && ((ia = b.FLOAT), b.texImage2D(b.TEXTURE_2D, 0, ka, T, U, 0, ha, ia, null))));
                  if (B.isMipmap)
                    if (!Qa && ca) ca.sb(), (db = !0);
                    else if (Qa) {
                      G = Math.log2(Math.min(T, U));
                      Ra = Array(1 + G);
                      Ra[0] = ra;
                      for (var R = 1; R <= G; ++R) {
                        var la = Math.pow(2, R),
                          W = T / la;
                        la = U / la;
                        var La = b.createTexture();
                        a(La);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MIN_FILTER, b.NEAREST);
                        b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAG_FILTER, b.NEAREST);
                        b.texImage2D(b.TEXTURE_2D, 0, ka, W, la, 0, ha, ia, null);
                        a(null);
                        Ra[R] = La;
                      }
                      db = !0;
                    }
                  a(null);
                  t[q] = -1;
                  Ba && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                  Ua = !0;
                  B.F && ca && (B.F(ca), (B.F = null));
                }
              }
              function fa() {
                for (var G = T * U, R = 2 * G, la = 3 * G, W = 0; W < G; ++W)
                  (ya[0][W] = Va[W]), (ya[1][W] = Va[W + G]), (ya[2][W] = Va[W + R]), (ya[3][W] = Va[W + la]);
              }
              function ua() {
                var G = T * U * 4;
                Ea = [new Uint8Array(G), new Uint8Array(G), new Uint8Array(G), new Uint8Array(G)];
                ya = [new Float32Array(Ea[0].buffer), new Float32Array(Ea[1].buffer), new Float32Array(Ea[2].buffer), new Float32Array(Ea[3].buffer)];
                eb = new Uint8Array(4 * G);
                Va = new Float32Array(eb.buffer);
                Wa = !0;
              }
              function Da() {
                m = new Uint8Array(T * U * 4);
                Fb = new Float32Array(m.buffer);
                qb = !0;
              }
              var B = Object.assign({}, E, e),
                Xa = l++;
              null === B.isFlipY && (B.isFlipY = B.url ? !0 : !1);
              B.data &&
                ((B.array = 'string' === typeof B.data ? Nb(B.data) : B.isFloat ? new Float32Array(B.data) : new Uint8Array(B.data)),
                (B.isFlipY = !1));
              var pb = 0,
                Gb = B.J ? !0 : !1,
                Ya = null,
                rb = null,
                Hb = !1;
              B.S = B.S || B.isFloat;
              B.S && (pb = 1);
              !B.Cf && B.isFloat && I && !Y.bd() && (B.isFloat = !1);
              B.isFloat && (pb = 2);
              B.isAnisotropicFiltering && u && !JEContext.Kh() && (B.isAnisotropicFiltering = !1);
              var ra = B.lc || b.createTexture(),
                Ga = null,
                va = !1,
                T = 0,
                U = 0,
                Ua = !1,
                Eb = !1,
                Wa = !1,
                ya = null,
                Ea = null,
                eb = null,
                Va = null,
                ka = null,
                ha = null,
                ia = null,
                Ba = B.isFlipY,
                Yb = (e = B.S && B.isMipmap) && Aa.Ge(),
                Qa = e && !Yb ? !0 : !1,
                Ra = null,
                cb = -1,
                Ib = -1,
                db = !1;
              var qb = !1;
              var Fb = (m = null);
              B.width && ((T = B.width), (U = B.height ? B.height : T));
              var ca = {
                get: function () {
                  return ra;
                },
                K: function () {
                  return T;
                },
                W: function () {
                  return U;
                },
                Hh: function () {
                  return B.url;
                },
                Lh: function () {
                  return B.isFloat;
                },
                Nh: function () {
                  return B.S;
                },
                gi: function (G) {
                  ra = G;
                },
                Oh: function () {
                  return B.isLinear;
                },
                sb: function () {
                  b.generateMipmap(b.TEXTURE_2D);
                },
                De: function (G, R) {
                  Qa ? (G || (G = ca.xd()), N.Vb(R), a(Ra[G]), (t[R] = -1)) : ca.h(R);
                },
                xd: function () {
                  -1 === cb && (cb = Math.log2(T));
                  return cb;
                },
                ke: function (G) {
                  b.TEXTURE_MAX_LEVEL && b.texParameteri(b.TEXTURE_2D, b.TEXTURE_MAX_LEVEL, G);
                },
                bf: function (G) {
                  G || (G = ca.xd());
                  if (Qa) {
                    D.set('s12');
                    N.Vb(0);
                    for (var R = T, la = U, W = 1; W <= G; ++W)
                      (R /= 2),
                        (la /= 2),
                        D.V('u14', 0.25 / R, 0.25 / la),
                        b.viewport(0, 0, R, la),
                        a(Ra[W - 1]),
                        b.framebufferTexture2D(oa.jc(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, Ra[W], 0),
                        ma.l(!1, 1 === W);
                    t[0] = -1;
                  } else G !== Ib && ((Ib = G), ca.ke(G)), ca.sb();
                },
                hi: function (G) {
                  (Gb = !Wb.pg(G)) ? ((va = null), (B.J = G), H()) : (va = G);
                },
                h: function (G) {
                  if (!Ua) return !1;
                  N.Vb(G);
                  if (t[G] === Xa) return !1;
                  a(ra);
                  t[G] = Xa;
                  return !0;
                },
                Ba: function (G) {
                  b.activeTexture(n[G]);
                  q = G;
                  a(ra);
                  t[G] = Xa;
                },
                v: function () {
                  y = ca;
                  N.je(ra);
                },
                L: function () {
                  b.viewport(0, 0, T, U);
                  y = ca;
                  N.je(ra);
                },
                Rc: N.Rc,
                ie: function (G, R) {
                  T = G;
                  U = R;
                },
                resize: function (G, R) {
                  ca.ie(G, R);
                  P();
                },
                clone: function (G) {
                  G = N.instance({
                    width: T,
                    height: U,
                    S: B.S,
                    isFloat: B.isFloat,
                    isLinear: B.isLinear,
                    isMirrorY: B.isMirrorY,
                    isFlipY: G ? !Ba : Ba,
                    isPot: B.isPot,
                  });
                  xa.set('s0');
                  oa.fa();
                  G.L();
                  ca.h(0);
                  ma.l(!0, !0);
                  return G;
                },
                ig: function () {
                  b.viewport(0, 0, T, U);
                },
                remove: function () {
                  b.deleteTexture(ra);
                  Eb = !0;
                  f.splice(f.indexOf(ca), 1);
                  ca = null;
                },
                refresh: function () {
                  ca.Ba(0);
                  Ba && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                  Gb ? b.texImage2D(b.TEXTURE_2D, 0, ka, ha, ia, B.J) : b.texImage2D(b.TEXTURE_2D, 0, ka, T, U, 0, ha, ia, va);
                  Ba && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                },
                ae: function () {
                  Wa || ua();
                  b.readPixels(0, 0, T, 4 * U, b.RGBA, b.UNSIGNED_BYTE, eb);
                  fa();
                  return ya;
                },
                Wf: function () {
                  Wa || ua();
                  return Y.Mb(0, 0, T, 4 * U, eb).then(function () {
                    fa();
                    return ya;
                  });
                },
                Yf: function () {
                  qb || Da();
                  b.readPixels(0, 0, T, U, b.RGBA, b.UNSIGNED_BYTE, m);
                  return Fb;
                },
                Xf: function () {
                  qb || Da();
                  return Y.Mb(0, 0, T, U, m);
                },
                gd: function (G) {
                  oa.M();
                  D.set('s15');
                  ca.h(0);
                  if (G) b.viewport(0, 0, T, U), D.hg('u15', 0.25, 0.25, 0.25, 0.25), ma.l(!1, !0);
                  else for (G = 0; 4 > G; ++G) b.viewport(0, U * G, T, U), D.le('u15', g[G]), ma.l(!1, 0 === G);
                },
                Sb: function (G) {
                  var R = ia === x[0] && !k();
                  a(ra);
                  Ba && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                  R
                    ? (Hb ||
                        ((Ya = document.createElement('canvas')),
                        (Ya.width = T),
                        (Ya.height = U),
                        (rb = Ya.getContext('2d')),
                        rb.createImageData(T, U),
                        (Hb = !0)),
                      null.data.set(G),
                      rb.putImageData(null, 0, 0),
                      b.texImage2D(b.TEXTURE_2D, 0, ka, ha, ia, Ya))
                    : b.texImage2D(b.TEXTURE_2D, 0, ka, T, U, 0, ha, ia, G);
                  t[q] = Xa;
                  Ba && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                },
                ui: function (G, R) {
                  a(ra);
                  R && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !0);
                  b.texImage2D(b.TEXTURE_2D, 0, ka, ha, ia, G);
                  t[q] = Xa;
                  R && b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL, !1);
                },
                fi: function (G, R) {
                  var la = T * U,
                    W = 4 * la;
                  G = B.S ? (G ? 'RGBE' : 'JSON') : 'RGBA';
                  R && (G = R);
                  R = Y.na() && !1;
                  var La = null;
                  switch (G) {
                    case 'RGBE':
                      La = 's13';
                      break;
                    case 'JSON':
                      La = R ? 's0' : 's15';
                      break;
                    case 'RGBA':
                    case 'RGBAARRAY':
                      La = 's7';
                  }
                  Wa || ('RGBA' === G || 'RGBE' === G || 'RGBAARRAY' === G ? ((Ea = new Uint8Array(W)), (Wa = !0)) : 'JSON' !== G || R || ua());
                  oa.M();
                  D.set(La);
                  ca.h(0);
                  W = null;
                  if ('RGBA' === G || 'RGBE' === G || 'RGBAARRAY' === G) {
                    b.viewport(0, 0, T, U);
                    ma.l(!0, !0);
                    b.readPixels(0, 0, T, U, b.RGBA, b.UNSIGNED_BYTE, Ea);
                    if ('RGBAARRAY' === G) return { data: Ea };
                    K || ((A = document.createElement('canvas')), (z = A.getContext('2d')), (K = !0));
                    A.width = T;
                    A.height = U;
                    la = z.createImageData(T, U);
                    la.data.set(Ea);
                    z.putImageData(la, 0, 0);
                    W = A.toDataURL('image/png');
                  } else if ('JSON' === G)
                    if (R) (W = new Float32Array(la)), b.viewport(0, 0, T, U), ma.l(!0, !0), b.readPixels(0, 0, T, U, b.RGBA, b.FLOAT, W);
                    else {
                      for (W = 0; 4 > W; ++W) b.viewport(0, U * W, T, U), D.le('u15', g[W]), ma.l(!W, !W);
                      ca.ae();
                      W = Array(la);
                      for (R = 0; R < la; ++R) (W[4 * R] = ya[0][R]), (W[4 * R + 1] = ya[1][R]), (W[4 * R + 2] = ya[2][R]), (W[4 * R + 3] = ya[3][R]);
                    }
                  return { format: G, data: W, width: T, height: U, isMirrorY: B.isMirrorY, isFlipY: 'RGBA' === G ? B.isFlipY : !B.isFlipY };
                },
              };
              B.isMipmap && !Qa && Ua && !db && (ca.sb(), (db = !0));
              if (B.url)
                a(ra),
                  b.texImage2D(b.TEXTURE_2D, 0, b.RGBA, 1, 1, 0, b.RGBA, b.UNSIGNED_BYTE, null),
                  (Ga = new Image()),
                  (Ga.Ng = 'Anonymous'),
                  (Ga.crossOrigin = 'Anonymous'),
                  (Ga.src = B.url),
                  (Ga.onload = function () {
                    T = Ga.width;
                    U = Ga.height;
                    P();
                  });
              else if (B.J) {
                var Jb = function () {
                  H();
                  T ? P() : setTimeout(Jb, 1);
                };
                Jb();
              } else
                B.array
                  ? (B.S && !B.isFloat
                      ? B.array instanceof Uint16Array
                        ? ((va = B.array), P())
                        : h()
                        ? ((va = d(B.array)), P())
                        : (P(), N.td(b, ra, ca.K(), ca.W(), B.array, Ba, !0))
                      : ((va = B.isFloat
                          ? B.array instanceof Float32Array
                            ? B.array
                            : new Float32Array(B.array)
                          : B.array instanceof Uint8Array
                          ? B.array
                          : new Uint8Array(B.array)),
                        P()),
                    B.isKeepArray || (va && va !== B.array && (va = null), delete B.array))
                  : B.lc
                  ? (Ua = !0)
                  : P();
              ca.Ch = ca.K;
              B.F && Ua && (B.F(ca), (B.F = null));
              f.push(ca);
              return ca;
            },
            M: function (e) {
              e !== q && (b.activeTexture(n[e]), (q = e));
              t[e] = -1;
              a(null);
            },
            Bg: function (e) {
              w.random.h(e);
            },
            Rc: function () {
              y = null;
              b.framebufferTexture2D(oa.jc(), b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0);
            },
            reset: function () {
              0 !== q && b.activeTexture(n[0]);
              for (var e = 0; e < n.length; ++e) t[e] = -1;
              q = -1;
            },
            ci: function () {
              q = -1;
            },
            rg: function () {
              for (var e = 0; e < n.length; ++e) N.M(e);
            },
            ud: function () {
              w && (w.random.remove(), w.ue.remove());
            },
            ti: function (e, m) {
              if ('RGBA' === e.format || 'RGBE' === e.format) {
                var H = new Image();
                H.src = e.data;
                H.onload = function () {
                  N.instance({
                    isMirrorY: e.isMirrorY,
                    isFlipY: e.isFlipY,
                    isFloat: !1,
                    J: H,
                    F: function (M) {
                      if ('RGBA' === e.format) m(M);
                      else {
                        var P = e.width,
                          fa = e.height,
                          ua = N.instance({ isMirrorY: e.isMirrorY, isFloat: !0, width: P, height: fa, isFlipY: e.isFlipY });
                        oa.fa();
                        b.viewport(0, 0, P, fa);
                        D.set('s14');
                        ua.v();
                        M.h(0);
                        ma.l(!0, !0);
                        N.M(0);
                        m(ua);
                        Y.flush();
                        M.remove();
                      }
                    },
                  });
                };
              } else
                'JSON' === e.format
                  ? m(N.instance({ isFloat: !0, isFlipY: e.isFlipY, width: e.width, height: e.height, array: new Float32Array(e.data) }))
                  : m(!1);
            },
            Ne: d,
            m: function () {
              y && (sa.fa(), N.Rc(), sa.M());
              N.rg();
              f.slice(0).forEach(function (e) {
                e.remove();
              });
              f.splice(0);
              C = !1;
              l = 0;
              'undefined' !== typeof Aa && Aa.m();
              w = null;
            },
          };
        return N;
      })(),
      Sb = (function () {
        return {
          instance: function (a) {
            var c = [za.instance(a), za.instance(a)],
              d = [c[1], c[0]],
              h = d,
              k = {
                ag: function (p) {
                  h[1].v();
                  h[0].h(p);
                  k.pe();
                },
                bg: function (p) {
                  h[1].L();
                  h[0].h(p);
                  k.pe();
                },
                pe: function () {
                  h = h === c ? d : c;
                },
                refresh: function () {
                  h[0].refresh();
                  h[1].refresh();
                },
                h: function (p) {
                  h[0].h(p);
                },
                Ba: function (p) {
                  h[0].Ba(p);
                },
                Ag: function (p) {
                  h[1].h(p);
                },
                wh: function () {
                  return h[0];
                },
                Ah: function () {
                  return h[1];
                },
                Sb: function (p) {
                  h[0].Sb(p);
                  h[1].Sb(p);
                },
                remove: function () {
                  h[0].remove();
                  h[1].remove();
                  h = null;
                },
                sync: function () {
                  k.bg(0);
                  D.set('s0');
                  Q.l(!1, !1);
                },
              };
            return k;
          },
        };
      })(),
      ma = (function () {
        function a(l) {
          var t = { da: null, indices: null };
          t.da = l.createBuffer();
          l.bindBuffer(l.ARRAY_BUFFER, t.da);
          l.bufferData(l.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), l.STATIC_DRAW);
          t.indices = l.createBuffer();
          l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, t.indices);
          l.bufferData(l.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2]), l.STATIC_DRAW);
          return t;
        }
        var c = null,
          d = 0,
          h = !1,
          k = [],
          p = -2,
          q = -2,
          n = {
            reset: function () {
              q = p = -2;
            },
            A: function () {
              h || ((c = a(b)), n.Ca(), (h = !0));
            },
            instance: function (l) {
              var t = d++,
                w = l.indices ? l.indices.length : 0,
                y = 'undefined' === typeof l.mode ? b.STATIC_DRAW : l.mode,
                x = b.createBuffer();
              b.bindBuffer(b.ARRAY_BUFFER, x);
              b.bufferData(b.ARRAY_BUFFER, l.da instanceof Float32Array ? l.da : new Float32Array(l.da), y);
              p = t;
              var r = null,
                F = null,
                C = null;
              if (l.indices) {
                r = b.createBuffer();
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, r);
                var f = null;
                65536 > l.indices.length ? ((f = Uint16Array), (F = b.UNSIGNED_SHORT), (C = 2)) : ((f = Uint32Array), (F = b.UNSIGNED_INT), (C = 4));
                f = l.indices instanceof f ? l.indices : new f(l.indices);
                b.bufferData(b.ELEMENT_ARRAY_BUFFER, f, y);
                q = t;
              }
              var E = {
                Ee: function (K) {
                  p !== t && (b.bindBuffer(b.ARRAY_BUFFER, x), (p = t));
                  K && xa.Lc();
                },
                Be: function () {
                  q !== t && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, r), (q = t));
                },
                bind: function (K) {
                  E.Ee(K);
                  E.Be();
                },
                Rg: function () {
                  b.drawElements(b.TRIANGLES, w, F, 0);
                },
                Sg: function (K, A) {
                  b.drawElements(b.TRIANGLES, K, F, A * C);
                },
                remove: function () {
                  b.deleteBuffer(x);
                  l.indices && b.deleteBuffer(r);
                  E = null;
                },
              };
              k.push(E);
              return E;
            },
            Ca: function () {
              -1 !== p && (b.bindBuffer(b.ARRAY_BUFFER, c.da), (p = -1));
              -1 !== q && (b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, c.indices), (q = -1));
            },
            l: function (l, t) {
              l && ma.Ca();
              t && xa.Ka();
              b.drawElements(b.TRIANGLES, 3, b.UNSIGNED_SHORT, 0);
            },
            qb: function (l) {
              l = l || b;
              var t = a(l);
              l.bindBuffer(l.ARRAY_BUFFER, t.da);
              l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, t.indices);
              xa.Ob(l);
              l.clear(l.COLOR_BUFFER_BIT);
              l.drawElements(l.TRIANGLES, 3, l.UNSIGNED_SHORT, 0);
              l.flush();
              l.bindBuffer(l.ARRAY_BUFFER, null);
              l.bindBuffer(l.ELEMENT_ARRAY_BUFFER, null);
              l.deleteBuffer(t.da);
              l.deleteBuffer(t.indices);
              n.reset();
              h && (n.Ca(), xa.Ka());
            },
            ud: function () {
              var l = b,
                t = c;
              l.deleteBuffer(t.da);
              l.deleteBuffer(t.indices);
            },
            m: function () {
              n.ud();
              k.forEach(function (l) {
                l.remove();
              });
              b.bindBuffer(b.ARRAY_BUFFER, null);
              b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, null);
              n.reset();
              h = !1;
              k.splice(0);
              d = 0;
            },
          };
        return n;
      })(),
      oa = (function () {
        var a = null,
          c = null,
          d = null,
          h = !1,
          k = [],
          p = { H: -2, sd: 1 },
          q = {
            Cb: function () {
              return h;
            },
            A: function () {
              if (!h) {
                a = b.createFramebuffer();
                var n = Y.na();
                c = n && b.DRAW_FRAMEBUFFER ? b.DRAW_FRAMEBUFFER : b.FRAMEBUFFER;
                d = n && b.READ_FRAMEBUFFER ? b.READ_FRAMEBUFFER : b.FRAMEBUFFER;
                h = !0;
              }
            },
            th: function () {
              return c;
            },
            kf: function () {
              return d;
            },
            jc: function () {
              return b.FRAMEBUFFER;
            },
            Bh: function () {
              return p;
            },
            lh: function () {
              return a;
            },
            instance: function (n) {
              void 0 === n.Ed && (n.Ed = !1);
              var l = n.D ? n.D : null,
                t = n.width,
                w = void 0 !== n.height ? n.height : n.width,
                y = a,
                x = null,
                r = !1,
                F = !1,
                C = 0;
              l && ((t = t ? t : l.K()), (w = w ? w : l.W()));
              var f = {
                he: function () {
                  r || ((y = b.createFramebuffer()), (r = !0), (C = p.sd++));
                },
                we: function () {
                  f.he();
                  f.v();
                  x = b.createRenderbuffer();
                  b.bindRenderbuffer(b.RENDERBUFFER, x);
                  b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, t, w);
                  b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, x);
                  b.clearDepth(1);
                },
                bind: function (E, K) {
                  C !== p.H && (b.bindFramebuffer(c, y), (p.H = C));
                  l && l.v();
                  K && b.viewport(0, 0, t, w);
                  E && b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                },
                zg: function () {
                  C !== p.H && (b.bindFramebuffer(c, y), (p.H = C));
                },
                clear: function () {
                  b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
                },
                Jg: function () {
                  b.clear(b.COLOR_BUFFER_BIT);
                },
                Kg: function () {
                  b.clear(b.DEPTH_BUFFER_BIT);
                },
                ig: function () {
                  b.viewport(0, 0, t, w);
                },
                v: function () {
                  C !== p.H && (b.bindFramebuffer(c, y), (p.H = C));
                },
                rtt: function (E) {
                  l = E;
                  p.H !== C && (b.bindFramebuffer(b.FRAMEBUFFER, y), (p.H = C));
                  E.v();
                },
                M: function () {
                  b.bindFramebuffer(c, null);
                  p.H = -1;
                },
                resize: function (E, K) {
                  t = E;
                  w = K;
                  x && (b.bindRenderbuffer(b.RENDERBUFFER, x), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, t, w));
                },
                remove: function () {
                  y === a ||
                    F ||
                    (b.bindFramebuffer(c, y),
                    b.framebufferTexture2D(c, b.COLOR_ATTACHMENT0, b.TEXTURE_2D, null, 0),
                    x && b.framebufferRenderbuffer(c, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, null),
                    b.bindFramebuffer(c, null),
                    (p.H = -1),
                    b.deleteFramebuffer(y),
                    x && b.deleteRenderbuffer(x));
                  F = !0;
                },
              };
              n.Ed && f.we();
              k.push(f);
              return f;
            },
            M: function () {
              b.bindFramebuffer(c, null);
              p.H = -1;
            },
            sg: function () {
              b.bindFramebuffer(c, null);
              b.clear(b.COLOR_BUFFER_BIT | b.DEPTH_BUFFER_BIT);
              Y.me();
              p.H = -1;
            },
            reset: function () {
              p.H = -2;
            },
            fa: function () {
              0 !== p.H && (b.bindFramebuffer(c, a), (p.H = 0));
            },
            clear: function () {
              Y.me();
              b.clear(b.COLOR_BUFFER_BIT);
            },
            m: function () {
              q.M();
              k.forEach(function (n) {
                n.remove();
              });
              null !== a && (b.deleteFramebuffer(a), (a = null));
              q.reset();
              h = !1;
              k.splice(0);
              p.sd = 1;
            },
          };
        return q;
      })(),
      Y = (function () {
        function a() {
          n = 'undefined' === typeof Ha ? JEContext : Ha;
          l = !0;
        }
        function c(g, u, I) {
          for (var L = 0; L < u.length; ++L) {
            var v = I.getExtension(u[L] + '_' + g);
            if (v) return v;
          }
          return null;
        }
        function d() {
          null !== f.Rb && (clearTimeout(f.Rb), (f.Rb = null));
          f.Ha = !1;
        }
        function h(g) {
          if (0 === f.ra.length) {
            f.X = b.PIXEL_PACK_BUFFER;
            f.ra.splice(0);
            f.ub.splice(0);
            for (var u = 0; u < f.Ta; ++u) f.ra.push(b.createBuffer()), f.ub.push(-1);
            f.ja = 0;
            f.xc = 0;
          }
          b.bindBuffer(f.X, f.ra[f.ja]);
          g.byteLength !== f.ub[f.ja] && (b.bufferData(f.X, g.byteLength, b.STREAM_READ), (f.ub[f.ja] = g.byteLength));
          f.Ih = !0;
        }
        function k() {
          b.bindBuffer(f.X, null);
        }
        function p() {
          f.Fa.forEach(function (g) {
            b.deleteSync(g);
          });
          f.Fa.splice(0);
        }
        function q() {
          f.ja = (f.ja + 1) % f.Ta;
          ++f.xc;
        }
        var n = null,
          l = !1,
          t = { Gd: !1, Nc: null, Oc: null, Kd: !1, Gf: !1, Pc: null, Ld: !1, Qc: null, Hd: !1, Xb: null, yf: !1, Yb: null, zf: !1 },
          w = null,
          y = { ka: !0, ma: !0, hc: !0, $d: !1 },
          x = null,
          r = !0,
          F = null,
          C = null,
          f = { Oe: 1, Ta: -1, ja: 0, xc: 0, Ha: !1, ra: [], Fa: [], ub: [], X: null, Rb: null },
          E = 'EXT WEBGL OES MOZ_OES WEBKIT_OES KHR'.split(' '),
          K = ['OES', 'MOZ_OES', 'WEBKIT_OES'],
          A = 'undefined' === typeof window ? {} : window,
          z = {
            A: function () {
              if (l) return !0;
              z.reset();
              l || a();
              var g = b;
              if (!w.Gd) {
                w.Nc = z.od(g);
                A.GL_EXT_FLOAT = w.Nc;
                w.Kd = w.Nc ? !0 : !1;
                if (w.Kd || z.na()) (w.Oc = z.pd(g)), (w.Gf = w.Oc ? !0 : !1), (A.GL_EXT_FLOATLINEAR = w.Oc);
                w.Gd = !0;
              }
              if (!w.Hd) {
                w.Pc = z.ob(g);
                w.Pc && ((w.Ld = !0), (A.GL_EXT_HALFFLOAT = w.Pc));
                if (w.Ld || z.na()) (w.Qc = z.qd(g)), (A.GL_EXT_HALFFLOATLINEAR = w.Qc);
                w.Jh = w.Qc ? !0 : !1;
                w.Hd = !0;
              }
              w.Xb = z.md(g);
              w.yf = w.Xb ? !0 : !1;
              A.GL_EXT_COLORBUFFERFLOAT = w.Xb;
              w.Yb = z.nd(g);
              w.zf = w.Yb ? !0 : !1;
              A.GL_EXT_COLORBUFFERHALFFLOAT = w.Yb;
              oa.A();
              za.A();
              if (!z.Qe()) return !1;
              ma.A();
              za.wf();
              return !0;
            },
            reset: function () {
              w = Object.assign({}, t);
              x = Object.assign({}, y);
            },
            K: function () {
              l || a();
              return n.K();
            },
            W: function () {
              l || a();
              return n.W();
            },
            na: function () {
              l || a();
              return n.na();
            },
            ld: function (g) {
              z.md(g);
              z.nd(g);
              z.od(g);
              z.pd(g);
              z.ob(g);
              z.qd(g);
            },
            md: c.bind(null, 'color_buffer_float', E),
            nd: c.bind(null, 'color_buffer_half_float', E),
            od: c.bind(null, 'texture_float', K),
            pd: c.bind(null, 'texture_float_linear', K),
            ob: c.bind(null, 'texture_half_float', K),
            qd: c.bind(null, 'texture_half_float_linear', K),
            ic: function (g) {
              var u = z.ob(g);
              return u && u.HALF_FLOAT_OES ? u.HALF_FLOAT_OES : g.HALF_FLOAT || g.FLOAT;
            },
            gf: function () {
              return C || b.RGBA32F || b.RGBA;
            },
            hf: function () {
              return F || b.RGBA16F || b.RGBA;
            },
            df: function () {
              return x;
            },
            bd: function () {
              return x.ka;
            },
            Eg: function () {
              return x.ma;
            },
            Dg: function () {
              return x.hc;
            },
            He: function () {
              return x.$d && r;
            },
            se: function (g) {
              r = g;
              !g && f.Ha && (p(), b.bindBuffer(f.X, null), (f.Ha = !1));
            },
            Ph: function () {
              return f.Ha;
            },
            Pb: function (g, u, I) {
              function L() {
                g.bindTexture(g.TEXTURE_2D, null);
                g.bindFramebuffer(v, null);
                g.deleteTexture(e);
                g.deleteFramebuffer(N);
              }
              var v = g.FRAMEBUFFER,
                O = g.NEAREST,
                N = g.createFramebuffer();
              g.bindFramebuffer(v, N);
              var e = g.createTexture();
              g.activeTexture(g.TEXTURE0);
              g.bindTexture(g.TEXTURE_2D, e);
              g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, !1);
              g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
              g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);
              g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, O);
              g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, O);
              g.texImage2D(g.TEXTURE_2D, 0, u, 3, 3, 0, g.RGBA, I, null);
              g.framebufferTexture2D(g.FRAMEBUFFER, g.COLOR_ATTACHMENT0, g.TEXTURE_2D, e, 0);
              if (g.checkFramebufferStatus(g.READ_FRAMEBUFFER || g.FRAMEBUFFER) !== g.FRAMEBUFFER_COMPLETE) return L(), !1;
              xa.Kc(g);
              g.clearColor(0, 0, 0, 0);
              g.viewport(0, 0, 3, 3);
              g.disable(g.DEPTH_TEST);
              g.clear(g.COLOR_BUFFER_BIT);
              ma.qb(g);
              g.bindFramebuffer(v, null);
              xa.cb(g);
              g.activeTexture(g.TEXTURE0);
              g.bindTexture(g.TEXTURE_2D, e);
              ma.qb(g);
              u = new Uint8Array(36);
              g.readPixels(0, 0, 3, 3, g.RGBA, g.UNSIGNED_BYTE, u);
              L();
              for (I = 0; 36 > I; ++I) if (3 !== I % 4 && 3 < Math.abs(u[I] - 127)) return !1;
              return !0;
            },
            $b: function (g) {
              var u = { ka: !1, ma: !1 };
              g.disable(g.BLEND);
              g.clearColor(0, 0, 0, 0);
              g.clear(g.COLOR_BUFFER_BIT);
              g.RGBA32F && z.Pb(g, g.RGBA32F, g.FLOAT) && ((u.ka = !0), (C = g.RGBA32F));
              !u.ka && z.Pb(g, g.RGBA, g.FLOAT) && ((u.ka = !0), (C = g.RGBA));
              var I = z.ic(g);
              F = null;
              g.RGBA16F && z.Pb(g, g.RGBA16F, I) && ((u.ma = !0), (F = g.RGBA16F));
              !u.ma && z.Pb(g, g.RGBA, I) && ((u.ma = !0), (F = g.RGBA));
              return u;
            },
            Re: function () {
              var g = oa.instance({ width: 2 });
              g.he();
              var u = za.instance({ width: 2, isFloat: !0, Gb: 3 });
              g.v();
              u.v();
              z.flush();
              b.checkFramebufferStatus(oa.kf()) !== b.FRAMEBUFFER_COMPLETE ? (za.cg(), (x.hc = !1)) : (x.hc = !0);
              g.remove();
              u.remove();
            },
            Se: function () {
              var g = !1;
              z.na() &&
                (g = 'PIXEL_PACK_BUFFER STREAM_READ SYNC_GPU_COMMANDS_COMPLETE WAIT_FAILED fenceSync deleteSync createBuffer'
                  .split(' ')
                  .every(function (u) {
                    return 'undefined' !== typeof b[u];
                  }));
              x.$d = g;
            },
            Qe: function () {
              var g = z.$b(b);
              Object.assign(x, g);
              if (!x.ka && !x.ma) return !1;
              z.Re();
              z.Se();
              return !0;
            },
            be: function (g, u, I, L, v) {
              b.readPixels(g, u, I, L, b.RGBA, b.UNSIGNED_BYTE, v);
              return Promise.resolve(v, !1);
            },
            Mb: function (g, u, I, L, v, O, N) {
              if (!z.He()) return z.be(g, u, I, L, v);
              f.Ta = N || f.Oe;
              h(v);
              b.readPixels(g, u, I, L, b.RGBA, b.UNSIGNED_BYTE, 0);
              f.Fa[f.ja] = b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE, 0);
              z.flush();
              var e = !1;
              return new Promise(function (m, H) {
                function M() {
                  if (!f.Ha) return d(), k(), q(), H(), !1;
                  var P = (f.ja + 1) % f.Ta;
                  switch (b.clientWaitSync(f.Fa[P], 0, 0)) {
                    case b.TIMEOUT_EXPIRED:
                    case b.WAIT_FAILED:
                      break;
                    default:
                      return (
                        d(), b.deleteSync(f.Fa[P]), (f.Fa[P] = null), b.bindBuffer(f.X, f.ra[P]), b.getBufferSubData(f.X, 0, v), k(), q(), m(v, e), !0
                      );
                  }
                  f.Rb = setTimeout(M, 0);
                  return !1;
                }
                d();
                f.xc + 1 < f.Ta ? (k(), q(), m(v, !1)) : ((f.Ha = !0), M() || !O || e || ((e = !0), O()));
              });
            },
            me: function () {
              b.viewport(0, 0, z.K(), z.W());
            },
            flush: function () {
              b.flush();
            },
            m: function () {
              d();
              p();
              za.m();
              oa.m();
              ma.m();
              f.ra.forEach(function (g) {
                b.deleteBuffer(g);
              });
              f.ra.splice(0);
              xa.reset();
              l = !1;
            },
          };
        return z;
      })(),
      Q = ma,
      sa = oa,
      aa = za,
      Aa = (function () {
        function a(g, u, I, L) {
          f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MIN_FILTER, L ? f.NEAREST_MIPMAP_NEAREST : f.LINEAR);
          var v = null;
          if (null !== I)
            try {
              v = f.getError();
              if ('FUCKING_BIG_ERROR' === v) return !1;
              f.texImage2D(f.TEXTURE_2D, 0, g, 4, 4, 0, f.RGBA, u, I);
              v = f.getError();
              if (v !== f.NO_ERROR) return !1;
            } catch (O) {
              return !1;
            }
          L && f.generateMipmap(f.TEXTURE_2D);
          f.clear(f.COLOR_BUFFER_BIT);
          Q.qb(f);
          v = f.getError();
          if ('FUCKING_BIG_ERROR' === v) return !1;
          f.readPixels(0, 0, 2, 2, f.RGBA, f.UNSIGNED_BYTE, w);
          v = f.getError();
          v === f.INVALID_OPERATION &&
            'undefined' !== typeof f.PIXEL_PACK_BUFFER &&
            (f.bindBuffer(f.PIXEL_PACK_BUFFER, null), f.readPixels(0, 0, 2, 2, f.RGBA, f.UNSIGNED_BYTE, w), (v = f.getError()));
          if (v !== f.NO_ERROR) return !1;
          I = !0;
          for (L = 0; 16 > L; ++L) I = I && 4 > Math.abs(w[L] - 127);
          I && ((l.Xd = u), (l.Dd = g));
          return I;
        }
        function c(g, u) {
          return E.ka && a(g, f.FLOAT, new Float32Array(y), u) ? ((n = q.Yc), !0) : !1;
        }
        function d(g, u, I) {
          if (!E.ma) return !1;
          var L = za.Ne(y),
            v = Y.ob(f);
          if ((v && v.HALF_FLOAT_OES && a(g, v.HALF_FLOAT_OES, L, u)) || (f.HALF_FLOAT && a(g, f.HALF_FLOAT, L, u))) return (n = q.Oa), !0;
          L = new Float32Array(y);
          if (a(g, f.FLOAT, L, u)) return (n = q.Oa), !0;
          f.bindTexture(f.TEXTURE_2D, I);
          f.texImage2D(f.TEXTURE_2D, 0, f.RGBA, 2, 2, 0, f.RGBA, f.UNSIGNED_BYTE, null);
          f.bindFramebuffer(l.lb, z);
          za.td(f, I, 2, 2, L, !1, !1);
          f.bindFramebuffer(l.lb, null);
          f.bindTexture(f.TEXTURE_2D, I);
          return a(g, null, null, u) ? ((n = q.Oa), !0) : !1;
        }
        function h(g, u, I) {
          t = !0;
          if (d(g, !0, I) || c(u, !0)) return !0;
          t = !1;
          return d(g, !1, I) || c(u, !1) ? !0 : !1;
        }
        function k(g) {
          if (n === q.R) {
            f = g || b;
            n = q.RGBA8;
            t = !0;
            Y.ld(f);
            E || (E = Y.$b(f));
            sa.reset();
            z = f.createFramebuffer();
            l.lb = f.DRAW_FRAMEBUFFER || f.FRAMEBUFFER;
            f.bindFramebuffer(l.lb, null);
            f.clearColor(0, 0, 0, 0);
            f.viewport(0, 0, 2, 2);
            D.R();
            K = D.cb(f);
            g = f.createTexture();
            f.activeTexture(f.TEXTURE0);
            f.bindTexture(f.TEXTURE_2D, g);
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_S, f.REPEAT);
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_WRAP_T, f.REPEAT);
            f.texParameteri(f.TEXTURE_2D, f.TEXTURE_MAG_FILTER, f.NEAREST);
            A = g;
            var u = (g = f.RGBA),
              I = f.RGBA16F,
              L = f.RGBA32F;
            L && (g = L);
            I && (u = I);
            if ((I || L) && h(u, g, A)) return p(), !0;
            g = u = f.RGBA;
            if (h(u, g, A)) return p(), !0;
            n = q.RGBA8;
            p();
            return !1;
          }
        }
        function p() {
          f.deleteProgram(K.wa);
          f.deleteTexture(A);
          A = K = null;
        }
        for (
          var q = { R: -1, Yc: 3, Oa: 2, RGBA8: 0 },
            n = q.R,
            l = { Xd: null, Dd: null, lb: null },
            t = !0,
            w = new Uint8Array(16),
            y = Array(64),
            x = 0;
          4 > x;
          ++x
        )
          for (var r = 0; 4 > r; ++r) {
            var F = 0 === (r + x) % 2 ? 1 : 0,
              C = 4 * x + r;
            y[4 * C] = F;
            y[4 * C + 1] = F;
            y[4 * C + 2] = F;
            y[4 * C + 3] = F;
          }
        var f = null,
          E = null,
          K = null,
          A = null,
          z = null;
        return {
          Ge: function (g) {
            k(g);
            return t;
          },
          ad: function (g, u) {
            n === q.R && (typeof ('undefined' !== u) && (E = u), k(g));
            return n !== q.RGBA8;
          },
          Mh: function (g) {
            k(g);
            return n === q.Yc;
          },
          Hf: function (g) {
            k(g);
            return n === q.Oa;
          },
          uh: function (g) {
            k(g);
            return l.Xd;
          },
          jf: function (g) {
            k(g);
            return l.Dd;
          },
          m: function () {
            f = null;
            t = !0;
            n = q.R;
            E = null;
          },
        };
      })(),
      Lb = (function () {
        return {
          instance: function (a) {
            function c() {
              x && x.remove();
              x = aa.instance({ isFloat: !1, isPot: !1, width: a.size * a.Y[0], height: a.size * a.Y[1] });
            }
            var d = null,
              h = !1,
              k = !1,
              p = null,
              q = !1,
              n = !1,
              l = null,
              t = 'undefined' === typeof a.preprocessing ? !1 : a.preprocessing,
              w = 'undefined' === typeof a.preprocessingSize ? a.size : a.preprocessingSize;
            a.mask && ((h = !0), ea && void 0 !== ea.Ae && (a.mask = ea.Ae + a.mask), (d = aa.instance({ isFloat: !1, url: a.mask })));
            var y = !1;
            a.customInputShader &&
              ((y = 's50'),
              D.$c({ name: '_', id: y, g: a.customInputShader, si: ['uSource'], precision: 'lowp' }),
              D.T(y, [{ type: '1i', name: '_', value: 0 }]));
            switch (t) {
              case 'sobel':
                l = 's39';
                q = !0;
                break;
              case 'meanNormalization':
                l = 's40';
                q = !0;
                break;
              case 'grayScale':
                l = 's36';
                q = !1;
                break;
              case 'grayScaleTilt':
                l = 's37';
                n = !0;
                q = !1;
                break;
              case 'rgbGrayTilt':
                l = 's38';
                n = !0;
                q = !1;
                break;
              case 'copy':
                l = y ? y : 's0';
                break;
              case 'inputLightRegulation':
                l = y ? y : 's36';
                p = Zb.instance({ Cd: w, Wd: a.size, Td: a.nBlurPass, Z: !1 });
                k = !0;
                break;
              case 'inputMix0':
                l = 'none';
                p = $b.instance({ u: w, pa: a.varianceMin, ga: a.blurKernelSizePx, gain: a.gain || 1, Z: !1 });
                k = !0;
                break;
              case 'inputMix1':
                l = 'none';
                p = ac.instance({ u: w, pa: a.varianceMin, ga: a.blurKernelSizePx, gain: a.gain || 1, Z: !1 });
                k = !0;
                break;
              case 'inputCut4':
                l = 'none';
                p = bc.instance({
                  u: w,
                  pa: a.varianceMin,
                  ga: a.blurKernelSizePx,
                  gain: a.gain || 1,
                  Za: a.isNormalized || !1,
                  Ec: a.overlap || 0,
                  Z: !1,
                });
                w *= p.lf();
                k = !0;
                break;
              case 'direct':
              case 'none':
              case 'abort':
                l = 'abort';
                break;
              default:
                l = 's4';
            }
            w = Math.ceil(w);
            n && D.T(l, [{ name: 'u29', type: '1f', value: a.tilt }]);
            h && (l += 'Mask');
            var x = null;
            c();
            var r = {
              K: function () {
                return a.size;
              },
              mf: function () {
                return w;
              },
              kc: function () {
                return r.K();
              },
              sf: function () {
                return k ? p.Wa() : x;
              },
              Tb: function (F) {
                a.Y = F;
                c();
              },
              U: function (F) {
                sa.fa();
                if ('abort' === l) return F.h(0), F;
                'none' !== l && (D.set(l), q && D.I('u30', 1 / a.size), x.L(), h && d.h(1), Q.l(!1, !1), x.h(0), (F = x));
                k && p.process(F);
              },
              m: function () {
                x.remove();
                h && d.remove();
              },
            };
            return r;
          },
        };
      })(),
      Mb = (function () {
        return {
          instance: function (a) {
            function c() {
              if (z.La) {
                k.input && (k.input.remove(), k.xb.remove());
                var u = a.size * a.sparsity;
                A = Math.log(u / a.size) / Math.log(2);
                k.input = aa.instance({ isMipmap: !0, isFloat: !0, isPot: !0, width: u * a.Y[0], height: u * a.Y[1], tc: A });
                k.xb = aa.instance({ isFloat: !0, isPot: !0, width: a.size * a.Y[0], height: a.size * a.Y[1] });
              }
            }
            function d() {
              k.va && k.va.remove();
              k.va = aa.instance({ isFloat: !0, isPot: !q, isLinear: !q && n.isLinear, width: a.size * a.Y[0], height: a.size * a.Y[1] });
            }
            function h(u) {
              n.buffer.forEach(function (I, L) {
                n.results[L][0] = u[0][I];
                n.results[L][1] = u[1][I];
                n.results[L][2] = u[2][I];
                n.results[L][3] = u[3][I];
              });
              return n.results;
            }
            a.normalize = a.normalize || !1;
            var k = { input: null, bias: null, xb: null, va: null, Dc: null, Bc: null, Cc: null },
              p = null,
              q = !0,
              n = { type: 'undef', F: null, isLinear: !1, buffer: [], results: [], yb: !1 },
              l = -1,
              t = a.isReorganize ? a.isReorganize : !1,
              w = a.kernelsCount ? !0 : !1,
              y = [a.Ya ? 's32' : 's31', a.Ya ? 's34' : 's33', 's35'][a.shiftRGBAMode || 0],
              x = { isEnabled: !1 },
              r = 1 / a.size;
            a.Ef
              ? ((a.sparsity = 'undefined' !== typeof a.sparsity ? a.sparsity : a.Kb.kc()), (q = !1))
              : 'full' === a.connectivityUp && (a.sparsity = a.Kb.kc());
            var F = { elu: 's19', elu01: 's20', relu: 's17', gelu: 's18', arctan: 's21', arctan2: 's22', sigmoid: 's16', copy: 's0' }[a.activation],
              C = a.sparsity * a.sparsity,
              f = !1,
              E = a.size,
              K = '';
            if (a.maxPooling) {
              switch (a.maxPooling.size) {
                case 2:
                  K = 's41';
                  break;
                case 4:
                  K = 's42';
              }
              f = !0;
              E /= a.maxPooling.size;
              k.Bc = aa.instance({ isFloat: !0, isPot: !1, width: E });
            }
            var A = -1,
              z = null;
            q && d();
            k.bias = aa.instance(a.bias);
            var g = {
              K: function () {
                return a.size;
              },
              kc: function () {
                return E;
              },
              vd: function () {
                return a.classesCount;
              },
              Ce: function (u) {
                p.h(u);
              },
              Tf: function () {
                a.remap &&
                  a.remap.isEnabled &&
                  (x = {
                    isEnabled: !0,
                    Lf: aa.instance(a.remap.maskTexture),
                    ab: a.remap.layers.map(function (u) {
                      return a.parent.qf(u);
                    }),
                    depth: a.remap.depth,
                  });
              },
              dg: function () {
                switch (a.connectivityUp) {
                  case 'direct':
                    z = cc.instance(a.connectivity);
                    break;
                  case 'square':
                    z = dc.instance(a.connectivity);
                    break;
                  case 'squareFast':
                    z = ec.instance(a.connectivity, a.activation);
                    break;
                  case 'full':
                    z = fc.instance(Object.assign({ Ya: a.Ya }, a.connectivity));
                    break;
                  case 'conv':
                    (l = a.kernelsCount),
                      (z = gc.instance(a.connectivity)),
                      t && (k.Dc = aa.instance({ width: E, isFloat: !0, isFlipY: !1, isPot: !1 }));
                }
                c();
              },
              U: function (u, I) {
                p = u;
                z.La
                  ? (k.input.L(),
                    w && k.bias.h(2),
                    z.U(x),
                    k.input.h(0),
                    k.input.bf(A),
                    k.xb.L(),
                    w ? D.set('s0') : (D.set(y), D.I('u4', C), k.bias.h(1)),
                    k.input.De(A, 0),
                    Q.l(!1, !1),
                    D.set(F),
                    k.va.v(),
                    k.xb.h(0),
                    Q.l(!1, !1))
                  : (k.va.L(), k.bias.h(1), z.U());
                if (q)
                  return (
                    (I = k.va),
                    f && (k.Bc.L(), I.h(0), D.set(K), D.V('u14', r, r), Q.l(!1, !1), (I = k.Bc)),
                    t && (k.Dc.v(), D.set('s24'), D.V('u18', l, E / l), I.h(0), Q.l(!1, !1), (I = k.Dc)),
                    I.h(0),
                    I
                  );
                var L = k.va;
                if (a.normalize || n.yb)
                  (u = a.normalize), D.set(n.yb ? 's9' : 's8'), D.I('u10', u ? r : 1), k.Cc.L(), L.h(0), Q.l(!1, !1), (L = k.Cc);
                u = null;
                switch (n.type) {
                  case 'cpuRGBA2Float':
                    L.gd(!1);
                    I ? (u = g.Uf(L).then(n.F)) : ((L = g.Vf(L)), n.F(L));
                    break;
                  case 'cpuMeanFloat':
                    L.gd(!0);
                    if (I) u = L.Xf().then(n.F);
                    else {
                      L = L.Yf();
                      for (var v = 0; v < L.length; ++v);
                      n.F(L);
                    }
                    break;
                  case 'gpuRawAvg':
                  case 'gpuRaw':
                    L.h(0);
                  case 'none':
                    null !== n.F && n.F(L);
                }
                I && null === u && (u = Promise.resolve());
                return u;
              },
              Tb: function (u) {
                a.Y = u;
                c();
                d();
              },
              kg: function (u) {
                u && ((n.type = u.Ib || 'none'), (n.F = u.Hb || null), (n.isLinear = u.Ac ? !0 : !1));
                d();
                u = 'undefined' !== typeof a.classesCount && a.classesCount ? a.classesCount : a.size * a.size;
                for (var I = 0, L = 0, v = 0; I < u; ++I)
                  n.buffer.push(L + (a.size - 1 - v) * a.size), n.results.push([-1, -1, -1, -1]), ++L, L === a.size && ((L = 0), ++v);
                n.yb = 'gpuRawAvg' === n.type || 'cpuMeanFloat' === n.type;
                if (a.normalize || n.yb) k.Cc = aa.instance({ isFloat: !0, isPot: !0, width: a.size });
              },
              Uf: function (u) {
                return u.Wf().then(h);
              },
              Vf: function (u) {
                u = u.ae();
                h(u);
                return n.results;
              },
              m: function () {
                for (var u in k) {
                  var I = k[u];
                  I && I.remove();
                }
                z && (z.m(), (z = null));
              },
            };
            a.Kb && g.dg(a.Kb);
            return g;
          },
        };
      })(),
      cc = (function () {
        return {
          instance: function (a) {
            var c = aa.instance(a.weights);
            return {
              La: !0,
              tb: function () {
                return 1;
              },
              m: function () {
                c.remove();
              },
              uf: function () {
                return c;
              },
              U: function () {
                D.set('s30');
                c.h(1);
                Q.l(!1, !1);
              },
            };
          },
        };
      })(),
      fc = (function () {
        return {
          instance: function (a) {
            var c = a.fromLayerSize,
              d = aa.instance(a.weights),
              h = a.Ya ? 's27' : 's26';
            return {
              La: !0,
              tb: function () {
                return c;
              },
              m: function () {
                d.remove();
              },
              U: function (k) {
                if (k.isEnabled) {
                  D.set('s28');
                  k.Lf.h(3);
                  for (var p = Math.min(k.ab.length, k.depth), q = 0; q < p; ++q) k.ab[q].Ce(4 + q);
                } else D.set(h);
                D.I('u8', a.toLayerSize);
                D.I('u9', a.fromLayerSize);
                d.h(1);
                Q.l(!1, !1);
              },
            };
          },
        };
      })(),
      dc = (function () {
        return {
          instance: function (a) {
            for (
              var c = a.fromLayerSize,
                d = a.toLayerSize,
                h = a.toSparsity,
                k = h * d,
                p = k / c,
                q = c / d,
                n = 0,
                l = 0,
                t = 0,
                w = Array(h * d * h * d * 4),
                y = Array(h * d * h * d * 4),
                x = Array(c * c),
                r = 0;
              r < x.length;
              ++r
            )
              x[r] = 0;
            r = Math.floor(h / 2);
            for (var F = 0.5 / d, C = 0.5 / c, f = 0.5 / k, E = 0; E < d; ++E)
              for (var K = Math.round(E * q), A = 0; A < d; ++A) {
                var z = Math.round(A * q),
                  g = E / d,
                  u = A / d;
                g += F;
                u += F;
                for (var I = 0; I < h; ++I) {
                  var L = K + I - r;
                  0 > L && (L += c);
                  L >= c && (L -= c);
                  for (var v = 0; v < h; ++v) {
                    var O = n / k,
                      N = l / k,
                      e = z + v - r;
                    0 > e && (e += c);
                    e >= c && (e -= c);
                    var m = L / c,
                      H = e / c;
                    N = 1 - N - 1 / k;
                    m += C;
                    H += C;
                    O += f;
                    N += f;
                    var M = E * h + I,
                      P = A * h + v;
                    P = d * h - P - 1;
                    M = P * d * h + M;
                    w[4 * M] = O;
                    w[4 * M + 1] = N;
                    w[4 * M + 2] = m;
                    w[4 * M + 3] = H;
                    H = x[e * c + L]++;
                    M = H % p;
                    m = L * p + M;
                    e = e * p + (H - M) / p;
                    e = c * p - 1 - e;
                    e = e * c * p + m;
                    y[4 * e] = O;
                    y[4 * e + 1] = N;
                    y[4 * e + 2] = g;
                    y[4 * e + 3] = u;
                    ++n >= k && ((n = 0), ++l);
                    ++t;
                  }
                }
              }
            x = null;
            var fa = aa.instance(a.weights);
            delete a.weights.data;
            var ua = aa.instance({ width: k, isFloat: !0, array: new Float32Array(y), isPot: !0 });
            y = null;
            var Da = aa.instance({ width: k, isFloat: !0, array: new Float32Array(w), isPot: !0 });
            w = null;
            return {
              La: !0,
              tb: function () {
                return p;
              },
              m: function () {
                ua.remove();
                Da.remove();
                fa.remove();
              },
              U: function () {
                D.set('s25');
                fa.h(1);
                Da.h(2);
                Q.l(!1, !1);
              },
            };
          },
        };
      })(),
      gc = (function () {
        return {
          instance: function (a) {
            var c = a.kernelsCount,
              d = a.toSparsity,
              h = (d * a.toLayerSize) / a.fromLayerSize,
              k = a.inputScale || [1, 1],
              p = aa.instance(a.weights);
            return {
              La: !0,
              tb: function () {
                return h;
              },
              Fh: function () {
                return d;
              },
              uf: function () {
                return p;
              },
              m: function () {
                p.remove();
              },
              U: function () {
                D.set('s29');
                D.fg('u28', k);
                D.I('u26', c);
                D.I('u27', d);
                D.I('u8', a.toLayerSize);
                D.I('u9', a.fromLayerSize);
                p.h(1);
                Q.l(!1, !1);
              },
            };
          },
        };
      })(),
      ec = (function () {
        return {
          instance: function (a, c) {
            var d = a.fromLayerSize,
              h = a.toLayerSize,
              k = a.toSparsity,
              p = a.stride ? a.stride : 1,
              q = (k * h) / d,
              n = h < d,
              l = d / h,
              t = aa.instance(a.weights),
              w = 's51' + [d.toString(), h.toString(), k.toString(), p.toString(), c].join('_');
            D.Ze(w) ||
              ((a = Xb.cf(c, 'gl_FragColor', 'gl_FragColor')),
              (h = [
                { type: '1f', name: 'u8', value: h },
                { type: '1f', name: 'u32', value: p },
              ]),
              n && h.push({ type: '1f', name: 'u9', value: d }),
              (d = [(n ? q : k).toFixed(1), a]),
              n && d.push(l.toFixed(1)),
              D.xf(n ? 's47' : 's46', w, d),
              D.T(
                w,
                h.concat([
                  { type: '1i', name: 'u6', value: 0 },
                  { type: '1i', name: 'u3', value: 1 },
                  { type: '1i', name: 'u7', value: 3 },
                ])
              ));
            return {
              La: !1,
              tb: function () {
                return q;
              },
              m: function () {
                t.remove();
              },
              U: function () {
                D.set(w);
                t.h(3);
                Q.l(!1, !1);
              },
            };
          },
        };
      })(),
      Zb = (function () {
        return {
          instance: function (a) {
            var c = a.Td ? a.Td : 3,
              d = a.Cd ? a.Cd : 64,
              h = a.Wd ? a.Wd : 64,
              k = a.Z ? !0 : !1;
            a = { isFloat: !1, width: d, isPot: !1, isFlipY: !1 };
            var p = aa.instance(a),
              q = aa.instance(a),
              n = aa.instance(a),
              l = aa.instance(a),
              t = aa.instance({ isFloat: !0, width: h, isPot: !1, isFlipY: !1 }),
              w = 1 / d;
            return {
              process: function (y) {
                D.set('s43');
                l.v();
                Q.l(k, !1);
                D.set('s44');
                for (var x = 0; x < c; ++x)
                  p.v(),
                    D.V('u14', w, 0),
                    Q.l(k, !1),
                    n.v(),
                    l.h(0),
                    Q.l(k, !1),
                    q.v(),
                    p.h(0),
                    D.V('u14', 0, w),
                    Q.l(k, !1),
                    l.v(),
                    n.h(0),
                    Q.l(k, !1),
                    x !== c - 1 && q.h(0);
                D.set('s45');
                t.v();
                y.h(0);
                q.h(1);
                l.h(2);
                Q.l(k, !1);
                t.h(0);
              },
              Wa: function () {
                return t;
              },
            };
          },
        };
      })(),
      $b = (function () {
        return {
          instance: function (a) {
            function c(w) {
              return aa.instance({ isFloat: w, width: d.u, isPot: !1, isFlipY: !1 });
            }
            var d = Object.assign({ pa: 0.1, ga: 9, u: 128, gain: 1, Z: !1 }, a),
              h = c(!1),
              k = [c(!1), c(!1), c(!1)],
              p = [c(!1), c(!1), c(!1)],
              q = c(!0),
              n = [h, p[0], p[1]];
            a = 'uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u33;varying vec2 vv0;void main(){float b=0.,c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u33*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).r,c+=f;}b/=c,gl_FragColor=vec4(b,0.,0.,1.);}'
              .replace('1.1111', Math.round((d.ga - 1) / 2).toFixed(2))
              .replace('2.2222', (1 / d.u).toFixed(6));
            var l = 'uniform sampler2D u34,u35,u36,u37;const float f=1.1111;const vec3 g=vec3(1.);const float h=2.2222;varying vec2 vv0;void main(){vec3 a=texture2D(u34,vv0).rgb;float c=texture2D(u35,vv0).r,d=texture2D(u36,vv0).r,i=texture2D(u37,vv0).r,j=a.r*a.r;vec3 b=vec3(c,d,i),k=max(g*f,abs(vec3(j)-b*b)),l=sqrt(k);gl_FragColor=vec4(a.r,h*(a-b)/l);}'
                .replace('1.1111', d.pa.toFixed(4))
                .replace('2.2222', d.gain.toFixed(4)),
              t = { u1: 0 };
            D.fb([
              {
                id: 's53',
                name: '_',
                g:
                  'uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.);void main(){vec3 b=texture2D(u1,vv0).rgb;float a=dot(b,f);gl_FragColor=vec4(a,a,a,a);}',
                j: t,
                i: ['u1'],
                precision: 'lowp',
              },
              { id: 's54', name: '_', g: a, j: t, i: ['u1', 'u33'], precision: 'lowp' },
              { id: 's55', name: '_', g: l, j: { u34: 0, u35: 1, u36: 2, u37: 3 }, i: ['u34', 'u35', 'u36', 'u37'], precision: 'highp' },
            ]);
            return {
              process: function () {
                D.set('s53');
                h.L();
                Q.l(d.Z, !1);
                D.set('s54');
                for (var w = 0; 3 > w; ++w) D.V('u33', 1, 0), k[w].v(), n[w].h(0), Q.l(!1, !1), D.V('u33', 0, 1), p[w].v(), k[w].h(0), Q.l(!1, !1);
                D.set('s55');
                q.v();
                h.h(0);
                p[0].h(1);
                p[1].h(2);
                p[2].h(3);
                Q.l(!1, !1);
                q.h(0);
              },
              Wa: function () {
                return q;
              },
            };
          },
        };
      })(),
      ac = (function () {
        return {
          instance: function (a) {
            function c(t) {
              return aa.instance({ isFloat: t, width: d.u, isPot: !1, isFlipY: !1 });
            }
            var d = Object.assign({ pa: 0.1, ga: 9, u: 128, gain: 1, Z: !1 }, a),
              h = c(!1),
              k = c(!1),
              p = c(!1),
              q = c(!0);
            a = 'uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u33;varying vec2 vv0;void main(){vec3 b=vec3(0.);float c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u33*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j).rgb,c+=f;}b/=c,gl_FragColor=vec4(b,1.);}'
              .replace('1.1111', Math.round((d.ga - 1) / 2).toFixed(2))
              .replace('2.2222', (1 / d.u).toFixed(6));
            var n = 'uniform sampler2D u0,u38;const float f=1.1111;const vec3 g=vec3(1.);const float h=2.2222;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0);vec3 c=texture2D(u38,vv0).rgb;float d=a.a*a.a;vec3 b=c.rgb,i=max(g*f,abs(vec3(d)-b*b)),j=sqrt(i);gl_FragColor=vec4(a.a,h*(a.rgb-b)/j);}'
                .replace('1.1111', d.pa.toFixed(4))
                .replace('2.2222', d.gain.toFixed(4)),
              l = { u1: 0 };
            D.fb([
              {
                id: 's56',
                name: '_',
                g:
                  'uniform sampler2D u1;varying vec2 vv0;const vec3 f=vec3(.2126,.7152,.0722),g=vec3(1.);void main(){vec3 a=texture2D(u1,vv0).rgb;float b=dot(a,f);gl_FragColor=vec4(a.rgb,b);}',
                j: l,
                i: ['u1'],
                precision: 'lowp',
              },
              { id: 's57', name: '_', g: a, j: l, i: ['u1', 'u33'], precision: 'lowp' },
              { id: 's58', name: '_', g: n, j: { u0: 0, u38: 1 }, i: ['u0', 'u38'], precision: 'highp' },
            ]);
            return {
              process: function () {
                D.set('s56');
                h.L();
                Q.l(d.Z, !1);
                D.set('s57');
                D.V('u33', 1, 0);
                k.v();
                h.h(0);
                Q.l(!1, !1);
                D.V('u33', 0, 1);
                p.v();
                k.h(0);
                Q.l(!1, !1);
                D.set('s58');
                q.v();
                h.h(0);
                p.h(1);
                Q.l(!1, !1);
                q.h(0);
              },
              Wa: function () {
                return q;
              },
            };
          },
        };
      })(),
      bc = (function () {
        return {
          instance: function (a) {
            function c(w) {
              return aa.instance({ isFloat: w, width: d.u, isPot: !1, isFlipY: !1 });
            }
            var d = Object.assign({ pa: 0.1, ga: 9, u: 128, gain: 1, Ec: 0, Za: !1, Z: !1 }, a),
              h = c(!1),
              k = null,
              p = null,
              q = null;
            d.Za && ((k = c(!1)), (p = c(!1)), (q = c(!0)));
            a = { u1: 0 };
            var n = [
              {
                id: 's59',
                name: '_',
                g: 'uniform sampler2D u1;const float f=1.1111;varying vec2 vv0;const vec3 e=vec3(.2126,.7152,.0722);void main(){vec2 a=vv0*.5*(f+1.);float b=.5*(1.-f),c=dot(texture2D(u1,a).rgb,e),d=dot(texture2D(u1,a+vec2(0.,b)).rgb,e),h=dot(texture2D(u1,a+vec2(b,0.)).rgb,e),i=dot(texture2D(u1,a+vec2(b,b)).rgb,e);gl_FragColor=vec4(c,d,h,i);}'.replace(
                  '1.1111',
                  d.Ec.toFixed(4)
                ),
                j: a,
                i: ['u1'],
                precision: 'lowp',
              },
            ];
            if (d.Za) {
              var l = 'uniform sampler2D u1;const float e=1.1111,g=2.2222;uniform vec2 u33;varying vec2 vv0;void main(){vec4 b=vec4(0.);float c=0.;for(float a=-e;a<=e;a+=1.){vec2 i=u33*a,j=vv0+i*g;float d=1.2*a/e,f=exp(-d*d);b+=f*texture2D(u1,j),c+=f;}gl_FragColor=b/c;}'
                  .replace('1.1111', Math.round((d.ga - 1) / 2).toFixed(2))
                  .replace('2.2222', (1 / d.u).toFixed(6)),
                t = 'uniform sampler2D u0,u38;const float f=1.1111;const vec4 g=vec4(1.);const float h=2.2222;varying vec2 vv0;void main(){vec4 a=texture2D(u0,vv0),c=texture2D(u38,vv0),d=a*a,b=c,i=max(g*f,abs(d-b*b)),j=sqrt(i);gl_FragColor=h*(a-b)/j;}'
                  .replace('1.1111', d.pa.toFixed(4))
                  .replace('2.2222', d.gain.toFixed(4));
              n.push(
                { id: 's60', name: '_', g: l, j: a, i: ['u1', 'u33'], precision: 'lowp' },
                { id: 's61', name: '_', g: t, j: { u0: 0, u38: 1 }, i: ['u0', 'u38'], precision: 'highp' }
              );
            }
            D.fb(n);
            return {
              process: function () {
                D.set('s59');
                h.L();
                Q.l(d.Z, !1);
                d.Za
                  ? (D.set('s60'),
                    D.V('u33', 1, 0),
                    k.v(),
                    h.h(0),
                    Q.l(!1, !1),
                    D.V('u33', 0, 1),
                    p.v(),
                    k.h(0),
                    Q.l(!1, !1),
                    D.set('s61'),
                    q.v(),
                    h.h(0),
                    p.h(1),
                    Q.l(!1, !1),
                    q.h(0))
                  : h.h(0);
              },
              lf: function () {
                return 2 - d.Ec;
              },
              Wa: function () {
                return d.Za ? q : h;
              },
            };
          },
        };
      })(),
      X = {
        Ad: function () {
          return X.ed() ? document.createElement('video') : !1;
        },
        Va: function (a, c) {
          a[c] = !0;
          a.setAttribute(c, 'true');
        },
        Ke: function () {
          var a = !1,
            c = navigator.userAgent || navigator.vendor || window.opera;
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              c
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              c.substr(0, 4)
            )
          )
            a = !0;
          return a;
        },
        Je: function () {
          return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        },
        If: function () {
          try {
            return window.matchMedia('(orientation: portrait)').matches ? !0 : !1;
          } catch (a) {
            return window.innerHeight > window.innerWidth;
          }
        },
        Gg: function () {
          return X.cd() || X.Je();
        },
        lg: function (a, c) {
          window.addEventListener(
            'beforeunload',
            function () {
              c &&
                c.getTracks &&
                c.getTracks().forEach(function (d) {
                  c.removeTrack(d);
                });
              a.videoStream && a.videoStream.stop();
              a.videoStream = null;
            },
            !1
          );
        },
        cd: function () {
          var a = navigator.userAgent.toLowerCase();
          return -1 !== a.indexOf('safari') && -1 === a.indexOf('chrome') ? !0 : !1;
        },
        hh: function () {
          return X.Ke() ? (X.If() ? (window.innerHeight / window.innerWidth) * 45 : 45) : 45;
        },
        ed: function () {
          return navigator.mediaDevices && navigator.mediaDevices.getUserMedia ? !0 : !1;
        },
        pause: function (a) {
          a.pause();
        },
        di: function (a) {
          a.play();
        },
        release: function (a) {
          a.pause();
          a.videoStream && a.videoStream.stop();
          a.videoStream = null;
        },
        dd: function (a) {
          if (!a) return a;
          var c = null;
          if (a.video) {
            var d = function (h) {
              return h && 'object' === typeof h ? Object.assign({}, h) : h;
            };
            c = {};
            'undefined' !== typeof a.video.width && (c.width = d(a.video.width));
            'undefined' !== typeof a.video.height && (c.height = d(a.video.height));
            'undefined' !== typeof a.video.facingMode && (c.facingMode = d(a.video.facingMode));
          }
          c = { audio: a.audio, video: c };
          'undefined' !== typeof a.deviceId && X.Zc(c, a.deviceId);
          return c;
        },
        Zc: function (a, c) {
          c && ((a.video = a.video || {}), (a.video.deviceId = { exact: c }), a.video.facingMode && delete a.video.facingMode);
        },
        qe: function (a) {
          var c = a.video.width;
          a.video.width = a.video.height;
          a.video.height = c;
          return a;
        },
        Pe: function (a) {
          function c(x) {
            return [480, 576, 640, 648, 720, 768, 800, 960, 1080, 1152, 1280, 1366, 1920].sort(function (r, F) {
              return Math.abs(r - x) - Math.abs(F - x);
            });
          }
          function d(x) {
            var r = X.dd(a);
            x = x(r);
            k.push(x);
            h(x);
          }
          function h(x) {
            if (x.video && x.video.facingMode && x.video.facingMode.exact) {
              var r = x.video.facingMode.exact;
              x = X.dd(x);
              delete x.video.facingMode.exact;
              x.video.facingMode.ideal = r;
              k.push(x);
            }
          }
          var k = [];
          if (!a || !a.video) return k;
          h(a);
          if (a.video.width && a.video.height) {
            if (a.video.width.ideal && a.video.height.ideal) {
              var p = c(a.video.width.ideal).slice(0, 3),
                q = c(a.video.height.ideal).slice(0, 3),
                n = {},
                l = 0;
              for (n.Aa = void 0; l < p.length; n = { Aa: n.Aa }, ++l) {
                n.Aa = p[l];
                var t = {},
                  w = 0;
                for (t.sa = void 0; w < q.length; t = { sa: t.sa }, ++w)
                  if (((t.sa = q[w]), n.Aa !== a.video.width.ideal || t.sa !== a.video.height.ideal)) {
                    var y = Math.max(n.Aa, t.sa) / Math.min(n.Aa, t.sa);
                    y < 4 / 3 - 0.1 ||
                      y > 16 / 9 + 0.1 ||
                      d(
                        (function (x, r) {
                          return function (F) {
                            F.video.width.ideal = x.Aa;
                            F.video.height.ideal = r.sa;
                            return F;
                          };
                        })(n, t)
                      );
                  }
              }
            }
            d(function (x) {
              return X.qe(x);
            });
          }
          a.video.width &&
            a.video.height &&
            (a.video.width.ideal &&
              a.video.height.ideal &&
              d(function (x) {
                delete x.video.width.ideal;
                delete x.video.height.ideal;
                return x;
              }),
            d(function (x) {
              delete x.video.width;
              delete x.video.height;
              return x;
            }));
          a.video.facingMode &&
            (d(function (x) {
              delete x.video.facingMode;
              return x;
            }),
            a.video.width &&
              a.video.height &&
              d(function (x) {
                X.qe(x);
                delete x.video.facingMode;
                return x;
              }));
          k.push({ audio: a.audio, video: !0 });
          return k;
        },
        Sd: function (a) {
          a.volume = 0;
          X.Va(a, 'muted');
          if (X.cd()) {
            if (1 === a.volume) {
              var c = function () {
                a.volume = 0;
                window.removeEventListener('mousemove', c, !1);
                window.removeEventListener('touchstart', c, !1);
              };
              window.addEventListener('mousemove', c, !1);
              window.addEventListener('touchstart', c, !1);
            }
            setTimeout(function () {
              a.volume = 0;
              X.Va(a, 'muted');
            }, 5);
          }
        },
        te: function (a, c, d) {
          return null === a
            ? Promise.resolve()
            : new Promise(function (h, k) {
                if (a.srcObject && a.srcObject.getVideoTracks) {
                  var p = a.srcObject.getVideoTracks();
                  1 !== p.length ? k('INVALID_TRACKNUMBER') : ((p = p[0]), c ? X.get(a, h, k, d) : (p.stop(), h()));
                } else k('BAD_IMPLEMENTATION');
              });
        },
        yd: function (a, c, d, h) {
          function k(q) {
            p || ((p = !0), d(q));
          }
          var p = !1;
          return navigator.mediaDevices
            .getUserMedia(h)
            .then(function (q) {
              function n() {
                setTimeout(function () {
                  if (a.currentTime) {
                    var t = a.videoHeight;
                    if (0 === a.videoWidth || 0 === t) k('VIDEO_NULLSIZE');
                    else {
                      t = { Ie: null, jg: null, Mf: null };
                      try {
                        var w = q.getVideoTracks()[0];
                        w && ((t.Mf = w), (t.Ie = w.getCapabilities()), (t.jg = w.getSettings()));
                      } catch (y) {}
                      p || (X.lg(a, q), c(a, q, t));
                    }
                  } else k('VIDEO_NOTSTARTED');
                }, 700);
              }
              function l() {
                a.removeEventListener('loadeddata', l, !1);
                var t = a.play();
                X.Sd(a);
                'undefined' === typeof t
                  ? n()
                  : t
                      .then(function () {
                        n();
                      })
                      .catch(function () {
                        k('VIDEO_PLAYPROMISEREJECTED');
                      });
              }
              'undefined' !== typeof a.srcObject ? (a.srcObject = q) : ((a.src = window.URL.createObjectURL(q)), (a.videoStream = q));
              X.Sd(a);
              a.addEventListener('loadeddata', l, !1);
            })
            .catch(function (q) {
              k(q);
            });
        },
        tf: function (a, c) {
          var d = c || X.Ad();
          return new Promise(function (h, k) {
            X.get(d, h, k, a);
          });
        },
        get: function (a, c, d, h) {
          if (!a) return d && d('VIDEO_NOT_PROVIDED'), !1;
          if (!X.ed()) return d && d('MEDIASTREAMAPI_NOT_FOUND'), !1;
          X.Va(a, 'autoplay');
          X.Va(a, 'playsinline');
          h && h.audio ? (a.volume = 0) : X.Va(a, 'muted');
          X.Me(h).then(function () {
            X.yd(
              a,
              c,
              function () {
                function k(q) {
                  if (0 === q.length) d('NO_VALID_MEDIASTREAM_FALLBACK_CONSTRAINTS');
                  else {
                    var n = q.shift();
                    X.yd(
                      a,
                      c,
                      function () {
                        k(q);
                      },
                      n
                    );
                  }
                }
                var p = X.Pe(h);
                k(p);
              },
              h
            );
          });
        },
        Me: function (a) {
          if (!a || !a.video || !a.video.facingMode) return Promise.resolve('NO_VIDEO_CONSTRAINTS');
          if (a.video.deviceId) return Promise.resolve('DEVICEID_ALREADY_SET');
          var c = a.video.facingMode;
          c = c.exact || c.ideal;
          if (!c) return Promise.resolve('NO_FACINGMODE');
          var d = { user: [], environment: ['camera2 0'] }[c];
          return d && 0 !== d.length
            ? new Promise(function (h) {
                X.zd(function (k) {
                  k
                    ? (k = k.find(function (p) {
                        var q = p.label;
                        return q
                          ? d.some(function (n) {
                              return q.includes(n);
                            })
                          : !1;
                      }))
                      ? ((a.video.deviceId = { exact: k.deviceId }), h('SUCCESS'))
                      : h('NO_PREFERRED_DEVICE_FOUND')
                    : h('NO_DEVICES_FOUND');
                });
              })
            : Promise.resolve('NO_PREFERRED_CAMERAS');
        },
        zd: function (a) {
          if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return a(!1, 'NOTSUPPORTED'), !1;
          navigator.mediaDevices
            .enumerateDevices()
            .then(function (c) {
              (c = c.filter(function (d) {
                return d.kind && -1 !== d.kind.toLowerCase().indexOf('video') && d.label && d.deviceId;
              })) &&
              c.length &&
              0 < c.length
                ? a(c, !1)
                : a(!1, 'NODEVICESFOUND');
            })
            .catch(function () {
              a(!1, 'PROMISEREJECTED');
            });
        },
        Fg: function (a, c, d) {
          var h = {};
          h[c] = d;
          c = [];
          c.push(h);
          a.applyConstraints({ advanced: c }).catch(function () {});
        },
      },
      qa = (function () {
        function a(C, f, E, K, A, z, g) {
          if (!r)
            if (g === z.length) A();
            else {
              switch (z[g]) {
                case 'A':
                  E();
                  break;
                case 'D':
                  C();
                  break;
                case 'S':
                  f()
                    .then(function (u, I) {
                      F.Qb();
                      a(C, f, E, I ? null : K, A, z, ++g);
                    })
                    .catch(function (u) {
                      console.log('An error occurred in the WebAR loop: ', u);
                      A();
                    });
                  return;
                case 'R':
                  K && K();
              }
              a(C, f, E, K, A, z, ++g);
            }
        }
        var c = { n: 5, wc: 1, Pd: 0, rb: [35, 49], mb: [2, 200], k: 0.7, tg: 200, Sf: 0.05 },
          d = -1,
          h = null,
          k = -1,
          p = -1,
          q = 0,
          n = -1,
          l = -1,
          t = 0,
          w = 0,
          y = c.mb[1],
          x = Math.log(2),
          r = !0,
          F = {
            rf: function () {
              switch (d) {
                case -1:
                  return -1;
                case 0:
                  return l + h.Pd;
                case 1:
                  return t;
              }
            },
            nh: function (C) {
              return Math.pow(Math.min(Math.max(n, 0), h.n - 1) / (h.n - 1), C || 1);
            },
            A: function (C) {
              h = Object.assign({}, c, C);
              n = l = h.wc;
              d = 0;
              F.reset();
            },
            Qb: function (C) {
              C = ('undefined' === typeof C ? Date.now() : C) || 0;
              var f = Math.min(Math.max(C - w, h.mb[0]), h.mb[1]);
              y = f;
              w = C;
              var E = -1 === k ? 0 : h.k;
              k = Math.min(Math.max(1e3 / f, 5), 120) * (1 - E) + k * E;
              C - p > h.tg &&
                5 < ++q &&
                ((f = h.k),
                (n = n * (1 - f) + (k < h.rb[0] ? l - 1 : k > h.rb[1] ? l + 1 : l) * f),
                Math.abs(n - l) > 1 - h.Sf &&
                  ((f = Math.min(Math.max(Math.round(n), 0), h.n - 1)), f !== l && ((n = l = f), (k = (h.rb[1] - h.rb[0]) / 2))),
                (p = C));
            },
            Fc: function (C, f, E, K, A, z) {
              r = !1;
              a(C, f, E, K, A, z, 0);
            },
            stop: function () {
              r = !0;
            },
            Ic: function (C) {
              t = C;
              d = 1;
            },
            Sc: function () {
              d = 0;
              F.reset();
            },
            reset: function () {
              y = c.mb[1];
              p = k = -1;
              q = 0;
            },
            ri: function (C, f, E) {
              E = Math.exp((-x * y) / E);
              return (1 - E) * C + E * f;
            },
            ff: function () {
              return y;
            },
          };
        return F;
      })(),
      Ma = (function () {
        function a() {
          d(C + r.uc);
          f.port.postMessage('DONE');
        }
        function c() {
          z.hb = 0 === r.gb ? K(d) : K(h);
        }
        function d(v) {
          A.Ia &&
            null !== F &&
            ((v -= C),
            (v = Math.min(Math.max(v, r.hd[0]), r.hd[1])),
            (C += v),
            p(),
            g.isEnabled && g.$a && A.$ && C - g.rc > r.Wc && (t(), (g.rc = C)),
            F(C));
        }
        function h(v) {
          A.Ia && (z.timeout = setTimeout(d.bind(null, v), r.gb));
        }
        function k() {
          F = null;
          A.Ia = !1;
          p();
        }
        function p() {
          z.hb && (window.cancelAnimationFrame(z.hb), (z.hb = null));
          z.timeout && (window.clearTimeout(z.timeout), (z.timeout = null));
        }
        function q(v) {
          v && !A.$
            ? ((A.$ = !0), E && qa.Sc(), f.port.postMessage('STOP'), Y.se(!0), c())
            : !v && A.$ && ((A.$ = !1), E && qa.Ic(1), Y.se(!1), f.port.postMessage('START'));
        }
        function n(v) {
          v.target.hidden ? I() : u();
        }
        function l(v, O, N) {
          O = v.createShader(O);
          v.shaderSource(O, N);
          v.compileShader(O);
          return O;
        }
        function t() {
          g.$a = !1;
          var v = g.la,
            O = g.vb,
            N = g.wb,
            e = g.X;
          v.uniform1f(g.Bd, Math.random());
          g.Ja ? O.beginQueryEXT(e, N) : v.beginQuery(e, N);
          v.drawElements(v.POINTS, 1, v.UNSIGNED_SHORT, 0);
          g.Ja ? O.endQueryEXT(e) : v.endQuery(e);
          Y.flush();
          y()
            .then(function (m) {
              0 === m || isNaN(m)
                ? ((g.isEnabled = !1), console.log('WARNING in benchmark_GPUClock: WebGL timer queries is not working properly. timeElapsedNs =', m))
                : ((m = (r.ve * r.Vc * 1e3) / m),
                  (g.Ub = (g.Ub + 1) % r.Ma),
                  (g.sc[g.Ub] = m),
                  ++g.Od > r.Ma &&
                    (g.Db.set(g.sc),
                    g.Db.sort(function (H, M) {
                      return H - M;
                    }),
                    (m = g.Db[Math.floor(r.Ma / 2)]),
                    (g.pb = Math.max(g.pb, m)),
                    r.Uc(m / g.pb)),
                  (g.$a = !0));
            })
            .catch(function () {
              g.$a = !0;
            });
        }
        function w(v) {
          var O = g.la,
            N = g.vb,
            e = g.wb;
          e = g.Ja ? N.kh(e, N.QUERY_RESULT_AVAILABLE_EXT) : O.getQueryParameter(e, O.QUERY_RESULT_AVAILABLE);
          O = O.getParameter(N.GPU_DISJOINT_EXT);
          e ? v(!O) : setTimeout(w.bind(null, v), 0.1);
        }
        function y() {
          return new Promise(function (v, O) {
            w(function (N) {
              if (N) {
                N = g.la;
                var e = g.vb,
                  m = g.wb;
                N = g.Ja ? e.getQueryObjectEXT(m, e.QUERY_RESULT_EXT) : N.getQueryParameter(m, N.QUERY_RESULT);
                v(N);
              } else O();
            });
          });
        }
        var x = { Id: !0, hd: [1, 200], uc: 20, gb: 0, Vc: 50, ve: 240, Wc: 3e3, Ma: 3, Uc: null },
          r = null,
          F = null,
          C = 0,
          f = null,
          E = !1,
          K = null,
          A = { ta: !1, $: !0, qc: !1, pc: !1, oc: !1, Ia: !1 },
          z = { hb: null, timeout: null },
          g = { isEnabled: !1, $a: !1, la: null, vb: null, wb: null, X: null, Bd: null, Ja: !0, rc: 0, Od: 0, sc: null, Db: null, Ub: 0, pb: 0 },
          u = q.bind(null, !0),
          I = q.bind(null, !1),
          L = {
            A: function (v) {
              r = Object.assign(x, v);
              Object.assign(A, { $: !0, ta: !0, Ia: !1 });
              K = window.requestPostAnimationFrame || window.requestAnimationFrame;
              if (null !== r.Uc) {
                v = document.createElement('canvas');
                v.setAttribute('width', '1');
                v.setAttribute('height', '1');
                var O = { antialias: !1 };
                v = v.getContext('webgl2', O) || v.getContext('webgl', O);
                if ((O = v.getExtension('EXT_disjoint_timer_query') || v.getExtension('EXT_disjoint_timer_query_webgl2'))) {
                  g.la = v;
                  g.vb = O;
                  g.isEnabled = !0;
                  g.Ja = O.beginQueryEXT ? !0 : !1;
                  var N = l(v, v.VERTEX_SHADER, 'attribute vec4 a0;void main(){gl_Position=a0;}'),
                    e = l(
                      v,
                      v.FRAGMENT_SHADER,
                      'precision lowp float;uniform float u39;void main(){vec4 a=u39*vec4(1.,2.,3.,4.);for(int b=0;b<666;b+=1)a=cos(a);gl_FragColor=a;}'.replace(
                        '666',
                        r.Vc.toString()
                      )
                    ),
                    m = v.createProgram();
                  v.attachShader(m, N);
                  v.attachShader(m, e);
                  v.linkProgram(m);
                  N = v.getAttribLocation(m, 'a0');
                  g.Bd = v.getUniformLocation(m, 'u39');
                  v.useProgram(m);
                  v.enableVertexAttribArray(N);
                  m = v.createBuffer();
                  v.bindBuffer(v.ARRAY_BUFFER, m);
                  v.bufferData(v.ARRAY_BUFFER, new Float32Array([0.5, 0.5, 0, 1]), v.STATIC_DRAW);
                  v.vertexAttribPointer(N, 4, v.FLOAT, !1, 16, 0);
                  m = v.createBuffer();
                  v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, m);
                  v.bufferData(v.ELEMENT_ARRAY_BUFFER, new Uint16Array([0]), v.STATIC_DRAW);
                  v.disable(v.DEPTH_TEST);
                  v.disable(v.DITHER);
                  v.disable(v.STENCIL_TEST);
                  v.viewport(0, 0, 1, 1);
                  m = g.Ja ? O.createQueryEXT() : v.createQuery();
                  g.wb = m;
                  g.X = O.TIME_ELAPSED_EXT || v.TIME_ELAPSED;
                  g.rc = -r.Wc;
                  g.sc = new Float32Array(r.Ma);
                  g.Db = new Float32Array(r.Ma);
                  g.pb = 0;
                  g.Ub = 0;
                  g.Od = 0;
                  g.$a = !0;
                }
              }
              if (r.Id) {
                v = !1;
                try {
                  if ('undefined' === typeof SharedWorker) {
                    var H = URL.createObjectURL(
                        new Blob(
                          [
                            "let handler = null;\n      self.addEventListener('message', function(e){\n        if (handler !== null){\n          clearTimeout(handler);\n          handler = null;\n        }\n        switch (e.data) {\n          case 'START':\n          case 'DONE':\n            handler = setTimeout(function(){\n              self.postMessage('TICK');\n            }, " +
                              r.uc.toString() +
                              ");\n            break;\n          case 'STOP':\n            break;\n        };\n      }, false);",
                          ],
                          { type: 'text/javascript' }
                        )
                      ),
                      M = new Worker(H);
                    M.addEventListener('message', a);
                    f = { Zd: M, port: M };
                    A.qc = !0;
                  } else {
                    var P = URL.createObjectURL(
                        new Blob(
                          [
                            "let handler = null;\n      onconnect = function(e) {\n        const port = e.ports[0];\n        port.addEventListener('message', function(e) {\n          \n          if (handler !== null){\n            clearTimeout(handler);\n            handler = null;\n          }\n          switch (e.data) {\n            case 'START':\n            case 'DONE':\n              handler = setTimeout(function(){\n                port.postMessage('TICK');\n              }, " +
                              r.uc.toString() +
                              ");\n              break;\n            case 'STOP':\n              break;\n          };\n          \n        });\n        \n        port.start();\n      } // end onconnect()",
                          ],
                          { type: 'text/javascript' }
                        )
                      ),
                      fa = new SharedWorker(P);
                    fa.port.start();
                    fa.port.addEventListener('message', a);
                    f = { Zd: fa, port: fa.port };
                    A.pc = !0;
                  }
                  v = !0;
                } catch (ua) {}
                v &&
                  ('onvisibilitychange' in document
                    ? document.addEventListener('visibilitychange', n)
                    : (window.addEventListener('blur', I), window.addEventListener('focus', u)),
                  window.addEventListener('pagehide', I),
                  window.addEventListener('pageshow', u),
                  (A.oc = !0));
              }
              E = 'undefined' !== typeof qa;
            },
            m: function () {
              k();
              A.oc &&
                ('onvisibilitychange' in document
                  ? document.removeEventListener('visibilitychange', n)
                  : (window.removeEventListener('blur', I), window.removeEventListener('focus', u)),
                window.removeEventListener('pagehide', I),
                window.removeEventListener('pageshow', u),
                (A.oc = !1));
              A.pc ? (f.port.close(), (A.pc = !1)) : A.qc && (f.Zd.terminate(), (A.qc = !1));
              Object.assign(A, { $: !0, ta: !1, Ia: !1 });
              F = null;
            },
            Sh: function () {
              return A.$;
            },
            update: function (v) {
              Object.assign(r, v);
            },
            Fc: function (v) {
              A.ta || L.A({});
              p();
              A.Ia = !0;
              F = v;
              A.$ && c();
            },
            stop: k,
          };
        return L;
      })(),
      Ta = (function () {
        function a(y, x) {
          var r = y[0] - 0.5;
          y = y[1] - 0.5;
          var F = x[0] - 0.5;
          x = x[1] - 0.5;
          return r * r + y * y - (F * F + x * x);
        }
        var c = { Vd: 4, Jb: [1.5, 1.5, 2], P: [0.1, 0.1, 0.1], de: 1, u: -1, N: -1, og: 2, Rf: 1, Hc: !0, Ve: 0.8 },
          d = null,
          h = [],
          k = [],
          p = [],
          q = [0],
          n = [0.5, 0.5, 1],
          l = null,
          t = 0,
          w = [0, 0, 0];
        return {
          A: function (y) {
            d = Object.assign({}, c, y);
            h.splice(0);
            k.splice(0);
            p.splice(0);
            t = 0;
            y = d.Jb[0] * d.P[0];
            var x = d.Jb[1] * d.P[1],
              r = 1 / (1 + d.Jb[2] * d.P[2]),
              F = d.de * Math.min(d.u, d.N),
              C = F / d.u;
            F /= d.N;
            var f = 0.5 * d.Ve;
            f *= f;
            for (var E = 0; E < d.Vd; ++E) {
              var K = [];
              k.push(K);
              var A = Math.pow(r, E),
                z = C * A,
                g = F * A;
              A = z * d.Rf;
              p.push(A);
              var u = z * y,
                I = g * x;
              z /= 2;
              g /= 2;
              for (var L = 1 + (1 - z - z) / u, v = 1 + (1 - g - g) / I, O = 0; O < v; ++O)
                for (var N = g + O * I, e = N - 0.5, m = 0; m < L; ++m) {
                  var H = z + m * u,
                    M = H - 0.5;
                  M * M + e * e > f || ((H = [H, N, A]), h.push(H), K.push(H));
                }
              d.Hc && K.sort(a);
              l = h;
            }
            d.Hc && h.sort(a);
          },
          get: function (y) {
            var x = l.length;
            if (0 === x) return n;
            for (; y >= q.length; ) q.push(0);
            q[y] >= x && (q[y] = 0);
            var r = l[Math.floor(q[y]) % x];
            q[y] = (q[y] + 1 / d.og) % x;
            if (0 === t) return r;
            w[0] = r[0];
            w[1] = r[1];
            w[2] = t;
            return w;
          },
          Yh: function (y) {
            y >= q.length || (q[y] = Math.floor(Math.random() * l.length));
          },
          Jc: function (y) {
            t = y;
            if (0 === t) l = h;
            else {
              for (var x = p.length, r = x - 1, F = 0; F < x; ++F)
                if (p[F] <= y) {
                  r = F;
                  break;
                }
              l = k[r];
            }
          },
          reset: function () {
            for (var y = h.length / q.length, x = 0; x < q.length; ++x) q[x] = Math.floor(x * y);
            t = 0;
            l = h;
          },
        };
      })(),
      da = (function () {
        function a(f, E, K, A) {
          return Math.max(0, K > f ? f + E / 2 - (K - A / 2) : K + A / 2 - (f - E / 2));
        }
        function c(f) {
          return !n.Fd(f);
        }
        function d(f, E, K) {
          for (var A = f.length; F.length < A; ) F.push({ oa: [0, 0], Eb: [0, 0], ia: [0, 0], xa: 0, scale: 0, Ua: 0, eb: 0 });
          A = f.length;
          for (var z = 0; z < A; ++z) {
            var g = f[z],
              u = F[z],
              I = E[z].rz,
              L = Math.cos(I),
              v = Math.sin(I);
            u.xa = I;
            u.Ua = L;
            u.eb = v;
            u.ia[0] = g.x;
            u.ia[1] = g.y / K;
            u.scale = g.ca;
            u.oa[0] = g.ca * n.jd[0];
            u.oa[1] = g.ca * n.jd[1];
            u.Eb[0] = u.oa[0] * u.oa[0];
            u.Eb[1] = u.oa[1] * u.oa[1];
          }
        }
        function h(f, E, K) {
          var A = Math.abs(-f.eb * (K - f.ia[1]) - f.Ua * (E - f.ia[0]));
          E = Math.abs(f.Ua * (K - f.ia[1]) - f.eb * (E - f.ia[0]));
          return 1 >= (A * A) / f.Eb[0] + (E * E) / f.Eb[1];
        }
        function k(f, E, K, A) {
          var z = f[K];
          d(f, E, A);
          var g = F[K];
          return f.some(function (u, I) {
            if (
              !(u = I === K || z.ua > u.ua || 3 > u.ua || !(0 < a(z.x, z.ca * r, u.x, u.ca * r)) || !(0 < a(z.y, z.ca * A * r, u.y, u.ca * A * r)))
            ) {
              u = F[I];
              g.scale > u.scale ? (I = g) : ((I = u), (u = g));
              for (var L = 0, v = 0, O = n.We, N = 0; N < O; ++N)
                for (var e = (((N + 0.5) / O) * 2 - 1) * u.oa[1], m = 0; m < O; ++m) {
                  var H = (((m + 0.5) / O) * 2 - 1) * u.oa[0],
                    M = u.ia[0] + (-e * u.eb + H * u.Ua);
                  H = u.ia[1] + (e * u.Ua + H * u.eb);
                  h(u, M, H) && (++L, h(I, M, H) && ++v);
                }
              u = v / L < n.Rd;
            }
            return u ? !1 : !0;
          });
        }
        function p(f) {
          return f.isDetected;
        }
        var q = { O: 1, Rd: 0.3, jd: [1, 1], We: 6, fe: 0.3, Fd: null, Ff: !0 },
          n = null,
          l = 0,
          t = null,
          w = !1,
          y = 0,
          x = 0,
          r = Math.sqrt(2),
          F = [],
          C = {
            A: function (f) {
              n = Object.assign({}, q, f);
              t = [0];
            },
            Nd: function () {
              return 1 !== n.O;
            },
            wd: function () {
              return l;
            },
            Md: function () {
              return w;
            },
            qa: function () {
              return n.O;
            },
            Dh: function () {
              return t;
            },
            Jf: function (f) {
              return t.includes(f);
            },
            update: function (f, E) {
              var K = t;
              if (K.length > f) K.splice(0, K.length - f);
              else for (; K.length < f; ) K.push(0);
              if (1 !== n.O)
                if (E.every(c)) {
                  E = y;
                  for (var A = 0; A < f; ++A) (K[A] = E), (E = (E + 1) % n.O);
                  y = E;
                } else {
                  A = Math.round(n.fe * f);
                  A = Math.max(1, A);
                  for (var z = y, g = 0, u = 0; g < f; ++g) {
                    if (c(E[z]) && ++u > A) {
                      do ++z === n.O && (z = 0);
                      while (c(E[z]));
                    }
                    K[g] = z;
                    z = (z + 1) % n.O;
                  }
                  y = z;
                }
            },
            Qb: function (f) {
              l = t[f];
              x = (0.5 + l) / n.O;
              w = t.lastIndexOf(l) === f;
              return l;
            },
            mg: function (f, E, K) {
              return 1 === n.O ? !1 : k(f, E, l, K);
            },
            re: function (f) {
              (n.Ff && 1 === n.O) || D.I(f, x);
            },
            af: function (f) {
              return f.find(p);
            },
            ih: function (f) {
              return f.findIndex(p);
            },
            gh: function (f) {
              var E = C.af(f);
              if (!E || f.every(p)) return Ta.Jc(0), !1;
              Ta.Jc(E.s);
              return !0;
            },
            Ue: function (f) {
              for (var E = new Float32Array(f.length * n.O), K = 0, A; K < n.O; ++K) for (A = 0; A < f.length; ++A) E[K * f.length + A] = f[A];
              return E;
            },
            fc: function (f) {
              for (var E = [], K = 0; K < n.O; ++K) {
                var A = E,
                  z = A.push,
                  g = void 0,
                  u = f,
                  I = {};
                for (g in u) {
                  var L = g;
                  var v = u[g];
                  var O = typeof v;
                  v = ['string', 'boolean', 'number'].includes(O)
                    ? v
                    : 'object' !== O
                    ? null
                    : ArrayBuffer.isView(v)
                    ? v.slice()
                    : JSON.parse(JSON.stringify(v));
                  I[L] = v;
                }
                z.call(A, I);
              }
              return E;
            },
          };
        return C;
      })(),
      yb = (function () {
        var a = { Bf: !0, isLinear: !0, vc: [4, 11] };
        return {
          Ye: function (c, d, h) {
            return d.isDetected
              ? Math.floor(d.s * c)
              : ((c = Math.floor(Math.log2(c / 4))), (c = Math.min(Math.max(c, 4), 9)), Math.max(h, Math.pow(2, c)));
          },
          instance: function (c) {
            var d = Object.assign({}, a, c),
              h = [],
              k = null,
              p = -1,
              q = null,
              n = !1;
            for (c = d.vc[0]; c <= d.vc[1]; ++c) h[c] = null;
            return {
              L: function (l, t) {
                t !== p && (k && k.remove(), (k = aa.instance({ isLinear: d.isLinear, isPot: !0, width: t })));
                if ((n = d.Bf && t < 0.5 * l)) {
                  l = Math.floor(Math.log2(l));
                  var w = d.vc;
                  l = Math.min(Math.max(l, w[0]), w[1]);
                  w = l;
                  if (!h[w]) {
                    var y = aa.instance({ isPot: !0, isMipmap: !0, Jd: !0, width: Math.pow(2, w) });
                    h[w] = { D: y, Qd: -1 };
                  }
                  l = h[l];
                  q = l.D;
                  l.Qd !== t && ((w = Math.log2(t)), q.h(0), q.ke(w), za.M(0), (l.Qd = t));
                } else q = k;
                p = t;
                q.L();
              },
              h: function (l) {
                q.h(l);
                n && q.sb();
              },
              Ba: function (l) {
                q.Ba(l);
              },
              remove: function () {
                k && k.remove();
                h.forEach(function (l) {
                  l && l.D.remove();
                });
              },
            };
          },
        };
      })(),
      ea = {
        neuralNetworkPath: 'NN_DEFAULT.json',
        ea: 0,
        $f: {
          threshold: 1.2,
          nScaleLevels: 2,
          scale0Factor: 0.8,
          nDetectsPerLoopRange: [2, 6],
          overlapFactors: [2, 2, 3],
          scanCenterFirst: !0,
          nDetectsPerLoop: -1,
          multiDetectionThresholdFactors: [0.5, 0.6],
          translationScalingFactors: [0.3, 0.3, 1],
          isCleanGLStateAtEachIteration: !0,
          enableAsyncReadPixels: !1,
          animateProcessOrder: 'DSAR',
        },
        qg: 50,
        Of: 0.4,
        Nf: 8,
        Pf: 0.3,
        ng: {
          translationFactorRange: [0.002, 0.01],
          rotationFactorRange: [0.015, 0.1],
          qualityFactorRange: [0.8, 0.98],
          alphaRange: [0.04, 1],
          followZRotAlphaFactor: 0.8,
        },
        bb: [0.65, 1, 0.262],
        xe: 0.2,
        ze: 2,
        ye: 0.1,
        Qf: 8,
        Ud: 1,
        $e: $a.Fb.bind(null, 0.3, 0.7),
        vg: 20,
        oe: 3,
      },
      pa = {
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
      ja = { yc: -3, Kf: -1, error: -2, ready: 1, play: 2, pause: 3 },
      na = ja.yc,
      J = null,
      hc = { Ab: !1, Mc: null, element: null, D: null, G: [0, 0], B: [0.5, 0, 0, 0.5], Lb: 0, Sa: null, zb: !1 },
      S = null,
      ic = { Ra: null, Wb: null, antialias: !0, Xc: './', Na: null, ha: null, ea: ea.ea, Yd: ea.ea, Bb: !1, Ea: !0 },
      Oa = null,
      ba = null,
      ta = null,
      Pa = 1,
      Na = { Gc: -1, ac: -1 },
      Z = null,
      jc = { u: 0, N: 0, G: [0, 0], Xa: null },
      V = { ya: null, buffer: null, P: null, bb: null, ba: ea.Ud, ee: 1, Da: null },
      Sa = null,
      Ca = null,
      jb = [],
      kb = [],
      sb = {
        VERSION: '3.3.4',
        init: function (a) {
          function c() {
            na !== ja.error &&
              2 === ++h &&
              (Ka(),
              Bb(),
              Ja(),
              S.Ra &&
                ((na = ja.ready),
                S.Ra(!1, {
                  GL: b,
                  canvasElement: S.ha,
                  videoTexture: J.D.get(),
                  videoTransformMat2: J.B,
                  maxFacesDetected: da.qa(),
                  videoElement: J.element,
                }),
                ib()),
              hb());
          }
          if (na !== ja.yc) return a.callbackReady && a.callbackReady('ALREADY_INITIALIZED'), !1;
          na = ja.Kf;
          J = Object.assign({}, hc);
          S = Object.assign({}, ic);
          Z = Object.assign({}, jc);
          V.bb = ea.bb.slice(0);
          'undefined' !== typeof a.antialias && (S.antialias = a.antialias);
          a.callbackReady && (S.Ra = a.callbackReady);
          a.callbackTrack && (S.Wb = a.callbackTrack);
          a.nExpressions && (V.ba = a.nExpressions);
          a.expressionsEasings && (V.Da = a.expressionsEasings);
          'undefined' !== typeof a.animateDelay && (S.ea = a.animateDelay);
          'undefined' !== typeof a.NNCPath && (S.Xc = a.NNCPath);
          'undefined' !== typeof a.NNC && (S.Na = a.NNC);
          'undefined' !== typeof a.followZRot && (S.Ea = a.followZRot ? !0 : !1);
          if (!a.canvasId && !a.canvas) return Ia('NO_CANVASID'), !1;
          S.ha = a.canvas ? a.canvas : document.getElementById(a.canvasId);
          if (!S.ha) return Ia('INVALID_CANVASID'), !1;
          Z.u = S.ha.width;
          Z.N = S.ha.height;
          if (!Z.u || !Z.N) return Ia('INVALID_CANVASDIMENSIONS'), !1;
          ba = Object.create(ea.$f);
          a.scanSettings && Object.assign(ba, a.scanSettings);
          var d = 1;
          'undefined' !== typeof a.maxFacesDetected && (d = Math.max(1, a.maxFacesDetected));
          if (d > ea.Nf) return Ia('MAXFACES_TOOHIGH'), !1;
          da.A({
            O: d,
            Rd: ea.Of,
            fe: ea.Pf,
            Fd: function (k) {
              return k.detected > ba.multiDetectionThresholdFactors[1] * ba.threshold;
            },
          });
          for (d = 0; d < da.qa(); ++d) jb.push(new Float32Array(ea.Qf)), kb.push(0);
          Ma.A({ Id: a.isKeepRunningOnWinFocusLost || !1, gb: S.ea });
          qa.A({ wc: 0, n: ba.nDetectsPerLoopRange[1] - ba.nDetectsPerLoopRange[0] + 1, Pd: ba.nDetectsPerLoopRange[0] });
          -1 !== ba.nDetectsPerLoop ? qa.Ic(ba.nDetectsPerLoop) : qa.Sc();
          V.P = ba.translationScalingFactors.slice(0);
          ta = Object.create(ea.ng);
          a.stabilizationSettings && Object.assign(ta, a.stabilizationSettings);
          var h = 0;
          a.videoSettings && a.videoSettings.videoElement
            ? bb(a.videoSettings.videoElement, c)
            : (a.videoSettings && Object.assign(pa, a.videoSettings),
              Db(a.onWebcamAsk, a.onWebcamGet, function (k) {
                bb(k, c);
              }));
          Tb(function (k) {
            if (!Ub()) return !1;
            Oa = new Kb({ ab: k.layers, Ib: 'gpuRawAvg', Hb: Vb });
            D.fb([
              {
                id: 's63',
                name: '_',
                za: 'attribute vec2 a0;uniform mat2 u40;varying vec2 vv0;void main(){gl_Position=vec4(a0,0.,1.),vv0=vec2(.5)+u40*a0;}',
                ib: ['a0'],
                Pa: [2],
                g: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
                i: ['u1', 'u40'],
                precision: 'lowp',
              },
              {
                id: 's64',
                name: '_',
                g: 'uniform sampler2D u1;varying vec2 vv0;void main(){gl_FragColor=texture2D(u1,vv0);}',
                za:
                  'attribute vec2 a0;uniform sampler2D u41;uniform mat2 u40;uniform vec2 u42;uniform float u43,u44,u45;varying vec2 vv0;void main(){vec4 a=texture2D(u41,vec2(.17,u43));vec2 f=a.gb,g=a.a*u42,b=a0;b.x*=u45;float c=cos(u44),d=sin(u44);vec2 h=mat2(c,d,-d,c)*b,i=f+h*.5*g,j=i-.5;vv0=vec2(.5)+2.*u40*j,gl_Position=vec4(a0,0.,1.);}',
                ib: ['a0'],
                Pa: [2],
                i: 'u1 u41 u42 u43 u44 u45 u40'.split(' '),
                precision: 'lowp',
              },
              {
                id: 's65',
                name: '_',
                g:
                  'uniform sampler2D u46,u41;uniform vec3 u47,u48;uniform float u49,u50,u43,u51,u44,u52;const vec4 e=vec4(.25);void main(){vec4 d=texture2D(u46,vec2(.625,.625)),f=texture2D(u46,vec2(.875,.625)),a=texture2D(u41,vec2(.17,u43));float g=dot(d-f,e);bool h=g>u50;a.r<-.5?a.r+=1.:h?a.r=2.:a.r>u49?a.r=0.:a.r>1.9?a.r+=1.:0.,a.r=mix(-2.,a.r,u51);if(a.r<.9)a=vec4(1.,u47);else{a.r*=step(1.9,a.r);float i=dot(e,texture2D(u46,vec2(.875,.875))),j=dot(e,texture2D(u46,vec2(.125,.625))),k=dot(e,texture2D(u46,vec2(.375,.625))),b=cos(u44),c=sin(u44);vec2 l=mat2(b,c*u52,-c/u52,b)*vec2(i,j);a.gba+=vec3(l,k)*u48*a.a;}gl_FragColor=a;}',
                za: 'attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}',
                i: 'u46 u41 u47 u49 u48 u51 u44 u52 u50 u43'.split(' '),
              },
              {
                id: 's66',
                name: '_',
                za: 'attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}',
                g:
                  'uniform sampler2D u46;uniform float u51;const vec4 e=vec4(.25);const vec3 f=vec3(.5);void main(){float a=dot(e,texture2D(u46,vec2(.125,.875))),b=dot(e,texture2D(u46,vec2(.375,.875))),c=dot(e,texture2D(u46,vec2(.625,.875))),d=dot(e,texture2D(u46,vec2(.625,.625)));vec3 g=vec3(a,b,c)*.5+f;gl_FragColor=vec4(g,d*u51);}',
                i: ['u46', 'u51'],
              },
              {
                id: 's67',
                name: '_',
                za: 'attribute vec2 a0;void main(){gl_Position=vec4(a0,0.,1.);}',
                g:
                  'uniform sampler2D u46;const vec4 e=vec4(.25);void main(){float a=dot(e,texture2D(u46,vec2(.375,.375))),b=dot(e,texture2D(u46,vec2(.625,.375))),c=dot(e,texture2D(u46,vec2(.875,.375))),d=dot(e,texture2D(u46,vec2(.125,.125)));gl_FragColor=vec4(a,b,c,d);}',
                i: ['u46'],
              },
              {
                id: 's62',
                name: '_',
                g:
                  'uniform sampler2D u41;uniform vec2 u53;uniform float u54;varying vec2 vv0;void main(){float f=step(.5,mod(gl_FragCoord.y+1.5,2.)),c=step(.33,vv0.x);vec4 a=texture2D(u41,vv0+u53);a.a=mix(a.a*u54,a.a,c);vec4 d=floor(255.*a),g=255.*(255.*a-d),b=mix(d,g,f)/255.;b.x=mix(step(a.x,1.5),b.x,c),gl_FragColor=b;}',
                i: ['u41', 'u54', 'u53'],
              },
            ]);
            zb();
            V.buffer = new Uint8Array(8 * ea.oe * da.qa());
            Sa = da.fc({ kb: 0, x: 0, y: 0, ca: 1, rx: 0, ry: 0, xa: 0, rd: new Float32Array(V.ba), ua: 0 });
            Ca = da.fc({ detected: 0, x: 0, y: 0, s: 1, xRaw: 0, yRaw: 0, sRaw: 1, rx: 0, ry: 0, rz: 0, expressions: new Float32Array(V.ba) });
            da.fc({ dx: 0, dy: 0, ec: 0, bc: 0, cc: 0, dc: 0 });
            mb();
            lb();
            c();
          });
          return !0;
        },
        destroy: function () {
          Ma.m();
          return new Promise(function (a) {
            sb.toggle_pause(!0, !0)
              .finally(function () {
                Oa && Oa.m();
                Ha.m();
                Oa = Ca = Sa = null;
                jb.splice(0);
                kb.splice(0);
                Z.Xa = null;
                V.ya = null;
                V.Da = null;
                J.D = null;
                na = ja.yc;
                a();
              })
              .catch(function () {});
          });
        },
        toggle_videoStream: function (a) {
          return J.zb || !J.element ? Promise.resolve() : X.te(J.element, a, J.Sa);
        },
        toggle_pause: function (a, c) {
          if (!Za()) return Promise.reject('NOT_READY');
          c = c ? sb.toggle_videoStream(!a) : Promise.resolve();
          a
            ? wb()
            : c.then(function () {
                hb();
              });
          return c;
        },
        update_videoSettings: function (a) {
          wb();
          return new Promise(function (c, d) {
            X.te(J.element, !1, J.Sa)
              .then(function () {
                Object.assign(pa, a);
                Db(null, null, function (h) {
                  bb(h, function () {
                    Ka();
                    Ja();
                    hb();
                    c();
                  });
                });
              })
              .catch(d);
          });
        },
        toggle_slow: function (a) {
          Za() &&
            na === ja.play &&
            (a && !S.Bb
              ? ((S.Yd = S.ea), (ba.nDetectsPerLoop = 1), this.set_animateDelay(ea.xg), (S.Bb = !0))
              : !a && S.Bb && ((ba.nDetectsPerLoop = -1), this.set_animateDelay(S.Yd), (S.Bb = !1)));
        },
        set_animateDelay: function (a) {
          S.ea = a;
          Ma.update({ gb: S.ea });
        },
        resize: function () {
          if (!Za()) return !1;
          var a = S.ha.width,
            c = S.ha.height;
          if (!nb() && a === Z.u && c === Z.N) return !1;
          Z.u = a;
          Z.N = c;
          D.R();
          mb();
          lb();
          Ka();
          Ja();
          return !0;
        },
        set_inputTexture: function (a, c, d) {
          J.G[0] = c;
          J.G[1] = d;
          J.D = aa.instance({ width: c, height: d, lc: a });
          J.Ab = !0;
          Ka();
          ib();
          Ja();
        },
        reset_GLState: function () {
          ib();
          Z.Xa.remove();
          V.ya.remove();
          zb();
        },
        render_video: function () {
          sa.M();
          D.set('s63');
          b.viewport(0, 0, Z.u, Z.N);
          J.D.h(0);
          Q.l(!0, !0);
        },
        reset_inputTexture: function () {
          J.Ab = !1;
          J.D = J.Mc;
          nb();
          Ka();
          Ja();
        },
        get_videoDevices: function (a) {
          return X.zd(a);
        },
        set_scanSettings: function (a) {
          Object.assign(ba, a);
          -1 !== ba.nDetectsPerLoop ? qa.Ic(ba.nDetectsPerLoop) : qa.Sc();
          mb();
          lb();
        },
        set_stabilizationSettings: function (a) {
          Object.assign(ta, a);
        },
        set_videoOrientation: function (a, c) {
          Za() && ((pa.flipX = c), (pa.rotate = a), Ka(), Ja());
        },
        update_videoElement: function (a, c) {
          bb(a ? a : J.element, function () {
            Bb();
            Ka();
            Ja();
            c && c();
          });
        },
        create_new: function () {
          return window.JEELIZFACEFILTERGEN();
        },
      };
    return sb;
  };
  window.JEELIZFACEFILTER = window.JEELIZFACEFILTERGEN();
  return JEELIZFACEFILTER || window.JEELIZFACEFILTER;
})();
