import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import { observer, inject } from 'mobx-react';

@inject('us')
@observer
class BuyTransformer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TransformerName: "",
            transformerPrice:""
        };
    }
    render(){
        return (
            <div className={"buyTransformer"}>
                <Table responsive striped bordered hover>
                    <thead>
                        <tr className={"usersTable"}>
                            <th scope="col">Transformer Name</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            <th scope="col">Seller-id</th>
                            <th scope="col">Seller-Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.selected}
                    </tbody>
                </Table>
                
            </div>
        )
    }
}

export default BuyTransformer
