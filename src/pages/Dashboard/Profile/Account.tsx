import Button from "../../../base-components/Button";
import { FormInline, FormInput, FormLabel } from "../../../base-components/Form";

const Account = ({ user }: { user: any }): JSX.Element => {
    return (
        <div className="col-span-12 intro-y box 2xl:col-span-6">
            <div className="flex items-center px-5 py-5 border-b sm:py-3 border-slate-200/60 dark:border-darkmode-400">
                <h2 className="mr-auto text-base font-medium">Account Settings</h2>
            </div>

            <div className="p-5 pb-8 border-b lg:flex-row border-slate-200/60 dark:border-darkmode-400">
                <FormInline>
                    <FormLabel htmlFor="horizontal-form-1" className="sm:w-20">
                        Email
                    </FormLabel>
                    <FormInput id="horizontal-form-1" type="email" placeholder="example@gmail.com" value={user?.email} autoComplete="off" />
                </FormInline>
                <FormInline className="mt-5">
                    <FormLabel htmlFor="horizontal-form-1" className="sm:w-20">
                        Username
                    </FormLabel>
                    <FormInput id="horizontal-form-1" type="text" placeholder="example@gmail.com" value={user?.username} autoComplete="off" />
                </FormInline>

                <div className="mt-5 sm:ml-20 sm:pl-5 float-right mb-5">
                    <Button variant="primary">Save</Button>
                </div>
            </div>
        </div>
    )
}

export default Account