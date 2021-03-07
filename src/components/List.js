import React from 'react';

import DetailBlock from './DetailBlock';

const List = ({ movielist, type }) => {
    // console.log(type);

    const renderedList = movielist.map((item) => {
        return <DetailBlock movie={item} type={type}/>;
    })
    return (
        <div className='list'>
            {renderedList}
        </div>
    );
};

export default List;