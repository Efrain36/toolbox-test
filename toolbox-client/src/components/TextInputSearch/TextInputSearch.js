import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const TextInputSearch = ({ placeholder, value, setValue, onSubmit }) => {

    const handleSubmitSearch = (event) => {
        event.preventDefault()
        onSubmit()
    }

    const handleChange = (event) => {
        event.preventDefault()
        setValue(event.target.value);
    }

    return (
        <Form className="d-flex" onSubmit={handleSubmitSearch}>
            <Form.Control
                type="search"
                placeholder={placeholder}
                className="me-2"
                aria-label="Search"
                value={value}
                onChange={handleChange}
            />
            <Button variant="primary" type='submit' onClick={handleSubmitSearch}>Search</Button>
        </Form>
    )
}