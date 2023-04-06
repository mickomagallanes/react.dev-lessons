// - `export default` should be used in importing and exporting

// - React components are functions, but the name of it should start with a capital letter

// - Non-one-liner markup should be enclosed with parentheses on return

/* - React sees <section> as HTML tag because it starts with lowercase, React sees <Profile> as a
component because it starts with uppercase. */

/* - Components are regular JavaScript functions, so you can keep multiple components in the same file.
 This is convenient when components are relatively small or tightly related to each other. 
 If this file gets crowded, you can always move a component to a separate file. */

// - Never nest a definition of a component into each other

/* Components all the way down 
   - Your React application begins at a “root” component. 
   - If you use the framework Next.js, the root component is defined in pages/index.js
   - Components are a handy way to organize UI code and markup, even if some of them are only used once.
   - React-based frameworks take this a step further. Instead of using an empty HTML file and letting 
   React “take over” managing the page with JavaScript, they also generate the HTML automatically 
   from your React components. This allows your app to show some content before the JavaScript code loads.
*/


/********** Challenge 1 of 4: Export the component *********/
/*                                                         //
function Profile() {                                       //
  return (                                                 //
    <img                                                   //
      src="https://i.imgur.com/lICfvbD.jpg"                //
      alt="Aklilu Lemma"                                   //
    />                                                     //
  );                                                       //
}                                                          //
*/                                                         //
                                                           //
export default function Profile() {                        //
  return (                                                 //
    <img                                                   //
      src="https://i.imgur.com/lICfvbD.jpg"                //
      alt="Aklilu Lemma"                                   //
    />                                                     //
  );                                                       //
}                                                          //
/////////////////////////////////////////////////////////////


/********** Challenge 2 of 4: Fix the return statement *****************************/
/*                                                                                 //
export default function Profile() {                                                //
  return                                                                           //
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;        //
}                                                                                  //
*/                                                                                 //
                                                                                   //
export default function Profile() {                                                //
  return <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;   //
}                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////


/********** Challenge 3 of 4: Spot the mistake  ***************/                                                        
/*                                                            //
function profile() {                                          //
    return (                                                  //
      <img                                                    //
        src="https://i.imgur.com/QIrZWGIs.jpg"                //
        alt="Alan L. Hart"                                    //
      />                                                      //
    );                                                        //
  }                                                           //
                                                              //
  export default function Gallery() {                         //
    return (                                                  //
      <section>                                               //
        <h1>Amazing scientists</h1>                           //
        <profile />                                           //
        <profile />                                           //
        <profile />                                           //
      </section>                                              //
    );                                                        //
  }                                                           //
*/                                                            //
                                                              //
function Profile() {                                          //
  return (                                                    //
    <img                                                      //
      src="https://i.imgur.com/QIrZWGIs.jpg"                  //
      alt="Alan L. Hart"                                      //
    />                                                        //
  );                                                          //
}                                                             //
                                                              //
export default function Gallery() {                           //
  return (                                                    //
    <section>                                                 //
      <h1>Amazing scientists</h1>                             //
      <Profile />                                             //
      <Profile />                                             //
      <Profile />                                             //
    </section>                                                //
  );                                                          //
}                                                             //
////////////////////////////////////////////////////////////////


