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

      // VS title — "ramai keliru antara eczema dengan kurap"
      sceneIn("v", 15.5);
      tl.fromTo("#v-ecz", { x: -500, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, 17.6);
      pop("#v-vs span", 18.3, 0.3);
      tl.fromTo("#v-kur", { x: 500, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, 18.8);
      fadeUp("#v-note", 20.9);
      mark("#v-note .mark", 21.4);
      sceneOut("v", 27.5);

      // 01 Eczema
      sceneIn("e", 30.3);
      fadeUp("#e .hd", 30.6);
      mark("#e-mk", 32.5);
      chipIn("#e-c1", 34.2);
      chipIn("#e-c2", 34.8);
      chipIn("#e-c3", 35.5);
      chipIn("#e-c4", 37.1);
      figMark("e-siku", 39.4);
      figMark("e-lutut", 40.4);
      figMark("e-leher", 42.0);
      slam("#e-stamp", 44.8, -6);
      tl.to("#e-chips", { opacity: 0, y: -16, duration: 0.2, ease: "power2.in" }, 46.4);
      fadeUp("#e-note", 46.7);
      mark("#e-note .mark", 47.9);

      // 02 Kurap — what it is (wipes over the eczema panel)
      sceneIn("k1", 48.6);
      fadeUp("#k1 .hd", 49.0);
      mark("#k1-mk", 52.7);
      fadeUp("#k1-sub", 54.5);
      tl.fromTo("#k1-ring", { strokeDashoffset: 1194 }, { strokeDashoffset: 0, duration: 1.0, ease: "power2.inOut" }, 56.6);
      tl.fromTo("#k1-scale", { opacity: 0 }, { opacity: 0.85, duration: 0.4, ease: "none" }, 60.2);
      tl.fromTo("#k1-ptr", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none" }, 57.6);
      fadeUp("#k1-edge", 57.6);
      [["#k1-t1", 58.5], ["#k1-t2", 59.5], ["#k1-t3", 60.2]].forEach(function (p) {
        tl.fromTo(p[0], { color: "#1d1b18" }, { color: "#e0452b", duration: 0.2, ease: "none" }, p[1]);
      });
      tl.fromTo("#k1-mid", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "none" }, 61.1);
      pop("#k1-ctr", 61.1, 0.8);

      // 02 Kurap — where & how it spreads
      sceneIn("k2", 62.6);
      fadeUp("#k2 .hd", 62.9);
      mark("#k2-mk", 63.8);
      figMark("k2-peha", 66.1);
      figMark("k2-kaki", 67.4);
      figMark("k2-pinggang", 68.0);
      slam("#k2-stamp", 70.6, -5);
      chipIn("#k2-c1", 72.5);
      chipIn("#k2-c2", 73.2);
      chipIn("#k2-c3", 74.2);

      // 03 Wrong cream
      sceneIn("x", 75.3);
      fadeUp("#x .hd", 75.5);
      mark("#x-mk", 76.6);
      tl.fromTo("#x-r1", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 78.2);
      slam("#x-res1", 80.4, -3);
      tl.fromTo("#x-r2", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 81.6);
      tl.to("#x-g0", { opacity: 0.2, duration: 0.4, ease: "power2.out" }, 83.9);
      slam("#x-res2", 83.9, -3);
      tl.to("#x-res2", { opacity: 0, duration: 0.15, ease: "none" }, 85.9);
      tl.to("#x-g0", { opacity: 1, duration: 0.2, ease: "none" }, 86.0);
      tl.fromTo("#x-g1", { opacity: 1, scale: 1, transformOrigin: "50% 50%" }, { opacity: 0.85, scale: 1.9, duration: 0.9, ease: "power2.out" }, 86.1);
      tl.fromTo("#x-g2", { opacity: 1, scale: 1, transformOrigin: "50% 50%" }, { opacity: 0.6, scale: 2.7, duration: 1.1, ease: "power2.out" }, 86.3);
      slam("#x-res3", 86.1, -3);

      // 04 Basic care
      sceneIn("c", 88.0);
      fadeUp("#c .hd", 88.3);
      mark("#c-mk", 90.1);
      tl.fromTo("#c .col", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.15 }, 90.6);
      tl.set("#c .item", { opacity: 0 }, 0);
      [["#c-i1", 92.5], ["#c-i2", 95.1], ["#c-i3", 98.3], ["#c-i4", 100.4]].forEach(function (p) {
        tl.fromTo(p[0], { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.3, ease: "back.out(2)" }, p[1]);
        tl.fromTo(p[0] + " .ic", { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.35, ease: "back.out(2.5)" }, p[1] + 0.05);
      });
      sceneOut("c", 104.4);

      // Over footage — "jangan teka sendiri, jumpa doktor"
      slam("#teka-in", 106.6, -6);
      tl.fromTo("#teka-st", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35, ease: "back.out(2)" }, 107.9);
      tl.to("#teka", { opacity: 0, duration: 0.25, ease: "none" }, 110.0);
