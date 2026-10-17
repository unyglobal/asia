// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lebanon","repository":"asia","path":"lebanon","depth":1,"parent":"","children":["baalbek-hermel-governorate","beirut","bekaa","mount-lebanon","nabatieh","north-lebanon","south-governorate"]});
export const childModules = Object.freeze({"baalbek-hermel-governorate":"./baalbek-hermel-governorate/baalbek-hermel-governorate.js","beirut":"./beirut/beirut.js","bekaa":"./bekaa/bekaa.js","mount-lebanon":"./mount-lebanon/mount-lebanon.js","nabatieh":"./nabatieh/nabatieh.js","north-lebanon":"./north-lebanon/north-lebanon.js","south-governorate":"./south-governorate/south-governorate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
