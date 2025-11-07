
import ProductCard from "./ProductCard";
import { useState } from "react";

export default function ProductGrid({ products }) {
  const [open, setOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true); // 👈 sidebar visibility
  const [expanded, setExpanded] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const toggleDropdown = () => setOpen(!open);
  const toggleSection = (key) => {
    setExpanded({ ...expanded, [key]: !expanded[key] });
  };
  const toggleSidebar = () => setShowSidebar(!showSidebar); // 👈 toggle sidebar visibility

  return (
    <div>
      {/* 🔹 Filter Bar */}
      <div className="filter-bar">
        <div className="left">
          <strong>3425 ITEMS</strong>
          <span className="hide-filter" onClick={toggleSidebar}>
            <i className={`ri-arrow-${showSidebar ? "left" : "right"}-s-line`}></i>{" "}
            {showSidebar ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </div>

        <div className="right">
          <div className="dropdown">
            <div className="dropdown-btn" onClick={toggleDropdown}>
              RECOMMENDED <i className="ri-arrow-down-s-line"></i>
            </div>

            {open && (
              <div className="dropdown-content">
                <p>✔ RECOMMENDED</p>
                <p>NEWEST FIRST</p>
                <p>POPULAR</p>
                <p>PRICE : HIGH TO LOW</p>
                <p>PRICE : LOW TO HIGH</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔹 Sidebar + Product Grid */}
      <div className="product-grid-container">
        <div style={{ display: "flex" }}>
          {/* Sidebar */}
          {showSidebar && (
            <div className="sidebar">
              <div className="filter-item">
                <label>
                  <input type="checkbox" /> CUSTOMIZABLE
                </label>
              </div>

              <div className="filter-section">
                <div
                  className="section-header"
                  onClick={() => toggleSection("idealFor")}
                >
                  <span>IDEAL FOR</span>
                  <span>{expanded.idealFor ? "▲" : "▼"}</span>
                </div>
                {expanded.idealFor && (
                  <div className="section-body">
                    <p className="select-all">Unselect all</p>
                    <label>
                      <input type="checkbox" /> Men
                    </label>
                    <label>
                      <input type="checkbox" /> Women
                    </label>
                    <label>
                      <input type="checkbox" /> Baby & Kids
                    </label>
                  </div>
                )}
              </div>

              {[
                "OCCASION",
                "WORK",
                "FABRIC",
                "SEGMENT",
                "SUITABLE FOR",
                "RAW MATERIALS",
                "PATTERN",
              ].map((section, i) => {
                const key = section.toLowerCase().replace(/ /g, "");
                return (
                  <div className="filter-section" key={i}>
                    <div
                      className="section-header"
                      onClick={() => toggleSection(key)}
                    >
                      <span>{section}</span>
                      <span>{expanded[key] ? "▲" : "▼"}</span>
                    </div>
                    {expanded[key] && (
                      <div className="section-body">
                        <p>All</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Product Grid */}
          <div
            className="product-grid"
            style={{
              flex: 1,
              transition: "all 0.3s ease",
            }}
          >
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
