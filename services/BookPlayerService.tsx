// determines how many pages and what content each page has for a given screen size
export default class BookPlayerService{
    public bookPages = {}

    public calculatePages(textInput: string){
        var textContent = textInput;
        var boxParent = document.getElementById('parent');
        while (textContent.length > 0) {
            var boxContent = document.createElement('div');
            boxContent.className = 'content __measuring';
            boxParent.appendChild(boxContent);
        
            var indexOfSpace = textContent.indexOf(' ');
            var lastIndexOfSpace = indexOfSpace;
            while (indexOfSpace != -1 && boxContent.offsetHeight < 100) {
                boxContent.innerHTML = textContent.substring(0, indexOfSpace);
                lastIndexOfSpace = indexOfSpace;
                indexOfSpace = textContent.indexOf(' ', indexOfSpace + 1);
            }
            if (indexOfSpace == -1) {
                boxContent.innerHTML = textContent;
                textContent = '';
            }
            else {
                textContent = textContent.substring(lastIndexOfSpace + 1);
            }
        
            boxContent.className = 'content';
        }
    }
}