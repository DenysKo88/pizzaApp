import { useState } from "react";
import { Button } from "../../components/buttons/buttons";
import { RadioForm } from "../../components/radio/radio";
import styles from './nameForm.module.scss';


export const NameForm = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [lastNameDirty, setLastNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Тре шось написать!');
    const [lastNameError, setLastNameError] = useState('Тре шось написать!');


    const handleSubmit = (e) => {
        if(name !== '' && lastName !== '') {
        handleSubmit(name);
        handleSubmit(lastName);
        setName('');
        setLastName('');
        }
        e.preventDefault();
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true)
                break
            case 'lastName':
                setLastNameDirty(true)
                break
            //no default
        }
    }
    
    const nameHandler = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 3) {
            setNameError("Ім`я повинно бути не менше 3 символів")
        } else {
            setNameError('')
        }
    }

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 3) {
        setLastNameError("Призвіще повинно бути не менше 3 символів")
        } else {
        setLastNameError('');
        }
    }

    return (
      <div className={styles.nameForm}>
        <h2 className={styles.title}>Хто ти?</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {(nameDirty && nameError) && 
            <div style={{ color: "red" }}>{nameError}</div>
          }
          <input
            onBlur={(e) => blurHandler(e)}
            name="name"
            required
            className={styles.input}
            type="text"
            onChange={nameHandler}
            value={name}
            placeholder="Ваше Ім'я"
          />
        </form>
        <form onSubmit={handleSubmit} className={styles.form}>
          {(lastNameDirty && lastNameError) && 
            <div style={{ color: "red" }}>{lastNameError}</div>
          }
          <input
            onBlur={(e) => blurHandler(e)}
            name="lastName"
            required
            className={styles.input}
            type="text"
            onChange={lastNameHandler}
            value={lastName}
            placeholder="Ваше Призвіще"
          />
        </form>
        <Button
          variant="btn btn-warning"
          text="Далі"
          className={styles.warning}
        />
        <div className={styles.radioForms}>
          <RadioForm text={"Я гей"} />
          <RadioForm text={"Та наче нє"} />
        </div>
      </div>
    );
}