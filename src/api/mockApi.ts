import { http, HttpResponse } from "msw";
import { Owner, Pet, Toy } from "./types";
import { PETS } from "./mockData";

const handlers = [
  http.get<any, any, Pet[]>("/api/pets", () => {
    return HttpResponse.json(PETS);
  }),
  http.get<any, any, Owner[]>("/api/owners", () => {
    return HttpResponse.json([]);
  }),
  http.get<any, any, Toy[]>("/api/toys", () => {
    return HttpResponse.json([]);
  }),
];

export { handlers };
