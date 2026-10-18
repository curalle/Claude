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

      // Over footage — "harga combo istimewa"
      slam("#promo-in", 8.75, -5);
      tl.to("#promo", { opacity: 0, duration: 0.2, ease: "none" }, 10.7);

      // Combo 1: 2 × 100g RM198 -> RM129
      sceneIn("c1", 11.25);
      pop("#c1-lbl", 11.87, 0.6);
      fadeUp("#c1-np", 12.67);
      tl.fromTo("#c1-np .x", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.out" }, 13.07);
      slam("#c1-pr .p", 13.76, -2);
      mark("#c1-pr .p", 14.01);
      slam("#c1-save", 14.66, -6);

      // Combo 2: 2 × 50g RM158 -> RM99
      sceneIn("c2", 16.5);
      pop("#c2-lbl", 17.14, 0.6);
      fadeUp("#c2-np", 17.94);
      tl.fromTo("#c2-np .x", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.out" }, 18.34);
      slam("#c2-pr .p", 19.15, -2);
      mark("#c2-pr .p", 19.4);
      slam("#c2-save", 20.05, -6);

      // Combo 3: MIX COMBO RM178 -> RM119
      sceneIn("c3", 21.65);
      pop("#c3-lbl", 21.92, 0.6);
      fadeUp("#c3-np", 22.72);
      tl.fromTo("#c3-np .x", { scaleX: 0 }, { scaleX: 1, duration: 0.3, ease: "power2.out" }, 23.12);
      slam("#c3-pr .p", 23.63, -2);
      mark("#c3-pr .p", 23.88);
      slam("#c3-save", 24.53, -6);

      // Offer dates
      sceneIn("dt", 26.25);
      fadeUp("#dt .hd", 26.5);
      pop("#dt-a", 27.42, 0.5);
      tl.fromTo("#dt-arr", { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.35, ease: "power3.out" }, 28.4);
      pop("#dt-b", 28.77, 0.5);
      slam("#dt-only", 29.77, -6);
      sceneOut("dt", 31.4);
