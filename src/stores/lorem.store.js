import getlorem from 'getlorem';
import { writable } from 'svelte-persistent-store/local';
import { derived } from 'svelte/store';

function getLoremContent(size, type, startWithLorem) {
  size = Number(size);
  if (isNaN(size)) {
    return null;
  }

  switch (type) {
    case 'byte':
      return getlorem.bytes(size, false, startWithLorem);
    case 'list':
      return getlorem.lists(size, 'li', startWithLorem);
    case 'paragraph':
      return getlorem.paragraphs(size, 'p', startWithLorem);
    case 'sentence':
      return getlorem.sentences(size, 'p', startWithLorem);
    case 'word':
      return getlorem.words(size, 'p', startWithLorem);
    default:
      return null;
  }
}

export const size = writable('lorem.opts.size', 3);
export const type = writable('lorem.opts.type', 'sentence');
export const startWithLorem = writable('lorem.opts.startWithLorem', true);

export const loremContent = derived(
    [size, type, startWithLorem],
    ([$size, $type, $startWithLorem]) => getLoremContent($size, $type, $startWithLorem),
    '');
