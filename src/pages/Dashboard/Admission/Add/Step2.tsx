import { useRef, useState, useEffect } from 'react'
import { FormLabel, FormInput, FormSelect } from '../../../../base-components/Form'
import Button from '../../../../base-components/Button'
import Litepicker from "../../../../base-components/Litepicker";
import { Gender } from '../../../../types/enums';

type Student = {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    gender: string;
    enrollDate: string;
}

type PageProps = {
    nextPage: () => void,
    prevPage: () => void;
    student: Student;
    setStudent: (student: any) => void;
}

const Step2 = ({ nextPage, prevPage, student, setStudent }: PageProps) => {
    const [error, setError] = useState("");
    const [date, setDate] = useState("");
    const [studentProfile, setStudentProfile] = useState<Student>(student);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudentProfile({ ...studentProfile, [e.target.name]: e.target.value });
    };

    const handleSelectGender = (e: any) => {
        setStudentProfile({ ...studentProfile, gender: e.target.value });
        console.log("selected gender: ", student.gender!)
    }

    const saveStudentProfile = () => {
        setStudent(studentProfile);
        // nextPage();
        console.log("student profile: ", studentProfile);
    }

    useEffect(() => {
        setStudentProfile({ ...studentProfile, gender: Gender.Male });
        console.log("student: ", student);
    }, [])

    return (
        <>
            <div className="text-base font-medium">Student Profile</div>
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-1">First Name</FormLabel>
                    <FormInput
                        id="input-wizard-fName"
                        type="text"
                        placeholder="John"
                        name="firstName"
                        value={studentProfile?.firstName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-2">Last Name</FormLabel>
                    <FormInput
                        id="input-wizard-lName"
                        type="text"
                        placeholder="Doe"
                        name="lastName"
                        value={studentProfile?.lastName}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-2">E-mail</FormLabel>
                    <FormInput
                        id="input-wizard-email"
                        type="email"
                        placeholder="email"
                        name="email"
                        value={studentProfile?.email}
                        onChange={(e) => handleChange(e)}
                        disabled
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-6">Gender</FormLabel>
                    <FormSelect id="input-wizard-6" onChange={(e) => handleSelectGender(e)} name='gender' value={studentProfile?.gender}>
                        <option value={Gender.Male}>Male</option>
                        <option value={Gender.Female}>Female</option>
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-3">Date of Birth</FormLabel>
                    <Litepicker
                        value={date}
                        onChange={setDate}
                        options={{
                            autoApply: false,
                            showWeekNumbers: true,
                            dropdowns: {
                                minYear: 1990,
                                maxYear: null,
                                months: true,
                                years: true,
                            },
                        }}
                        className=""
                    />
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-2">Address</FormLabel>
                    <FormInput
                        id="input-wizard-email"
                        type="text"
                        placeholder="123 Main Street, New York, NY 10030"
                        name="address"
                        value={studentProfile?.address}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                    <Button onClick={() => prevPage()} variant="secondary" className="w-24">
                        Previous
                    </Button>
                    <Button onClick={() => saveStudentProfile()} variant="primary" className="w-24 ml-2">
                        Next
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Step2