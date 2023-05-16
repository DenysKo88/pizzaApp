
import styles from './results.module.scss';


export const Results = ({firstName, lastName, inputText, isGay, isRevo, birthday, phoneNumber, password}) => {

    return (
      <div className={styles.results}>
        <h2>Шо ти</h2>
        <div className={styles.text}>
          Ім'я: {firstName} <br />
          Призвіще: {lastName} <br />
          gay: {isGay} <br />
          скарга: {inputText} <br />
          мекнув ревка: {isRevo} <br />
          днюха: {birthday} <br />
          tel: {phoneNumber} <br />
          password: {password}
        </div>
      </div>
    );
}