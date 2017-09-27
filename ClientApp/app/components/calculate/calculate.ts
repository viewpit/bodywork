export class Calculate {
    public currentCount = 0;
    public collapsed = true;

    public position = 'top';
    public trigger = 'mouseover';

    public color = 'blue';
    public size = '';

    public toggled(open) {
        if (open) {
            console.log('opened');
        } else {
            console.log('closed');
        }
    }

    public incrementCounter() {
        this.currentCount++;
    }

    public textValue = '';
    public disabledValue = false;
    public setText() {
        this.textValue = 'something';
    }
    public setDisabled() {
        this.disabledValue = !this.disabledValue;
    }

    public email = '';

}
