import HeadControls from './vendor/HeadControls';
import './vendor/HeadControls.js';

class HeadControlService {
  constructor() {
    HeadControls.init({
      canvasId: 'head-preview',
      callbackMove: this.handleMove,
      callbackReady: function (errCode) {
        if (errCode) {
          console.log('ERROR: THREE.HeadControls NOT READY. errCode =', errCode);
        } else {
          console.log('INFO: THREE.HeadControls ARE READY :)');
          HeadControls.toggle(true);
        }
      },
      NNCPath: '/vendor/',
      animateDelay: 2, //avoid DOM lags
    });
  }

  private handleMove = (mv) => {
      console.log(mv);
  };
}

export default HeadControlService;
