import {AiOutlineCalendar, AiOutlineFundView, AiOutlineLike, 
    AiOutlineFileImage, AiOutlineInteraction} from 'react-icons/ai'
import {FcEditImage} from 'react-icons/fc'
import {MdOutlineWc, MdSubscriptions} from 'react-icons/md'
import {RiMovieLine, RiProductHuntLine} from 'react-icons/ri'

export const dummy_recent = [{
    name: 'Action sur la page',
    value: 'action',
    icon: <AiOutlineCalendar className='w-6 h-6' />,
    stats: []
}, {
    name: "Vues de de la page",
    value: 'vue',
    icon: <AiOutlineFundView className='w-6 h-6' />,
    stats: null
}, {
    name: "Mentions J'aime une page",
    value: 'like',
    icon: <AiOutlineLike className='w-6 h-6' />,
    stats: []
}, {
    name: "Couverture de la page",
    value: 'cover',
    icon: <AiOutlineFileImage className='w-6 h-6' />,
    stats: []
} ,
{
    name: "Couverture de la story",
    value: 'story',
    icon: <FcEditImage className='w-6 h-6' />,
    stats: []
},
{
   name: "Recomendation",
    value: 'recomendation' ,
    icon: <MdOutlineWc className='w-6 h-6' />,
    stats: null
}, 
{
    name: "Interation avec la publication",
    value: 'interaction',
    icon: <AiOutlineInteraction className='w-6 h-6' />,
    stats: []
},
{
    name: "Video",
    value: 'video',
    icon: <RiMovieLine className='w-6 h-6' />,
    stats: []
}, {
    name: "Abonnes sur la page",
    value: 'subs',
    icon: <MdSubscriptions className='w-6 h-6' />,
    stats: null
},
{
    name: "Click sur des produits identifier",
    value: 'product',
    icon: <RiProductHuntLine className='w-6 h-6' />,
    stats: []
}
]