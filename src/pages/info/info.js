import styles from './info.module.scss';
import {Button} from './../../components/buttons/buttons'

export const Info = () => {
    return (
      <div className={styles.info}>
        <h2 className={styles.title}>Тре ще інфа</h2>
        <input
          className={styles.input}
          type="date"
          placeholder="1988-08-25"
          name="date"
        />
        <input
          className={styles.input}
          type="tel"
          id="phone"
          name="phone"
          pattern="+[0-9]{2}([0-9]{3})[0-9]{3}-[0-9]{2}-[0-9]{2}"
          placeholder="+38(050)555-55-55"
        />
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          placeholder="mailto@mail.com"
        />
        <Button text="Ще чуток" variant="btn btn-warning" />
      </div>
    );
}