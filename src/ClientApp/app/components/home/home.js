import { inject } from 'aurelia-framework';
import { MdToastService } from 'aurelia-materialize-bridge';

@inject(MdToastService)
export class Home {

  password = '';
  email = '';
  number = 0;
  floatingNumber = 0.00;
  time = null;

  selectedDate = null;

  setDate() {
    let date = new Date();
    this.selectedDate = date;
  }

  constructor(toast) {
    this.toast = toast;
  }

  showDefaultToast() {
    this.toast.show('I am a toast!', 4000);
  }

  showStyledToast() {
    this.toast.show("I've got style!", 4000, 'rounded blue');
  }

  showToastWithPromise() {
    this.toast.show('When finished, I trigger another toast.', 2000).then(() => {
      this.toast.show('I am a toast called by a callback of another toast!', 2000);
    });
  }

}
