import React from "react";

class Layout extends React.PureComponent {
  render() {
    return (
      <>
        {/* <Header /> */}
        <div>{this.props.children}</div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Layout;
