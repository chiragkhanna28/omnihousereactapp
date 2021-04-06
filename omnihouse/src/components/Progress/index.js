import React, { useState } from 'react';
import './progress.css'
import './../../index.css'

const Progress = (props) => {
    return (
        <div className="progress_wrapper clearfix">
            {
                    props.progressData.map(item => {
                        return <span style={{backgroundColor: `${item.backgroundColor}`}} className={`progess_track margin_progres margin_0 ${item.className}`}></span>
                    })
            }
            <div class="line_wrapper"></div>
        </div>
    )
}

export default Progress;