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
        use JavaScript’s filter() method to return just those people.
 */
