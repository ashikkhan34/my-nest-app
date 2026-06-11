/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';

@Controller('employees')
export class EmployeeController {
    constructor(private readonly employeeService:EmployeeService){}

    @Get()
    getAllEmployee(){
        return this.employeeService.getAllEmployees();
    }

    @Get(':id')
    getAEmployee(@Param('id') id:string){
        return this.employeeService.getAEmployee(Number(id))
    }
}
