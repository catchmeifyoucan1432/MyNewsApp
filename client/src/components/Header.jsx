import {AppBar, Toolbar, styled} from '@mui/material';
import {Menu} from '@mui/icons-material';
const StyleHeader=styled(AppBar)`
background:#fff;
height:70px;
`;
const MenuIcon=styled(Menu)`
color:#000;
`;
const Image=styled('img')({
    height:'50px',
    margin:'auto',
    paddingRight:'70'

})


const Header=()=>{
    const url = 'https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-newspaper-private-investigator-flaticons-flat-flat-icons.png';
   return(
    < StyleHeader position='static'>
        <Toolbar>
            <MenuIcon/>
           <Image src={url} alt="logo"/>

        </Toolbar>
    </ StyleHeader>
   )
}
export default Header;