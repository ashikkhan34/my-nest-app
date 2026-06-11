/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    private  employees = [
        {id:1,name:'ashik'},
        {id:2,name:'forid'},
        {id:3,name:'alamin'},
        {id:4,name:'axim'},
        {id:5,name:'pakhi'},
    ];
    getAllEmployees(){
        return this.employees;
    }

    getAEmployee(id:number){
        return this.employees.find((employee) => employee.id === id)
    }
}
