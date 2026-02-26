export interface SiteTheme {
  colors: {
    primary: string;
    primaryForeground: string;
    secondary: string;
    secondaryForeground: string;
    accent: string;
    accentForeground: string;
    background: string;
    foreground: string;
    muted: string;
    mutedForeground: string;
    card: string;
    cardForeground: string;
    border: string;
    ring: string;
    success: string;
    warning: string;
    destructive: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  borderRadius: "none" | "sm" | "md" | "lg" | "full";
  direction: "ltr" | "rtl";
}

const radiusMap: Record<string, string> = {
  none: "0px",
  sm: "4px",
  md: "8px",
  lg: "16px",
  full: "9999px",
};

export function themeToCSS(
  theme: SiteTheme
): React.CSSProperties {
  return {
    "--theme-primary": theme.colors.primary,
    "--theme-primary-foreground": theme.colors.primaryForeground,
    "--theme-secondary": theme.colors.secondary,
    "--theme-secondary-foreground": theme.colors.secondaryForeground,
    "--theme-accent": theme.colors.accent,
    "--theme-accent-foreground": theme.colors.accentForeground,
    "--theme-background": theme.colors.background,
    "--theme-foreground": theme.colors.foreground,
    "--theme-muted": theme.colors.muted,
    "--theme-muted-foreground": theme.colors.mutedForeground,
    "--theme-card": theme.colors.card,
    "--theme-card-foreground": theme.colors.cardForeground,
    "--theme-border": theme.colors.border,
    "--theme-ring": theme.colors.ring,
    "--theme-success": theme.colors.success,
    "--theme-warning": theme.colors.warning,
    "--theme-destructive": theme.colors.destructive,
    "--theme-font-heading": theme.fonts.heading,
    "--theme-font-body": theme.fonts.body,
    "--theme-radius": radiusMap[theme.borderRadius] || "8px",
  } as React.CSSProperties;
}

export const defaultTheme: SiteTheme = {
  colors: {
    primary: "#2563EB",
    primaryForeground: "#FFFFFF",
    secondary: "#7C3AED",
    secondaryForeground: "#FFFFFF",
    accent: "#F59E0B",
    accentForeground: "#FFFFFF",
    background: "#FFFFFF",
    foreground: "#0F172A",
    muted: "#F1F5F9",
    mutedForeground: "#64748B",
    card: "#FFFFFF",
    cardForeground: "#0F172A",
    border: "#E2E8F0",
    ring: "#2563EB",
    success: "#16A34A",
    warning: "#EAB308",
    destructive: "#DC2626",
  },
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  borderRadius: "md",
  direction: "ltr",
};
