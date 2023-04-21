import React, { useEffect, useState } from 'react'
import { FormLabel, FormInput, FormSelect } from '../../../../base-components/Form'
import Button from '../../../../base-components/Button'
import GradeService from '../../../../services/GradeService';
import ProgrammeService from '../../../../services/ProgrammeService';
import Litepicker from '../../../../base-components/Litepicker';

type PageProps = {
    nextPage: () => void,
    prevPage: () => void;
}

type Programme = {
    id: number;
    name: string;
    level: string;
}

const Step3 = ({ nextPage, prevPage }: PageProps) => {
    const [grades, setGrades] = useState<any>([])
    const [programmes, setProgrammes] = useState<Programme[]>([]);
    const [error, setError] = useState("");
    const [date, setDate] = useState("");


    const fetchGrades = async () => {
        GradeService.getAllGrades().then((response) => {
            setError("")
            console.log("Grades: ", response);
            setGrades(response)
        }).catch((res) => {
            console.log("error: ", res);

            if (res.response.status === 401 || res.response.status === 400) {
                setError(res.response.data)
            } else {
                setError(res.response.data.message)
            }
        })
    }

    const fetchProgrammes = () => {
        ProgrammeService.getAllProgrammes().then((response) => {
            console.log("programmes: ", response);
            setProgrammes(response);
        });
    }

    useEffect(() => {
        fetchGrades()
        fetchProgrammes()
    }, [])

    return (
        <>
            <div className="text-base font-medium">Programme Selection</div>
            <div className="grid grid-cols-12 gap-4 mt-5 gap-y-5">
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-2">Grade</FormLabel>
                    <FormSelect id="input-wizard-6">
                        {
                            grades?.map((grade: any) => {
                                return (
                                    <option key={grade.id} value={grade.id}>{grade.name}</option>
                                )
                            })
                        }
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-3">Programme</FormLabel>
                    <FormSelect id="input-wizard-6">
                        {
                            programmes?.map((programme: Programme) => {
                                return (
                                    <option key={programme.id} value={programme.id}>{programme.name}</option>
                                )
                            })
                        }
                    </FormSelect>
                </div>
                <div className="col-span-12 intro-y sm:col-span-6">
                    <FormLabel htmlFor="input-wizard-4">Enrollement Date</FormLabel>
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

                <div className="flex items-center justify-center col-span-12 mt-5 intro-y sm:justify-end">
                    <Button onClick={() => prevPage()} variant="secondary" className="w-24">
                        Previous
                    </Button>
                    <Button onClick={() => { }} variant="primary" className="w-24 ml-2">
                        Submit
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Step3