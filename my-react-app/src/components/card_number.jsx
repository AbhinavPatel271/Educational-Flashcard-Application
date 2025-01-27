import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Card_Pagination(props) {
  return (
    <Stack spacing={2}>
      <Pagination count={10} 
      variant="outlined"
      siblingCount={0}        
      boundaryCount={0}        
      color="primary"
      onChange={props.handleChange} 
      className="card_num"
      />
    </Stack>
  );
}
