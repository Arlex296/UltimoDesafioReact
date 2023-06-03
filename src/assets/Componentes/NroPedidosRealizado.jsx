import React from 'react';
import { Flex } from "@chakra-ui/react";
//import Estylos from '../Estilos/NroPedidosRealizados.Module.css'

function NroPedidosRealizados() {
  return (
    <Flex
      display="flex"
      justifyContent="center"
      color="red"

    >
      <div style={{ marginTop: '50px' }} >
        numero de pedidos relaizados
      </div>
    </Flex>
  );
}

export default NroPedidosRealizados;