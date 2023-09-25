import React from "react";
import { useParams,useNavigate } from "react-router-dom";

const Hook = (Component) =>
  function Comp(props) {
    const param = useParams();
    const navigate = useNavigate();
    return (
      <Component
        {...props}
        param={param}
        navigate={navigate}
      />
    );
  };

export default Hook;