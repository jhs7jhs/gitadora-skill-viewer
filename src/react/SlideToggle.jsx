import React from "react";
import styled from "styled-components";

class SlideToggle extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      open: props.defaultOpen
    };
  }

  static defaultProps = {
    defaultOpen: false
  };

  // TODO stop using $
  _toggleDiv = () => {
    $(this.refs["toggle-div"]).slideToggle(400, () => {
      this.setState({ open: !this.state.open });
    });
  };

  render() {
    const SlideToggleDiv = styled.div`
      margin-bottom: 5px;
    `;

    return (
      <SlideToggleDiv>
        <Title onClick={this._toggleDiv}>{this.props.title}</Title>
        <div
          ref="toggle-div"
          style={{ display: this.state.open ? "normal" : "none" }}
        >
          {this.props.children}
        </div>
      </SlideToggleDiv>
    );
  }
}

const Title = styled.h3`
  font-size: 19px;
  height: 35px;
  line-height: 35px;
  font-weight: normal;
  margin: 0;
  color: #ffffff;
  background-color: #333333;

  @media (max-width: 742px) : {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
  }
`;

export default SlideToggle;
