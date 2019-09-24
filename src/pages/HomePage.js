import React from 'react'
import { ProductConsumer } from '../context';
export default function HomePage() {
    return (
        <>
            <ProductConsumer>
                {value => {
                    console.log(value)
                    return <h1>Homepage hello</h1>
                }}
            </ProductConsumer>
        </>
    );
}