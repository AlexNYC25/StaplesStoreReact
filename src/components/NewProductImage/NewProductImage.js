import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Input from '@material-ui/core/Input'

import imageCompression from 'browser-image-compression';



class NewProductImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {message:'', new_id:null, img_data:null, base64:null, img:null}

        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        if(event.target.name === 'product-id'){
            this.setState({
                new_id: event.target.value
            })
        }
    }

    async handleImageUpload(event){
        this.setState({img: event.target.files[0]})
        let file = event.target.files[0];

        const options = {
            maxSizeMb: 0.05,
            maxWidthOrHeight: 1920,
            useWebWorker: true
        }

        try{
            const compressedFile = await imageCompression(file, options);
            console.log(compressedFile)
            let reader = new FileReader();
            reader.readAsDataURL(compressedFile);
            reader.onloadend = () => {
                this.setState({
                    img_data: file,
                    base64: reader.result,
                    fileName: file.name
                })
            }

        }
        catch (error){
            console.log(error);
        }

        
    }

    handleSubmit(event){
        event.preventDefault();
        let returnData =  null;

        let tempData = {
            "base64String" : this.state.base64,
            "new_id" : this.state.new_id,
            "fileName": this.state.originalName
        }


        let requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tempData)
        }

        console.log(requestOptions)

        fetch('https://staplesbacendapi.herokuapp.com/products/images', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({message: data.message}))
        

        if(returnData != null){
            this.setState({message: returnData})
        }

        this.setState({ new_id:null, img_data:null, base64:null, img:null })
    }

    render(){
        return (
            <div className='new-data'>
                <form  className='data-options container' enctype="multipart/form-data">
                    <h2>Add an image to a product</h2>
                    <div className='row'>
                        <TextField
                            required
                            name='product-id'
                            label='Product ID'
                            type='number'
                            variant='outlined'
                            className='col-4'

                            value={this.state.new_id}
                            onChange={this.handleChange}
                        />
                            <Input
                                required
                                name='productImage'
                                color='primary' 
                                type='file' 
                                id='fileSelector'
                                enctype="multipart/form-data"
                                

                                value={this.state.img}
                                onChange={this.handleImageUpload}
                            />
                        <Button
                            variant='contained'
                            color='primary'
                            size='medium'
                            className='col-2 ml-0'
                            type='submit'
                            value='Submit'

                            onClick={this.handleSubmit}

                        >
                            Submit Location
                        </Button>
                    </div>

                    

                </form>

                    <div>
                        {this.state.message}
                    </div>

            </div>



        )
    }


}

export default NewProductImage