import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../models/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;
  model: User = null;
  @Output() onSubmit = new EventEmitter<User>();

  constructor() {
    this.model = Object.assign({}, this.user);
  }

  ngOnInit() {
  }


    submit(form) {
        if (!form.valid) {
            return;
        }
        this.onSubmit.emit(this.user);
    }

}
