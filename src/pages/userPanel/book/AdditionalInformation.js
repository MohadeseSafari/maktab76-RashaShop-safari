import * as React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

function AdditionalInformation() {
  return (
    <Paper
      elevation={0}
      sx={{ border: "1px solid #ECECEC", borderRadius: "10px" }}
    >
      <TableContainer
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 5,
        }}
      >
        <Table sx={{ maxWidth: 450, border: " 1px solid #E4E4E5" }}>
          <TableBody>
            <TableRow>
              <TableCell align="left">وزن</TableCell>
              <TableCell align="left" sx={{ border: " 1px solid #E4E4E5" }}>
                1.2 گرم{" "}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left">نوع جلد</TableCell>
              <TableCell align="left" sx={{ border: " 1px solid #E4E4E5" }}>
                رقعی
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="left" sx={{ border: " 1px solid #E4E4E5" }}>
                گروه سنی
              </TableCell>
              <TableCell align="left">بزرگسال، همه سنین</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AdditionalInformation;
