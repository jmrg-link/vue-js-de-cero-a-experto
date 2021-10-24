const miPromesa = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve('Tenemos un valor en la Promesa')
      reject("REJECT en mi promesa");
    }, 1000);
  });
};

const medirTiempoAsync = async () => {
  try {
    console.log("init");

    const respuesta = await miPromesa()
    console.log(respuesta);
    console.log("finish");
    return "fin de medir tiempo async"
  } catch (error) {
    //return "catch en medir tiempoAsync"
    throw 'Error medir tiempo async'
  }

  
};

medirTiempoAsync()
  .then((valor) => console.log('then exitoso',valor))
  .catch((err) => console.log("error:", err));
