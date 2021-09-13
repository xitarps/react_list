let element = React.createElement("nav",  { className : 'links-nav'},
                React.createElement("ul", { className : 'links-ul' },
                  React.createElement("li", null,
                    React.createElement("a", { href : "#", className : 'links-a' },
                      "Home"
                    )
                  ),
                  React.createElement("li", null,
                    React.createElement("a", { href : "#", className : 'links-a' },
                      "Faq"
                    )
                  ),
                  React.createElement("li", null,
                    React.createElement("a", { href : "#", className : 'links-a' },
                      "About"
                    )
                  )
                )
              );





ReactDOM.render(element,document.querySelector("#root"));
