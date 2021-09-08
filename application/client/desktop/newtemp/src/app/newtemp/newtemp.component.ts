import { Component, OnInit } from '@angular/core';
import { NewtempService } from './newtemp.service';

@Component({
  selector: 'app-newtemp',
  templateUrl: './newtemp.component.html',
  styleUrls: ['./newtemp.component.scss'],
})

export class NewtempComponent implements OnInit {
    public sample = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        Enter_Name: '',
    }

    constructor (
        private newtempService: NewtempService,
    ) { }

    ngOnInit() {
        this.sample.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.newtempService.GpCreate(this.sample).subscribe(data => {
            this.sample.Enter_Name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}