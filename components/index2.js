let element = React.createElement("nav",  { className : 'links'},
                React.createElement("ul", null,
                  React.createElement("li", null,
                    React.createElement("a", { href : "#" },
                      "Home"
                    )
                  ),
                  React.createElement("li", null,
                    React.createElement("a", { href : "#" },
                      "Faq"
                    )
                  ),
                  React.createElement("li", null,
                    React.createElement("a", { href : "#" },
                      "About"
                    )
                  )
                )
              );





ReactDOM.render(element,document.querySelector("#root"));
