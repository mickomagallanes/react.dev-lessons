/***************** Conditional Rendering *********************/

/**
 * - Your components will often need to display different things depending on different conditions.
 *    In React, you can conditionally render JSX using JavaScript syntax like if statements, &&,
 *    and ? : operators.
 */

/******* Conditional returning JSX ********/
/**
 * 
 * - Notice that some of the Item components have their isPacked prop set to true instead of false. 
 *    You want to add a checkmark (✔) to packed items if isPacked={true}.
 *    You can write this as an if/else statement like so:

      if (isPacked) {
      return <li className="item">{name} ✔</li>;
      }
      return <li className="item">{name}</li>;

 */

/**
 * Conditionally returning nothing with null 
 * 
 * - In some situations, you won’t want to render anything at all. For example, say you don’t
 *    want to show packed items at all. A component must return something. In this case,
 *    you can return null:

      if (isPacked) {
      return null;
      }
      return <li className="item">{name}</li>;

 * - If isPacked is true, the component will return nothing, null. Otherwise, 
      it will return JSX to render.
 * - In practice, returning null from a component isn’t common because it might surprise a developer 
      trying to render it. More often, you would conditionally include or exclude the component 
      in the parent component’s JSX.
 */

/******* Conditionally including JSX  ********/

/**
 *
      if (isPacked) {
      return <li className="item">{name} ✔</li>;
      }
      return <li className="item">{name}</li>;

 * - While the duplication on the code above isn’t harmful, it could make your code harder to maintain.
       What if you want to change the className? You’d have to do it in two 
       places in your code! In such a situation, you could conditionally include a 
       little JSX to make your code more DRY.
 */

/**
 * Conditional (ternary) operator (? :) 
 * - Instead of duplicating, we can write this:
 
      return (
      <li className="item">
         {isPacked ? name + ' ✔' : name}
      </li>
      );

 * - You can read it as “if isPacked is true, then (?) render name + ' ✔', otherwise (:) render name”.
 */

/**
 * Are these two examples fully equivalent?
 *
 * - If you’re coming from an object-oriented programming background, you might assume that the
 *    two examples above are subtly different because one of them may create two different “instances”
 *    of <li>. But JSX elements aren’t “instances” because they don’t hold any internal state and
 *    aren’t real DOM nodes. They’re lightweight descriptions, like blueprints. So these two examples,
 *    in fact, are completely equivalent.
 */

/**
 * - If your components get messy with too much nested conditional markup, consider extracting
 *    child components to clean things up.
 */

/**
 *  Logical AND operator (&&) 
 *  - With &&, you could conditionally render the checkmark only if isPacked is true:

      return (
         <li className="item">
            {name} {isPacked && '✔'}
         </li>
      );
 
 * - You can read this as “if isPacked, then (&&) render the checkmark, otherwise, render nothing”.
 * - A JavaScript && expression returns the value of its right side (in our case, the checkmark)
 *    if the left side (our condition) is true. But if the condition is false, the whole 
 *    expression becomes false. React considers false as a “hole” in the JSX tree, just like 
 *    null or undefined, and doesn’t render anything in its place.
 * 
 * - Don’t put numbers on the left side of &&. To test the condition, JavaScript converts the
 *    left side to a boolean automatically. However, if the left side is 0, then the whole 
 *    expression gets that value (0), and React will happily render 0 rather than nothing.
 *    (my personal preference is use !! to convert a number to boolean)
 */

/**
 * Conditionally assigning JSX to a variable
 * - Use an if statement to reassign a JSX expression to itemContent if isPacked is true:
 *
      let itemContent = name;
      if (isPacked) {
         itemContent = name + " ✔";
      }

 * - This style is the most verbose, but it’s also the most flexible. Here it is in action:
 */

/**
 * Recap
 * - In React, you control branching logic with JavaScript.
 * - You can return a JSX expression conditionally with an if statement.
 * - You can conditionally save some JSX to a variable and then include it inside other JSX by
 *    using the curly braces.
 * - In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
 * - In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
 * - The shortcuts are common, but you don’t have to use them if you prefer plain if.
 */

/**
 * Challenge 1 of 3
 * 
 
      function Item({ name, isPacked }) {
      return (
         <li className="item">
            {name} {isPacked ? '✔' : '❌'}
         </li>
      );
      }

 */

/**
 * Challenge 2 of 3
 * 
 
      function Item({ name, importance }) {  
         return (
            <li className="item">
               {name} {!!importance && <i> (Importance: {importance}) </i>}
            </li>
         );
      }

 */

/**
 * Challenge 3 of 3
 * 
 
      function Drink({ name }) {
         let plant, caffeine, age;

         if (name === 'tea') {
            plant = 'leaf';
            caffeine = '15–70 mg/cup';
            age = '4,000+ years';
         } else if (name === 'coffee') {
            plant = 'bean';
            caffeine = '80–185 mg/cup';
            age = '1,000+ years';
         }
         
         return (
            <section>
               <h1>{name}</h1>
               <dl>
               <dt>Part of plant</dt>
               <dd>{plant}</dd>
               <dt>Caffeine content</dt>
               <dd>{caffeine}</dd>
               <dt>Age</dt>
               <dd>{age}</dd>
               </dl>
            </section>
         );
      }

      export default function DrinkList() {
         return (
            <div>
               <Drink name="tea" />
               <Drink name="coffee" />
            </div>
         );
      }

 */
