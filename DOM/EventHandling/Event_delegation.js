<!-- 
  * Event delegation is a technique in web development where instead of attaching event 
    handlers to individual elements, you attach them to a common parent element. 
  * The parent element then listens for events that are triggered by its child elements. 
  * When an event occurs, the parent element can identify the specific child element that 
    triggered the event and execute the appropriate event handler. 
  -->
<!DOCTYPE html>
<html>
  <head>
    <title>Event Delegation Example</title>
  </head>
  <body>
    <!-- HTML structure for the list of items -->
    <ul id="itemList">
      <li><span>Item 1</span><button class="complete-btn">Complete</button></li>
      <li><span>Item 2</span><button class="complete-btn">Complete</button></li>
      <li><span>Item 3</span><button class="complete-btn">Complete</button></li>
      <!-- More list items can be dynamically added later -->
    </ul>

    <script>
      // Event delegation example

      // Step 1: Get the parent element to attach the event listener
      const itemList = document.getElementById("itemList");

      // Step 2: Attach the event listener to the parent element
      itemList.addEventListener("click", (event) => {
        // Step 3: Identify the clicked element
        const clickedElement = event.target;

        // Step 4: Check if the clicked element has the desired class (complete-btn)
        if (clickedElement.classList.contains("complete-btn")) {
          // Step 5: Handle completing the item here
          // (For this example, we will change the button text to "Completed!")

          // Step 6: Add your custom code here to handle the "Complete" button action.
          // For instance, you can send a request to the server to update the item status.
          // You might also update the UI to indicate that the item is completed.

          // For this example, let's just change the text of the button after completing the item
          clickedElement.textContent = "Completed!";
        }
      });
    </script>
  </body>
</html>
