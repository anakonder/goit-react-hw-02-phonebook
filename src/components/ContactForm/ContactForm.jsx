import styles from './ContactForm.module.css'


export const ContactForm = ({handleSubmit, handleChange}) => {
  
  return (
       <div>
         <form className={styles.contactForm} onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              className={styles.nameInput}
              type="text"
              name="name"
             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
            <p>Number</p>
            <input
              className={styles.numberInput}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required              
            />
            <button className={styles.submitBtn}>Add contact</button>

         </form>
        </div>
    );
  }
