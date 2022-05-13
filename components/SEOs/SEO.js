import PropTypes from "prop-types";
import React from 'react'


const SEO = () => {
    return (
        <>
            <meta charSet="utf-8" />
            <title>The Engineers Project</title>
            <meta name="robots" content="noindex, follow" />
            <meta name="description" content="The Engineers Project" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </>
    )
}
SEO.propTypes = {
    title: PropTypes.string
};

export default SEO;
