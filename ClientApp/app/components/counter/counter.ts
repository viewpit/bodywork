export class Counter {
    public currentCount = 0;
    public collapsed = true;

    public position = 'top';
    public trigger = 'mouseover';

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
}
