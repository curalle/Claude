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

      // Scene 1 — 28–30 day renewal cycle
      sceneIn("s1", 18.0);
      fadeUp("#s1 .hd", 18.3);
      mark("#s1 .hd .mark", 19.2);
      tl.fromTo("#s1-ring", { strokeDashoffset: 1508 }, { strokeDashoffset: 0, duration: 4.9, ease: "power1.inOut" }, 21.9);
      pop("#s1-28", 21.9);
      pop("#s1-30", 23.1);
      pop("#s1-unit", 23.6, 0.8);
      fadeUp("#s1-note", 25.3);
      mark("#s1-note .mark", 26.8);
      sceneOut("s1", 27.6);

      // Scene 2 — cells form deep, rise, shed
      sceneIn("s2", 27.7);
      fadeUp("#s2-st1", 28.0);
      tl.fromTo("#s2-cells .cell", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.4, ease: "back.out(2.2)", stagger: 0.1 }, 30.5);
      mark("#s2-deep", 32.0);
      tl.to("#s2-st1", { opacity: 0, y: -20, duration: 0.2, ease: "power2.in" }, 33.9);
      fadeUp("#s2-st2", 34.1);
      tl.fromTo("#s2-arrow", { strokeDashoffset: 620 }, { strokeDashoffset: 0, duration: 2.6, ease: "power1.inOut" }, 34.3);
      tl.to("#s2-cells .cell", { y: -470, duration: 3, ease: "power1.inOut", stagger: 0.08 }, 35.4);
      tl.to("#s2-st2", { opacity: 0, y: -20, duration: 0.2, ease: "power2.in" }, 39.6);
      fadeUp("#s2-st3", 39.8);
      tl.to("#s2-cells .cell circle:first-child", { attr: { fill: "#bdb5a8" }, duration: 0.5, ease: "none" }, 42.2);
      tl.to("#s2-cells .nuc", { opacity: 0, duration: 0.5, ease: "none" }, 42.2);
      var DRIFT = [-50, 34, -26, 46, -38, 28];
      var SPIN = [-38, 24, -18, 40, -30, 20];
      tl.to(
        "#s2-cells .cell",
        {
          y: -760,
          x: function (i) { return DRIFT[i]; },
          rotation: function (i) { return SPIN[i]; },
          opacity: 0,
          duration: 1.5,
          ease: "power1.in",
          stagger: 0.12,
        },
        43.5,
      );
      tl.fromTo("#s2-fresh .cell", { scale: 0, transformOrigin: "50% 50%" }, { scale: 1, duration: 0.4, ease: "back.out(2.2)", stagger: 0.08 }, 44.6);
      sceneOut("s2", 46.6);

      // Over footage — "kena sabar"
      slam("#sabar-in", 53.25, -8);
      tl.to("#sabar-in", { opacity: 0, scale: 0.9, duration: 0.25, ease: "power2.in" }, 55.9);

      // Scene 3 — give a new product one full cycle
      sceneIn("s3", 60.8);
      fadeUp("#s3 .hd", 61.0);
      mark("#s3-mark", 61.2);
      fadeUp("#s3-min", 62.7);
      tl.fromTo("#s3-fill", { scaleX: 0, transformOrigin: "0% 50%" }, { scaleX: 1, duration: 4.2, ease: "none" }, 62.9);
      tl.fromTo("#s3-dot", { x: 0 }, { x: 800, duration: 4.2, ease: "none" }, 62.9);
      slam("#s3-stamp", 66.6, -6);
      fadeUp("#s3-res", 68.6);
      mark("#s3-res .mark", 69.2);
      sceneOut("s3", 70.6);

      // Scene 4 — gentle exfoliation reveals glowing new skin
      sceneIn("s4", 72.8);
      fadeUp("#s4 .hd", 73.0);
      fadeUp("#s4-deadlbl", 73.6);
      mark("#s4-mark", 74.4);
      tl.to("#s4-deadlbl", { opacity: 0, duration: 0.2, ease: "none" }, 75.3);
      fadeUp("#s4-exf", 75.5);
      var SWEEP_START = 75.5, SWEEP_DUR = 2.4, X0 = -140, X1 = 1220;
      tl.fromTo("#s4-sponge", { x: X0 }, { x: X1, duration: SWEEP_DUR, ease: "none" }, SWEEP_START);
      [140, 250, 360, 470, 580, 690, 800, 910].forEach(function (cx, i) {
        var t = SWEEP_START + ((cx - X0) / (X1 - X0)) * SWEEP_DUR;
        var el = document.querySelectorAll("#s4-dead ellipse")[i];
        tl.to(el, { y: -60, x: 50, opacity: 0, duration: 0.45, ease: "power2.out" }, t);
      });
      tl.to("#s4-exf", { opacity: 0, y: -20, duration: 0.2, ease: "power2.in" }, 78.75);
      tl.to("#s4-skin", { attr: { fill: "#f7d2b8" }, duration: 0.6, ease: "power2.out" }, 79.0);
      tl.fromTo("#s4-glow", { opacity: 0 }, { opacity: 1, duration: 0.6, ease: "power2.out" }, 79.0);
      tl.fromTo("#s4-spark path", { scale: 0, rotation: -60, transformOrigin: "50% 50%" }, { scale: 1, rotation: 0, duration: 0.45, ease: "back.out(2.5)", stagger: 0.1 }, 79.1);
      fadeUp("#s4-glw", 79.0);
      mark("#s4-glw .mark", 79.3);
      sceneOut("s4", 81.0);
