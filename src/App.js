import React from "react";

export default function App() {
    const maria = {
        cliente: "Maria",
        idade: 27,
        compras: [
            {nome: 'Notebook', valor: 'R$ 2500'},
            {nome: 'Geladeira', valor: 'R$ 3000'},
            {nome: 'Smartphone', valor: 'R$ 1500'}
        ],
        ativa: true
    };
    const mario = {
        cliente: "Mario",
        idade: 31,
        compras: [
            {nome: 'Notebook', valor: 'R$ 2500'},
            {nome: 'Geladeira', valor: 'R$ 3000'},
            {nome: 'Smartphone', valor: 'R$ 1500'},
            {nome: 'Guitarra', valor: 'R$ 3000'},
        ],
        ativa: false
    };
    const dados = maria;
    const total = dados.compras.map((item) => 
        Number(item.valor.replace('R$ ', ''))
    ).reduce((a,b) => a + b);
    console.log(total)
    
    return (
        <div>
            <p>Nome: {dados.cliente}</p>
            <p>Idade: {dados.idade} anos</p>
            <p>Conta: <span style={{color: dados.ativa ? 'green' : 'red'}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span></p>
            <p>Valor total de compras: {total}</p>
            {total >= 10000 && <p>Você está gastando muito</p>};
        </div>
    )
   
}