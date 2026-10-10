import { Component } from '@angular/core'; import { FormsModule } from '@angular/forms'; import { RouterLink } from '@angular/router'; import { CourseService } from '../../services/course.service';
@Component({ selector: 'app-add-course', standalone: true, imports: [FormsModule, RouterLink], templateUrl: './add-course.component.html', styleUrls: ['./add-course.component.css'] }) export class AddCourseComponent { 
if (form.invalid) {
  return;
}
this.courseService.addItem(
  this.newCourse.title,
  this.newCourse.teacher,
  this.newCourse.description
);
form.resetForm();
this.newCourse = { title: '', teacher: '', description: '' };
this.submitted = false;
} }