const { useState } = React;
function Button(){
    const[contador,setContador] = useState(0);
    
    return(
        <>
            <button onClick={() => setContador(contador + 1)}>clique aqui!</button>;
            <p>{contador}</p>;
        </>
    )
}
const Header = () => {
    const elemento = <h1>Criando um botão somador</h1>;
    

    return (
        <>
            <>{elemento}</>;
            <Button/>;
        </>
    );
}
    
ReactDOM.render(<Header />,
document.getElementById('root'));