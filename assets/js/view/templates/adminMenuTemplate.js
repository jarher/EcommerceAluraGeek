export const adminMenuTemplate = () => {
  const menu_admin = document.createElement("div");
  menu_admin.setAttribute("class", "menu__admin-options");
  const template = `<ul>
        <li>
            <a href="editar-productos.html" data-type="closeAdminMenu">Editar Productos</a>
        </li>
        <li>
            <a href="crear-producto.html" data-type="closeAdminMenu">Crear Producto</a>
        </li>
        <li>
            <a href="index.html" data-type="logout">Cerrar sesión</a>
        </li>
    </ul>`;

  menu_admin.innerHTML = template;

  return menu_admin;
};
