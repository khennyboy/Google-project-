import React from 'react'
import LeftComponent from './leftComponent'
import RightComponent from './rightComponent'

const AllComponent = () => {
    return (
        <div className='bg-lightGrayishCyan rounded-[2px] shadow-md p-[5rem] largeTablet:p-8 android:p-0 android:py-8 tablet:px-8'>
            <img src="/images/logo.svg" alt="Logo" className='mx-auto' />
            <form>
                <div className='flex tablet:flex-col justify-between gap-6 p-4 bg-white mt-10 rounded-[10px] android:py-12 shadow-md'>
                    <LeftComponent />
                    <RightComponent />
                </div>
            </form>
        </div>
    )
}

export default AllComponent