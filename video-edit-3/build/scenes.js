      // ---------- Vox-style explainer cut-ins (audio keeps running underneath) ----------
      function sceneIn(id, t) {
        var s = "#" + id;
        tl.fromTo(s + " .wipe", { clipPath: "inset(0% 0% 0% 100%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.3, ease: "power3.inOut" }, t);
        tl.fromTo(s + " .panel", { clipPath: "inset(0% 0% 0% 100%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.36, ease: "power3.inOut" }, t + 0.08);
        tl.fromTo(s + " .kick .rule", { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.out" }, t + 0.3);
        tl.fromTo(s + " .kick span:first-child", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" }, t + 0.3);
      }
      function sceneOut(id, end) {
        var s = "#" + id;
        tl.to(s + " .panel", { clipPath: "inset(0% 100% 0% 0%)", duration: 0.3, ease: "power3.inOut" }, end - 0.36);
        tl.to(s + " .wipe", { clipPath: "inset(0% 100% 0% 0%)", duration: 0.3, ease: "power3.inOut" }, end - 0.3);
      }
      function mark(sel, t) {
        tl.fromTo(sel + " .bar", { scaleX: 0 }, { scaleX: 1, duration: 0.35, ease: "power2.out" }, t);
      }
      function fadeUp(sel, t) {
        tl.fromTo(sel, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }, t);
      }
      function pop(sel, t, from) {
        tl.fromTo(sel, { opacity: 0, scale: from || 0.6 }, { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)" }, t);
      }
      function slam(sel, t, rot) {
        tl.fromTo(
          sel,
          { opacity: 0, scale: 2.1, rotation: rot - 6 },
          { opacity: 1, scale: 1, rotation: rot, duration: 0.2, ease: "power4.in" },
          t,
        );
        tl.fromTo(sel, { x: 0 }, { keyframes: [{ x: -8 }, { x: 6 }, { x: -3 }, { x: 0 }], duration: 0.24, ease: "none" }, t + 0.2);
      }

      function figMark(id, t) {
        tl.fromTo("#" + id + " circle", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.35, ease: "back.out(2.5)" }, t);
        tl.fromTo("#" + id + " line", { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "none" }, t + 0.1);
        tl.fromTo("#" + id + " .pulse", { scale: 1, opacity: 0.9 }, { scale: 2.2, opacity: 0, duration: 0.9, ease: "power2.out", repeat: 2 }, t + 0.35);
        pop("#" + id + "-l", t + 0.1, 0.7);
      }
      function chipIn(sel, t) {
        tl.fromTo(sel, { opacity: 0, y: 20, scale: 0.8 }, { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: "back.out(2.2)" }, t);
      }

      // IPU gauge — "the IPU masa tu is about 180, which is tahap tidak sihat"
      sceneIn("i", 19.6);
      fadeUp("#i .hd", 19.9);
      tl.fromTo("#i-arcs path", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none", stagger: 0.08 }, 20.3);
      tl.fromTo("#i-needle", { rotation: 0, svgOrigin: "540 960" }, { rotation: 108, duration: 1.8, ease: "elastic.out(1, 0.55)" }, 21.4);
      pop("#i-num", 23.2, 0.5);
      mark("#i-mk", 23.2);
      pop("#i-band", 25.4);
      pop("#i-band-lbl", 25.6, 0.7);
      sceneOut("i", 29.5);

      // Normal rain is slightly acidic
      sceneIn("r", 32.4);
      fadeUp("#r .hd", 32.7);
      mark("#r-mk", 36.4);
      tl.fromTo("#r-mark", { x: 440 - 452 + 100 }, { x: 0, duration: 1.4, ease: "power2.inOut" }, 37.1);
      pop("#r-ph56", 38.5);
      pop("#r-co2", 40.1);
      fadeUp("#r-op", 43.2);
      pop("#r-h2co3", 44.3);
      sceneOut("r", 45.5);

      // Haze → acid rain chain
      sceneIn("h", 45.6);
      fadeUp("#h .hd", 45.8);
      mark("#h-mk", 46.4);
      pop("#h-a .fchip", 47.2);
      fadeUp("#h-d1", 49.0);
      pop("#h-so2", 50.2);
      pop("#h-p1", 51.8, 0.4);
      pop("#h-nox", 52.1);
      fadeUp("#h-d2", 54.6);
      pop("#h-o2", 56.5);
      pop("#h-p2", 57.4, 0.4);
      pop("#h-h2o", 57.6);
      fadeUp("#h-d3", 58.9);
      pop("#h-sulf", 59.5);
      pop("#h-p3", 61.1, 0.4);
      pop("#h-nitr", 61.7);
      slam("#h-stamp", 63.9, -6);
      sceneOut("h", 67.0);

      // Rain catches PM2.5 on the way down
      sceneIn("p", 67.2);
      fadeUp("#p .hd", 67.5);
      mark("#p-mk", 71.4);
      tl.fromTo("#p .dot", { opacity: 0, scale: 0, transformOrigin: "50% 50%" }, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(2)", stagger: 0.05 }, 70.2);
      var FALL0 = 72.4, FALL = 2.4, Y0 = 560, Y1 = 990;
      [0, 1, 2, 3, 4].forEach(function (i) {
        var t0 = FALL0 + i * 0.22;
        tl.fromTo("#p-d" + i, { y: Y0, opacity: 0 }, { y: Y1, opacity: 1, duration: FALL, ease: "none" }, t0);
        [[0, 690], [1, 850]].forEach(function (d) {
          var attach = t0 + ((d[1] - Y0) / (Y1 - Y0)) * FALL;
          tl.to("#p-x" + i + d[0], { y: Y1 - d[1] + 6, duration: t0 + FALL - attach, ease: "none" }, attach);
        });
        tl.to("#p-d" + i, { scaleY: 0.35, scaleX: 1.6, opacity: 0, duration: 0.25, ease: "power2.out" }, t0 + FALL);
      });
      fadeUp("#p-face", 75.9);
      pop("#p-c1", 78.1);
      pop("#p-c2", 78.8);
      pop("#p-c3", 79.6);
      sceneOut("p", 81.0);

      // Skin is acidic; the real problem is the pollutant
      sceneIn("s", 82.2);
      fadeUp("#s .hd", 82.5);
      mark("#s-mk", 84.7);
      pop("#s-ph", 85.8);
      fadeUp("#s-l1", 88.3);
      tl.fromTo("#s-l1 .x", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.out" }, 89.7);
      fadeUp("#s-l2", 90.1);
      mark("#s-mk2", 90.3);
      pop("#s-c1", 93.5);
      pop("#s-c2", 94.6);
      pop("#s-c3", 95.4);
      pop("#s-c4", 96.5);
      sceneOut("s", 98.8);

      // Routine after getting home
      sceneIn("m", 99.6);
      fadeUp("#m .hd", 99.9);
      mark("#m-mk", 101.2);
      [["#m-1", 102.4], ["#m-2", 103.6], ["#m-3", 106.0]].forEach(function (p) {
        tl.fromTo(p[0], { opacity: 0, x: -40 }, { opacity: 1, x: 0, duration: 0.35, ease: "back.out(2)" }, p[1]);
      });
      fadeUp("#m-3s", 107.6);
      tl.fromTo("#m-st span", { opacity: 0, scale: 0.7, rotation: -4 }, { opacity: 1, scale: 1, rotation: -2, duration: 0.35, ease: "back.out(2.2)" }, 108.8);
      sceneOut("m", 111.0);

      // Over footage — "please protect your skin first"
      slam("#pro-in", 117.4, -5);
      tl.to("#pro", { opacity: 0, duration: 0.25, ease: "none" }, 119.9);
