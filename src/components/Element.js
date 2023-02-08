import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

export default function Element(props) {

    return (
        <div className='max-w-screen-md mx-auto'>
            <div className='flex items-center w-full p-10'>
                <img alt='' src={props.img} className='w-36 h-48 rounded-lg object-cover drop-shadow-2xl' />
                <div className='pl-5'>
                    <p className='flex items-center text-xs mb-2'>
                        <FontAwesomeIcon icon={faLocationPin} className='mr-2 text-red-500'/>
                        <span className='mr-4 tracking-wider uppercase'>{props.location}</span>
                        <a href={props.link} target='_blank' rel='noreferrer' className='text-gray-400 underline'>Visit on Google Maps</a>
                    </p>
                    <h2 className='font-bold text-3xl mb-4'>{props.title}</h2>
                    <p className='text-sm font-bold mb-2'>{props.date}</p>
                    <p className='text-sm line-clamp-3'>{props.desc}</p>
                </div>
            </div>
            <hr />
        </div>
    )   
}