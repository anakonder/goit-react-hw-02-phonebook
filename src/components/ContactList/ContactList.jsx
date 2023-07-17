export const ContactList = ({ filterContacts, onDeleteContact }) => {
    
    return (

        <ul>            
                {filterContacts().map((contact) => (
                    <li key={contact.id}>
                        <span>{contact.name} {contact.number}</span>
                        <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </li>
                    ))}             
        </ul>
    )
}