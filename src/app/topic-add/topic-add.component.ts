import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-topic-add',
  templateUrl: './topic-add.component.html',
  styleUrls: ['./topic-add.component.scss']
})
export class TopicAddComponent implements OnInit{

  addForm: FormGroup;
  submitted = false;
  id: string;
  isAddMode: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isAddMode = !this.id;

    if(!this.isAddMode){
    }

    this.addForm = this.formBuilder.group({
      topicName: ['', Validators.required],
      numOfPartition: ['', Validators.required],
      numOfFactor: ['', Validators.required],
      retentionTime: ['', Validators.required]
    });

  };

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

}
