import React from "react";
import { WechatOutlined } from "@ant-design/icons";
import { FireFilled } from "@ant-design/icons";
import { UserAddOutlined, UserOutlined, UserSwitchOutlined } from "@ant-design/icons";
import Button from "./components/Button";

const Header = () => {
  return (
    <header className="col-12">
      <div className="row justify-content-between">
        <div className="col-4 col-lg-4 ">
          <Button>
            <UserOutlined style={{ fontSize: "50px",color:"grey" }} />
          </Button>
        </div>
        <div className="col-4 col-lg-4 text-center">
          <Button>
            <FireFilled style={{ fontSize: "50px",color:"maroon" }} />
          </Button>
        </div>
        <div className="col-4 col-lg-4 text-right">
          <Button>
            <WechatOutlined style={{ fontSize: "50px", color:"blueviolet" }} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
