export type VISIBILITY_STATE = 'visible' | 'invisible';

class VisibilityService extends EventTarget {
  constructor() {
    super();
    const { visibilityChange } = this.getVisibilityApiNames();
    if (!visibilityChange) {
      console.warn('Visiblity API is not availible. Some of the features will not work.');
    }
    document.addEventListener(visibilityChange, this.handleVisibilityChange, false);
  }

  private handleVisibilityChange = () => {
    const { hidden } = this.getVisibilityApiNames();
    if (document[hidden]) {
      this.dispatchEvent(new Event('invisible' as VISIBILITY_STATE));
      return;
    }
    this.dispatchEvent(new Event('visible' as VISIBILITY_STATE));
  };

  private getVisibilityApiNames = (): {
    hidden?: string;
    visibilityChange?: string;
  } => {
    var hidden, visibilityChange;
    if (typeof document.hidden !== 'undefined') {
      // Opera 12.10 and Firefox 18 and later support
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }
    return { hidden, visibilityChange };
  };
}

declare global {
  interface Document {
    webkitHidden?: string;
    msHidden?: string;
  }
}
export default VisibilityService;
