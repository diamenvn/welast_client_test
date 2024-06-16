import { httpClient, handleResponse } from "../ultis/http-client";

async function getListRepositories() {
  return handleResponse(await httpClient.get(`https://welast.onrender.com/repos`));
}

export const repoService = {
  getListRepositories,
};
