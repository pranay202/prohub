import React, { useState } from 'react';
import { Button,makeStyles, Table,TableRow, TableBody, TableCell, TableHead, Container } from '@material-ui/core';
import {categoriesData, yearsData, branchesData, typeData} from "../../constants/data.js"
import { Link, NavLink } from "react-router-dom";
import Sticky from "wil-react-sticky";
// import { NavLink } from 'react-bootstrap';
// import Posts from './Posts.jsx';

//icons
import {FiChevronDown as Down} from "react-icons/fi";

const useStyles = makeStyles({
    create: {
        margin:20,
        background: '#0dcaf0',
        color: 'white',
        fontWeight: 'bold',
        width: '80%',
        '&:hover': {
            backgroundColor: 'rgb(7, 1, 77, 0.8)'
        }
    },
    table: {
        border: '1px solid rgba(224, 160, 221, 1)',
        marginTop: 30
    },
    head: {
        backgroundColor: 'rgba(224, 1, 221, 1)',
        color: 'white',
        fontSize: 17
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        "&:hover": {
            fontWeight: 'bold',
        },
        "&.active": {
            fontWeight: 'semibold',
        },
    },
    toggler: {
        cursor: "pointer",
        fontWeight: 'bold',
        // backgroundColor: '#8dcff4'
        // backgroundColor: 'rgb(7, 1, 77, 0.8)',
        color: '#26282B',
        opacity: 0.8,
        "&:hover": {
            color: 'black',
        },

    }
});

const Categories = () => {
    const classes = useStyles();
    const user = localStorage.getItem("token");

    const [isOpened, setIsOpened] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [opened, setOpened] = useState(false);

    function toggle() {
    setIsOpened(wasOpened => !wasOpened);
    }
    function toggle2() {
    setIsOpen(wasOpened => !wasOpened);
    }
    function toggle3() {
    setOpened(wasOpened => !wasOpened);
    }

    // const [data, setData] = useState([Posts]);
    // const filterResult = (catItem) => {
    //     const result = Posts.filter((post) => {
    //         return post.categories === catItem;
    //     });
    //     setData(result);
    // }
    return (
        <>
        <Container>
        <Sticky
            offsetTop={60}
            stickyEnableRange={[768, Infinity]}
        >
            {user && <Link to={`/projects/create`} className={ classes.link }><Button varient="outlined" className={ classes.create }>New Project</Button></Link> }
            {/* <Link to={`/projects/create`} className={ classes.link }><Button varient="outlined" className={ classes.create }>New Project</Button></Link> */}

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell size="small" className={classes.head}>
                             Categories
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell colSpan={2}>
                            <NavLink to={'/projects/'} className={classes.link}>
                                All Projects
                            </NavLink>
                        </TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                        {categoriesData.map(categories => (
                    <TableRow>
                            <TableCell colSpan={2}>
                                <NavLink to={`/projects/?categories=${categories}`}  className={classes.link}>
                                    {categories}
                                </NavLink>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            
                    </TableRow>
                        ))}
                </TableBody>
                
                <TableBody>
                <TableRow> <TableCell colSpan={2}  className={classes.toggler} onClick={toggle3}>Project Type <span className={classes.icon}><Down/></span> </TableCell></TableRow>
                <TableRow>
                { opened &&
                    typeData.map(mini => (
                            <TableCell>
                                <NavLink to={`/projects/?mini=${mini}`}  className={classes.link}>
                                    {mini}
                                </NavLink>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            

                      
                    ))
                }
                        </TableRow>
                </TableBody>

                <TableBody>
                <TableRow> <TableCell colSpan={2}  className={classes.toggler} onClick={toggle}>Year <span className={classes.icon}><Down/></span> </TableCell></TableRow>
                { isOpened &&
                    yearsData.map(year => (
                        <TableRow>
                            <TableCell>
                                <NavLink to={`/projects/?year=${year}`}  className={classes.link}>
                                    {year}
                                </NavLink>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            
                        </TableRow>

                      
                    ))
                }
                </TableBody>
                <TableBody>
                <TableRow> <TableCell colSpan={2}  className={classes.toggler} onClick={toggle2}>Branch <span className={classes.icon}><Down/></span> </TableCell></TableRow>
                { isOpen && (
                    branchesData.map(branch => (
                        <TableRow>
                            <TableCell>
                                <NavLink to={`/projects/?branch=${branch}`}  className={classes.link}>
                                    {branch}
                                </NavLink>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            
                        </TableRow>

                      
                    ))
                )}
                </TableBody>
            </Table>  
            </Sticky>     
        </Container>
        </>
    )
}

export default Categories;
