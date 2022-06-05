import React, { useState, useEffect }from 'react';
import { Box, makeStyles, FormControl, InputBase, TextareaAutosize, Button, TextField, InputLabel} from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { useNavigate, useParams } from 'react-router-dom';

//service
import { getPost, updatePost } from "../../service/api"

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
        flexDirection: 'row'
    },
    textfield: {
        flex: 1,
        margin: '0 30px',
        fontSize: 25
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
    description: '',
    picture: '',
    username: 'admin',
    categories: 'All',
    createdDate: new Date()
}

const UpdateView = () => {
    const classes = useStyles();
    const url = "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80";
    const navigate = useNavigate();
    const {id} = useParams();

    const [post, setPost] = useState(initialValues);

    useEffect(() => {
        const fetchData = async () => {
            let data = await getPost(id);
            console.log(data);
            setPost(data);
        }
        fetchData();
    },[])

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    const updateBlog = async () => {
        await updatePost(id, post);
        navigate(`/details/${id}`);
    }

    return (
        <Box className={classes.container}>
            <img src={url} alt="post" className={classes.image} />

            <FormControl className={classes.title}>
                <label htmlFor="fileInput">
                    <AddCircle className={classes.addIcon} fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                />
                <InputBase
                    onChange={(e)=>handleChange(e)}  
                    name='title' 
                    placeholder="Title" 
                    value= {post.title} 
                    className={classes.textfield}
                />
                <Button onClick={() => updateBlog()} variant="contained" style={{ backgroundColor: '#423458', color: 'white'}}>Update</Button>
            </FormControl>


            
            <TextareaAutosize 
            onChange={(e)=>handleChange(e)}
            minRows={2}
            name='technology' 
            placeholder="Technologies Used" 
            className={classes.textarea} 
            value= {post.technology}  
            />

            <div className={classes.group}>
            <div>                
            <InputLabel id="category" style={{maginTop: 50}}>Categories</InputLabel>
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
                labelId="category"
                // id=""
                name="categories"
                value={post.categories}
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
                defaultValue="Mini"
                style={{width:"100%"}}  
                inputlableprops={{
                    shrink: true,
                }}
                className={classes.select}
                onChange={(e)=>handleChange(e)}
            >
            </TextField>
            </div>
            
            {/* <div className={classes.group}> */}
            <div>                
            <InputLabel id="branch" >Branch</InputLabel>
            <TextField
                labelId="branch"
                // id=""
                name="branch"
                value={post.branch}
                style={{width:"100%"}}  
                // label="branch"
                inputlableprops={{
                    shrink: true,
                }}
                className={classes.select}
                onChange={(e)=>handleChange(e)}
            >
                {/* <MenuItem value={"cse"}>CSE</MenuItem>
                <MenuItem value={"it"}>IT</MenuItem>
                <MenuItem value={"etc"}>ETC</MenuItem>
                <MenuItem value={"mech"}>Mech</MenuItem>
                <MenuItem value={"electrical"}>Electrical</MenuItem> */}
            </TextField>
            </div>

            <div>                
            <InputLabel id="year">Year</InputLabel>
            <TextField
                labelId="year"
                // label="Year"
                type="number"
                inputlableprops={{
                    shrink: true,
                }}
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
            value={post.creators}  
            />

            <TextareaAutosize
                onChange={(e)=>handleChange(e)}
                minRows={5}
                placeholder="Project Description"
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
    )
};

export default UpdateView;
