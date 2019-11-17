import React from 'react';
import './Searchbox.css';

function Searchbox(props, callback){
    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
            <input name="search" className="searchboxTxt" type="text" placeholder="Search"/>
            </form>
        </div>
    )
}

const handleSubmit = (event) => {
    event.preventDefault();
    const input_search = event.target.elements.search
    const search_value = input_search.value;
    input_search.value = '';
    alert(`You are trying to search about "${search_value}", but sorry to say because currently, this function is unhandled, which means still on the development process`);
}
export default Searchbox;