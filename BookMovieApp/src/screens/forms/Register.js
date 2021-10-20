import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';




import InputBase from '@material-ui/core/InputBase';
const styles = {
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

export default function Login(props, { addSubscriberHandler }) {

    const [addSubscriberForm, setAddSubscriberForm] = useState({
        id: 0,
        fristname: '',
        lastname: '',
        password: '',

        contactno: '',
    });
   




    const inputChangedHandler = (e) => {
        const state = addSubscriberForm;
        state[e.target.name] = e.target.value;

        setAddSubscriberForm({ ...state })

    }

    const onFormSubmitted = (e) => {
        e.preventDefault();
        addSubscriberHandler(addSubscriberForm);
        setAddSubscriberForm({ id: 0, name: '', phone: ' ' });
       

    }


    const { name, phone } = addSubscriberForm;

    const { classes } = props;

    return (
        <div className="login-register-area-container-align">

            <form noValidate autoComplete="off" onSubmit={onFormSubmitted}>


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
                            placeholder="Frist Name*"
                            name="firstname"


                            margin="normal"
                        />
                    </Grid>
                    <br />
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="standard-required"
                            placeholder="Last Name*"
                            name="lastname"

                            margin="normal"
                        />
                    </Grid><br />
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="standard-required"
                            placeholder="Email*"
                            name="email"

                            margin="normal"
                        />
                    </Grid><br />
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="standard-required"
                            placeholder="Contact No*"

                            name="contactno"
                            margin="normal"
                        />
                    </Grid><br />
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="standard-required"
                            placeholder="password*"
                            name="password"

                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            // onClick={LoginSubmit}
                            type="submit"
                        >
                            Register
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
