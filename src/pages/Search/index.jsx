import {useState, useEffect} from 'react'
import SearchBox from '../../components/SearchBox/index';
import SearchResults from '../../components/SearchResults';
//import data from '../../data/users.json';
import './style.css';

export default function Search() {
  const [isAtTop,setIsAtTop] = useState(false);
  //const [userData, setUserData] = useState(data);
  const [results, setResults] = useState([]);
  const [data,setData] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      setData(data);
    }
    
    getUser().catch(null);
  },[]);

  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    
    if(data?.length){
        const searchTextMinus = searchText.toLowerCase();
        const filterData = data.filter(user=>(
                user.name.toLowerCase().includes(searchTextMinus)     || 
                user.username.toLowerCase().includes(searchTextMinus) || 
                user.email.toLowerCase().includes(searchTextMinus)    || 
                user.phone.includes(searchTextMinus)
            )
        );
        console.log("Filtro",filterData);
        setResults(filterData)
    }
  };
  const handleCloseClick = ()=> {
    setResults([]);
    setIsAtTop(false);
    console.log('Cerrando');
  };

  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"} `}>
        <SearchBox 
          onSearch={handleSearchClick} 
          onClose={handleCloseClick} 
          isSearching={isAtTop} 
        />
        <SearchResults 
          results={results} 
          isSearching={isAtTop}  
        />
    </div>
  );
}
