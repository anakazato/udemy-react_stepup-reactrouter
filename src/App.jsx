import "./App.css";
import { PrimaryButton } from "./components/atoms/buttons/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttons/SecondaryButton";

import { SearchInput } from "./components/molecules/SearchInput";

export default function App() {
  return (
    <>
    <div>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput></SearchInput>
    </div>
    </>
  );
}
