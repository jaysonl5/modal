

export default function MovieSearch(props) {

    const handleSubmit = (event) => {        
        event.preventDefault();
        <FetchMovies movieQuery={movieQuery} />
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type={"text"} value={props.searchValue} onChange={e => props.setSearchValue(e.target.value)} />
            <button onClick={"submit"} />
            </form>
        </div>
    )

}