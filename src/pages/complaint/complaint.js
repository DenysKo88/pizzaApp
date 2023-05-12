import { useState } from 'react';
import styles from './complaint.module.scss';
import { TextArea } from '../../components/textarea/textarea';
import { Button } from '../../components/buttons/buttons';

export const Complaint = () => {
    const [inputText, setInputText] = useState("");
    const [textError, setTextError] = useState("Тре шось написать!")

    
    const textHandler = (e) => {
      setInputText(e.target.value);
      if (e.target.value.length < 3) {
        setTextError("Повинно бути не менше 3 символів");
      } else {
        setTextError("");
      }
    };



    return (
      <div className={styles.complaint}>
        <h2 className={styles.title}>Шо таке?</h2>
        {textError &&
          <div style={{ color: "red" }}>{textError}</div>
        }
        <TextArea
          onChange={textHandler}
          value={inputText}
        />
        <div className={styles.checkbox}>
          <input type="checkbox" name="revo" id="revo" />
          <label for="revo">Да, я бахнув ревка зранку</label>
        </div>
        <Button variant="btn btn-warning" text="Давай далі" />
      </div>
    );
} 