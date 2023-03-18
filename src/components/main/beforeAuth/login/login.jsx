import React from 'react';
import Button from '../parts/button';
import Input from '../parts/input';
import Wrapper from '../parts/wrapper';

const Login = () => {
    return (
        <Wrapper>
            <h3 className='text-[30px] font-[600]' >Login</h3>
            <Input isPassword={false} label={'Mobile Number'} />
            <Input isPassword={true} label={'Password'} />
            <div className='w-full flex justify-between items-center'>
                <a href='#' className='font-[600] text-[12px] cursor-pointer'>New User?</a>
                <a href='#' className='font-[600] text-[12px] cursor-pointer'>Forgot Password?</a>
            </div>
            <Button label={'Submit'} />
            <div className='flex w-full gap-[4px] items-center justify-evenly'>
                <div className='bg-[#2A1E1E] h-[2px] w-full'></div>
                <span className='font-[600] whitespace-nowrap text-[12px] cursor-pointer'>or continue with</span>
                <div className='bg-[#2A1E1E] h-[2px] w-full'></div>
            </div>
            <div className='relative w-[44px] h-[44px]'>
                <svg className='absolute' width="44" height="44" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="27" cy="27" r="27" fill="#2A1E1E" />
                </svg>
                <svg className='absolute' width="44" height="44" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.5 10C17.8351 10 10 17.6114 10 27C10 36.3893 17.8352 44 27.5 44C37.1656 44 45 36.3893 45 27C45 17.612 37.1656 10.0009 27.4997 10.0009L27.5 10ZM35.5253 34.519C35.2118 35.0184 34.5388 35.1767 34.0248 34.8702C29.916 32.4322 24.7436 31.8799 18.6521 33.232C18.37 33.2943 18.074 33.2453 17.8291 33.0957C17.5842 32.9461 17.4105 32.7081 17.3462 32.4342C17.3141 32.2985 17.3099 32.1581 17.3338 32.0208C17.3577 31.8836 17.4092 31.7523 17.4854 31.6345C17.5616 31.5166 17.661 31.4145 17.7779 31.334C17.8947 31.2535 18.0268 31.1962 18.1665 31.1654C24.8329 29.6859 30.5509 30.3228 35.1638 33.0614C35.6778 33.368 35.8408 34.0197 35.5253 34.519ZM37.6672 29.8901C37.2721 30.5137 36.4321 30.7106 35.7906 30.327C31.0867 27.5182 23.9162 26.7048 18.3524 28.3454C17.6308 28.5571 16.8687 28.1621 16.6497 27.4623C16.4323 26.7613 16.8392 26.0224 17.5596 25.8093C23.915 23.9359 31.8159 24.8434 37.218 28.0681C37.8595 28.4519 38.0622 29.2678 37.6672 29.8901ZM37.8511 25.07C32.2109 21.8155 22.9054 21.5162 17.5205 23.1041C16.6557 23.3588 15.7412 22.8845 15.4793 22.0445C15.2172 21.2041 15.7049 20.3163 16.5703 20.0609C22.7518 18.238 33.0281 18.5903 39.5215 22.3351C40.3011 22.7835 40.556 23.7594 40.0941 24.5139C39.6345 25.2696 38.6263 25.5186 37.8511 25.07Z" fill="#1ED760" />
                </svg>
            </div>
        </Wrapper>
    )
}

export default Login;