import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';
@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {
  id!: number;
  course: Course | undefined;
  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']);
      this.course = this.courseService.getItemById(this.id);
    });
  }
}