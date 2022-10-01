import {Injectable, PipeTransform} from '@angular/core';
import {CapacityForm} from '../_dto/CapacityForm';
import {SortColumn, SortDirection} from './sortable.directive';
import {HttpClient} from '@angular/common/http';

interface SearchResult {
  capacityForm: CapacityForm[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
}

const compare = (v1: String | number | Date, v2: String | number | Date) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(capacityForm: CapacityForm[], column: SortColumn, direction: string): CapacityForm[] {
  if (direction === '' || column === '') {
    return capacityForm;
  } else {
    return [...capacityForm].sort((a, b) => {
      const res = compare(a[column], b[column]);
      return direction === 'asc' ? res : -res;
    });
  }
}

function matches(capacityForm: CapacityForm, term: string, pipe: PipeTransform) {
  return capacityForm.nom.toLowerCase().includes(term.toLowerCase())
    || pipe.transform(capacityForm.prenom).includes(term)
    || pipe.transform(capacityForm.email).includes(term);
}
@Injectable({
  providedIn: 'root'
})
export class FdcService {

  constructor(private http : HttpClient) { }

  getFdcData(url) {

    return  this.http.get("http://localhost:8080"+url);

  }


}
