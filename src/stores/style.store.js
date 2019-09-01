import { readable, derived } from 'svelte/store';

const mediaBreakpoints = ['xs', 'sm', 'md', 'lg', 'xl'];

function getCurrentMediaBreakpoint() {
  return getComputedStyle(document.documentElement)
      .getPropertyValue('--media-breakpoint')
      .trim();
}

export const mediaBreakpoint = readable(null, function start(set) {
  let lastValue = null;

  const pollInterval = setInterval(() => {
    const value = getCurrentMediaBreakpoint();
    if (value !== lastValue) {
      set(value);
    }
  }, 500);

  return function stop() {
    clearInterval(pollInterval)
  }
});

export const mediaBreakpointIndex = derived(mediaBreakpoint, ($mediaBreakpoint) => {
  const index = mediaBreakpoints.indexOf($mediaBreakpoint || '');
  return index > 0 ? index : null;
});
