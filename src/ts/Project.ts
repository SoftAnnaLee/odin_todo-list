import { compareAsc, isToday } from 'date-fns';
import { Holder } from './Holder.js';
import type Task from './Task.js';

export default class Project extends Holder<Task> {
  postInitialization() {}

  private _sort() {
    this._collection.sort((a: Task, b: Task) =>
      compareAsc(a.dueDate, b.dueDate)
    );
  }

  protected _import(list: Task[]) {
    this._collection = list;
  }

  list(): Task[] {
    this._sort();
    return this._collection;
  }

  getTodaysTasks(): Task[] {
    return this._collection.filter((t) => isToday(t.dueDate));
  }
}
