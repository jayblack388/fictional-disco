import React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const { string, element, arrayOf, oneOfType } = PropTypes;

/**
 * Accessible tabs using `react-tabs` with shorthand syntax.
 * Use Tabs, TabList, TabPanel, and Tab if you need to customize the tabs.
 *
 * @class      MyTabs
 * @see {@link http://reactcommunity.org/react-tabs/%7CReact Tabs}
 * @param      {React Properties}  props
 * @example
 * // Shorthand syntax
 * <JBTabs labels={['Tab 1', 'Tab 2']}>
 *  <div className="tab-1-contents">This will be wrapped by TabPanel</div>
 *  <div className="tab-2-contents">This will be wrapped by TabPanel</div>
 * </JBTabs>
 * @example
 * // Syntax to use `react-tabs` directly
 * <Tabs>
 *  <TabList className="custom-tablist">
 *    <Tab className="custom-tab">Tab 1</Tab>
 *    <Tab className="custom-tab">Tab 2</Tab>
 *  </TabList>
 *  <TabPanel className="tab-1-panel">contents</TabPanel>
 *  <TabPanel className="tab-2-panel">contents</TabPanel>
 * </Tabs>
 * @return     {<Tabs><TabList>{labels}</TabList>{children}</Tabs>}
 */
function JBTabs(props) {
  const {
    labels,
    children,
    className,
    listClassName,
    tabClassName,
    panelClassName,
    ...passed
  } = props;

  return (
    <Tabs className={`jb-tabs ${className}`} {...passed}>
      {/* TabList and Tab items based on labels property */}
      {labels.length && (
        <TabList className={`jb-tablist ${listClassName}`}>
          {labels.map((label, ind) => (
            // eslint-disable-next-line react/no-array-index-key
            <Tab className={`jb-tab ${tabClassName}`} key={ind}>
              {label}
            </Tab>
          ))}
        </TabList>
      )}
      {/* wrap children in TabPanels */}
      {children.map((child, ind) => (
        // eslint-disable-next-line react/no-array-index-key
        <TabPanel className={`jb-tabpanel ${panelClassName}`} key={ind}>
          {child}
        </TabPanel>
      ))}
    </Tabs>
  );
}

JBTabs.propTypes = {
  className: string,
  labels: arrayOf(oneOfType([string, element])).isRequired,
  listClassName: string,
  tabClassName: string,
  panelClassName: string,
  // Forbid react-tabs children in our Tabs component
  children(props, propName, componentName) {
    React.Children.forEach(props.children, el => {
      if ([TabPanel, TabList, Tab].indexOf(el.type) >= 0) {
        throw new Error(
          `${componentName} cannot have TabList, Tab, or TabPanel children. Use Tabs instead of JBTabs.`
        );
      }
    });
  }
};

JBTabs.defaultProps = {
  children: [],
  className: "",
  listClassName: "",
  tabClassName: "",
  panelClassName: ""
};

// Rebrand classes of `react-tabs` components
Tabs.defaultProps.disabledTabClassName = "disabled";
Tabs.defaultProps.selectedTabClassName = "active";
Tabs.defaultProps.selectedTabPanelClassName = "active";
Tabs.defaultProps.className = "jb-tabs";
TabList.defaultProps.className = "jb-tablist";
Tab.defaultProps.className = "jb-tab";
TabPanel.defaultProps.className = "jb-tabpanel";

// Export the `react-tabs` components
export { JBTabs as default, TabList, TabPanel, Tab, Tabs };
