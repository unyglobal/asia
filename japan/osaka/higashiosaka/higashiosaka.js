// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"higashiosaka","repository":"asia","path":"japan/osaka/higashiosaka","depth":3,"parent":"japan/osaka","children":["fujitoshinden","kosaka","kosakahommachi","mikuriya","nakakosaka","shigita","shimokosaka"]});
export const childModules = Object.freeze({"fujitoshinden":"./fujitoshinden/fujitoshinden.js","kosaka":"./kosaka/kosaka.js","kosakahommachi":"./kosakahommachi/kosakahommachi.js","mikuriya":"./mikuriya/mikuriya.js","nakakosaka":"./nakakosaka/nakakosaka.js","shigita":"./shigita/shigita.js","shimokosaka":"./shimokosaka/shimokosaka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
