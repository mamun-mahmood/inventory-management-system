import { useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
const SBBAprovals = ({ data: allRows }) => {
  const [page, setPage] = useState({
    from: 0,
    to: 10,
  });
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
        SBB Approvals
      </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bolder" }}>ID</TableCell>
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
              <TableCell sx={{ fontWeight: "bolder" }}>Remark</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>CNB</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Supplier</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>Landing</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>PV#</TableCell>
              <TableCell sx={{ fontWeight: "bolder" }}>
                Inspected Date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allRows &&
              allRows.slice(page.from, page.to).map((row, index) => {
                return (
                  <TableRow key={index} hover>
                    <TableCell>{row.ID}</TableCell>
                    <TableCell>{row.Label}</TableCell>
                    <TableCell>{row["Log Code"]}</TableCell>
                    <TableCell
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body2">
                        {row.Diameter.top1}
                      </Typography>
                      <Typography variant="body2">
                        {row.Diameter.top2}
                      </Typography>
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
                    <TableCell>{row.Remark}</TableCell>
                    <TableCell>{row.CNB}</TableCell>
                    <TableCell>{row.Supplier}</TableCell>
                    <TableCell>{row["Landing"]}</TableCell>
                    <TableCell>{row["PV#"]}</TableCell>
                    <TableCell>{row["Inspected Date"]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
        {allRows && allRows.length && (
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
              // disabled={page.to = allRows.length}
              disabled
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
      </TableContainer>
    </Box>
  );
};

export default SBBAprovals;
