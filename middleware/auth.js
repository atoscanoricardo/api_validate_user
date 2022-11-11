const auth = async (req, res, next) => {
  // Se valida el parametro enviado, pero se puede validar cualquier otro factor de autenticacion
  if (req.params.id === "123") {
    // si se permite acceder a la ruta, se llama a next() para continuar con la funcion de la ruta
    next();
  } else {
    // si no se permite acceder a la ruta, se envia un mensaje de error
    res.send("You are not authorized");
  }
};

module.exports = auth;
