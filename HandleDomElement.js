function HandleDomElement(elementTaget, textValue, className) {
  const elementDocument = document.createElement(elementTaget);
  const textValueIsNotNull = () => {
    const createTextNode = document.createTextNode(textValue);
    elementDocument.appendChild(createTextNode);
  };
  const classNameIsNotNull = () => (elementDocument.className = className);
  textValue && textValueIsNotNull();
  className && classNameIsNotNull();
  return elementDocument;
}
