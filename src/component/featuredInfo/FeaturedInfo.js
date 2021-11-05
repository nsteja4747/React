import React from 'react'
import {ArrowDownward,ArrowUpward} from '@material-ui/icons'
import './FeaturedInfo.css'
function FeaturedInfo() {
    return (
        <div class="featured">
            <div className="featuredItem">
                <span className="featuredMoneyTitle">Revenues</span>
                <div className="featuredMoneyContainer">
                
                    <div className="featuredMoneyControl">
                        <span className="featuredMoney">
                        $2,123
                        </span>
                        <span className="featuredMoneyRate">
                        -11.4  <ArrowDownward className="featuredIcon negative"/>
                        </span>
                    </div>
                </div>
                <span className="featuredSub">Compared to Last Month</span>
            </div>
            
            <div className="featuredItem">
                <span className="featuredMoneyTitle">Sales</span>
                <div className="featuredMoneyContainer">               
                    <div className="featuredMoneyControl">
                        <span className="featuredMoney">
                        $4,415
                        </span>
                        <span className="featuredMoneyRate">
                        -1.4  <ArrowDownward className="featuredIcon negative"/>
                        </span>
                   
                    </div>
                </div>
                <span className="featuredSub">Compared to Last Month</span>

            </div>

            
            <div className="featuredItem">
                <span className="featuredMoneyTitle">Cost</span>
                <div className="featuredMoneyContainer">
               
                    <div className="featuredMoneyControl">
                        <span className="featuredMoney">
                            $2,223
                        </span>
                        <span className="featuredMoneyRate">
                            +2.4  <ArrowUpward className="featuredIcon"/>
                        </span>
                    </div>
                </div>
                <span className="featuredSub">Compared to Last Month</span>

            </div>
           
        </div>
    )
}

export default FeaturedInfo
