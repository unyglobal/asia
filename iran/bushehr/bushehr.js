// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bushehr","repository":"asia","path":"iran/bushehr","depth":2,"parent":"iran","children":["ab-pakhsh","ahram","ali-shahr","bandar-e-deylam","bandar-e-deyr","bandar-e-genaveh","bandar-e-kangan","borazjan","choghadak","jam","khurmuj","nakhl-e-taqi"]});
export const childModules = Object.freeze({"ab-pakhsh":"./ab-pakhsh/ab-pakhsh.js","ahram":"./ahram/ahram.js","ali-shahr":"./ali-shahr/ali-shahr.js","bandar-e-deylam":"./bandar-e-deylam/bandar-e-deylam.js","bandar-e-deyr":"./bandar-e-deyr/bandar-e-deyr.js","bandar-e-genaveh":"./bandar-e-genaveh/bandar-e-genaveh.js","bandar-e-kangan":"./bandar-e-kangan/bandar-e-kangan.js","borazjan":"./borazjan/borazjan.js","choghadak":"./choghadak/choghadak.js","jam":"./jam/jam.js","khurmuj":"./khurmuj/khurmuj.js","nakhl-e-taqi":"./nakhl-e-taqi/nakhl-e-taqi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
