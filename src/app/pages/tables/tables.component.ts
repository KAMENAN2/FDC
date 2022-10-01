import {Component, OnInit, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormBuilder, FormControl} from '@angular/forms';
import {FdcService} from '../../_services/fdc.service';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
  providers: [DecimalPipe]
})
export class TablesComponent implements OnInit {
  fdcdatas: any;


  constructor(private fdcService : FdcService) {


  }




  ngOnInit(): void {
    this.fdcService.getFdcData("/getfdcCapacityForm").subscribe(
      data => {

        console.log(data);
        this.fdcdatas = data;
      }
    )
  }

}
