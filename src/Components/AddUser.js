import React, { Component } from "react";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      tel: "",
      permission: ""
    };
  }
  isChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
    var item = {};
    item.id = this.state.id;
    item.name = this.state.name;
    item.tel = this.state.tel;
    item.permission = this.state.permission;
  };
  checkStatus = () => {
    if (this.props.displayForm === true) {
      return (
        <div className="col">
          <form>
            <div className="card border-primary mb-3 mt-2">
              <div className="card-header">Thêm mới user</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tên User"
                    onChange={e => this.isChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="tel"
                    type="text"
                    className="form-control"
                    placeholder="SĐT"
                    onChange={e => this.isChange(e)}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="custom-select"
                    name="permission"
                    onChange={e => this.isChange(e)}
                  >
                    <option>Lựa chọn</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    value="Thêm mới"
                    type="reset"
                    className="btn btn-block btn-primary"
                    onClick={(name, tel, permission) =>
                      this.props.add(
                        this.state.name,
                        this.state.tel,
                        this.state.permission
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      );
    }
  };

  render() {
    return <div>{this.checkStatus()}</div>;
  }
}
