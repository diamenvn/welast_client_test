import { settingModel } from "@/models/setting.model";

export const httpClient = {
  get,
  post,
  put,
};

export const URI = {
  BASE_URI: process.env.BASE_URL,
};

var originalFetch = fetch;
const newFetch = function (input, init) {
  if (!init) {
    init = {};
  }
  if (!init.headers) {
    init.headers = new Headers();
  }

  // init.headers could be:
  //   `A Headers object, an object literal,
  //    or an array of two-item arrays to set request’s headers.`
  if (init.headers instanceof Headers) {
    init.headers.append("MyHeader", "Value");
  } else if (init.headers instanceof Array) {
    init.headers.push(["MyHeader", "Value"]);
  } else {
    // object ?
    init.headers["MyHeader"] = "Value";
  }
  return originalFetch(input, init).then((res) => {
    if (res.status == 401) {
      window.location.href = "/account/sign-in";
      return false;
    }
    return res;
  });
};

function serialize(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      if (Array.isArray(obj[p])) {
        for (let i = 0; i < obj[p].length; i++) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p][i]));
        }
        continue;
      }
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function get(url, params = undefined, options = {}) {
  if (params) {
    url += `?${serialize(params)}`;
  }
  const requestOptions = {
    method: "GET",
    headers: authHeader(url),
    url: url,
    ...options,
  };
  return newFetch(url, requestOptions)
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      //      settingModel.setErrorMessage(e.toString());
      console.log(e);
    });
}

function post(url, body, options = {}) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
    url: url,
    ...options,
  };
  return newFetch(url, requestOptions)
    .then((res) => res.json())
    .catch((e) => {
      //      settingModel.setErrorMessage(e.toString());
      console.log(e);
    });
}

function put(url, body, options = {}) {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json", ...authHeader(url) },
    body: JSON.stringify(body),
    url: url,
    ...options,
  };
  return newFetch(url, requestOptions)
    .then((res) => res.json())
    .catch((e) => {
      //      settingModel.setErrorMessage(e.toString());
      console.log(e);
    });
}

// helper functions

function authHeader(url) {
  return { Authorization: `Bearer` };
  // return { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI0MDFhNTQ5Yi1jOTk4LTQzNGEtODkxOS1mMzhjYjQ2ZGNiNzYiLCJ1bmlxdWVfbmFtZSI6InNlbGxlcjEiLCJlbWFpbCI6InNlbGxlcjFAZ21haWwuY29tIiwicm9sZSI6IlNlbGxlcnMiLCJuYmYiOjE3MTMxNjA3ODgsImV4cCI6MTcxMzc2NTU4OCwiaWF0IjoxNzEzMTYwNzg4LCJpc3MiOiJTb1ZhbkhhbmgiLCJhdWQiOiJDb25nRE4ifQ.yk34NbfAJsZAspcxJAtbPJVIduDMS8FRKm7D6jDgTIg` }
  // const user = userService.userValue;
  // const isLoggedIn = user && user.token;
  // const isApiUrl = url.startsWith(process.env.BASE_URL);
  // if (isLoggedIn && isApiUrl) {
  //     return { Authorization: `Bearer ${user.token}` };
  // } else {
  //     return {};
  // }
}

export function handleResponse(response) {
  return new Promise((resolve, reject) => {
    if (response) {
      resolve(response);
    } else {
      if (response) {
        const messageError = JSON.stringify(response?.errors).replace('["', "").replace('"]', "") ?? "";
        settingModel.setErrorMessage(messageError);
        reject(messageError);
      } else {
        reject("Error");
      }
    }
  });
}
