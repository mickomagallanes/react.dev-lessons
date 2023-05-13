/***************** Passing Props to a Component *********************/

/* - Props might remind you of HTML attributes, but you can pass any JavaScript value through them,
 *  including objects, arrays, and functions.
 */

/* - Props are the information that you pass to a JSX tag. For example, className, src, alt, width,
 *  and height are some of the props you can pass to an <img>
 */

/* Passing props to a component 
   Step 1. Pass props to the child component:

      ///////////////////////////////////////////////////////////
         export default function Profile() {
            return (
               <Avatar
                  person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
                  size={100}
               />
            );
         }
      ///////////////////////////////////////////////////////////

      - If double curly braces after person= confuse you, recall they’re merely an object inside the JSX curlies.

   Step 2. Read props inside the child component
      - You can read these props by listing their names person, size separated by the commas inside 
      ({ and }) directly after function Avatar. This lets you use them inside the Avatar code, 
      like you would with a variable:

      ///////////////////////////////////////////////////////////
         function Avatar({ person, size }) {
         }
      ///////////////////////////////////////////////////////////

      - Parent and Child is independent from each other when handling props. Parent can manipulate the props to be
      passed and not think how the Child will use it. And Child can use the props without looking at Parent

      - Props are the only argument to your component! React component functions accept a single argument, 
      a props object:

      ///////////////////////////////////////////////////////////
         function Avatar(props) {
            let person = props.person;
            let size = props.size;
         }
      ///////////////////////////////////////////////////////////

      - Usually you don’t need the whole props object itself, so you destructure it into individual props.
*/

// - Specifying a default value for a prop:
function Avatar({ person, size = 100 }) {}

// - Forwarding props with the JSX spread syntax
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

// - Passing JSX as children. You will often use the children prop for visual wrappers:
function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}

/**
 * - This example illustrates that a component may receive different props over time.
 *  Props are not always static! Here, the time prop changes every second, and the
 *  color prop changes when you select another color. Props reflect a component’s data at
 *  any point in time, rather than only in the beginning.
 *
 * */

/* - However, props are immutable—a term from computer science meaning “unchangeable”. Don’t try to “change props”.
 *  When you need to respond to the user input (like changing the selected color), you will need to “set state”
 */

/**
 * Don’t try to “change props”. When you need to respond to the user input (like changing the
 * selected color), you will need to “set state”, which you can learn about
 * in State: A Component’s Memory.
 */

/**
 * Recap
 * - To pass props, add them to the JSX, just like you would with HTML attributes.
 * - To read props, use the function Avatar({ person, size }) destructuring syntax.
 * - You can specify a default value like size = 100, which is used for missing and undefined props.
 * - You can forward all props with <Avatar {...props} /> JSX spread syntax, but don’t overuse it!
 * - Nested JSX like <Card><Avatar /></Card> will appear as Card component’s children prop.
 * - Props are read-only snapshots in time: every render receives a new version of props.
 * - You can’t change props. When you need interactivity, you’ll need to set state.
 */
