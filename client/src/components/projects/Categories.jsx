import React, { useState } from 'react';
import { Button,makeStyles, Table,TableRow, TableBody, TableCell, TableHead } from '@material-ui/core';
import {categoriesData, yearsData, branchesData, typeData} from "../../constants/data.js"
import { Link } from "react-router-dom";
import Posts from './Posts.jsx';


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
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
    toggler: {
        cursor: "pointer",
        backgroundColor: '#8dcff4',

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
            {user && <Link to={`/projects/create`} className={ classes.link }><Button varient="outlined" className={ classes.create }>New Project</Button></Link> }
            {/* <Link to={`/projects/create`} className={ classes.link }><Button varient="outlined" className={ classes.create }>New Project</Button></Link> */}

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Link to={'/projects/'} className={classes.link}>
                                All Projects
                            </Link>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                {
                    categoriesData.map(categories => (
                            <TableCell>
                                <Link to={`/projects/?categories=${categories}`}  className={classes.link}>
                                    {categories}
                                </Link>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            

                      
                    ))
                }
                        </TableRow>
                </TableBody>
                
                <TableBody>
                <TableRow> <TableCell colSpan={2} align="center" className={classes.toggler} onClick={toggle3}>Project Type</TableCell></TableRow>
                <TableRow>
                { opened &&
                    typeData.map(mini => (
                            <TableCell>
                                <Link to={`/projects/?mini=${mini}`}  className={classes.link}>
                                    {mini}
                                </Link>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            

                      
                    ))
                }
                        </TableRow>
                </TableBody>

                <TableBody>
                <TableRow> <TableCell colSpan={2} align="center" className={classes.toggler} onClick={toggle}>Year</TableCell></TableRow>
                { isOpened &&
                    yearsData.map(year => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/projects/?year=${year}`}  className={classes.link}>
                                    {year}
                                </Link>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            
                        </TableRow>

                      
                    ))
                }
                </TableBody>
                <TableBody>
                <TableRow> <TableCell colSpan={2} align="center" className={classes.toggler} onClick={toggle2}>Branch</TableCell></TableRow>
                { isOpen && (
                    branchesData.map(branch => (
                        <TableRow>
                            <TableCell>
                                <Link to={`/projects/?branch=${branch}`}  className={classes.link}>
                                    {branch}
                                </Link>

                                {/* <Button  onClick={() => filterResult('Software')} > Software </Button> */}

                            </TableCell>                            
                        </TableRow>

                      
                    ))
                )}
                </TableBody>
            </Table>       
        </>
    )
}

export default Categories;
