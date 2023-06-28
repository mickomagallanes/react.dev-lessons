/***************** Keeping Components Pure *********************/

/**
 * - Some JavaScript functions are pure. Pure functions only perform a calculation and nothing more.
 *     By strictly only writing your components as pure functions, you can avoid an entire
 *     class of baffling bugs and unpredictable behavior as your codebase grows.
 */

/******* Purity: Components as formulas  ********/

/**
 * In computer science (and especially the world of functional programming), a pure function
 *     is a function with the following characteristics:
 *
 * - It minds its own business. It does not change any objects or variables that existed before it was called.
 * - Same inputs, same output. Given the same inputs, a pure function should always return the same result.
 * 
 * - You might already be familiar with one example of pure functions: formulas in math:
 
       Consider this math formula: y = 2x.

       If x = 2 then y = 4. Always.

       If x = 3 then y = 6. Always.

       If x = 3, y won’t sometimes be 9 or –1 or 2.5 depending on the time of day or the state of the stock market.

       If y = 2x and x = 3, y will always be 6.

       If we made this into a JavaScript function, it would look like this:

       function double(number) {
              return 2 * number;
       }

       In the above example, double is a pure function. If you pass it 3, it will return 6. Always.
 *
 *
 */

/**
 * 
 * 
 * 

       function Recipe({ drinkers }) {
              return (
                     <ol>    
                     <li>Boil {drinkers} cups of water.</li>
                     <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
                     <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
                     </ol>
              );
       }

       export default function App() {
              return (
                     <section>
                     <h1>Spiced Chai Recipe</h1>
                     <h2>For two</h2>
                     <Recipe drinkers={2} />
                     <h2>For a gathering</h2>
                     <Recipe drinkers={4} />
                     </section>
              );
       }

       When you pass drinkers={2} to Recipe, it will return JSX containing 2 cups of water. Always.

       If you pass drinkers={4}, it will return JSX containing 4 cups of water. Always.

       Just like a math formula.

 * 
 */

/**
 * -You could think of your components as recipes: if you follow them and don’t introduce
 *     new ingredients during the cooking process, you will get the same dish every time. That
 *     “dish” is the JSX that the component serves to React to render.
 */

/******* Side Effects: (un)intended consequences  ********/

/**
 * - React’s rendering process must always be pure. Components should only return their JSX, and 
 *     not change any objects or variables that existed before rendering—that would make them impure!
 *     Here is a component that breaks this rule:
 
let guest = 0;

function Cup() {
  // Bad: changing a preexisting variable!
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}

 *
 * - This component is reading and writing a guest variable declared outside of it. This means 
 *     that calling this component multiple times will produce different JSX! And what’s more, 
 *     if other components read guest, they will produce different JSX, too, depending on when 
 *     they were rendered! That’s not predictable.
 * 
 * - You can fix this component by passing guest as a prop instead:
 
function Cup({ guest }) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}

 * 
 */

/**
 * - In general, you should not expect your components to be rendered in any particular order.
 *     It doesn’t matter if you call y = 2x before or after y = 5x: both formulas will resolve
 *     independently of each other.
 *
 * - In the same way, each component should only “think for itself”, and not attempt to
 *     coordinate with or depend upon others during rendering. Rendering is like a school exam:
 *     each component should calculate JSX on their own!
 */

/*******  Detecting impure calculations with StrictMode  ********/

/**
 * - In React there are three kinds of inputs that you can read while rendering: props, state,
 *    and context. You should always treat these inputs as read-only.
 *
 * - When you want to change something in response to user input, you should set state instead of
 *    writing to a variable. You should never change preexisting variables or objects while your
 *    component is rendering.
 *
 * - React offers a “Strict Mode” in which it calls each component’s function twice during
 *    development. By calling the component functions twice, Strict Mode helps find components
 *    that break these rules.
 *
 */

/*******  Local mutation: Your component’s little secret   ********/

/**
 * - In the above example, the problem was that the component changed a preexisting variable while 
 *    rendering. This is often called a “mutation” to make it sound a bit scarier. 
 * 
 * - Pure functions don’t mutate variables outside of the function’s scope or objects that were 
 *    created before the call—that makes them impure!
 * 
 * - However, it’s completely fine to change variables and objects that you’ve just created while rendering.
 * 
 * - In this example, you create an [] array, assign it to a cups variable, 
 *    and then push a dozen cups into it:
 
      function Cup({ guest }) {
        return <h2>Tea cup for guest #{guest}</h2>;
      }

      export default function TeaGathering() {
        let cups = [];
        for (let i = 1; i <= 12; i++) {
          cups.push(<Cup key={i} guest={i} />);
        }
        return cups;
      }
 
 - If the cups variable or the [] array were created outside the TeaGathering function, this would be 
    a huge problem! You would be changing a preexisting object by pushing items into that array.

 - However, it’s fine because you’ve created them during the same render, inside TeaGathering. 
    No code outside of TeaGathering will ever know that this happened. This is called 
    “local mutation”—it’s like your component’s little secret.
 * 
 * 
 */

/*******  Where you can cause side effects  ********/

/**
 * - These changes—updating the screen, starting an animation, changing the data—are called
 *    side effects. They’re things that happen “on the side”, not during rendering.
 *
 * - In React, side effects usually belong inside event handlers. Even though event handlers are defined
 *     inside your component, they don’t run during rendering! So event handlers don’t need to be pure.
 *
 * - If even handlers is not an option, use useEffect. This tells React to execute it later, after
 *    rendering, when side effects are allowed. However, this approach should be your last resort.
 */
