import HeadControlService from './HeadControlService';

export { default } from './HeadControlService';

export const initHeadControl = () => {
  const headControlService = new HeadControlService('head-preview', {});
  headControlService.toggle(true);
  headControlService.addEventListener('mouse opened', () => console.log('mouse opened'));
  headControlService.addEventListener('mouse closed', () => console.log('mouse closed'));
  headControlService.addEventListener('left', () => console.log('left'));
  headControlService.addEventListener('right', () => console.log('right'));
};
