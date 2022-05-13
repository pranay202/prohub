import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { Box, makeStyles, FormControl, TextareaAutosize, Button, InputLabel, TextField, InputBase } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
// import { categoriesData } from '../../constants/data';

// Fetching service from backend
import { createPost, uploadFile } from '../../service/api';
// import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 100px',
        [theme.breakpoints.down('md')]: {
            padding:0
        }
    },
    image: {
        width: '100%',
        height: '50vh',
        objectFit: 'cover'
    },
    addIcon: {
        cursor: 'pointer',
    },
    title: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25,
        // paddingRight: '850px',
        // width: '100%',
        border:"none",
        outline: 'none',
    },
    textarea: {
        width: '100%',
        // border: 'none',
        marginTop: 20,
        padding: '10px',
        paddingLeft: '20px',
        border: '2px solid blueGrey',
        borderRadius: 4,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    technology:{
        margin: '0px 0px',
        marginTop: 50,
        padding: '0px 5px',
        display: 'flex',
        flex: 1,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    select:{
        cursor: 'pointer',
        width: '33%',
        border: 'none',
        marginLeft: 0,
        marginTop: 10,
        paddingTop: 20,
        // paddingLeft: '20px',
        // border: '2px solid blueGrey',

    },

    chip: {
        width:"100%"
    },

    group: {

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:20,
        marginTop:20    
    },
    error_msg: {
        width: 370,
        padding: 15,
        margin: "5px 0px",
        fontSize: 14,
        backgroundColor: "#f34646",
        color: "#fff",
        borderRadius: 5,
        textAlign: "center"
    }
}));

const initialValues = {
    title: '',
    technology: '',
    description: '',
    picture: '',
    creators: '',
    categories: 'All',
    createdDate: new Date()
}

//const ITEM_HEIGHT = 48;
//const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };


// function getStyles(category, CategoryName, theme) {
//   return {
//     fontWeight:
//       CategoryName.indexOf(category) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }


const CreateView = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();

    const [post, setPost] = useState(initialValues);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    
    // const [branch, setBranch] = useState('');

    var currentYear = new Date().getFullYear();
    
    // const handleSelect = (event) => {
    //   setBranch(event.target.value);
    // }

    // const theme = useTheme();
    // const [CategoryName, setCategoryName] = React.useState([]);

    // const handleSelectCategory = (event) => {
    //     const {
    //     target: { value },
    //     } = event;
    //     setCategoryName(
    //     // On autofill we get a stringified value.
    //     typeof value === 'string' ? value.split(',') : value,
    //     );
    // }
    // const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const url = post.picture ? post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    
    useEffect(() => {
        const getImage = async () => {
            console.log(file);
            if(file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const image = await uploadFile(data);
                post.picture = image.data;
                setImage(post.picture);
                console.log(post.picture);
            }
        }
        getImage();
        post.categories = location.search?.split('=')[1] || 'All'
        console.log(post.picture);
        console.log(file);
    },[file])
    
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const savePost = async() => {
        try{
            await createPost(post);
            navigate("/projects/");
        } catch(error){
            if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
        }
    }
    
    return (
        <Box className={classes.container}>
            <img 
            src= {url} 
            alt="post" 
            className={classes.image}
            />

            <FormControl>
            <div className={classes.title}>
                <label htmlFor="fileInput">
                    <AddCircle className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e)=>setFile(e.target.files[0])}
                />
                <InputBase 
                onChange={(e)=>handleChange(e)}
                name='title' 
                placeholder="Title"
                className={classes.textfield} 
                />
                
                {error && <div className={classes.error_msg}>{error}</div>}
                <Button onClick={() => savePost()} variant="contained" style={{ position: "relative" }}color="primary">Publish</Button>
            </div>
        </FormControl>

            <TextareaAutosize 
            onChange={(e)=>handleChange(e)}
            minRows={2}
            name='technology' 
            placeholder="Technologies Used" 
            className={classes.textarea}   
            />

            <div className={classes.group}>
            <div>                
            <InputLabel id="category" >Categories</InputLabel>
                {/* <Select
                labelId="category"
                id="categories"
                inputlableprops={{
                    shrink: true,
                }}
                className={classes.chip}
                style={{marginTop: 5}}
                multiple
                value={CategoryName}
                placeholder="Please select a category"
                defaultValue={categoriesData[0].selected}
                onChange={handleSelectCategory}
                input={<OutlinedInput id="categories" label="Categories" />}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                        <Chip key={value} className={classes.chip} label={value} defaultValue={categoriesData[0].selected}/>
                    ))}
                    </Box>
                )}
                MenuProps={MenuProps}
                >
                {categoriesData.map((category) => (
                    <MenuItem
                    key={category}
                    value={category}
                    defaultValue={categoriesData[0].selected}
                    style={getStyles(category, CategoryName, theme)}
                    >
                        <Checkbox checked={CategoryName.indexOf(category) > -1} />
                        <ListItemText primary={category} />
                    </MenuItem>
                ))}
                </Select> */}

                <TextField
                labelid="category"
                // id=""
                name="categories"
                value={post.categories}
                // defaultValue="Latest"
                style={{width:"100%"}}  
                // label="branch"
                inputlableprops={{
                    shrink: true,
                }}
                className={classes.select}
                onChange={(e)=>handleChange(e)}
                >
                </TextField>
                </div>

            
            <div>                
            <InputLabel id="mini" >Project Type</InputLabel>
            <TextField
                labelid="mini"
                // id=""
                name="mini"
                value={post.mini}
                // defaultValue="Mini"
                style={{width:"100%"}}  
                inputlableprops={{
                    shrink: true,
                }}
                className={classes.select}
                onChange={(e)=>handleChange(e)}
            >
            </TextField>
            </div>

            <div>                
            <InputLabel id="branch" >Branch</InputLabel>
            <TextField
                labelid="branch"
                // id=""
                name="branch"
                value={post.branch}
                // defaultValue="CSE"
                style={{width:"100%"}}  
                // label="branch"
                inputlableprops={{
                    shrink: true,
                }}
                className={classes.select}
                onChange={(e)=>handleChange(e)}
            >
            </TextField>
            </div>

            <div>                
            <InputLabel id="year">Year</InputLabel>
            <TextField
                labelid="year"
                // label="Year"
                type="number"
                inputlableprops={{
                    shrink: true,
                }}
                defaultValue={currentYear}
                value={post.year}
                name="year"
                className={classes.select}
                onChange={(e)=>handleChange(e)}
                style={{width:"33%"}}
            />
            </div>
            </div>

            <TextareaAutosize 
            onChange={(e)=>handleChange(e)}
            minRows={2}
            name='creators' 
            placeholder="Creators" 
            className={classes.textarea}   
            />

            <TextareaAutosize
                onChange={(e)=>handleChange(e)}
                minRows={10}
                placeholder="Problem Statement and Solution..."
                className={classes.textarea}
                name='description' 
                value={post.description}
            />
            
            <div className={classes.group}>
            <TextareaAutosize
                onChange={(e)=>handleChange(e)}
                minRows={1}
                placeholder="Github Link"
                className={classes.textarea}
                name='code' 
                value={post.code}
            />

            <TextareaAutosize
                onChange={(e)=>handleChange(e)}
                minRows={1}
                placeholder="Demo Link"
                className={classes.textarea}
                name='deployment' 
                value={post.deployment}
            />

            {/* <Link href="#" underline="hover"
                onChange={(e)=>handleChange(e)}
                placeholder="Github Link"
                className={classes.textarea}
                name='code' 
                value={post.code}
                >
            </Link>

            <Link href="#" underline="hover"
                onChange={(e)=>handleChange(e)}
                placeholder="Demo Link"
                className={classes.textarea}
                name='deployment' 
                value={post.deployment}
            /> */}

            </div>
        </Box>
    )};

export default CreateView;