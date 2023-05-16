import InputMask from "react-input-mask";
import { Component } from "react";
class PhoneInput extends Component {
  render() {
    return (
      <InputMask
        required
        mask="+38 (099) 999-99-99"
        maskChar="_"
        placeholder="+38 (___) ___-__-__"
      />
    );
  }
}

export default PhoneInput;
