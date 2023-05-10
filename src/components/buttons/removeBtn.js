import './buttons.module.css'

export const RemoveBtn = (props) => {
  const { onClick } = props;
  return (
    <button type="button" className="btn btn-outline-danger" onClick={onClick}>
      -
    </button>
  );
};
