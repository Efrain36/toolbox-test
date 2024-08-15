import React from 'react'
import Table from 'react-bootstrap/Table';
import { Container, Row, Spinner } from 'react-bootstrap';

export const TableComponent = ({ data, isLoading }) => {

    const loadingSpinner = () => {
        return (
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Spinner animation="border" variant="primary" style={{ width: '2rem', height: '2rem' }} role="status" />
                </Row>
            </Container>
        )
    }

    return (
        <>
            {
                isLoading ? loadingSpinner() :
                    <Table striped bordered hover size="sm">
                        <thead style={{ borderBottomColor: 'black', borderBottomWidth: '0.15rem' }}>
                            <tr>
                                <th>File Name</th>
                                <th>Text</th>
                                <th>Number</th>
                                <th>Hex</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.length == 0
                                    ?
                                    <h2>
                                        No se encontraron registros...
                                    </h2>
                                    :
                                    data.map(file => (
                                        file.lines.map((line, index) => (
                                            <tr key={index}>
                                                <td>{file.file}</td>
                                                <td>{line.text}</td>
                                                <td>{line.number}</td>
                                                <td>{line.hex}</td>
                                            </tr>
                                        ))
                                    ))
                            }
                        </tbody>
                    </Table>
            }
        </>
    )
}

export default TableComponent;