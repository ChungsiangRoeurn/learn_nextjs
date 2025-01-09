import { NavData } from '@/constants/NavItems'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div className='flex justify-between items-center py-8 max-w-[1200px] mx-auto'>
            <Link href={"/"} className='font-bold text-4xl text-warning
'>
                Playoo<span className='text-primary'>fyy</span>
            </Link>
            <ul className='flex items-center gap-20 text-xl'>
                <Link href='#' className='flex gap-16'>
                    {
                        NavData.map((item) => {
                            return (
                                <li key={item.id} className='hover:text-green-600'>{item.title}</li>
                            )
                        })
                    }
                </Link>
                <Link href='/login' className='btn btn-primary text-warning text-xl'>Login</Link>
            </ul>
        </div>
    )
}

export default Navbar
