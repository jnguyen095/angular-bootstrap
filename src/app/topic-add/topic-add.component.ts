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
  formTitle: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode){
      this.formTitle = "EDIT EXISTING TOPIC";
    } else {
      this.formTitle = "ADD NEW TOPIC";
    }

    this.addForm = this.formBuilder.group({
      topicName: ['', Validators.required],
      numOfPartition: ['', Validators.required],
      numOfFactor: ['', Validators.required],
      retentionTime: ['', Validators.required],
      cleanPolicy: [], compressionType: [], fileDeleteDelayMs: []
    });

    if(!this.isAddMode){
      this.addForm.patchValue({topicName: "Topic 1", numOfPartition: 2, numOfFactor: 3, retentionTime: 5000, fileDeleteDelayMs: 6000, compressionType: [{"id": 1},{"id": 2},{"id": 3},{"id": 4}]});
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

  clickMethod(name: string) {
    if(confirm("Are you sure to update?")) {
      window.location.href='/';
    }
  }

}
