import React, { useState, useEffect } from 'react';

function TransacaoForm({ adicionarTransacao, transacaoEmEdicao, editarTransacao,limparEdicao }) {
  const [nome, setNome] = useState('');
  const [valor, setValor] = useState('');
  const [tipo, setTipo] = useState('receita');
  const [pagoPor, setPagoPor] = useState('');

  useEffect(() => {
    // Se houver uma transação em edição, preencha o formulário com seus detalhes
    if (transacaoEmEdicao) {
      setNome(transacaoEmEdicao.nome);
      setValor(transacaoEmEdicao.valor.toString());
      setTipo(transacaoEmEdicao.tipo);
      setPagoPor(transacaoEmEdicao.pagoPor);
    }
  }, [transacaoEmEdicao]);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const novaTransacao = {
      nome,
      valor: parseFloat(valor),
      tipo,
      pagoPor,
    };
  
    if (transacaoEmEdicao) {
      editarTransacao(novaTransacao);
      limparEdicao();
    } else {
      adicionarTransacao(novaTransacao);
    }
  
    setNome('');
    setValor('');
    setTipo('receita');
    setPagoPor('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
          <label>
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
      </div>
      <div>
          <label>
            Valor:
            <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
          </label>
      </div>
      <div>
          <label>
            Tipo:
            <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="receita">Receita</option>
              <option value="despesa">Despesa</option>
            </select>
          </label>
      </div>
      <div>
          <label>
            Pago por:
            <input type="text" value={pagoPor} onChange={(e) => setPagoPor(e.target.value)} />
          </label>
      </div>
      <button type="submit">{transacaoEmEdicao ? 'Editar' : 'Adicionar'}</button>
    </form>
  );
}

export default TransacaoForm;
