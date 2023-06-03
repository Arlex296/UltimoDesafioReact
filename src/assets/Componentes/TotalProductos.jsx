import React from 'react';

import { Flex } from "@chakra-ui/react";
//import Estylos from '../Estilos/TotalProductos.Module.css'


function TotalProductos() {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"
      marginBottom="50px"
    >
      <div style={{ marginTop: '50px' }} >
        Total productos
      </div>
    </Flex>
  );
}

export default TotalProductos;