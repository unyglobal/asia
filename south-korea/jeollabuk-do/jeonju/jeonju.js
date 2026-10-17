// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jeonju","repository":"asia","path":"south-korea/jeollabuk-do/jeonju","depth":3,"parent":"south-korea/jeollabuk-do","children":["chungang-dong","chungnosongi-dong","p-ungnam-dong","sonosong-dong"]});
export const childModules = Object.freeze({"chungang-dong":"./chungang-dong/chungang-dong.js","chungnosongi-dong":"./chungnosongi-dong/chungnosongi-dong.js","p-ungnam-dong":"./p-ungnam-dong/p-ungnam-dong.js","sonosong-dong":"./sonosong-dong/sonosong-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
