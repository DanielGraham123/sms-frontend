export type Student = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    gender: string;
    dateOfBirth: string;
    enrollDate: string;
    level: string;
    grade_id: number;
    programme_id: number;
}

export type Parent = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    address: string;
    gender: string;
    parentType: string;
}

export type AdmissionForm = {
    parent: Parent,
    student: Student,
    admissionYear: string;
}