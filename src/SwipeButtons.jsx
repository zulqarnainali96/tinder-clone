import React from "react";
import Button from "./components/Button";
import { ReloadOutlined } from '@ant-design/icons'
import { CloseOutlined } from '@ant-design/icons'
import { StarFilled } from '@ant-design/icons'
import { HeartFilled } from '@ant-design/icons'
import { ThunderboltFilled } from '@ant-design/icons'

const SwipeButtons = () => {
  return (
    <div className="swipe-button ">
      <div className="row justify-content-between">
        <div className="col-2 col-lg-2 text-center">
          <Button>
            <ReloadOutlined style={{ fontSize: "50px", color:"gray" }} />
          </Button>
        </div>
        <div className="col-2 col-lg-2 text-center">
          <Button>
            <CloseOutlined style={{ fontSize: "50px", color:"magenta" }} />
          </Button>
        </div>
        <div className="col-2 col-lg-2 text-center">
          <Button>
            <StarFilled style={{ fontSize: "50px", color:"blue" }} />
          </Button>
        </div>
        <div className="col-2 col-lg-2 text-center">
          <Button>
            <HeartFilled style={{ fontSize: "50px",color:'red' }} />
          </Button>
        </div>
        <div className="col-2 col-lg-2 text-center">
          <Button>
            <ThunderboltFilled style={{ fontSize: "50px",color:"purple" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwipeButtons;
