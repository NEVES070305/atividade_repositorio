import React from 'react';

function TransacaoList({ transacoes,  editarTransacao, deletarTransacao,  limparEdicao }) {
  // Filtrar transações por tipo (receita ou despesa)
  const receitas = transacoes.filter((transacao) => transacao.tipo === 'receita');
  const despesas = transacoes.filter((transacao) => transacao.tipo === 'despesa');

  // Calcular o total para cada tipo
  const calcularTotal = (transacoes) => {
    return transacoes.reduce((total, transacao) => total + transacao.valor, 0);
  };

  return (
    <div className="transacoes-container">
      <div className="receitas">
        <h2>Receitas</h2>
        <ul>
          {receitas.map((transacao, index) => (
            <li key={index} className="transacao">
              <p><strong>Nome:</strong> {transacao.nome}</p>
              <p><strong>Valor:</strong> {transacao.valor}</p>
              <p><strong>Pago por:</strong> {transacao.pagoPor}</p>
              <div>
                <button onClick={() => editarTransacao(transacao)}>Editar</button>
                <button onClick={() => deletarTransacao(transacao)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total Receitas: {calcularTotal(receitas)}</p>
      </div>

      <div className="despesas">
        <h2>Despesas</h2>
        <ul>
          {despesas.map((transacao, index) => (
            <li key={index} className="transacao">
              <p><strong>Nome:</strong> {transacao.nome}</p>
              <p><strong>Valor:</strong> {transacao.valor}</p>
              <p><strong>Pago por:</strong> {transacao.pagoPor}</p>
              <div>
              <button onClick={() => editarTransacao(transacao)}>Editar</button>
              <button onClick={() => deletarTransacao(transacao)}>Deletar</button>
              </div>
            </li>
          ))}
        </ul>
        <p>Total Despesas: {calcularTotal(despesas)}</p>
      </div>
    </div>
  );
}

export default TransacaoList;
