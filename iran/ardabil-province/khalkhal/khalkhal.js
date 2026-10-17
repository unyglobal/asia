// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khalkhal","repository":"asia","path":"iran/ardabil-province/khalkhal","depth":3,"parent":"iran/ardabil-province","children":["mahalleh-ye-andabil-yari","mahalleh-ye-guni","mahalleh-ye-hamzehabad","mahalleh-ye-nasir-vaziri","shahrak-e-bahonar","shahrak-e-beheshti","shahrak-e-janbazan"]});
export const childModules = Object.freeze({"mahalleh-ye-andabil-yari":"./mahalleh-ye-andabil-yari/mahalleh-ye-andabil-yari.js","mahalleh-ye-guni":"./mahalleh-ye-guni/mahalleh-ye-guni.js","mahalleh-ye-hamzehabad":"./mahalleh-ye-hamzehabad/mahalleh-ye-hamzehabad.js","mahalleh-ye-nasir-vaziri":"./mahalleh-ye-nasir-vaziri/mahalleh-ye-nasir-vaziri.js","shahrak-e-bahonar":"./shahrak-e-bahonar/shahrak-e-bahonar.js","shahrak-e-beheshti":"./shahrak-e-beheshti/shahrak-e-beheshti.js","shahrak-e-janbazan":"./shahrak-e-janbazan/shahrak-e-janbazan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
