import React from 'react';
import { Provider } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Image from 'next/image';
import store from './store';
import List from './list';
import Form from './form';
import ResetButton from './resetButton';

const Main = () => (
    <Provider store={store}>
        <Container maxWidth="sm" style={{textAlign:'center',marginTop:'50px'}}>
            <Typography variant="h5">
            <figure>
                <Image src="/todo.svg" width={300} height={100}  alt='Header Image'/>
                <figcaption style={{marginTop:'20px'}}>Add your List Here</figcaption>
            </figure>
                Todos With Redux-Saga
            </Typography>
            <Form />
            <List />
            <ResetButton />
        </Container>
    </Provider>
)

export default Main;