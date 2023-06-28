/*
 * - To reduce the potential confusion between default and named exports, some teams choose to only
 *    stick to one style (default or named), or avoid mixing them in a single file. Do what works best for you!
 */

/**
 * - Props are read-only snapshots in time: every render receives a new version of props.
 * - You can’t change props. When you need interactivity, you’ll need to set state.
 */

/**
 *  - In some situations, you won’t want to render anything at all. For example, say you don’t
 *    want to show packed items at all. A component must return something. In this case,
 *    you can return null
 *
 * - In practice, returning null from a component isn’t common because it might surprise a developer
 *    trying to render it. More often, you would conditionally include or exclude the component
 *    in the parent component’s JSX.
 */

/**
 * - Do not generate keys on the fly like: Math.random(). This will cause keys to never match up
 *      between renders, leading to all your components and DOM being recreated every time. Not only
 *      is this slow, but it will also lose any user input inside the list items. Instead, use a stable
 *      ID based on the data.
 */

/**
 * -You could think of your components as recipes: if you follow them and don’t introduce
 *     new ingredients during the cooking process, you will get the same dish every time. That
 *     “dish” is the JSX that the component serves to React to render.
 */

/**
 * React’s rendering process must always be pure. Components should only return their JSX,
 *  and not change any objects or variables that existed before rendering—that would make them impure!
 */

/**
 * - You should never change preexisting variables or objects while your component is rendering.
 *      However, it’s completely fine to change variables and objects that you’ve just created while
 *      rendering.
 *
 *
 */
