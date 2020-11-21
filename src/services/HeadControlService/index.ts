import HeadControlService, { MOVEMENT } from './HeadControlService';

export { default } from './HeadControlService';

let headControlService: HeadControlService;

export type { MOVEMENT };
export const initHeadControl = ({
  onMovement,
  onCameraPersmissionFailed,
}: {
  onMovement: (movement: MOVEMENT) => void;
  onCameraPersmissionFailed: () => void;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    headControlService = new HeadControlService('head-preview', {
      onReady: resolve,
      onCameraPersmissionFailed: onCameraPersmissionFailed,
      onError: reject,
    });
    headControlService.toggle(true);
    //headControlService.addEventListener('mouse opened', () => onMovement('mouse opened'));
    //headControlService.addEventListener('mouse closed', () => onMovement('mouse closed'));
    //headControlService.addEventListener('left', () => onMovement('left'));
    //headControlService.addEventListener('right', () => onMovement('right'));
    //headControlService.addEventListener('up', () => onMovement('up'));
    //headControlService.addEventListener('down', () => onMovement('down'));
  });
};

export const getVideoElement = (): HTMLVideoElement => {
  if (!headControlService) {
    throw new Error('Call initHeadControl first');
  }
  return headControlService.getVideoElement();
};
