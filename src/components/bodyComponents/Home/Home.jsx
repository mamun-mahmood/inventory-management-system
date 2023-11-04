import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import UilReceipt from "@iconscout/react-unicons/icons/uil-receipt";
import UilBox from "@iconscout/react-unicons/icons/uil-box";
import UilTruck from "@iconscout/react-unicons/icons/uil-truck";
import UilCheckCircle from "@iconscout/react-unicons/icons/uil-check-circle";
import AllPurchase from "./AllPurchase";
const Home = ({ data: allRows }) => {
  const cardComponent = [
    {
      icon: <UilBox size={60} color={"#F6F4EB"} />,
      title: "Picked",
      subTitle: "1256",
      mx: 3,
      my: 0,
    },
    {
      icon: <UilTruck size={60} color={"#F6F4EB"} />,
      title: "Shipped",
      subTitle: "12",
      mx: 5,
      my: 0,
    },
    {
      icon: <UilCheckCircle size={60} color={"#F6F4EB"} />,
      title: "Delivered",
      subTitle: "15",
      mx: 5,
      my: 0,
    },
    {
      icon: <UilReceipt size={60} color={"#F6F4EB"} />,
      title: "Invoice",
      subTitle: "07",
      mx: 3,
      my: 0,
    },
  ];
  const [page, setPage] = useState({
    from: 0,
    to: 10,
  });
  return (
    <Box
      sx={{
        margin: 0,
      }}
    >
      {/* <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginX: 3,
          borderRadius: 2,
          padding: 0,
        }}
      >
        {cardComponent.map((card, index) => (
          <Grid item md={3} key={index}>
            <InfoCard card={card} />
          </Grid>
        ))}
      </Grid> */}
      <Grid container>
        <Grid item md={12}>
          <AllPurchase data={allRows?.slice(page.from, page.to)} />
          {allRows && (
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ mx: 3, my: 3 }}
                onClick={() =>
                  setPage({ from: page.from - 10, to: page.to - 10 })
                }
                // disabled={page.from < 10}
                disabled
              >
                {"<"}Less
              </Button>
              <Button
                disabled
                // disabled={page.to >= allRows.length}
                variant="contained"
                color="primary"
                sx={{ mx: 3, my: 3 }}
                onClick={() =>
                  setPage({ from: page.from + 10, to: page.to + 10 })
                }
              >
                More{">"}
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Home;
