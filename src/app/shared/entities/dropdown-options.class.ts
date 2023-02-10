// class to parse some array of objects with different attributes
export class DropdownOptions<T> {

    public label?: string;
    public value: any;

    constructor(options: any, propertyLabel: string, propertyValue: string) {
        this.label = options[propertyLabel];
        this.value = options[propertyValue];
    }

    static parseArray(options: any[], propertyLabel: string, propertyValue: string) {
        let a_options: Array<DropdownOptions<any>> = new Array<DropdownOptions<any>>();

        if (options) {
            options.forEach(option => {
                a_options.push(new DropdownOptions(option, propertyLabel, propertyValue));
            });
        }
        return a_options;
    }


}