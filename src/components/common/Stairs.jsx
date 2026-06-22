import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props ) => {

    const currentPath = useLocation().pathname;
    

    const stairParentRef = useRef(null);

    useGSAP(() => {

    const tl = gsap.timeline();
    tl.to(stairParentRef.current, {
        display: "block"
    });

    tl.from('.stair', {
        height: 0,
        stagger: {
            amount: -0.25
        }
    });

    tl.to('.stair', {
        y: "100%",
        stagger: {
            amount: -0.25
        }
    });

    tl.to(stairParentRef.current, {
        display: "none"
    });

}, [currentPath]);

    console.log(props);
    return (
        <div>
            {props.children}
            <h1 className='text-blue-600'>Hero</h1>
            <div
                ref={stairParentRef}
                className='h-screen w-full fixed top-0 z-20 '
            >
                <div className='h-full w-full flex'>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                    <div className='stair h-full w-1/5 bg-black'></div>
                </div>
            </div>
        </div>
    )
}

export default Stairs