// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tongyeong","repository":"asia","path":"south-korea/gyeongsangnam-do/tongyeong","depth":3,"parent":"south-korea/gyeongsangnam-do","children":["chongnyang-dong","chungang-dong","puksin-dong"]});
export const childModules = Object.freeze({"chongnyang-dong":"./chongnyang-dong/chongnyang-dong.js","chungang-dong":"./chungang-dong/chungang-dong.js","puksin-dong":"./puksin-dong/puksin-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
