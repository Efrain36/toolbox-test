import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavbarComponent } from './components/Navbar/Navbar';
import { TableComponent } from './components/Table';
import { TextInputSearch } from './components/TextInputSearch/TextInputSearch';
import { getFilesData } from './api/filesApi';

export const App = () => {

    const [searchInput, setSearchInput] = useState('');
    const [filesData, setFilesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await getFilesData(searchInput);
            setFilesData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSearchSubmit = () => {
        getData();
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <NavbarComponent title="React Test App" />
            <Container>
                <div style={{ marginBottom: '20px' }}>
                    <TextInputSearch
                        placeholder="Search by file name"
                        value={searchInput}
                        setValue={setSearchInput}
                        onSubmit={handleSearchSubmit}
                    />
                </div>
                <TableComponent data={filesData} isLoading={isLoading} />
            </Container>
        </>
    );
};

export default App;
