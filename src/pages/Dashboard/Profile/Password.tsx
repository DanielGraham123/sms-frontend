import { useState } from "react";
import Button from "../../../base-components/Button";
import { FormInline, FormInput, FormLabel } from "../../../base-components/Form";

const Password = () => {

    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleChangeConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(e.target.value);
        if (e.target.value !== password) {
            setError("Passwords do not match")
        } else {
            setError("")
        }
    };

    return (
        <div className="col-span-12 intro-y box 2xl:col-span-6">
            <div className="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">Change Password</h2>
            </div>

            <div className="p-5 pb-8 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
                {/* BEGIN: Error Msg */}
                {error && (
                    <div className="intro-x mt-3 mb-5">
                        <div className="bg-danger/20 text-red-800 font-normal rounded-md p-2">
                            {error}
                        </div>
                    </div>
                )}
                <FormInline>
                    <FormLabel htmlFor="horizontal-form-1" className="sm:w-20">
                        New Password
                    </FormLabel>
                    <FormInput id="horizontal-form-1" type="password" placeholder="xxxxxxxx" value={password} autoComplete="off" onChange={handleChangePassword} />
                </FormInline>
                <FormInline className="mt-5">
                    <FormLabel htmlFor="horizontal-form-1" className="sm:w-20">
                        Confirm Password
                    </FormLabel>
                    <FormInput id="horizontal-form-1" type="password" placeholder="xxxxxxxxx" value={confirmPassword} autoComplete="off" onChange={handleChangeConfirmPassword} />
                </FormInline>

                <div className="mt-5 sm:ml-20 sm:pl-5 float-right mb-5">
                    <Button variant="primary">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default Password