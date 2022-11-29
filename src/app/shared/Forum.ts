import {Thread} from "./Thread";

export interface Forum {
  id: number;
  owner: string;
  threads: Thread[];
  name: string;
  description: string;
}
