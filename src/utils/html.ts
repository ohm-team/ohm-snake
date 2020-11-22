export const hideElement = (element: HTMLElement) => {
  element.style.display = 'none';
};

export const showElement = (element: HTMLElement) => {
  element.style.display = '';
};

export const removeClass = (element: HTMLElement, className: string) => {
  element?.classList.remove(className);
};

export const addClass = (element: HTMLElement, className: string) => {
  element?.classList.add(className);
};

export const removeElement = (element?: HTMLElement) => {
  element?.parentNode.removeChild(element);
};

export const appendElement = (parent: HTMLElement, content: HTMLElement) => {
  parent?.appendChild(content);
};

export const beforeElement = (target: HTMLElement, element: HTMLElement) => {
  target.insertAdjacentElement('beforebegin', element);
};
