/* ========================================================================
   Ethereal Atrium — Design Token Constants
   Source: Figma Make export (raVDMRl4lzSqcUMkvhIqqD)
   ======================================================================== */

// ---------------------------------------------------------------------------
// Colors
// ---------------------------------------------------------------------------

export const colors = {
	primary: {
		core: "#006a70",
		dim: "#005d63",
		container: "#c4f9fc",
		onColor: "#ffffff",
		onContainer: "#003335",
		tones: [
			{ hex: "#003335", label: "10" },
			{ hex: "#004f54", label: "20" },
			{ hex: "#005d63", label: "30" },
			{ hex: "#006a70", label: "40" },
			{ hex: "#008a91", label: "50" },
			{ hex: "#00a5ad", label: "60" },
			{ hex: "#22c1c9", label: "70" },
			{ hex: "#53dde5", label: "80" },
			{ hex: "#8bf3fc", label: "90" },
			{ hex: "#c4f9fc", label: "95" },
		],
	},
	secondary: {
		core: "#4a6366",
		dim: "#3d5558",
		container: "#cde8eb",
		onColor: "#ffffff",
		onContainer: "#051f22",
		tones: [
			{ hex: "#051f22", label: "10" },
			{ hex: "#1c3538", label: "20" },
			{ hex: "#3d5558", label: "30" },
			{ hex: "#4a6366", label: "40" },
			{ hex: "#627b7f", label: "50" },
			{ hex: "#7b9599", label: "60" },
			{ hex: "#95b0b3", label: "70" },
			{ hex: "#b0cbcf", label: "80" },
			{ hex: "#cde8eb", label: "90" },
			{ hex: "#e6f3f5", label: "95" },
		],
	},
	tertiary: {
		core: "#546073",
		dim: "#465266",
		container: "#d8e4f7",
		onColor: "#ffffff",
		onContainer: "#101c2b",
		tones: [
			{ hex: "#101c2b", label: "10" },
			{ hex: "#263242", label: "20" },
			{ hex: "#465266", label: "30" },
			{ hex: "#546073", label: "40" },
			{ hex: "#6c788d", label: "50" },
			{ hex: "#8592a7", label: "60" },
			{ hex: "#9fadc2", label: "70" },
			{ hex: "#bac8de", label: "80" },
			{ hex: "#d8e4f7", label: "90" },
			{ hex: "#ecf1fb", label: "95" },
		],
	},
	neutral: {
		core: "#2a3435",
		dim: "#3f4e50",
		container: "#dae5e5",
		onColor: "#ffffff",
		onContainer: "#151e1f",
		tones: [
			{ hex: "#151e1f", label: "10" },
			{ hex: "#2a3435", label: "20" },
			{ hex: "#3f4e50", label: "30" },
			{ hex: "#576767", label: "40" },
			{ hex: "#6f8080", label: "50" },
			{ hex: "#899a9a", label: "60" },
			{ hex: "#a3b4b4", label: "70" },
			{ hex: "#bfd0d0", label: "80" },
			{ hex: "#dae5e5", label: "90" },
			{ hex: "#f6fafa", label: "95" },
		],
	},
} as const;

// ---------------------------------------------------------------------------
// Typography
// ---------------------------------------------------------------------------

export const typography = {
	display: {
		lg: { size: "3.5rem", weight: 700, lineHeight: 1.1, tracking: "-0.03em" },
		md: { size: "2.75rem", weight: 700, lineHeight: 1.15, tracking: "-0.02em" },
		sm: { size: "2.25rem", weight: 700, lineHeight: 1.2, tracking: "-0.02em" },
	},
	headline: {
		lg: { size: "2rem", weight: 600, lineHeight: 1.25, tracking: "-0.02em" },
		md: { size: "1.75rem", weight: 600, lineHeight: 1.3, tracking: "-0.01em" },
		sm: { size: "1.5rem", weight: 600, lineHeight: 1.35, tracking: "-0.01em" },
	},
	title: {
		lg: {
			size: "1.375rem",
			weight: 600,
			lineHeight: 1.35,
			tracking: "-0.01em",
		},
		md: { size: "1rem", weight: 600, lineHeight: 1.5, tracking: "0" },
		sm: { size: "0.875rem", weight: 600, lineHeight: 1.5, tracking: "0.01em" },
	},
	body: {
		lg: { size: "1rem", weight: 400, lineHeight: 1.6, tracking: "0" },
		md: { size: "0.875rem", weight: 400, lineHeight: 1.55, tracking: "0.01em" },
		sm: { size: "0.75rem", weight: 400, lineHeight: 1.5, tracking: "0.02em" },
	},
	label: {
		lg: { size: "0.875rem", weight: 700, lineHeight: 1.4, tracking: "0.06em" },
		md: { size: "0.75rem", weight: 700, lineHeight: 1.35, tracking: "0.08em" },
		sm: { size: "0.6875rem", weight: 700, lineHeight: 1.3, tracking: "0.1em" },
	},
} as const;

// ---------------------------------------------------------------------------
// Surfaces
// ---------------------------------------------------------------------------

export const surfaces = [
	{
		name: "Lowest",
		hex: "#ffffff",
		label: "Surface Lowest",
		desc: "Card backgrounds, elevated content",
		token: "--ea-surface-lowest",
	},
	{
		name: "Low",
		hex: "#eef5f5",
		label: "Surface Low",
		desc: "Section backgrounds, subtle dividers",
		token: "--ea-surface-low",
	},
	{
		name: "Base",
		hex: "#f6fafa",
		label: "Surface (Base)",
		desc: "Page background, default canvas",
		token: "--ea-surface",
	},
	{
		name: "High",
		hex: "#e4eeee",
		label: "Surface High",
		desc: "Active states, hover backgrounds",
		token: "--ea-surface-high",
	},
	{
		name: "Highest",
		hex: "#dae5e5",
		label: "Surface Highest",
		desc: "Pressed states, strong emphasis",
		token: "--ea-surface-highest",
	},
] as const;

// ---------------------------------------------------------------------------
// Radii
// ---------------------------------------------------------------------------

export const radii = [
	{ name: "none", value: "0px", label: "None" },
	{ name: "sm", value: "4px", label: "Small" },
	{ name: "md", value: "6px", label: "Medium" },
	{ name: "DEFAULT", value: "8px", label: "Default" },
	{ name: "lg", value: "16px", label: "Large" },
	{ name: "xl", value: "24px", label: "Extra Large" },
	{ name: "full", value: "9999px", label: "Full" },
] as const;

// ---------------------------------------------------------------------------
// Spacing
// ---------------------------------------------------------------------------

export const spacingScale = [
	2, 4, 6, 8, 12, 16, 20, 24, 32, 40, 48, 64,
] as const;

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const navSections = [
	{ id: "overview", label: "Overview" },
	{ id: "colors", label: "Colors" },
	{ id: "typography", label: "Typography" },
	{ id: "surfaces", label: "Surfaces" },
	{ id: "buttons", label: "Buttons" },
	{ id: "inputs", label: "Inputs" },
	{ id: "navigation", label: "Navigation" },
	{ id: "cards", label: "Cards" },
	{ id: "chips", label: "Chips" },
	{ id: "elevation", label: "Elevation" },
	{ id: "spacing", label: "Spacing" },
] as const;
