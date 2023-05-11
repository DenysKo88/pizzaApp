

// export const Button = (props) => {
//     const {onClick} = props;
//     return <button type="button" className="btn btn-outline-success" onClick={onClick}>Add</button>
// }

// function Button(props) {
//   return <Button variant={props.variant}>{props.text}</Button>;
// }

export const Button = (props) => {
  const { onClick, text, variant } = props;
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}; 