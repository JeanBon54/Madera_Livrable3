import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.page.html',
  styleUrls: ['./nouveau-client.page.scss','./../../../app.component.scss'],
})

public client = [];
export class NouveauClientPage implements OnInit {

  data: any;
  CliForm: FormGroup;
  submitted = false;
  EventValue: any = "Save";

  ngOnInit(): void {
    this.getdata();

    this.CliForm = new FormGroup({
      noM_COMMERCIAL: new FormControl("", [Validators.required]),
      prenoM_COMMERCIAL: new FormControl("", [Validators.required]),
      datE_CREATION_COMMERCIAL: new FormControl("", [Validators.required]),
      emaiL_COMMERCIAL: new FormControl("", [Validators.required]),
      remarquE_COMMERCIAL: new FormControl("", [Validators.required]),
    })
  }

  getdata() {
    this.ServiceService.getData().subscribe((data: any[]) => {
      this.client = data;
    })
  }

  Save() {
    this.submitted = true;

    if (this.CliForm.invalid) {
      return;
    }
    this.ServiceService.postData(this.CliForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetFrom();

    })
  }

  resetFrom() {
    this.getdata();
    this.CliForm.reset();
    this.EventValue = "Save";
    this.submitted = false;
  }  


}
