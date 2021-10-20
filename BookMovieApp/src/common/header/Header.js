import React, { Component } from "react";
import "../header/Header.css";
import logo from "/Users/Dark/Desktop/movieapp-master/BookMovieApp/src/assets/logo.svg";

// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
// import SwipeableViews from 'react-swipeable-views';
import Button from "@material-ui/core/Button";
import Tabs from '@material-ui/core/Tabs';
import Tab from "../../common/header/Tab"
import Modal from 'react-modal';
import PropTypes from 'prop-types';

;
// import Box from "@material-ui/core/Box";




// class Header extends Component {
//     state = {
//         open: false,
//         value: 0,
//     };

//     handleClickOpen = () => {
//         this.setState({
//             open: true,
//         });
//     };

//     handleClose = () => {
//         this.setState({ open: false });
//     };
//     handleChange = (event, value) => {
//         this.setState({ value });
//       };
//     render() {


//         return (
//             <div>

//                 <section id="header">
//                     <div className="container-header ">
//                         <div className="logo ">
//                             <img className="movie-header-logo imageRotateHorizontal" src={logo} alt="" />

//                         </div>
//                         <div className="header-button-area">
//                             <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
//                                 Open dialog
//                             </Button>
//                             <Dialog
//                                 onClose={this.handleClose}
//                                 aria-labelledby="customized-dialog-title"
//                                 open={this.state.open}
//                             >
//                                 <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>

//                                 </DialogTitle>
//                                 <DialogContent>


//                                 </DialogContent>
//                                 <DialogActions>
//                                     <Button onClick={this.handleClose} color="primary">
//                                         Save changes
//                                     </Button>
//                                 </DialogActions>
//                             </Dialog>
//                         </div>


//                     </div>
//                 </section>

//             </div>

//         )
//     }
// }

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const Header = function ({ children, dir }) {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>

            <section id="header">
                <div className="container-header ">
                    <div className="logo ">
                        <img className="movie-header-logo imageRotateHorizontal" src={logo} alt="" />

                    </div>
                    <div className="header-button-area">
                        
                        <Button 
                        variant="contained"
                        color="primary"
                        onClick={openModal}
                        >Book Now</Button>
                        
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                                <div>
                                    <Tab/>
                                </div>
                            </h2>
                            <Button
                            variant="contained"
                            color="default"
                            onClick={closeModal}>close</Button>
                            
                        </Modal>
                    </div>


                </div>
            </section>

        </div>

    )
}
Header.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};
export default Header;