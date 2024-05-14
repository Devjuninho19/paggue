import React from "react";

const TableRow = () => {
  return (
    <tr>
      <td>
        <div className="product">
          <img
            src="https://www.google.com/imgres?q=foto%20de%20shows&imgurl=https%3A%2F%2Fas1.ftcdn.net%2Fv2%2Fjpg%2F02%2F49%2F81%2F82%2F1000_F_249818226_PXYKFn0w9MIAddfSPS1mxJ3eRgMHxFCC.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fbr%2Fimages%2Ftheater-show-label-festive-stage-lights-shows-golden-text-on-red-curtains-vector-background-illustration%2F249818226&docid=GxAlNI1kpNQWlM&tbnid=SZefbGVB8cBDeM&vet=12ahUKEwiXipay1YiGAxVSqpUCHY8UCN0QM3oECCUQAA..i&w=1000&h=692&hcb=2&ved=2ahUKEwiXipay1YiGAxVSqpUCHY8UCN0QM3oECCUQAA"
            alt=""
          />
          <div className="info">
            <div className="name">Nome do produto</div>
            <div className="category">Categoria</div>
          </div>
        </div>
      </td>
      <td>R$ 120</td>
      <td>
        <div className="qty">
          <button>
            <i className="bx bx-minus"></i>
          </button>
          <span>2</span>
          <button>
            <i className="bx bx-plus"></i>
          </button>
        </div>
      </td>
      <td>R$ 240</td>
      <td>
        <button className="remove">
          <i className="bx bx-x"></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
