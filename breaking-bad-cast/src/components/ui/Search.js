import React, { useState } from 'react';

const Search = ({ getQuery }) => {

    const [text, setText] = useState('');

    const getText = (q) => {
        setText(q);
        getQuery(q);
    }

    return (
        <section className="search" >
            <form>
                <input 
                type="text" 
                className="form-control" 
                placeholder="Search characters"
                value={text}
                onChange={(e) => getText(e.target.value)}
                autofocus/>
            </form>
        </section >
    )
}

export default Search
