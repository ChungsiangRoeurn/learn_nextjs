import React from 'react'

const Items = () => {
    return (
        // md:grid-cols-2 lg:grid-cols-3
        <div><div className="flex flex-wrap items-center justify-center mt-20 bg-slate-50 p-3">
            <div className="w-1/4 bg-red-200">Column 1</div>
            <div className="w-1/4 bg-yellow-300">Column 2</div>
            <div className="w-1/4 bg-violet-300">Column 3</div>
            <div className="w-1/4 bg-slate-500">Column 4</div>
        </div>
            <div className="flex flex-wrap items-center justify-center mt-20 bg-slate-50 p-3">
                <div className="w-1/4 bg-red-200">Column 1</div>
                <div className="w-1/4 bg-yellow-300">Column 2</div>
                <div className="w-1/4 bg-violet-300">Column 3</div>
                <div className="w-1/4 bg-slate-500">Column 4</div>
            </div></div>

    )
}

export default Items
