import React from 'react';

const Screen = (props) => {
  const { index,notice } = props;
  return (
    <div className={index===0 ? "carousel-item active":"carousel-item"}>
      <div class="row">
      <div class="col-md-2">
        
        </div>
        <div class="col-md-8">
          <img class="col-img" src={notice.imageURL} alt="" />
        </div>
        <div class="col-md-2">
          
        </div>
      </div>
    </div>
  );
};

export default Screen;