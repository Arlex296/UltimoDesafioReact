import React from 'react';
import { Flex } from "@chakra-ui/react";
//import Estylos from '../Estilos/IngresosTotales.Module.css'

function IngresosTotales() {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"

    >
      <div style={{ marginTop: '50px' }} >
        Ingresos totales
      </div>
    </Flex>
  );
}

export default IngresosTotales;