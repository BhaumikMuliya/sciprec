import { Drawer, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function DrawerMenu(props) {
  return (
    <Drawer
      id="main-menu"
      anchor='right'
      open={props.open}
      onClose={props.handleClose}
    >
      <List>
        {props.list && props.list.map((item, index) => (
          <ListItem key={index}>
            <ListItemButton onClick={props.handleClose}>
              <Link to={item.link} style={{ textDecoration: 'none' }}>
                <Typography style={{ color: '#000' }}>{item.text}</Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerMenu;