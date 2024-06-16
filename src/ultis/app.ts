import { ReadonlyURLSearchParams } from "next/navigation";

export const navigation = {
  updateParams: (router: any, query: { pathname: string | null; params: any }) => {
    const { pathname, params } = query;

    const searchParams = new URLSearchParams(params);
    const currentSearchParams = new URLSearchParams(window.location.search);
    const currentSearchParamsToObject = paramsToObject(currentSearchParams.entries());

    if (Object.entries(params).sort().toString() != Object.entries(currentSearchParamsToObject).sort().toString()) {
      Object.keys(params).map((key) => searchParams.set(key, params[key]));

      window.history.pushState({ path: `${pathname}?${searchParams.toString()}` }, "", `${pathname}?${searchParams.toString()}`);
      // router.push(`${pathname}?${searchParams.toString()}`);
    }
  },

  getParamsToObject: (searchParams: ReadonlyURLSearchParams | null) => {
    const search = new URLSearchParams(searchParams ?? "");
    const currentSearchParamsToObject = paramsToObject(search.entries());

    return currentSearchParamsToObject;
  },
};

function paramsToObject(entries: any) {
  const result = {} as any;
  for (const [key, value] of entries) {
    // each 'entry' is a [key, value] tupple
    result[key] = value == "null" ? null : value;
  }
  return result;
}

var colors = ["blue", "yellow", "green", "purple"];

export function popRandomColor() {
  var rand = Math.random();
  var color = colors[Math.floor(rand * colors.length)];
  colors.splice(Math.floor(rand * colors.length), 1);
  return color;
}

export function createRandomString(length: number) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
