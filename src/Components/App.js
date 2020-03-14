import React, { Component } from "react";
import "./../App.css";
import Header from "./Header";
import Search from "./Search";
import TableData from "./TableData";
import AddUser from "./AddUser";
import DataUser from "./data.json";

const uuidv1 = require("uuid/v1");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    };
  }
  componentWillMount() {
    if (localStorage.getItem("userData") === null) {
      localStorage.setItem("userData", JSON.stringify(DataUser));
    } else {
      var temp = JSON.parse(localStorage.getItem("userData"));
      this.setState({
        data: temp
      });
    }
  }
  getContentSearch = data => {
    this.setState({
      searchText: data
    });
  };
  getNewUserData = (name, tel, permission) => {
    var item = {};
    item.id = uuidv1();
    item.tel = tel;
    item.name = name;
    item.permission = permission;
    var items = this.state.data;

    items.push(item);
    this.setState({
      data: items
    });
    localStorage.setItem("userData", JSON.stringify(items));
  };
  changeStatus = () => {
    this.setState({
      displayForm: !this.state.displayForm
    });
  };
  editUser = user => {
    this.setState({
      userEditObject: user
    });
    console.log(user);
  };
  changeEditUserStatus = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  };
  getUserEditInfoApp = info => {
    this.state.data.forEach((value, key) => {
      if (value.id === info.id) {
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;
      }
    });
    localStorage.setItem("userData", JSON.stringify(this.state.data));
  };
  deleteUser = idUser => {
    const tempData = this.state.data.filter(item => item.id !== idUser);
    this.setState({
      data: tempData
    });
    localStorage.setItem("userData", JSON.stringify(tempData));
  };
  render() {
    var result = [];
    this.state.data.forEach(item => {
      if (item.name.indexOf(this.state.searchText) !== -1) {
        result.push(item);
      }
    });
    return (
      <div>
        <Header />
        <div className="searchForm">
          <div className="container">
            <div className="row">
              <Search
                getUserEditInfoApp={info => this.getUserEditInfoApp(info)}
                userEditObject={this.state.userEditObject}
                contentSearchProps={data => this.getContentSearch(data)}
                connect={() => this.changeStatus()}
                displayForm={this.state.displayForm}
                editUserStatus={this.state.editUserStatus}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <TableData
                deleteUser={idUser => this.deleteUser(idUser)}
                editFun={user => this.editUser(user)}
                dataUserProps={result}
                changeEditUserStatus={() => this.changeEditUserStatus()}
              />
              <AddUser
                add={(name, tel, permission) =>
                  this.getNewUserData(name, tel, permission)
                }
                displayForm={this.state.displayForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
