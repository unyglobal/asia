// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aghajari","repository":"asia","path":"iran/khuzestan/aghajari","depth":3,"parent":"iran/khuzestan","children":["mahalleh-ye-hefdah-e-shahrivar","mahalleh-ye-tank-e-sefid"]});
export const childModules = Object.freeze({"mahalleh-ye-hefdah-e-shahrivar":"./mahalleh-ye-hefdah-e-shahrivar/mahalleh-ye-hefdah-e-shahrivar.js","mahalleh-ye-tank-e-sefid":"./mahalleh-ye-tank-e-sefid/mahalleh-ye-tank-e-sefid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
