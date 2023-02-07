import Page from "./PageModels";
export default class Book {
    pages: Page[];
    pageLength: Number;
    readingLocation: Number;

    constructor(pages: Page[]) {
        this.pages = pages;
        this.pageLength = pages.length;
        this.readingLocation = 1;
    }
}