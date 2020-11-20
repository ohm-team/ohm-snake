import HeadControls from './vendor/HeadControls';
import './vendor/HeadControls.js';

type EVENT_NAME = 'up' | 'down' | 'left' | 'right';

class HeadControlService extends EventTarget {
  private movementLocks: { [key in 'vertical' | 'horizontal']: boolean } = {
    vertical: false,
    horizontal: false,
  };

  constructor() {
    super();
    HeadControls.init({
      canvasId: 'head-preview',
      callbackMove: this.handleMove,
      callbackReady: function (errCode) {
        if (errCode) {
          console.log('ERROR: THREE.HeadControls NOT READY. errCode =', errCode);
        } else {
          HeadControls.toggle(true);
        }
      },
      NNCPath: './vendor/',
      animateDelay: 2, //avoid DOM lags
    });
  }

  private handleMove = (mv: {
    dRy: number;
    dRx: number;
    dz: number;
    expressions: {
      [key: number]: number;
    };
  }) => {
    if (mv.dRx !== 0) {
      this.handleAxisMovement({ axis: 'vertical', axisPosition: mv.dRx, maxValue: 'down', minValue: 'up' });
    }
    if (mv.dRy !== 0) {
      this.handleAxisMovement({ axis: 'horizontal', axisPosition: mv.dRy, maxValue: 'left', minValue: 'right' });
    }
  };

  private handleAxisMovement = ({
    axis,
    axisPosition,
    maxValue,
    minValue,
  }: {
    axis: 'horizontal' | 'vertical';
    axisPosition: number;
    maxValue: EVENT_NAME;
    minValue: EVENT_NAME;
  }) => {
    if (axisPosition < -10 && !this.movementLocks[axis]) {
      this.movementLocks[axis] = true;
      this.dispatchEvent(new Event(minValue));
      return;
    }
    if (axisPosition > 10 && !this.movementLocks[axis]) {
      this.movementLocks[axis] = true;
      this.dispatchEvent(new Event(maxValue));
      return;
    }
    if (axisPosition > -5 && axisPosition < 5) {
      this.movementLocks[axis] = false;
      return;
    }
  };
}

export default HeadControlService;
