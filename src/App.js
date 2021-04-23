import React from "react";

const viewHeight = 500;
const viewWidth = 500;

const App = () => {
    //return <div>hello world from react</div>;
    return (<svg style={{ border: "1px solid pink", width: 500, height: 500 }}>
            <circle cx={20} cy={20} r="5" />
            <rect x={200} y={100} width="10" height="10" />
            </svg>
    );
};

export default App;