class Login extends HTMLElement {
  constructor() {
    super();
    // Add initialization code here
    // Create a shadow root to encapsulate the custom element's styles
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
    <style>
    .container
    {
        display:flex;
        flex-direction:column;
        row-gap:1rem;
        justify-content: center;
        align-items:center;
        padding:1rem;
       width:300px;
       overflow:hidden;
    }
    input
    {

        margin-left:0.5rem
        width:100%;
        padding: 0.3rem;
    }
    label
    {
        display:block;
    }
    </style>
    <form onsubmit="handleClick"> 
      <!-- Add custom HTML for the custom element -->
      <div class="container">
      <div class="userName">
        <label for="">UserName</label> <input type="text" required/>
      </div>
      <div class="password">
        <label for="">Password</label>
        <input type="text" required />
      </div>
      <button type="submit">Submit</button>
    </div>
    `;
    // Add event listener to the button
    const form = this.shadowRoot.querySelector("form");
    form.addEventListener("submit", (event) => this.handleSubmit(event));
  }
  // Define custom behavior and methods here
  handleSubmit() {
    alert("Submitted");
  }
}

// Register the custom element with a custom tag name
customElements.define("login-page", Login);
