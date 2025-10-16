import React from 'react'

const Practice = () => {
    return(
    //  <Responsive />
    // <Columns />
    // <Flexbox />
    <Gridsystem />
    )
}
export default Practice

// screen size practive ----------------
// const Responsive = () => {
//     return(
//         <div className='
//             bg-red-500 h-full
//             sm:bg-red-400
//             md:bg-blue-400 
//             lg:bg-green-400
//             xl:bg-yellow-400
//             2xl:bg-orange-400'>
//             <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl'>Mr. Devendra</h3>
//         </div> 
//     )
// }

// columns with tailwind ----------------
// const Columns = () => {
//     return(
//         // <div className='columns-1 md:columns-2 lg:columns-4'>
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         //     <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         // </div> 
//          <div className='columns-md gap-0'>
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//             <img className='w-50' src="/profile_img_1.png" alt="logo" />
//         </div> 
//     )
// }

// flex box in tailwind-------------------

// const Flexbox = () => {
//     return(
//         <div className='flex flex-wrap justify-center items-center'>
//             <div className="bg-red-200 size-40">container1</div>
//             <div className="bg-green-200 size-40">container2</div>
//             <div className="bg-yellow-200 size-40">container3</div>
//             <div className="bg-blue-200 size-40">container4</div>
//             <div className="bg-pink-200 size-40">container5</div>
//             <div className="bg-green-200 size-40">container6</div>
//             <div className="bg-yellow-200 size-40">container7</div>
//             <div className="bg-red-200 size-40">container8</div>
//             <div className="bg-gray-200 size-40">container9</div>
//         </div>
//     )
// }

// grid in tailwind css ------------------------

const Gridsystem = () => {
    return(
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700 col-span-2"></div>
            <div className="bg-red-300 p-10 border border-red-700 row-span-3"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
            <div className="bg-red-300 p-10 border border-red-700"></div>
        </div>
    )
}