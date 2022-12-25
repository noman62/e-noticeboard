import React from 'react';

const UpcomingNotice = (props) => {
    console.log(props.notice);
    return (
        <div>

        <li>{props.notice.utitle}</li>

      </div>
    );
};

export default UpcomingNotice;