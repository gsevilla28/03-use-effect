import { useEffect } from "react";
import { useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errores, setErrores] = useState("");

  //Generics
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "Victor@reqres.in",
        first_name: "Victor",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 2,
        email: "Gerardo@reqres.in",
        first_name: "Gerardo",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 3,
        email: "Manolo@reqres.in",
        first_name: "Manolo",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
    ]);
  };
  const getUsuariosAjax = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then(
        (result) => {
          setUsuarios(result.data);
          console.log(usuarios);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const getUsuariosAjaxAsync = () => {
    setTimeout(async () => {
      try {
        const peticion = await fetch("https://reqres.in/api/users?page=1");
        const { data } = await peticion.json();
        setUsuarios(data);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setErrores(error.message);
      }
    }, 5000);
  };

  useEffect(() => {
    //getUsuariosEstaticos();
    getUsuariosAjaxAsync();
  }, []);

  if (errores) {
    return (
      <div className="errores">
        <h4>{errores}</h4>
      </div>
    );
  }

  //cuando todo está cargando
  if (loading) {
    return (
      <div className="cargando">
        <h1>Cargando...</h1>
      </div>
    );
  }
  //Cuando todo ha ido bien
  return (
    <div>
      <h2>Listado de usuario por AJAX</h2>
      <ol className="usuarios">
        {usuarios.map((usuario) => {
          return (
            <li key={usuario.id}>
              <img src={usuario.avatar} alt="imagen" width="80" />
              &nbsp;
              {usuario.first_name} - {usuario.last_name}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
