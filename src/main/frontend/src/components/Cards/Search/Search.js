import React from 'react'
import {Form} from "react-bootstrap";

const Search = (props) => {
    let text = React.createRef();

    const onChangeSearch = () => {
        console.log(text.current.value)
        props.loadCardsByName(text.current.value)
    }
    return (
        <div>
            <Form.Control type="text" ref={text} value={props.search} onChange={onChangeSearch} placeholder="Search for..." className={'my-4'}/>
        </div>
    )
}

export default Search
