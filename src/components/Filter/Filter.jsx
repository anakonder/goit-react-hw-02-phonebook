export const Filter = ({handleFilterChange}) => {
    return (
        <>
            <p>Find contacts by name</p>
            <input type="text" name="filter" onChange={handleFilterChange}/>
        </>
    )
}