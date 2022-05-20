import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
// Last Icons 
// material Icons
import TagIcon from '@mui/icons-material/Tag';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import RateReviewIcon from '@mui/icons-material/RateReview';

// react Icons
import {RiFileInfoLine} from 'react-icons/ri';
import {TiContacts} from 'react-icons/ti';
import {CgInbox} from 'react-icons/cg';

// colors
import {grey} from '@mui/material/colors';
import { LinearProgress } from '@mui/material';


const drawerWidth = 240;

function SideBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar> <img
            className="img"
            src="https://www.nupco.com/wp-content/uploads/2020/02/logo-e1582534671474.png"
            alt="MyPhoto"
          /></Toolbar>
      
      <List>
        {[{text:'CR number',icon:<TagIcon sx={{ color: grey[900] }}  />},{text:'General Info',icon:<RiFileInfoLine  style={{ color:'black',fontSize:'1.8em'}}/>},{text:'Contacts',icon:<TiContacts style={{ color:'black',fontSize:'1.8em'}}/>},{text:'Product details',icon:<CgInbox style={{ color:'black',fontSize:'1.8em'}} />},{text:'Financial details',icon:<CurrencyExchangeIcon sx={{ color:grey[900]}}/>},{text:'Documents',icon:<FileCopyIcon sx={{ color:grey[900]}}/>},{text:'History',icon:<SettingsBackupRestoreIcon sx={{ color:grey[900]}}/>},{text:'Preview and Submit',icon:<RateReviewIcon sx={{ color:grey[900]}}/>}].map((element, index) => (
         
         <ListItem button key={element.text}>
            <ListItemIcon>
              {element.icon}
            </ListItemIcon>
            <ListItemText  primary={element.text} secondary={`STEP ${index+1}`} />
          </ListItem>
          
        ))}
      </List>
      <Divider />
      <h5>You finished <strong>10%</strong> of the application</h5>
      <Box sx={{ width: '100%'}}>
      <LinearProgress variant="determinate" value='10'  />
    </Box>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
      
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
      </Box>
    </Box>
  );
}

SideBar.propTypes = {
 
  window: PropTypes.func,
};

export default SideBar;
