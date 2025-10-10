import React, { useState } from "react";

export type NewMember = {
  name: string;
  email: string;
  role: "Developer" | "Tester";
};

type Props = {
  onCancel: () => void;
  onCreate: (data: {
    teamName: string;
    members: NewMember[];
    leaderEmail: string;
  }) => void;
};

const emptyMember = (): NewMember => ({ name: "", email: "", role: "Developer" });

const CreateTeamCard: React.FC<Props> = ({ onCancel, onCreate }) => {
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState<NewMember[]>([emptyMember(), emptyMember()]);
  const [leaderEmail, setLeaderEmail] = useState("");

  const canAdd = members.length < 6;
  const canRemove = members.length > 1;

  const updateMember = (i: number, patch: Partial<NewMember>) => {
    setMembers((prev) => prev.map((m, idx) => (idx === i ? { ...m, ...patch } : m)));
  };

  const addMember = () => setMembers((prev) => [...prev, emptyMember()]);
  const removeMember = (i: number) => setMembers((prev) => prev.filter((_, idx) => idx !== i));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const validMembers = members.filter((m) => m.name && m.email);
    if (!teamName || validMembers.length === 0) return;
    const leader = leaderEmail || validMembers[0]?.email || "";
    onCreate({ teamName, members: validMembers, leaderEmail: leader });
  };

  return (
    <div className="tm-card tm-block">
      <h4 className="tm-section-title" style={{ marginBottom: 12 }}>Create Team</h4>
      <form onSubmit={submit} className="tm-create-form">
        <div className="tm-form-row">
          <label className="tm-form-label">Team name</label>
          <input
            className="tm-input"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter team name"
          />
        </div>

        <div className="tm-form-row">
          <label className="tm-form-label">Members</label>
          <div className="tm-members-grid">
            {members.map((m, i) => (
              <div className="tm-member" key={i}>
                <input
                  className="tm-input"
                  placeholder="Full name"
                  value={m.name}
                  onChange={(e) => updateMember(i, { name: e.target.value })}
                />
                <input
                  className="tm-input"
                  placeholder="Email"
                  value={m.email}
                  onChange={(e) => updateMember(i, { email: e.target.value })}
                />
                <select
                  className="tm-input"
                  value={m.role}
                  onChange={(e) =>
                    updateMember(i, { role: e.target.value as "Developer" | "Tester" })
                  }
                >
                  <option value="Developer">Developer</option>
                  <option value="Tester">Tester</option>
                </select>
                {canRemove ? (
                  <button type="button" className="tm-btn tm-btn-ghost" onClick={() => removeMember(i)}>
                    Remove
                  </button>
                ) : null}
              </div>
            ))}
          </div>
          {canAdd ? (
            <button type="button" className="tm-btn tm-btn-secondary" onClick={addMember}>
              + Add member
            </button>
          ) : null}
        </div>

        <div className="tm-form-row">
          <label className="tm-form-label">Team leader</label>
          <select
            className="tm-input"
            value={leaderEmail}
            onChange={(e) => setLeaderEmail(e.target.value)}
          >
            <option value="">Select leader</option>
            {members
              .filter((m) => m.name && m.email)
              .map((m, i) => (
                <option key={i} value={m.email}>
                  {m.name} ({m.email})
                </option>
              ))}
          </select>
        </div>

        <div className="tm-form-actions">
          <button type="button" className="tm-btn tm-btn-ghost" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="tm-btn tm-btn-primary">
            Save Team
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTeamCard;
