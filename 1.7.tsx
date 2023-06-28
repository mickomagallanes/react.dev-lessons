/***************** Rendering Lists *********************/

/**
 * - You will often want to display multiple similar components from a collection of data.
 *    You can use the JavaScript array methods to manipulate an array of data. On this page,
 *    you’ll use filter() and map() with React to filter and transform your array of data into
 *    an array of components.
 */

/******* Rendering data from arrays  ********/

/**
 * Here’s a short example of how to generate a list of items from an array:
 * 
 * 1. Move the data into an array:
 
        const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
        ];

 * 2. Map the people members into a new array of JSX nodes, listItems:

        const listItems = people.map(person => <li>{person}</li>);

 * 3. Return listItems from your component wrapped in a <ul>:
        
        return <ul>{listItems}</ul>;

 */

/******* Filtering arrays of items ********/

/**
 * This data can be structured even more.
 * 
 
        const people = [{
            id: 0,
            name: 'Creola Katherine Johnson',
            profession: 'mathematician',
            }, {
            id: 1,
            name: 'Mario José Molina-Pasquel Henríquez',
            profession: 'chemist',
            }, {
            id: 2,
            name: 'Mohammad Abdus Salam',
            profession: 'physicist',
            }, {
            name: 'Percy Lavon Julian',
            profession: 'chemist',  
            }, {
            name: 'Subrahmanyan Chandrasekhar',
            profession: 'astrophysicist',
        }];

 * - Let’s say you want a way to only show people whose profession is 'chemist'. You can 
 *      use JavaScript’s filter() method to return just those people:
 
       const chemists = people.filter(person =>
              person.profession === 'chemist'
       );

       const listItems = chemists.map(person =>
              <li>
              <img
                     src={getImageUrl(person)}
                     alt={person.name}
              />
              <p>
                     <b>{person.name}:</b>
                     {' ' + person.profession + ' '}
                     known for {person.accomplishment}
              </p>
              </li>
       );

       return <ul>{listItems}</ul>;
 */

/**
 * - Arrow functions implicitly return the expression right after =>, so you didn’t need a
 *     return statement. However, you must write return explicitly if your => is followed
 *     by a { curly brace!
 */

/**
 * Keeping list items in order with key
 * 
 * - You need to give each array item a key — a string or a number that uniquely identifies 
 *     it among other items in that array:


       <li key={person.id}>...</li>


 * - JSX elements directly inside a map() call always need keys!
 * - Rather than generating keys on the fly, you should include them in your data:
 
       export const people = [{
              id: 0, // Used in JSX as a key
              name: 'Creola Katherine Johnson',
              profession: 'mathematician',
              accomplishment: 'spaceflight calculations',
              imageId: 'MK3eW3A'
       }, {
              id: 1, // Used in JSX as a key
              name: 'Mario José Molina-Pasquel Henríquez',
              profession: 'chemist',
              accomplishment: 'discovery of Arctic ozone hole',
              imageId: 'mynHUSa'
       }, {
              id: 2, // Used in JSX as a key
              name: 'Mohammad Abdus Salam',
              profession: 'physicist',
              accomplishment: 'electromagnetism theory',
              imageId: 'bE7W1ji'
       }];


 * 
 */

/**
 * Displaying several DOM nodes for each list item
 * 
 * - What do you do when each item needs to render not one, but several DOM nodes?
 *      The short <>...</> Fragment syntax won’t let you pass a key, so you need to either group
 *      them into a single <div>, or use the slightly longer and more explicit <Fragment> syntax:

       const listItems = people.map(person =>
              <Fragment key={person.id}>
                     <h1>{person.name}</h1>
                     <p>{person.bio}</p>
              </Fragment>
       );

       
 *
 */

/**
 *
 * Where to get your key
 *
 * - Data from a database: If your data is coming from a database, you can use
 *     the database keys/IDs, which are unique by nature.
 *
 * - Locally generated data: If your data is generated and persisted locally (e.g. notes
 *     in a note-taking app), use an incrementing counter, crypto.randomUUID() or a
 *     package like uuid when creating items.
 *
 */

/**
 *
 * Rules of keys
 *
 * - Keys must be unique among siblings. However, it’s okay to use the same keys for
 *     JSX nodes in different arrays.
 *
 * - Keys must not change or that defeats their purpose! Don’t generate them while rendering.
 *
 */

/**
 * Pitfall
 *
 * - Never use the index of an array as a key, that's what React does by default and it might cause a bug
 *
 * - Do not generate keys on the fly like: Math.random(). This will cause keys to never match up
 *     between renders, leading to all your components and DOM being recreated every time. Not only
 *     is this slow, but it will also lose any user input inside the list items. Instead, use a stable
 *     ID based on the data.
 *
 * - Note that your components won’t receive key as a prop. It’s only used as a hint by React
 *     itself. If your component needs an ID, you have to pass it as a separate prop
 *
 *
 */
