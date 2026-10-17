// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sur","repository":"asia","path":"oman/southeastern-governorate/sur","depth":3,"parent":"oman/southeastern-governorate","children":["ar-rashah","as-sabkhah","as-sat","harat-al-balush","makha","muqraymatayn","ni-mah"]});
export const childModules = Object.freeze({"ar-rashah":"./ar-rashah/ar-rashah.js","as-sabkhah":"./as-sabkhah/as-sabkhah.js","as-sat":"./as-sat/as-sat.js","harat-al-balush":"./harat-al-balush/harat-al-balush.js","makha":"./makha/makha.js","muqraymatayn":"./muqraymatayn/muqraymatayn.js","ni-mah":"./ni-mah/ni-mah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
