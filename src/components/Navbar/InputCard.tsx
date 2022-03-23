import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router-dom';


const ariaLabel = { 'aria-label': 'description' };



const InputCard = () => {
    const [search, setSearch] = React.useState<string>();
    const navigate = useNavigate();
   
    

    const handleSearchInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        setSearch(e.target.value)
    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
        >
            <div className='relative'>

                <Input onChange={(e) => {

                    handleSearchInput(e)
                }

                } onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {

                    if (e.key === "Enter") {
                        e.preventDefault()
                        
                         navigate(`/search/${search}`)
    
                        
                        console.log("Enter", search)
                        
                    }
                    

                }} style={{ color: "white" }} placeholder={`search`} inputProps={ariaLabel} />


                <div className='absolute top-0 right-2'>
                    <SearchIcon />
                </div>
            </div>


        </Box>
    );
}

export default InputCard