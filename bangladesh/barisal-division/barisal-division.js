// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barisal-division","repository":"asia","path":"bangladesh/barisal-division","depth":2,"parent":"bangladesh","children":["ayla-patakata","barishal","bhandaria","bhola","burhanuddin","burirchar","charamaddi","gaurnadi","lalmohan","mathba","mehendiganj","nalchiti","natona","patuakhali","pirojpur"]});
export const childModules = Object.freeze({"ayla-patakata":"./ayla-patakata/ayla-patakata.js","barishal":"./barishal/barishal.js","bhandaria":"./bhandaria/bhandaria.js","bhola":"./bhola/bhola.js","burhanuddin":"./burhanuddin/burhanuddin.js","burirchar":"./burirchar/burirchar.js","charamaddi":"./charamaddi/charamaddi.js","gaurnadi":"./gaurnadi/gaurnadi.js","lalmohan":"./lalmohan/lalmohan.js","mathba":"./mathba/mathba.js","mehendiganj":"./mehendiganj/mehendiganj.js","nalchiti":"./nalchiti/nalchiti.js","natona":"./natona/natona.js","patuakhali":"./patuakhali/patuakhali.js","pirojpur":"./pirojpur/pirojpur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
