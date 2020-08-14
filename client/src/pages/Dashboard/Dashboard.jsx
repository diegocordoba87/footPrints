import React from "react";
import { Tabs } from "@feuer/react-tabs";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="App">
      <Tabs
        tabsProps={{
          style: {
            textAlign: "left"
          }
        }}
        activeTab={{
          id: "tab1"
        }}
      >
        <Tabs.Tab id="tab1" title="Tab 1">
          <div style={{ padding: 10 }}>This is tab 1</div>
        </Tabs.Tab>
        <Tabs.Tab id="tab2" title="Tab 2">
          <div style={{ padding: 10 }}>This is tab 2</div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}
