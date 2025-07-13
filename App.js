const heading = React.createElement("h1",{id:"heading1"},"React Series");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/*
<div id="parent">
    <div id="child">
        <h1 id="heading2"></h1>
        <h1 id="heading3"></h1>
    </div>
    <div id="child">
        <h1 id="heading4"></h1>
        <h1 id="heading5"></h1>
    </div>
</div>
*/ 

const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"heading2"},"this is a heading"),React.createElement("h1",{id:"heading3"},"this is another heading")]
    ) , 
    React.createElement("div",{id:"child"},
        [React.createElement("h1",{id:"heading4"},"heading inside another div"),React.createElement("h1",{id:"heading5"},"also heading inside another div")]
    )
);
root.render(parent);


const parent2 = React.createElement("div",{id:"MainDiv"},
    React.createElement("div",{id:"childDiv1"},
        [React.createElement("h1",{id:"heading number 1"},"heading-1"),React.createElement("h1",{id:"heading number 2"},"heading-2")]
    ),
    React.createElement("div",{id:"childDiv2"},
        [React.createElement("h1","heading number 3","heading 3"),React.createElement("h1","heading number 4","heading 4")]
    )
)
root.render(parent2);
console.log(parent);


