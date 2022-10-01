import { Component, OnInit } from '@angular/core';
import {NgbDateParserFormatter, NgbDatepicker, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl} from '@angular/forms';
import {FdcUserService} from '../../_services/fdc-user.service';
import {CapacityForm} from '../../_dto/CapacityForm';
import Swal from 'sweetalert2'

interface MyForm {

  nom : FormControl<string>;
  prenom : FormControl<string>;
  dateDemande? : FormControl<any>;
  email : FormControl<string>;
  site : FormControl<string>;
  dcname : FormControl<string>;
  storageType : FormControl<string>;
  description : FormControl<string>;
  service : FormControl<string>;
  capacity : FormControl<string>;
  validateur : FormControl<string>;
  priority : FormControl<string>;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public copy: string;
  public capacityFormData : CapacityForm;

  constructor(private modalService: NgbModal,private fb: FormBuilder,private fdcUserService :FdcUserService,private ngbDateParserFormatter: NgbDateParserFormatter) {}

  ngOnInit() {
    this.fdcUserService.getFdcUser("/fdcUsers").subscribe(
      date => {
        console.log(date);
      }
    )

  }

  capacityForm = this.fb.group<MyForm>({
    nom : new FormControl('', { nonNullable: true }),
    prenom : new FormControl('', { nonNullable: true }),
    dateDemande : new FormControl('', { nonNullable: true }),
    email : new FormControl('', { nonNullable: true }),
    site : new FormControl('', { nonNullable: true }),
    dcname : new FormControl('', { nonNullable: true }),
    storageType : new FormControl('', { nonNullable: true }),
    description : new FormControl('', { nonNullable: true }),
    service : new FormControl('', { nonNullable: true }),
    capacity : new FormControl('', { nonNullable: true }),
    validateur : new FormControl('', { nonNullable: true }),
    priority : new FormControl('', { nonNullable: true })


  })


  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' ,scrollable: true});
  }

  onSubmit() {
   // this.capacityFormData = this.capacityForm.value;
    console.log(this.capacityForm.controls['dateDemande'].value);
    let dateNoFormat = this.capacityForm.controls['dateDemande'].value;
    console.log(dateNoFormat);
    console.log('Date:'+ dateNoFormat.year);
    this.capacityForm.patchValue({dateDemande: new Date(dateNoFormat.year,dateNoFormat.month - 1,dateNoFormat.day)})
    this.fdcUserService.postFdcData("/savefdcCapacityForm",this.capacityForm.value).subscribe(

      data => {

        console.log(data);
        Swal.fire(
          'Demande capacitaire envoyé!',
          "Vous receverez un mail après validation de l'equipe capacitaire.",
          'success'
        )
      }, error => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Contact DEV Team.</a>'
        })

      }

    )


  }
}
