npm react-chartjs-2
npm chart.js
npm @mui/x-data-grid
in header.jsx add in parent div mt-[66px] 




import React, { useState } from 'react';
import Slidebar from "../components/Slidebar";
import Header from '../components/Header';
import { Bar, Doughnut } from "react-chartjs-2";
import { UserData } from "./fakedata";
import { Chart as ChartJS } from 'chart.js/auto';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import './client.css'

function Client() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Lost",
      data: UserData.map((data) => data.userLost),
      backgroundColor: [
        "rgb(255, 119, 119)", "rgb(105, 75, 219)"
      ],
      borderColor: [
        "black"
      ],
      borderWidth: 1
    }]
  });

  // Donutdata for backgroundColor
  const [Doutdata, setDountdata] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: "Users Lost",
      data: UserData.map((data) => data.userLost),
      backgroundColor: [
        ' #5de172',
        '#3982ef',
        '#ee3cd2',
        "#ffaf38",
        "#ff495f"
      ],
      borderColor: [
        "black"
      ],
      borderWidth: 1
    }]
  });
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'DateofApplication', headerName: 'Date of Application', width: 130 ,type:'date'},
    { field: 'Applicationtype', headerName: 'Application type', width: 130 },
    {
      field: 'Duration',
      headerName: 'Duration',
      type: 'number',
      width: 100,
    },
    { field: 'Status', headerName: 'Status', width: 130 }

  ];

  const rows = [
    { id: 1, Applicationtype: 'Snow', DateofApplication: new Date('2021-07-30'), Duration: 35, Status: "Pending" },
    { id: 2, Applicationtype: 'Lannister', DateofApplication: new Date('2022-07-01'), Duration: 42, Status: "Rejected" },
    { id: 3, Applicationtype: 'Lannister', DateofApplication: new Date('2022-06-27'), Duration: 45, Status: "Approved" },
    { id: 4, Applicationtype: 'Stark', DateofApplication: new Date('2022-06-16'), Duration: 16, Status: "Approved" },
    { id: 5, Applicationtype: 'Targaryen', DateofApplication: new Date('2022-05-22'), Duration: 15, Status: "Approved" },
    { id: 6, Applicationtype: 'Melisandre', DateofApplication: new Date('2022-05-22'), Duration: 150, Status: "Approved" },
    { id: 7, Applicationtype: 'Clifford', DateofApplication: new Date('2022-05-22'), Duration: 44, Status: "Approved" },
    { id: 8, Applicationtype: 'Frances', DateofApplication: new Date('2022-05-22'), Duration: 36, Status: "Approved" },
    { id: 9, Applicationtype: 'Roxie', DateofApplication: new Date('2022-05-22'), Duration: 65, Status: "Approved" },
  ];
  
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    quickFilterValues: [''],
  });
  const paginationModel = { page: 0, pageSize: 8 };



  // color change krne kr liye  hai
  const options = {
    scales: {
      x: {
        ticks: {
          color: '#0073e6',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: '#0073e6',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          color: 'gray'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'Green',
          font: {
            weight: 'bold'
          }
        }
      }
    }
  };
  const option = {
    scales: {
      x: {
        ticks: {
          color: 'white',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          color: 'white'
        }
      },
      y: {
        ticks: {
          color: 'white',
          font: {
            weight: 'bold'
          }
        },
        grid: {
          color: 'white'
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'Green',
          font: {
            weight: 'bold'
          }
        }
      }
    },

  };

  return (
    <>
      <Slidebar />
      <div>
        <Header />
      </div>
      <div className='container mt-[100px] ml-[80px]'>
        <div className='flex'>
          <div>
            <h4 className='text-xl font-bold'>Overview</h4>
          </div>
          <div>
            <select style={{ backgroundColor: "rgb(148 163 184)" }} className='p-[5px] w-[150px] pl-[10px] rounded ml-[530px]'>
              <option value="volvo">Quarterly</option>
              <option value="saab">1</option>
              <option value="opel">2</option>
              <option value="audi">3</option>
            </select>
          </div>
          <div className='ml-[400px] text-xl font-bold'>
            Customer
          </div>
        </div>
        <div className='chart-wrapper flex w-[100%]'>
          <div className='chart-container w-[900px]' >
            <Bar data={userData} options={options} />
          </div>
          <div className='chart-container w-[400px] ml-[20px] shadow-xl'>
            <Doughnut data={Doutdata} options={option} />
          </div>
          <div className='chart-container w-[400px] ml-[20px] shadow-xl '>
            <Doughnut data={Doutdata} options={option} />
          </div>
        </div>

        <div className='flex gap-[2.75rem] mt-[80px] bg-[#eae6e6] w-[960px] py-2 rounded-full'>
          <div>
            <button style={{ border: "2px solid #152259" }} className='rounded-full px-6 py-1 ml-2'>Monthly</button>
          </div>
          <div>
            <button style={{ border: "2px solid #152259" }} className='rounded-full px-6 py-1'>Weekly</button>
          </div>
          <div>
            <select style={{ backgroundColor: "#363062", color: "white" }} className=' rounded-full px-6 py-2 '>
              <option value="volvo">Today</option>
              <option value="saab">1</option>
              <option value="opel">2</option>
              <option value="audi">3</option>
            </select>
          </div>
        </div>
        <div>
          <Paper sx={{ height: 700, width: '960px',marginTop:"10px" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              filterModel={filterModel}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[8, 10]}
              onFilterModelChange={setFilterModel}
              disableColumnSelector
              disableDensitySelector
              slots={{ toolbar: GridToolbar }}
              slotProps={{ toolbar: { showQuickFilter: true } }}

            />
          </Paper>
        </div>
      </div>
    </>
  );
}

export default Client;
