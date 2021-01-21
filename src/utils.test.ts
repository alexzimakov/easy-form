import { uniqueId, setAttributes, appendContentToElement } from './utils';

describe('#uniqueId()', () => {
  it('should throw an error when ID size less then 1', () => {
    expect(() => {
      uniqueId(0);
    }).toThrow('The size of `uniqueId` must be greater than 0.');
  });

  it('should create unique ID', () => {
    const id1 = uniqueId();
    const id2 = uniqueId();
    expect(id1).not.toBe(id2);
  });
});

describe('#setAttributes()', () => {
  it('should set attributes which have truthy value', () => {
    const $element = document.createElement('div');
    setAttributes($element, {
      string: 'string',
      number: 1,
      truthy: true,
      nil: null,
      falsy: false,
    });

    expect($element).toHaveAttribute('string', 'string');
    expect($element).toHaveAttribute('number', '1');
    expect($element).toHaveAttribute('truthy', 'true');
    expect($element).not.toHaveAttribute('nil');
    expect($element).not.toHaveAttribute('falsy');
  });

  it('should set attributes except for excluded attributes', () => {
    const $element = document.createElement('div');
    setAttributes($element, { foo: 'bar', bar: 'foo', egg: 'spam' }, [
      'bar',
      'egg',
    ]);

    expect($element).toHaveAttribute('foo', 'bar');
    expect($element).not.toHaveAttribute('bar');
    expect($element).not.toHaveAttribute('egg');
  });
});

describe('#appendContentToElement()', () => {
  it('should set `string` as the content of an element', () => {
    const $element = document.createElement('div');
    const content = 'element content';
    appendContentToElement($element, content);

    expect($element).toHaveTextContent(content);
  });

  it('should set HTML element as the content of an element', () => {
    const $element = document.createElement('div');
    const content = 'element content';
    const $span = document.createElement('span');
    $span.innerHTML = content;
    appendContentToElement($element, $span);

    expect($element).toHaveTextContent(content);
  });
});
