
import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import Productos from "./Productos";
import PedidoRealizados from "./PedidosRealizados";
import TotalProductos from "./TotalProductos";
import IngresosTotales from "./IngresosTotales";
import PromedioProductos from "./PromedioProductos";
import ProductosVendidos from "./ProductosVendidos";
import NroPedidosRealizados from "./NroPedidosRealizado";

function MyComponent() {
  return (
    <Flex
      height="100vh"
      margin= "0"
      display ="flex"
      place-items =  "center"
      min-width = "320px"
      min-height = "100vh"
      flex-wrap = "wrap"
      flex-direction = "column"
    >
      <Tabs>
        <TabList>
          <Tab background="#20c99a" fontStyle="italic">Productos</Tab>
          <Tab background="#20c99a" fontStyle="italic">Pedidos realizados</Tab>
          <Tab background="#20c99a" fontStyle="italic">Total de productos</Tab>
          <Tab background="#20c99a" fontStyle="italic">Pedidos realizados</Tab>
          <Tab background="#20c99a" fontStyle="italic">Ingresos totales</Tab>
          <Tab background="#20c99a" fontStyle="italic">Promedio de productos</Tab>
          <Tab background="#20c99a" fontStyle="italic">Productos mas vendidos</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Productos/>
          </TabPanel>
          <TabPanel>
            <PedidoRealizados/>
          </TabPanel>
          <TabPanel>
            <TotalProductos/>
          </TabPanel>
          <TabPanel>
            <NroPedidosRealizados/>
          </TabPanel>
          <TabPanel>
            <IngresosTotales/>
          </TabPanel>
          <TabPanel>
            <PromedioProductos/>
          </TabPanel>
          <TabPanel>
            <ProductosVendidos/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default MyComponent;
