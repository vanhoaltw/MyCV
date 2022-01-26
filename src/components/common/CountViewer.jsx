import React from 'react';
import {ReactComponent as IconViewer} from '../../asset/icons/IconViewer.svg'

const CountViewer = props => {
    const {views} = props
  return <div className='count__viewer'>
      <IconViewer/>
      <span id="views">{views}</span>
      
  </div>;
};

export default CountViewer;
