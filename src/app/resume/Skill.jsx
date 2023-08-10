// Skill.jsx

export default function Skill({ names }) {
  return (
    <div>
      {names.map((name) => (
        <p key={name}>{name}</p>
      ))}
    </div>
  );
}
