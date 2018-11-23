import React from 'react';

const Page = (props) => {
    return (
        <div>
            <h1>{props.pageContext.title}</h1>
            <h3>{props.pageContext.greeting}</h3>
        </div>
    );
};
export default Page;