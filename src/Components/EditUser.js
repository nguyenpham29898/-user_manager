import React, { Component } from "react";

export default class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.userEditObject.id,
      name: this.props.userEditObject.name,
      tel: this.props.userEditObject.tel,
      permission: this.props.userEditObject.permission
    };
  }
  isChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  saveButton = () => {
    var info = {};
    info.id = this.state.id;
    info.name = this.state.name;
    info.tel = this.state.tel;
    info.permission = this.state.permission;
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  };
  render() {
    return (
      <div className="row">
        <div className="col">
          <form>
            <div className="card bg-warning border-primary mb-3 mt-2">
              <div className="card-header text-center">Sua thong tin user</div>
              <div className="card-body text-primary">
                <div className="form-group">
                  <input
                    onChange={e => this.isChange(e)}
                    defaultValue={this.props.userEditObject.name}
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tên User"
                  />
                </div>
                <div className="form-group">
                  <input
                    onChange={e => this.isChange(e)}
                    defaultValue={this.props.userEditObject.tel}
                    name="tel"
                    type="text"
                    className="form-control"
                    placeholder="SĐT"
                  />
                </div>
                <div className="form-group">
                  <select
                    onChange={e => this.isChange(e)}
                    defaultValue={this.props.userEditObject.permission}
                    className="custom-select"
                    name="permission"
                  >
                    <option>Lựa chọn</option>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                    <option value={3}>Normal</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    value="Luu"
                    type="button"
                    className="btn btn-block btn-danger"
                    onClick={() => this.saveButton()}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
