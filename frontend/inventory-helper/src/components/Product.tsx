import {
  Alert,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import SellIcon from "@mui/icons-material/Sell";
import { green } from "@mui/material/colors";

function Product() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [productObject, setProductObject]: any = useState({});
  const [canDelete, setCanDelete] = useState(true);
  useEffect(() => {
    axios.get(`http://localhost:3001/products/byId/${id}`).then((response) => {
      setProductObject(response.data);
    });
  }, []);

  const handleEditOnClick = () => {
    if (productObject.verified) {
      if (confirm("This is a verified entry. Do you want to edit?")) {
        navigate("/editProduct", { state: { productObject } });
      }
    } else {
      navigate("/editProduct", { state: { productObject } });
    }
  };

  const handleDeleteClick = () => {
    const passwordToDelete = prompt("Enter Password to delete");
    if (passwordToDelete === "1998") {
      console.log("Deleting...");
      axios.delete(
        `http://localhost:3001/products/delete/${productObject.sku}`
      );
      console.log("Deleted");
      navigate("/");
      setCanDelete(true);
    } else {
      setCanDelete(false);
    }
  };

  const handleInboundClick = () => {
    navigate("/inbound", { state: { productObject } });
  };

  const handleSalesClick = () => {
    navigate("/sales", { state: { productObject } });
  };
  return (
    <Container>
      {!canDelete && (
        <Alert variant="filled" severity="error">
          Wrong Password.. Cannot Delete
        </Alert>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SKU</TableCell>
              <TableCell align="right">{productObject.sku}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Brand</TableCell>
              <TableCell align="right">{productObject.brand}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Item Name</TableCell>
              <TableCell align="right">{productObject.itemName}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Strength</TableCell>
              <TableCell align="right">{productObject.strength}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Shade</TableCell>
              <TableCell align="right">{productObject.shade}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Quantity</TableCell>
              <TableCell align="right">{productObject.quantity}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell align="right">{productObject.location}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Size</TableCell>
              <TableCell align="right">
                {productObject.sizeOz} oz. / {productObject.sizeMl} ml
              </TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">{productObject.category}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">{productObject.type}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>UPC</TableCell>
              <TableCell align="right">{productObject.upc}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Batch</TableCell>
              <TableCell align="right">{productObject.batch}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
            <TableRow>
              <TableCell>Condition</TableCell>
              <TableCell align="right">{productObject.condition}</TableCell>
              {/* <TableCell>
                <Button>Edit</Button>
              </TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody></TableBody>
        </Table>
      </TableContainer>
      <Box display="flex" alignItems="center">
        <Grid container spacing={0} justifyContent="center">
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
              }}
            >
              <Button
                variant="contained"
                color="success"
                startIcon={<EditIcon />}
                onClick={handleEditOnClick}
              >
                Edit
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
              }}
            >
              <Button
                variant="contained"
                startIcon={<SellIcon />}
                onClick={handleSalesClick}
              >
                Sales
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                startIcon={<WarehouseIcon />}
                onClick={handleInboundClick}
              >
                Inbound
              </Button>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                p: 1,
                m: 1,
              }}
            >
              <Button
                variant="contained"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={handleDeleteClick}
              >
                Delete
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Product;
