/**
 * Cree et retourne un élément HTML de type paragraphe contenant le texte String souhaité
 * @param string du texte
 * @returns {ChildNode} HTML element representant un paragraphe
 */
function stringToHTMLParagraph(string){
    let template = document.createElement('template');
    html = "<p>"+ string.trim() +"</p>"; // Never return a text node of whitespace as the result
    template.innerHTML = html;
    template.content.firstChild.setAttribute("id","id" + Math.random().toString(16).slice(2));
    return template.content.firstChild;
}

/**
 *
 * @param fatherSelector
 * @param string
 */
function appendIn(fatherSelector, string){
    document.querySelector(fatherSelector).append(stringToHTMLParagraph(string));
}

/** Convertit une String HTML representant un element HTML en object HTML manipulable par le DOM du browser
 * @param {String} HTML representing a single element
 * @return {Element} HTML
 */
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    template.content.firstChild.setAttribute("id","id" + Math.random().toString(16).slice(2));
    return template.content.firstChild;
}