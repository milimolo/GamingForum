import {Forum} from "./Forum";

export interface Thread {
  id: number;
  username: string;
  title: string;
  comments: Comment[];
  parentForum: Forum;
  category: string;
}
