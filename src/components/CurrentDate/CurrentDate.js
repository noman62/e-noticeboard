import React, { useEffect, useState } from 'react';
import './CurrentDate.css'
const CurrentDate = () => {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);
    }, []);
    return (
        <div  >
            <div >
                <div >
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </div>
                <div >
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </div>

            </div>
           
        </div>
    );
};

export default CurrentDate;