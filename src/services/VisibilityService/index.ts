import VisibilityService, { EVENT_CHANGE, VisibilityState } from './VisibilityService';

export type { VisibilityState };

let visibilityService: VisibilityService;

export const initVisibilityService = ({ isDebug }: { isDebug: boolean }): Promise<void> => {
  visibilityService = new VisibilityService();
  if (isDebug) {
    console.log('VisibilityService is initialised');
  }
  return Promise.resolve();
};

let changeEventHandler: (ev: CustomEvent<VisibilityState>) => void;

export const listenForVisibilityChange = ({ onVisibilityChange }: { onVisibilityChange: (visibility: VisibilityState) => void }) => {
  changeEventHandler = (ev: CustomEvent<VisibilityState>) => onVisibilityChange(ev.detail);
  visibilityService.addEventListener(EVENT_CHANGE, changeEventHandler);
};

export const unListenForVisibilityChange = () => {
  if (!changeEventHandler) {
    return;
  }
  visibilityService.removeEventListener(EVENT_CHANGE, changeEventHandler);
};
