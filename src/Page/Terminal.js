
import "../css/App.scss";
import Console from "../Component/Console";

function TerminalPage() {
  return (
    <div className="TerminalPage Page">
        <Console name="cryptanga" machine="CHE" />
    </div>
  );
}

export default TerminalPage;
