import React, { Component } from 'react'
import { Card, Row, Col } from 'antd';
import axios from 'axios';
import './CapsulesCard.css';
import Dragon from './../../assets/images/Dragon_1.jpeg';

export class CapsulesCard extends Component {
    state = {
        capsules: []
    }

    componentDidMount() {
        axios.get(`https://api.spacexdata.com/v3/capsules`)
            .then(res => {
                const capsules = res.data;
                this.setState({ capsules });
            })
    }

    // Optimize this later!
    /* iterateEachCapsuleData = (eachCapsule) => {
        for (const key in eachCapsule) {
            if (eachCapsule.hasOwnProperty(key)) {
                return <p>{`${key.replace("_", " ").toUpperCase()} : ${eachCapsule[key]}`}</p>
            }
        }
    } */

    render() {
        const { capsules } = this.state;
        return (
            <>
                <Row gutter={16} className="card_conatiner">
                    {capsules.map((data, i) => <Col key={i} xs={24}
                        md={8}
                        lg={8}
                        sm={12} className="card_col_structure">
                        <Card title={data.type} extra={<a href="#">More</a>} style={{ width: 350 }} className="card_structure"
                            cover={<img alt="example" src={Dragon} className="Dragon_img_structure" />} >

                            <Row>
                                <Col span={12}>
                                    <p className="data_heading_structure">Details:</p> {data.details != null ? <p className="data_para_structure">{data.details}</p> : <p>--</p>}
                                </Col>
                                <Col span={12}>
                                    <p className="data_heading_structure">Capsule Id:</p> {data.capsule_id != null ? <p className="data_para_structure">{data.capsule_id}</p> : <p>--</p>}
                                </Col>

                            </Row>
                            <Row>
                                <Col span={12}>
                                    <p className="data_heading_structure">Capsule Serial:</p> {data.capsule_serial != null ? <p className="data_para_structure">{data.capsule_serial}</p> : <p>--</p>}
                                </Col>
                                <Col span={12}>
                                    <p className="data_heading_structure"> Landings: </p>{data.landings != null ? <p className="data_para_structure">{data.landings}</p> : <p>--</p>}
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <p className="data_heading_structure"> Reuse Count:</p>  {data.reuse_count != null ? <p className="data_para_structure">{data.reuse_count}</p> : <p>--</p>}
                                </Col>
                                <Col span={12}>
                                    <p className="data_heading_structure">Status:</p> {data.status != null ? <p className="data_para_structure">{data.status}</p> : <p>--</p>}
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <p className="data_heading_structure"> Original Launch: </p> {data.original_launch != null ? <p className="data_para_structure">{data.original_launch}</p> : <p>--</p>}
                                </Col>
                            </Row>


                            {(data && data.missions && data.missions.length > 0) ?
                                (<Row>
                                    <Col span={12}>
                                        <p className="data_heading_structure">Name:</p> <p className="data_para_structure">{data.missions[0].name} </p>
                                    </Col>
                                    <Col span={12}>
                                        <p className="data_heading_structure">Flight:</p> <p className="data_para_structure">{data.missions[0].flight} </p>
                                    </Col>
                                </Row>)
                                : null
                            }
                        </Card>
                    </Col>
                    )}
                </Row>
            </>
        )
    }
}

export default CapsulesCard;
