const propiedadesVenta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      " Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "Prestige Suburb, CA 45678",
    habitaciones: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de unamontaña con impresionantes vistas",
    ubicacion: "Summit Peaks, CA 23456",
    habitaciones: 2,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica convistas espectaculares",
    ubicacion: "Skyview City, CA 56789",
    habitaciones: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento en Valparaíso",
    src: "https://cache.enlaceinmobiliario.cl/imagenes_producto_usado/Original/66c74cb47b3a41_643959-1.png",
    descripcion:
      "Departamento ubicado en valparaíso, condominio con piscina incluida",
    ubicacion: "Estac. UGE 167, Edificio Mirador Placeres",
    habitaciones: 2,
    costo: 1500,
    smoke: true,
    pets: false,
  },
];
let dptosVenta = "";
selectOfSection = document.querySelector(".propiedades-venta");
for (deptos of propiedadesVenta) {
  dptosVenta += `
            <article class="cartas card">
              <img src="${deptos.src}" alt="${deptos.nombre}/>
                <div class="card body">
                <h5 class="card-title">${deptos.nombre}</h5>
                <p class="card-text">${deptos.descripcion}</p>
                <p class="card-text">
                  <i class="fas fa-map-marker-alt"></i>${deptos.ubicacion}</p>
                <p>
                  <i class="fas fa-bed"></i>${
                    deptos.habitaciones
                  } | <i class="fas fa-bath"></i> 3 Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i>${deptos.costo}</p>
                <p>${
                  deptos.smoke
                    ? "<p class='text-success'><i class='fas fa-smoking'></i>Se permite fumar</p>"
                    : "<p class='text-danger'><i class='fas fa-smoking-ban'></i> No se permite fumar</p>"
                }</p>
                  <p>${
                    deptos.pets
                      ? "<p class='text-success'><i class='fas fa-paw'></i>Se perminten mascotas</p>"
                      : "<p class='text-danger'><i class='fa-solid fa-ban'></i>No se permiten mascotas</p>"
                  }</p>
               </div>   
              </article>
  `;
}
selectOfSection.innerHTML = dptosVenta;
