import React, { useContext, useEffect, useRef, useState } from 'react'
import { calcValues } from '../App'

const RightComponent = () => {
    const resetRef = useRef()
    const { values, setValues } = useContext(calcValues)
    const [eachValue, setEachValues] = useState({
        eachTipvalue: 0,
        eachtotalValue: 0
    })

    useEffect(() => {
        const resetValues = function () {
            setValues({
                totalValue: 0,
                tipValue: 0,
                numPeople: 0
            });
            setEachValues({
                eachTipvalue: 0,
                eachtotalValue: 0
            })
        }
        const resetRefElement = resetRef.current
        resetRefElement.addEventListener('click', resetValues)
        return (() => resetRefElement.addEventListener('click', resetValues))
    }, [setValues])

    useEffect(() => {
        if (values.totalValue !== 0 && values.tipValue !== 0 && values.numPeople !== 0) {
            const eachPersonBill = values.totalValue / values.numPeople
            const eachPersonTip = eachPersonBill * (values.tipValue / 100)
            const eachTotalBill = eachPersonBill + eachPersonTip
            setEachValues({
                eachTipvalue: eachPersonTip.toFixed(2),
                eachtotalValue: eachTotalBill.toFixed(2)
            })
        }
    }, [values])

    return (
        <div className='bg-veryDarkCyan rounded-[8px] w-[50%] tablet:w-full relative p-4 tablet:h-[20rem]'>
            <div className='flex justify-between items-center mb-8 leading-tight py-2'>
                <p className='text-white'>Tip Amount <span className='opacity-70 block'>/ person</span></p>
                <div className='flex items-center'><img src="/images/icon-dollar.svg" alt="dollar sign" /><span className='text-strongCyan text-[2rem] font-bold'>{eachValue.eachTipvalue}{eachValue.eachTipvalue ? '' : '.00'}</span></div>
            </div>
            <div className='flex justify-between items-center leading-tight py-2'>
                <p className='text-white'>Total <span className='opacity-70 block'>/ person</span></p>
                <div className='flex items-center'><img src="/images/icon-dollar.svg" alt="dollar sign" /><span className='text-strongCyan text-[2rem] font-bold'>{eachValue.eachtotalValue}{eachValue.eachtotalValue ? '' : '.00'}</span></div>
            </div>
            <button type='reset' className='bg-strongCyan text-darkGrayishCyan absolute bottom-6 left-4 right-4 mx-auto  p-2 rounded-[5px] font-bold' ref={resetRef}>RESET</button>
        </div>
    )
}

export default RightComponent