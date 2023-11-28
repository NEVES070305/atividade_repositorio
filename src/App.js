import React, { useState } from 'react';
import TransacaoForm from './components/TransacaoForm';
import TransacaoList from './components/TransacaoList';
import Totais from './components/Totais';
import './styles.css';

function App() {
  const [transacoes, setTransacoes] = useState([]);
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);
  const [transacaoEmEdicao, setTransacaoEmEdicao] = useState(null);

  const adicionarTransacao = (transacao) => {
    setTransacoes([...transacoes, transacao]);

    if (transacao.tipo === 'receita') {
      setTotalReceitas(totalReceitas + transacao.valor);
    } else if (transacao.tipo === 'despesa') {
      setTotalDespesas(totalDespesas + transacao.valor);
    }
  };
  const editarTransacao = (transacaoEditada) => {
    // Mapeie sobre as transações existentes e substitua a transação em edição pelo objeto editado
    const transacoesEditadas = transacoes.map((transacao) =>
      transacao === transacaoEmEdicao ? transacaoEditada : transacao
    );
  
    // Atualize o estado com as transações editadas
    setTransacoes(transacoesEditadas);
  
    // Limpe a transação em edição
    setTransacaoEmEdicao(null);
  };

  const deletarTransacao = (transacao) => {
    const novasTransacoes = transacoes.filter((t) => t !== transacao);
    setTransacoes(novasTransacoes);

    if (transacao.tipo === 'receita') {
      setTotalReceitas(totalReceitas - transacao.valor);
    } else if (transacao.tipo === 'despesa') {
      setTotalDespesas(totalDespesas - transacao.valor);
    }
  };

  const limparEdicao = () => {
    setTransacaoEmEdicao(null);
  };

  return (
    <div className="app-container">
    <div className="form-container">
      <h1>Controle Financeiro</h1>
      <TransacaoForm
        adicionarTransacao={adicionarTransacao}
        transacaoEmEdicao={transacaoEmEdicao}
        limparEdicao={limparEdicao}
      />
    </div>
    <div className="transacoes-container">
      <TransacaoList
        transacoes={transacoes}
        editarTransacao={editarTransacao}
        deletarTransacao={deletarTransacao}
        limparEdicao={limparEdicao}
      />
      <Totais totalReceitas={totalReceitas} totalDespesas={totalDespesas} />
    </div>
  </div>
  );
}

export default App;
