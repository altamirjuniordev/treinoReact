//EXERCÍCIO PARA MOSTRAR SÓ OS PRODUTOS ACIMA DE 1.5K
// E JOGAR AS INFORMAÇÕES NA TELA

import React from "react";

const produtos = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#d95786"],
  },
];

export default function Dez() {
  let dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', '') > 1500)
    );
  return (
    <>
      <h2>Exercício Arrays</h2>
      <section>
        {dados.map(({id, nome, preco, cores}) => 
            <div key={id}>
                <h3>Nome: {nome}</h3>
                <p>Valor: {preco}</p>
                <ul>{cores.map(cor => <li key={cor} style={{backgroundColor: cor, color: 'white'}}>{cor}</li>)}</ul>
            </div>
        )}
      </section>
    </>
  );
}
