import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Layout from "../componet/Layout";

function Services() {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { key: "tab1", label: "Tab 1", content: "This is Tab 1 content" },
    { key: "tab2", label: "Tab 2", content: "This is Tab 2 content" },
    { key: "tab3", label: "Tab 3", content: "This is Tab 3 content" },
  ];
  return (
    <Layout>
      <Container className="mt-4">
        <Row>
          {/* Left Side List */}
          <Col md={4}>
            <ListGroup>
              {tabs.map((tab) => (
                <ListGroup.Item
                  key={tab.key}
                  active={activeTab === tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  style={{ cursor: "pointer" }}
                >
                  {tab.label}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          {/* Right Side Content */}
          <Col md={8}>
            {tabs.map(
              (tab) =>
                activeTab === tab.key && (
                  <div key={tab.key} className="p-3 border rounded">
                    {tab.content}
                  </div>
                )
            )}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Services;
