// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hormozgan","repository":"asia","path":"iran/hormozgan","depth":2,"parent":"iran","children":["bandar-abbas","bandar-e-khamir","bandar-e-kong","bandar-e-lengeh","jask","kish","minab","parsian","qeshm","rudan"]});
export const childModules = Object.freeze({"bandar-abbas":"./bandar-abbas/bandar-abbas.js","bandar-e-khamir":"./bandar-e-khamir/bandar-e-khamir.js","bandar-e-kong":"./bandar-e-kong/bandar-e-kong.js","bandar-e-lengeh":"./bandar-e-lengeh/bandar-e-lengeh.js","jask":"./jask/jask.js","kish":"./kish/kish.js","minab":"./minab/minab.js","parsian":"./parsian/parsian.js","qeshm":"./qeshm/qeshm.js","rudan":"./rudan/rudan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
