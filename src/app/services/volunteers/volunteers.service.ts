import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVolunteer } from '@models/volunteers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VolunteersService {
  constructor(private http: HttpClient) { }

  saveVolunteer(volunteer: IVolunteer) {
    return this.http.post<any>(`${environment.url}/api/volunteer`, volunteer);
  }

  updateVolunteer(volunteer: IVolunteer) {
    return this.http.put<any>(
      `${environment.url}/api/volunteer?id=${volunteer._id}`,
      volunteer
    );
  }

  getVolunteers(): Observable<{ list: IVolunteer[] }> {
    return this.http.get<{ list: IVolunteer[] }>(
      `${environment.url}/api/volunteer`
    );
  }

  getVolunteerById(id: string): Observable<IVolunteer> {
    return this.http.get<IVolunteer>(
      `${environment.url}/api/volunteer?id=${id}`
    );
  }
}