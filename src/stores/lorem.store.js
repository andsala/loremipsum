import getlorem from 'getlorem';
import { writable, readable } from 'svelte/store';

export const size = writable(3);
export const type = writable('sentence');
export const startWithLorem = writable(true);

export const loremContent = readable(null, function start(set) {
  let sizeValue;
  let typeValue;
  let startWithLoremValue;

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

  const unsubscribeSize = size.subscribe(value => {
    sizeValue = value;
    const content = getLoremContent(sizeValue, typeValue, startWithLoremValue);
    set(content);
  });

  const unsubscribeType = type.subscribe(value => {
    typeValue = value;
    const content = getLoremContent(sizeValue, typeValue, startWithLoremValue);
    set(content);
  });

  const unsubscribeStartWithLorem = startWithLorem.subscribe(value => {
    startWithLoremValue = value;
    const content = getLoremContent(sizeValue, typeValue, startWithLoremValue);
    set(content);
  });

  return function stop() {
    unsubscribeSize();
    unsubscribeType();
    unsubscribeStartWithLorem();
  }
});
