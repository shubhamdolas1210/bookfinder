import React, { useState } from 'react';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SearchBar = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    setSearchQuery(inputValue); // Triggers search with the current input value
  };

  return (
    <Box 
      className="search-bar" 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      sx={{ mt: 4, gap: 2, flexWrap: 'wrap' }}
    >
      <TextField
        variant="outlined"
        placeholder="Search for books..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button 
                onClick={handleSearchClick}
                sx={{
                  backgroundColor: 'white',
                  color: 'black',
                  '&:hover': { backgroundColor: 'lightgray' },
                  minWidth: '60px',
                  height: '100%',
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0
                }}
              >
                <SearchIcon />
              </Button>
            </InputAdornment>
          ),
          sx: { 
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            '& .MuiInputBase-input': { color: 'white' }, // Text color
            '& .MuiInputBase-input::placeholder': { color: 'white', opacity: 1 } // Placeholder color
          }
        }}
        sx={{ 
          width: { xs: '100%', sm: '300px', md: '400px' },
          mb: { xs: 2, sm: 0 },
          backgroundColor: 'black',
          borderRadius: '4px',
        }}
      />
    </Box>
  );
};
