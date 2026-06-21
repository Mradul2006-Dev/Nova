import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = () => {

    const stairParentRef = useRef(null);
    const location = useLocation();

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

        tl.to('.stair', {
            y: "0%"
        });

    }, [location.pathname]);

    return (
        <div>
            <div
                ref={stairParentRef}
                className='h-screen w-full fixed z-[9999] top-0 left-0 pointer-events-none'
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