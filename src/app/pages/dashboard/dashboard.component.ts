import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  public copy: string;

  constructor(private modalService: NgbModal,private fb: FormBuilder) {}

  ngOnInit() {}

  capacityForm = this.fb.group({
    nom : 'KAMENAN',
    prenom : '',
    dateDemande : '',
    email : '',
    site : '',
    DCName : '',
    storageType : '',
    description : '',
    service : '',
    capacity : '',
    validateur : '',
    priority : ''


  })


  openXl(content: any) {
    this.modalService.open(content, { size: 'xl' ,scrollable: true});
  }

  onSubmit() {
    console.log(this.capacityForm.value)
  }
}
