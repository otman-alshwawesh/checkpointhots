import React from 'react'
import { Rate } from 'antd';

function Rating(props) {
  return (
    <div>
        <Rate disabled defaultValue={props.rt} />
    </div>
  )
}

export default Rating