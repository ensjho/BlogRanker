import React from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

function Vote({postId, votes}){
  let vote;
  let dispatch =  useDispatch();


  return (
    <div>
      {votes}
      <button>
        UP
      </button>
      <button>
        Down
      </button>
    </div>
  )


}

export default Vote;