import HeadControlService from './HeadControlService';

export { default } from './HeadControlService';

export const initHeadControl = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const headControlService = new HeadControlService('head-preview', {
      onReady: () => resolve(true),
      onCameraPersmissionFailed: () => alert('This game is head-controlled. You need to enable camera to play the game.'),
    });
    headControlService.toggle(true);
    headControlService.addEventListener('mouse opened', () => console.log('mouse opened'));
    headControlService.addEventListener('mouse closed', () => console.log('mouse closed'));
    headControlService.addEventListener('left', () => console.log('left'));
    headControlService.addEventListener('right', () => console.log('right'));
  });
};
