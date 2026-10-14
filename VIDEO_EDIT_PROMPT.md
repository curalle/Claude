# Reusable prompt — talking-head skincare video → captioned Vox-style explainer

Copy everything in the box below into a new Claude Code session on the
`curalle/claude` repo. Replace the two `<…>` lines first.

**Before you start:** in Google Drive set the video to
**Share → "Anyone with the link" → Viewer**, otherwise it can't be downloaded.

---

```text
Edit this video: <GOOGLE DRIVE LINK>
Speaker / CTA name: <e.g. Dr Fareez>   (language: Malay unless I say otherwise)

Use the existing HyperFrames project in `video-edit/` of this repo as the
template — same structure, same look. Make a NEW folder `video-edit-<short-topic>/`
(copy build/, vendor/, hyperframes.json, package.json from video-edit/), do not
touch the old one. Work on a new branch, commit and push when done.

Steps:
1. Download the Drive file with
   https://drive.usercontent.google.com/download?id=<FILE_ID>&export=download&confirm=t
   Save it with a .mp4 extension (the transcriber rejects files without one).
2. Look at a contact sheet of frames. Check: is the shot mirrored (text on
   clothes/wall backwards)? Is there a phone watermark burned in? Where is
   the face (keep captions off it)?
3. Transcribe with `npx hyperframes transcribe <file>.mp4 --engine whisper
   --model large-v3 --language ms` → transcript.json. Read the full
   transcript, fix misheard names/words by word id in build/edit.json "fixes".
4. Bake the look into the footage with ffmpeg (do NOT use the realtime
   data-color-grading shader — there's no GPU, it renders ~8 frames/min):
   hflip (only if mirrored), then
   curves=all='0/0.015 0.25/0.27 0.75/0.745 1/0.965',eq=contrast=1.05:saturation=1.1,
   colortemperature=temperature=6000:mix=0.35,vignette=angle=0.38
   → libx264 crf 16 → graded.mp4. build/video.html must contain ONLY the
   single <video …></video> element pointing at graded.mp4.
5. Keep from the template: karaoke captions (Montserrat 900, navy stroke,
   magenta active-word pill, one lit word at a time, emphasis words pop),
   0.085 top-anchored reframe that crops the bottom watermark, punch-in
   zooms on sentence starts, hook card (first ~6s, a question taken from
   the opening line), "Follow <name> …" end card when the speaker says
   follow, magenta progress bar.
6. Vox-style explainer cut-ins (build/scenes.html/.css/.js): pick 3–5
   moments where the speaker explains a process, number, timeline or
   how-to. For each, a full-screen paper-texture panel (League Gothic
   headline, yellow highlighter sweeps, red arrows/stamps, "FAKTA KULIT · 0N"
   kicker, yellow wipe in/out) that animates in sync with the exact word
   timestamps. Audio and captions keep running underneath. Plus one red
   stamp over the footage on the key advice word (like "SABAR!").
   Only use words/claims the speaker actually says — no new medical claims.
   Show me the plan (time ranges + what each panel shows) before building.
7. Verify: `npx hyperframes lint` (0 errors), snapshot every scene at its
   key moments and look at them, then render with
   `npx hyperframes render -o renders/<name>.mp4 --quality delivery`.
   Check the render with ffmpeg freezedetect and a frame contact sheet.
8. Send me a <30 MB copy (2-pass libx264 ~2050k, aac 128k) because of the
   upload limit, and tell me what to double-check (names, Malay wording).
   Video files stay git-ignored (>100 MB GitHub limit).
```

---

## Short version (if the template folder is already there)

```text
Same treatment as video-edit/ (captions, grade baked with ffmpeg, un-mirror
if needed, hide watermark, punch-ins, hook + follow card, 3–5 Vox-style
infographic cut-ins synced to the words with audio continuing, one stamp on
the key advice) for this video: <DRIVE LINK>. Speaker: <NAME>. Follow
VIDEO_EDIT_PROMPT.md. Show me the infographic plan first.
```

## Things that went wrong last time (already handled in the prompt)

| Problem | Fix |
|---|---|
| Drive link returned a sign-in page | Share as "Anyone with the link" |
| Transcribe failed: "Unsupported file type" | File needs a `.mp4` extension |
| Overlays didn't show at all | `video.html` must hold only the `<video>` tag |
| GSAP from CDN unreliable in headless render | Use local `vendor/gsap.min.js` |
| Render would take 5–8 h | Bake grade/flip with ffmpeg instead of the WebGL grade |
| `hyperframes check` times out with 100 s video | Run check on a copy without the video + snapshots of the real one |
| Delivered file too big to send in chat (30 MB limit) | Send a 2-pass compressed copy |
