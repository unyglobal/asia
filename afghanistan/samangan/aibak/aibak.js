// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aibak","repository":"asia","path":"afghanistan/samangan/aibak","depth":3,"parent":"afghanistan/samangan","children":["darah-ye-zhowandun","kartah-ye-khurasan","kartah-ye-mir-kotal","kartah-ye-murzarbarat-ali","kartah-ye-sabz-push","masjid-e-haji-muhammad-omar","pashah-khanah"]});
export const childModules = Object.freeze({"darah-ye-zhowandun":"./darah-ye-zhowandun/darah-ye-zhowandun.js","kartah-ye-khurasan":"./kartah-ye-khurasan/kartah-ye-khurasan.js","kartah-ye-mir-kotal":"./kartah-ye-mir-kotal/kartah-ye-mir-kotal.js","kartah-ye-murzarbarat-ali":"./kartah-ye-murzarbarat-ali/kartah-ye-murzarbarat-ali.js","kartah-ye-sabz-push":"./kartah-ye-sabz-push/kartah-ye-sabz-push.js","masjid-e-haji-muhammad-omar":"./masjid-e-haji-muhammad-omar/masjid-e-haji-muhammad-omar.js","pashah-khanah":"./pashah-khanah/pashah-khanah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
