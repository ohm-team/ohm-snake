import HeadControlService, { EVENT_MOVEMENT, Movement } from './HeadControlService';
export type { Movement };

let headControlService: HeadControlService;

export const initHeadControl = ({
  onCameraPersmissionFailed,
  isDebug,
}: {
  onCameraPersmissionFailed: () => void;
  isDebug: boolean;
}): Promise<void> => {
  return new Promise((resolve, reject) => {
    headControlService = new HeadControlService('head-preview', {
      onReady: () => {
        if (isDebug) {
          console.log('HeadControlService is initialised');
        }
        resolve();
      },
      onCameraPersmissionFailed: onCameraPersmissionFailed,
      onError: reject,
    });
  });
};

export const getVideoElement = (): HTMLVideoElement => {
  if (!headControlService) {
    throw new Error('Call initHeadControl first');
  }
  return headControlService.getVideoElement();
};

let movementEventHandler: (ev: CustomEvent<Movement>) => void;

export const enableControls = ({ onMovement }: { onMovement: (movement: Movement) => void }) => {
  headControlService.toggle(true);
  movementEventHandler = (ev) => onMovement(ev.detail);
  headControlService.addEventListener(EVENT_MOVEMENT, movementEventHandler);
};

export const disableControls = () => {
  headControlService.toggle(false);
  if (movementEventHandler) {
    headControlService.removeEventListener(EVENT_MOVEMENT, movementEventHandler);
  }
};
