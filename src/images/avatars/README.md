# Avatar Images

This folder contains placeholder avatar images for the testimonials section. Replace these SVG files with actual user photos to personalize the testimonials.

## Files to Replace

- `aisha-patel.svg` → Replace with Aisha Patel's photo
- `marcus-johnson.svg` → Replace with Marcus Johnson's photo  
- `elena-rossi.svg` → Replace with Elena Rossi's photo
- `hiroshi-tanaka.svg` → Replace with Hiroshi Tanaka's photo
- `fatima-al-zahra.svg` → Replace with Fatima Al-Zahra's photo
- `james-thompson.svg` → Replace with James Thompson's photo

## Image Requirements

- **Format**: JPG, PNG, or SVG
- **Size**: 120x120 pixels recommended (square aspect ratio)
- **File naming**: Keep the same file names but change the extension if needed
- **Quality**: High resolution for retina displays

## How to Replace

1. **Keep same filename**: Replace `aisha-patel.svg` with `aisha-patel.jpg` (or desired format)
2. **Update imports**: If changing file extension, update the import in `Testimonials.tsx`:
   ```typescript
   // Change from:
   import AishaPatelAvatar from "../../images/avatars/aisha-patel.svg";
   // To:
   import AishaPatelAvatar from "../../images/avatars/aisha-patel.jpg";
   ```
3. **Test**: Run `npm run build` to ensure all images load correctly

## Design Guidelines

- **Professional photos**: Use clear, professional-looking photos
- **Diverse representation**: Maintain the diversity shown in placeholder avatars
- **Consistent lighting**: Try to use photos with similar lighting/style
- **Face visibility**: Ensure faces are clearly visible and centered
- **Copyright**: Only use photos you have permission to use

## Fallback Options

If you don't have actual user photos, consider:
- Using avatar generators (Gravatar, Avataaars, etc.)
- Stock photo websites with appropriate licenses
- Illustrated avatars that match your brand style
- Keeping the SVG placeholders temporarily

The current SVG placeholders are designed to be visually consistent and will work as temporary solutions until real photos are available.