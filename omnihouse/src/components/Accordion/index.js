import React, { useState } from 'react';
import './accordion.css'
import './../../index.css'
import Icon from './../Icon/index.js'
import Slider from './../Slider/index.js'


const Accordion = (props) => {
  const [expand, setExpand] = useState(props.isExpand);
  const iconStyle ={
      position:'absolute',
      top:'50%',
      transform:'translateY(-50%)',
      marginLeft: '10px'
  }
  return (
    <div className="accordion_box_wrapper">
      <div className="accordion_header_wrapper" onClick={() => setExpand(expand => !expand)}>
        <span className="title white_color">{props.title}</span>
        <Icon style={iconStyle} name={(expand ? "arrowup":"arrowdown")} />
        <div className="rightSection">
            <span className="subtitle red_color">{props.subTitle}</span>
            {
                props.showYesNoButton && 
                <Slider></Slider>
            }
            
        </div>
      </div>
        { expand && 
          <div className="accordion_content">
              { props.subItemsLeftSection.length > 0 &&
                <div className="accordion_content_section accordion_leftcontent">
                {
                    props.subItemsLeftSection.map(item => {
                        return <p className="white_color"><span className="dashed">-</span>{item.title}</p>
                    })
                }
                </div>
              }
              { props.subItemsRightSection.length > 0 &&
                <div className="accordion_content_section accordion_rightcontent">
                {
                    props.subItemsRightSection.map(item => {
                        return <p className="white_color"><span className="dashed">-</span>{item.title}</p>
                    })
                }
                </div>
              }
          </div>
        }
    </div>
  )
}

export default Accordion;