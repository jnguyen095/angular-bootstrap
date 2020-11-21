import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

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
  fileToUpload: File = null;
  public show:boolean = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.queryParams['id'];
    this.isAddMode = !this.id;


    this.addForm = this.formBuilder.group({
      topicName: ['', Validators.required],
      numOfPartition: ['', Validators.required],
      numOfFactor: ['', Validators.required],
      retentionTime: ['', Validators.required]
    });

    if(!this.isAddMode){
      this.addForm.patchValue({topicName: "Topic 1", numOfPartition: 2});
    }

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

  toggle() {
    this.show = !this.show;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

}
