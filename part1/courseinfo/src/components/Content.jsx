import Part from "./Part";

export default function Content({ part, exercise }) {
  return (
    <div>
      <Part part={part} exercise={exercise} />
    </div>
  );
}
