// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balkan","repository":"asia","path":"turkmenistan/balkan","depth":2,"parent":"turkmenistan","children":["balkanabat","bereket","gumdag","gyzylarbat","jebel","magtymguly","turkmenbasy"]});
export const childModules = Object.freeze({"balkanabat":"./balkanabat/balkanabat.js","bereket":"./bereket/bereket.js","gumdag":"./gumdag/gumdag.js","gyzylarbat":"./gyzylarbat/gyzylarbat.js","jebel":"./jebel/jebel.js","magtymguly":"./magtymguly/magtymguly.js","turkmenbasy":"./turkmenbasy/turkmenbasy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
