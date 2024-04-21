import React from "react";
import './boton-categoria.css';
class BotonCategoriaProps {
  categoria: string;
  foto: string;
  alt?: string; // Opcional
  href: string;
}

const BotonCategoria: React.FC<BotonCategoriaProps> = ({ categoria, foto, alt, href }) => {
  return (
      <li className="cs-item">
        <a href={href} className="cs-link">
          <span className="cs-category">{categoria}</span>
          <picture className="cs-background" aria-hidden="true">
            <source media="(max-width: 600px)" srcSet={foto} />
            <source media="(min-width: 601px)" srcSet={foto} />
            <img loading="lazy" decoding="async" src={foto} width="365" height="201" alt={alt} />
          </picture>
        </a>
      </li>
  );
};

export default BotonCategoria;
