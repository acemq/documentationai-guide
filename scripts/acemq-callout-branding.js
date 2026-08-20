/**
 * AceMQ brand styling: callouts + in-body links.
 *
 * documentation.json has no custom-CSS field, so both fixes below are
 * injected via the `scripts` mechanism instead.
 *
 * PART 1 — AceMQ Insight callout branding.
 * The platform's `kind="alert"` Callout renders through a generic
 * `bg-alert-muted` style that is NOT derived from documentation.json's
 * `colors.brand` token — it's a fixed muted amber (dark: ~#2c1f07,
 * light: ~#fff6e4) with plain gray/black label text, unrelated to
 * AceMQ's real brand orange.
 *
 * Brand orange (#FF6600) sourced directly from acemq.com's live button
 * color (rgb(255,102,0)), not invented. Label/icon tints are darkened
 * (light mode) or lightened (dark mode) from that base to hold WCAG AA
 * contrast (verified >=4.5:1) against each theme's callout background.
 *
 * PART 2 — in-body content links.
 * Design-review finding (2026-08-11): links inside page content render
 * with no color differentiation from surrounding text — `getComputedStyle`
 * on a live content link returned `color: rgb(26,26,26)` (the plain
 * `heading` text token) with no dedicated link class, so the only visual
 * cue that text is clickable is an underline. Reuses the exact same two
 * tint values already used for the callout label above — not new colors —
 * so this doesn't introduce a third orange into the palette. Contrast
 * verified against the real page background (not the callout background):
 * #B84700 on light-mode white (~5.6:1) and #FF8A3D on dark-mode #121212
 * (~7.9:1), both comfortably over the 4.5:1 AA floor for normal text.
 * Scoped to `article a[href]` so it only touches in-content prose links —
 * nav, sidebar, TOC, and breadcrumbs live outside `<article>` and are
 * intentionally left at the platform's default styling.
 */
(function () {
  var css = [
    '[data-component="Callout"][data-kind="alert"] {',
    '  border-left: 4px solid #FF6600 !important;',
    '}',
    '.dark [data-component="Callout"][data-kind="alert"] {',
    '  background-color: #3A1F08 !important;',
    '}',
    '.dark [data-component="Callout"][data-kind="alert"] .dai-callout-body p:first-child strong {',
    '  color: #FF8A3D !important;',
    '}',
    '.dark [data-component="Callout"][data-kind="alert"] .dai-callout-icon svg {',
    '  color: #FF8A3D !important;',
    '}',
    '.light [data-component="Callout"][data-kind="alert"] {',
    '  background-color: #FFE9D6 !important;',
    '}',
    '.light [data-component="Callout"][data-kind="alert"] .dai-callout-body p:first-child strong {',
    '  color: #B84700 !important;',
    '}',
    '.light [data-component="Callout"][data-kind="alert"] .dai-callout-icon svg {',
    '  color: #B84700 !important;',
    '}',
    'article a[href] {',
    '  text-underline-offset: 2px;',
    '}',
    '.light article a[href] {',
    '  color: #B84700 !important;',
    '}',
    '.light article a[href]:hover {',
    '  color: #8A3500 !important;',
    '}',
    '.dark article a[href] {',
    '  color: #FF8A3D !important;',
    '}',
    '.dark article a[href]:hover {',
    '  color: #FFAD70 !important;',
    '}'
  ].join('\n');

  var style = document.createElement('style');
  style.setAttribute('data-acemq-callout-branding', 'true');
  style.textContent = css;
  document.head.appendChild(style);
})();
