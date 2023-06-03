import React from 'react';
import { Flex } from "@chakra-ui/react";
//import Estylos from '../Estilos/ProductosVendidos.Module.css'

function ProductosVendidos() {
    return (
        <Flex
            display="flex"
            justifyContent="center"
            color="red"
            marginBottom="50px"
        >
            <div style={{ marginTop: '50px' }} >
                productos vendidos
            </div>
        </Flex>
    );
}

export default ProductosVendidos;