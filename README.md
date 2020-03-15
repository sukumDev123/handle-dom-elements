# Handle Tag Element

## from:

```
const createElement = document.createElement("h1")
const createTextNode = document.createTextNode("Title page")
createElement.className = "titleClass"
createElement.appendChild(createTextNode)

```

## to:

```
const createTitlePage = HandleDomElement("h1" , "Title Page" , "titleClass")
```

## TEST TO CREATE WEBCOMPONENT
