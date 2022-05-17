export function convertHtmlStringToDomElement(htmlString) {
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();

  return template.content.cloneNode(true);
}

export function convertDomElementToHtmlString(domElement) {
  const element = document.createElement('div')
  element.appendChild(domElement);

  return element.innerHTML;
}
