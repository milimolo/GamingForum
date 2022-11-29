import { Injectable } from '@angular/core';
import {Thread} from "./Thread";
import {Forum} from "./Forum";
import {Comment} from "./Comment";

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  comments: Comment[] = [];
  threads: Thread[] = [];
  forums: Forum[] = [];

  constructor() {
    this.mockComments();
    this.mockThreads();
    this.mockForums();
  }

  private mockComments() {
    const c1 = {} as Comment;
    const c2 = {} as Comment;
    const c3 = {} as Comment;
    const c4 = {} as Comment;
    const c5 = {} as Comment;

    c1.id = 1;
    c1.user = 'WowGamer';
    c1.message = 'That is some great insight, I have never thought about it like that.';
    c1.threadId = 1;

    c2.id = 2;
    c2.user = 'AngryMan221';
    c2.message = 'I really do not like that idea, the thought of it makes me angry.';
    c2.threadId = 1;

    c3.id = 3;
    c3.user = 'James_Jingler';
    c3.message = '@AngryMan221 I think you should calm down.';
    c3.threadId = 1;

    c4.id = 4;
    c4.user = 'MultiGamer';
    c4.message = 'What a cool trick, keep posting I wanna see more :)';
    c4.threadId = 2;

    c5.id = 5;
    c5.user = 'MultiGamer';
    c5.message = 'Could you help me defeat that guy? I cannot seem to do it myself.';
    c5.threadId = 3;
  }

  private mockThreads() {
    const t1 = {} as Thread;
    const t2 = {} as Thread;
    const t3 = {} as Thread;

    t1.id = 1;
    t1.title = 'Now that I think about it, WoW is a game best played with friends';
    t1.comments = this.addCommentsToThread(1);
    t1.content = 'I have noticed that I enjoy the game way more when I am playing with my friends than alone. Thoughts?';
    t1.category = 'World of Warcraft';
    t1.username = 'MultiGamer';
    t1.parentForumId = 1;

    t2.id = 2;
    t2.title = 'You can keep your movement speed during jump when the buff runs out, if you jump right as the buff expires.';
    t2.comments = this.addCommentsToThread(2);
    t2.content = 'Pretty crazy stuff.';
    t2.category = 'World of Warcraft';
    t2.username = 'GameTipsGuy';
    t2.parentForumId = 1;

    t3.id = 3;
    t3.title = 'I killed this monster on my first try alone, what a cool experience.';
    t3.comments = this.addCommentsToThread(3);
    t3.content = 'I really like this monster, was a fun boss fight and felt really fair.';
    t3.category = 'Monster Hunter';
    t3.username = 'God_Gamer';
    t3.parentForumId = 2;
  }

  private mockForums() {
    const f1 = {} as Forum;
    const f2 = {} as Forum;

    f1.id = 1;
    f1.name = 'World of warcraft';
    f1.owner = 'WowGamer';
    f1.description = 'We talk about World of Warcraft, please join the discussion.';
    f1.threads = this.addThreadsToForum(1);

    f2.id = 2;
    f2.name = 'World of warcraft';
    f2.owner = 'WowGamer';
    f2.description = 'We talk about World of Warcraft, please join the discussion.';
    f2.threads = this.addThreadsToForum(2);
  }

  private addCommentsToThread (threadId: number): Comment[] {
    const tempComments: Comment[] = [];
    this.comments.forEach(c => {
      if(c.threadId == threadId){
        tempComments.push(c);
      }
    });
    return tempComments;
  }

  private addThreadsToForum (forumId: number): Thread[] {
    const tempThreads: Thread[] = [];
    this.threads.forEach(t => {
      if(t.parentForumId == forumId){
        tempThreads.push(t);
      }
    });
    return tempThreads;
  }
}
