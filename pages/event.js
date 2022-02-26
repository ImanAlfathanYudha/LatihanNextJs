import ListLink from '../comps/list-link'
import {useState} from 'react'
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
    const {query} = context
    const {category} = query
    const categoryString= category?'category=sports':''
    const response = await fetch('http://localhost:4000/events?'+categoryString);
    const data = await response.json()
    return {
        props: { eventList: data}
    }
}

function EventList({eventList}) {
    const router = useRouter()
    const[events, setEventData] = useState(eventList)

    const resetEvent = async()=>{
        const response = await fetch('http://localhost:4000/events');
        const data = await response.json()
        setEventData(data)
        router.push('event', undefined,{shallow:true})
    }

    const fetchSportEvent = async()=>{
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json()
        setEventData(data)
        router.push('event?category=sports', undefined,{shallow:true})
    }
    return (
        <>
        <button onClick={fetchSportEvent}>Sport Event</button>
        <button onClick={resetEvent}>Reset</button>
    <h1>List of Event</h1>
    {events.map((event)=>{
            return (
                <div key={event.id}>
                <ListLink data={event} type="event"></ListLink>
                </div>
            )
        })}       
    </>
    )
}

export default EventList