import React from 'react';
import { Flex } from "@chakra-ui/react";
//import Estylos from '../Estilos/PedidosRealizados.Module.css'

function PedidoRealizados() {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"
    >
      <div style={{ marginTop: '50px' }} >
        Pedidos Realizados
      </div>
    </Flex>
  );
}

export default PedidoRealizados;