export class StringifyValueConverter {
  toView(value) {
    if (value) {
        return JSON.stringify(value);
      } else {
        return "null object";
      }
  }

  fromView(value) {

  }
}

