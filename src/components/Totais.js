// components/Totais.js

import React from 'react';

const Totais = ({ totalReceitas, totalDespesas }) => {
  const total = totalReceitas - totalDespesas;

  return (
    <div className="totais">
      <div>
        <h2>Total Receitas</h2>
        <p>{totalReceitas.toFixed(2)}</p>
      </div>
      <div>
        <h2>Total Despesas</h2>
        <p>{totalDespesas.toFixed(2)}</p>
      </div>
      <div>
        <h2>Total</h2>
        <p>{total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Totais;
