export interface Employees {

    employeeId: number,
    firstName: string,
    lastName: string,
    dateOfBirth: Date,
    departmentId: number,
    positionId: number,
    departmentIds: number[],
    positionIds: number[]
}