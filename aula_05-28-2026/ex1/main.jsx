const Header = () => {
    const elemento = <h1>Aprendendo JSX</h1>
    const curso = "React"

    return (
        <>
            <h1>Curso: {curso}</h1>
            <p>{elemento}</p>
        </>
    );
}
    
ReactDOM.render(<Header />,
document.getElementById('root'));