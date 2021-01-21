import type { HtmlAttributes } from './types';

export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

export function uniqueId(size = 5): string {
  if (size < 1) {
    throw new Error('The size of `uniqueId` must be greater than 0.');
  }

  const chars =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789';
  const max = chars.length - 1;
  return Array.from({ length: size })
    .map(() => chars[getRandomInt(max)])
    .join('');
}

export function setAttributes(
  $element: HTMLElement,
  attributes: HtmlAttributes,
  excludeAttributes: string[] = []
): void {
  Object.keys(attributes)
    .filter((name) => !excludeAttributes.includes(name))
    .forEach((name) => {
      const value = attributes[name];
      if (value != null && value !== false) {
        $element.setAttribute(name, '' + value);
      }
    });
}

export function appendContentToElement(
  $parent: HTMLElement,
  child: string | Node
): void {
  if (child instanceof Node) {
    $parent.append(child);
  } else {
    $parent.innerHTML = child;
  }
}
