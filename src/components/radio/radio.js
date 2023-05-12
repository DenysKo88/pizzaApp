import './radio.module.scss';
export const RadioForm = ({text}) => {
    return (
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked="checked"
        />
        <label class="form-check-label" for="flexRadioDefault1">
          {text}
        </label>
      </div>
    );
}