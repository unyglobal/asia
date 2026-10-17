// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vinh-long","repository":"asia","path":"vietnam/vinh-long","depth":2,"parent":"vietnam","children":["ben-tre","binh-minh","duyen-hai","tra-vinh"]});
export const childModules = Object.freeze({"ben-tre":"./ben-tre/ben-tre.js","binh-minh":"./binh-minh/binh-minh.js","duyen-hai":"./duyen-hai/duyen-hai.js","tra-vinh":"./tra-vinh/tra-vinh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
