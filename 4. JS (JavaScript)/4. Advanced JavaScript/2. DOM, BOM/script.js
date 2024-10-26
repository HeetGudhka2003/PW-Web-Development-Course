// DOM and BOM Manipulation

// DOM (Document Object Model): It is a representation of an HTML document. It treats HTML as a tree and its elements as nodes.

// BOM (Browser Object Model): It is a representation of a browser window.

// DOM Properties and Methods

/*

1. document: It is a global object that represents the HTML document. It has various properties and methods that can be used to access and manipulate the document.

2. document.getElementById(): It is used to get an element by its id.

3. document.getElementsByClassName(): It is used to get all elements with a specific class name.

4. document.getElementsByTagName(): It is used to get all elements with a specific tag name.

5. document.querySelector(): It is used to get the first element that matches a specific CSS selector.

6. document.querySelectorAll(): It is used to get all elements that match a specific CSS selector.

7. document.createElement(): It is used to create new HTML elements.

8. document.createTextNode(): It is used to create new text nodes.

9. document.appendChild(): It is used to append a child element to a parent element.

10. document.removeChild(): It is used to remove a child element from a parent element.

11. document.addEventListener(): It is used to add an event listener to an element.

12. document.removeEventListener(): It is used to remove an event listener from an element.

13. document.setAttribute(): It is used to set an attribute on an element.

14. document.removeAttribute(): It is used to remove an attribute from an element.

15. document.getAttribute(): It is used to get the value of an attribute on an element.

16. document.style: It is used to set or get the style of an element.

17. document.title: It is used to set or get the title of the document.

18. document.URL: It is used to get the URL of the current document.

19. document.firstChild: It is used to get the first child element of an element.

20. document.lastChild: It is used to get the last child element of an element.

21. document.parentNode: It is used to get the parent element of an element.

22. document.childNodes: It is used to get all child elements of an element.

23. document.innerHTML: It is used to set or get the inner HTML of an element.

24. document.textContent: It is used to set or get the text content of an element.

25. document.location: It is used to get the location of the current document.

22. document.firstElementChild: It is used to get the first child element of an element.

23. document.lastElementChild: It is used to get the last child element of an element.

24. document.previousElementSibling: It is used to get the previous sibling element of an element.

25. document.nextElementSibling: It is used to get the next sibling element of an element.

*/

let heading = document.getElementById("heading");

heading.style.color = "red";
heading.textContent = "DOM Manipulation";
heading.style.fontSize = "30px";
heading.style.textAlign = "center";
heading.style.backgroundColor = "yellow";

let paragraph = document.getElementsByTagName("p")[0];

paragraph.style.color = "green";
paragraph.textContent = "This is a paragraph";
paragraph.style.fontSize = "20px";
paragraph.style.textAlign = "center";
paragraph.style.backgroundColor = "lightblue";

let orderedList = document.getElementsByClassName("ordered-list")[0];

orderedList.style.color = "blue";
orderedList.style.fontSize = "20px";
orderedList.style.textAlign = "center";
orderedList.style.backgroundColor = "lightgreen";

let listItem = document.querySelectorAll(".ordered-list li");

for (let i = 0; i < listItem.length; i++) {

    listItem[i].style.color = "purple";
    listItem[i].style.fontSize = "20px";
    listItem[i].style.textAlign = "center";
    listItem[i].style.backgroundColor = "lightpink";
}

let createElement = document.createElement("div");

createElement.style.color = "black";
createElement.textContent = "This is a div element";
createElement.style.fontSize = "20px";
createElement.style.textAlign = "center";
createElement.style.backgroundColor = "lightgray";

document.body.appendChild(createElement);

let removeElement = document.querySelector(".ordered-list");

removeElement.remove();