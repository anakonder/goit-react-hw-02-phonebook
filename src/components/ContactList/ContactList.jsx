export const ContactList = ({contacts, filter, onDeleteContact}) => {
    return (
        <ul>
            {filter.length === 0
                ?
                contacts.map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.name} {contact.number}</span>
                        <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                ))
                :
                filter.map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.name} {contact.number}</span>
                        <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>            

                ))
            }

        </ul>
    )
}