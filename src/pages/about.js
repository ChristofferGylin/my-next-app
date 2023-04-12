import { useEffect, useState } from "react";

const About = () => {
    const [userName, setUserName] = useState('');

    const getHello = async () => {

        const response = await fetch('http://localhost:3000/api/hello');

        if (response.ok) {

            const data = await response.json();
            setUserName(data.name)

        }

    }

    useEffect(() => {

        getHello();

    }, [])

    return (
        <div className="flex min-h-screen">
            <h1>User Name: {userName}</h1>
        </div>
    )

}

export default About;