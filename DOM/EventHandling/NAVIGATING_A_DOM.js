//**************** NAVIGATING A DOM (THEORY AND EXAMPLE)****************
/*
Question-1: What is NODE in DOM

          * A node in the DOM (Document Object Model) tree is an object that represents an element,
            attribute, or piece of text in an HTML or XML document. 
          *  Nodes can be manipulated and accessed using JavaScript, allowing dynamic modifications of the document.

Different types of nodes in the DOM tree include:

            Element nodes: These represent HTML elements, such as <div>, <p>, <ul>, etc. Element nodes can have attributes, child nodes, and text content.
            
            Text nodes: These represent the text content within an element. For example, the text inside a <p> element would be a text node.
            
            Attribute nodes:    hese represent attributes of an element. For instance, the src attribute of an <img> tag would be an attribute node.
            
            Comment nodes: These represent comment content within an HTML document. Comments are represented by the <!-- ... --> syntax.
            
            Document nodes: This is the root node of the DOM tree, representing the entire HTML or XML document.

Theory:

Navigating Between Nodes:

            You can use the following node properties to navigate between nodes with JavaScript:
            > parentNode
            > childNodes[nodenumber]
            > firstChild
            > lastChild
            > nextSibling
            > previousSibling

Question 2) What is the difference between childNodes and children property?

             Both childNodes and children are properties of an element node in the DOM.

             childNodes: This property returns a live collection of all child nodes of an element, including text nodes, 
                         element nodes, and comment nodes. It includes all nodes, not just element nodes, making it a NodeList.

               children: * This property returns a live HTMLCollection of all child elements of an element. 
                         *  It includes only element nodes, filtering out text nodes and comment nodes. 
                         *  As it's an HTMLCollection, it only contains elements.

Question 3) How can you check whether an element has child nodes or not?
             * To check if an element has child nodes, you can use the hasChildNodes() method. 
             * It returns a Boolean value indicating whether the element has any child nodes or not.

Theory: 
           In the DOM, elements are represented by element nodes, and each element has a corresponding nodeType. 
           Here are all the element nodes and their corresponding nodeType values:

            1)  Element Node: nodeType value is 1.
                Examples: <div>, <p>, <span>, <a>, <img>, <ul>, <li>, etc.
            
           2)   Attribute Node: nodeType value is 2.
                Examples: href attribute, src attribute, data-* attributes, etc.
            
           3)   Text Node: nodeType value is 3.
                Examples: Text content inside an element (e.g., "Hello World").
            
           4)   Comment Node: nodeType value is 8.
                Example: <!-- This is a comment -->.
            
           5)   Document Node: nodeType value is 9.
                This is the root of the DOM tree, representing the entire HTML or XML document.
            
           6)   Document Type Node: nodeType value is 10.
                This node represents the document type declaration (<!DOCTYPE>).
            
           7)   Document Fragment Node: nodeType value is 11.
                This is an artificial node that can hold a group of nodes without being part of the actual DOM tree.
          
*/


