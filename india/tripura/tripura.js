// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tripura","repository":"asia","path":"india/tripura","depth":2,"parent":"india","children":["agartala","ambasa","barjala","belonia","bisalgarh","charipara","dharmanagar","dukli","kailashahar","kanchanpur","khowai","teliamura"]});
export const childModules = Object.freeze({"agartala":"./agartala/agartala.js","ambasa":"./ambasa/ambasa.js","barjala":"./barjala/barjala.js","belonia":"./belonia/belonia.js","bisalgarh":"./bisalgarh/bisalgarh.js","charipara":"./charipara/charipara.js","dharmanagar":"./dharmanagar/dharmanagar.js","dukli":"./dukli/dukli.js","kailashahar":"./kailashahar/kailashahar.js","kanchanpur":"./kanchanpur/kanchanpur.js","khowai":"./khowai/khowai.js","teliamura":"./teliamura/teliamura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
