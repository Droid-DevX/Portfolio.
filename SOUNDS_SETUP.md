# Sound Files Setup

The Contact form now uses MP3 sound files for success and error notifications.

## Option 1: Download Free Sound Effects (Recommended)

Download these free sounds from [Freesound.org](https://freesound.org/) or [Pixabay Sound Effects](https://pixabay.com/sound-effects/):

1. **Success Sound** - Search for "notification" or "success" sound (short, positive tone)
   - Save as: `public/sounds/success.mp3`

2. **Error Sound** - Search for "error" or "alert" sound (short, negative tone)
   - Save as: `public/sounds/error.mp3`

**Example sounds:**
- Success: https://freesound.org/search/?q=notification+bell (use any ~1-2 second positive sound)
- Error: https://freesound.org/search/?q=error+beep (use any ~1-2 second negative sound)

## Option 2: Generate Using Online Tools

Use [Audacity](https://www.audacityteam.org/) or online generators to create simple beep sounds and export as MP3.

## Option 3: Use Another Format

If you have WAV or OGG files, simply replace `.mp3` with the correct extension in `Contact.tsx`.

## File Structure Required

```
public/
└── sounds/
    ├── success.mp3
    └── error.mp3
```

Once you add the MP3 files to the `public/sounds/` folder, the notification sounds will work automatically!
