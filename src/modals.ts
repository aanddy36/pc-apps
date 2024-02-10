export interface Service {
  id: string;
  slug: string;
  body: string;
  collection: string;
  data: { title: string; group: string };
}
