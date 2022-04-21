import { basePath, apiVersion } from "./config";

export function signUpApi(data) {
  const url = `${basePath}/${apiVersion}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return result;
      }
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}

export function signInApi(data) {
  const url = `${basePath}/${apiVersion}/sign-in`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function getUsersApi(setUsers) {
  const url = `${basePath}/${apiVersion}/get-users`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setUsers(result);
    })
    .catch((err) => {
      return err.message;
    });
}

export function deleteUserApi(data) {
  const url = `${basePath}/${apiVersion}/delete-user`;
  const params = {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function getUserApi(input) {
  const url = `${basePath}/${apiVersion}/get-user`;
  const params = {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function getEmailApi(data) {
  const url = `${basePath}/${apiVersion}/get-email`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result._id) {
        return result;
      }else{
        return result.message;
      }
      
    })
    .catch((err) => {
      return err.message;
    });
}

export function getApartmentNumberApi(data) {
  const url = `${basePath}/${apiVersion}/get-apartmentnumber`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.message) {
        return result;
      }else if(result.length>0){
        return result;
      }
      
    })
    .catch((err) => {
      return err.message;
    });
}



export function updateUserApi(data) {
  const url = `${basePath}/${apiVersion}/update-user`;
  const params = {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result
    })
    .catch((err) => {
      return err.message;
    });
}
