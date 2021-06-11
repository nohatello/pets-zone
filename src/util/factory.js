import { services } from "./services.js";

export function getAll() {
  return Promise.resolve(services);
}
export function getById(id) {
  const service = services.find((item) => item.id === id);
  return Promise.resolve(service);
}
export default {
  getAll,
  getById,
};
