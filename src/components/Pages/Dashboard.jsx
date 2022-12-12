import React from "react";
import art from "../../assets/art.jpg";
import { NavLink } from "react-router-dom";
import { AppBar, Toolbar, styled, Tab } from "@mui/material";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Header = () => {
  const myStyle = { text: "white", backgroundColor: "DodgerBlue" };
};

const Tabs = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  margin-right: 25px;
  color: white;
`;

function TableHeader(Index, name, MobileNo) {
  return { Index, name, MobileNo };
}

const Dashboard = () => {
  const [Users, setUsers] = useState([
    {
      Username: "",
      pwd: "",
      confirmpwd: "",
      mobileno: "",
    },
  ]);

  useEffect(() => {
    console.log("/getUser is in Dashboard.");
    fetch("/getUsers")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((actualData) => setUsers(actualData))
      .catch((err) => {
        console.log(
          "/geUser dta fetching failed. neeed to check the flow.  \n\n  msg from Dashboard" +
            err.msg
        );
      });
    console.log("data received from /getUser");
  });

  return (
    <div>
      <Header>
        <Toolbar>
          <Tabs to="/dashboard">Ouroboros</Tabs>
          <Tabs to="/"> Home </Tabs>
          <Tabs to="login"> Login </Tabs>
          <Tabs to="signin"> Sign-In </Tabs>
        </Toolbar>
      </Header>
      <div>
        <section>
          <TableContainer component={Paper} className=" textcenter">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Mobile No </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Users.map((row) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row.Username}</TableCell>
                    <TableCell align="right">{row.mobileno}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;