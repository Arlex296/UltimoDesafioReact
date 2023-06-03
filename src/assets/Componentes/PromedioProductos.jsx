import React from 'react';
import { Flex } from "@chakra-ui/react";
//import Estylos from '../Estilos/PromedioProductos.Module.css'

function PromedioProductos() {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"
      marginBottom="50px"
    >
      <div style={{ marginTop: '50px' }} >
        Promedio Productos
      </div>
    </Flex>
  );
}

export default PromedioProductos;