const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      " Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: " 123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    costo: 2500,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    costo: 2200,
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
let dptosAlquiler = "";
selectOfSection = document.querySelector(".propiedades-alquiler");
for (deptos of propiedades_alquiler) {
  dptosAlquiler += `
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
                  } | <i class="fas fa-bath"></i> 2 Baños
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
selectOfSection.innerHTML = dptosAlquiler;
