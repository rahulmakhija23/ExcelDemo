import React,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import "./App.css"
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';




const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});



function App(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}


export default function BasicTable() {
  const classes = useStyles();
  const [header,setHeader]=useState([" "]);
  const[rowdata,setRowdata]=useState([{res:"",id:"",count:0}])
  let count=0;



console.log(header)
  for(let i=0;i<=14;i++)
  {
    // if(i!==0){
    //   header.push(dt++)
    // }
    const data={
       res:`A${count}`,
       id:`A${count}${i}`,
       count:count++
    }
    if(i<100)header.push(data);
    
    rowdata.push(i);
  //  count++;
  }
console.log(header)
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.slice(0,header.length-1).map(data=><TableCell>{data.res}</TableCell>)}
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rowdata.map(rowda=>
          <>
          
          <TableRow className="aps">
            {
              
            header.slice(1,2).map(data=>
            
            <TableCell className="tabcell">{data.count++}</TableCell>)}
          {header.slice(2,rowdata.length).map(data=>
       <TableCell className="tabcell" >   <TextField id="outlined-basic" placeholder={data.count++-1+(data.res)} variant="outlined" onChange={(e)=>{console.log(data.count+(data.res))}} /></TableCell>)}
          </TableRow>
          </>
          )}
        
         

<div>
    
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
  
    </div>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
