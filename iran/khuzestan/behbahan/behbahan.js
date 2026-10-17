// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"behbahan","repository":"asia","path":"iran/khuzestan/behbahan","depth":3,"parent":"iran/khuzestan","children":["mahalleh-ye-molla-ahuni","mahalleh-ye-nudjik","mahalleh-ye-par","mahalleh-ye-shahr-e-now"]});
export const childModules = Object.freeze({"mahalleh-ye-molla-ahuni":"./mahalleh-ye-molla-ahuni/mahalleh-ye-molla-ahuni.js","mahalleh-ye-nudjik":"./mahalleh-ye-nudjik/mahalleh-ye-nudjik.js","mahalleh-ye-par":"./mahalleh-ye-par/mahalleh-ye-par.js","mahalleh-ye-shahr-e-now":"./mahalleh-ye-shahr-e-now/mahalleh-ye-shahr-e-now.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
