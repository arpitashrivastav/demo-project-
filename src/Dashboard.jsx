import {
  Search,
  Sort,
  Download,
  Message,
  DownArrow,
  QnMark,
  Dropdown,
} from "./svgIcons";
import data from "./data.json";
import { useState } from "react";
import DbTable from "./Table";

export default function Dashboard() {
  const [dbSearch, setDbSearch] = useState("");
  const [dbTableSearch, setTableDbSearch] = useState("");

  return (
    <main className="main">
      <div className="dashboard-head">
        <div className="dashboard-head-left">
          <div className="">Payments</div>
          <div className="">
            <QnMark />
            <div>How it Works</div>
          </div>
        </div>
        <div className="input ">
          <Search height="16" width="16" />
          <input
            className="border-light font4"
            placeholder="Search by order ID..."
            value={dbSearch}
            onChange={(e) => setDbSearch(e.target.value)}
          />
        </div>
        <div className="dashboard-head-right">
          <div className="message">
            <Message />
          </div>
          <div className="dropdown">
            <DownArrow width="20" height="14" />
          </div>
        </div>
      </div>
      <div className="dashboard-main">
        <div className="overview-container">
          <h3 className="overview-text font6 bold-500">Overview</h3>
          <div className="last-month font5">
            <div className="text">Last Month</div>
            <div className="btn">
              <Dropdown />
            </div>
          </div>
        </div>
        <div className="overview-content-section">
          <div className="online-count-container">
            <div className="online-order-text font5 dark-charcoal">
              Online orders
            </div>
            <div className="online-order-count font7 bold-500 dark-gray">
              231
            </div>
          </div>

          <div className="online-count-container box-shadow">
            <div className="online-order-text font5 dark-charcoal">
              Amount received
            </div>
            <div className="online-order-count font7 bold-500 dark-gray">
              ₹23,92,312.19
            </div>
          </div>
        </div>
        <div className="transaction-text-container">
          <div className="transaction-text font6 bold-500 dark-gray">
            Transactions | This Month
          </div>
        </div>
        <DbTable />
      </div>
    </main>
  );
}
