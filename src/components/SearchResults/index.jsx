export default function SearchResults({ results, isSearching }) {
  return (
    <div style={{ 
        width:'100%', 
        padding:'0rem 2rem 0rem 2rem' 
    }}>
      {!results?.length && isSearching && 
            <div style={{
                backgroundColor: '#eee', 
                borderRadius:'1em', 
                marginTop:4, 
                padding:10, 
                width:"100%"}}>
                <p>No existen resultados</p>
            </div>
        }

      {results?.map((result) => {
        return (
            <div key={result.id} style={{
                backgroundColor: '#eee', 
                borderRadius:'1em', 
                marginTop:4, 
                padding:10, 
                width:"100%"}}>
                <p>
                    {result.name}, {result.username}, {result.email}
                </p>
            </div>
        );
      })}
    </div>
  );
}
