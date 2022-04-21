import { basePath, apiVersion } from "./config";

export function getNoticiasApi(setNoticias) {
  const url = `${basePath}/${apiVersion}/get-noticias`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      setNoticias(result)
    })
    .catch((err) => {
      console.log(err);
    });
}
  