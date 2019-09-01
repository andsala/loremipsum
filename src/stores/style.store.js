import { readable } from 'svelte/store';

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
  }, 50);

  return function stop() {
    clearInterval(pollInterval)
  }
});

export const mediaBreakpointIndex = readable(null, function start(set) {
  const unsubscribeMediaBreakpoint = mediaBreakpoint.subscribe(value => {
    if (!value) {
      set(null);
    }
    const index = mediaBreakpoints.indexOf(value || '');
    set(index > 0 ? index : null);
  });

  return function stop() {
    unsubscribeMediaBreakpoint();
  }
});
