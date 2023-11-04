import Inter from "../public/static/fonts/Inter.ttf";
import {
  ThemeProvider,
  CssBaseline,
  createTheme,
  LinearProgress,
} from "@mui/material";
import RootComponent from "./components/RootComponent";
import RootPage from "./components/RootPage";
// import "../app.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/bodyComponents/Home/Home";
import NewTimberPurchasePage from "./components/bodyComponents/purchase/AddNewPurchase";
import ExportShipments from "./components/bodyComponents/Home/ExportShipments";
import { useEffect, useState } from "react";
import LicenseDone from "./components/bodyComponents/Home/LicenseDone";
import SBBAprovals from "./components/bodyComponents/Home/SBBAprovals";
import BalanceStock from "./components/bodyComponents/Home/BalanceStock";
const serverUrl = "http://localhost:3000";
function App() {
  const theme = createTheme({
    spacing: 4,
    palette: {
      mode: "light",

      primary: {
        main: "#573BFE",
      },
      text: {
        primary: "#202635",
        secondary: "#A0AEC0",
      },
      secondary: {
        main: "#01C0F6",
      },
      error: {
        main: "#E03137",
      },
    },

    typography: {
      fontFamily: "Inter",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Inter';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Raleway'), local('Raleway-Regular'), url(${Inter}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
    //here we customize our typographi and in the variant prop we can use out myVar value
  });
  const [exportShipmentsData, setExportShipments] = useState([]);
  const [allPurchases, setAllPurchases] = useState([]);
  const [licenseDone, setLicenseDone] = useState([]);
  const [sbbApprovals, setSbbApprovals] = useState([]);
  const [balanceStock, setBalanceStock] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchAllPurchases = async () => {
    await fetch(`${serverUrl}/get-all-purchases`)
      .then((res) => res.json())
      .then((data) => {
        setAllPurchases(data?.data);
      })
      .catch((err) => {
        console.log(err);
        return {
          message: "Error",
          success: false,
        };
      });
  };
  const fetchExportShipments = async () => {
    await fetch(`${serverUrl}/get-all-export-shipments`)
      .then((res) => res.json())
      .then((data) => {
        setExportShipments(data?.data);
      })
      .catch((err) => {
        console.log(err);
        return {
          message: "Error",
          success: false,
        };
      });
  };
  const fetchLicenseDone = async () => {
    await fetch(`${serverUrl}/get-all-license-done`)
      .then((res) => res.json())
      .then((data) => {
        setLicenseDone(data?.data);
      })
      .catch((err) => {
        console.log(err);
        return {
          message: "Error",
          success: false,
        };
      });
  };
  const fetchSbbApprovals = async () => {
    await fetch(`${serverUrl}/get-all-sbb-approvals`)
      .then((res) => res.json())
      .then((data) => {
        setSbbApprovals(data?.data);
      })
      .catch((err) => {
        console.log(err);
        return {
          message: "Error",
          success: false,
        };
      });
  };
  const fetchBalanceStock = async () => {
    await fetch(`${serverUrl}/get-all-balance-stock`)
      .then((res) => res.json())
      .then((data) => {
        setBalanceStock(data?.data);
      })
      .catch((err) => {
        console.log(err);
        return {
          message: "Error",
          success: false,
        };
      });
  };
  useEffect(() => {
    const fetchAllData = async () => {
      await fetchAllPurchases();
      await fetchExportShipments();
      await fetchLicenseDone();
      await fetchSbbApprovals();
      await fetchBalanceStock();
    };
    fetchAllData();
    setLoading(false);
  }, []);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootComponent />}>
        <Route index element={<Home data={allPurchases} />} />
        <Route
          path="/all-purchases"
          element={<Home data={allPurchases} />}
        ></Route>
        <Route path="/new-purchase" element={<NewTimberPurchasePage />}></Route>
        <Route
          path="/export-shipments"
          element={<ExportShipments data={exportShipmentsData} />}
        ></Route>
        <Route
          path="/license-done"
          element={<LicenseDone data={licenseDone} />}
        ></Route>
        <Route
          path="/sbb-approvals"
          element={<SBBAprovals data={sbbApprovals} />}
        ></Route>
        <Route
          path="/balance-stock"
          element={<BalanceStock data={balanceStock} />}
        ></Route>
      </Route>
    )
  );

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <div>
          <LinearProgress />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
