import VisibilityService, { VISIBILITY_STATE } from './VisibilityService';

export type { VISIBILITY_STATE };

export const initVisibilityService = ({ onVisibilityChange }: { onVisibilityChange: (visibility: VISIBILITY_STATE) => void }): Promise<void> => {
  const visibilityService = new VisibilityService();
  visibilityService.addEventListener('visible' as VISIBILITY_STATE, () => onVisibilityChange('visible'));
  visibilityService.addEventListener('invisible' as VISIBILITY_STATE, () => onVisibilityChange('invisible'));
  return Promise.resolve();
};
