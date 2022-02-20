import {useState, useEffect} from 'react'
function Dashboard() {
    const[isLoading, setIsLoading] = useState(true)
    const[dashboardData, setDashboardData] = useState(0)
    const[userData, setUserData] = useState(0)
    useEffect(()=>{
        async function fetchDashboardData() {
            const response = await fetch('http://localhost:4000/dashboard');
            const data = await response.json()
            setDashboardData(data)
            setIsLoading(false)
        }

        async function fetchUserData() {
            const response = await fetch('http://localhost:4000/profile');
            const data = await response.json()
            setUserData(data)
            setIsLoading(false)
        }

        fetchDashboardData();
        fetchUserData();
    },[])
     console.log("Tes dashboardData final ", dashboardData)
    console.log("Tes userData final ", userData)

    if (isLoading){
        return <h1>Loading, om...</h1>
    }

    return (
        <div>
            <div>
                <h1>User Profile: </h1>
                <div>
                <h3>{userData.name} </h3>
                        <p> {userData.username}</p>
                </div>
            </div>
            <h2>Dashboard</h2>
            <h3>Post - {dashboardData.posts}</h3>
            <h3>Likes - {dashboardData.likes}</h3>
            <h3>Followers - {dashboardData.followers}</h3>
            <h3>Following - {dashboardData.followings}</h3>
        </div>
    )
}

export default Dashboard;