# TTS Voice Reference for Future Grade 7 Work

This note records the two voice profiles that were actually verified in the Lớp 6 audio work, so future developers can reuse them for Lớp 7 without guessing.

## Verified voices

### English

- `profileId`: `en-v1`
- `voice`: `en-US-Neural2-F`
- Status: verified by generating and playing back the English audio catalog and manifest.

### Vietnamese

- `profileId`: `vi-v1`
- `voice` used for the pilot sample: `vi-VN-Chirp3-HD-Despina`
- Status: verified by generating a single pilot sample for voice check.

## Notes

- Do not assume the Vietnamese voice config is a single fixed model beyond the verified `vi-v1` profile and the pilot voice above.
- For future production work, keep the English and Vietnamese audio paths separate.
- Keep Vietnamese audio English-safe: English text should use the English voice; Vietnamese text should use the Vietnamese voice.
- Do not commit mp3 files or credential files when extending this for later grades.

