import React from 'react'

// image compression library for easing server load
import imageCompression from 'browser-image-compression';



class NewProductImage extends React.Component {
    constructor(props){
        super(props)
        this.state = {message:'', new_id:null, img_data:null, base64:null, img:null}

        this.handleImageUpload = this.handleImageUpload.bind(this)
        this.handleIDChange = this.handleIDChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    clearForm(){
        document.getElementById("image-form").reset();
    }

    handleIDChange(event){
        this.setState({
            new_id: event.target.value
        })
        
    }

    async handleImageUpload(event){
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
        

        // reset state values
        this.setState({ new_id:null, img_data:null, base64:null, img:null })

        // reset actual html form
        this.clearForm();
    }

    render(){
        return (
            <div className='new-data'>
                <form id="image-form"  className='data-options container' enctype="multipart/form-data">
                    <h2>Add an image to a product</h2>
                    <div className='row'>
                            <div className="form-group ">
                                <input 
                                    type="text" 
                                    className="col-lg-5 "
                                    placeholder="Product ID"

                                    onChange={this.handleIDChange}
                                ></input>

                                <input 
                                    type="file" 
                                    className="col-lg-5"
                                    onChange={this.handleImageUpload}
                                ></input>

                                <button 
                                    type="submit"
                                    className="col-lg-2 btn btn-primary"
                                    value="Submit"
                                    onClick={this.handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        
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