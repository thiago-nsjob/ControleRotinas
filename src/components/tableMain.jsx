import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

const products = [
  {
    Escritorio: "Mega",
    RazaoSocial: "Mundo Brasil Com.e Exp. ltda  ",
    Cnpj: "06.275.863/0001-58",
    Meses: "Janeiro",
    IM: "3.324.661-0",
    SPED: "ICMS",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    RazaoSocial: "Vj eletronica ltda",
    Cnpj: "47.077.409/0001-70",
    Meses: "Janeiro",
    IM: "8.686.172-7",
    SPED: "ICMS",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    CodigoEmpresa: "969",
    RazaoSocial: "D. anker assessoria",
    Cnpj: "06.224.902/0001-98",
    Meses: "Janeiro",
    IM: "3.509.733-7",
    SPED: "Danilo",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    CodigoEmpresa: "967",
    RazaoSocial: "SEBS empre. e part. Ltda",
    Cnpj: "07.896.045/0001-35",
    Meses: "Janeiro",
    IM: "3.501.845-3",
    SPED: "Danilo",
    "Ver. SPED": "1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": " R$ 1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    CodigoEmpresa: "965",
    RazaoSocial: "Felmi Empre. e com. Ltda",
    Cnpj: "04.612.506/0001-02",
    Meses: "Janeiro",
    IM: "3.054.450-5",
    SPED: "Danilo",
    "Ver. SPED": "1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": " R$ 1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    RazaoSocial: "Sibacon comercial ltda",
    Cnpj: "07.084.733/0002-81",
    Meses: "Janeiro",
    IM: "3.450.321-8",
    SPED: "ICMS",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    RazaoSocial: "Geopharma s/a",
    Cnpj: "53.249.736/0001-64",
    Meses: "Janeiro",
    IM: "9.198.260-0",
    SPED: "ICMS",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    RazaoSocial: "Geopharma s/a",
    Cnpj: "53.249.736/0002-45",
    Meses: "Janeiro",
    IM: "2.960.251-3",
    SPED: "ICMS",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    CodigoEmpresa: "1129",
    RazaoSocial: "Aka Consultoria",
    Cnpj: "01.290.264/0001-90",
    Meses: "Janeiro",
    IM: "2.484.211-7",
    SPED: "Danilo",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": " R$ 1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    CodigoEmpresa: "254",
    RazaoSocial: "Juliana Cambur",
    Cnpj: "07.047.191/0001-96",
    Meses: "Janeiro",
    IM: "3.360.505-0",
    SPED: "Simples",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    CodigoEmpresa: "966",
    RazaoSocial: "Construtora P. Mahler ltda",
    Cnpj: "44.679.462/0001-52",
    Meses: "Janeiro",
    IM: "8.589.682-9",
    SPED: "Danilo",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": " R$ 1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    RazaoSocial: "Electra engenharia ltda",
    Cnpj: "60.838.315/0001-34",
    Meses: "Janeiro",
    IM: "1.016.227-5",
    SPED: "ICMS",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  },
  {
    Escritorio: "Poli",
    CodigoEmpresa: "968",
    RazaoSocial: "Viepar consultoria",
    Cnpj: "07.917.369/0001-02",
    Meses: "Janeiro",
    IM: "3.507.300-4",
    SPED: "Danilo",
    "Ver. SPED": "-1",
    FATURAMENTO: "R$ 0.00",
    IR: "R$ 0.00",
    PIS: "R$ 0.00",
    COFINS: "R$ 0.00",
    CSLL: "R$ 0.00",
    PCC: "R$ 0.00",
    " DARFS Fat ": "-R$ -1.00 ",
    " ISS ": "-R$ -1.00 "
  }
];
const columns = [
  {
    dataField: "Escritorio",
    text: "Escritorio",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "RazaoSocial",
    text: "Razao Social",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "Cnpj",
    text: "Cnpj",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "Meses",
    text: "Meses",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "IM",
    text: "IM",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "SPED",
    text: "SPED",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "Ver. SPED",
    text: "Ver. SPED",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "FATURAMENTO",
    text: "FATURAMENTO",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "IR",
    text: "IR",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "PIS",
    text: "PIS",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "COFINS",
    text: "COFINS",
    align: "center"
  },
  {
    dataField: "CSLL",
    text: "CSLL",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "PCC",
    text: "PCC",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "DARFS Fat",
    text: "DARFS Fat",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  },
  {
    dataField: "ISS",
    text: "ISS",
    headerAlign: (column, colIndex) => "left",
    align: "center"
  }
];
const { SearchBar } = Search;

class TableMain extends Component {
  render() {
    return (
      <ToolkitProvider keyField="Cnpj" data={products} columns={columns} search>
        {props => (
          <div>
            <h3>Input something at below input field:</h3>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable {...props.baseProps} />
          </div>
        )}
      </ToolkitProvider>
    );
    //return <BootstrapTable keyField="id" data={products} columns={columns} />;
  }
}

export default TableMain;
