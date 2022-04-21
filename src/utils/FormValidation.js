
export function minLengthValidation(inputData, minLength) {
  const { value } = inputData;

  removeClassErrorSucess(inputData);

  if (value.length >= minLength) {
    inputData.id = "success";
    return true;
  } else {
    inputData.id="error";
    return false;
  }
}


export function emailValidation(inputData) {
//Expresion regular para permitir solo ingreso de correos electronicos
  const emailValid =
    // eslint-disable-next-line no-useless-escape
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const { value } = inputData;

  removeClassErrorSucess(inputData);

  const resultValidation = emailValid.test(value);
  if (resultValidation) {
    inputData.id = "success";
    return true;
  } else {
    inputData.id="error";
    return false;
  }
}

export function soloNumeros(inputData) {

  //Expresion regular para saber si solo se ingresa numeros
  const numeroValid =
          /^([0-9])*$/
  const { value } = inputData;

  removeClassErrorSucess(inputData);

  const resultValidation = numeroValid.test(value);

  if (resultValidation) {
    inputData.id = "success";
    return true;
  } else {
    inputData.id="error";
    return false;
  }
}
export function soloCaracteres(inputData) {

  const cadenaValid =
  // eslint-disable-next-line no-useless-escape
  /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/
  const { value } = inputData;

  removeClassErrorSucess(inputData);

  const resultValidation = cadenaValid.test(value);
  
  if (resultValidation) {
    inputData.id = "success";
    return true;
  } else {
    inputData.id="error";
    inputData.placeholder = "No se admiten numeros"
    return false;
  }
}

function removeClassErrorSucess(inputData) {
  inputData.id="";
  inputData.id=""
}
