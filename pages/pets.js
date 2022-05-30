import Image from 'next/Image'
import img from '../public/pantoler.png'

function PetsPage() {
    return (<div>
        <Image src={img} placeholder='blur' blurDataURL={'../public/vercel.svg'} alt='pet' width='280' height='420'/>
        {['1','2','3','4','5'].map((path)=>{
            return (<div key={path}>
                <Image src={`/${path}.jpg`} alt='pet' width='280' height='420'/>
            </div>)
        })}
    </div>)
}

export default PetsPage