// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yemen","repository":"asia","path":"yemen","depth":1,"parent":"","children":["abyan-governorate","aden","al-bayda","al-hudaydah","al-jawf","amanat-alasimah","dhamar","hajjah","ibb-governorate","lahij","ma-rib","muhafazat-hadramaout","omran","sa-dah","sanaa-governorate","shabwah","ta-izz"]});
export const childModules = Object.freeze({"abyan-governorate":"./abyan-governorate/abyan-governorate.js","aden":"./aden/aden.js","al-bayda":"./al-bayda/al-bayda.js","al-hudaydah":"./al-hudaydah/al-hudaydah.js","al-jawf":"./al-jawf/al-jawf.js","amanat-alasimah":"./amanat-alasimah/amanat-alasimah.js","dhamar":"./dhamar/dhamar.js","hajjah":"./hajjah/hajjah.js","ibb-governorate":"./ibb-governorate/ibb-governorate.js","lahij":"./lahij/lahij.js","ma-rib":"./ma-rib/ma-rib.js","muhafazat-hadramaout":"./muhafazat-hadramaout/muhafazat-hadramaout.js","omran":"./omran/omran.js","sa-dah":"./sa-dah/sa-dah.js","sanaa-governorate":"./sanaa-governorate/sanaa-governorate.js","shabwah":"./shabwah/shabwah.js","ta-izz":"./ta-izz/ta-izz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
