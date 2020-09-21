import React from 'react';

function HeaderTitle(props) {
    return (
        <h3 className="blog-header-logo text-dark">{props.value}</h3>
    );
}

export default HeaderTitle;