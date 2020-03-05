import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})

export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])

  });
  addTopic(topic: HTMLInputElement) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value))


  }
}