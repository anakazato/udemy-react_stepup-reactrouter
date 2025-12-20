import "./App.css";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";

export default function App() {
  return (
    <>
    <div>
    <PrimaryButton>テスト</PrimaryButton>
    <SecondaryButton>検索</SecondaryButton>
    </div>
    </>
  );
}
