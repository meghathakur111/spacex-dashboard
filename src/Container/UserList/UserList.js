import React, { Component } from 'react';
import { Table, Button, Modal, Input } from 'antd';
import './UserList.css';
import axios from 'axios';
import Header from './../../Components/Header/Header';

export class UserList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            visible: false,
            addUsername: '',
            addPassword: ''
        };
    }

    componentDidMount() {
        axios.get(`https://my-json-server.typicode.com/meghathakur111/users-mock-data/users`)
            .then(res => {
                const usersList = res.data;
                this.setState({ users: usersList });
            })
    }

    handleRemove = (removeEmail, index) => {
        let { users } = this.state;
        let updatedUsers = [];

        users.forEach((eachUser, i) => {
            if (removeEmail !== eachUser.username) {
                updatedUsers.push(eachUser);
            }
        })
        this.setState({ users: updatedUsers });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addUser = (addUsername, addPassword) => {
        const { users } = this.state;
        this.setState({
            users: [
                ...users,
                {
                    username: addUsername,
                    password: addPassword,
                    role: 'user'
                }]
        })
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        const { addUsername, addPassword } = this.state;
        this.addUser(addUsername, addPassword);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };


    render() {
        const columns = [
            {
                title: 'Username',
                dataIndex: 'username',

            },
            {
                title: 'Password',
                dataIndex: 'password',


            },
            {
                title: 'Role',
                dataIndex: 'role',


            },
            {
                title: 'Action',
                dataIndex: 'button',

                render: (text, record) => record.role !== 'admin' ? <div className="add_btn_structure_1"><Button onClick={() => this.handleRemove(record.username)}>remove</Button></div> : <a>--</a>
            },
        ];

        return (
            <>
                <Header />

                <div className="add_btn_structure">
                    <Button onClick={this.showModal}>+ Add User</Button>
                </div>
                <Modal
                    title="Add New User"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div className="floating floating_modal_structure">
                        <Input
                            id="username"
                            name="addUsername"
                            value={this.state.addUsername}
                            onChange={this.handleChange}
                            className="floating__input"

                        />
                        <label
                            className="floating__label user_list"
                            data-content="Username"
                        ></label>
                    </div>

                    <div className="floating">
                        <Input
                            id="password"
                            name="addPassword"
                            className="floating__input"
                            value={this.state.addPassword}
                            onChange={this.handleChange}

                        />
                        <label
                            className="floating__label user_list"
                            data-content="Password"
                        ></label>
                    </div>

                </Modal>
                <div className="table_structure">
                    <Table columns={columns} dataSource={this.state.users} size="large" />
                </div>

            </>
        )
    }
}

export default UserList;
