import './buttons.module.css';
export const Button = (props) => {
    const {onClick} = props;
    return <button type="button" className="btn btn-outline-success" onClick={onClick}>Add</button>
}