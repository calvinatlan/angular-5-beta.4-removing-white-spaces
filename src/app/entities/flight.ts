
export interface Flight {
  id: number; // int + double
  from: string;
  to: string;
  date: string; // ISO: 2017-12-24T17:00:00.000+01:00
  delayed: boolean;
}
