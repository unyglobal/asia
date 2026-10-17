// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rif-dimashq","repository":"asia","path":"syria/rif-dimashq","depth":2,"parent":"syria","children":["al-kiswah","al-qutayfah","an-nabk","at-tall","az-zabadani","babila","darayya","duma","harasta","irbin","jaramana","jayrud","muadamiyat-al-sham","qarah","qatana","sahnaya","yabrud","zakiyah"]});
export const childModules = Object.freeze({"al-kiswah":"./al-kiswah/al-kiswah.js","al-qutayfah":"./al-qutayfah/al-qutayfah.js","an-nabk":"./an-nabk/an-nabk.js","at-tall":"./at-tall/at-tall.js","az-zabadani":"./az-zabadani/az-zabadani.js","babila":"./babila/babila.js","darayya":"./darayya/darayya.js","duma":"./duma/duma.js","harasta":"./harasta/harasta.js","irbin":"./irbin/irbin.js","jaramana":"./jaramana/jaramana.js","jayrud":"./jayrud/jayrud.js","muadamiyat-al-sham":"./muadamiyat-al-sham/muadamiyat-al-sham.js","qarah":"./qarah/qarah.js","qatana":"./qatana/qatana.js","sahnaya":"./sahnaya/sahnaya.js","yabrud":"./yabrud/yabrud.js","zakiyah":"./zakiyah/zakiyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
