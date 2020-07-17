import React, { Component } from 'react';
import Header from './../../Components/Header/Header';
import { Tabs } from 'antd';
import CapsulesCard from './../Capsules/CapsulesCard';
import CoreImage from './../../assets/images/core.jpg';
import DragonImage from './../../assets/images/Dragon.jpeg';
import './Dashboard.css';
const { TabPane } = Tabs;

export class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="main_dashboard_container">
                    <div className="categories_tabs">
                        <Header />
                        <Tabs defaultActiveKey="1" className="tab_structure ">
                            <TabPane tab="Capsules" key="1" className="tab_pane_structure">
                                <CapsulesCard />
                            </TabPane>
                            <TabPane tab="Core" key="2" style={{ color: 'white' }}>
                                <p className="coming_soon_text_structure">Coming Soon....</p>
                                <div className="core_img_structure">
                                    <img src={CoreImage} />
                                </div>
                            </TabPane>
                            <TabPane tab="Dragon" key="3" style={{ color: 'white' }}>
                                <p className="coming_soon_text_structure">Coming Soon....</p>
                                <div className="core_img_structure">
                                    <img src={DragonImage} />
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </>
        )
    }
}

export default Dashboard;
