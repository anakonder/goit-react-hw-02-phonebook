export const Filter = ({contacts, handleChange}) => {
    return (
        <input type="text" name="filter" onChange={handleChange}/>
    )
}