import React from 'react';
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Loading from "../Loading";

const useStyles = makeStyles({
    component: {
        background: '#000',
        backdrop:'blur(5px)',
        color: '#ffff',
        display: 'flex',
        // justifyContent: 'space-between',
        flexDirection:"row",
        opacity: 0.9
    },

    link: {
        textDecoration : 'none',
        color: 'inherit',
        "&.active": {
            background:'#3E2C41',
            borderRadius: '8px',
            padding:"5px 10px"
        },
    },

    container: {
        // display: 'flex',
        // justifyContent: 'flex-start',
        width: "30%",
        '& > *': {
            padding: "0 20px",
            cursor: 'pointer',
        }
    },
    search: {
        width: "45%",
        // display: 'flex',
        justifyContent:'center',       
    },
    searchInput: {
        padding: 10 , 
        borderRadius:10       
    },
    white_btn: {
        border: "none",
        outline: "none",
        padding: '10px 0',
        backgroundColor: 'white',
        borderRadius: 20,
        width: 90,
        fontWeight: 'bold',
        fontSize: 14,
        cursor: 'pointer',
        color: 'crimson'
    },
    logo: {
        marginLeft: 10,
        paddingLeft: 10,
        marginTop: 5,
    },
    first: {
        color: "#fff",
        fontSize: 35,
        fontWeight:500
    },
    span: {
        color: "crimson",
        transition: "all 0.3s ease",
        fontWeight: 800,
        // color: "white",   
    }
});

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = async () => {
		localStorage.removeItem("token");
		window.location.reload();
        await navigate("/login");
	};
    const handleLogin = () => {
        window.location("/login");
    }
    const user = localStorage.getItem("token");
    const classes = useStyles();
    return (
        <>
        
        <AppBar className={classes.component}>
            <div className={classes.logo}>
                <a className={classes.first} href="/home">Pro<span className={classes.span}>Hub</span></a>
            </div>
            <Toolbar className={classes.container}>
                {Loading && <NavLink to={'/'} className={classes.link}><Typography>Home</Typography></NavLink>}
                {Loading &&  <NavLink to={'/projects'} className={classes.link}><Typography>Projects</Typography></NavLink>}
                <NavLink to={'/about'} className={classes.link}><Typography>About</Typography></NavLink>
                <NavLink to={'/contact'} className={classes.link}><Typography>Contact</Typography></NavLink>
            </Toolbar>
{/*             
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper> */}
            <Toolbar className = {classes.search}>
                    {/* <input
                    placeholder="Search…"
                    className={classes.searchInput}
                    inputprops={{ 'aria-label': 'search' }}
                    // onChange={(e) => setSearch(e.target.value)}
                    /> */}
            </Toolbar>

            <Toolbar className = {classes.logout}>
                {user ? <Link to={"/login"}>
                            <button className={classes.white_btn} onClick={handleLogout}>
					            Logout
				            </button>
                        </Link>
                      : <Link to={'/login'}><button className={classes.white_btn} onClick={handleLogin}>Login</button></Link>
                }
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;