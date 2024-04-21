    import React from "react";

    // En la página de vista previa (overview)
    const mostrarInformacionOverview = document.getElementById('mostrar-informacion-overview');

    if (mostrarInformacionOverview) {
      // Obtener el ID del producto y la categoría de la URL
      const urlParams = new URLSearchParams(window.location.search);
      const productoId = urlParams.get('id');
      const categoria = urlParams.get('categoria');
    
      // Cargar la información del producto correspondiente a la categoría
      function cargarInformacionProducto() {
        fetch('/productos.json')
          .then(response => response.json())
          .then(productos => {
            let productosFiltrados = productos;
            if (categoria) {
              productosFiltrados = productos.filter(prod => prod.categoria.nombre === categoria);
            }
            const producto = productosFiltrados.find(prod => prod.id === productoId);
            if (producto) {
              mostrarInformacionOverview.innerHTML = `
              <h2 class="titulo-sub-paginas">${producto.titulo}</h2>
              <div id="carouselExample" class="carousel slide">
                  <div class="carousel-inner">
                      <div class="carousel-item active">
                          <img src="${producto.imagen.principal}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="${producto.imagen.secundario}" class="d-block w-100" alt="...">
                      </div>
                      <div class="carousel-item">
                          <img src="${producto.imagen.tercero}" class="d-block w-100" alt="...">
                      </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                  </button>
              </div>
              <p class="parrafo-overview">${producto.detalles['texto-descripcion']}</p>
          `;
          
            } else {
              mostrarInformacionOverview.innerHTML = '<p>Producto no encontrado</p>';
            }
          })
          .catch(error => console.error('Error:', error));
      }
    
      // Función para cargar la información del producto
      cargarInformacionProducto();
    } else {
      console.error('Elemento mostrarInformacionOverview no encontrado');
    }
    
    export default mostrarInformacionOverview;