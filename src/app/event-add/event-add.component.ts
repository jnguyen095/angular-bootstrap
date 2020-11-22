import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.scss']
})
export class EventAddComponent implements OnInit {
  formTitle: string;
  addForm: FormGroup;
  id: string;
  isAddMode: boolean;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.formTitle = "EDIT EXISTING EVENT";
    } else {
      this.formTitle = "ADD NEW EVENT";
    }

    this.addForm = this.formBuilder.group({
      eventName: ['', Validators.required],
      topic: ['', Validators.required],
      lop: ['', Validators.required],
      channel: ['', Validators.required],
      domain: ['', Validators.required],
      eventDate: ['', Validators.required],
      publicsher: ['', Validators.required],
      subscriber: ['', Validators.required],
      inlineRadioOptions: ['', Validators.required],
      eapAvailability: ['', Validators.required],
      hdsf: ['', Validators.required]
    });

    if(!this.isAddMode){
      this.addForm.patchValue({eventName: "Event 1", topic: "Topic 1", lop: "LOP", channel: "Web", domain: "Domain", eventDate: "2020-11-22"});
    }
  }

  get f() { return this.addForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.addForm.invalid) {
      console.log('Validate fail, your form data : ', this.addForm.value );
      return;
    }
    console.log('Validate passed, your form data : ', this.addForm.value );
  }

  onReset() {
    this.submitted = false;
    this.addForm.reset();
  }

  clickMethod(name: string) {
    if(confirm("Are you sure to update?")) {
      window.location.href='/';
    }
  }

}
