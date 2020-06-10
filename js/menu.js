//VIGTIGT!! definer wp (vores wp json udgangspunkt)
let wp = `http://eigilnikolajsen.dk/kea/10_eksamen/wordpress/wp-json/wp/v2/`;

//når DOM indholdet er loadet hent json
document.addEventListener("DOMContentLoaded", hentJSON_menu);

//henter pages titler fra wp og lægger dem ind i menuen
async function hentJSON_menu() {
  //wpEnd sættes efter wp og giver vores json link
  let wpEnd = `pages?_fields=id,title,parent,slug`;
  //vent på at vi har hentet vores link ned
  const response = await fetch(wp + wpEnd);
  //lav linket om til læsbar json
  let json = await response.json();

  //for hver t (titel), hvis ingen page parent,
  //lav et li tag med et a tag og sæt det ind i ul tagget i nav
  json.forEach((t) => {
    if (window.innerWidth < 800 || window.innerWidth > 1200) {
      if (t.parent != 0) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = t.title.rendered;
        a.href = `${t.slug}.html`;
        li.appendChild(a);
        ul.appendChild(li);
      }
    } else {
      if (t.parent != 0 || t.id == 31) {
        let li = document.createElement("li");
        let a = document.createElement("a");
        a.textContent = t.title.rendered;
        a.href = `${t.slug}.html`;
        li.appendChild(a);
        ul.appendChild(li);
      }
    }
  })
}

//definer logo og burger menu SVG som inline SVG,
//så man kan skifte deres farve med CSS fill ved scroll på gittebjorn.html
let logo_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1114.15 320.57"><g id="gb_logo" data-name="Layer 2"><g id="gb_logo-2" data-name="Layer 1"><path d="M325.25,92c6.32-.12,13.48-.26,18.54,3.71l4.67,4.75c3.11,13.34-3.17,32.64,8.91,42.69,12.14,1.9,53.65-36.25,24.38-32.59-3.59-.06-14,2.24-14.54-3.32.5-13.51,16-5.53,23.46-5.59,9.64-.6-1.9-23,10.57-20.08,5.8,6.83-1.64,26.45,13.83,20.12,10.31,1.92,22.33,3,32.72-.07-2.42-19.11,15.23-25,10.85-1.64-.42,5.73,9.79,2.91,13.61,2.56,5.14,2.73,26.55-2.56,18.57,7.25-2,.64-3.86,0-6.18-.65s-2.7,4-4.29.7c-2.26.81-4.31,1.48-6.5,2.34-1.46.87-3-2.16-4.65-.78-17.49-.32.73,17.06,5.27,23.43,8.51,9.38,23.08,3.79,32.31-2.19,17.88-8.17,7.72-16.82,8.46-30.48,7.2-27.72,53.67-12,36.78,15-6.11,9.86-25.81,10.37-4.59,18.64,16.13,6.83,37.39,8.91,53.26,1.89-3.93-13,22.69-.19,10.62,6.28-14.07,9.65-34.19,8.29-50.47,5.25-27.25,2.86-30.29-30-53.59-3.65-6.43,3.63-13.4,4.46-20,6.57-1.2-.28-2-2.34-3.59-.87-5.31-1-9.89-4.17-15-5.81-14.82-12.63-11.49-31.95-22-13-9.26,8.24-21.71,19.63-35.4,16.56-6.68-1.57-12.09-23.48-15.24-18.74-3.11,2.29-5.1,5.4-8.06,8-15.4,16.83-43.65,24.31-49.14-5.2-2.65-13,7.57-32.71-13.07-30.77-36.22,2.7,9.14,7.32-.32,26.36-35.92,32.54-90.88,29.63-135.81,31.58-7.77-2.63-15.28,1.86-23-.74-11.81,1.95-23.83-.4-35.9-.74-5.71,1-11.45-3-16.62-1.49-7.59-.87-15.76-.85-23.56-1.48-1.76-1.07-3.75-.7-5.65-.74-11.32-1.59-24.68-2.75-37.15-5.21-5.5-2.77-11.52-2.09-17.11-3-52.51-14.16-28.51-49.36,4.68-73.18.89-1.36,1.6-2.91,3.62-2.83C103.5,33.12,180,17.08,253.64,14c1.38,1.26,2.83,1,4.31.21,12.56-.5,27.95-.1,38.91.56,16.46,1.8,33.84,1.73,50.78,4.65,15.89,1.36,36.17,4.33,52.4,11.49,8.88.92,12.14,15.21,2.3,11.19a10.45,10.45,0,0,0-8.75-4.33c-1-2.58-4.68-1.42-6.17-3.84-1.48-2.19-2.86,1.27-4.37.22-9.4-2-18.7-4-28.35-5.29-1.78.94-3.56-.5-5.34,0-3.68-1.77-6.81-1.1-10.12-2.23-12.93-.1-29-1.24-43.11-2.19-21.36-.81-44.36-.14-65.57,0-.81,1.45-2.72-.09-3.55,1.31-28.59,1.49-57.8,7.12-86.41,15-21.06,4.94-40.49,12.85-59.5,20.81a10.76,10.76,0,0,0-5.76,2.66c-2.11,2.51-6,1.42-7.56,4-8.63,3.3-17.21,9.68-25.4,14.22C22.06,97.78-11.1,126.73,33.9,136.93,47,138.54,60,141.49,73.15,144c10,1.05,19.31,2,29.34,2.79,13.26-.58,29.87,4,42.64,2.46,54,.58,116.75,7.24,164.75-21,8.25-10.11-17.62-11.37-15.65-22.66C297.57,93.26,314.26,91.88,325.25,92ZM415.73,112c-2.93,0-12.47-1-9.17,4.23-.39,25.7,17.55,25,33,8.67C455,108.28,426.16,113.45,415.73,112ZM536.59,98.59c-11.45-.15-13.43,12-6.93,19.42,7.41-.3,19.88-8.2,14.24-17C541.52,100.4,539,98.85,536.59,98.59Z"/><path d="M897.54,112.48c2.71,17.33-21.14,28.06-13.39,45,2.57,8.69,3.7,17.47,5.89,26.16,2.66,15.29,4,31.41,6,45.67.86,18.83,3.57,38.51,4.52,56.21,2.53,2,4.64,38.71-1.13,34.52-16,6.13-10.29-41.31-13.06-52.47-3.69-16.51-.76-32.46-3.73-49-1.54-4.58-.57-10.12-2.37-15-.62-2.58-1.72-6-1.34-8.49-.67-10.13-4.09-22.08-4.47-31.47C872,141.23,856.56,165,836,167.89c-15.26,3.62-33.35,8.31-49,8.74-28,3.17-56.43,2.09-84.27-.74-13.51-.11-28.35-3.89-40.06-11.31-11.66-31.4,37.87-8.7,26.54-31.61-4-18.51-2.61-37.25-2-56.13-2.14-3.93,1-8.61-1-13.23.81-5.6-4.06-10.5.78-15.9,15.64-11.82,10,36.49,11.09,45.12-2.48,14.9,3.65,32,.79,46.92-2.61,4.32,3.13,3.56,5.07,2.33,3.19,2,6.5-.62,9.52,1.12,6-.89,31.51-.56,8.6,3.74-8.81,4.22-51.21,1.9-30.95,17.07A441.86,441.86,0,0,0,758,167.72c9.57.44,18.74-1.77,28.05-1.58a42.92,42.92,0,0,1,10.15-1.39c2.43-1.58,5.82.25,8-2.23,11.4-1.25,23-3.16,33.43-8.17,11.56-2.8,25.4-7,32.8-16.58,2-2-3.13-10.28,1.25-9.62,3.88-1.09,5.84,5.65,8.94,1.89,2.34-4.51,6.2-9.27,6.38-13.84,3.25-9.66-3.24-18.48-9-25C865.2,79.81,847.76,74.79,832,73.88c-6.57,0-14.32.2-21.89-.56-1.31-1.94-3,1.31-4.27.76-4.56-1.55-8.32.11-13.07,0-17.3-1.52-44.77,19.94-56.68,9.36,1.31-7.6,9.91-11.37,13.45-17.83,4.36-3.83,9.65-8.65,10.43-14.87C773.75,21.3,738.7-1.14,714.05,16.19,688,24.3,672.7,53.3,664.36,75.61c-14-13,6.92-33.42,15.22-46.41,4.25-2.09,4-7.37,8.59-9.3C704.54,10.13,722.06-2.73,742.43.51c28.1,4.12,39,39.36,23.76,61.24-8.54,9.21-5.68,7.3,4.26,6.45C788.14,63,807.73,65,825.59,64.4c5.06.09,10.18,1.16,15.29.81C864.89,67.7,897.53,82.87,897.54,112.48Z"/><path d="M955.53,182.58c-5.11,0-8.83.29-13.39-1.23-76.45-13.62-11.2-146.66,31.91-77.66,4,9.5-4.2,12.24,9.87,11.29,13.54.41,22.08,10.93,21.49,24-2,21.72-19.48,39.76-40.55,42.89C961.59,183.31,958.12,182.16,955.53,182.58Zm4-13.37c-32-2.92-15.3-49.4,9.48-53.21-7.2-45.58-58-8.49-52.9,24.3.55,8.09,5.09,14.67,10,20.72,34.25,41.55,103.41-33.15,51.94-34.9-17.58-.47-37.44,26-19.49,37.95C962.65,165.16,966.39,170,959.56,169.21Z"/><path d="M1075.38,141.29c.19,4.66,1.11,14.08,6.52,15.27-2.26,20.15-15.79-1.6-14.85-13-1.65-13,11.06-50.44,28.16-37.35,12.67,12.61,13.21,30.37,17.3,46.63-.32,6,5.81,28.26-3.79,24.79-8-9.48-13-87.56-28.92-53A27.12,27.12,0,0,0,1075.38,141.29Z"/><path d="M1031.44,137.48c0,4.07-.33,8.21,1.47,12,14.92,49.61-25.81,2.24-5.93-34.06,4.85-8.16,12.46-10,20.65-8.44,24.86,14.17,20.34,20.6-3.9,5C1033.53,114.43,1031.44,128.46,1031.44,137.48Z"/><path d="M860.08,30.3c12.11-.06,1.89,17.6,3.1,25-4.6,3.64-13.35-.94-13.16-6,1-1.67,2.09-3.13.65-5C851.91,39.25,852.91,29.37,860.08,30.3Z"/><path d="M343,59.27c-7.92-2.61-.11-13.28-.35-19.2,3.38-5.46,12.89-3.73,11.88,3C353.7,47.87,349.24,58.51,343,59.27Z"/><path d="M871.56,123.28c-1.75,5.27-5,.26-4.41-2.84C869.29,117.57,871,121.08,871.56,123.28Z"/></g></g></svg>`;
let burger1_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 99.02 10.78"><g id="bruger1" data-name="Layer 2"><g id="bruger1-2" data-name="Layer 1"><path d="M56.78,10.62c-7.66.58-17.19-1.6-26-.27-3.53-1.19-4.86.06-8.63-1-.58,0-4.28.13-5.66-.34-1.69-1.95-2.93,1.45-4.82-.19-5.14.5-15.82,1.42-9.9-7.24,4.74-3.77,12,.36,16.92.22C22,.38,25,2.72,29.13,1.91c3.46.3,5.66,1.28,8.77-.07,10.81,2.49,21.41.45,32.74,1.59,4.13-1.49,8.19.35,12.32-.92,4.51,1.37,9.3.64,13.84.84,2.53-.65,3,5.2.8,4.87-2.19,1.13-5.39-2.11-7,.7-.78.78-.81.3-.86-.4a7.34,7.34,0,0,0-3.54.72c-.83.63-2.26,1.36-3.07.86a2.08,2.08,0,0,0-2.62-.61c-3.71,1.29-5.6-.61-9.76.69-3.33-1.23-2.8,1.56-7.32.23-.81-.15-1.15-.56-2.34.07Z"/></g></g></svg>`;
let burger2_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.91 11.12"><g id="bruger2" data-name="Layer 2"><g id="bruger2-2" data-name="Layer 1"><path d="M1.88,5.31c-4.78,4.54.57,5.33,4.74,5.5,3.51.34,6.7.58,9.94-.25.38-.34,1.65-1.2,2-.75,1.56,1.3,3.24-.52,5-.53,3.84.49,9.43-.14,13.94-.78,2.14-.81,4.81,1.39,7,.17,1.06,1.06,2.28-.61,3.58-.11.68,0,1.42.53,2.06-.14,3.32-.82,6.87.23,10-.44,11-.73,21.24,2.36,32.29,1.16,6.5.84,13.25.08,19.31.68.37.13.83,0,1.06.42s.68-.55,1.07.15c1.63.75,3.9-.24,5.66-.17,4,.66,9.81-1,8.17-5.76,2.13-3.94-11.58-2.1-13.77-4.21-.91-.28-2.2.91-3,.07-1.82-.37-3.94.59-5.77.86-.79-1.36-2.15.68-3.12-.51-.68-1-1.29.35-2,.44a8.59,8.59,0,0,0-3.5.16C86.43.16,78,.7,68.06,0,58.58.28,48,0,37.76.57c-5.85.79-11.66.89-17.54,1.93-2.54.7-5.47.55-8.18.62C8.32,3.25,5.72,4.85,1.88,5.31Z"/></g></g></svg>`;
let burger3_svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.37 11.79"><g id="bruger3" data-name="Layer 2"><g id="bruger3-2" data-name="Layer 1"><path d="M75.13,1.26c2.39,1,.58,2.9.58,2.9l-.44,2.42C73.21,7.3,71.36,8.76,69,8.36a145.49,145.49,0,0,1-25.86,2.33C35.25,10,27.34,10.3,20,10.11c-3.77.35-8.08.25-11.77,1.59-11.2,1.09-10.91-8.86.19-9.79,1.18.11,2.3-1.29,3.47-.38C13.48,2.58,15,.35,16.7,1.58c1.5,1,2.84-.16,4.3-.27,1.16-.38,2.09,1.17,3.2.43C32.11,0,40,3.14,47.94,1.21,56.4,2.68,67.09-2.18,75.13,1.26Z"/></g></g></svg>`;

//byg navigationens html struktur
var nav = document.querySelector("nav");
var gitteBjorn = document.createElement("a");
gitteBjorn.textContent = "gitte bjørn";
gitteBjorn.href = "gitte-bjorn.html";
gitteBjorn.classList.add("nav_link", "no_highlights");
var smykkekurser = document.createElement("a");
smykkekurser.textContent = "smykkekurser";
smykkekurser.classList.add("nav_link", "no_highlights");
//hvis mobile eller desktop (ikke tablet), lav smykkekurser til et link
if (window.innerWidth < 800 || window.innerWidth > 1200) {
  smykkekurser.href = "smykkekurser.html";
}
var logo = document.createElement("div");
logo.id = "anim";
logo.innerHTML = logo_svg;
var logo_link = document.createElement("a");
logo_link.href = "index.html";
logo_link.textContent = "logo, der er et link til forsiden";
logo_link.appendChild(logo);
logo_link.id = "logo_link";
var burger_wrap = document.createElement("div");
burger_wrap.classList.add("burger_wrap");
let burger1_wrap = document.createElement("div");
burger1_wrap.id = "burger1_wrap";
burger1_wrap.innerHTML = burger1_svg;
let burger2_wrap = document.createElement("div");
burger2_wrap.id = "burger2_wrap";
burger2_wrap.innerHTML = burger2_svg;
let burger3_wrap = document.createElement("div");
burger3_wrap.id = "burger3_wrap";
burger3_wrap.innerHTML = burger3_svg;
burger_wrap.appendChild(burger1_wrap);
burger_wrap.appendChild(burger2_wrap);
burger_wrap.appendChild(burger3_wrap);
var nav_link_wrap = document.createElement("div");
nav_link_wrap.classList.add("nav_link_wrap");
nav_link_wrap.appendChild(gitteBjorn);
nav_link_wrap.appendChild(smykkekurser);
nav.appendChild(logo_link);
nav.appendChild(nav_link_wrap);
nav.appendChild(burger_wrap);

var ul = document.createElement("ul");
smykkekurser.appendChild(ul);


let burgerOn = false;

//ved klik på burgermenu, toggle classes, der giver css animation
burger_wrap.addEventListener("click", () => {
  nav_link_wrap.classList.toggle("burger_show");
  burger1_wrap.classList.toggle("burger1");
  burger2_wrap.classList.toggle("burger2");
  burger3_wrap.classList.toggle("burger3");
  if (burgerOn == false) {
    burger1_wrap.style.transition = ".3s cubic-bezier(.25, 1, 0.5, 1)";
    burger2_wrap.style.transition = ".3s cubic-bezier(.25, 1, 0.5, 1)";
    burger3_wrap.style.transition = ".3s cubic-bezier(.25, 1, 0.5, 1)";
    burgerOn = true;
  } else {
    setTimeout(function () {
      burger1_wrap.style.transition = "none";
      burger2_wrap.style.transition = "none";
      burger3_wrap.style.transition = "none";
      burgerOn = false;
    }, 300)
  }
})
