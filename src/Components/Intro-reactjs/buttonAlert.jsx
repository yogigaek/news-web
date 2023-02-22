const MyButton = (props) => {
    return (
        <div>
            <button onClick={() => props.clicked()}>Click Me</button>
        </div>
    )
}

export default MyButton;