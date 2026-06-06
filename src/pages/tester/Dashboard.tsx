import React, { useState } from "react";
import ProjectCard from "../../components/tester/ProjectCard";
import BugList from "../../components/tester/BugList";
import CommentsSection from "../../components/tester/CommentsSection";

const initialBugs = [
  {
    id: 1,
    title: "Delayed navigation",
    desc: "Navigation is not smooth and proper",
    project: "E-commerce Platform",
    due: "Sep 5,2025",
    status: "Active",
    priority: "High",
  },
  {
    id: 2,
    title: "Slow loading of the dashboard",
    desc: "Dashboard loading slowly",
    project: "E-commerce Platform",
    due: "Sep 5,2025",
    status: "Resolved",
    priority: "Medium",
  },
  {
    id: 3,
    title: "CSS Bug",
    desc: "Improve css",
    project: "E-commerce Platform",
    due: "Sep 5,2025",
    status: "Pending",
    priority: "Low",
  },
];

const initialComments = [
  {
    author: "john.frontend",
    datetime: "2025-01-16",
    text: "Looking into this issue. Seems like the validation library is not working correctly.",
  },
];

const Dashboard: React.FC = () => {
  const [comments, setComments] = useState(initialComments);

  const addComment = (comment: string) => {
    if (comment.trim()) {
      setComments([
        ...comments,
        {
          author: "Riya Panchal",
          datetime: new Date().toISOString().slice(0, 10),
          text: comment,
        },
      ]);
    }
  };

  return (
    <div className="app-main">
      <div className="container-fluid py-4 px-3 px-md-4">
        <div className="mx-auto" style={{ maxWidth: 1280 }}>
          <div className="container" style={{ paddingTop: 20 }}>
            <div className="mb-4">
              <h3 className="fw-bold mb-3">Current Project</h3>
              <div className="project-card bg-white rounded shadow-sm p-3">
                <ProjectCard
                  name="E-commerce Platform"
                  leader="User 1"
                  progress={75}
                  completed={13}
                  remaining={8}
                />
              </div>
            </div>

            <div className="mb-4">
              <h4 className="fw-bold mb-3">Bugs</h4>
              <div className="bug-list bg-white rounded shadow-sm p-3">
                <BugList bugs={initialBugs} />
              </div>
            </div>

            <div>
              <h4 className="fw-bold mb-3">Comments</h4>
              <div className="comments-section bg-white rounded shadow-sm p-3">
                <CommentsSection
                  comments={comments}
                  onAddComment={addComment}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
