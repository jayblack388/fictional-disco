import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { Tabs } from "./Tabs";
class RouteTabs extends Component {
  state = {
    selectedIndex: 0
  };
  onSelect = tabIndex => {
    const { routes, history } = this.props;
    this.setState({ selectedIndex: tabIndex });
    history.push(routes[tabIndex]);
  };
  render() {
    const { labels, children, match, routes, tabIndex } = this.props;
    const currentTab = match.params.tab
    const mappedRoutesToTabs = routes.map(route => route.split("/")[tabIndex]);
    const currentTabIndex = mappedRoutesToTabs.indexOf(currentTab);
    return (
      <Tabs
        selectedIndex={currentTabIndex > 0 ? currentTabIndex : 0}
        onSelect={this.onSelect}
        labels={labels}
      >
        {children}
      </Tabs>
    );
  }
}
RouteTabs.propTypes = {
  labels: PropTypes.array.isRequired,
  routes: PropTypes.array.isRequired
};
export default withRouter(RouteTabs);
