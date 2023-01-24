export default class Page {
    type: String;
    value: String[] | String;

    constructor(type: string, value: String[] | String) {
        this.type = type;
        this.value = value;
    }
}