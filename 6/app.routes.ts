import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/add', component: AddCourseComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: '**', redirectTo: '' }
];