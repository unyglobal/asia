// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dera-ismail-khan","repository":"asia","path":"pakistan/khyber-pakhtunkhwa/dera-ismail-khan","depth":3,"parent":"pakistan/khyber-pakhtunkhwa","children":["awanabad","chah-pippalwala","zakoriwali"]});
export const childModules = Object.freeze({"awanabad":"./awanabad/awanabad.js","chah-pippalwala":"./chah-pippalwala/chah-pippalwala.js","zakoriwali":"./zakoriwali/zakoriwali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
