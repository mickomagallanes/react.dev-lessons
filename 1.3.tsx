// - In React, rendering logic and markup live together in the same place—components.

// - Each React component is a JavaScript function that may contain some markup that React renders into the browser. 

/* - JSX and React are two separate things. They’re often used together, but you can use them 
independently of each other. JSX is a syntax extension, while React is a JavaScript library. */

/* The Rules of JSX 
   1. Return a single root element.
      - To return multiple elements from a component, wrap them with a single parent tag.
      - If you don’t want to add an extra <div> to your markup, you can write <> and </> instead:
      - Why do multiple JSX tags need to be wrapped? JSX looks like HTML, but under the hood it is 
      transformed into plain JavaScript objects. You can’t return two objects from a function without 
      wrapping them into an array.

   2. Close all the tags 
      - JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, 
      and wrapping tags like <li>oranges must be written as <li>oranges</li>.

   3. camelCase all most of the things! 
      - JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.
      - Attributes can't contain dashes or reserved words like `class`ddeedsdsd

      
   - Components are a handy way to organize UI code and markup, even if some of them are only used once.
   - React-based frameworks take this a step further. Instead of using an empty HTML file and letting 
   React “take over” managing the page with JavaScript, they also generate the HTML automatically 
   from your React components. This allows your app to show some content before the JavaScript code loads.
*/