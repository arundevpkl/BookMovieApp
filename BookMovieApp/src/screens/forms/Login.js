import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';



import InputBase from '@material-ui/core/InputBase';
const styles =  {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  };
  
export default function Login(props) {
    
    const { classes } = props;

    return (
        <div className="login-register-area-container-align">

            <form noValidate autoComplete="off">


                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="standard-required"
                            placeholder="username*"

                            
                            margin="normal"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="standard-required"
                            placeholder="password*"

                           
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            // onClick={LoginSubmit}
                        >
                            Login
                        </Button>
                    </Grid>

                </Grid>







            </form>
        </div>
    )

}



// const currencies = [
//     {
//         value: 'USD',
//         label: '$',
//     },
//     {
//         value: 'EUR',
//         label: '€',
//     },
//     {
//         value: 'BTC',
//         label: '฿',
//     },
//     {
//         value: 'JPY',
//         label: '¥',
//     },
// ];


// class TextFields extends React.Component {
//     LoginSubmit = () => {
//         console.log('this is:');
//     }
//     state = {
//         name: 'Cat in the Hat',
//         age: '',
//         multiline: 'Controlled',
//         currency: 'EUR',
//     };

//     handleChange = name => event => {
//         this.setState({ [name]: event.target.value });
//     };


//     render() {


//         const { classes } = this.props;

//         return (
          
//         );
//     }
// }

// TextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(TextFields);
