import React from "react"; 
import { withStyles } from "@material-ui/styles"; 
import Stepper from '@material-ui/core/Stepper';

import { StepIcon } from '@material-ui/core/Stepper'; 
const styles = theme => ({ 
  root: {
     color: "blue", 
     "&$active": {

       color: "green" 
      }, 
      "&$completed": 
      { color: "red" } },
       active: {},
        completed: {} });
         function Demo(props) {
         return (
            <div> 
              <StepIcon icon="1" classes={props.classes} />
             <StepIcon icon="2" active classes={props.classes} />
              <StepIcon icon="3" completed classes={props.classes} />
               </div> ); } 
      export default withStyles(styles)(Demo)