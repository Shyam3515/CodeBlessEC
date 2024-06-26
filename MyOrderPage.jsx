import React from "react";
import Table from "../common/Table";
import "./myOrderPage.css";

const MyOrderPage = () => {
  return (
    <section className="align_center myorder_page">
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone, Power Bank</td>
            <td>$1299</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};

export default MyOrderPage;
