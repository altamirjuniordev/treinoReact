export default function Aula03() {
    const produtos = ["Telefone", "TV", "Relógio"]
    const livros = [
        {nome: "Game of Thrones", ano: 1996},
        {nome: "Clash of Kings", ano: 1998},
        {nome: "A Storm of Swords", ano: 2000},
    ];

    return (
        <>
            <p>
                {produtos.map((produto) => (
                    <li key={produto}> {produto}</li>
                ))}
            </p>
            <br /><br />
            <ul>
                {livros
                .filter(({ano})=> ano >= 1998)
                .map(({nome, ano}) => (
                    <li key={nome}>{nome}</li>
                ))}
            </ul>
        </>
    )
}