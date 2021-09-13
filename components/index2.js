let element = React.createElement("nav",  { className : 'links'},
                React.createElement("ul", null,
                  React.createElement("li", null,
                    React.createElement("a", { href : "#" },
                      "Home"
                    )
                  )
                )
              );





ReactDOM.render(element,document.querySelector("#root"));
