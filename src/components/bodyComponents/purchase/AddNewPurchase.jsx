import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
function NewTimberPurchasePage() {
  const [purchaseData, setPurchaseData] = useState({
    date: "",
    supplier: "",
    landing: "",
    label: "",
    logCode: "",
    diameter: "",
    averageDiameter: "",
    length: "",
    cbm: "",
    remark: "",
    statusLocation: "",
    shipmentNumber: "",
    buyingPrice: "",
    totalPaid: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPurchaseData({ ...purchaseData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/add-new-purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data?.message);
        if (false)
          setPurchaseData({
            date: "",
            supplier: "",
            landing: "",
            label: "",
            logCode: "",
            diameter: "",
            averageDiameter: "",
            length: "",
            cbm: "",
            remark: "",
            statusLocation: "",
            shipmentNumber: "",
            buyingPrice: "",
            totalPaid: "",
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <h1>Add New Timber Purchase</h1>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={purchaseData.date}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Supplier"
              name="supplier"
              value={purchaseData.supplier}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Landing"
              name="landing"
              value={purchaseData.landing}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Label"
              name="label"
              value={purchaseData.label}
              onChange={handleInputChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Log Code"
              name="logCode"
              value={purchaseData.logCode}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Diameter"
              name="diameter"
              value={purchaseData.diameter}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Average Diameter"
              name="averageDiameter"
              value={purchaseData.averageDiameter}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Length (m)"
              name="length"
              value={purchaseData.length}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="CBM (M3)"
              name="cbm"
              value={purchaseData.cbm}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Remark"
              name="remark"
              value={purchaseData.remark}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Status / Location"
              name="statusLocation"
              value={purchaseData.statusLocation}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Shipment #"
              name="shipmentNumber"
              value={purchaseData.shipmentNumber}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Buying Price"
              name="buyingPrice"
              type="number"
              value={purchaseData.buyingPrice}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Total Paid"
              name="totalPaid"
              type="number"
              value={purchaseData.totalPaid}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button disabled type="submit" variant="contained" color="primary">
              Add Purchase
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default NewTimberPurchasePage;
