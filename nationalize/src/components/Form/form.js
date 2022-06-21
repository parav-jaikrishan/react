import "./form.css";

export default function Form(props) {
    return (
        <form onSubmit={props.onSubmission}>
            <div className="group">
                <input type="text" placeholder="Name" value={props.inputValue} onChange={props.changeInputValue}/>
                <button type="submit">Search</button>
            </div>
        </form>
    );
}