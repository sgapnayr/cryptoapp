import React from 'react'

const LISTHEADER = ({ value }) => {
    return (
        <ListHeader>
            <h3>Coin <strong>{value ? value : 'List'}</strong>
            </h3>
        </ListHeader>
    )
}

export default LISTHEADER