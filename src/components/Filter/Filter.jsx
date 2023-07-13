export const Filter = ({contacts, handleChange}) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" name="filter" onChange={handleChange}/>
        </>
    )
}