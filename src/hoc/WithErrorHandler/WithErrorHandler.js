
import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux/Aux'
// import axios from 'axios'
const WithErrorhandler = (WraperComponent,axios) => {
    class NewComponent extends Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null
            }
        }

        componentWillUpdate(){
           this.requestInterceptor= axios.interceptors.request.use((req)=>{
                this.setState({error:null})
                return req
            })

           this.responseInterceptor= axios.interceptors.response.use(res=>res,(error)=>{
                this.setState({error:error})
                
            })
        }

        componentWillUnmount(){
            axios.interceptors.request.eject(this.requestInterceptor )
            axios.interceptors.response.eject(this.responseInterceptor)
        }
        errorHandler=()=>{
            this.setState({error:null})
        }
        render() {
            return (
                <Aux>
                    <Modal show={true}
                    show={this.state.error} 
                    closeModal={this.errorHandler}
                    >
                  {this.state.error?this.state.error.message:null}
                  
                    </Modal>
                    <WraperComponent {...this.props} />
                </Aux>
            )
        }
    }
    return NewComponent
}

export default WithErrorhandler