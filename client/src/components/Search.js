import React, {useState} from 'react'
import { TextField, Button } from '@material-ui/core';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('')

      const searchContainer = {
        padding: '8px',
      }
      const handleInputChange = (e) => {
            setSearchQuery(e.target.value);
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchQuery);
      };

    return (
    <div style={searchContainer}>
        <form onSubmit={handleSubmit}>
         <TextField id="search" label="Search for track or artist" value={searchQuery} onChange={handleInputChange} />
         <Button variant="contained" color="primary" type="submit">
  Search
</Button>
</form>
    </div>
    )
}

export default Search