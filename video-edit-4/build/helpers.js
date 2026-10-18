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

