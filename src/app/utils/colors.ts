/**
 * FPM Brand Colors
 * Official color palette for consistent brand identity
 */

export const FPM_COLORS = {
  // Primary Colors
  blueDark: '#00467F',      // Pantone 541C - Main brand color
  cyan: '#00AFEF',          // Pantone Hexachrome cyan C - Secondary
  red: '#EF4135',           // Pantone Red 032 C - Accent
  
  // Light variants (10% opacity)
  blueDarkLight: 'rgba(0, 70, 127, 0.1)',
  cyanLight: 'rgba(0, 175, 239, 0.1)',
  redLight: 'rgba(239, 65, 53, 0.1)',
  
  // Medium variants (30% opacity)
  blueDarkMedium: 'rgba(0, 70, 127, 0.3)',
  cyanMedium: 'rgba(0, 175, 239, 0.3)',
  redMedium: 'rgba(239, 65, 53, 0.3)',
} as const;

/**
 * Tailwind-safe color classes for FPM brand colors
 */
export const FPM_CLASSES = {
  // Backgrounds
  bgBlueDark: 'bg-[#00467F]',
  bgCyan: 'bg-[#00AFEF]',
  bgRed: 'bg-[#EF4135]',
  
  // Text colors
  textBlueDark: 'text-[#00467F]',
  textCyan: 'text-[#00AFEF]',
  textRed: 'text-[#EF4135]',
  
  // Border colors
  borderBlueDark: 'border-[#00467F]',
  borderCyan: 'border-[#00AFEF]',
  borderRed: 'border-[#EF4135]',
  
  // Gradients
  gradientBlueDark: 'from-[#00467F]/70 via-[#00467F]/60 to-transparent',
  gradientCyan: 'from-[#00AFEF]/70 via-[#00AFEF]/60 to-transparent',
  gradientBlueCyan: 'from-[#00467F]/70 via-[#00AFEF]/60 to-transparent',
} as const;
