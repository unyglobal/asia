// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gojra","repository":"asia","path":"pakistan/punjab/gojra","depth":3,"parent":"pakistan/punjab","children":["chak-three-hundred-seventy-one","chak-three-hundred-sixty-four","gulistan-colony","kacha-gojra"]});
export const childModules = Object.freeze({"chak-three-hundred-seventy-one":"./chak-three-hundred-seventy-one/chak-three-hundred-seventy-one.js","chak-three-hundred-sixty-four":"./chak-three-hundred-sixty-four/chak-three-hundred-sixty-four.js","gulistan-colony":"./gulistan-colony/gulistan-colony.js","kacha-gojra":"./kacha-gojra/kacha-gojra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
