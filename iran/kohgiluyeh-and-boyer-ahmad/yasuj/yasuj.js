// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yasuj","repository":"asia","path":"iran/kohgiluyeh-and-boyer-ahmad/yasuj","depth":3,"parent":"iran/kohgiluyeh-and-boyer-ahmad","children":["mahalleh-ye-tall-zali","mahalleh-ye-zir-tall"]});
export const childModules = Object.freeze({"mahalleh-ye-tall-zali":"./mahalleh-ye-tall-zali/mahalleh-ye-tall-zali.js","mahalleh-ye-zir-tall":"./mahalleh-ye-zir-tall/mahalleh-ye-zir-tall.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
