import React, { useState, useEffect } from 'react'
import Button from '../../../../base-components/Button'
import clsx from 'clsx'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'
import Step5 from './Step5'


const index = () => {

    const [wizardStep, setWizardStep] = useState(1);
    const [parentForm, setParentForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        gender: "",
        parentType: "",
    });
    const [studentForm, setStudentForm] = useState({
        firstName: "",
        lastName: "",
        email: "xxxxxx@mail.xxx",
        address: "",
        gender: "",
        dateOfBirth: "",
        enrollDate: "",
    });
    const [admissionForm, setAdmissionForm] = useState({
        parent: {},
        student: {},
        programme_id: 0,
        grade_id: 0,
        level: "",
    });

    const nextPage = () => {
        setWizardStep(wizardStep + 1);
    }

    const prevPage = () => {
        setWizardStep(wizardStep - 1);
    }

    const stepsData: object[] = [
        { "step1": "Parent Profile" },
        { "step2": "Student Profile" },
        { "step3": "Programme Selection" },
        // { "step4": "Setup Billing Details" },
        // { "step5": "Pay Admission Fee" }
    ]

    useEffect(() => {
        console.log("admission form: ", admissionForm);
    }, [admissionForm])

    return (
        <div>
            <div className="flex items-center intro-y mt-8 mb-3">
                <h2 className="mr-auto text-lg font-medium">Scolar Admission</h2>
            </div>
            {/* BEGIN: Wizard Layout */}
            <div className="py-10 intro-y box sm:py-20">
                <div className="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">

                    {stepsData.map((step: object, index: number) => (
                        <div className={`z-10 flex items-center flex-1 intro-x lg:text-center lg:block `}>
                            {wizardStep == index + 1 ?
                                <Button variant='primary' className={`w-10 h-10 rounded-full`}> {index + 1} </Button> : <Button className={`w-10 h-10 rounded-full text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400`}>
                                    {index + 1}
                                </Button>

                            }
                            <div className={`ml-3 text-base lg:w-32 lg:mt-3 lg:mx-auto ${wizardStep != index + 1 ? 'text-slate-600 dark:text-slate-400' : 'font-medium'}`}>
                                {step[`step${index + 1}` as keyof typeof step]}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="px-5 pt-10 mt-10 border-t sm:px-20 border-slate-200/60 dark:border-darkmode-400">

                    {wizardStep === 1 && <Step1 nextPage={nextPage} prevPage={prevPage} parent={parentForm} setParent={setParentForm} />}
                    {wizardStep === 2 && <Step2 nextPage={nextPage} prevPage={prevPage} student={studentForm} setStudent={setStudentForm} />}
                    {wizardStep === 3 && <Step3 nextPage={nextPage} prevPage={prevPage} />}
                    {/* {wizardStep === 4 && <Step4 nextPage={nextPage} prevPage={prevPage} />}
                        {wizardStep === 5 && <Step5 nextPage={nextPage} prevPage={prevPage} />} */}
                </div>
            </div>
            {/* END: Wizard Layout */}
        </div>
    )
}

export default index