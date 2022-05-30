import Image from 'next/Image'
import img from '../public/pantoler.png'

function PetsPage() {
    return (<div>
        <h1 className='content-about'>Pets isi Images</h1>
        <Image src={img} placeholder='blur' blurDataURL={'../public/vercel.svg'} alt='image' width='280' height='420'/>
        {['1','2','3','4','5'].map((path)=>{
            return (<div key={path}>
                <Image src={`/${path}.jpg`} alt='pet' width='280' height='320'/>
            </div>)
        })}
    </div>)
}

export default PetsPage