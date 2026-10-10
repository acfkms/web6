import { Injectable, signal } from '@angular/core';
export interface Course {
  id: number;
  title: string;
  teacher: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses = signal<Course[]>([
    {
      id: 1,
      title: 'Angular',
      teacher: 'Яна Курка',
      description: 'basics of creating Angular applications and stuff'
    },
    {
      id: 2,
      title: 'JavaScript',
      teacher: 'Марія Греченко',
      description: 'modern JavaScript for web development and something like this'
    },
    {
      id: 3,
      title: 'HTML and CSS',
      teacher: 'Олег Маслюк',
      description: 'creating web pages with HTML and CSS etc'
    }
  ]);
  private nextId = 4;
  getItems() {
    return this.courses.asReadonly();
  }
  getItemById(id: number): Course | undefined {
    return this.courses().find(course => course.id === id);
  }
  addItem(title: string, teacher: string, description: string): void {
    const newCourse: Course = {
      id: this.nextId,
      title: title,
      teacher: teacher,
      description: description
    };
    this.nextId = this.nextId + 1;
    this.courses.update(list => [...list, newCourse]);
  }
}