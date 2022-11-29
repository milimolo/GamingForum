import {Comment} from "./Comment";

export interface Thread {
  id: number;
  username: string;
  title: string;
  content: string;
  comments: Comment[];
  parentForumId: number;
  category: string;
}
