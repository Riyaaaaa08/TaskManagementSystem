import React from "react";
import StatCard from "../../components/reports/StatCard";
import ProjectProgress from "../../components/reports/ProjectProgress";
import DonutContribution from "../../components/reports/DonutContribution";
import DonutScore from "../../components/reports/DonutScore";
import { FaBug } from "react-icons/fa";


const TesterReports: React.FC = () => {
  return (
    <div className="container" style={{ paddingTop: 30 }}>
    <div style={{ background: "#F7F3FF", minHeight: "100vh" }}>
      <div className="container py-4" style={{ maxWidth: 1200 }}>
        
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="fw-bold m-0">Report</h4>
          
        </div>

 
        <div className="card shadow-sm border-0 mb-3">
          <div className="card-body" style={{ background: "#e9effb" }}>
            <h6 className="fw-bold mb-3">Debugging</h6>
            <div className="row g-3">
              <div className="col-12 col-md-3">
                <StatCard icon={<i className="bi bi-bug-fill text-danger"  />} label="Bugs" value={20} variant="danger"  />
              </div>
              <div className="col-12 col-md-3">
                <StatCard icon={<i className="bi bi-check2-circle text-success" />} label="Tested" value={6} variant="success" />
              </div>
              <div className="col-12 col-md-3">
                <StatCard icon={<i className="bi bi-circle-half text-warning" />} label="In Progress" value={10} variant="warning" />
              </div>
              <div className="col-12 col-md-3">
                <StatCard icon={<i className="bi bi-exclamation-octagon-fill text-danger" />} label="Overdue" value={4} variant="danger" />
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-3">
          <div className="fw-bold small mb-2">Current Project</div>
          <ProjectProgress name="E-commerce Platform" leader="User 1" progress={75} completed={13} remaining={8} />
        </div>

       
        <div className="row g-3">
          <div className="col-12 col-lg-6">
            <DonutContribution
              title="My Contribution"
              segments={[
                { color: "#6c43be", value: 30, label: "E-commerce Platform" },
                { color: "#6CC5A4", value: 20, label: "Mobile app Development" },
                { color: "#f7cf69", value: 18, label: "Security Software" },
                { color: "#ffa6b7", value: 17, label: "Informative Website" },
                { color: "#7dc2ff", value: 15, label: "Database Software" },
              ]}
              legend={[
                { color: "#6c43be", label: "E-commerce Platform" },
                { color: "#6CC5A4", label: "Mobile app Development" },
                { color: "#f7cf69", label: "Security Software" },
                { color: "#ffa6b7", label: "Informative Website" },
                { color: "#7dc2ff", label: "Database Software" },
              ]}
            />
          </div>
          <div className="col-12 col-lg-6">
            <DonutScore
              title="My Score"
              rings={[
                { percent: 80, color: "#6c43be", label: "BDS" },
                { percent: 70, color: "#ff7aa2", label: "PQS" },
                { percent: 60, color: "#f7cf69", label: "BQS" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default TesterReports;
