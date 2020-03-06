export const removeHTML = (string: string): string =>
  string.replace(/(<([^>]+)>)/gi, '');
