/***************** JavaScript in JSX with Curly Braces *********************/

// - Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup.
// In this situation, you can use curly braces in your JSX to open a window to JavaScript.

// - When you want to pass a string attribute to JSX, you put it in single or double quotes:

export default function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}

////////////////////////////////////////////////////////////////////////////////////////////////
// - But what if you want to dynamically specify the src or alt text? You could use a value
// from JavaScript by replacing " and " with { and }:

export default function Avatar() {
  const avatar = "https://i.imgur.com/7vQD0fPs.jpg";
  const description = "Gregorio Y. Zara";
  return <img className="avatar" src={avatar} alt={description} />;
}
///////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////
// - The example below first declares a name for the scientist, name,
// then embeds it with curly braces inside the <h1>:
export default function TodoList() {
  const name = "Gregorio Y. Zara";
  return <h1>{name}'s To Do List</h1>;
}
///////////////////////////////////////////////////////////////////

// - Any JavaScript expression will work between curly braces, including function calls like formatDate()

/* Where to use curly braces 
   1. As text directly inside a JSX tag: <h1>{name}'s To Do List</h1> works, but <{tag}>Gregorio Y. 
   Zara's To Do List</{tag}> will not.

   2. As attributes immediately following the = sign: src={avatar} will read the avatar variable, 
   but src="{avatar}" will pass the string "{avatar}".

*/

/* - You can even pass objects in JSX:

  person={{ name: "Hedy Lamarr", inventions: 5 }}
  
*/

/////////////////////////////////////////////////////////////////////////////////////////////
// - You can move several expressions into one object, and reference them in your JSX inside curly braces:
<h1>{person.name}'s Todos</h1>;
/////////////////////////////////////////////////////////////////////////////////////////////
