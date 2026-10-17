// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tripoli","repository":"asia","path":"lebanon/north-lebanon/tripoli","depth":3,"parent":"lebanon/north-lebanon","children":["abou-samra","baladiye","ed-debbagha","el-maslakh","et-terbiaa","khannaq-hmara"]});
export const childModules = Object.freeze({"abou-samra":"./abou-samra/abou-samra.js","baladiye":"./baladiye/baladiye.js","ed-debbagha":"./ed-debbagha/ed-debbagha.js","el-maslakh":"./el-maslakh/el-maslakh.js","et-terbiaa":"./et-terbiaa/et-terbiaa.js","khannaq-hmara":"./khannaq-hmara/khannaq-hmara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
