import React, {
    useContext,
    useEffect,
    useRef
} from 'react'
import { calcValues } from '../App'

const LeftComponent = () => {
    const totalRef = useRef()
    const { setValues, values } = useContext(calcValues)
    const tipRef = useRef([])
    const customTipRef = useRef()
    const numPeople = useRef()

    useEffect(() => {
        const inputElement = totalRef.current

        const debounce = (fn, delay) => {
            let timeoutID;
            return function (args) {
                if (timeoutID) {
                    clearTimeout(timeoutID);
                }
                timeoutID = setTimeout(() => {
                    fn(args);
                }, delay);
            };
        };

        const handleClick = function (e) {
            setValues((prev) => ({ ...prev, totalValue: Number(e.target.value) }))
        }
        const debounceHandleTotal = debounce(handleClick, 1000)
        inputElement.addEventListener('input', debounceHandleTotal)
        return (() => inputElement.removeEventListener('input', debounceHandleTotal))
    }, [setValues])

    useEffect(() => {
        const handleTip = function (e) {
            setValues((prev) => ({ ...prev, tipValue: Number(e.target.value) }))
        }

        const debounce = (fn, delay) => {
            let timeoutID;
            return function (args) {
                if (timeoutID) {
                    clearTimeout(timeoutID);
                }
                timeoutID = setTimeout(() => {
                    fn(args);
                }, delay);
            };
        };
        const debounceHandleTip = debounce(handleTip, 1000)
        const tipRefElement = tipRef.current
        const customTipRefElement = customTipRef.current
        tipRefElement.forEach((element) => {
            element.addEventListener('click', handleTip)
            if (values.tipValue === Number(element.value)) {
                element.style.backgroundColor = 'hsl(184, 14%, 56%)'
            }
            else {
                element.style.backgroundColor = 'hsl(183, 100%, 15%)'
            }
        })
        customTipRefElement.addEventListener('input', debounceHandleTip)

        return (() => {
            customTipRefElement.removeEventListener('click', debounceHandleTip)
            tipRefElement.forEach((element, index) => {
                element.removeEventListener('click', handleTip)
            })
        })
    }, [setValues, values])

    useEffect(() => {
        const handlePeople = function (e) {
            setValues((prev) => ({ ...prev, numPeople: Number(e.target.value) }))
        }

        const debounce = (fn, delay) => {
            let timeoutID;
            return function (args) {
                if (timeoutID) {
                    clearTimeout(timeoutID);
                }
                timeoutID = setTimeout(() => {
                    fn(args);
                }, delay);
            };
        };
        const debounceHandlepeople = debounce(handlePeople, 1000)
        numPeople.current.addEventListener('input', debounceHandlepeople)
        const handlePeopleELement = numPeople.current
        return (() => handlePeopleELement.removeEventListener('input', debounceHandlepeople))
    }, [setValues])

    return (
        <div className='w-[50%] tablet:w-full'>
            <div className='mb-8'>
                <p className='mb-1 text-grayishCyan'>Bill</p>
                <div className='flex justify-between gap-4 items-center bg-lightGrayishCyan rounded-[3px] px-4'>
                    <img src="/images/icon-dollar.svg" alt="dollar sign" />
                    <input type="number" className='flex-1 py-3  text-veryDarkCyan text-lg font-bold text-right' placeholder='0' ref={totalRef} />
                </div>
            </div>
            <div className='mb-8'>
                <p className='mb-1 text-grayishCyan'>Select Tip %</p>
                <div className='flex gap-4 flex-wrap  *:rounded-[5px] *:w-[30%] *:py-5 *:text-center *:text-lg *:font-semibold android:*:w-[28%] justify-around'>
                    <input readOnly defaultValue='5' className='text-white cursor-pointer' ref={(el) => (tipRef.current[0] = el)} />
                    <input readOnly defaultValue='10' className='text-white cursor-pointer' ref={(el) => (tipRef.current[1] = el)} />
                    <input readOnly defaultValue='15' className='text-white cursor-pointer' ref={(el) => (tipRef.current[2] = el)} />
                    <input readOnly defaultValue='25' className='text-white cursor-pointer' ref={(el) => (tipRef.current[3] = el)} />
                    <input readOnly defaultValue='50' className='text-white cursor-pointer' ref={(el) => (tipRef.current[4] = el)} />
                    <input type='number' placeholder='Custom' className='bg-lightGrayishCyan placeholder:text-strongCyan text-veryDarkCyan' ref={customTipRef} />
                </div >
            </div >
            <div>
                <p className='mb-1 text-grayishCyan'>Number of People</p>
                <div className='flex justify-between gap-4 items-center bg-lightGrayishCyan rounded-[3px] px-4'>
                    <img src="/images/icon-person.svg" alt="dollar sign" />
                    <input type="number" className='flex-1 py-3  text-veryDarkCyan font-bold text-lg text-right' placeholder='0' ref={numPeople} />
                </div>
            </div>
        </div >
    )
}

export default LeftComponent