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
      sceneOut("v", 21.88);

      // 01 Eczema
      sceneIn("e", 24.68);
      fadeUp("#e .hd", 24.98);
      mark("#e-mk", 26.88);
      chipIn("#e-c1", 28.58);
      chipIn("#e-c2", 29.18);
      chipIn("#e-c3", 29.88);
      chipIn("#e-c4", 31.48);
      figMark("e-siku", 33.78);
      figMark("e-lutut", 34.78);
      figMark("e-leher", 36.38);
      slam("#e-stamp", 39.18, -6);
      tl.to("#e-chips", { opacity: 0, y: -16, duration: 0.2, ease: "power2.in" }, 40.78);
      fadeUp("#e-note", 41.08);
      mark("#e-note .mark", 42.28);

      // 02 Kurap — what it is (wipes over the eczema panel)
      sceneIn("k1", 42.98);
      fadeUp("#k1 .hd", 43.38);
      mark("#k1-mk", 47.08);
      fadeUp("#k1-sub", 48.88);
      tl.fromTo("#k1-ring", { strokeDashoffset: 1194 }, { strokeDashoffset: 0, duration: 1.0, ease: "power2.inOut" }, 50.98);
      tl.fromTo("#k1-scale", { opacity: 0 }, { opacity: 0.85, duration: 0.4, ease: "none" }, 54.58);
      tl.fromTo("#k1-ptr", { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "none" }, 51.98);
      fadeUp("#k1-edge", 51.98);
      [["#k1-t1", 52.88], ["#k1-t2", 53.88], ["#k1-t3", 54.58]].forEach(function (p) {
        tl.fromTo(p[0], { color: "#1d1b18" }, { color: "#e0452b", duration: 0.2, ease: "none" }, p[1]);
      });
      tl.fromTo("#k1-mid", { opacity: 0 }, { opacity: 1, duration: 0.4, ease: "none" }, 55.48);
      pop("#k1-ctr", 55.48, 0.8);

      // 02 Kurap — where & how it spreads
      sceneIn("k2", 56.98);
      fadeUp("#k2 .hd", 57.28);
      mark("#k2-mk", 58.18);
      figMark("k2-peha", 60.48);
      figMark("k2-kaki", 61.78);
      figMark("k2-pinggang", 62.38);
      slam("#k2-stamp", 64.98, -5);
      chipIn("#k2-c1", 66.88);
      chipIn("#k2-c2", 67.58);
      chipIn("#k2-c3", 68.58);

      // 03 Wrong cream
      sceneIn("x", 69.68);
      fadeUp("#x .hd", 69.88);
      mark("#x-mk", 70.98);
      tl.fromTo("#x-r1", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 72.58);
      slam("#x-res1", 74.78, -3);
      tl.fromTo("#x-r2", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" }, 75.98);
      tl.to("#x-g0", { opacity: 0.2, duration: 0.4, ease: "power2.out" }, 78.28);
      slam("#x-res2", 78.28, -3);
      tl.to("#x-res2", { opacity: 0, duration: 0.15, ease: "none" }, 80.28);
      tl.to("#x-g0", { opacity: 1, duration: 0.2, ease: "none" }, 80.38);
      tl.fromTo("#x-g1", { opacity: 1, scale: 1, transformOrigin: "50% 50%" }, { opacity: 0.85, scale: 1.9, duration: 0.9, ease: "power2.out" }, 80.48);
      tl.fromTo("#x-g2", { opacity: 1, scale: 1, transformOrigin: "50% 50%" }, { opacity: 0.6, scale: 2.7, duration: 1.1, ease: "power2.out" }, 80.68);
      slam("#x-res3", 80.48, -3);

      // 04 Basic care
      sceneIn("c", 82.38);
      fadeUp("#c .hd", 82.68);
      mark("#c-mk", 84.48);
      tl.fromTo("#c .col", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out", stagger: 0.15 }, 84.98);
      tl.set("#c .item", { opacity: 0 }, 0);
      [["#c-i1", 86.88], ["#c-i2", 89.48], ["#c-i3", 92.68], ["#c-i4", 94.78]].forEach(function (p) {
        tl.fromTo(p[0], { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.3, ease: "back.out(2)" }, p[1]);
        tl.fromTo(p[0] + " .ic", { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.35, ease: "back.out(2.5)" }, p[1] + 0.05);
      });
      sceneOut("c", 98.78);

      // Over footage — "jangan teka sendiri, jumpa doktor"
      slam("#teka-in", 100.98, -6);
      tl.fromTo("#teka-st", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35, ease: "back.out(2)" }, 102.28);
      tl.to("#teka", { opacity: 0, duration: 0.25, ease: "none" }, 104.38);
