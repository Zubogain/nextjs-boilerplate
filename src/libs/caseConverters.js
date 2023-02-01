import { camelCase, snakeCase, mapKeys, Dictionary } from "lodash";

export const snakeToCamel = (object) => {
  return mapKeys(object, (value, key) => camelCase(key));
};

export const camelToSnake = (object) => {
  return mapKeys(object, (value, key) => snakeCase(key));
};
