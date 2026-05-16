/**
 * Icon set — SVG path strings only (viewBox 24x24, stroke 1.5px).
 * Rendered by <Icon name="..." /> which wraps in a stroke-only <svg>.
 *
 * To add a new icon: add a key here. Keep stroke style consistent.
 */

export type IconName =
  | 'shield'
  | 'alert'
  | 'target'
  | 'search'
  | 'kanban'
  | 'zap'
  | 'bug'
  | 'check'
  | 'arrow-right'
  | 'arrow-up-right'
  | 'plus'
  | 'minus'
  | 'chevron-down'
  | 'plug'
  | 'eye'
  | 'gauge'
  | 'users'
  | 'lock'
  | 'activity'
  | 'database'
  | 'cpu'
  | 'workflow'
  | 'fingerprint';

export const icons: Record<IconName, string> = {
  shield:
    '<path d="M12 3 4.5 6v6c0 4.5 3 8.25 7.5 9 4.5-.75 7.5-4.5 7.5-9V6L12 3z"/>',
  alert:
    '<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>',
  target:
    '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  search:
    '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  kanban:
    '<rect x="3" y="4" width="5" height="16" rx="1"/><rect x="10" y="4" width="5" height="10" rx="1"/><rect x="17" y="4" width="4" height="13" rx="1"/>',
  zap:
    '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
  bug:
    '<path d="M8 2 9.5 4"/><path d="m16 2-1.5 2"/><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"/><path d="M12 20v-9"/><path d="M6.53 9C4 9 4 11 4 13v1a8 8 0 0 0 16 0v-1c0-2 0-4-2.53-4"/><path d="M20 15h-3"/><path d="M4 15h3"/><path d="M3.5 8.5 6 11"/><path d="m20.5 8.5-2.5 2.5"/>',
  check:
    '<path d="m5 12 5 5L20 7"/>',
  'arrow-right':
    '<path d="M5 12h14"/><path d="m13 5 7 7-7 7"/>',
  'arrow-up-right':
    '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  plug:
    '<path d="M9 2v6"/><path d="M15 2v6"/><path d="M7 8h10v3a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5V8z"/><path d="M12 16v6"/>',
  eye:
    '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  gauge:
    '<path d="M12 14 3.6 9.6"/><circle cx="12" cy="14" r="1.5" fill="currentColor"/><path d="M3 14a9 9 0 1 1 18 0"/>',
  users:
    '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 8a3.5 3.5 0 0 1 0 7"/><path d="M21.5 20a5.5 5.5 0 0 0-4-5.3"/>',
  lock:
    '<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  activity:
    '<path d="M3 12h4l2-7 4 14 2-7h6"/>',
  database:
    '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  cpu:
    '<rect x="5" y="5" width="14" height="14" rx="2"/><rect x="9" y="9" width="6" height="6" rx="0.5"/><path d="M9 2v3"/><path d="M15 2v3"/><path d="M9 19v3"/><path d="M15 19v3"/><path d="M2 9h3"/><path d="M2 15h3"/><path d="M19 9h3"/><path d="M19 15h3"/>',
  workflow:
    '<rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="15" width="6" height="6" rx="1"/><path d="M6 9v3a2 2 0 0 0 2 2h4"/><path d="M18 9v3a2 2 0 0 1-2 2h-4"/>',
  fingerprint:
    '<path d="M12 4a8 8 0 0 0-8 8v2"/><path d="M20 14v-2a8 8 0 0 0-3-6.2"/><path d="M8 11a4 4 0 0 1 8 0v2c0 2.5.5 5 1.5 7"/><path d="M12 11v3c0 3-1 5.5-2.5 7"/><path d="M4 18c1.5-1 2-2 2-4"/><path d="M14.5 19c-.5-1-1-2-1-4v-2"/>',
};
