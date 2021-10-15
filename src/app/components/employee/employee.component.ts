import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  private employeesService: EmployeesService;

  public id: number = 0;
  public firstName: string = "";
  public lastName: string = ""

  public employees: Employee[] = [];

  constructor(employeesService: EmployeesService) {
    this.employeesService = employeesService;
   }

  ngOnInit(): void {
    this.employeesService.GetEmployees().subscribe((employeesFromApi) => {
      this.employees = employeesFromApi;
  })
}
public AddEmployee(): void {
  var newEmployee: Employee = {
    id: this.id,
    firstName: this.firstName,
    lastName: this.lastName
  }

  this.employeesService.AddEmployee(newEmployee).subscribe((employeeId) => {
    newEmployee.id = employeeId;
    this.employees.push(newEmployee);
  });
}
DeleteEmployee(id: number): void {
  this.employeesService.DeleteEmployee(id).subscribe(()=> {
    let index = this.employees.map(e => e.id).indexOf(id);
    this.employees.splice(index, 1);
  })
};

}
