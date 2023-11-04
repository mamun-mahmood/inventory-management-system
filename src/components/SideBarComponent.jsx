import { useState } from "react";
import "../../public/styles/links.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Box,
} from "@mui/material";
import {
  HomeOutlined,
  Inventory2Outlined,
  MonetizationOnOutlined,
  CardTravelOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBarComponent() {
  const navigate = useNavigate();
  const navigateTo = (to) => {
    navigate(to);
  };
  const location = useLocation();
  const currentPage = location.pathname;
  const sideBarComponent = [
    {
      title: "All Purchases",
      component: <HomeOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "New Purchase",
      component: <Inventory2Outlined fontSize="medium" color="primary" />,
    },
    {
      title: "Export Shipments",
      component: <MonetizationOnOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "License Done",
      component: <PeopleAltOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "SBB Approvals",
      component: <CardTravelOutlined fontSize="medium" color="primary" />,
    },
    {
      title: "Balance Stock",
      component: <CardTravelOutlined fontSize="medium" color="primary" />,
    },
  ];
  const [selected, setSelected] = useState(0);
  const handlSelectedComponent = (event, index) => {
    setSelected(index);
  };
  return (
    <>
      <List>
        {sideBarComponent.map((comp, index) => (
          <ListItem disablePadding dense={true} key={index}>
            <Box width="100%">
              <ListItemButton
                onClick={(event) => {
                  handlSelectedComponent(event, index);
                  navigateTo(comp.title.toLocaleLowerCase().replace(" ", "-"));
                }}
                selected={currentPage === "/" + comp.title.toLowerCase()}
                sx={{
                  mb: 3,
                  borderLeft: 0,
                  borderColor: "primary.main",
                  ml: 1,
                }}
              >
                <ListItemIcon>
                  <IconButton>{comp.component}</IconButton>
                </ListItemIcon>
                <ListItemText
                  primary={comp.title}
                  primaryTypographyProps={{
                    fontSize: "medium",
                    fontWeight: selected === index ? "bold" : "",
                    color: selected === index ? "primary.main" : "inherit",
                  }}
                />
              </ListItemButton>
            </Box>
          </ListItem>
        ))}
      </List>
    </>
  );
}
