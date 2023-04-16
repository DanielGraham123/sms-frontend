import React from 'react'
import Lucide from '../../base-components/Lucide'

const index = () => {
    return (
        <div className='flex flex-col items-center justify-center text-3xl text-white min-h-screen my-auto'><span>Welcome to Scolar</span>
            <a href='/login' className='flex items-center text-[15px] font-roboto mt-2 border px-3'>Login
                <Lucide icon="ArrowRight" className="w-4 h-4 ml-2" />
            </a>
        </div>
    )
}

export default index