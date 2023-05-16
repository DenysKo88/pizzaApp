
import { Button } from "../../components/buttons/buttons";
import { RadioForm } from "../../components/radio/radio";
import styles from './nameForm.module.scss';


export const NameForm = ({firstName, lastName, firstNameDirty, lastNameDirty, firstNameError, lastNameError, firstNameHandler, lastNameHandler, handleSubmit, blurHandler, handleRadioChange, handleButtonClick, handleShowComplaint}) => {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [firstNameDirty, setFirstNameDirty] = useState(false);
    // const [lastNameDirty, setLastNameDirty] = useState(false);
    // const [firstNameError, setFirstNameError] = useState('Тре шось написать!');
    // const [lastNameError, setLastNameError] = useState('Тре шось написать!');


    // const handleSubmit = (e) => {
    //     if(firstName !== '' && lastName !== '') {
    //     handleSubmit({firstName});
    //     handleSubmit({lastName});
    //     setFirstName('');
    //     setLastName('');
    //     }
    //     e.preventDefault();
    // }

    // const blurHandler = (e) => {
    //     switch (e.target.name) {
    //         case 'firstName':
    //             setFirstNameDirty(true)
    //             break
    //         case 'lastName':
    //             setLastNameDirty(true)
    //             break
    //         //no default
    //     }
    // }
    
    // const firstNameHandler = (e) => {
    //     setFirstName(e.target.value);
    //     if(e.target.value.length < 3) {
    //         setFirstNameError("Ім`я повинно бути не менше 3 символів")
    //     } else {
    //         setFirstNameError('')
    //     }
    // }

    // const lastNameHandler = (e) => {
    //     setLastName(e.target.value);
    //     if (e.target.value.length < 3) {
    //     setLastNameError("Призвіще повинно бути не менше 3 символів")
    //     } else {
    //     setLastNameError('');
    //     }
    // }

    // const handleButtonClick = () => {
    // const data = { firstName, lastName };
    // console.log(data);
    // };
    
    return (
      <>
        <div className={styles.nameForm}>
          <h2 className={styles.title}>Хто ти?</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            {firstNameDirty && firstNameError && (
              <div style={{ color: "red" }}>{firstNameError}</div>
            )}
            <input
              onBlur={(e) => blurHandler(e)}
              name="firstName"
              className={styles.input}
              type="text"
              onChange={firstNameHandler}
              value={firstName}
              placeholder="Ваше Ім'я"
            />
          </form>
          <form onSubmit={handleSubmit} className={styles.form}>
            {lastNameDirty && lastNameError && (
              <div style={{ color: "red" }}>{lastNameError}</div>
            )}
            <input
              onBlur={(e) => blurHandler(e)}
              name="lastName"
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
            type="submit"
            onClick={handleShowComplaint}
          />
          <div onSubmit={handleSubmit} className={styles.radioForms}>
            <RadioForm
              onChange={handleRadioChange}
              value="я гей"
              text={"Я гей"}
            />
            <RadioForm
              onChange={handleRadioChange}
              value="Та наче нє"
              text={"Та наче нє"}
            />
          </div>
        </div>
      </>
    );
}

