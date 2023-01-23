

export class DropdownOptions {

    public label?: string;
    public value: any;

    constructor(options?: any) {
        if ( options ) {
            if ( this.label ) this.label = options['label'];
            this.value = options['value'];
        }
    }

    static parseArray(options: any[]) {
        let a_options: DropdownOptions[] = new Array<DropdownOptions>();

        if (options) {
            options.forEach(option => {
                a_options.push(new DropdownOptions(option));
            });
        }
        return a_options;
    }


}