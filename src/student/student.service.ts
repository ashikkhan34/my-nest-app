/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private students = [
        {id:1,name:'ashik',age:21},
        {id:2,name:'alamin',age:22},
    ]

    getAllStudent(){
        return this.students;
    }

    getStudentById(id:number){
        const student = this.students.find((s) => s.id === id);
        if(!student) throw new NotFoundException('student not found')
            return student;
    }

    //post
    createStudent(data:{name:string; age:number}){
        const newStudent = {
            id:Date.now(),
            ...data,
        }
        this.students.push(newStudent);
        return {success: true, message: 'student created successfull', newStudent};
    }

    //put
    updateStudent(id:number, data: {name:string; age:number}){
        const index = this.students.findIndex((s) => s.id === id);
        if(!index) throw new NotFoundException('student not found');
        this.students[index] = {id, ...data};
        return this.students[index]
    }

    //patch
    patchStudent(id:number, data: Partial<{name:string; age:number}>){
        const student = this.getStudentById(id)
        Object.assign(student,data)
        return student;
    }

    //delete
    deleteStudent(id:number){
        const index = this.students.findIndex((s) => s.id === id)
        if(index === -1) throw new NotFoundException('student not found')
            const deleted = this.students.splice(index,1)
        return {message: 'student deleted', student : deleted[0]}
    }
}
