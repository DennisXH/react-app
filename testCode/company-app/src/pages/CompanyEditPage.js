import {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router";

export class CompanyEditPage extends Component {
  render() {
    return (
     <div>{this.props.match.params.companyId}</div>
    )
  }
}

export default connect(null, null)(withRouter(CompanyEditPage));