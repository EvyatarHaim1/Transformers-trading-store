import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Table from 'react-bootstrap/Table'
import MembersDetails from './MembersDetails';
import {IoIosArrowDroprightCircle, IoIosArrowDropleftCircle, IoIosMore} from "react-icons/io";


@inject('us')
@observer
 class Members extends Component {
    constructor(props){
        super(props)
        this.state=({
          text: "",
          category: "FirstName",
          indexStart: 1,
          indexEnd: 20,
          showenClients: []
        })
    } 
    
  componentDidMount= async()=>{
    this.props.us.get_all_users_from_DB()
    this.showFirstPage()

}

showFirstPage =  () => {
  this.setState({
      indexStart: 1,
      indexEnd: 20
  },function(){
  })
  let temp =  []
  for (let i = this.state.indexStart; i <= this.state.indexEnd && i < this.props.us.users.length; i++) {
      temp.push(this.props.us.users[i])
  }
  this.setState({
      showenClients: temp
  },function(){
  })
}

nextPage = () => {
  let range = this.state.indexEnd
  if (range < this.props.us.users.length) {
      if (this.props.us.users.length-range < 20) {
          this.setState({
              indexStart: this.state.indexEnd,
              indexEnd: this.state.indexEnd + (this.props.us.users.length-range)
          })
      }
      else {
          this.setState({
              indexStart: this.state.indexEnd,
              indexEnd: this.state.indexEnd + 20
          }, function () {
              let temp = []
              for (let i = this.state.indexStart;
                  i < this.state.indexEnd && i < this.props.us.users.length; i++) {
                  temp.push(this.props.us.users[i])
              }
              this.setState({
                  showenClients: temp
              })
          })
      }
  }
}
backPage = () => {
  if (this.state.indexStart === 1) {
      this.showFirstPage()
      return
  }
  let temp = []
  for (let i = this.state.indexEnd - 1; i > this.state.indexStart; i--) {
      temp.push(this.props.us.users[i])
  }

  this.setState({
      showenClients: temp,
      indexEnd: this.state.indexStart,
      indexStart: this.state.indexStart - 20 < 1 ? 1 : this.state.indexStart - 20
  }, function() {
      if (this.state.indexStart === 1) {
          this.showFirstPage()
      }
  })
}
changeCategory=(e)=>{
  console.log(e.target.value)
  this.showFirstPage()
  this.setState({
      category:e.target.value
  },function(){
      this.props.us.searchByCategory(this.state.category,this.state.text)
  })}
searchByCategory= async (e)=>{
  this.setState({text:e.target.value},async function(){
      let category=this.state.category
      await this.props.us.get_all_users_from_DB()
      this.props.us.searchByCategory(category,this.state.text)
      this.showFirstPage()
  })
  
}

    render() {
  return (
        <div className="members" key="members">
          <div className={"tableNav"}>
              <select className="selectDrop" onChange={this.changeCategory} >
                    <option> FirstName</option>
                    <option> LastName</option>
                    <option>Email</option>
                    <option>Country</option>
              </select>
              <input className='inputSearch' type="text" placeholder='Search' onChange={this.searchByCategory} />
              <span className="nav">  <IoIosArrowDropleftCircle onClick={this.backPage}/> <p>{this.state.indexStart}
                </p><IoIosMore/><p>{this.state.indexEnd}</p>
                 <IoIosArrowDroprightCircle onClick={this.nextPage}/>
              </span> 
          </div>
        <Table responsive striped bordered hover>
                    <thead>
                        <tr className={"usersTable"}>
                            <th scope="col">Picture</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">City</th>
                            <th scope="col">Country</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Acquired</th>
                            <th scope="col">Products</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.us.users.map(e => <MembersDetails  id={e.id} item={e} 
                          show={this.showFirstPage} members={this.props} />)}
                    </tbody>
                </Table>
     </div>
  )
  }
}
export default Members