import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import * as XLSX from "xlsx/xlsx.mjs";

export default function AllPurchase({ data: rows }) {
  const handleExportToExcel = () => {
    // Create a new workbook
    const wb = XLSX.utils.book_new();
    // Convert the table data to a worksheet
    const ws = XLSX.utils.json_to_sheet(rows);
    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "TimberData");

    // Generate a blob containing the workbook data
    const blob = XLSX.write(wb, { bookType: "blob", type: "buffer" }); // Change type to 'buffer'

    // Create a Blob from the Buffer
    const excelBlob = new Blob([blob], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    // Create a download link and trigger the download
    const url = URL.createObjectURL(excelBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "timber_data.xlsx";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Box
      sx={{
        margin: 3,
        bgcolor: "white",
        borderRadius: 2,
        padding: 3,
        height: "95%",
      }}
    >
      <Typography variant="h6" fontWeight={"bold"} sx={{ mx: 3 }}>
        All Purchase
      </Typography>
      {/* <Button variant="contained" color="primary" onClick={handleExportToExcel}>
        Export to Excel
      </Button> */}
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Date</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Supplier</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Landing</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Label</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Log Code</TableCell>
              <TableCell
                sx={{ fontWeight: "bolder" }}
                width={300}
                align="center"
              >
                Diameter
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  <Typography mr={5} align="center" variant="body2">
                    Top
                  </Typography>
                  <Typography ml={5} align="center" variant="body2">
                    Bottom
                  </Typography>
                </div>
                <div
                  style={{
                    width: "100%",

                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2">1</Typography>
                  <Typography variant="body2">2</Typography>

                  <Typography variant="body2">1</Typography>
                  <Typography variant="body2">2</Typography>
                </div>
              </TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>
                Average Diameter
              </TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Length(m)</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>CBM(M3)</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>
                Status/Location
              </TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Shipment#</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Buying Price</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>TotalPaid</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              return (
                <TableRow key={index} hover>
                  <TableCell>{row.ID}</TableCell>
                  <TableCell>{row.Date}</TableCell>
                  <TableCell>{row.Supplier}</TableCell>
                  <TableCell>{row.Landing}</TableCell>
                  <TableCell>{row.Label}</TableCell>
                  <TableCell>{row["Log Code"]}</TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body2">{row.Diameter.top1}</Typography>
                    <Typography variant="body2">{row.Diameter.top2}</Typography>
                    <Typography variant="body2">
                      {row.Diameter.bottom1}
                    </Typography>
                    <Typography variant="body2">
                      {row.Diameter.bottom2}
                    </Typography>
                  </TableCell>
                  <TableCell>{row["Average Diameter"]}</TableCell>
                  <TableCell>{row["Length (m)"]}</TableCell>
                  <TableCell>{row["CBM (M3)"]}</TableCell>
                  <TableCell>{row["Status / Location"]}</TableCell>
                  <TableCell>{row["Shipment#"]}</TableCell>
                  <TableCell>{row["Buying Price"]}</TableCell>
                  <TableCell>{row["Total Paid"]}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
