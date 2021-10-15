import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }


public GetEmployees(): Observable<Employee[]> {
  return this.http.get<Employee[]>("https://localhost:44376/Employee");
}

public AddEmployee(employee: Employee):Observable<number> {
  return this.http.post<number>("https://localhost:44376/Employee", employee);
}
public DeleteEmployee(id: number): Observable<Employee> {
  return this.http.delete<Employee>(`https://localhost:44376/Employee/${id}`);
}

}
