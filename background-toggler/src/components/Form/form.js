import "./form.css";

export default function Form(props) {
    return (
        <form onSubmit={props.onSubmission}>
            <div class="group">
                <input type="text" placeholder="Color" value={props.inputValue} onChange={props.changeInputValue}/>
            </div>
            <div class="group">
                <button type="submit">Change background color</button>
            </div>
        </form>
    );
}